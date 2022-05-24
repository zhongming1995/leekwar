// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import Game from "../scene/Game";


const { ccclass, property } = cc._decorator;

@ccclass
export default class MsgItem extends cc.Component {

    @property()
    msgName: string = ''

    msgItemBox: cc.Node = null

    protected onLoad(): void {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickMsgItem, this)


        Global.Event.on("隐藏消息box", this.hideMsgItemBox, this)
        if (this.msgName == "消息") {
            this.msgItemBox = this.node.getChildByName("msgItemBox")
            this.initMsgItemBox()
        }
    }

    protected onDestroy(): void {
        Global.Event.removeAllListeners(this)
    }

    hideMsgItemBox() {
        this.msgItemBox && (this.msgItemBox.active = false)
    }

    initMsgItemBox() {
        for (let i = 0; i < this.msgItemBox.childrenCount; i++) {
            const msgItem = this.msgItemBox.children[i];
            msgItem.on(cc.Node.EventType.TOUCH_END, this.onClickMsgItem2.bind(this, i), this)
        }
    }

    protected start(): void {

    }


    /**点击消息 */
    onClickMsgItem() {

        if (this.msgName == "消息") {
            // this.msgItemBox.active = true
            this.msgItemBox.active = !this.msgItemBox.active
        } else if (this.msgName == "撤退") {
            Game.Instance.gamePlayerCom.showMsg("全体撤退！")
        } else if (this.msgName == "集合") {
            Game.Instance.gamePlayerCom.showMsg("跟我一起来！")
        } else if (this.msgName == "救援") {
            Game.Instance.gamePlayerCom.showMsg("救救我！")
        }

        if (this.msgName != "消息") {
            Global.Event.emit("隐藏消息box")
        }
    }

    /**点击消息 */
    onClickMsgItem2(index: number, e: cc.Event) {
        this.hideMsgItemBox()
        let msgArr = Tools.GameCfg.playerTip["快捷消息"]
        let msg = msgArr[index]
        Game.Instance.gamePlayerCom.showMsg(msg)
        e.stopPropagation()
    }

}
