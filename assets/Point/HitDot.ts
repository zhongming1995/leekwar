
import HagicConfig from "./HagicConfig";
import { hagice } from "./hagice-client-js";


export class HitDot {
    private static _instance: HitDot = null;
    public static get Instance(): HitDot {
        if (!this._instance) {
            this._instance = new HitDot();
        }
        return this._instance;
    }

    /** 当前日期 */
    public date = this.getDate();


    /** 统计存储管理器 */
    public statStorage = null;

    /** 正式地址 */
    public url = null


    init() {
        return;
        if (HagicConfig.debugMode) {
            this.url = HagicConfig.statUrl_Dev
        }
        else {
            this.url = HagicConfig.statUrl
        }

        if (Global.Platform.isTouTiao) {
            HagicConfig.gameName = "gtfy_tt"
        } else if (Global.Platform.isOppo) {
            HagicConfig.gameName = "gtfy_oppo"
        } else if (Global.Platform.isVivo) {
            HagicConfig.gameName = "gtfy_vivo"
        } else if (Global.Platform.isQQ) {
            HagicConfig.gameName = "gtfy_qq"
        } else if (Global.Platform.isWechat) {
            HagicConfig.gameName = "gtfy"
        } else if (Global.Platform.isWeb) {
            HagicConfig.gameName = "gtfy_web"
        }

        if (CC_DEBUG) {
            this.url = HagicConfig.statUrl_Dev
            HagicConfig.gameName = "gtfy"
        }
        console.log(this.url);
        this.statStorage = hagice.stat.createStatClient(this.url, new hagice.CocosStorage(HagicConfig.gameName));
    }

    /** 获取当前日期 */
    getDate() {
        let dateTime = new Date;
        let yaer = dateTime.getFullYear();
        let lastMonth = dateTime.getMonth() + 1;
        let month = lastMonth < 10 ? "0" + lastMonth : lastMonth
        let day = dateTime.getDate() < 10 ? "0" + dateTime.getDate() : dateTime.getDate()

        return yaer + "_" + month + "_" + day;
    }

    addObjData(obj: Object) {
        if (obj && !obj["date"]) {
            obj["date"] = this.getDate()
        }
        return obj
    }

    /**人数打点 
     * @eh countName 打点名字
     * @eh obj 键值对
    */
    peopleDot(countName: string, obj: Object) {
        this.addObjData(obj)
        this.statStorage.triggerIfFirstTime(HagicConfig.gameName, countName, obj);
    }

    /**次数打点 
     * @eh countName 打点名字
     * @eh obj 键值对
     * @eh 例：this.statStorage.trigger("jgdgc", "taskGuide", {"taskId": "test"})
     */
    frequencyDot(countName: string, obj: Object) {
        this.addObjData(obj)
        this.statStorage.trigger(HagicConfig.gameName, countName, obj);
    }


    /**混合打点 
     * @eh countName 打点名字
     * @eh obj 键值对
    */
    blendDot(countName: string, obj: Object) {
        this.addObjData(obj)
        this.statStorage.triggerIfFirstTime(HagicConfig.gameName, countName + "P", obj);
        this.statStorage.trigger(HagicConfig.gameName, countName, obj);
    }
}
