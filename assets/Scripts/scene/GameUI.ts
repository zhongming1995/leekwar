// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ItemBase from "../ItemBase";
import { Tools } from "../../module/Tools";
import Game from "./Game";
import GameTask, { TaskType } from "../game/GameTask";
import UIToggle from "../../module/ui/UIToggle";
import RoleBase, { playerState } from "../game/player/RoleBase";
import RunItem from "../game/RunItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUI extends cc.Component {

    static _instance: GameUI;

    static get Instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new GameUI();
        return this._instance;
    }

    @property(cc.Node)
    gameBtnBox: cc.Node = null

    @property(cc.Node)
    openDoor: cc.Node = null

    @property(cc.Node)
    closeDoor: cc.Node = null

    @property(cc.Node)
    upBed: cc.Node = null

    @property(cc.Node)
    downBed: cc.Node = null

    @property(cc.Node)
    addSpeed: cc.Node = null

    @property(cc.Node)
    bossAddSpeed: cc.Node = null

    @property(cc.Node)
    clickK: cc.Node = null

    @property(cc.Node)
    clickSave: cc.Node = null

    @property(cc.Node)
    back: cc.Node = null

    @property(cc.Node)
    headContent: cc.Node = null

    @property(cc.Label)
    saveGoldCount: cc.Label = null

    @property(cc.Node)
    tipNode: cc.Node = null

    @property(cc.Node)
    tipItem: cc.Node = null

    @property(cc.Node)
    runBox: cc.Node = null

    @property(cc.Node)
    msgBox: cc.Node = null

    @property(cc.Node)
    bossCome: cc.Node = null

    @property(cc.Node)
    goldBox: cc.Node = null

    @property(cc.Node)
    kBox: cc.Node = null

    @property(cc.Node)
    kBox2: cc.Node = null

    data = null;

    tipBg: cc.Node = null

    speedTimeLabel: cc.Label = null
    addSpeedTimeLabel: cc.Node = null

    bossSpeedTimeLabel: cc.Label = null
    bossAddSpeedTimeLabel: cc.Node = null

    protected onLoad(): void {

        GameUI._instance = this
        this.setEvent()

        this.tipBg = this.node.getChildByName("topBox").getChildByName("tip")

        this.addSpeedTimeLabel = this.addSpeed.getChildByName("addSpeedTime")
        this.speedTimeLabel = this.addSpeedTimeLabel.getChildByName("speedTime").getComponent(cc.Label)

        this.bossAddSpeedTimeLabel = this.bossAddSpeed.getChildByName("addSpeedTime")
        this.bossSpeedTimeLabel = this.bossAddSpeedTimeLabel.getChildByName("speedTime").getComponent(cc.Label)

        this.msgBox.active = Tools.DataMore.gameMode != "bossMode"
        this.goldBox.active = Tools.DataMore.gameMode == "playerMode"
        this.kBox.active = Tools.DataMore.gameMode == "bossMode"
        this.kBox2.active = Tools.DataMore.gameMode == "bossMode"
    }

    setEvent() {
        this.openDoor.on(cc.Node.EventType.TOUCH_END, this.onOpenDoor, this)
        this.closeDoor.on(cc.Node.EventType.TOUCH_END, this.onCloseDoor, this)
        this.upBed.on(cc.Node.EventType.TOUCH_END, this.onUpBed, this)
        this.downBed.on(cc.Node.EventType.TOUCH_END, this.onDownBed, this)
        this.addSpeed.on(cc.Node.EventType.TOUCH_END, this.onAddSpeed, this)

        this.bossAddSpeed.on(cc.Node.EventType.TOUCH_END, this.onBossAddSpeed, this)

        this.back.on(cc.Node.EventType.TOUCH_END, this.onBack, this)

        this.clickK.on(cc.Node.EventType.TOUCH_END, this.onClickK, this)
        this.clickSave.on(cc.Node.EventType.TOUCH_END, this.onClickSave, this)


        Global.Event.on("显示开门按钮", this.onShowOpenDoor, this);
        Global.Event.on("显示关门按钮", this.onShowCloseDoor, this);
        Global.Event.on("显示上床按钮", this.onShowUpBed, this);
        Global.Event.on("显示下床按钮", this.onShowDownBed, this);

        Global.Event.on("上床", this.onBedUp, this)
        // Global.Event.on("下床", this.showRunProp, this)

        Global.Event.on("显示逃生道具", this.showRunProp, this)
        Global.Event.on("隐藏逃生道具", this.hideRunProp, this)

        Global.Event.on("隐藏门按钮", this.onHideDoor, this);
        Global.Event.on("隐藏床按钮", this.onHideBed, this);

        Global.Event.on("隐藏GameUI", this.onHide, this);
        Global.Event.on("显示GameUI", this.onShow, this);

        Global.Event.on("增加营救赏金", this.addSavaeGold, this);

        Global.Event.on("清空营救赏金", this.removeSavaeGold, this);

        Global.Event.on("显示挖矿", this.showClickK, this);
        Global.Event.on("隐藏挖矿", this.hideClickK, this);

        Global.Event.on("boss来了", this.onBossCome, this)

        Global.Event.on("游戏结束", this.onGameOver, this)


        Global.Event.on("游戏提示", this.onGameTip, this);
    }

    /**游戏结束 */
    onGameOver() {
        this.clickSave.active = this.clickK.active = false
    }

    /**boss来了 */
    onBossCome(index: number) {
        this.bossCome.getComponent(UIToggle).setToggle(index)
        this.scheduleOnce(() => {
            this.bossCome.active = true
            this.bossCome.opacity = 0
            this.bossCome.runAction(cc.sequence(cc.fadeIn(0.5), cc.delayTime(3), cc.fadeOut(0.5)))
        }, 1)
    }



    onBedUp(mapIndex) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == mapIndex) {
            this.hideRunProp()
        }
    }

    /**隐藏逃生道具 */
    hideRunProp() {
        this.runBox.active = false
    }

    /**显示逃生道具 */
    showRunProp(mapIndex) {
        this.runBox.active = true
        /*  if (Game.Instance.gamePlayerCom.mapIndex == mapIndex) {
             this.runBox.active = true
         } */
    }

    protected start(): void {

        this.refreshSaveGold()
        Tools.DataMore.gameMode == "bossMode" && this.initBossSkill()

        let usePropData = Tools.DataBase.usePropData
        if (!usePropData) {
            !Tools.DataBase.propData.急速鞋 && (Tools.DataBase.propData.急速鞋 = 1)
            Tools.DataBase.usePropData = Tools.JosnCfg.runPropData[0]
        }


        this.schedule(this.checkTip, 0.1)
    }

    bossSkill = ["狂暴", "干扰", "传送", "冲撞"]
    initBossSkill() {
        for (let i = 0; i < this.runBox.childrenCount; i++) {
            const node = this.runBox.children[i];
            node.getComponent(RunItem).itemSprite.spriteFrame = Tools.DataMore.getItemSpriteByIndex("runProp_" + (5 + i))
            node.getComponent(RunItem).Propname = this.bossSkill[i]
        }
    }

    /**显示挖矿 */
    showClickK() {
        this.clickSave.active = this.clickK.active = true
        if (Tools.DataMore.gameMode == "outMode") {
            this.clickK.active = false
            this.clickSave.x = 0
        }
    }

    /**隐藏挖矿 */
    hideClickK() {
        this.clickSave.active = this.clickK.active = false
        this.runBox.active = true
    }

    /**点击自救 */
    onClickSave() {
        Global.Event.emit("打点_发送事件", "视频自救点击")
        zs.Native.PlayVideo(()=>{
            zs.Native.TrackEvent("视频自救视频点")
            /*  Game.Instance.playerDeathCount--
             GameTask.Instance.hideGoldTask()
             Global.Audio.playSound('被解救报警');
             Global.Event.emit("视频自救")
             Global.Event.emit("开始逃跑")
             Global.Event.emit("开矿场") */
            Global.Event.emit("打点_发送事件", "视频自救完成")

            GameTask.Instance.hideGoldTask()
            GameTask.Instance.hideSaveTask()
            Global.Audio.playSound('被解救报警');
            Global.Event.emit("视频自救")

            if (Tools.DataMore.gameMode == "outMode") {
                Game.Instance.playerDeathCount--
            } else {
                Game.Instance.playerDeathCount = 0
                Global.Event.emit("开矿场")
                Global.Event.emit("解救玩家")
                Global.Event.emit("开始逃跑")
                let desc = Game.Instance.gamePlayerCom.data.name + "成功解救了韭菜，获得了" + Tools.DataMgr.saveGold + "赏金"
                Global.Event.emit("游戏提示", desc)
                Game.Instance.gamePlayerCom.toSavePlayer()
            }
        });
    }

    kCd: number = 0.3
    canK: boolean = true
    /**点击挖矿 */
    onClickK() {
        if (!this.canK) return
        if (Game.Instance.checkPause()) return
        Global.Audio.playSound('挖矿');
        this.canK = false
        // this.addSavaeGold(CC_DEBUG ? 300 : 3)
        this.addSavaeGold(Math.ceil(Game.Instance.gamePlayerCom.addSaveNum / 4))
        GameTask.Instance.checkTask(TaskType.点击挖矿, 999)
        this.scheduleOnce(() => {
            this.canK = true
        }, this.kCd)
    }

    allTip = []
    canTip = true
    checkTip() {
        if (!this.canTip || this.allTip.length == 0) return
        this.canTip = false
        let desc = this.allTip.shift()
        this.gameTip(desc)
        this.scheduleOnce(() => {
            this.canTip = true
        }, 2)
    }


    lastTipItem: cc.Node = null
    onGameTip(desc: string) {
        this.allTip.push(desc)
        return
        if (this.lastTipItem) {
            this.destroyNode(this.lastTipItem)
        }
        this.tipBg.active = true
        this.tipBg.opacity = 0
        this.tipBg.stopAllActions()
        this.tipBg.runAction(cc.fadeIn(0.3))

        let tipItem = cc.instantiate(this.tipItem)
        tipItem.active = true
        tipItem.parent = this.tipNode
        tipItem.active = true
        tipItem.getComponent(cc.Label).string = desc
        this.lastTipItem = tipItem
        tipItem.runAction(cc.sequence(cc.moveTo(0.5, cc.v2(0, 0)), cc.delayTime(4), cc.moveTo(0.5, cc.v2(-800, 0)), cc.callFunc(() => {
            this.lastTipItem = null
            tipItem.destroy()
            this.tipBg.runAction(cc.fadeOut(0.3))
        })))
    }

    gameTip(desc: string) {
        console.log(desc);

        if (this.lastTipItem) {
            this.destroyNode(this.lastTipItem)
        }
        this.tipBg.active = true
        this.tipBg.opacity = 0
        this.tipBg.stopAllActions()
        this.tipBg.runAction(cc.fadeIn(0.3))

        let tipItem = cc.instantiate(this.tipItem)
        tipItem.active = true
        tipItem.parent = this.tipNode
        tipItem.active = true
        tipItem.getComponent(cc.Label).string = desc
        this.lastTipItem = tipItem
        tipItem.runAction(cc.sequence(cc.moveTo(0.5, cc.v2(0, 0)), cc.delayTime(4), cc.moveTo(0.5, cc.v2(-800, 0)), cc.callFunc(() => {
            this.lastTipItem = null
            tipItem.destroy()
            this.tipBg.runAction(cc.fadeOut(0.3))
        })))
    }

    destroyNode(node: cc.Node) {
        node.stopAllActions()
        node.runAction(cc.sequence(cc.moveTo(0.5, cc.v2(-800, 0)), cc.callFunc(() => {
            node.destroy()
        })))
    }

    onShow() {
        this.gameBtnBox.active = true
    }

    onHide() {
        this.gameBtnBox.active = false
    }

    refreshSaveGold() {
        if (Tools.DataMore.gameMode == "playerMode") {
            this.saveGoldCount.node.runAction(cc.sequence(cc.scaleTo(0.2, this.isBigScale ? 2.5 : 1.75), cc.scaleTo(0.2, 1)));
            this.saveGoldCount.node.tss.string = Tools.DataMgr.saveGold
        }
    }

    isBigScale: boolean = false
    /** */
    changeLabelColor() {
        this.saveGoldCount.node.color = cc.Color.RED
        this.isBigScale = true
        this.scheduleOnce(() => {
            this.resetLabel()
        }, 2)
    }

    resetLabel() {
        this.isBigScale = false
        this.saveGoldCount.node.color = cc.Color.WHITE
    }

    /**获得所有挖矿韭菜赏金数量生产速度的平均数 */
    getDeathNum() {
        // if (Game.Instance.playerDeathCount == 0) {
        //     return 1
        // }
        let addSaveNum = 0, allGamePlayer = Game.Instance.allGamePlayer
        for (let i = 0; i < allGamePlayer.length; i++) {
            let player = allGamePlayer[i]
            // if (player.getComponent(RoleBase).playerState == playerState.死亡) {
            addSaveNum += player.getComponent(RoleBase).addSaveNum
            // }
        }

        return addSaveNum / Game.Instance.allGamePlayer.length
    }

    /**到达金币数量刷新小boss */
    newBossGold = [100, 250, 500, 1000, 2000]
    /**生成的boss数量 */
    newBossCount: number = 0
    /**增加营救赏金 */
    addSavaeGold(addNum: number) {
        Tools.DataMgr.saveGold += addNum
        if (Game.Instance.gameBoss && this.newBossCount <= 4 &&
            Tools.DataMgr.saveGold >= this.newBossGold[this.newBossCount] * this.getDeathNum() &&
            Tools.DataMore.gameMode == "playerMode") {
            this.changeLabelColor()
            Global.Event.emit("创建小boss", this.newBossCount)
            this.newBossCount++
        }
        this.refreshSaveGold()
    }

    /**清空营救赏金 */
    removeSavaeGold() {
        Tools.DataMgr.saveGold = 0
        this.newBossCount = 0
        this.resetLabel()
        if (Tools.DataMore.gameMode == "playerMode") {
            Game.Instance.gameSmallBoss.length > 0 && Global.Event.emit("boss来了", 2)
            Game.Instance.removeAllSmallBoss()
        }
        this.refreshSaveGold()
    }

    protected onDestroy(): void {
        Global.Event.removeAllListeners(this);
    }



    doorNode: cc.Node = null
    /**显示开门按钮 */
    onShowOpenDoor(targetNode: cc.Node) {
        this.openDoor.active = true
        this.closeDoor.active = false

        this.doorNode = targetNode
        if (this.doorNode.isValid) {
            this.setBtnPos(this.openDoor, targetNode)
        } else {
            this.onHideDoor()
        }
    }

    /**显示关门按钮 */
    onShowCloseDoor(targetNode: cc.Node) {
        this.closeDoor.active = true
        this.openDoor.active = false
        this.doorNode = targetNode
        if (this.doorNode.isValid) {
            this.setBtnPos(this.closeDoor, targetNode)
        } else {
            this.onHideDoor()
        }
    }

    bedNode: cc.Node = null
    /**显示上床按钮 */
    onShowUpBed(data) {
        this.data = data
        this.upBed.active = true
        this.addSpeed.active = this.downBed.active = false

        this.bedNode = data.targetNode

        this.upBed.getChildByName("finger").active = Tools.DataMgr.checkGuideByIndex(0)

        if (this.bedNode.isValid) {
            this.setBtnPos(this.upBed, data.targetNode)
        } else {
            this.onHideBed()
        }

    }

    /** 显示下床按钮*/
    onShowDownBed(data) {
        this.data = data
        this.upBed.active = false
        this.addSpeed.active = this.downBed.active = true
        this.bedNode = data.targetNode

        if (this.bedNode.isValid) {
            // this.setBtnPos(this.downBed, data.targetNode)
        } else {
            this.onHideBed()
        }

    }



    /**更新按钮位置 */
    setBtnPos(uiNode: cc.Node, targetNode: cc.Node) {

        let targetWPos = targetNode.parent.convertToWorldSpaceAR(targetNode.position)
        // let cPos = Game.Instance.camera.camera.getWorldToScreenPoint(targetWPos)
        let uiPos = uiNode.parent.convertToNodeSpaceAR(targetWPos)
        let playerPos = Game.Instance.gamePlayer.position
        let dis = playerPos.sub(targetNode.position)
        let x = 0, y = 0
        let uiWidth = uiNode.width / 2 + targetNode.width / 2 + 10
        let uiHeight = uiNode.height / 2 + targetNode.height / 2 + 10
        if (Math.abs(dis.x) > Math.abs(dis.y)) {
            x = playerPos.x > targetNode.position.x ? -uiWidth : uiWidth
        } else {
            y = playerPos.y > targetNode.position.y ? -uiHeight : uiHeight
        }
        uiPos.x += x
        uiPos.y += y
        uiNode.setPosition(uiPos)
    }


    /**隐藏门按钮 */
    onHideDoor() {
        if (!this.openDoor.active && !this.closeDoor.active) return
        this.doorNode = null
        this.openDoor.active = this.closeDoor.active = false
    }

    /**点击开门按钮 */
    onOpenDoor() {
        if (this.doorNode) {
            Global.Audio.playSound('开门');
            this.doorNode.getComponent(ItemBase).setDoorFlag(true)
        }
    }

    /**点击关门按钮 */
    onCloseDoor() {
        if (this.doorNode) {
            Global.Audio.playSound('关门');
            zs.Native.TrackEvent("关门");
            let isFirst = cc.sys.localStorage.getItem('首次进入韭菜模式关门');
            if(Game.Instance.isFirstEnterJiucai && (isFirst == "" || isFirst == null)){
                zs.Native.TrackEvent("首次进入韭菜模式关门")
                cc.sys.localStorage.setItem("首次进入韭菜模式关门","true");
            }
            this.doorNode.getComponent(ItemBase).setDoorFlag(false)
        }
    }

    /**点击上床按钮 */
    onUpBed() {
        if (this.bedNode) {
            zs.Native.TrackEvent("上机")
            let isFirst = cc.sys.localStorage.getItem('首次进入韭菜模式上机');
            if(Game.Instance.isFirstEnterJiucai && (isFirst == "" || isFirst == null)){
                zs.Native.TrackEvent("首次进入韭菜模式上机")
                cc.sys.localStorage.setItem("首次进入韭菜模式上机","true");
            }
            this.bedNode.getComponent(ItemBase).setBedFlag(false, Game.Instance.gamePlayer)
            Global.Event.emit("显示修理门")
            Global.Event.emit("扩大视野")
            Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.hideGuide()
            GameTask.Instance.checkTask(TaskType.逃入房间, -1)
        }
    }

    /**点击下床按钮 */
    onDownBed() {
        if (this.bedNode) {
            // Global.Event.emit("下床", this.data.mapIndex)
            this.bedNode.getComponent(ItemBase).setBedFlag(true, null)
            Game.Instance.camera.setFollowBody(Game.Instance.gamePlayer)
            Global.Event.emit("隐藏修理门")
            Global.Event.emit("显示逃生道具")
            Global.Event.emit("默认视野")
        }
    }

    /**隐藏床按钮 */
    onHideBed() {
        if (!this.upBed.active && !this.downBed.active) return
        this.bedNode = null
        this.addSpeed.active = this.upBed.active = this.downBed.active = false
    }

    /**点击加速按钮 */
    onAddSpeed() {
        Global.Event.emit("打点_发送事件", "加速按钮点击")
        zs.Native.PlayVideo(()=>{
            zs.Native.TrackEvent("韭菜加速")
            Global.Event.emit("打点_发送事件", "加速按钮视频看完")
            this.addSpeedTimeLabel.active = true
            this.addSpeedTime += 90
            this.speedTimeLabel.node.scale = 1
            this.speedTimeLabel.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(0.5), cc.scaleTo(0.25, 1.5), cc.scaleTo(0.25, 1))))
        });
    }

    onBossAddSpeed() {
        Global.Event.emit("打点_发送事件", "加速按钮点击")
        zs.Native.PlayVideo(()=>{
            zs.Native.TrackEvent("收割者加速")
            Global.Event.emit("打点_发送事件", "加速按钮视频看完")
            this.bossAddSpeedTimeLabel.active = true
            this.bossAddSpeedTime += 90
            this.bossSpeedTimeLabel.node.scale = 1
            this.bossSpeedTimeLabel.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(0.5), cc.scaleTo(0.25, 1.5), cc.scaleTo(0.25, 1))))
        });
    }

    /**返回按钮被点击 */
    onBack() {
        Global.UIManger.pushWindow('GameBack');
    }


    addSpeedTime: number = 0
    bossAddSpeedTime: number = 0
    protected update(dt: number): void {
        if (this.addSpeedTime > 0) {
            this.addSpeedTime -= dt
            this.speedTimeLabel.string = "" + Math.floor(this.addSpeedTime)
            if (this.addSpeedTime <= 0) {
                this.addSpeedTime = 0
                this.addSpeedTimeLabel.active = false
                this.speedTimeLabel.node.stopAllActions()
            }
        }

        if (this.bossAddSpeedTime > 0) {
            this.bossAddSpeedTime -= dt
            this.bossSpeedTimeLabel.string = "" + Math.floor(this.bossAddSpeedTime)
            if (this.bossAddSpeedTime <= 0) {
                this.bossAddSpeedTime = 0
                this.bossAddSpeedTimeLabel.active = false
                this.bossSpeedTimeLabel.node.stopAllActions()
            }
        }
    }
}
