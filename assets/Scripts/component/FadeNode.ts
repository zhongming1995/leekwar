
const { ccclass, property } = cc._decorator;

@ccclass
export default class FadeNode extends cc.Component {

    @property({ type: cc.Float })
    public aniTime = 0.5;

    @property({ type: cc.Float })
    public minOpacity = 0

    @property({ type: cc.Float })
    public maxOpacity = 255

    @property({ type: cc.Boolean })
    public sync = false

    onLoad() {

    }

    start() {
        if (!this.sync) {
            this.node.runAction(cc.repeatForever(cc.sequence(
                cc.fadeTo(this.aniTime, this.minOpacity),
                cc.fadeTo(this.aniTime, this.maxOpacity),
            )))
        }

    }

    index: number = 0;
    update(dt) {// 随风飘荡的效果
        if (this.sync && this.index % 2 == 0) {
            let a = this.maxOpacity - this.minOpacity//A（振幅）来改变曲线的值域（值域为 [-A, A]）
            let w = this.aniTime  //ω（角速度）来改变曲线的周期：
            let t = new Date().getTime() / 1000 //时间周期性变化
            let k = 1 //（初相）来改变曲线的水平位置
            this.node.opacity = this.minOpacity + Math.abs(a * Math.sin(w + k * t))
        }
    }



}
