// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import Game from "../../Scripts/scene/Game";
import RoleBase, { playerState } from "../../Scripts/game/player/RoleBase";
import ItemBase from "../../Scripts/ItemBase";
import AIBoss from "../../Scripts/game/player/AIBoss";
import GameTask, { TaskType } from "../../Scripts/game/GameTask";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameSaveItem extends ItemBase {

    @property(cc.Node)
    lock: cc.Node = null

    /**解锁进度 */
    proSprite: cc.Sprite = null


    protected onLoad(): void {
        super.onLoad()

        Global.Event.on("玩家死亡", this.onPlayerDeath, this)
        Global.Event.on("解救玩家", this.onPlayerDeath, this)
        // Global.Event.on("视频自救", this.onPlayerDeath, this)

        this.proSprite = this.lock.getChildByName("pro").getComponent(cc.Sprite)
    }

    protected start(): void {
        super.start()
    }

    onPlayerDeath() {
        if (Tools.DataMore.gameMode == "outMode") return
        this.lock.active = Game.Instance.playerDeathCount > 0
        if (Tools.DataMore.gameMode == "bossMode") return
        this.itemSprite.active = Game.Instance.playerDeathCount > 0
    }

    setOptions(data: any): void {
        super.setOptions(data)

        this.schedule(this.checkPos, 0.1)
    }

    getTargetPlayer() {
        const allGamePlayer = Game.Instance.allGamePlayer
        for (let i = 0; i < allGamePlayer.length; i++) {
            let player = allGamePlayer[i]
            if (player.getComponent(RoleBase).playerState == playerState.死亡) continue
            let dis = this.node.position.sub(player.position).mag()
            if (dis < 35) {
                this.targetPlayer = player
                this.canAddTime = true
                this.scheduleOnce(() => {
                    Tools.DataMore.gameMode == "playerMode" && Game.Instance.gameBoss && Game.Instance.gameBoss.getComponent(AIBoss).fghfdt(player)
                }, 1)
                if(this.targetPlayer.getComponent(RoleBase).isPlayer){
                    zs.Native.ShowInsertAdByInterval();
                }
            }
        }
    }

    addTime: number = 0
    canAddTime: boolean = false
    /**检查与玩家的距离 */
    checkPos() {
        if (Game.Instance.checkPause()) return
        if (Tools.DataMore.gameMode == "outMode") return
        if (!this.targetPlayer) return this.getTargetPlayer()
        if (this.targetPlayer.getComponent(RoleBase).playerState == playerState.死亡) {
            return this.reSetPro()
        }
        let dis = this.node.position.sub(this.targetPlayer.position).mag()
        if (dis > 45) this.reSetPro()

    }

    /**重置 */
    reSetPro() {
        this.targetPlayer = null
        this.proSprite.fillRange = 0
        this.onPlayerDeath()
    }

    protected update(dt: number): void {
        if (Game.Instance.checkPause()) return
        if (!this.targetPlayer) return
        if (Game.Instance.playerDeathCount <= 0) return
        if (Tools.DataMore.gameMode == "outMode") return
        this.proSprite.fillRange -= (dt / 5)
        if (this.proSprite.fillRange <= -1) {
            let pCom = this.targetPlayer.getComponent(RoleBase)
            this.proSprite.fillRange = -1
            Game.Instance.playerDeathCount = 0
            GameTask.Instance.hideGoldTask()
            GameTask.Instance.hideSaveTask()
            Global.Audio.playSound('被解救报警');
            Global.Event.emit("解救玩家")
            Global.Event.emit("开始逃跑")
            Global.Event.emit("开矿场")
            let desc = pCom.data.name + "成功解救了韭菜，获得了" + Tools.DataMgr.saveGold + "赏金"
            Global.Event.emit("游戏提示", desc)
            pCom.toSavePlayer()
            if (pCom.isPlayer) {
                GameTask.Instance.checkTask(TaskType.营救队友, 998)
            }
            this.reSetPro()
        }
    }

}
