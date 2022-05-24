// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import UIToggle from "../../module/ui/UIToggle";
import UIWindows from "../../module/ui/UIWindows";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Sign extends UIWindows {


    static checkDay() {
        let day = -1;
        //可判断是否当日首次登陆
        if (Global.Common.calcDetailDay(new Date(Tools.DataBase.signTime), new Date()) >= 1) {
            day = Tools.DataBase.signCount;
        }
        return day > 6 ? -1 : day;
    }

    @property(cc.Node)
    signBtn: cc.Node = null

    @property(cc.Node)
    videoSignBtn: cc.Node = null

    @property(cc.Node)
    signBox: cc.Node = null

    @property(cc.Node)
    signBox2: cc.Node = null

    onLoad(): void {
        super.onLoad()

        this.signBtn.on(cc.Node.EventType.TOUCH_END, this.onSignClick, this)
        this.videoSignBtn.on(cc.Node.EventType.TOUCH_END, this.onVideoSignClick, this)
    }

    protected start(): void {
        this.initView()
    }

    signData = null
    signDay: number = -1
    curSignData = null
    initView() {
        this.signData = Tools.JosnCfg.signData
        this.signDay = Sign.checkDay()
        this.curSignData = this.signData[Tools.DataBase.signCount]
        for (let i = 0; i < this.signBox.childrenCount; i++) {
            const signItem = this.signBox.children[i];
            let bg = signItem.getChildByName("bg")
            let icon = signItem.getChildByName("icon")
            let day = signItem.getChildByName("day")
            let count = signItem.getChildByName("count")
            let noSign = signItem.getChildByName("待领取")
            let hasSign = signItem.getChildByName("已领取")

            bg.getComponent(UIToggle).setToggle(this.signDay == i ? 1 : 0)
            if (this.signData[i].rewID == 81) {
                icon.getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex("runProp_2")
            }
            day.getComponent(cc.Label).string = `第${i + 1}天`
            count.getComponent(cc.Label).string = `${this.signData[i].allCount}`

            noSign.active = Tools.DataBase.signCount <= i
            hasSign.active = Tools.DataBase.signCount > i
        }

        this.signBtn.active = this.videoSignBtn.active = this.signDay != -1
    }

    onSignClick() {
        this.getRew()
    }

    onVideoSignClick() {
        zs.Native.PlayVideo(()=>{
            zs.Native.TrackEvent("签到视频点")
            this.getRew(2)
        });
    }

    getRew(scale: number = 1) {
        Tools.DataBase.signCount++
        Tools.DataBase.signTime = Date.now()
        if (!this.curSignData) {
            debugger
        }
        if (this.curSignData.rewID == 1) {
            Tools.DataBase.addGold1(this.curSignData.allCount * scale)
        } else if (this.curSignData.rewID == 81) {
            Tools.DataMgr.addPropByName("金刚盾", this.curSignData.allCount * scale)
            Global.Event.emit('UI提示', { content: '恭喜获得 金刚盾 x' + this.curSignData.allCount * scale });
        } else {
            Tools.DataMgr.getBossSkin(5)
            Global.Event.emit('UI提示', { content: '恭喜获得皮肤' });
        }
        this.initView()
    }
}
