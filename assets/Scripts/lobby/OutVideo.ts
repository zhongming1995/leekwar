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
export default class OutVideo extends UIWindows {

    @property(cc.Node)
    v_btn: cc.Node = null;



    onLoad() {
        super.onLoad()
        this.v_btn.on(cc.Node.EventType.TOUCH_END, this.onVideoClick, this)
    }

    onVideoClick() {
        zs.Native.PlayVideo(()=>{
            zs.Native.TrackEvent("大逃杀模式助力视频点")
            Global.Event.emit("UI提示", { content: '感谢助力，快乐币+200' })
            Tools.DataBase.addGold1(200)
        });
    }

    start() {

    }
}
