// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIToggle from "../../module/ui/UIToggle";
import Game from "../scene/Game";
import MapMgr from "../MapMgr";
import ItemBase from "../ItemBase";
import RoleBase from "./player/RoleBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameKDoorItem extends ItemBase {


    protected onLoad(): void {
        super.onLoad()

        Global.Event.on("开始逃跑", this.openDoor, this)

        Global.Event.on("开矿场", this.openDoor, this)

        Global.Event.on("关矿场", this.closeDoor, this)

        Global.Event.on("id开煤矿门", this.openDoorById, this)
        Global.Event.on("id关煤矿门", this.closeDoorById, this)
    }

    openDoorById(id) {
        if (this.mapData.id == id) {
            this.openDoor()
        }
    }

    closeDoorById(id) {
        if (this.mapData.id == id) {
            this.closeDoor()
        }
    }

    protected start(): void {
        super.start()
        this.openDoor()
        // Global.Audio.playSound('被解救报警');
        /*  this.scheduleOnce(() => {
             Global.Event.emit("关矿场")
         }, 2.5) */

        this.schedule(this.checkBossPos, 0.1)
    }

    /**进入的玩家 */
    enterPlayer: cc.Node = null
    /**检查与玩家的距离 */
    checkBossPos() {
        if (Game.Instance.checkPause()) return

        let maxDis = 135
        let allBoss = Game.Instance.gameSmallBoss.concat(Game.Instance.gameBoss)
        for (let i = 0; i < allBoss.length; i++) {
            const boss = allBoss[i]
            if (!boss || !boss.isValid || Game.Instance.kDoorOpen) continue
            let dis = this.node.position.sub(boss.position).mag()
            if (dis < maxDis) {
                maxDis = dis
                this.enterPlayer = boss
                if (this.enterPlayer.getComponent(RoleBase).isPlayer) {
                    Global.Event.emit("id开煤矿门", this.mapData.id)
                }
            }
        }


        if (this.enterPlayer && this.enterPlayer.isValid && !Game.Instance.kDoorOpen) {
            let dis = this.node.position.sub(this.enterPlayer.position).mag()
            if (dis > 150) {
                this.enterPlayer = null
                // this.setDoorFlag(false)
                Global.Event.emit("id关煤矿门", this.mapData.id)
            }
        }

    }

    /**开门 */
    openDoor() {
        this.setDoorFlag(true)
    }

    /**关门 */
    closeDoor() {
        this.setDoorFlag(false)
    }

    /**默认关闭状态 */
    isOpen: boolean = false

    /**设置门的开关状态 */
    setDoorFlag(isOpen: boolean) {
        if (this.isOpen == isOpen) return
        this.isOpen = isOpen
        let pos = cc.v2(0, 90)
        if (this.mapData.motion == 2) {
            pos = cc.v2(90, 0)
        } else if (this.mapData.motion == 3) {
            pos = cc.v2(0, -90)
        } else if (this.mapData.motion == 4) {
            pos = cc.v2(-90, 0)
        }
        this.itemSprite.runAction(cc.moveBy(0.5, this.isOpen ? cc.v2(pos.x, pos.y) : cc.v2(-pos.x, -pos.y)))

        MapMgr.Instance.reSetPathFind()
    }

    /**获取门的开关状态 */
    getDoorFlag() {
        return this.isOpen
    }

    mapData = null
    setOptions(data: any): void {
        super.setOptions(data)
        this.mapData = this.data.mapData

        this.itemSprite.getComponent(UIToggle).setToggle(this.mapData.LorR == 1 ? 0 : 1)
        this.itemSprite.angle = this.mapData.rotate

    }

    onLevelUP() {
        super.onLevelUP()
        this.maxHp = this.curPropData.hp
        this.curHp = this.maxHp
    }


}
