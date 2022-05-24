
const { ccclass, property } = cc._decorator;

@ccclass
export default class Loadder extends cc.Component {

    @property(cc.Sprite)
    proBar: cc.Sprite = null;
    @property(cc.Node)
    proIcon: cc.Node = null;
    @property(cc.Label)
    proLab: cc.Label = null;

    loadNum: number = 0;
    tempNum: number = 0;
    showNum: number = 0;

    onLoad() {
        this.node.tss = this;
    }

    setProNum(a = 100, b = 100) {
        if (!b || a == null) { a = 100, b = 100 }
        this.loadNum = (a / b) || 0;
    }

    setProString() {
        this.proLab.string = Math.round(this.showNum * 100) + '%';
        this.proBar.fillRange = this.showNum;
        this.proIcon.x = this.proBar.node.width * (this.showNum - 0.5);
    }

    reset(num = 0) {
        this.tempNum = 0;
        this.showNum = 0;
        this.setProNum(num, 100);
        this.setProString();
    }

    update() {
        this.showNum = Math.max(this.loadNum, this.tempNum);
        this.setProString();
        if (this.tempNum < 0.9) this.tempNum += 0.004;
    }

}
