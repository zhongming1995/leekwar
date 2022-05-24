// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIToggle from "../../module/ui/UIToggle";
import ItemBase from "../../Scripts/ItemBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLightItem extends ItemBase {


    protected onLoad(): void {
        super.onLoad()

        Global.Event.on("开始逃跑", this.onLight, this)
    }

    protected start(): void {
        super.start()
        this.onLight()
    }

    /**闪烁 */
    onLight() {
        this.node.getChildByName("eff").active = true
        this.scheduleOnce(() => {
            this.node.getChildByName("eff").active = false
        }, 3)
        this.node.runAction(cc.repeat(
            cc.sequence(
                cc.callFunc(() => {
                    this.itemSprite.getComponent(UIToggle).setToggle(1)
                }),
                cc.delayTime(0.5),
                cc.callFunc(() => {
                    this.itemSprite.getComponent(UIToggle).setToggle(0)
                }),
                cc.delayTime(0.5)
            ), 3)
        )
    }

    setOptions(data: any): void {
        super.setOptions(data)
    }


}
