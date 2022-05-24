// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Game from "../../Scripts/scene/Game";
import RoleBase, { playerState } from "../../Scripts/game/player/RoleBase";
import ItemBase from "../../Scripts/ItemBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameBossHpItem extends ItemBase {



    protected onLoad(): void {
        super.onLoad()

    }

    protected start(): void {
        super.start()

    }

    setOptions(data: any): void {
        super.setOptions(data)

        this.schedule(this.checkPos, 0.1)
    }

    targetPlayerCom: RoleBase = null
    getTargetPlayer() {
        let targetBoss = null
        let maxDis = 10000
        let allBoss = Game.Instance.gameSmallBoss.concat(Game.Instance.gameBoss)
        for (let i = 0; i < allBoss.length; i++) {
            const boss = allBoss[i];
            if (!boss.isValid) continue
            let dis = this.node.position.sub(boss.position).mag()
            if (dis < maxDis) {
                maxDis = dis
                targetBoss = boss
            }
        }

        this.targetPlayer = targetBoss
        this.targetPlayerCom = this.targetPlayer && this.targetPlayer.getComponent(RoleBase)
    }

    /**检查与玩家的距离 */
    checkPos() {
        if (Game.Instance.checkPause()) return
        if (!Game.Instance.isRun) return
        if (!this.targetPlayer) return this.getTargetPlayer()
        if (!this.targetPlayer.isValid) {
            return this.targetPlayer = this.targetPlayerCom = null
        }

        let dis = this.node.position.sub(this.targetPlayer.position).mag()
        if (dis <= 35) this.resumeHp()

        if (dis > 45) {
            this.targetPlayer = this.targetPlayerCom = null
        }
    }

    canResume: boolean = true
    /**增加boss血量 */
    resumeHp() {
        if (!this.canResume) return
        this.canResume = false
        this.targetPlayerCom.resumeHp()

        this.scheduleOnce(() => {
            this.canResume = true
        }, 0.5)
    }
}
