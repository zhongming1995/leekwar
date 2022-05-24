
const { ccclass, property } = cc._decorator;

@ccclass
export default class FlapNode extends cc.Component {

    @property({ type: cc.Float })
    public moveTime = 0.5;

    @property()
    public moveOffset = cc.v2(0, 10)

    @property({ type: cc.Boolean })
    public sync = false

    onLoad() {

    }

    nodeX: number = 0;
    nodeY: number = 0
    start() {
        this.nodeX = this.node.x
        this.nodeY = this.node.y
        if (!this.sync) {
            this.node.runAction(cc.repeatForever(cc.sequence(
                cc.moveBy(this.moveTime, cc.v2(this.moveOffset.x, this.moveOffset.y)),
                cc.moveBy(this.moveTime, cc.v2(-this.moveOffset.x, -this.moveOffset.y)),
                cc.moveBy(this.moveTime, cc.v2(-this.moveOffset.x, -this.moveOffset.y)),
                cc.moveBy(this.moveTime, cc.v2(this.moveOffset.x, this.moveOffset.y))
            )))
        }
    }

    update(dt) {
        if (this.sync) {
            let t = new Date().getTime() / (400 * this.moveTime) //时间周期性变化
            let flag = Math.sin(t)
            this.node.x = this.nodeX + this.moveOffset.x * flag
            this.node.y = this.nodeY + this.moveOffset.y * flag
        }
    }



}
