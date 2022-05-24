import { Tools } from "../module/Tools";
import UIManger from "../Creator/UIManger";
import BannerNode from "../module/ui/BannerNode";
import TTShareVideo from "../OVTT/TTMgr/TTShareVideo";
import HagicLogger from "../Point/HagicLogger";
import GM from "../Scripts/game/GM";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(cc.Node)
    loginNode: cc.Node = null;

    @property(cc.JsonAsset)
    platformJson: cc.JsonAsset = null;
    @property(cc.JsonAsset)
    resJson: cc.JsonAsset = null;
    @property(cc.JsonAsset)
    configJson: cc.JsonAsset = null;
    @property(cc.TextAsset)
    gameInitD: cc.TextAsset = null;

    runTime: number = 0;

    onLoad() {
        let lan = localStorage.getItem("language");
        if(lan==null || lan == "" || lan == undefined){
            zs.Native.GetLanguage();
        }else{
            zs.Native.onGetLanguage(lan);
        }
        if (CC_DEBUG) {

            cc.dynamicAtlasManager.enabled = false;

            // cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
            // let frame = cc.view.getFrameSize();
            // this.getComponent(cc.Canvas).designResolution = cc.size(cc.winSize.height / frame.height * frame.width, cc.winSize.height);
            // this.getComponent(cc.Canvas).fitHeight = true
            // this.getComponent(cc.Canvas).fitWidth = false
        }
        this.checkIsMiniGame()
        if (Global.miniScreen) {
            this.getComponent(cc.Canvas).fitHeight = true
            this.getComponent(cc.Canvas).fitWidth = false
        }
        /*  let frame = cc.view.getFrameSize();
         if (frame.width > frame.height) {
             this.getComponent(cc.Canvas).fitHeight = true
             this.getComponent(cc.Canvas).fitWidth = false
         } */


        let collisionMng = cc.director.getCollisionManager();
        collisionMng.enabled = true;//开启碰撞检测
        // collisionMng.enabledDebugDraw = true;
        // collisionMng._debugDrawer.node.group = "obj"
        // collisionMng.enabledDrawBoundingBox = true;

        Global._init(this.platformJson.json);
        Global.Loader.init(this.resJson.json)
        Tools._init(this.gameInitD.text);
        Tools.initJson(this.configJson.json);
        Global.Http.defaultUrl = "https://adminhy.eayyou.com";
        Statics.init('https://adminhy.eayyou.com', 38, '3a78f0bcc00e547dd84cedff959889ea', Global.Platform.name);


        new HagicLogger().init()

        Global.UIManger = new UIManger();

        Global.Event.on(GlobalEvent.API_ON_HIDE, () => {
            console.log('GlobalEvent.API_ON_HIDE');
            cc.audioEngine.pauseMusic();
            cc.audioEngine.stopAllEffects();
            cc.director.pause();
        }, this);

        Global.Event.on(GlobalEvent.API_ON_SHOW, () => {
            console.log('GlobalEvent.API_ON_SHOW');
            cc.audioEngine.resumeMusic();
            cc.director.resume();
        }, this);

        Global.Event.on(GlobalEvent.API_VIDEO_FAIL, () => {
            if (Global.Platform.isVivo) {
                Global.Platform.videoAd = null
                cc.audioEngine.resumeMusic();
                cc.director.resume();
            }
        }, this);

        Global.Event.on(GlobalEvent.API_VIDEO_SUCCESS, () => {
            if (Global.Platform.isVivo) {
                Global.Platform.videoAd = null
                cc.audioEngine.resumeMusic();
                cc.director.resume();
            }
        }, this);

        cc.game.on(cc.game.EVENT_HIDE, () => {
            console.log(" 游戏进入后台   保存数据 ");
            Tools.DataBase.saveData();
        })

        BannerNode.init();
        BannerNode.preload(2);

        Global.Debugger = GM.Debugger;


        Global.Platform.isTouTiao && TTShareVideo.init()
        Global.Platform.isTouTiao && Global.Platform.preLoadVideo(Math.random() > 0.5 ? "解锁皮肤" : "视频自救")

    }

    /** 计算是否为小屏 */
    checkIsMiniGame() {
        try {
            var org = cc.view['_orientation'];
            if (org != cc.macro.ORIENTATION_PORTRAIT) {
                Global.miniScreen = (cc.winSize.width / cc.winSize.height < 1.4) && (cc.winSize.width / cc.winSize.height > 0.47)
            } else {
                Global.miniScreen = (cc.winSize.height / cc.winSize.width < 1.4) && (cc.winSize.width / cc.winSize.height > 0.47)
            }

        } catch (error) {

        }
    }

    start() {
        Global.Event.emit("打点_发送事件", "进入游戏")
        zs.Native.TrackEvent("开始游戏")
        this.loginNode.active = true;
        this.loginNode.tss.tologin();

        Tools.DataMore.initMapBg()
        Tools.DataMore.initTiledMapList()
    }

    update(dt) {
        this.runTime += dt;
        if (this.runTime > 1000) {
            this.runTime -= 1000;
            Tools.runTime++;
        }
    }

}
