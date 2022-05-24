// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerInfo extends cc.Component {

    @property(cc.Label)
    goldLabel: cc.Label = null;

    @property(cc.Label)
    lightLabel: cc.Label = null;

    protected onLoad(): void {

        Global.Event.on("刷新游戏金币", this.refreshGold, this)
        Global.Event.on("刷新游戏闪电", this.refreshLight, this)
    }

    refreshGold(num: number) {
        this.goldLabel.string = "" + num
        // this.goldLabel.node.tss.string = num
    }

    refreshLight(num: number) {
        this.lightLabel.string = "" + num
        // this.lightLabel.node.tss.string = num
    }

    protected onDestroy(): void {
        Global.Event.removeAllListeners(this)
    }

    protected start(): void {

        this.goldLabel.string = "0"
        this.lightLabel.string = "0"

        this.node.active = Tools.DataMore.gameMode != "bossMode"
    }
}
