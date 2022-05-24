
const { ccclass, property } = cc._decorator;

@ccclass
export default class UIAlert extends cc.Component {

    @property({ tooltip: '光', type: cc.Node })
    light: cc.Node = null;

    @property
    speed: number = 2;
    @property
    space: number = 100;

    pointX = 0;

    onLoad() {
        this.pointX = this.node.width / 2 + 70;
        this.light.x = -this.pointX;
    }

    update(dt) {
        this.light.x += this.speed;
        if (this.light.x > this.pointX) this.light.x = -this.pointX;
    }

}
