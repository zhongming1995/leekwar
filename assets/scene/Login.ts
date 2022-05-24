
import { Tools } from "../module/Tools";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Login extends cc.Component {
    sdkLoading = false
    resLoading = false
    onLoad() {
        this.node.tss = this;
    }

    start() {

        var self = this
        Tools.loadding.active = true;
        Tools.loadding.tss.reset();

        Global.Loader.loadBundle('Lobby', () => {
            Global.Event.emit("打点_发送事件", "加载完成")
            zs.Native.TrackEvent("加载完成");
            self.resLoading = true;
            self.enterLobby();
        })
    }

    tologin() {
        this.autoLogin();
    }

    login(res) {
        Tools.DataBase.init(res._id, res.id, res.openid, res.token);
        this.sdkLogin(res);
    }

    autoLogin() {
        Tools.DataBase.readData();
        // Global.Platform.autoLogin(this.login.bind(this));
        this.login({})
        Global.api.aldSendEvent && Global.api.aldSendEvent('开始登陆');
    }


    enterLobby() {
        if (this.sdkLoading && this.resLoading) {
            if (!this.node) return;
            Tools.loadding.active = false;
            this.node.destroy();
            Global.UIManger.pushScene('Lobby');
        }
    }

    loginCount: number = 0;
    sdkLogin(msg) {
        // let version = cc.sys.platform === cc.sys.WECHAT_GAME ? wx['dataversion'] : '1.0.0';
        // let option = cc.sys.platform === cc.sys.WECHAT_GAME ? wx.getLaunchOptionsSync() : { query: {}, referrerInfo: {} };

        // let referrerInfoAppId = option.query.channel ? option.query.channel : '';
        // let cfg = { version: '1.0.7', channel: '', check: '', native: '', click: '', showUI: '', endClick: '' };
        // if (Global.Platform.isWechat) {
        //     cfg = { version: version, channel: referrerInfoAppId, check: 'isCheck', click: 'isClick', native: '', showUI: 'noShowUI', endClick: 'endClick' }
        // }
        // if (Global.Platform.isTouTiao) {
        //     cfg = { version: "1.0.8", channel: "6248051098ee89e1dd628e96", check: '', click: '', native: '', showUI: '', endClick: '' }
        // }
        this.sdkLoading = true;
        this.enterLobby();
        return;
        Statics.register(msg.openid, cfg.channel, cfg.version, (err, res) => {
            this.loginCount++
            if (res) {
                Global.canClick = Global.Platform.isWechat && this.canClick(res.channelName);
                Tools.DataBase.isCheck = 1
                Tools.DataBase.isClick = 1
                Tools.DataBase.native = 1
                Tools.DataBase.noShowUI = 1;
                Tools.DataBase.endClick = 1;

                Tools.DataBase.isProfile = parseInt(Statics.dictionary["isProfile"]) || 0;
                Tools.DataBase.zs_line_num = parseInt(Statics.dictionary["zs_line_num"]) || 60;

                if (Global.Platform.isWechat) {
                    console.log('是Wechat');
                } else if (Global.Platform.isWeb) {
                    console.log('是Web');
                }

                Global.Log('后台登陆成功:', Tools.DataBase.isCheck, Tools.DataBase.isClick, Tools.DataBase.native, cfg, Tools.DataBase.isProfile)
                this.sdkLoading = true;
                this.enterLobby();
            } else {
                if (this.loginCount > 5) {//防止进不去游戏
                    this.sdkLoading = true;
                    this.enterLobby();
                } else {
                    this.sdkLogin(msg);
                }
            }
        });
    }

    canClick(name) {
        console.log(name, 'canClick');

        let cname = cc.sys.localStorage.getItem('lastChannelName');
        console.log(cname, 'cname');
        if (!cname) {
            name.length && cc.sys.localStorage.setItem('lastChannelName', name);
            return name.length > 0;
        } else {
            return cname.length > 0;
        }
    }
}
