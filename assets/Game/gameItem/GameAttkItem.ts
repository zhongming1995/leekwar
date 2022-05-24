// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import UIFrameAnimate from "../../module/ui/UIFrameAnimate";
import Game from "../../Scripts/scene/Game";
import MapMgr from "../../Scripts/MapMgr";
import RoleBase from "../../Scripts/game/player/RoleBase";
import ItemBase, { itemType } from "../../Scripts/ItemBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameAttkItem extends ItemBase {

    @property(cc.Node)
    selectNode: cc.Node = null

    @property(cc.Node)
    smokeNode: cc.Node = null

    protected onLoad(): void {
        super.onLoad()

        Global.Event.on("门被攻击", this.onDoorAttk, this)
    }


    /**攻击门次数 */
    attkDoorCount: number = 0
    /**当门被攻击 */
    onDoorAttk(mapIndex: number, hurt: number) {
        if (this.mapIndex != mapIndex || !Tools.DataMgr.checkPropActive(this.mapIndex)) return
        if (this.itemIndex == "2008") {//麻痹电网
            this.attkDoorCount++
            if (this.attkDoorCount >= 10) {
                Global.Event.emit("眩晕boss", 1)
                if (this.curPropData.isDestroy) {
                    this.onDeath()
                }
            }
        }
        if (this.itemIndex == "2009") {//荆棘
            let data = {
                hurt: Math.ceil(hurt * 0.3),
                attkPlayer: Game.Instance.mapPlayerData[this.mapIndex]
            }
            Game.Instance.gameBoss.getComponent(RoleBase).onHurt(data)
            if (this.curPropData.isDestroy) {
                this.onDeath()
            }
        }
    }


    protected start(): void {
        super.start()
    }



    /**设置数据 */
    setOptions(data) {
        super.setOptions(data)
        this.itemSprite.active = false
        this.smokeNode.getComponent(UIFrameAnimate).playAnima(1, () => {
            this.itemSprite.active = true
            this.onSmoke()
        })

    }

    onSmoke() {
        this.canBossAttk = true
        if (this.itemIndex == "2010") {//速冻光线
            this.schedule(this.checkBossDis, 1)
        }
        if (this.itemIndex == "2011") {//致命陷阱
            this.schedule(this.checkBossDis2, 1)
        }
    }


    /**检测与boss距离 */
    checkBossDis() {
        if (Game.Instance.checkPause()) return
        if (Tools.DataMgr.checkPropActive(this.mapIndex)) {//速冻光线
            let boss = Game.Instance.gameBoss
            if (!boss) return
            let bossCom = boss.getComponent(RoleBase)

            if (bossCom.curHp / bossCom.maxHp > 0.3) return

            let dis = boss.position.sub(this.node.position).mag()
            if (dis < MapMgr.Instance.mapTiledSize * 6) {
                Global.Event.emit("眩晕boss", 3)
                if (this.curPropData.isDestroy) {
                    this.onDeath()
                }
            }
        }
    }

    /**检测与boss距离 */
    checkBossDis2() {
        if (Game.Instance.checkPause()) return
        if (Tools.DataMgr.checkPropActive(this.mapIndex)) {//致命陷阱
            let boss = Game.Instance.gameBoss
            if (!boss) return
            let bossCom = boss.getComponent(RoleBase)

            if (bossCom.curHp / bossCom.maxHp > 0.1) return

            let dis = boss.position.sub(this.node.position).mag()
            if (dis < MapMgr.Instance.mapTiledSize * 1) {
                bossCom.onHurt({
                    hurt: 99999,
                    attkPlayer: Game.Instance.mapPlayerData[this.mapIndex]
                })
                if (this.curPropData.isDestroy) {
                    this.onDeath()
                }
            }
        }
    }

    /** 进行操作 */
    onOperate(data?) {
        if (!this.canOperate) return /* Global.Event.emit("UI提示", { content: "不能操作" }) */

    }

    /**死亡 */
    onDeath() {
        super.onDeath()
        let mapNode = MapMgr.Instance.getTriggerByIndex(this.posIndex.x, this.posIndex.y)
        if (mapNode) mapNode.active = true
    }

}
