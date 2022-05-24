// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import UIWindows from "../../module/ui/UIWindows";

const { ccclass, property } = cc._decorator;

@ccclass
export default class OffLine extends UIWindows {

    @property(cc.Label)
    goldCount: cc.Label = null

    @property(cc.Node)
    videoGet: cc.Node = null


    onLoad(): void {
        super.onLoad()

        this.videoGet.on(cc.Node.EventType.TOUCH_END, this.onVideoClick, this)
    }

    protected start(): void {
        this.initView()
    }

    initView() {
        this.goldCount.string = "" + Tools.DataBase.getOffLineTime().min

    }

    onVideoClick() {
        zs.Native.PlayVideo(()=>{
            Tools.DataBase.addGold1(Tools.DataBase.getOffLineTime().min * 3)
            Tools.DataBase.saveTime2 = Date.now();
            Global.Event.emit("刷新离线金币")
            super.removeFromUI()
            zs.Native.TrackEvent("离线收益三倍视频点")
        });
    }

    removeFromUI(): void {
        Tools.DataBase.addGold1(Tools.DataBase.getOffLineTime().min)
        Tools.DataBase.saveTime2 = Date.now();
        Global.Event.emit("刷新离线金币")
        super.removeFromUI()
    }
}
