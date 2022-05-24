
import HeadItem from "../HeadItem";
import MapMgr from "../MapMgr";
import AIControl from "../game/player/AIControl";
import PlayerControl from "../game/player/PlayerControl";
import RoleBase, { playerState } from "../game/player/RoleBase";
import { Tools } from "../../module/Tools";
import GameCamera from "./GameCamera";
import GameUI from "./GameUI";
import GameTask, { TaskType } from "../game/GameTask";
import AIBoss from "../game/player/AIBoss";
import GM from "../game/GM";
import Lobby from "./Lobby";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    static _instance: Game;

    static get Instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new Game();
        return this._instance;
    }

    @property(GameCamera)
    camera: GameCamera = null;

    @property(cc.Node)
    mapNode: cc.Node = null;

    @property(cc.Node)
    playerContent: cc.Node = null;

    @property(cc.Node)
    gameTimeNode: cc.Node = null;

    @property(cc.Node)
    bossPoint: cc.Node = null;

    @property(cc.Node)
    GMNode: cc.Node = null;

    timeLabel: cc.Label = null;

    /**是否暂停 */
    isPause: boolean = false

    /**是否结束 */
    isOver: boolean = false

    /**和地图index对应的玩家 */
    mapPlayerData = {}

    allBossPoint: cc.Node[] = []

    allPlayerPoint: cc.Node[] = []

    /**看视频升级 */
    isVideoLevel: boolean = false

    /**是否建造过 */
    isCreate: boolean = false
    isFirstEnterJiucai = false;
    onLoad() {
        Game._instance = this
        this.isFirstEnterJiucai = false;
        Global.Event.emit("打点_发送事件", "进入游戏内")
        zs.Native.TrackEvent("真正进入游戏内")
        if(Tools.DataMgr.isFirstGameOver){
            zs.Native.TrackEvent("第一局结束后继续进入游戏内");
            Tools.DataMgr.isFirstGameOver = false;
        }
        if(Tools.DataMore.gameMode == "playerMode"){
            zs.Native.TrackEvent("韭菜模式进入游戏内")
            let isFirst = cc.sys.localStorage.getItem('首次进入韭菜模式游戏内');
            this.isFirstEnterJiucai = true;
            if(isFirst == "" || isFirst == null){
                zs.Native.TrackEvent("首次进入韭菜模式游戏内")
                cc.sys.localStorage.setItem("首次进入韭菜模式游戏内","true");
            }
            //韭菜模式插屏机制：每新建一次道具，升级道具或者拯救一次队友弹一次，需间隔150s
        }else{
            zs.Native.TrackEvent("Boss模式进入游戏内");
            //boss模式插屏机制:间隔150s弹
            this.schedule(this.bossModeLoopShowInterstitial,150);
        }

        // Global.Event.emit("打点_局开始", `第${Tools.DataMgr.gameOverCount + 1}局开始`)
        Global.Event.emit("打点_局状态", `第${this.addPreZero(Tools.DataMgr.gameOverCount + 1, 3)}局`, "开始")

        this.timeLabel = this.gameTimeNode.getChildByName("time").getComponent(cc.Label)

        this.GMNode.on(cc.Node.EventType.TOUCH_END, this.onGMClick, this)

        Global.Event.on('增加游戏金币', this.addPlayerGold, this);
        Global.Event.on('增加游戏闪电', this.addPlayerLight, this);
        Global.Event.on('返回大厅', this.onBreakLobby, this);
        Global.Event.on('游戏暂停', this.onPause, this);
        Global.Event.on('游戏继续', this.onResume, this);

        Global.Event.on("创建小boss", this.newSmallBoss, this)

        Global.Event.on("开矿场", this.openKDoor, this)

        Global.Event.on("关矿场", this.closeKDoor, this)

        Global.Event.on("玩家死亡", this.onPlayerDeath, this)

        Global.Event.on("游戏结束", this.onGameOver, this)

        Global.Event.on(GlobalEvent.RECORD_END, this.onRecordEnd, this)

        this.schedule(() => {
            this.sendEvent()
        }, 50)

        this.gameRunTime = Tools.DataMore.gameMode == "playerMode" ? 20 : 30

        if (CC_DEBUG) this.gameRunTime = 10
        
        zs.Native.setInterstitialShowCallBack(()=>{
            this.onPause();
        })
        zs.Native.setInterstitialCloseCallBack(()=>{
            this.onResume();
        })
        // this.onGameOver(false)
    }

    bossModeLoopShowInterstitial(){
        zs.Native.ShowInsertAd();
    }

    /** 前置补0 */
    addPreZero(num, num2 = 5) {
        return ('000000000' + num).slice(-num2);
    }

    timeIndex: number = 0
    sendEvent() {
        this.timeIndex++
        if (Tools.DataMgr.gameCount == 0) {
            Global.Event.emit("打点_第一局时间", `第1局每${this.addPreZero(this.timeIndex * 50)}s人数`)
        } else if (Tools.DataMgr.gameCount == 1) {
            Global.Event.emit("打点_第二局时间", `第2局每${this.addPreZero(this.timeIndex * 50)}s人数`)
        }

    }

    GMCount: number = 0
    onGMClick() {
        if (Global.Platform.isWeb || (Global.Platform.isTouTiao && GM.Debugger)) {
            this.GMCount++
            if (this.GMCount >= 5) {
                let type = "playerMode"
                if (Tools.DataMore.gameMode == "bossMode") {
                    type = "bossMode"
                }

                this.GMCount = 0
                Global.UIManger.pushWindow('GM', 'GM', { type: type });
            }
        }
    }

    isRecord: boolean = true
    onRecordEnd(r: boolean) {
        if (!this.isOver) {
            this.isRecord = false
            return
        }
        if (r) {
            Global.UIManger.pushWindow('TTShareVideo', 'TTShareVideo', () => {
                Global.UIManger.pushWindow('GameOver', 'GameOver', { isWin: this.isWin });
            })
        } else {
            Global.UIManger.pushWindow('GameOver', 'GameOver', { isWin: this.isWin });
        }
    }

    kDoorOpen: boolean = true
    openKDoor() {
        this.kDoorOpen = true
    }

    closeKDoor() {
        this.kDoorOpen = false
    }

    onPause() {
        this.isPause = true
    }

    onResume() {
        this.isPause = false
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        zs.Native.setInterstitialShowCallBack(null)
        zs.Native.setInterstitialCloseCallBack(null)
        Global.Event.removeAllListeners(this);
    }

    start() {
        let w = MapMgr.Instance.mapBlockRealSize * 3
        let maxPos = cc.v2(w / 2 + 180, w / 2 + 180 + 90)
        let minPos = cc.v2(-w / 2 - 180, -w / 2 - 180 - 90)
        this.camera.setCameraRange(maxPos, minPos)

        this.subTime()

        /* if (CC_DEBUG) {
            this.gameRunTime = 5
        } */
        this.bossPoint.active = false

        /*  if (Tools.DataMore.gameMode != "bossMode") {
             this.schedule(this.checkBossShow, 0.1)
         } else {
             this.schedule(this.checkPlayerShow, 0.1)
         } */

        this.schedule(() => {
            this.checkPointShow(Tools.DataMore.gameMode != "bossMode" ? this.allBossPoint : this.allPlayerPoint)
        }, 0.1)


        Global.Audio.playSound('被解救报警');

        Global.Audio.playMusic('BG');

        if (Tools.DataMore.gameMode == "bossMode") {
            Global.Event.emit('隐藏rocker');
        }

        Global.Platform.isTouTiao && Global.Platform.startRecord(1800)
    }

    /** 检查boss是否显示 */
    checkPointShow(pointArr: cc.Node[]) {
        if (this.checkPause()) return

        let left = 0, right = 0
        for (let i = 0; i < pointArr.length; i++) {
            const bossPoint = pointArr[i];
            let target = bossPoint.targetBoss
            if (!target || !target.isValid) continue
            if (Tools.DataMore.gameMode == "bossMode" && target.getComponent(RoleBase).playerState == playerState.死亡) {
                bossPoint.active = false
                continue
            }
            let cameraWidth = cc.winSize.width / this.camera.camera.zoomRatio
            let cameraHeight = cc.winSize.height / this.camera.camera.zoomRatio
            let cameraX = this.camera.node.x
            let cameraY = this.camera.node.y

            let checkPos = cc.v2(target.x, target.y)
            let show = false

            this.resetWidget(bossPoint)
            let widget = bossPoint.getComponent(cc.Widget)

            if (cameraX + cameraWidth / 2 < checkPos.x) {//boss在右
                widget.isAlignRight = true
                widget.right = 35
                bossPoint.y = 100 - right * 100
                right++
                show = true
            } else if (cameraX - cameraWidth / 2 > checkPos.x) {//boss在左
                widget.isAlignLeft = true
                widget.left = 35
                bossPoint.y = 100 - left * 100
                left++

                show = true
            } else if (cameraY + cameraHeight / 2 < checkPos.y || cameraY - cameraHeight / 2 > checkPos.y) {//boss在上
                if (cameraX > checkPos.x) {
                    widget.isAlignLeft = true
                    widget.left = 35
                    bossPoint.y = 100 - left * 100
                    left++
                    show = true
                } else {
                    widget.isAlignRight = true
                    widget.right = 35
                    bossPoint.y = 100 - right * 100
                    right++
                    show = true
                }
            }

            bossPoint.active = show
            if (show) {
                let dis = target.position.sub(this.camera.node.position)
                let dir = dis.normalize()
                //计算弧度
                let radian = Math.atan2(dir.y, dir.x)
                //弧度转角度
                let angle = radian * 180 / Math.PI;
                bossPoint.getChildByName("指向").angle = angle
                widget.updateAlignment()
            }
        }
    }

    /*  checkPlayerShow() {
         if (this.checkPause()) return
         let left = 0, right = 0
         for (let i = 0; i < this.allPlayerPoint.length; i++) {
             const playerPoint = this.allPlayerPoint[i];
             let target = playerPoint.targetBoss
             if (!target || !target.isValid) {
                 playerPoint.active = false
                 continue
             }
             let cameraWidth = cc.winSize.width / this.camera.camera.zoomRatio
             let cameraHeight = cc.winSize.height / this.camera.camera.zoomRatio
             let cameraX = this.camera.node.x
             let cameraY = this.camera.node.y
 
             let checkPos = cc.v2(target.x, target.y)
             let show = false
 
             this.resetWidget(playerPoint)
             let widget = playerPoint.getComponent(cc.Widget)
 
             if (cameraX + cameraWidth / 2 < checkPos.x) {//boss在右
                 widget.isAlignRight = true
                 widget.right = 35
                 playerPoint.y = 100 - right * 100
                 right++
                 show = true
             } else if (cameraX - cameraWidth / 2 > checkPos.x) {//boss在左
                 widget.isAlignLeft = true
                 widget.left = 35
                 playerPoint.y = 100 - left * 100
                 left++
                 show = true
             } else if (cameraY + cameraHeight / 2 < checkPos.y || cameraY - cameraHeight / 2 > checkPos.y) {//boss在上
                 if (cameraX > checkPos.x) {
                     widget.isAlignLeft = true
                     widget.left = 35
                     playerPoint.y = 100 - left * 100
                     left++
                     show = true
                 } else {
                     widget.isAlignRight = true
                     widget.right = 35
                     playerPoint.y = 100 - right * 100
                     right++
                     show = true
                 }
             }
 
             playerPoint.active = show
             if (show) {
                 let dis = target.position.sub(this.camera.node.position)
                 let dir = dis.normalize()
                 //计算弧度
                 let radian = Math.atan2(dir.y, dir.x)
                 //弧度转角度
                 let angle = radian * 180 / Math.PI;
                 playerPoint.getChildByName("指向").angle = angle
                 widget.updateAlignment()
             }
         }
     } */

    resetWidget(node: cc.Node) {
        let widget = node.getComponent(cc.Widget)
        widget.isAlignLeft = false
        widget.isAlignRight = false
        widget.isAlignTop = false
        widget.isAlignBottom = false
    }

    /**所有营救的玩家 */
    allSaveGamePlayer: cc.Node[] = []

    /**增加营救玩家 */
    addSaveGamePlayer(playerNode: cc.Node) {
        if (!this.allSaveGamePlayer.includes(playerNode)) {
            this.allSaveGamePlayer.push(playerNode)
        }
    }

    /**删除营救玩家 */
    removeSaveGamePlayer(playerNode: cc.Node) {
        let rmIndex = this.allSaveGamePlayer.indexOf(playerNode)
        if (rmIndex != -1) {
            this.allSaveGamePlayer.splice(rmIndex, 1)
        }
    }

    /**所有玩家 */
    allGamePlayer: cc.Node[] = []

    gamePlayer: cc.Node = null;//主角
    gamePlayerCom: RoleBase = null

    /**初始化游戏角色 */
    initGamePlayer() {
        let matchPlayer = Tools.DataMgr.matchPlayer
        for (const key in matchPlayer) {
            if (Object.prototype.hasOwnProperty.call(matchPlayer, key)) {
                const playerData = matchPlayer[key];
                let player = this.newPlayer(playerData)

                if (playerData.isPlayer) {
                    this.gamePlayer = player
                    player.addComponent(PlayerControl)
                    this.gamePlayerCom = player.getComponent(RoleBase)
                    this.camera.setFollowBody(player)
                } else {
                    player.addComponent(AIControl)
                }
            }
        }

    }

    gemeBossPoint: cc.Node = null
    gameBoss: cc.Node = null
    gameBossCom: RoleBase = null
    /**
     * 新建boss
     * @returns 
     */
    newBoss() {
        Global.Event.emit("boss来了", 0)
        Global.Audio.playSound('收割者出现');
        let bossData = Global.Common.deepCopy(Tools.DataMgr.matchCorpse)
        let boss = Global.Loader.getInstantiate("GameBoss")

        bossData.playerPos = cc.v2(0, 0)

        bossData.lv = 0

        boss.getComponent(RoleBase).setOptions(bossData)
        if (Tools.DataMore.gameMode != "bossMode") {
            boss.addComponent(AIBoss)
        } else {
            GameUI.Instance.bossAddSpeed.active = true
            boss.addComponent(PlayerControl)
            this.gameBossCom = boss.getComponent(RoleBase)
            this.camera.setFollowBody(boss)
        }

        boss.parent = this.playerContent
        this.gameBoss = boss

        this.gemeBossPoint = this.addBossPoint(boss, bossData.skinId)

        Global.Event.emit("收割者出现")
        return boss
    }

    gameSmallBoss: cc.Node[] = []
    /**
     * 新建小boss
     * @returns 
     */
    newSmallBoss(bossIndex: number) {
        Global.Event.emit("boss来了", 1)
        Global.Audio.playSound('收割者出现');
        let bossData = Global.Common.deepCopy(Tools.DataMgr.matchCorpse)
        let smallBoss = Global.Loader.getInstantiate("GameBoss")

        bossData.playerPos = cc.v2(0, 0)

        bossData.isPlayer = false

        bossData.lv = this.gameBoss.getComponent(RoleBase).data.lv || 0
        bossData.isSmallBoss = true
        bossData.bossIndex = bossIndex || 0

        smallBoss.getComponent(RoleBase).setOptions(bossData)
        smallBoss.addComponent(AIBoss)

        smallBoss.parent = this.playerContent
        smallBoss.scale = 0.75

        smallBoss.setSiblingIndex(0)

        this.addBossPoint(smallBoss, bossData.skinId)

        this.gameSmallBoss.push(smallBoss)
        return smallBoss
    }

    bossPointId: number = 0
    /**添加指示 */
    addBossPoint(boss: cc.Node, skinId) {
        let bossPoint = cc.instantiate(this.bossPoint)
        bossPoint.parent = this.node
        bossPoint.targetBoss = boss
        bossPoint.bossPointId = this.bossPointId
        bossPoint.getChildByName("head").getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex("head_" + skinId)
        this.allBossPoint.push(bossPoint)

        bossPoint.on(cc.Node.EventType.TOUCH_END, () => {
            this.gamePlayerCom && (this.gamePlayerCom.playerState == playerState.死亡 || this.gamePlayerCom.isOnBed) && this.camera.setFollowBody(boss)
        }, this)

        this.allBossPoint.sort((a, b) => {
            return a.bossPointId - b.bossPointId
        })
        this.bossPointId++
        return bossPoint
    }

    playerPointId: number = 0
    /**添加指示 */
    addPlayerPoint(player: cc.Node, skinId) {
        let playerPoint = cc.instantiate(this.bossPoint)
        playerPoint.parent = this.node
        playerPoint.targetBoss = player
        playerPoint.bossPointId = this.playerPointId
        playerPoint.getChildByName("head").getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex("playerHead_" + skinId)
        this.allPlayerPoint.push(playerPoint)

        playerPoint.on(cc.Node.EventType.TOUCH_END, () => {
            player && this.camera.setFollowBody(player)
        }, this)

        this.allPlayerPoint.sort((a, b) => {
            return a.bossPointId - b.bossPointId
        })
        this.playerPointId++
        return playerPoint
    }

    /**清除所有小boss */
    removeAllSmallBoss() {
        let gameSmallBoss = this.gameSmallBoss
        for (let i = 0; i < gameSmallBoss.length; i++) {
            const smallBoss = gameSmallBoss[i];
            smallBoss.destroy()
        }
        this.gameSmallBoss = []
        for (let i = 0; i < this.allBossPoint.length; i++) {
            const bossPoint: cc.Node = this.allBossPoint[i];
            if (bossPoint.targetBoss.getComponent(RoleBase).isSmallBoss) {
                bossPoint.destroy()
            }
        }

        this.allBossPoint = []
        this.allBossPoint.push(this.gemeBossPoint)
    }

    /**移除一个小boss */
    removeSmallBoss(smallBoss: cc.Node) {
        let rmIndex = this.gameSmallBoss.indexOf(smallBoss)
        if (rmIndex != -1) {
            this.gameSmallBoss.splice(rmIndex, 1)
        }

        for (let i = 0; i < this.allBossPoint.length; i++) {
            const targetBoss = this.allBossPoint[i].targetBoss;
            if (targetBoss == smallBoss) {
                this.allBossPoint[i].destroy()
                this.allBossPoint.splice(i, 1)
                break
            }
        }

    }

    /**玩家地图位置 */
    playerPos = [/* cc.v2(-1, -1), cc.v2(0, -1), cc.v2(1, -1), cc.v2(-1, 0), cc.v2(0, 0), cc.v2(1, 0) */]
    /**玩家自救地图位置 */
    playerSaveSelfPos = []
    newPlayerIndex: number = 0
    /**创建一个玩家 */
    newPlayer(playerData) {
        let player = Global.Loader.getInstantiate("GamePlayer")

        playerData.playerPos = this.playerPos[this.newPlayerIndex]

        player.getComponent(RoleBase).setOptions(playerData)
        player.parent = this.playerContent

        this.allGamePlayer.push(player)

        let head = Global.Loader.getInstantiate("HeadItem")
        head.getComponent(HeadItem).init(player, playerData.isPlayer)
        GameUI.Instance.headContent.addChild(head)

        this.newPlayerIndex++
        this.addPlayerPoint(player, playerData.skinId)
        return player
    }


    /**获得一个挖矿的空白坐标点 */
    getBlankPos() {
        for (let i = 0; i < this.playerPos.length; i++) {
            const pPos = this.playerPos[i];

            let flag = true
            for (let j = 0; j < this.allGamePlayer.length; j++) {
                const player = this.allGamePlayer[j];
                if (player.getComponent(RoleBase).playerState != playerState.死亡) {
                    continue
                }
                let pMapPos = MapMgr.Instance.getMapIndex(player.x, player.y)
                if (pPos.x == pMapPos.x && pPos.y == pMapPos.y) {
                    flag = false
                    break
                }
            }

            if (flag) {
                return pPos
            }
        }
    }

    /**玩家死完数量 */
    playerDeathCount: number = 0
    /**玩家死亡 */
    onPlayerDeath(mapIndex: number) {
        let playerDeathCount = 0
        let livePlayer: cc.Node = null
        for (let i = 0; i < this.allGamePlayer.length; i++) {
            let player = this.allGamePlayer[i]
            if (player.getComponent(RoleBase).playerState == playerState.死亡) {
                playerDeathCount++
            } else {
                livePlayer = player
            }
        }

        this.playerDeathCount = playerDeathCount
        if (this.playerDeathCount >= 6) {//玩家全部死亡

            this.addMvpPlayer(this.gamePlayer)
            let desc = "全部韭菜被收割，游戏结束"
            Global.Event.emit("游戏提示", desc)
            Global.Audio.playSound('收割者胜利');
            // this.onGameOver(false)
            Global.Event.emit("游戏结束", false)
        }

        if (Tools.DataMore.gameMode == "outMode" && this.playerDeathCount >= 5) {
            this.addMvpPlayer(livePlayer)
            let desc = livePlayer.getComponent(RoleBase).playerName + "成为幸存者，游戏结束"
            Global.Event.emit("游戏提示", desc)
            Global.Event.emit("游戏结束", livePlayer.getComponent(RoleBase).isPlayer ? true : false)
        }
    }

    /**开始游戏 */
    startGame() {

    }

    addMvpPlayer(attkPlayer) {
        if (Tools.DataMore.gameMode == "bossMode") return
        Tools.DataMgr.mvpPlayer.push(attkPlayer)
        if (attkPlayer.getComponent(RoleBase).matchId != this.gamePlayerCom.matchId) {
            Tools.DataMgr.mvpPlayer.push(this.gamePlayer)
        }

        while (Tools.DataMgr.mvpPlayer.length < 3) {
            let allGamePlayer = this.allGamePlayer
            let player = allGamePlayer[Math.floor(Math.random() * allGamePlayer.length)]
            if (player != attkPlayer && player != this.gamePlayer) {
                Tools.DataMgr.mvpPlayer.push(player)
            }
        }
    }

    isWin: boolean = false
    /**游戏结束 */
    onGameOver(isWin: boolean = true) {
        if (this.isOver) return

        this.isOver = true
        this.isWin = Tools.DataMore.gameMode != "bossMode" ? isWin : !isWin


        console.log("游戏结束");
        this.scheduleOnce(() => {
            if (this.isWin || Tools.DataMore.gameMode != "playerMode") {
                // CC_DEBUG && this.addMvpPlayer(this.gamePlayer)
                this.onResult()
            } else {
                // CC_DEBUG && this.addMvpPlayer(this.gamePlayer)
                let data = {
                    onClose: () => {
                        this.onResult()
                    },
                    onSure: () => {
                        this.onRevive()
                    }
                }
                Global.UIManger.pushWindow('GameRevive', 'GameRevive', data);
            }
        }, 5)

    }

    /**复活 */
    onRevive() {
        this.isWin = false
        this.isOver = false
        Tools.DataMgr.mvpPlayer = []
        Game.Instance.playerDeathCount = 0
        GameTask.Instance.hideGoldTask()
        GameTask.Instance.hideSaveTask()
        Global.Audio.playSound('被解救报警');
        Global.Event.emit("视频自救")
        Global.Event.emit("解救玩家")
        Global.Event.emit("开始逃跑")
        Global.Event.emit("开矿场")
        if (this.gamePlayerCom) {
            let desc = this.gamePlayerCom.data.name + "成功解救了韭菜，获得了" + Tools.DataMgr.saveGold + "赏金"
            Global.Event.emit("游戏提示", desc)
            this.gamePlayerCom.toSavePlayer()
        }
    }

    /**游戏结算 */
    onResult() {

        console.log("游戏结算");
        this.scheduleOnce(() => {
            if (this.isRecord && Global.Platform.isTouTiao) {
                Global.Platform.stopRecord()
            } else {
                Global.UIManger.pushWindow('GameOver', 'GameOver', { isWin: this.isWin });
            }
        }, 1)
    }

    /**
     * 
     * @param data  mapIndex:玩家所在的地图,addNum:增加数量 
     */
    addPlayerGold(data) {
        for (let i = 0; i < this.allGamePlayer.length; i++) {
            let player = this.allGamePlayer[i]
            let playerCom = player.getComponent(RoleBase)
            if (player.isValid && playerCom.playerState != playerState.死亡 && playerCom.mapIndex == data.mapIndex) {
                playerCom.addPlayerGold(data.addNum)
                break
            }
        }
    }

    /**
     * 
     * @param data  mapIndex:玩家所在的地图,addNum:增加数量 
     */
    addPlayerLight(data) {
        for (let i = 0; i < this.allGamePlayer.length; i++) {
            let player = this.allGamePlayer[i]
            let playerCom = player.getComponent(RoleBase)
            if (player.isValid && playerCom.playerState != playerState.死亡 && playerCom.mapIndex == data.mapIndex) {
                playerCom.addPlayerLight(data.addNum)
                break
            }
        }
    }

    /**返回大厅 */
    onBreakLobby() {
        Tools.loadding.active = true;
        Tools.loadding.tss.reset();

        Global.Loader.loadBundleRes('Lobby', Global.Loader['ResCfg']['Lobby'], () => {
            this.node.destroy();
            Global.UIManger.pushScene('Lobby');
            setTimeout(() => { Tools.loadding.active = false; }, 50);
        }, (a, b) => { Tools.loadding.tss.setProNum(a, b) });
    }


    /**逃跑倒计时 */
    gameRunTime: number = 20

    isRun: boolean = false
    /**倒计时 */
    subTime() {
        this.timeLabel.string = "" + Math.ceil(this.gameRunTime)
        this.scheduleOnce(() => {
            if (this.gameRunTime > 0) {
                if (!this.checkPause()) {
                    this.gameRunTime--
                    Global.Audio.playSound('倒计时');
                }
                this.subTime()
            } else {
                this.gameTimeNode.active = false
                this.newBoss()
                if (Tools.DataMore.gameMode == "bossMode") {
                    Global.Event.emit('显示rocker');
                }
                this.isRun = true
            }
            if (this.gameRunTime <= 3) {
                this.timeLabel.node.runAction(cc.sequence(cc.scaleTo(0.2, 3), cc.scaleTo(0.2, 1)))
            }
        }, 1)
    }

    update(dt) {
        if (this.checkPause()) return
        /* if (this.gameTimeNode.active) {
            this.gameRunTime -= dt
            this.timeLabel.string = "" + Math.ceil(this.gameRunTime)
            this.gameTimeNode.active = Math.ceil(this.gameRunTime) >= 0
            if (Math.ceil(this.gameRunTime) < 0 && !this.isRun) {
                this.newBoss()
                this.isRun = true
            }
        } */


    }

    /**检测是否暂停 */
    checkPause() {
        return this.isPause || Game.Instance.isOver
    }

}
