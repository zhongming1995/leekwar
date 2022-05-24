import { Tools } from "../Tools";


const { ccclass, property } = cc._decorator;

let launchTime = Date.now();
@ccclass
export default class BannerNode extends cc.Component {
    @property
    aUnitName: string = ''
    @property
    autoShow: boolean = true;
    @property
    alginBottom: boolean = true;
    @property
    _updateTime: number = 0; //自动更新的时间

    @property
    get updateTime() { return this._updateTime; }
    set updateTime(v) {
        this._updateTime = v;
        // cc.Class.Attr.setClassAttr(BannerNode, 'isBlink', 'visible', this._updateTime > 0);
    }

    @property
    isBlink: boolean = false;

    @property(cc.Node)
    bindNode: cc.Node = null; //绑定节点 当节点更新、隐藏时，自动显示广告

    private static bannerSize: any = null;

    private notApi: boolean = false;
    private runTime: number = 0;

    private static bannerCaches: any = {};
    private static preIndex: number = 0;
    private static nodeQueue: Array<BannerNode> = [];

    private static currentName: string = '';
    private static showIndex: number = 0;
    private static bannerNameCalcelist: Array<string> = [];// 均分几个banner点击率
    public static lastShow: BannerNode = null;

    onLoad() {
        // this.node.tss = this
        // if (Global.Platform.isBaiDu) {
        //     this.node.active = false;
        //     return;
        // }
        // BannerNode.nodeQueue.push(this)
        // // this.bindNode && this.bindNode.on('onWindowFocus', this.onWindowFocus,this);
        // // this.bindNode && this.bindNode.on('onLoseFocus', this.onLoseFocus,this);
        // if (Global.Platform.isTouTiao) {
        //     let host = Global.Platform['Host'];
        //     if (host == TTHost.抖音 || host == TTHost.皮皮虾 || host == 'devtools') {
        //         Global.Log('notApi host:', host)
        //         this.notApi = true;
        //         // let model = this.node.getComponent('TTMoreGameModel');
        //         // model && (model.enabled = true);
        //         // cc.loader.loadRes('banner',cc.SpriteFrame,(err,txt)=>{
        //         //     if(this.node){
        //         //         let sp = this.node.addComponent(cc.Sprite);
        //         //         sp.spriteFrame = txt
        //         //     }
        //         // })
        //     }
        // }

        // this.runTime = this.updateTime;
        // // if(!this.autoShow && Global.isCheck){
        // //     this.scheduleOnce(()=>{
        // //         this.Show()
        // //     },2)
        // // }
    }

    static onStaticBannerShow(name, banner, res: any) {
        // if (Global.Platform.isWechat || Global.Platform.isVivo || Global.Platform.isOppo) {
        //     this.bannerSize = res;
        //     Global.Log('onStaticBannerShow BannerNode Hide');
        //     banner.hide();
        // }
    }

    static init() {
        // if (Global.Platform.isWeb) {
        //     return
        // }
        // let cfg = Global.Platform['config'];
        // let keys = Object.keys(cfg.banner)
        // this.bannerNameCalcelist = keys.sort(function (a, b) { return Math.random() - 0.5 });
        // Global.Event.on(GlobalEvent.API_BANNER_ONLOAD, this.onBannerOnload, this)
        // Global.Event.on(GlobalEvent.API_BANNER_ERROR, this.onBannerError, this)
    }

    static onBannerOnload(name: string, bannerad: any) {
        // Global.Log('onBannerOnload:', name, bannerad)
        // for (var k in this.bannerCaches) {
        //     if (this.bannerCaches[k] == bannerad) {
        //         return;
        //     }
        // }
        // this.bannerCaches[name] = bannerad
        // bannerad.hide();
    }

    static onBannerError(name: string, bannerad: any, err: any) {
        // Global.Log('onBannerError:', name)
        // let idx = this.bannerCaches.indexOf(bannerad);
        // Global.Log('onBannerError:',err,idx,name,this.bannerNameCalcelist);
        // if(this.bannerCaches[idx]){
        //     this.bannerCaches[idx].destroy();
        //     this.bannerCaches.splice(idx,1);
        // }
        // if(this.bannerNameCalcelist.indexOf(name) != this.bannerCaches.length-1){ //如果最后一个出错了，则不继续拉取
        //     setTimeout(() => {
        //         this.preload(1);
        //     }, 500);
        // } else {
        //     Global.Log('最后一个banner拉取出错')
        // }
    }

    static preload(num: number) {
        // // Global.Event.off(this);
        // if (Global.Platform.isWechat || Global.Platform.isQQ) {
        //     var systemInfo1 = Global.api.getSystemInfoSync();
        //     let w = 520 / cc.winSize.width * systemInfo1.windowWidth
        //     let h = 140 / cc.winSize.height * systemInfo1.screenHeight
        //     let max = Math.min(num + this.preIndex, this.bannerNameCalcelist.length)
        //     for (let i = this.preIndex; i < max; i++) {

        //         Global.Platform.showBanner(this.bannerNameCalcelist[i], w, h);;
        //     }
        //     this.preIndex = max % this.bannerNameCalcelist.length;
        // }
    }

    private onWindowFocus() {
        // this.onEnable();
    }

    private onLoseFocus() {
        // this.onDisable();
    }

    onEnable() {
        // Global.Log('进入banner节点生命周期onEnable', this.node.parent.name, 'banner:', Global.Platform.bannerAD ? 'true' : 'false', BannerNode.bannerSize);
        // // if (this.aUnitName) {
        // if (this.autoShow) {
        //     this.Show();
        // } else {
        //     this.Hide()
        // }
        // // }
        // this.node.getComponent(cc.Sprite) && (this.node.getComponent(cc.Sprite).enabled = false);
    }
    onDisable() {
        // Global.Log('进入banner节点生命周期onDisable', this.node.parent.name);
        // this.autoShow = false;
        // this.Hide();
        // Global.Event.off(this)
    }

    static getTopBanner() {
        // return this.nodeQueue.length ? this.nodeQueue[this.nodeQueue.length - 1] : null;
    }

    onDestroy() {
        // Global.Event.off(this)
        // let idx = BannerNode.nodeQueue.indexOf(this)
        // if (idx) {
        //     BannerNode.nodeQueue.splice(idx, 1);
        // }
        // let scr = BannerNode.getTopBanner();
        // if (Global.Platform.isQQ || Global.Platform.isVivo || Global.Platform.isBaiDu) {
        //     if (scr && scr.node && scr.node.active && scr.autoShow) { //如果节点未隐藏，则要刷新之前的banner
        //         setTimeout(() => {
        //             // if(scr &&scr.node && scr.node.active && scr.autoShow){ //如果节点未隐藏，则要刷新之前的banner
        //             scr.Show();
        //             // }
        //         }, 500);
        //     }
        // }
        // // if(Global.Platform.isOppo || Global.Platform.isVivo){
        // //     Global.Platform.destroyBanner(this.node.parent.name);
        // // }
    }

    Show() {
        // this.autoShow = true;
        // if (Global.Platform.isWeb || Global.Platform.isBaiDu || Global.Platform.isAndroid) {
        //     return;
        // }
        // let self = this;
        // this.unscheduleAllCallbacks();
        // this.schedule(() => {
        //     var systemInfo1 = !Global.Platform.isAndroid ? Global.api.getSystemInfoSync() : {};
        //     // console.log('showshowshowshow')
        //     if ((Global.Platform.isWechat || Global.Platform.isQQ || Global.Platform.isBaiDu) && Object.keys(BannerNode.bannerCaches).length) {
        //         this.unscheduleAllCallbacks()
        //         let node = this.node
        //         if (!node || this.node.isValid == false) {
        //             return;
        //         }
        //         if (BannerNode.currentName) {
        //             if (BannerNode.bannerCaches[BannerNode.currentName]) {
        //                 BannerNode.bannerCaches[BannerNode.currentName].hide();
        //             }
        //         }
        //         let keys = Object.keys(BannerNode.bannerCaches);
        //         Global.Log('BannerNode show 0:', keys.length);
        //         BannerNode.currentName = keys[Math.floor(Math.random() * keys.length)];
        //         let banner = BannerNode.bannerCaches[BannerNode.currentName]
        //         banner.show()
        //         let getname = (node) => {
        //             if(node.parent){
        //                 return getname(node.parent) + node.name
        //             }
        //             return node.name
        //         }
        //         console.log(this.node.active,"this.node.active");
                
        //         Global.Log('BannerNode show 0:', getname(this.node));

        //         let bannerSize = banner.style;
        //         node.width = bannerSize.width / systemInfo1.screenWidth * cc.winSize.width;
        //         node.height = bannerSize.height / systemInfo1.screenHeight * cc.winSize.height

        //         let dx = 0, dy = 0;
        //         if (this.node.x + this.node.width > cc.winSize.width) {
        //             dx += cc.winSize.width - this.node.width - this.node.x
        //         }
        //         if (this.node.y + this.node.height > cc.winSize.height) {
        //             dy += cc.winSize.height - this.node.height - this.node.y
        //         }
        //         let pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));

        //         let x = (pos.x + dx) * systemInfo1.screenWidth / cc.winSize.width
        //         var y = (pos.y + dy) * systemInfo1.screenHeight / cc.winSize.height
        //         banner.style.left = x;
        //         Global.Log('this.alginBottom:',this.alginBottom,systemInfo1.screenHeight, bannerSize.height);
                
        //         banner.style.top = this.alginBottom ? systemInfo1.screenHeight - bannerSize.height : systemInfo1.screenHeight - y;
        //         // this.alginBottom && (node.y = banner.style.top / systemInfo1.screenHeight * cc.winSize.height)
        //         Global.Log('BannerNode show:', BannerNode.currentName, '->', x, y, 'top:', banner.style.top)
        //         Global.Event.emit('bannerresize')
        //         BannerNode.showIndex = (BannerNode.showIndex + 1) % keys.length;
        //         BannerNode.lastShow = this

        //         this.isBlink && this.scheduleOnce(this.Hide, 1.5)
        //     } else if (Global.Platform.isTouTiao) {
        //         this.unscheduleAllCallbacks()
        //         if (this.notApi) {
        //             Global.Log('不支持BANNER api')
        //         } else {
        //             let dx = 0, dy = 0;
        //             if (this.node.x + this.node.width > cc.winSize.width) {
        //                 dx += cc.winSize.width - this.node.width - this.node.x
        //             }
        //             if (this.node.y + this.node.height > cc.winSize.height) {
        //                 dy += cc.winSize.height - this.node.height - this.node.y
        //             }
        //             let pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        //             var x = (pos.x + dx) / cc.winSize.width * systemInfo1.screenWidth;
        //             var y = systemInfo1.screenHeight - (pos.y + dy) / cc.winSize.height * systemInfo1.screenHeight;
        //             var w = this.node.width / cc.winSize.width * systemInfo1.screenWidth;
        //             var h = this.node.height / cc.winSize.height * systemInfo1.screenHeight;
        //             Global.Platform.showBannerPos(this.aUnitName, w, h, x, y);
        //         }
        //         this.isBlink && this.scheduleOnce(this.Hide, 2.5)
        //     } else if (Global.Platform.isVivo || Global.Platform.isOppo) {
        //         this.unscheduleAllCallbacks()
        //         if (Global.Platform.isOppo && (Date.now() - launchTime < 10000)) {
        //             console.warn('10秒内不加载广告')
        //             return;
        //         }
        //         let dx = 0, dy = 0;
        //         if (this.node.x + this.node.width > cc.winSize.width) {
        //             dx += cc.winSize.width - this.node.width - this.node.x
        //         }
        //         if (this.node.y + this.node.height > cc.winSize.height) {
        //             dy += cc.winSize.height - this.node.height - this.node.y
        //         }
        //         let pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        //         let x = (pos.x + dx) / cc.winSize.width * systemInfo1.screenWidth
        //         var y = systemInfo1.screenHeight - ((pos.y + dy) / cc.winSize.height * systemInfo1.screenHeight)
        //         let w = this.node.width / cc.winSize.width * systemInfo1.screenWidth;
        //         let h = this.node.height / cc.winSize.height * systemInfo1.screenHeight;
        //         Global.Platform.showBannerPos(this.getRandomId(Global.Platform.config.banner), w, h, x, y)
        //         Global.Event.on(GlobalEvent.API_BANNER_RESIZE, function (res, banner) {
        //             this.node.width = res.width / systemInfo1.screenWidth * cc.winSize.width;
        //             this.node.height = res.height / systemInfo1.screenHeight * cc.winSize.height;
        //             this.alginBottom && (banner.style.top = systemInfo1.screenHeight - res.height + 5)
        //         }, this)
        //         this.isBlink && this.scheduleOnce(this.Hide, 1.5)
        //     } else if (Global.Platform.isAndroid || Global.Platform.isIOS) {
        //         this.unscheduleAllCallbacks()
        //         // var size = cc.view.getCanvasSize();

        //         let pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        //         Global.Platform.showBannerPos(this.getRandomId(Global.Platform.config.banner), this.node.width, this.node.height, pos.x + 70, cc.winSize.height - pos.y + 15);
        //     } else if (Global.Platform.isHuaWei) {
        //         this.unscheduleAllCallbacks()
        //         let pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        //         Global.Platform.showBannerPos(this.getRandomId(Global.Platform.config.banner), this.node.width, this.node.height, pos.x, pos.y)
        //     }
        // }, 0.03);
    }
    Hide() {
        // Global.Log('BannerNode Hide:', this.node.parent.name, BannerNode.currentName);
        // this.unscheduleAllCallbacks();
        // // Global.Platform.bannerAD && Global.Platform.bannerAD.hide();
        // // Global.Log("currentName:",BannerNode.currentName);
        // if (BannerNode.currentName) {
        //     if (BannerNode.bannerCaches[BannerNode.currentName]) {
        //         BannerNode.bannerCaches[BannerNode.currentName].hide();
        //         // BannerNode.bannerCaches[BannerNode.currentName].destroy();
        //         // BannerNode.bannerCaches.splice(BannerNode.currentName)
        //         delete BannerNode.bannerCaches[BannerNode.currentName]
        //         // BannerNode.preload(1);
        //         // BannerNode.bannerCaches.splice(parseInt(BannerNode.currentName),1)
        //     }
        //     if (Object.keys(BannerNode.bannerCaches).length == 0) {
        //         BannerNode.preload(1);
        //     }
        // } else if (Object.keys(BannerNode.bannerCaches).length == 0) {
        //     BannerNode.preload(1);
        // }
        // BannerNode.currentName = '';
        // BannerNode.lastShow = null;
        // if (Global.Platform.isOppo || Global.Platform.isVivo) {
        //     Global.Platform.bannerAD && Global.Platform.destroyBanner(this.node.parent.name);
        // } else if (cc.sys.isNative) {
        //     Global.Platform.bannerAD && Global.Platform.destroyBanner(this.node.parent.name);
        // }
    }

    getRandomId(obj): string {
        return ""
        // let keys = Object.keys(obj);
        // let idx = Math.floor(Math.random() * keys.length)
        // return keys[idx]
    }

    update(dt: number) {
        // if (this.autoShow && this.runTime >= 0 && this.updateTime && !Global.isCheck) {
        //     this.runTime -= dt;
        //     if (this.runTime < 0) {
        //         this.runTime = this.updateTime;
        //         this.Hide();
        //         this.Show();
        //     }
        // }
    }

    private onBannerShow(res: { width: number, height: number }) {
        // if (Global.Platform.isWechat || Global.Platform.isVivo || Global.Platform.isOppo) {
        //     if (Global.Platform.bannerAD) {
        //         if (this.autoShow) {
        //             this.Show();
        //         } else {
        //             this.Hide()
        //         }
        //     }
        // }
    }
}
