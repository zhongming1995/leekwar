
const { ccclass, property } = cc._decorator;

@ccclass
export default class UIButton extends cc.Component {

    @property({ tooltip: '是否播放声音' })
    private isSound: boolean = true;

    @property({ tooltip: '是否启用小动画' })
    private isAnima: boolean = false;

    @property({ tooltip: '是否启用点击效果' })
    private isAction: boolean = true;

    @property({ type: cc.Integer, tooltip: '点击效果,0没有,1放大,2下沉' })
    private btnType = 0;

    @property({ type: cc.Integer, tooltip: '动画效果,0放大,1晃动' })
    private actionType = 0;

    @property({ type: cc.Float, tooltip: '点击效果的放大倍数' })
    private zoomScale = 1.1;

    @property({ type: cc.Integer, tooltip: '点击效果下沉距离' })
    private zoomOffset = 4;

    private scaleX: number = 0;
    private scaleY: number = 0;

    onLoad() {
        this.node.ts = this;
        this.node.on('touchstart', this.touchstart, this);
        this.node.on('touchend', this.touchend, this);
        this.node.on('touchcancel', this.touchcancel, this);
    }

    start() {
        this.scaleX = this.node.scaleX;
        this.scaleY = this.node.scaleY;
        if (this.isAnima) this.playAnima();
    }

    touchstart(e) {
        if (!this.isAction || !this.btnType) return;
        if (this.btnType == 1) {
            cc.tween(this.node).to(0.1, { scaleX: this.zoomScale * this.scaleX, scaleY: this.zoomScale * this.scaleY }).start();
        } else if (this.btnType == 2) {
            this.node.y -= this.zoomOffset;
        }
    }

    touchend(e) {
        this.touchcancel(e);
        this.playMusic();
    }

    touchcancel(e) {
        if (!this.isAction || !this.btnType) return;
        if (this.btnType == 1) {
            cc.tween(this.node).to(0.1, { scaleX: this.scaleX, scaleY: this.scaleY }).start();
        } else if (this.btnType == 2) {
            this.node.y += this.zoomOffset;
        }
    }

    playMusic() {
        if (!this.isSound) return;
        Global.Audio.playSound('按钮');
    }

    playAnima() {
        if (this.actionType == 0) {
            let x1 = this.scaleX * 1.2;
            let y1 = this.scaleY * 1.2;
            let x2 = this.scaleX;
            let y2 = this.scaleY;
            this.node.stopAllActions();
            let action = cc.repeatForever(cc.sequence(
                cc.delayTime(Math.random()),
                cc.scaleTo(0.2, x1, y1),
                cc.scaleTo(0.2, x2, y2),
                cc.scaleTo(0.2, x1, y1),
                cc.scaleTo(0.2, x2, y2),
                cc.scaleTo(0.2, x1, y1),
                cc.scaleTo(0.2, x2, y2),
                cc.delayTime(Math.random() + 1)
            ));
            this.node.runAction(action);
        } else if (this.actionType == 1) {
            let action = cc.repeatForever(cc.sequence(
                cc.delayTime(Math.random()),
                cc.rotateTo(0.1, 5),
                cc.rotateTo(0.2, -5),
                cc.rotateTo(0.2, 5),
                cc.rotateTo(0.2, -5),
                cc.rotateTo(0.2, 5),
                cc.rotateTo(0.1, 0),
                cc.delayTime(Math.random() + 1)
            ));
            this.node.runAction(action);
        }
    }
}
