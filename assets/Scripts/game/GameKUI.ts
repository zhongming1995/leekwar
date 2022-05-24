// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import Game from "../scene/Game";
import GameUI from "../scene/GameUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameKUI extends cc.Component {

    static _instance: GameKUI;

    static get Instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new GameKUI();
        return this._instance;
    }


    @property(cc.Label)
    atkPlayerCount: cc.Label = null

    @property(cc.Sprite)
    exPro: cc.Sprite = null

    @property(cc.Label)
    addEx: cc.Label = null

    @property(cc.Label)
    bossLv: cc.Label = null

    @property(cc.Label)
    KLv: cc.Label = null


    kLvData = null
    lvData = null
    lv: number = 0
    onLoad() {
        GameKUI._instance = this
        Global.Event.on("收割者出现", this.updatePro, this)
        Global.Event.on("玩家死亡", this.addAtk, this)
        Global.Event.on("增加经验", this.onAddEx, this)

        Global.Event.on("设置矿场等级", this.setKLv, this)

        this.kLvData = Tools.JosnCfg.kLvData
    }

    setKLv(lv: number) {
        if (lv > 0 && this.kLvData[lv - 1]) {

            this.lv = lv - 1
            this.initLvData()
        }
    }

    initLvData() {
        if (this.kLvData[this.lv]) {
            this.lvData = this.kLvData[this.lv]
            this.atkNum = 0
            this.updateAtk()
        }
    }

    protected onDestroy(): void {
        Global.Event.removeAllListeners(this)
    }

    start() {
        this.initLvData()

        this.schedule(this.addBoosEx, 1)
    }

    addBoosEx() {
        let gameBossCom = Game.Instance.gameBossCom
        if (Game.Instance.checkPause()) return
        if (Game.Instance.playerDeathCount <= 0) return
        if (!gameBossCom) return
        let ex = this.lvData.addBossEx * (GameUI.Instance.bossAddSpeedTime > 0 ? 2 : 1)
        gameBossCom.addEx(ex, false)
        Global.Event.emit('矿场经验提示', ex);
    }

    /**生成的boss数量 */
    newBossCount: number = 0
    /**升级 */
    onLevelUp() {
        this.lv++
        this.initLvData()
        Global.Event.emit("创建小boss", this.newBossCount)
        this.newBossCount++
    }

    getNodeHsl(node) {
        let nodeHsl = node.getComponent("HSL")
        cc.Tween.stopAllByTarget(nodeHsl)
        return nodeHsl
    }

    /**
     * 增加经验
     * @param addNum .
     */
    onAddEx(addNum: number, isShow: boolean) {
        if (isShow) {
            /* this.addEx.node.scale = 0
            this.addEx.node.opacity = 0 */
            let ex = cc.instantiate(this.addEx.node)
            ex.parent = this.addEx.node.parent
            ex.runAction(cc.sequence(cc.fadeIn(0.2), cc.moveBy(1, cc.v2(0, 50)), cc.spawn(cc.fadeOut(0.8), cc.moveBy(0.8, cc.v2(0, 40))), cc.callFunc(() => {
                ex.destroy()
            })));
            ex.getComponent(cc.Label).string = "经验 +" + addNum
        }
        this.updatePro()
    }

    updatePro() {
        let gameBossCom = Game.Instance.gameBossCom
        this.exPro.fillRange = gameBossCom.ex / gameBossCom.exLv
        this.bossLv.string = "lv." + (gameBossCom.data.lv + 1)
        cc.tween(this.getNodeHsl(this.exPro)).to(0.05, { dL: 0.6 }).to(0.05, { dL: 0 }).start()
    }

    atkNum: number = 0
    addAtk() {
        let gameBoss = Game.Instance.gameBoss
        if (!gameBoss) {
            return
        }
        let gold = cc.instantiate(this.node.getChildByName("gold"))

        gold.parent = this.node
        gold.name = "gold1"

        let touchPos = Game.Instance.camera.camera.getWorldToScreenPoint(gameBoss.parent.convertToWorldSpaceAR(gameBoss.position))

        const pos = this.node.convertToNodeSpaceAR(touchPos)

        pos.y += 50

        gold.scale = 0.8
        gold.setPosition(pos)
        gold.runAction(cc.sequence(
            cc.spawn(cc.scaleTo(0.3, 1.5), cc.moveBy(0.3, cc.v2(0, 100))),
            cc.delayTime(1), cc.moveTo(0.5, cc.v2(-48, -14)
            ), cc.callFunc(() => {
                gold.destroy()
                this.node.runAction(cc.sequence(cc.scaleTo(0.25, 1.1), cc.scaleTo(0.25, 1), cc.callFunc(() => {
                    this.atkNum++
                    this.updateAtk()
                })))
            })
        ))

    }

    updateAtk() {
        this.atkPlayerCount.string = "" + (this.lvData.exLv - this.atkNum)
        this.KLv.string = "矿场LV" + (this.lv + 1)
        if (this.atkNum >= this.lvData.exLv) {
            return this.onLevelUp()
        }
    }
}
