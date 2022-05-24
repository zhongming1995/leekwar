// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import ItemBase from "../../Scripts/ItemBase";
import MapMgr from "../../Scripts/MapMgr";
import Game from "../../Scripts/scene/Game";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameCreateDoorItem extends ItemBase {

    protected onLoad(): void {
        super.onLoad()

        Global.Event.on("显示修理门", this.showNode, this)
        Global.Event.on("隐藏修理门", this.hideNode, this)
    }


    showNode() {
        if (Game.Instance.gamePlayerCom.mapIndex != this.mapIndex) return
        let door: cc.Node = Tools.DataMgr.doorNode[this.mapIndex]
        if (!door || !door.isValid) {//门被击毁
            this.node.active = true
        }
    }

    hideNode() {
        this.node.active = false
    }

    protected start(): void {
        super.start()
        this.canOperate = true
    }


    mapData = null
    /**设置数据 */
    setOptions(data) {
        super.setOptions(data)
        this.mapData = this.data.mapData
    }



    /** 进行操作 */
    onOperate(data?) {
        if (!this.canOperate) return /* Global.Event.emit("UI提示", { content: "不能操作" }) */
        Global.Event.emit("打点_发送事件", "视频修门点击")
        zs.Native.PlayVideo(()=>{
            Global.Event.emit("打点_发送事件", "视频修门视频点")
            zs.Native.TrackEvent("视频修门视频点")
            this.node.active = false
            this.createDoor()
        })
    }

    createDoor() {
        let doorNode = MapMgr.Instance.newMapItem({
            posIndex: this.posIndex,
            itemIndex: 1002,
            mapIndex: this.data.mapIndex,
            mapData: { LorR: this.mapData.LorR, motion: this.mapData.motion, rotate: this.mapData.rotate, isCreate: true, lv: this.data.lv }
        })
        Tools.DataMgr.doorNode[this.data.mapIndex] = doorNode
    }

    /**死亡 */
    onDeath() {

    }

}
