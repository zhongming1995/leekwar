// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameBg extends cc.Component {


    protected onLoad(): void {
        Global.Event.on("心跳", this.onHeart, this)
        Global.Event.on("取消心跳", this.reSetHeart, this)
    }

    protected onDestroy(): void {
        Global.Event.removeAllListeners(this)
    }

    onHeart() {
        this.node.stopAllActions()
        this.node.runAction(cc.repeatForever(cc.sequence(
            cc.fadeTo(0.5, 100), cc.fadeTo(0.5, 255)
        )))
    }

    reSetHeart() {
        this.node.stopAllActions()
        this.node.runAction(
            cc.fadeTo(0.5, 255)
        )
    }

}
