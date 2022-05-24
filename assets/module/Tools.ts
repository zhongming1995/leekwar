import DataBase from "./DataBase";
import DataMore from "./DataMore";
import DataMgr from "./DataMgr";
import PathFind from "./PathFind";
import { NodePools } from "./NodePools";


export class Tools {
    /**基本数据 */
    static DataBase: DataBase = null;
    /**更多数据 */
    static DataMore: DataMore = null;
    /**更多广告数据 */
    static DataMgr: DataMgr = null;
    /**对象池 */
    static NodePools: NodePools = null;
    /**寻路 */
    static PathFind: PathFind = null;
    /**寻路 */
    static PathFind2: PathFind = null;
    /**loading界面 */
    static loadding: cc.Node = null;
    /**配置文件 */
    static GameCfg: any = null;
    /**配置文件 */
    static JosnCfg: any = null;
    /**启动时间 */
    static runTime: number = 0;

    static dtTime: number = 1 / 60;

    /**初始化平台和数据 */
    static _init(gamecfg: any) {
        Tools.DataBase = new DataBase();
        Tools.DataMore = new DataMore();
        Tools.DataMgr = new DataMgr();
        Tools.NodePools = NodePools.init()
        Tools.PathFind = new PathFind();
        Tools.PathFind2 = new PathFind();
        Tools.loadding = cc.find('Canvas/UILoadder');
        Tools.GameCfg = Global.Common.readJson(gamecfg);
        console.log('游戏初始化数据：', Tools.GameCfg);
    }

    static initJson(JosnCfg) {
        this.JosnCfg = JosnCfg
    }



    /**
    * 互推盒子九宫格广告
    * @param id 
    * @param cb 
    * @param close 
    */
    static createGamePortalAd(id = "372296", cb?, close?) {
        if (window["qg"] && window["qg"].getSystemInfoSync().platformVersionCode >= 1076) {
            var gamePortalAd = window["qg"].createGamePortalAd({
                adUnitId: id
            })
            gamePortalAd.load().then(function () {
                console.log('load success');
                gamePortalAd.show();
                cb && cb(true);
            }).catch(function (error) {
                Global.Event.emit('UI提示', { content: '拉取失败！请稍候重试~' });
                console.log('load fail with:' + error.errCode + ',' + error.errMsg)
            })
            gamePortalAd.onClose(function () {
                console.log('互推盒子九宫格广告关闭');
                close && close();
            });
        } else {
            Global.Event.emit('UI提示', { content: '快应用平台版本号低于1076，暂不支持互推盒子相关 API' });
            cb && cb(false);
        }
    }

    /**qq创建广告盒子 */
    static showAppBox() {
        let boxs = Object.keys(Global.Platform.config.appBox);
        let id = boxs[Math.floor(Math.random() * boxs.length)]
        Global.Log('boxs[id]:', Global.Platform.config.appBox, id);
        let appBox = Global.api.createAppBox({ adUnitId: Global.Platform.config.appBox[id] });
        appBox.load().then(() => {
            appBox.show();
        });
        appBox.onClose(() => {
            appBox.destroy();
        });
    }
}

// window.Tools = Tools;
