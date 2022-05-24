/**
 * 目前引擎的实现是每个粒子系统保存自己的粒子属性，有自己的InputAssembler (IA)，在渲染时直接提交自己IA里的数据。
 * 这里合批的做法是将IA里的数据拷贝到公共buffer里统一提交。
 * 
 * 能够合批的前提
 *  1.粒子系统之间不穿插其他的渲染组件，如果粒子系统挂在其他节点下面，需要考虑给粒子单独分层
 *  2.粒子系统使用相同的纹理、PositionType、Blend Mode
 * 注意事项
 *  1.该实现增加了IA数据拷贝次数
 *  2.粒子系统合批需要将多个粒子系统的数据集中存放，一起提交，所以会增加内存峰值
 * 
 * 综上，对于粒子数量比较多的场合，是否合批需要权宜考虑。
*/
export default class ParticlesBatch {
    protected _originFillBuffersFn = null;

    /** 开启粒子合批 */
    Batching() {
        if (this._originFillBuffersFn) {
            // 已经开启合批
            return;
        }

        //@ts-ignore
        let particleAssembler = cc.ParticleSystem.__assembler__;

        // 保存原fillBuffers函数，并替换
        this._originFillBuffersFn = particleAssembler.prototype.fillBuffers;
        particleAssembler.prototype.fillBuffers = function(comp, renderer) {
            if (!this._ia) return;
    
            let simulator = comp._simulator;
            let particleCount = simulator.particles.length;
            if (particleCount === 0)
                // 粒子数量为0，无需渲染
                return;
    
            const PositionType = cc.ParticleSystem.PositionType;
            if (comp.positionType === PositionType.RELATIVE) {
                renderer.node = comp.node.parent;
            } else {
                renderer.node = comp.node;
            }
            
            // ownBuffer是粒子系统自己保存顶点数据的buffer
            let ownBuffer = this.getBuffer();

            // commitBuffer是将所有粒子系统数据合并后一起提交GPU的buffer
            //@ts-ignore
            let commitBuffer = cc.renderer._handle._meshBuffer;

            // 在commitBuffer里申请一段空间用于存放当前粒子系统的顶点数据
            let offsetInfo = commitBuffer.request(particleCount * 4, particleCount * 6);
    
            let vertexOffset = offsetInfo.byteOffset >> 2,
                vbuf = commitBuffer._vData;
    
            let vData = ownBuffer._vData,
                iData = ownBuffer._iData;
    
            // 从ownBuffer拷贝顶点属性到commitBuffer
            let vLen = particleCount * 4 * 5;   // 5 = FloatsPerVertex
            if (vLen + vertexOffset > vbuf.length) {
                vbuf.set(vData.subarray(0, vbuf.length - vertexOffset), vertexOffset);
            } else {
                vbuf.set(vData.subarray(0, vLen), vertexOffset);
            }
    
            // 从ownBuffer拷贝顶点索引到commitBuffer
            let ibuf = commitBuffer._iData,
                indiceOffset = offsetInfo.indiceOffset,
                vertexId = offsetInfo.vertexOffset;
            let iLen = particleCount * 6;
            for (let i = 0; i < iLen; i++) {
                ibuf[indiceOffset++] = vertexId + iData[i];
            }
        };    
    }

    /** 恢复默认合批 */
    Recover() {
        if (!this._originFillBuffersFn) {
            return;
        }

        // 替换回原来的fillBuffers函数
        //@ts-ignore
        cc.ParticleSystem.__assembler__.prototype.fillBuffers = this._originFillBuffersFn;
        this._originFillBuffersFn = null;
    }

}
