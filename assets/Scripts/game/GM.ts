import { Tools } from "../../module/Tools";
import UIWindows from "../../module/ui/UIWindows";
import Game from "../scene/Game";
import GameUI from "../scene/GameUI";
import GameKUI from "./GameKUI";
import RoleBase from "./player/RoleBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GM extends UIWindows {

    static Debugger: boolean = false

    @property(cc.Node)
    lobbyBox: cc.Node = null

    @property(cc.Node)
    playerBox: cc.Node = null

    @property(cc.Node)
    bossBox: cc.Node = null

    /**  ============  主页 ================= */

    @property(cc.EditBox)
    gold: cc.EditBox = null

    @property(cc.EditBox)
    bossID: cc.EditBox = null

    /**  ============  韭菜模式 ================= */

    @property(cc.EditBox)
    gameGold: cc.EditBox = null

    @property(cc.EditBox)
    gameKnowledge: cc.EditBox = null

    @property(cc.EditBox)
    gameSaveGold: cc.EditBox = null

    @property(cc.EditBox)
    bossSpeed: cc.EditBox = null

    @property(cc.EditBox)
    playerSpeed: cc.EditBox = null

    @property(cc.EditBox)
    gameSpeed: cc.EditBox = null

    @property(cc.Node)
    uiBtn: cc.Node = null


    /**  ============  boss模式 ================= */

    @property(cc.EditBox)
    kLv: cc.EditBox = null

    @property(cc.EditBox)
    bossLv: cc.EditBox = null

    @property(cc.EditBox)
    gameSpeed_Boss: cc.EditBox = null

    @property(cc.Node)
    bossUIBtn: cc.Node = null

    onLoad() {
        super.onLoad();

        this.uiBtn.on(cc.Node.EventType.TOUCH_END, this.uiClick, this)

        this.bossUIBtn.on(cc.Node.EventType.TOUCH_END, this.bossUIClick, this)
    }

    data = null
    setData(data) {
        this.data = data
        if (this.data.type == "lobby") {
            this.initLobby()
        } else if (this.data.type == "playerMode") {
            this.initPlayerMode()
        } else if (this.data.type == "bossMode") {
            this.initGameMode()
        }
    }

    initLobby() {
        this.lobbyBox.active = true
        this.gold.string = Tools.DataBase.gold1Count + ''
    }

    initPlayerMode() {
        this.playerBox.active = true
        this.gameGold.string = Game.Instance.gamePlayerCom.playerGold + ''
        this.gameKnowledge.string = Game.Instance.gamePlayerCom.playerLight + ''
        this.gameSaveGold.string = Tools.DataMgr.saveGold + ''
        if (Game.Instance.gameBoss && Game.Instance.gameBoss.isValid) {
            this.bossSpeed.string = Game.Instance.gameBoss.getComponent(RoleBase).maxMoveSpeed + ''
        }

        if (Game.Instance.gamePlayer && Game.Instance.gamePlayer.isValid) {
            this.playerSpeed.string = Game.Instance.gamePlayerCom.maxMoveSpeed + ''
        }

        this.gameSpeed.string = cc.director.getScheduler().getTimeScale() + ''

        this.uiBtn.getChildByName("label").getComponent(cc.Label).string = GameUI.Instance.node.active ? "隐藏UI" : "显示UI"

    }

    initGameMode() {
        this.bossBox.active = true

        this.kLv.string = (GameKUI.Instance.lv + 1) + ''

        if (Game.Instance.gameBoss && Game.Instance.gameBoss.isValid) {
            this.bossLv.string = (Game.Instance.gameBossCom.data.lv + 1) + ''
        }

        this.gameSpeed_Boss.string = cc.director.getScheduler().getTimeScale() + ''

        this.bossUIBtn.getChildByName("label").getComponent(cc.Label).string = GameUI.Instance.node.active ? "隐藏UI" : "显示UI"
    }

    start() {
        Global.Event.emit("游戏暂停")
    }

    uiClick() {
        let label = this.uiBtn.getChildByName("label").getComponent(cc.Label)
        label.string = label.string == "隐藏UI" ? "显示UI" : "隐藏UI"
    }

    bossUIClick() {
        let label = this.bossUIBtn.getChildByName("label").getComponent(cc.Label)
        label.string = label.string == "隐藏UI" ? "显示UI" : "隐藏UI"
    }

    removeFromUI(): void {
        if (this.data.type == "lobby") {
            this.endLobby()
        } else if (this.data.type == "playerMode") {
            this.endPlayerMode()
        } else if (this.data.type == "bossMode") {
            this.endBossMode()
        }
        super.removeFromUI()
        Global.Event.emit("游戏继续")
    }

    endLobby() {
        let gold = Number(this.gold.string)
        if (isNaN(gold)) {
            Global.Event.emit('UI提示', { content: '快乐币数量设置失败' });
        } else {
            Tools.DataBase.gold1Count = gold
            Tools.DataBase.saveData()
            Global.Event.emit('刷新钱', 1);
        }

        let bossID = Number(this.bossID.string)
        if (isNaN(bossID)) {
            Global.Event.emit('UI提示', { content: 'bossID设置失败' });
        } else {
            Tools.DataMore.GMBossID = bossID
        }
    }

    endPlayerMode() {
        let gameGold = Number(this.gameGold.string)
        if (isNaN(gameGold)) {
            Global.Event.emit('UI提示', { content: '纸钞数量设置失败' });
        } else {
            Game.Instance.gamePlayerCom.playerGold = gameGold
            Game.Instance.gamePlayerCom.addPlayerGold(0)
        }

        let gameKnowledge = Number(this.gameKnowledge.string)
        if (isNaN(gameKnowledge)) {
            Global.Event.emit('UI提示', { content: '知识数量设置失败' });
        } else {
            Game.Instance.gamePlayerCom.playerLight = gameKnowledge
            Game.Instance.gamePlayerCom.addPlayerLight(0)
        }

        let gameSaveGold = Number(this.gameSaveGold.string)
        if (isNaN(gameSaveGold)) {
            Global.Event.emit('UI提示', { content: '营救赏金设置失败' });
        } else {
            Tools.DataMgr.saveGold = gameSaveGold
            Global.Event.emit("增加营救赏金", 0);
        }

        let bossSpeed = Number(this.bossSpeed.string)
        if (isNaN(bossSpeed)) {
            Global.Event.emit('UI提示', { content: 'boss速度设置失败' });
        } else {
            if (Game.Instance.gameBoss) {
                let allBoss = Game.Instance.gameSmallBoss.concat(Game.Instance.gameBoss)
                for (let i = 0; i < allBoss.length; i++) {
                    const boss = allBoss[i];
                    if (boss && boss.isValid) {
                        boss.getComponent(RoleBase).maxMoveSpeed = bossSpeed
                    }
                }
            }

        }

        let playerSpeed = Number(this.playerSpeed.string)
        if (isNaN(playerSpeed)) {
            Global.Event.emit('UI提示', { content: '玩家速度设置失败' });
        } else {
            let allPlayer = Game.Instance.allGamePlayer
            for (let i = 0; i < allPlayer.length; i++) {
                const player = allPlayer[i];
                if (player && player.isValid) {
                    player.getComponent(RoleBase).maxMoveSpeed = playerSpeed
                }
            }
        }

        let gameSpeed = Number(this.gameSpeed.string)
        if (isNaN(gameSpeed)) {
            Global.Event.emit('UI提示', { content: '游戏进程设置失败' });
        } else {
            cc.director.getScheduler().setTimeScale(gameSpeed)
        }

        let label = this.uiBtn.getChildByName("label").getComponent(cc.Label)
        if (label.string == "隐藏UI") {
            GameUI.Instance.node.active = true
        } else {
            GameUI.Instance.node.active = false
        }

    }


    endBossMode() {

        let kLv = Number(this.kLv.string)
        if (isNaN(kLv)) {
            Global.Event.emit('UI提示', { content: '矿场等级设置失败' });
        } else {
            Global.Event.emit('设置矿场等级', kLv);
        }

        let bossLv = Number(this.bossLv.string)
        if (isNaN(bossLv) || !Game.Instance.gameBoss) {
            Global.Event.emit('UI提示', { content: 'boss等级设置失败' });
        } else {
            Game.Instance.gameBossCom.data.lv = bossLv - 1
            Game.Instance.gameBossCom.resetBossData()
        }



        let gameSpeed_Boss = Number(this.gameSpeed_Boss.string)
        if (isNaN(gameSpeed_Boss)) {
            Global.Event.emit('UI提示', { content: '游戏进程设置失败' });
        } else {
            cc.director.getScheduler().setTimeScale(gameSpeed_Boss)
        }

        let label = this.bossUIBtn.getChildByName("label").getComponent(cc.Label)
        if (label.string == "隐藏UI") {
            GameUI.Instance.node.active = true
        } else {
            GameUI.Instance.node.active = false
        }
    }

}
