// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import DragonAnimation from "../../module/animation/DragonAnimation";

const { ccclass, property } = cc._decorator;

@ccclass
export default class effLevelUp extends cc.Component {
    @property(DragonAnimation)
    dragonAnimation: DragonAnimation = null;

    protected start(): void {
        this.dragonAnimation.playAnimation("升级", () => {
            this.node.destroy()
        })
    }
}
