const { ccclass, property } = cc._decorator;

@ccclass
export default class 材料 extends cc.Component {

    @property(cc.Node)
    private item: cc.Node = null;
    @property(cc.Label)
    private numFont: cc.Label = null;

    onLoad() {
        this.node.tss = this;
    }

    setData(data) {
        this.numFont.string = `${data.num}`;
        this.item.tss.check = data.type;
        this.node.setPosition(data.inp);
        this.node.runAction(cc.sequence(cc.fadeIn(0.1), cc.spawn(cc.moveBy(1, 0, 80), cc.fadeOut(1)), cc.callFunc(this.onClose.bind(this))));
    }

    onClose() {
        this.node.destroy();
    }

    // update (dt) {}
}
