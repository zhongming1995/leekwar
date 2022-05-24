import { Tools } from "../../module/Tools";
import UIWindows from "../../module/ui/UIWindows";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AlertClick extends UIWindows {

    @property(cc.Node)
    hand: cc.Node = null;
    @property(cc.Node)
    clickBtn: cc.Node = null;
    @property(cc.Sprite)
    progress1: cc.Sprite = null;
    @property(cc.Sprite)
    progress2: cc.Sprite = null;
    @property(cc.Node)
    daoliu: cc.Node = null;

    data: any = null;
    meatArr = [];
    dionItem1: cc.Node = null;
    dionItem2: cc.Node = null;
    isShow: boolean = false;
    index: number = 0;
    clickNow: number = 1000;
    clickCheck: number = 500;
    clickMax: number = 1000;
    /**每次点击调用 */
    clickCB: Function = null;
    /**狂点完成调用 */
    actionCB: Function = null;

    isShowBanner: boolean = false;

    isAnima: boolean = false;

    isOver: boolean = false;

    onLoad() {
        super.onLoad();
        this.scheduleOnce(() => {
            this.isOver = true;
        }, 0.5)

        this.daoliu.active = !Tools.DataBase.noShowUI;

        this.clickBtn.on('touchend', this.onClick1, this);
        Global.Event.on('onShow', this.onContinu, this);

        this.isShowBanner = !Tools.DataBase.isCheck;
    }

    //动画播放完成
    onPlayComplete() {

    }

    onDestroy() {
        Global.Event.removeAllListeners(this);
    }

    start() {
        this.closeBtn.active = false;
        this.scheduleOnce(() => { this.closeBtn.active = true; }, 3);
        this.clickCheck = Math.random() * 400 + 300;
        this.hand.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5, -50, 0), cc.moveBy(0.5, 50, 0))));
        this.showView();
    }

    setData(data) {
        this.data = data;
        this.closeCB = data.closeCB;
        this.clickCB = data.clickCB;
        this.actionCB = data.actionCB;
    }

    onClick1() {

        this.clickCB && this.clickCB();
        this.clickNow -= 120;
        // if (this.clickNow < 0) {
        //     this.onContinu();
        // }
        // if (this.clickNow >= this.clickCheck && !this.isShow) {

        if (this.clickNow <= 0) {
            this.isShowBanner = false;
            (Global.Platform.isWeb || !this.isShowBanner) && this.onContinu();
        }

        if ((this.clickNow <= this.clickMax * 0.8 || this.clickNow <= this.clickMax * 0.2) && !this.isShow) {
            this.isShow = true;
            this.isShowBanner && this.banner.tss.Show();
            this.scheduleOnce(() => {
                this.banner.tss.Hide();
                this.isShow = false;
            }, 2);
        }
        this.playAnima();
    }

    showView() {
        this.dionItem1 = Global.Loader.getInstantiate('dinosaur/click_DinosaurShow' + (Math.floor(Math.random() * 3) + 1));
        this.dionItem1.x = -320;
        this.dionItem1.y = -63;

        this.dionItem2 = Global.Loader.getInstantiate('dinosaur/DinosaurShow' + (Math.floor(Math.random() * 3) + 1));
        this.dionItem2.x = 320;
        this.dionItem2.y = -133;
        this.node.addChild(this.dionItem2);
        this.node.addChild(this.dionItem1);

    }

    playAnima() {

    }

    onContinu() {
        console.log('!this.isOver', !this.isOver);

        if (!this.isOver) return;

        this.actionCB && this.actionCB();
        this.removeFromUI();
    }

    update(dt) {
        this.clickNow += 4;
        if (this.clickNow > this.clickMax) this.clickNow = this.clickMax;
        this.progress2.fillRange = this.clickNow / this.clickMax;
    }

}
