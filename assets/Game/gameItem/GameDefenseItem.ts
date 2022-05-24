// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import UIFrameAnimate from "../../module/ui/UIFrameAnimate";
import Game from "../../Scripts/scene/Game";
import AddGoldItem from "../../Scripts/game/AddGoldItem";
import MapMgr from "../../Scripts/MapMgr";
import RoleBase, { playerState } from "../../Scripts/game/player/RoleBase";
import ItemBase, { itemType } from "../../Scripts/ItemBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameDefenseItem extends ItemBase {

    @property(cc.Node)
    selectNode: cc.Node = null

    @property(cc.Node)
    smokeNode: cc.Node = null

    protected onLoad(): void {
        super.onLoad()

        Global.Event.on("门被攻击", this.onDoorAttk, this)

        Global.Event.on("发射子弹", this.onWeapon, this)

        Global.Event.on("释放技能", this.onUseSkill, this)
    }


    protected start(): void {
        super.start()
    }


    /**当门被攻击 */
    onDoorAttk(mapIndex: number) {
        if (this.mapIndex == mapIndex && this.itemIndex == "2007") {//冰箱
            Tools.DataMgr.checkPropActive(this.mapIndex) && Global.Event.emit("boss攻速减慢")
        }
    }

    /**当门被攻击 */
    onWeapon(mapIndex: number) {
        if (this.mapIndex == mapIndex && this.itemIndex == "2004") {//镰刀
            Tools.DataMgr.checkPropActive(this.mapIndex) && this.addPlayerGold()
        }
    }

    /**增加玩家金币 */
    addPlayerGold() {
        let player = Game.Instance.mapPlayerData[this.mapIndex]
        if (player && player.getComponent(RoleBase).isOnBed) {
            let data = {
                mapIndex: this.mapIndex,
                addNum: 1
            }
            Global.Event.emit("增加游戏金币", data)
            let addGoldItem = Tools.NodePools.getNode("AddGoldItem")
            addGoldItem.parent = this.node
            addGoldItem.getComponent(AddGoldItem).init(data.addNum)
        }
    }

    /** */
    onUseSkill() {
        if (this.itemIndex == "2005" && Tools.DataMgr.checkPropActive(this.mapIndex)) {//咒术封印
            let boss = Game.Instance.gameBoss
            if (!boss) return
            let dis = boss.position.sub(this.node.position).mag()
            if (dis < MapMgr.Instance.mapTiledSize * 6) {
                Global.Event.emit("眩晕boss", 3)
                if (this.curPropData.isDestroy) {
                    this.onDeath()
                }
            }
        }
    }


    /**设置数据 */
    setOptions(data) {
        super.setOptions(data)

        this.itemSprite.active = false
        this.smokeNode.getComponent(UIFrameAnimate).playAnima(1, () => {
            this.itemSprite.active = true
            this.onSmoke()
        })
    }

    onSmoke() {
        this.canBossAttk = true
        if (this.itemIndex == "2006") {//修复机
            Tools.DataMgr.checkPropActive(this.mapIndex) && Global.Event.emit("增加门回复血量")
        }
    }

    /** 进行操作 */
    onOperate(data?) {
        if (!this.canOperate) return /* Global.Event.emit("UI提示", { content: "不能操作" }) */

    }

    /**死亡 */
    onDeath() {
        super.onDeath()
        if (this.itemIndex == "2006") {//修复机
            Tools.DataMgr.checkPropActive(this.mapIndex) && Global.Event.emit("重置门回复血量")
        }
        let mapNode = MapMgr.Instance.getTriggerByIndex(this.posIndex.x, this.posIndex.y)
        if (mapNode) mapNode.active = true
    }

}
