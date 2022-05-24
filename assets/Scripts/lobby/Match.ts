import { Tools } from "../../module/Tools";
import UIToggle from "../../module/ui/UIToggle";
import UIWindows from "../../module/ui/UIWindows";
import Lobby from "../scene/Lobby";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Match extends UIWindows {

    @property(cc.Label)
    time: cc.Label = null;

    @property(cc.Node)
    corpseItem: cc.Node = null;

    @property(cc.Node)
    playerBox: cc.Node = null;

    @property(cc.Node)
    changeSkin: cc.Node = null;

    onLoad(): void {
        super.onLoad()

        Global.Event.emit("打点_发送事件", "匹配界面")
        zs.Native.TrackEvent("匹配界面")
        Tools.DataMgr.reSet()
        // Tools.DataBase.bossSkin =1
    }

    data = null
    setData(data) {
        this.data = data
    }

    matchNode = []
    protected start(): void {



        for (let i = 0; i < this.playerBox.childrenCount; i++) {
            this.matchNode.push({ item: this.playerBox.children[i], isCreate: false })
        }

        this.matchNode.push({ item: this.corpseItem, isCreate: false })

        if (Tools.DataMore.gameMode == "bossMode") {
            // this.changeSkin.active = true
            this.matchNode[1].item.getChildByName("name").color = cc.Color.WHITE
            this.showPlayer(this.matchNode[6], "corpse_" + Tools.DataBase.bossSkin, Tools.DataBase.bossSkin, false, true)
        } else {
            this.showPlayer(this.matchNode[1], "player_" + Tools.DataBase.playerSkin, Tools.DataBase.playerSkin, true, true)
            let isFirst = cc.sys.localStorage.getItem('首次进入韭菜匹配界面');
            if(isFirst == "" || isFirst == null){
                zs.Native.TrackEvent("首次进入韭菜匹配界面")
                cc.sys.localStorage.setItem("首次进入韭菜匹配界面","true");
            }
        }


        this.scheduleOnce(() => {
            this.addTime()
        }, 1)

        this.schedule(this.createOther, 0.2/* 0.8 */)
    }

    /**创建其余玩家 */
    createOther() {
        if (this.allPlayerCount >= 7) return
        let index = Math.floor(Math.random() * this.matchNode.length)
        let skinId = Tools.DataMgr.getRandomSkinID()
        let iconName = "player_" + skinId
        if (index == 6) {
            skinId = Math.ceil(Math.random() * 7)
            if (Tools.DataMore.GMBossID > 0) {
                skinId = Tools.DataMore.GMBossID
                skinId > 7 && (skinId = 7)
            }
            iconName = "corpse_" + skinId
        }
        this.showPlayer(this.matchNode[index], iconName, skinId, index != 6)

        if (this.timeCount > 4 || Math.random() > 0.7) {
            this.createOther()
        }

    }

    allPlayerCount: number = 0
    /**
     * 
     * @param item 
     * @param iconName icon名字
     * @param isSelf 
     */
    showPlayer(matchData, iconName: string, skinId: number, isPlayer: boolean, isSelf: boolean = false) {
        if (matchData.isCreate) return
        Global.Audio.playSound('匹配');
        matchData.isCreate = true
        let item: cc.Node = matchData.item
        let player = item.getChildByName("player")
        player.getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex(iconName)
        player.active = true
        item.getChildByName("bg2").active = false

        let name = "自己"
        if (!isSelf) {
            name = Tools.DataMgr.getPlayerName()
            item.getChildByName("name").getComponent(cc.Label).string = name
            player.runAction(cc.sequence(cc.scaleTo(0.2, 1.35), cc.scaleTo(0.2, 1)))
        } else {
            item.getChildByName("bg1").getChildByName("bg").getComponent(UIToggle).setToggle(1)
            item.getChildByName("name").getComponent(cc.Label).string = name
        }

        let matchData1 = {
            matchId: this.allPlayerCount,
            skinId: skinId,
            isPlayer: isSelf,
            name: name
        }

        isPlayer && Tools.DataMgr.matchPlayer.unshift(matchData1)
        !isPlayer && (Tools.DataMgr.matchCorpse = matchData1)

        this.allPlayerCount++
        if (this.allPlayerCount >= 7) {
            this.unschedule(this.createOther)
            this.gotoGame()
        }
    }

    timeCount = 0
    /**增加时间 */
    addTime() {
        this.timeCount++
        this.time.string = this.timeCount + ""
        this.scheduleOnce(() => {
            this.addTime()
        }, 1)
    }

    isReady: boolean = false
    /**准备 */
    onReady(e: cc.Event) {
        e.target.getComponent(cc.Button).interactable = false
        e.target.getComponent(UIToggle).setToggle(1)
        e.target.children[0].getComponent(UIToggle).setToggle(1)
        this.isReady = true
        if (this.allPlayerCount >= 7) {
            this.gotoGame()
        }
    }

    bossSkinId: number = 1
    /**改变皮肤 */
    onChangeBossSkin(e: cc.Event) {
        Global.Event.emit("打点_发送事件", "点击更换收割者皮肤视频")
        // Global.Platform.showRewardVideo('解锁皮肤', () => {
        //     Global.Event.emit("打点_发送事件", "观看更换收割者皮肤视频成功")
        //     let skinId = 1 + Math.ceil(Math.random() * 6)
        //     while (this.bossSkinId == skinId) {
        //         skinId = 1 + Math.ceil(Math.random() * 6)
        //     }
        //     this.bossSkinId = skinId
        //     Tools.DataBase.bossSkin = skinId
        //     Tools.DataMgr.matchCorpse.skinId=skinId
        //     let player = this.corpseItem.getChildByName("player")
        //     player.getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex("corpse_" + skinId)
        // });
        zs.Native.PlayVideo(()=>{
            Global.Event.emit("打点_发送事件", "观看更换收割者皮肤视频成功")
            zs.Native.TrackEvent("收割者模式准备阶段更换皮肤视频点")
            let skinId = 1 + Math.ceil(Math.random() * 6)
            while (this.bossSkinId == skinId) {
                skinId = 1 + Math.ceil(Math.random() * 6)
            }
            this.bossSkinId = skinId
            Tools.DataBase.bossSkin = skinId
            Tools.DataMgr.matchCorpse.skinId=skinId
            let player = this.corpseItem.getChildByName("player")
            player.getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex("corpse_" + skinId)
        })
    }

    /**进入游戏 */
    gotoGame() {
        if (!this.isReady) return
        this.scheduleOnce(() => {
            let toGame = () => {
                Global.Event.emit("进入游戏")
            }
            if (Lobby.mapLoadEnd && Lobby.gameLoadEnd) {
                toGame()
            } else {
                this.scheduleOnce(() => {
                    this.gotoGame()
                }, 0.1)
            }
        }, 1)
    }

}
