
const { ccclass, property } = cc._decorator;

@ccclass
export default class UIJumpText extends cc.Component {

    @property(cc.Label)
    numLab: cc.Label = null;
    @property
    prefix: string = "";

    public get string(): number {
        return this._strNum;
    }
    public set string(v: number) {
        this.setText(v);
    }

    private _strNum: number = 0;
    public get strNum(): number {
        return this._strNum;
    }
    public set strNum(v: number) {
        this._strNum = Math.round(v);
        this.numLab.string = this._strNum + this.prefix;
    }

    onLoad() {
        this.node.tss = this;
        if (!this.numLab) this.numLab = this.node.getComponent(cc.Label);
    }
    start() {
        this._strNum = parseInt(this.numLab.string);
    }

    setText(v) {
        cc.tween(this).to(1, { strNum: v }, { easing: 'sineOut' }).start();
    }

}
