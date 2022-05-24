// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Game from "../../Scripts/scene/Game";
import ItemBase from "../../Scripts/ItemBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameSmokeItem extends ItemBase {

    protected onLoad(): void {
        super.onLoad()
    }

    protected start(): void {
        super.start()

        this.scheduleOnce(this.onDeath, 20)
    }

    setOptions(data: any): void {
        // super.setOptions(data)
        this.data = data
        this.itemIndex = this.data.itemIndex

        this.mapIndex = this.data.mapIndex

        this.itemType = this.data.itemType

        this.posIndex = this.data.posIndex

        this.node.itemIndex = this.itemIndex

        this.node.name = this.node.name + this.data.itemIndex
        this.schedule(this.checkBossDis, 0.15)
    }

    isActive: boolean = true
    /**检测与boss距离 */
    checkBossDis() {
        if (Game.Instance.checkPause()) return
        if (!this.isActive) return
        if (!Game.Instance.gameBoss) return
        let allBoss = Game.Instance.gameSmallBoss.concat(Game.Instance.gameBoss)
        for (let i = 0; i < allBoss.length; i++) {
            const boss = allBoss[i]
            if (!boss || !boss.isValid) continue
            let dis = this.node.position.sub(boss.position).mag()
            if (dis < 100) {
                this.isActive = false
                Global.Event.emit("眩晕boss", 5, boss)
                this.scheduleOnce(() => {
                    this.onDeath()
                }, 5)
                break
            }
        }
    }

}
