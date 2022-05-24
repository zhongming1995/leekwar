// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../module/Tools";
import UIToggle from "../module/ui/UIToggle";
import Game from "./scene/Game";
import RoleBase, { playerState } from "./game/player/RoleBase";





const { ccclass, property } = cc._decorator;

@ccclass
export default class HeadItem extends cc.Component {

    @property(cc.Sprite)
    headSprite: cc.Sprite = null

    @property(cc.Node)
    selfNode: cc.Node = null

    @property(cc.Node)
    bg: cc.Node = null

    @property(cc.Node)
    hurtNode: cc.Node = null

    @property(cc.Node)
    msgBox: cc.Node = null

    @property(cc.Label)
    msgLabel: cc.Label = null

    protected onLoad(): void {
        Global.Event.on("玩家被攻击", this.onAtk, this)

        Global.Event.on("上床", this.onUpBed, this)
        Global.Event.on("下床", this.onDownBed, this)

        Global.Event.on("玩家死亡", this.onPlayerDeath, this)
        Global.Event.on("解救玩家", this.onSavePlayer, this)
        Global.Event.on("视频自救", this.onSaveSelfPlayer, this)

        Global.Event.on("显示消息", this.showMsg, this)

        Global.Event.on("隐藏消息", this.hideMsg, this)

        this.node.on(cc.Node.EventType.TOUCH_END, this.onHeadClick, this)
    }

    showMsg(player: cc.Node, msg: string) {
        if (this.player == player) {
            this.msgBox.active = true
            this.msgLabel.string = msg
        }
    }

    hideMsg(player: cc.Node) {
        if (this.player == player) {
            this.msgBox.active = false
        }
    }

    onHeadClick() {
        if (Game.Instance.gamePlayerCom && (Game.Instance.gamePlayerCom.isOnBed || Game.Instance.gamePlayerCom.playerState == playerState.死亡)) {
            Game.Instance.camera.setFollowBody(this.player, () => {

            })
        }
    }

    protected start(): void {
        this.scheduleOnce(() => {
            let wPos = this.msgBox.parent.convertToWorldSpaceAR(this.msgBox.position)
            this.msgBox.parent = this.node.parent.parent.getChildByName("headMsg")
            let pos = this.msgBox.parent.convertToNodeSpaceAR(wPos)
            this.msgBox.setPosition(pos)
        }, 0.5)
    }

    protected onDestroy(): void {
        Global.Event.removeAllListeners(this)
    }

    player: cc.Node = null
    playerCom: RoleBase = null
    init(player: cc.Node, isPlayer: boolean = false) {
        this.player = player
        this.playerCom = this.player.getComponent(RoleBase)
        let skinId = player.getComponent(RoleBase).skinId
        this.headSprite.spriteFrame = Tools.DataMore.getItemSpriteByIndex("playerHead_" + skinId)
        this.selfNode.active = isPlayer

        if (isPlayer) {
            this.bg.getComponent(UIToggle).setToggle(3)
        }
    }

    /**玩家被攻击 */
    onAtk(player: cc.Node) {
        if (this.player == player) {
            this.hurtNode.active = true
            this.hurtNode.opacity = 0
            this.hurtNode.runAction(cc.fadeIn(0.2))
            this.unschedule(this.hideHurt)
            this.scheduleOnce(this.hideHurt, 0.5)
        }
    }

    /**隐藏受伤 */
    hideHurt() {
        this.hurtNode.runAction(cc.fadeOut(0.2))
    }

    /**玩家上床 */
    onUpBed(mapIndex: number) {
        if (this.playerCom.mapIndex == mapIndex) {
            this.bg.getComponent(UIToggle).setToggle(this.playerCom.isPlayer ? 3 : 1)
        }
    }

    /**玩家下床 */
    onDownBed(mapIndex: number) {
        if (this.playerCom.mapIndex == mapIndex && this.playerCom.playerState != playerState.死亡) {
            this.bg.getComponent(UIToggle).setToggle(0)
        }
    }

    /**玩家死亡 */
    onPlayerDeath(mapIndex: number) {
        /*  if (this.playerCom.mapIndex == mapIndex) {
             this.hurtNode.active = false
             this.bg.getComponent(UIToggle).setToggle(2)
         } */
        if (this.playerCom.playerState == playerState.死亡) {
            this.hurtNode.active = false
            this.bg.getComponent(UIToggle).setToggle(2)
        }
    }

    /**被营救 */
    onSavePlayer() {
        if ((this.playerCom.playerState == playerState.死亡 || this.playerCom.isPlayer) && !this.playerCom.isOnBed) {
            this.bg.getComponent(UIToggle).setToggle(0)
        }
    }

    /**视频自救 */
    onSaveSelfPlayer() {
        if (this.playerCom.isPlayer) {
            this.bg.getComponent(UIToggle).setToggle(0)
        }
    }
}
