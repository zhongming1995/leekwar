// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIToggle from "../../module/ui/UIToggle";
import Game from "../../Scripts/scene/Game";
import ItemBase from "../../Scripts/ItemBase";
import { Tools } from "../../module/Tools";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameMapItem extends ItemBase {

    @property(cc.Node)
    kNode: cc.Node = null;

    protected onLoad(): void {
        super.onLoad()

        Global.Event.on("取消选中", this.unSelect, this)

        Global.Event.on("玩家死亡", this.onDownBed, this)
    }

    protected start(): void {
        super.start()

        Game.Instance.gamePlayerCom && this.onUpBed(Game.Instance.gamePlayerCom.mapIndex)//重新创建后判断能否操作

        Tools.DataBase.wxGuideIndex <= 3 && this.schedule(this.checkDoorDis, 0.1)
    }

    checkDoorDis() {
        if (Game.Instance.isCreate) {
            this.destroyFinger()
            return this.unschedule(this.checkDoorDis)
        }
        if (!this.canOperate) return
        if (!Tools.DataMgr.checkGuideByIndex(3)) return
        let door: cc.Node = Tools.DataMgr.doorNode[this.mapIndex]
        if (!door || !door.isValid) return
        let dis = this.node.position.sub(door.position).mag()
        if (dis < 95 && !this.node.getChildByName("finger")) {
            let finger = Global.Loader.getInstantiate("finger")
            finger.parent = this.node
            finger.scale = 0.5
            finger.x = -45
        }
    }

    destroyFinger() {
        let finger = this.node.getChildByName("finger")
        finger && finger.destroy()
    }

    setOptions(data: any): void {
        super.setOptions(data)
        this.kNode.active = this.data.mapData.isK
    }

    /**取消选中*/
    unSelect(mapIndex) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == mapIndex) {
            this.itemSprite.getComponent(UIToggle).setToggle(0)
        }
    }


    /**玩家上床 */
    onUpBed(mapIndex: number) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == this.mapIndex && this.mapIndex == mapIndex) {
            this.itemSprite.active = true
            this.canOperate = true
        }
    }

    /**玩家下床 */
    onDownBed(mapIndex: number) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == this.mapIndex && this.mapIndex == mapIndex) {
            this.itemSprite.active = false
            this.canOperate = false
            this.destroyFinger()
        }
    }

    /** 进行操作 */
    onOperate(data?) {
        if (!this.canOperate) return
        Global.Event.emit("取消选中", this.mapIndex)
        this.itemSprite.getComponent(UIToggle).setToggle(1)

        let propData = {
            targetNode: this.node,
            propType: "建筑"
        }
        Global.UIManger.pushWindow('GamePropUI', 'GamePropUI', propData);
        // GamePropUI.Instance.showPropUI(this.node, propData)
    }
}
