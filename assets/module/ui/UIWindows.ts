import { Tools } from "../Tools";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIWindows extends cc.Component {

    @property(cc.Node)
    banner: cc.Node = null;
    @property(cc.Node)
    closeBtn: cc.Node = null;

    isPlayEnd: boolean = true;

    /**关闭时调用 */
    closeCB: Function = null;

    onLoad() {
        this.node.tss = this;
        this.node.on('onEnterWindow', this.onEnterWindow, this);
        this.node.on('onExitWindow', this.onExitWindow, this);
        this.closeBtn && this.closeBtn.on('touchend', this.removeFromUI, this);
        // if (!Global.Platform.isWechat && this.node.name == 'GameOver') {
        //     cc.find('label', this.closeBtn).getComponent(cc.Label).string = '继续游戏';
        // }
        // if (this.node.name == 'GameRevive') {
        //     this.closeBtn.active = false;
        // }
    }

    onDestroy() {
        Global.Event.removeAllListeners(this);
    }

    setData(...params) {

    }

    playBanner(closeBtnY?, showBanner: boolean = true) {
        // if (this.banner) {
        //     this.isPlayEnd = false;
        //     this.closeBtn.rePosY = this.closeBtn.y

        //     if (!Tools.DataBase.isCheck) {

        //         this.scheduleOnce(() => {
        //             let wPos = cc.v2(0, 100)
        //             let curJumpPos = this.closeBtn.parent.convertToNodeSpaceAR(wPos)
        //             this.closeBtn.y = curJumpPos.y;
        //         }, 0.1);

        //         this.scheduleOnce(() => {
        //             this.banner.tss.Show();
        //             this.scheduleOnce(() => {
        //                 this.isPlayEnd = true;
        //                 if (closeBtnY) {
        //                     this.closeBtn.y = closeBtnY;
        //                 } else {
        //                     this.closeBtn.y = this.closeBtn.rePosY;
        //                 }
        //             }, 1);
        //         }, 2);
        //     } else {
        //         this.closeBtn.y = this.closeBtn.rePosY;
        //         this.scheduleOnce(() => {
        //             this.isPlayEnd = true;
        //             showBanner && this.banner.tss.Show();
        //         }, 0.1);
        //     }
        // } else {
        //     this.isPlayEnd = true;
        // }

    }

    onEnterWindow() {

    }

    onExitWindow() {
        !!this.node && this.node.destroy();
    }

    removeFromUI() {
        zs.Native.HideBanner();
        console.log("this.isPlayEnd", this.isPlayEnd);
        console.log(this.closeCB, 'this.closeCB');

        if (!this.isPlayEnd) return;
        Global.UIManger.popWindow(this.node);
        if (this.closeCB) this.closeCB();
    }

}
