import { Tools } from "../../module/Tools";
import UIWindows from "../../module/ui/UIWindows";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameBack extends UIWindows {

    @property(cc.Node)
    backGame: cc.Node = null

    onLoad() {
        super.onLoad();

        this.backGame.on(cc.Node.EventType.TOUCH_END, this.onBackGame, this)
    }

    start() {
        Global.Event.emit("游戏暂停")
        // this.playBanner()
    }

    onBackGame() {
        super.removeFromUI()
        zs.Native.TrackEvent("继续游戏")
        Global.Event.emit("游戏继续")
        Global.Event.emit("打点_发送事件", "继续游戏")
    }

    /** 前置补0 */
    addPreZero(num) {
        return ('000000000' + num).slice(-3);
    }

    removeFromUI(): void {
        super.removeFromUI()

        // Global.Event.emit("打点_局离开", `第${Tools.DataMgr.gameOverCount + 1}局离开`)

        Global.Event.emit("打点_局状态", `第${this.addPreZero(Tools.DataMgr.gameOverCount + 1)}局`, "离开")

        Global.Event.emit("返回大厅")
        zs.Native.TrackEvent("返回大厅")
        zs.Native.ShowInsertAd();
    }


}
