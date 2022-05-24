import DataMgr from "../../module/DataMgr";
import { Tools } from "../../module/Tools";
import UIToggle from "../../module/ui/UIToggle";
import UIWindows from "../../module/ui/UIWindows";
import Game from "../scene/Game";
import Lobby from "../scene/Lobby";
import RoleBase from "./player/RoleBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameOver extends UIWindows {

    @property(UIToggle)
    title: UIToggle = null

    @property(cc.Node)
    successNode: cc.Node = null

    @property(cc.Node)
    failNode: cc.Node = null

    @property(cc.Node)
    failNode1: cc.Node = null

    @property(cc.Label)
    glodCount: cc.Label = null

    @property(cc.Node)
    videoGet: cc.Node = null

    @property(cc.Label)
    starLabel: cc.Label = null

    @property(cc.Label)
    starTypeLabel: cc.Label = null

    onLoad() {
        super.onLoad();
        Tools.DataMgr.gameOverCount++

        this.videoGet.on(cc.Node.EventType.TOUCH_END, this.onVideoClick, this)
    }

    /** 前置补0 */
    addPreZero(num) {
        return ('000000000' + num).slice(-3);
    }

    start() {
        zs.Native.ShowBanner();
        zs.Native.ShowInsertAd();
        Tools.DataMore.gameMode == "playerMode" && Global.Event.emit("打点_发送事件", "韭菜模式" + this.isWin ? "胜利结算" : "失败结算")
        zs.Native.TrackEvent("完成游戏")
        if (this.isWin) {
            Global.Event.emit("打点_局状态", `第${this.addPreZero(Tools.DataMgr.gameOverCount + 1)}局`, "胜利")
            if(Tools.DataMore.gameMode == "playerMode"){
                zs.Native.TrackEvent("韭菜模式胜利结算")
            }else{
                zs.Native.TrackEvent("收割者模式胜利结算")
            }
        } else {
            Global.Event.emit("打点_局状态", `第${this.addPreZero(Tools.DataMgr.gameOverCount + 1)}局`, "失败")
            if(Tools.DataMore.gameMode == "playerMode"){
                zs.Native.TrackEvent("韭菜模式失败结算")
            }else{
                zs.Native.TrackEvent("收割者模式失败结算")
            }
        }

        this.starLabel.string = this.isWin ? "+1" : "-1"
        this.starTypeLabel.string = this.isWin ? "观看视频可以评分加倍" : "观看视频还可以避免减少评分"

        let isFirst = cc.sys.localStorage.getItem('首次结束游戏');
        if(isFirst == "" || isFirst == null){
            Tools.DataMgr.isFirstGameOver = true;
            cc.sys.localStorage.setItem("首次结束游戏","true");
        }
    }

    gold: number = 0
    isWin: boolean = true
    setData(data) {
        this.isWin = data.isWin


        this.successNode.active = this.isWin
        this.failNode.active = !this.isWin

        if (Tools.DataMore.gameMode == "outMode") {
            this.successNode.active = true
            this.failNode.active = false
        }
        this.showPlayer()

        if (!Global.Platform.isTouTiao || Tools.DataMore.gameMode == "bossMode") {
            let isPlayerMode = Tools.DataMore.gameMode != "bossMode"
            this.title.setToggle(this.isWin ? (isPlayerMode ? 0 : 2) : (isPlayerMode ? 1 : 3))
        } else {
            this.title.node.active = this.isWin
            this.failNode1.active = !this.isWin
        }

        Global.Audio.playSound(this.isWin ? "游戏胜利" : "游戏失败");

        this.gold = this.isWin ? 30 : 10
        if (Tools.DataMore.gameMode != "bossMode" && this.isWin && Tools.DataMgr.mvpPlayer[0].getComponent(RoleBase).isPlayer) {
            this.gold += 20
        }
        if (Tools.DataMore.gameMode == "bossMode" && this.isWin) {
            this.gold += 20
        }
        this.glodCount.string = "x" + this.gold
    }

    showPlayer() {
        if (Tools.DataMore.gameMode != "bossMode") {
            for (let i = 0; i < this.successNode.childrenCount; i++) {
                const player = this.successNode.children[i];
                // let skinId = Tools.DataMgr.matchPlayer[Tools.DataMgr.matchPlayer.length - i - 1].skinId
                let skinId = Tools.DataMgr.mvpPlayer[i].getComponent(RoleBase).skinId
                player.getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex("player_" + skinId)
            }
        } else {
            for (let i = 0; i < this.successNode.childrenCount; i++) {
                const player = this.successNode.children[i];
                player.active = i == 0
                if (i == 0) {
                    let skinId = Tools.DataBase.bossSkin
                    player.getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex("corpse_" + skinId)
                }
            }
        }

    }

    onVideoClick() {
        Global.Event.emit("打点_发送事件", "结算页三倍领取点击")
        // Global.Platform.showRewardVideo('结算视频', () => {
        //     Global.Event.emit("打点_发送事件", "结算页三倍领取看完")
        //     Tools.DataMore.gameRew = this.gold * 3
        //     super.removeFromUI();
        //     if (this.isWin) {
        //         Tools.DataBase.levelData1.addStar = 2
        //     }
        // });
        zs.Native.PlayVideo(()=>{
            Global.Event.emit("打点_发送事件", "结算页三倍领取看完")
            zs.Native.TrackEvent("结算页三倍领取视频点")
            Tools.DataMore.gameRew = this.gold * 3
            super.removeFromUI();
            if (this.isWin) {
                Tools.DataBase.levelData1.addStar = 2
            }
        })
        Global.UIManger.pushWindow('GameLevel');

    }

    removeFromUI() {
        super.removeFromUI();
        if (this.isWin) {
            Tools.DataBase.levelData1.addStar = 1
        } else {
            Tools.DataBase.levelData1.addStar = -1
        }
        Tools.DataMore.gameRew = this.gold
        Global.UIManger.pushWindow('GameLevel');
        if(Tools.DataMgr.isFirstGameOver){
            zs.Native.TrackEvent("第一局完成后返回大厅人数");
        }
    }
}
