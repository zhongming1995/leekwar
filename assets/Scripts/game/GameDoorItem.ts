// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import Game from "../scene/Game";
import MapMgr from "../MapMgr";
import RoleBase from "./player/RoleBase";
import ItemBase from "../ItemBase";
import AddGoldItem from "./AddGoldItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameDoorItem extends ItemBase {

    @property(cc.Node)
    progressNode: cc.Node = null
    /**默认打开状态 */
    isOpen: boolean = true

    progress: cc.ProgressBar = null

    protected onLoad(): void {
        super.onLoad()

        Global.Event.on("增加门回复血量", this.setAddResume, this)
        Global.Event.on("重置门回复血量", this.resetAddResume, this)
        this.progress = this.progressNode.getComponent(cc.ProgressBar)
        // this.itemSprite.x -= 90
    }

    protected start(): void {
        super.start()

        Tools.DataMore.gameMode != "bossMode" && this.schedule(this.checkPos, 0.1)

        this.schedule(this.resumeHp, 1)
    }

    getNodeHsl(node) {
        let nodeHsl = node.getComponent("HSL")
        cc.Tween.stopAllByTarget(nodeHsl)
        return nodeHsl
    }

    setAddResume() {
        this.addResume = 1.5
    }

    resetAddResume() {
        this.addResume = 1
    }

    addResume: number = 1
    /**每秒回复血量 */
    resumeHp() {
        if (Game.Instance.checkPause()) return
        this.addHp(this.curPropData.hpAdd * this.addResume)
    }

    /**能否被boss攻击 */
    getCanBossAttk() {
        return !this.isOpen
    }

    mapData = null
    /**设置数据 */
    setOptions(data) {
        data.mapData.lv && (data.lv = data.mapData.lv)
        super.setOptions(data)
        this.mapData = this.data.mapData
        if (this.mapData.isCreate) {//重新建造
            this.isOpen = false
            this.itemSprite.getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex(this.curPropData.spriteName)
            MapMgr.Instance.reSetPathFind()
            if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == this.mapIndex) {
                this.canOperate = true
                this.refreshLeaveUp()
            }
        } else {
            this.runDoor()
        }
        this.itemSprite.angle = this.mapData.rotate
    }

    /**玩家上床 */
    onUpBed(mapIndex: number) {
        if (this.mapIndex == mapIndex) {
            this.setDoorFlag(false)//上床后关门
        }
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == mapIndex && this.mapIndex == mapIndex) {
            this.canOperate = true
            this.refreshLeaveUp()
        }
    }

    /**玩家下床 */
    onDownBed(mapIndex: number) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == mapIndex && this.mapIndex == mapIndex) {
            this.canOperate = false
            this.leaveUpNode.active = false
            this.node.getChildByName("finger").active = false
        }
    }

    /**设置门的开关状态 */
    setDoorFlag(isOpen: boolean) {
        if (this.isOpen == isOpen) return
        this.isOpen = isOpen

        this.runDoor()

        MapMgr.Instance.reSetPathFind()
    }

    runDoor() {
        this.itemSprite.stopAllActions()
        let pos = cc.v2(0, 90)
        if (this.mapData.motion == 2) {
            pos = cc.v2(90, 0)
        } else if (this.mapData.motion == 3) {
            pos = cc.v2(0, -90)
        } else if (this.mapData.motion == 4) {
            pos = cc.v2(-90, 0)
        }

        this.itemSprite.runAction(cc.moveTo(0.5, this.isOpen ? cc.v2(pos.x, pos.y) : cc.v2(0, 0/* -pos.x, -pos.y */)))
    }

    /**获取门的开关状态 */
    getDoorFlag() {
        return this.isOpen
    }

    /**刷新游戏金币 */
    onRefreshGold(goldCount: number) {
        this.refreshLeaveUp()
    }

    /**刷新游戏闪电 */
    onRefreshLight(lightCount: number) {
        this.refreshLeaveUp()
    }

    /** 受伤 */
    onHurt(data) {
        super.onHurt(data)
        this.doorHurt = true
        // this.itemSprite.stopAllActions()
        this.itemSprite.scale = 1
        this.itemSprite.runAction(cc.sequence(cc.scaleTo(0.1, 0.8), cc.scaleTo(0.1, 1)))
        cc.tween(this.getNodeHsl(this.itemSprite)).to(0.05, { dL: 0.6 }).to(0.05, { dL: 0 }).start()
        cc.tween(this.getNodeHsl(this.progressNode)).to(0.05, { dL: 0.6 }).to(0.05, { dL: 0 }).start()
        cc.tween(this.getNodeHsl(this.progressNode.getChildByName("bar"))).to(0.05, { dL: 0.6 }).to(0.05, { dL: 0 }).start()

        Global.Event.emit("门被攻击", this.mapIndex, data.hurt)
        this.runDoorHpPro()
    }

    runDoorHpPro() {

        if (this.curHp > 0) {
            this.progress.progress = this.curHp / this.maxHp
            this.progressNode.active = true
            this.progressNode.stopAllActions()
            this.progressNode.runAction(cc.fadeIn(0.1))
            this.unschedule(this.hideProNode)
            this.scheduleOnce(this.hideProNode, 2)
        }
    }

    /**隐藏血量条 */
    hideProNode() {
        this.progressNode.runAction(cc.sequence(cc.fadeOut(0.5), cc.callFunc(() => {
            this.doorHurt = false
            this.progressNode.active = false
        })))
    }

    refreshLeaveUp() {
        if (Game.Instance.gamePlayerCom.mapIndex != this.mapIndex || this.isOpen) { return }

        if (!this.nextPropData) {
            this.leaveUpNode.active = false
            return
        }
        let pCom = Game.Instance.gamePlayerCom
        this.leaveUpNode.active = ((!this.nextPropData.cost.gold || pCom.getPlayerGold() >= this.nextPropData.cost.gold) &&
            (!this.nextPropData.cost.Knowledge || pCom.getPlayerLight() >= this.nextPropData.cost.Knowledge))
        this.node.getChildByName("finger").active = this.leaveUpNode.active && Tools.DataMgr.checkGuideByIndex(2)
    }

    /**玩家是否进入门 */
    enter: boolean = false
    /**进入的玩家 */
    enterPlayer: cc.Node = null
    /**检查与玩家的距离 */
    checkPos() {
        if (Game.Instance.checkPause()) return
        const gamePlayer = Game.Instance.gamePlayer;
        let dis = this.node.position.sub(gamePlayer.position).mag()
        if (dis < 120 && gamePlayer.getComponent(RoleBase).mapIndex < 0) {
            Global.Event.emit(this.getDoorFlag() ? "显示关门按钮" : "显示开门按钮", this.node)
        } else if (dis < 200) {
            Global.Event.emit("隐藏门按钮")
        }

        let allGamePlayer = Game.Instance.allGamePlayer
        for (let i = 0; i < allGamePlayer.length; i++) {
            const player = allGamePlayer[i];
            // if (player == gamePlayer) continue
            let dis = this.node.position.sub(player.position).mag()
            if (dis < 45 && !this.isOpen) {
                this.enterPlayer = player
                this.itemSprite.opacity = 150
            }
        }

        if (this.enterPlayer) {
            let dis = this.node.position.sub(this.enterPlayer.position).mag()
            if (dis > 90) {
                this.enterPlayer = null
                this.itemSprite.opacity = 255
                // this.setDoorFlag(false)
            }
        }

    }

    /**升级 */
    onLevelUP() {
        super.onLevelUP()
        this.maxHp = (this.curPropData && this.curPropData.hp || 1) || 0
        this.curHp = this.maxHp
        this.runDoorHpPro()
    }

    /** 进行操作 */
    onOperate(data?) {
        if (Game.Instance.checkPause()) return
        if (!this.canOperate) return /* Global.Event.emit("UI提示", { content: "不能操作" }) */
        let itemData = Tools.GameCfg.itemData[this.data.itemIndex]
        Global.Event.emit("取消选中", this.mapIndex)

        let levelData = []
        if (this.nextPropData) {
            levelData.push(this.nextPropData)
            /*  if (!Game.Instance.isVideoLevel) {
                 let copyData = Global.Common.deepCopy(Tools.GameCfg.level)
                 if (this.nextPropData && this.nextPropData.spriteName) {
                     copyData.spriteName = this.nextPropData.spriteName
                     copyData.hp = this.nextPropData.hp
                     copyData.name = this.nextPropData.name
                 }
                 levelData.push(copyData)
             } */

            let copyData = Global.Common.deepCopy(Tools.GameCfg.level)
            if (this.nextPropData && this.nextPropData.spriteName) {
                copyData.spriteName = this.nextPropData.spriteName
                copyData.hp = this.nextPropData.hp
                copyData.name = this.nextPropData.name
                copyData.id = this.nextPropData.id
                copyData.itemIndex = this.nextPropData.itemIndex
            }
            levelData.push(copyData)
            let propData = {
                targetNode: this.node,
                propType: "升级",
                levelData: levelData
            }
            Global.UIManger.pushWindow('GamePropUI', 'GamePropUI', propData);
        } else {
            let addGoldItem = Tools.NodePools.getNode("AddGoldItem")
            addGoldItem.parent = this.node
            addGoldItem.getComponent(AddGoldItem).init(null, 2)
        }

        // GamePropUI.Instance.showPropUI(this.node, propData)
    }

    onDeath(): void {

        super.onDeath()
        Global.Event.emit("隐藏门按钮")
        let mapNode = MapMgr.Instance.getTriggerByIndex(this.posIndex.x, this.posIndex.y)
        if (mapNode) {
            Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == this.mapIndex && (mapNode.active = true)
            mapNode.getComponent(ItemBase).getData().lv = this.data.lv
        }
        else {
            debugger
            /* let buildingNode = MapMgr.Instance.newMapItem({
                posIndex: this.posIndex,
                itemIndex: 1009,
                mapIndex: this.mapIndex
            }) */
        }

    }

}
