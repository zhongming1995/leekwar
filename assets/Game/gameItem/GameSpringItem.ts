// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIFrameAnimate from "../../module/ui/UIFrameAnimate";
import Game from "../../Scripts/scene/Game";
import MapMgr from "../../Scripts/MapMgr";
import RoleBase, { playerState } from "../../Scripts/game/player/RoleBase";
import ItemBase from "../../Scripts/ItemBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameSpringItem extends ItemBase {



    protected onLoad(): void {
        super.onLoad()

    }

    protected start(): void {
        super.start()

    }

    direction: number = 1;
    setOptions(data: any): void {
        super.setOptions(data)

        this.direction = this.data.mapData.direction

        this.schedule(this.checkPos, 0.1)
    }
    
    getTargetPlayer() {
        const allGamePlayer = Game.Instance.allGamePlayer
        for (let i = 0; i < allGamePlayer.length; i++) {
            let player = allGamePlayer[i]
            if (this.allAiPlayer.includes(player)) continue
            if (player.getComponent(RoleBase).playerState == playerState.死亡) continue
            let dis = this.node.position.sub(player.position).mag()
            if (dis < 33) {
                this.targetPlayer = player
                this.canAddTime = true
            }
        }
    }

    addTime: number = 0
    canAddTime: boolean = false
    /**检查与玩家的距离 */
    checkPos() {
        if (Game.Instance.checkPause()) return
        if (!this.targetPlayer) return this.getTargetPlayer()
        if (this.targetPlayer.getComponent(RoleBase).playerState == playerState.死亡) {
            return this.reSetSpring()
        }

        let dis = this.node.position.sub(this.targetPlayer.position).mag()
        if (dis > 35) this.reSetSpring()


    }

    /**重置 */
    reSetSpring() {
        this.canAddTime = false
        this.addTime = 0
        this.targetPlayer = null
    }

    allAiPlayer = []
    /**弹跳 */
    onSpring() {
        console.log("弹跳");

        let mapTerrain = MapMgr.Instance.mapTerrain
        let springPos = null;
        if (this.direction == 1) {//上
            if (mapTerrain[this.posIndex.y - 2] && mapTerrain[this.posIndex.y - 2][this.posIndex.x] == 0) {
                springPos = cc.v2(this.posIndex.x, this.posIndex.y - 2)
            }
        } else if (this.direction == 2) {//右
            if (mapTerrain[this.posIndex.y] && mapTerrain[this.posIndex.y][this.posIndex.x + 2] == 0) {
                springPos = cc.v2(this.posIndex.x + 2, this.posIndex.y)
            }
        } else if (this.direction == 3) {//下
            if (mapTerrain[this.posIndex.y + 2] && mapTerrain[this.posIndex.y + 2][this.posIndex.x] == 0) {
                springPos = cc.v2(this.posIndex.x, this.posIndex.y + 2)
            }
        } else if (this.direction == 4) {//左
            if (mapTerrain[this.posIndex.y] && mapTerrain[this.posIndex.y][this.posIndex.x - 2] == 0) {
                springPos = cc.v2(this.posIndex.x - 2, this.posIndex.y)
            }
        }

        if (springPos) {
            let pCom = this.targetPlayer.getComponent(RoleBase)
            if (!pCom.isPlayer) {
                this.allAiPlayer.push(this.targetPlayer)
                this.scheduleOnce(this.reSetAiPlayer, 5)
            }
            pCom.onSpring(springPos, this.posIndex)
            this.itemSprite.getComponent(UIFrameAnimate).playAnima(1)
        }

        this.reSetSpring()
    }

    /**重置 */
    reSetAiPlayer() {
        if (this.allAiPlayer.length > 0) {
            this.allAiPlayer.shift()
        }
    }

    /** 进行操作 */
    onOperate(data?) {
        if (!this.canOperate) return
    }

    protected update(dt: number): void {
        if (Game.Instance.checkPause()) return
        if (this.canAddTime) {
            this.addTime += dt
            if (this.addTime >= 0.25) {
                this.onSpring()
            }
        }
    }
}
