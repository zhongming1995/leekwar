// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIWindows from "../../module/ui/UIWindows";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Notice extends UIWindows {

    @property(cc.Node)
    labelTT: cc.Node = null


    protected start(): void {
        // this.labelTT.active = Global.Platform.isTouTiao
    }
}
