// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import UIFrameAnimate from "../../module/ui/UIFrameAnimate";
import Game from "../../Scripts/scene/Game";
import Bullet from "../bullet/Bullet";
import AddGoldItem from "../../Scripts/game/AddGoldItem";
import MapMgr from "../../Scripts/MapMgr";
import RoleBase from "../../Scripts/game/player/RoleBase";
import ItemBase, { itemType } from "../../Scripts/ItemBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePropItem extends ItemBase {

    @property(cc.Node)
    selectNode: cc.Node = null

    @property(cc.Node)
    weaponBg: cc.Node = null

    @property(cc.Node)
    smokeNode: cc.Node = null

    weaponEff: cc.Node = null
    protected onLoad(): void {
        super.onLoad()

        this.weaponEff = this.itemSprite.getChildByName("eff")

        Global.Event.on("取消选中", this.unSelect, this)

        Global.Event.on("释放干扰", this.onUseDisturb, this)
    }


    /**玩家上床 */
    onUpBed(mapIndex: number) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == this.mapIndex && this.mapIndex == mapIndex) {
            this.canOperate = true
            this.addPlayerLight()
            this.refreshLeaveUp()
        }
    }

    /**玩家下床 */
    onDownBed(mapIndex: number) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == this.mapIndex && this.mapIndex == mapIndex) {
            this.canOperate = false
            this.leaveUpNode.active = false
        }
    }

    /**取消选中*/
    unSelect(mapIndex) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == mapIndex && this.mapIndex == mapIndex) {
            this.selectNode.active = false
        }
    }

    /**刷新游戏金币 */
    onRefreshGold(goldCount: number) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == this.mapIndex) {
            this.refreshLeaveUp()
        }
    }

    /**刷新游戏闪电 */
    onRefreshLight(lightCount: number) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == this.mapIndex) {
            this.refreshLeaveUp()
        }
    }

    /**是否是干扰状态 */
    isDisturb: boolean = false
    /**使用干扰 */
    onUseDisturb(time: number, disturbBoss: cc.Node) {
        let dis = this.node.position.sub(disturbBoss.position).mag()
        if (dis <= (7 * MapMgr.Instance.mapTiledSize)) { //当与boss一定距离时
            if (this.curPropData.type == itemType.武器) {
                this.isDisturb = true
                let eff_yun = Global.Loader.getInstantiate("eff_yun")
                eff_yun.parent = this.node
                eff_yun.y = 35
                this.scheduleOnce(() => {
                    eff_yun.destroy()
                    this.isDisturb = false
                }, time || 5)
            }
        }

    }

    protected start(): void {
        super.start()
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == this.mapIndex) {
            this.canOperate = true
            this.refreshLeaveUp()
        }
    }

    refreshLeaveUp() {
        if (!this.nextPropData) {
            this.leaveUpNode.active = false
            return
        }
        let pCom = Game.Instance.gamePlayerCom
        this.leaveUpNode.active = ((!this.nextPropData.cost.gold || pCom.getPlayerGold() >= this.nextPropData.cost.gold) &&
            (!this.nextPropData.cost.Knowledge || pCom.getPlayerLight() >= this.nextPropData.cost.Knowledge)) &&
            Tools.DataMgr.checkCondition(this.nextPropData.condition, this.mapIndex)
    }


    /**设置数据 */
    setOptions(data) {
        super.setOptions(data)

        this.itemSprite.active = false
        this.smokeNode.getComponent(UIFrameAnimate).playAnima(1, () => {
            this.smokeNode.active = false
        })
        this.scheduleOnce(() => {
            this.itemSprite.active = true
            this.onSmoke()
        }, 0.2)
    }

    onSmoke() {
        this.canBossAttk = true
        if (this.curPropData.type == itemType.武器) {
            this.weaponBg.active = true
            this.schedule(this.checkBossDis, 0.1)
        } else if (this.curPropData.type == itemType.书) {
            this.schedule(this.addGameLight, 1/* this.curPropData.delay */)
        } else if (this.curPropData.type == itemType.手机) {
            this.schedule(this.addGameGold, 1/* this.curPropData.delay */)
        }
    }

    /**检测与boss距离 */
    checkBossDis() {
        if (Game.Instance.checkPause()) return
        if (this.isDisturb) return
        let boss = Game.Instance.gameBoss
        if (!boss) return
        let dis = this.curPropData.atkDis * MapMgr.Instance.mapTiledSize
        /*  if (this.node.position.sub(boss.position).mag() <= dis) {
             return this.onAtak(boss)
         }
 
         let gameSmallBoss = Game.Instance.gameSmallBoss
         for (let i = 0; i < gameSmallBoss.length; i++) {
             const smallBoss = gameSmallBoss[i];
             if (this.node.position.sub(smallBoss.position).mag() <= dis) {
                 return this.onAtak(smallBoss)
             }
         } */

        let targetBoss = null
        let maxDis = 10000
        let allBoss = Game.Instance.gameSmallBoss.concat(Game.Instance.gameBoss)
        for (let i = 0; i < allBoss.length; i++) {
            const boss = allBoss[i];
            if (!boss.isValid) continue
            let bossDis = this.node.position.sub(boss.position).mag()
            if (bossDis <= dis && bossDis < maxDis) {
                maxDis = bossDis
                targetBoss = boss
            }
        }

        targetBoss && this.onAtak(targetBoss)
    }

    canAtak: boolean = true
    onAtak(targetNode: cc.Node) {
        if (!this.canAtak) return
        if (!targetNode) return
        this.canAtak = false

        this.weaponEff.active = true
        this.weaponEff.getComponent(UIFrameAnimate).playAnima(1, () => {
            this.weaponEff.active = false
        })

        Global.Event.emit("发射子弹", this.mapIndex)
        let dis = targetNode.position.sub(this.node.position)
        let dir = dis.normalize()

        //计算弧度
        let radian = Math.atan2(dir.y, dir.x)
        //弧度转角度
        let angle = radian * 180 / Math.PI;
        this.itemSprite.angle = angle;

        let bullet = Global.Loader.getInstantiate("Bullet")
        let atk = this.curPropData.atk
        let data = {
            targetNode: targetNode,
            bulletIndex: this.curPropData.bulletIndex,
            hitCall: () => {
                let hurtData = {
                    hurt: atk /* * 10000  */,
                    attkPlayer: Game.Instance.mapPlayerData[this.mapIndex]
                }
                targetNode.getComponent(RoleBase).onHurt(hurtData)
            }
        }
        let wPos = this.node.parent.convertToWorldSpaceAR(this.node.position)
        let pos = MapMgr.Instance.itemContent.convertToNodeSpaceAR(wPos)

        bullet.setPosition(pos.x, pos.y);
        bullet.getComponent(Bullet).setOptions(data)

        MapMgr.Instance.itemContent.addChild(bullet, 999);

        this.scheduleOnce(() => {
            this.canAtak = true
        }, 1/* this.curPropData.cd */)
    }

    /**产生的总金币 */
    productionLight: number = 0
    /**生产闪电 */
    addGameLight() {
        if (Game.Instance.checkPause()) return
        let double = Tools.DataMgr.checkDouble(this.mapIndex)
        this.productionLight += (double ? this.curPropData.production * 2 : this.curPropData.production)

        this.addPlayerLight()
    }

    /**增加玩家金币 */
    addPlayerLight() {
        if (Game.Instance.mapPlayerData[this.mapIndex]) {
            let data = {
                mapIndex: this.mapIndex,
                addNum: this.productionLight
            }
            Global.Event.emit("增加游戏闪电", data)
            this.productionLight = 0
            let addGoldItem = Tools.NodePools.getNode("AddGoldItem")
            addGoldItem.parent = this.node
            addGoldItem.getComponent(AddGoldItem).init(data.addNum, 1)
        }
    }

    /**产生的总金币 */
    productionGold: number = 0
    /**产生游戏金币 */
    addGameGold() {
        if (Game.Instance.checkPause()) return
        let double = Tools.DataMgr.checkDouble(this.mapIndex)
        this.productionGold += (double ? this.curPropData.production * 2 : this.curPropData.production)

        this.addPlayerGold()
    }

    /**增加玩家金币 */
    addPlayerGold() {
        if (Game.Instance.mapPlayerData[this.mapIndex]) {
            let data = {
                mapIndex: this.mapIndex,
                addNum: this.productionGold
            }
            Global.Event.emit("增加游戏金币", data)
            this.productionGold = 0
            let addGoldItem = Tools.NodePools.getNode("AddGoldItem")
            addGoldItem.parent = this.node
            addGoldItem.getComponent(AddGoldItem).init(data.addNum)
        }
    }

    /** 进行操作 */
    onOperate(data?) {
        if (Game.Instance.checkPause()) return
        if (!this.canOperate) return /* Global.Event.emit("UI提示", { content: "不能操作" }) */
        let itemData = Tools.GameCfg.itemData[this.data.itemIndex]
        Global.Event.emit("取消选中", this.mapIndex)
        this.selectNode.active = true

        let levelData = []
        let copyData = Global.Common.deepCopy(Tools.GameCfg.remove)
        if (this.allPropData[this.data.lv + 1]) {
            levelData.push(this.allPropData[this.data.lv + 1])

            let copyData = Global.Common.deepCopy(Tools.GameCfg.level)
            if (this.nextPropData && this.nextPropData.spriteName) {
                copyData.spriteName = this.nextPropData.spriteName
                copyData.hp = this.nextPropData.hp
                copyData.name = this.nextPropData.name
                copyData.id = this.nextPropData.id
            }
            levelData.push(copyData)
        }
        copyData.cost.gold = this.curPropData.removeCost.gold
        if (this.curPropData.removeCost.Knowledge) {
            copyData.cost.Knowledge = this.curPropData.removeCost.Knowledge
        }
        levelData.push(copyData)
        let propData = {
            targetNode: this.node,
            propType: "升级",
            levelData: levelData
        }
        Global.UIManger.pushWindow('GamePropUI', 'GamePropUI', propData);
        // GamePropUI.Instance.showPropUI(this.node, propData)
    }

    onLevelUP() {
        super.onLevelUP()
        this.smokeNode.active = true
        this.smokeNode.getComponent(UIFrameAnimate).playAnima(1, () => {
            this.smokeNode.active = false
            this.itemSprite.active = true
        })
    }

    /**死亡 */
    onDeath() {
        super.onDeath()
        let mapNode = MapMgr.Instance.getTriggerByIndex(this.posIndex.x, this.posIndex.y)
        if (mapNode) mapNode.active = true
        /*  let buildingNode = MapMgr.Instance.newMapItem({
             posIndex: this.posIndex,
             itemIndex: 1003,
             mapIndex: this.mapIndex
         }) */
    }

}
