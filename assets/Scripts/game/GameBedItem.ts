// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import Game from "../scene/Game";
import AddGoldItem from "./AddGoldItem";
import RoleBase, { playerState } from "./player/RoleBase";
import ItemBase from "../ItemBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameBedItem extends ItemBase {

    @property(cc.Node)
    playerNode: cc.Node = null

    /**能否上床 */
    isCanToBed: boolean = true

    protected onLoad(): void {
        super.onLoad()
    }

    protected start(): void {
        super.start()
        this.canBossAttk = true
        Tools.DataMore.gameMode != "bossMode" && this.schedule(this.checkPos, 0.1)
    }

    /**设置数据 */
    setOptions(data) {
        super.setOptions(data)
        this.schedule(this.addGameGold, 1/*  this.curPropData.delay */)
    }

    /**能否被boss攻击 */
    getCanBossAttk() {
        return !this.isCanToBed
    }

    /**玩家上床 */
    onUpBed(mapIndex: number) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == this.mapIndex && this.mapIndex == mapIndex) {
            this.canOperate = true
            this.refreshLeaveUp()
        }
    }

    /**玩家下床 */
    onDownBed(mapIndex: number) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == this.mapIndex && this.mapIndex == mapIndex) {
            this.canOperate = false
            this.leaveUpNode.active = false
            this.node.getChildByName("finger").active = false
        }
    }

    /**刷新游戏金币 */
    onRefreshGold(goldCount: number) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == this.mapIndex) {
            this.refreshLeaveUp()
        }
    }

    /**刷新游戏闪电 */
    onRefreshLight(lightCount: number) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == this.mapIndex) {
            this.refreshLeaveUp()
        }
    }

    refreshLeaveUp() {
        if (!this.nextPropData) {
            this.leaveUpNode.active = false
            return
        }
        let pCom = Game.Instance.gamePlayerCom
        this.leaveUpNode.active = ((!this.nextPropData.cost.gold || pCom.getPlayerGold() >= this.nextPropData.cost.gold) &&
            (!this.nextPropData.cost.Knowledge || pCom.getPlayerLight() >= this.nextPropData.cost.Knowledge)) &&
            Tools.DataMgr.checkCondition(this.nextPropData.condition, this.mapIndex)

        this.node.getChildByName("finger").active = this.leaveUpNode.active && Tools.DataMgr.checkGuideByIndex(1)

    }


    /**在床上的玩家 */
    onBedPlayer: cc.Node = null
    /**设置床的上下状态 */
    setBedFlag(isCanToBed: boolean, player: cc.Node, emit: boolean = true) {
        if (this.isCanToBed == isCanToBed) return false
        this.isCanToBed = isCanToBed

        player && player.getComponent(RoleBase).setBedFlag(!this.isCanToBed, this.mapIndex)//上床设置下状态
        emit && Global.Event.emit(this.isCanToBed ? "下床" : "上床", this.mapIndex)
        this.onBedPlayer && this.onBedPlayer.getComponent(RoleBase).setBedFlag(!this.isCanToBed, -1, this.curPropData.production)//下床设置下状态

        if (player) {
            player.x = this.node.x
            player.y = this.node.y + 20
        }

        Game.Instance.mapPlayerData[this.mapIndex] = player
        this.onBedPlayer = player
        this.canOperate = !this.isCanToBed

        if (this.onBedPlayer) {//床上有人
            this.playerNode.active = true
            this.playerNode.getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex("player_" + this.onBedPlayer.getComponent(RoleBase).skinId)

            let rCom = this.onBedPlayer.getComponent(RoleBase)
            if (!rCom.isPlayer) {//房间门被破坏了  ai直接创建门
                if (!Tools.DataMgr.doorNode[this.mapIndex] || !Tools.DataMgr.doorNode[this.mapIndex].isValid) {
                    let createDoorNode = Tools.DataMgr.createDoorNode[this.mapIndex]
                    createDoorNode.getComponent(ItemBase).createDoor()
                }
            }
        } else {
            this.playerNode.active = false
            this.leaveUpNode.active = false
        }


        this.addPlayerGold()
        /*  this.unschedule(this.addGameGold)
         if (!this.isCanToBed) {
             this.schedule(this.addGameGold, this.bedData.delay)
         } */
    }

    /**产生的总金币 */
    productionGold: number = 0
    /**产生游戏金币 */
    addGameGold() {
        if (Game.Instance.checkPause()) return
        let double = Tools.DataMgr.checkDouble(this.mapIndex)
        this.productionGold += (double ? this.curPropData.production * 2 : this.curPropData.production)

        this.addPlayerGold()
    }

    /**增加玩家金币 */
    addPlayerGold() {
        if (this.onBedPlayer && this.onBedPlayer.getComponent(RoleBase).playerState != playerState.死亡) {
            let data = {
                mapIndex: this.mapIndex,
                addNum: this.productionGold
            }
            Global.Event.emit("增加游戏金币", data)
            this.productionGold = 0
            let addGoldItem = Tools.NodePools.getNode("AddGoldItem")
            addGoldItem.parent = this.node
            addGoldItem.getComponent(AddGoldItem).init(data.addNum)
        }
    }

    /**能否上床 */
    getBedFlag() {
        return this.isCanToBed
    }

    /**检查与玩家的距离 */
    checkPos() {
        if (Game.Instance.checkPause()) return
        const player = Game.Instance.gamePlayer
        let dis = this.node.position.sub(player.position).mag()
        if (dis < 120 && (this.isCanToBed || this.onBedPlayer == player) && player.getComponent(RoleBase).playerState != playerState.死亡) {//没上床或者床上的是自己
            let data = {
                targetNode: this.node,
                mapIndex: this.mapIndex,
                player: player
            }
            Global.Event.emit(this.getBedFlag() ? "显示上床按钮" : "显示下床按钮", data)
        } else if (dis < 200) {
            Global.Event.emit("隐藏床按钮")
        }
    }


    /** 进行操作 */
    onOperate(data?) {
        if (Game.Instance.checkPause()) return
        if (!this.canOperate) return /* Global.Event.emit("UI提示", { content: "不能操作" }) */
        if (!this.onBedPlayer || !this.onBedPlayer.getComponent(RoleBase).isPlayer) return
        let itemData = Tools.GameCfg.itemData[this.data.itemIndex]
        Global.Event.emit("取消选中", this.mapIndex)

        let levelData = []
        if (this.nextPropData) {
            levelData.push(this.nextPropData)
            let propData = {
                targetNode: this.node,
                propType: "升级",
                levelData: levelData
            }

            let copyData = Global.Common.deepCopy(Tools.GameCfg.level)
            if (this.nextPropData && this.nextPropData.spriteName) {
                copyData.spriteName = this.nextPropData.spriteName
                copyData.hp = this.nextPropData.hp
                copyData.name = this.nextPropData.name
                copyData.id = this.nextPropData.id
                copyData.itemIndex = this.nextPropData.itemIndex
            }
            levelData.push(copyData)

            Global.UIManger.pushWindow('GamePropUI', 'GamePropUI', propData);
        } else {
            let addGoldItem = Tools.NodePools.getNode("AddGoldItem")
            addGoldItem.parent = this.node
            addGoldItem.getComponent(AddGoldItem).init(null, 2)
        }

        // GamePropUI.Instance.showPropUI(this.node, propData)
    }

    /**死亡 */
    onDeath() {
        // super.onDeath()
        this.isDeath = true
        Game.Instance.mapPlayerData[this.mapIndex] && Game.Instance.mapPlayerData[this.mapIndex].getComponent(RoleBase).onDeath()
        this.setBedFlag(true, null/* , false */)
        this.scheduleOnce(() => {
            this.isDeath = false
        }, 10)
    }
}
