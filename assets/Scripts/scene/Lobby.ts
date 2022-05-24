
import DragonSkinNode from "../../module/animation/DragonSkinNode";
import { Tools } from "../../module/Tools";
import UIToggle from "../../module/ui/UIToggle";
import GM from "../game/GM";
import Sign from "../lobby/Sign";

const { ccclass, property } = cc._decorator;

var first = true;
@ccclass
export default class Lobby extends cc.Component {

    /**game资源是否下载完成 */
    static gameLoadEnd: boolean = false

    /**map资源是否下载完成 */
    static mapLoadEnd: boolean = false

    @property(cc.Node)
    banner: cc.Node = null;

    @property(cc.Node)
    playerNode: cc.Node = null;

    @property(cc.Node)
    startBtn: cc.Node = null;

    @property(cc.Node)
    startBtn_Boss: cc.Node = null;

    @property(cc.Node)
    startBtn_Out: cc.Node = null;

    @property(cc.Node)
    startBtn_Out2: cc.Node = null;


    @property(cc.Node)
    propBtn: cc.Node = null;

    @property(cc.Node)
    skinBtn: cc.Node = null;

    @property(cc.Node)
    offLineBtn: cc.Node = null;

    @property(cc.Node)
    noticeBtn: cc.Node = null;

    @property(cc.Node)
    addGold2Btn: cc.Node = null;

    @property(cc.SpriteAtlas)
    mapTexture: cc.SpriteAtlas[] = [];

    @property(cc.Node)
    openAwemeUserProfile: cc.Node = null;

    @property(cc.Node)
    shareBtn: cc.Node = null;

    @property(cc.Node)
    lv: cc.Node = null

    @property(cc.Label)
    lvLabel: cc.Label = null

    @property(cc.Node)
    rank: cc.Node = null

    @property(cc.Node)
    starBox: cc.Node = null

    @property(cc.Node)
    starItem: cc.Node = null

    teasureBox = null;
    onLoad() {
        this.setEvent();
        for (let i = 0; i < this.mapTexture.length; i++) {
            Tools.DataMore.initItemSpriteList(this.mapTexture[i]);
        }

        if (!Lobby.gameLoadEnd) {
            Global.Loader.loadBundle('Effects', () => {
                Global.Loader.loadBundle('Game', () => {
                    Lobby.gameLoadEnd = true
                })
            })
        }

        let isFirst = cc.sys.localStorage.getItem('首次打开游戏');
        if(isFirst == "" || isFirst == null){
            this.onClickBtn("公告");
            cc.sys.localStorage.setItem('首次打开游戏',"true");
            this.propBtn.getChildByName("finger").active = false;
        }else{
            this.propBtn.getChildByName("finger").active = true;
        }

    }

    setEvent() {
        this.startBtn.on(cc.Node.EventType.TOUCH_END, this.onStartGame, this)

        this.startBtn_Boss.on(cc.Node.EventType.TOUCH_END, this.onStartGame_Boss, this)

        this.startBtn_Out.on(cc.Node.EventType.TOUCH_END, this.onStartGame_Out, this)


        this.startBtn_Out2.on(cc.Node.EventType.TOUCH_END, this.onClickBtn.bind(this, "助力"), this)



        this.propBtn.on(cc.Node.EventType.TOUCH_END, this.onClickBtn.bind(this, "道具"), this)
        this.skinBtn.on(cc.Node.EventType.TOUCH_END, this.onClickBtn.bind(this, "皮肤"), this)
        this.offLineBtn.on(cc.Node.EventType.TOUCH_END, this.onClickBtn.bind(this, "离线收益"), this)
        this.noticeBtn.on(cc.Node.EventType.TOUCH_END, this.onClickBtn.bind(this, "公告"), this)



        this.playerNode.on(cc.Node.EventType.TOUCH_END, this.onStartGM, this)

        this.openAwemeUserProfile.on(cc.Node.EventType.TOUCH_END, this.onOpenAwemeUserProfile, this)

        this.shareBtn.on(cc.Node.EventType.TOUCH_END, this.onShare, this)

        this.openAwemeUserProfile.active = Global.api.openAwemeUserProfile && Global.Platform.isTouTiao && !Tools.DataBase.isProfile

        this.shareBtn.active = Global.Platform.isWechat

        Global.Event.on('进入游戏', this.gotoGame, this);
        Global.Event.on('切换皮肤', this.setCurPlayer, this);
        Global.Event.on('检测离线收益', this.checkOffLine, this);

        Global.Event.on('刷新离线金币', this.initOffLineCount, this);

        Global.Event.on('onShow', this.checkShare, this);
    }

    /**检测离线收益 */
    checkOffLine() {
        let time = Tools.DataBase.getOffLineTime().min
        if (Tools.DataBase.zs_line_num != 0 && time >= Tools.DataBase.zs_line_num) {
            this.onClickBtn("离线收益")
        }
    }

    onOpenAwemeUserProfile() {
        Global.api.openAwemeUserProfile();
    }

    shareTime = 0
    isShare: boolean = false
    onShare() {
        this.isShare = true
        this.shareTime = Date.now()
        Global.Platform.share();
    }

    checkShare() {
        if (this.isShare && Date.now() - this.shareTime > 3000) {
            Tools.DataBase.signCount++
            if (Tools.DataBase.signCount <= 3) {
                Tools.DataBase.addGold1(100)
                Global.Event.emit('UI提示', { content: '成功领取100快乐币' });
            } else {
                Global.Event.emit('UI提示', { content: '超过每日最大奖励次数' });
            }
        }

        this.isShare = false
    }

    onDestroy() {
        Global.Event.removeAllListeners(this);
    }

    /**设置当前人物 */
    setCurPlayer() {
        // this.playerNode.getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex("player_" + Tools.DataBase.playerSkin)
        this.playerNode.getChildByName("ske").getComponent(DragonSkinNode).changeSkin(Tools.DataBase.playerSkin - 1)
    }

    protected start(): void {
        this.setCurPlayer();
        cc.director.getScheduler().setTimeScale(1)
        Tools.DataMore.GMBossID = 0

        first && this.onClickBtn("游戏提示");
        if (!first) {
            Tools.DataMgr.gameCount++
            if (Sign.checkDay() != -1) {
                this.onClickBtn("签到")
            }
            Global.Platform.isTouTiao && Global.Platform.showInterstitial()
            Global.Event.emit("打点_发送事件", "返回大厅")
        }

        if (Tools.DataMore.gameRew > 0) {
            Tools.DataBase.addGold1(Tools.DataMore.gameRew)
            Tools.DataMore.gameRew = 0
        }

        this.initStartBtn()

        this.initLevel()

        this.initOffLineCount()
        this.schedule(this.initOffLineCount, 1)
        Tools.DataBase.notice_3 && this.hideNoticRed()

        first = false
    }

    initStartBtn() {
        let bossVLabel = this.startBtn_Boss.getChildByName("videoCount")
        let boosVBox = this.startBtn_Boss.getChildByName("vBox")

        let outVLabel = this.startBtn_Out.getChildByName("videoCount")
        let outVBox = this.startBtn_Out.getChildByName("vBox")

        let bossVCount = Tools.DataMgr.getBossVCount()
        let outVCount = Tools.DataMgr.getOutVCount()

        if (bossVCount >= 5) {
            bossVLabel.active = false
            boosVBox.getChildByName("start_label").setPosition(cc.v2(0, 0))
            boosVBox.getChildByName("vicon").active = false
        } else {
            bossVLabel.getComponent(cc.Label).string = `游玩${bossVCount}/5次后永久解锁`
        }

        if (outVCount >= 5) {
            outVLabel.active = false
            outVBox.getChildByName("start_label").setPosition(cc.v2(0, 0))
            outVBox.getChildByName("vicon").active = false
        } else {
            outVLabel.getComponent(cc.Label).string = `游玩${outVCount}/5次后永久解锁`
        }

    }

    /**离线收益显示 */
    initOffLineCount() {
        let offLineData = Tools.DataBase.getOffLineTime()
        this.offLineBtn.getChildByName("count").getComponent(cc.Label).string = "" + offLineData.min
        let desc = this.offLineBtn.getChildByName("desc")
        desc.active = offLineData.min < 120
        desc.getComponent(cc.Label).string = (60 - offLineData.sec) + "s后 +1"
    }

    arr = ["青铜", "白银", "黄金", "钻石", "星耀", "王者"]
    arr2 = ["5", "4", "3", "2", "1"]
    initLevel() {
        let levelData = Tools.DataBase.levelData1
        this.lv.getComponent(UIToggle).setToggle(levelData.lv)


        let rankIndex = 5 - levelData.maxRank + levelData.rank


        this.lvLabel.string = this.arr[levelData.lv] + this.arr2[rankIndex]
        this.rank.getComponent(UIToggle).setToggle(rankIndex)

        for (let i = 0; i < (levelData.maxStar > 5 ? 5 : levelData.maxStar); i++) {
            let starItem = cc.instantiate(this.starItem)
            starItem.getComponent(UIToggle).setToggle(levelData.star > i ? 1 : 0)
            starItem.active = true
            starItem.parent = this.starBox
        }
    }


    /**开始游戏按钮被点击 */
    onStartGame() {
        Global.Event.emit("打点_发送事件", "开始游戏")
        let isFirst = cc.sys.localStorage.getItem('首次进入韭菜模式');
        if(isFirst == "" || isFirst == null){
            zs.Native.TrackEvent("首次进入韭菜模式")
            cc.sys.localStorage.setItem("首次进入韭菜模式","true");
        }
        Tools.DataMore.gameMode = "playerMode"
        this.onClickBtn("匹配");
    }

    /**收割者开始游戏按钮被点击 */
    onStartGame_Boss() {
        let bossVCount = Tools.DataMgr.getBossVCount()
        if (bossVCount >= 5) {
            Tools.DataMore.gameMode = "bossMode"
            this.onClickBtn("匹配");
            return
        }

        Global.Event.emit("打点_发送事件", "观看收割者开始游戏视频")
        zs.Native.PlayVideo(()=>{
            Global.Event.emit("打点_发送事件", "观看收割者开始游戏视频完成")
            Global.Event.emit("打点_发送事件", "收割者开始游戏")
	        zs.Native.TrackEvent("收割者模式视频点")
            Tools.DataMgr.addBossVCount()
            this.initStartBtn()
            Tools.DataMore.gameMode = "bossMode"
            this.onClickBtn("匹配");
        });

    }

    /**大逃杀开始游戏按钮被点击 */
    onStartGame_Out() {
        let outVCount = Tools.DataMgr.getOutVCount()
        if (outVCount >= 5) {
            Tools.DataMore.gameMode = "outMode"
            this.onClickBtn("匹配");
            return
        }
        Global.Event.emit("打点_发送事件", "观看大逃杀开始游戏视频")
        zs.Native.PlayVideo(()=>{
            Global.Event.emit("打点_发送事件", "观看大逃杀开始游戏视频完成")
            Global.Event.emit("打点_发送事件", "大逃杀开始游戏")
            Tools.DataMgr.addOutVCount()
            this.initStartBtn()
            Tools.DataMore.gameMode = "outMode"
            this.onClickBtn("匹配");
        });

    }

    clickGMCount: number = 0;
    /**开始GM */
    onStartGM() {
        if (Global.Platform.isWeb || (Global.Platform.isTouTiao && GM.Debugger)) {
            this.clickGMCount++
            if (this.clickGMCount >= 5) {
                this.clickGMCount = 0
                this.onClickBtn("GM");
            }
        }

    }

    gotoGame() {
        this.node.destroy()
        Global.UIManger.pushScene('Game');
    }

    hideNoticRed() {
        this.noticeBtn.getChildByName("红点").active = false
        Tools.DataBase.notice_3 = true
        Tools.DataBase.saveData()
    }


    onClickBtn(type, data?) {
        if (type == '狂点') {
            Global.UIManger.pushWindow('AlertClick', data);
        } else if (type == '更多') {
            // Global.UIManger.pushWindowTop('FullFlows3');
        } else if (type == '签到') {
            Global.UIManger.pushWindow('Sign')
        } else if (type == '游戏提示') {
            Global.UIManger.pushWindow('AlertAgree');
        } else if (type == '匹配') {
            Global.UIManger.pushWindow('Match');
        } else if (type == '道具') {
            Global.UIManger.pushWindow('Shop');
        } else if (type == '皮肤') {
            Global.UIManger.pushWindow('Skin');
        } else if (type == '离线收益') {
            Global.UIManger.pushWindow('OffLine');
        } else if (type == '公告') {
            Global.UIManger.pushWindow('Notice');
            this.hideNoticRed()
        } else if (type == '助力') {
            Global.UIManger.pushWindow('OutVideo');
        } else if (type == 'GM') {
            Global.UIManger.pushWindow('GM', 'GM', { type: "lobby" });
        } else if (type == '视频广告') {
            zs.Native.PlayVideo(()=>{
                let rom = Math.floor(Math.random() * 2 + 1)
                this.teasureBox.activ = false;
                switch (rom) {
                    case 1:
                        Global.Event.emit('UI金币2', { inp: cc.v2(0, 0), goldCoin: 1000 });
                        break;
                    case 2:
                        Global.Event.emit('UI金币1', { inp: cc.v2(0, 0), goldCoin: 1000 });
                        break;
                    default:
                        console.warn('错误宝箱奖励');
                        break;
                }
            }, () => {
                Global.Event.emit('UI提示', { content: '未观看完视频，没有奖励哦~' });
            });
        }
    }

    update(dt) { }
}
