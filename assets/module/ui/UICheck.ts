
const { ccclass, property } = cc._decorator;

@ccclass
export default class UICheck extends cc.Component {
    @property
    private _check: number = 0;
    @property(cc.Integer)
    public checkID: number = 0;
    @property({ type: cc.Integer })
    public get check(): number {
        return this._check;
    }
    public set check(num: number) {
        this._check = num;
        this.selectNode();
    }
    onLoad() {
        this.node.ck = this;
        this.node.on('touchend', this.onClick, this);
        this.selectNode();
    }
    selectNode() {
        this.node.children.forEach((item, i) => {
            !!item && (item.active = this._check == i);
        });
    }
    onClick() {
        this.node.emit('onCheck', this.checkID);
    }
}
