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
export default class Desk extends UIWindows {

    @property(cc.Node)
    add_btn: cc.Node = null;

    @property(cc.Node)
    get_btn: cc.Node = null;

    @property(cc.Node)
    get_label: cc.Node = null;


    onLoad(): void {
        super.onLoad()

        this.add_btn.on(cc.Node.EventType.TOUCH_END, this.onAddClick, this)
        this.get_btn.on(cc.Node.EventType.TOUCH_END, this.onGetClick, this)
    }

    data = null
    setData(data) {
        this.data = data
        this.add_btn.active = !data.exist
        this.get_btn.active = data.exist
        this.get_label.getComponent(UIToggle).setToggle(data.showGet ? 0 : 1)
    }


    onAddClick() {
        if (Global.Platform.isTouTiao) {
            if (Global.api.addShortcut) {
                Global.api.addShortcut({
                    success: () => {
                        let str = cc.sys.localStorage.getItem("DeskGet1");
                        if (!str) {
                            Tools.DataBase.addGold1(300)
                            Global.Event.emit("UI提示", { content: '已添加到桌面，获得+300快乐币' })
                            this.add_btn.active = false
                            cc.sys.localStorage.setItem("DeskGet1", "isGet");
                        }
                        console.log("DeskGet  >>   ", str);

                    },
                    fail(err) {
                        Global.Log('err:', err);
                        Global.Event.emit("UI提示", { content: '添加失败' })
                    }
                })
            } else {
                Global.Event.emit("UI提示", { content: '小程序版本太低' })
            }

        }
    }

    onGetClick() {
        if (!this.data.showGet) {
            return Global.Event.emit("UI提示", { content: '今日已领取奖励' })
        }
        this.data.showGet = false
        this.get_label.getComponent(UIToggle).setToggle(1)
        this.data.onGetClick()
    }
}
