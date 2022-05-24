
import { AniName } from "../../module/animation/DragonAnimation";
import DragonSkinNode from "../../module/animation/DragonSkinNode";
import { Tools } from "../../module/Tools";
import ItemBase from "../../Scripts/ItemBase";
import MapMgr from "../../Scripts/MapMgr";
import RoleBase, { playerState } from "../../Scripts/game/player/RoleBase";
import Game from "../../Scripts/scene/Game";
import GameDoorItem from "../../Scripts/game/GameDoorItem";
import GameUI from "../../Scripts/scene/GameUI";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GameBoss extends RoleBase {

    @property(DragonSkinNode)
    dragonSkinNode: DragonSkinNode = null;

    @property(cc.Node)
    progressNode: cc.Node = null

    @property(cc.Label)
    lv: cc.Label = null

    progress: cc.ProgressBar = null

    hurtEff: cc.Node = null

    onLoad() {
        super.onLoad()

        Global.Event.on("boss攻速减慢", this.onSubAttkSpeed, this)

        Global.Event.on("眩晕boss", this.onVertigo, this)

        Global.Event.on("boss使用狂暴", this.onUseRage, this)
        Global.Event.on("boss使用干扰", this.onUseDisturb, this)
        Global.Event.on("boss使用传送", this.onUseCS, this)
        Global.Event.on("boss使用冲撞", this.onUseCZ, this)


        this.progress = this.progressNode.getComponent(cc.ProgressBar)

        this.hurtEff = this.node.getChildByName("hurtEff")
    }

    /**boss玩家使用狂暴 */
    onUseRage() {
        this.isPlayer && this.useRage()
    }

    /**boss玩家使用干扰 */
    onUseDisturb() {
        this.isPlayer && this.useDisturb()
    }

    /**boss玩家使用传送 */
    onUseCS() {
        this.isPlayer && this.useCS()
    }

    /**boss玩家使用冲撞 */
    onUseCZ() {
        this.canCZ = true
        this.isPlayer && this.useCZ()
    }

    protected start(): void {
        this.dragonSkinNode.updateSkinByIndex(this.skinId - 1)
    }

    /**
     * 
     * @param duration 眩晕时间
     */
    onVertigo(duration: number = 1, bossNode) {
        if (!bossNode || (bossNode && bossNode == this.node)) {
            this.isVertigo = true
            this.playerState = playerState.眩晕
            this.dragonAnimation.playAnimation(AniName.待机)
            this.node.getChildByName("eff_yun").active = true
            this.unschedule(this.resetVertigo)
            this.scheduleOnce(this.resetVertigo, duration)
        }
    }

    resetVertigo() {
        this.playerState = playerState.待机
        this.isVertigo = false
        this.node.getChildByName("eff_yun").active = false
    }

    /**是否减攻速 */
    isSubAttkSpeed: boolean = false
    /**攻速减慢 */
    onSubAttkSpeed() {
        this.isSubAttkSpeed = true
        this.unschedule(this.resetAttkSpeed)
        this.scheduleOnce(this.resetAttkSpeed, 2)
    }

    /**恢复攻速 */
    resetAttkSpeed() {
        this.isSubAttkSpeed = false
    }


    /**收割者技能数据 狂暴 */
    bossRageData = null

    /**收割者技能数据 干扰 */
    bossDisturbData = null

    /**血量攻击力经验等数据 */
    bossData = null
    setOptions(data) {
        super.setOptions(data)

        this.maxMoveSpeed += 0.5

        this.isPlayer = data.isPlayer
        this.skinId = data.skinId
        this.isSmallBoss = data.isSmallBoss

        this.node.setPosition(MapMgr.Instance.getPosByMapId(data.playerPos.x, data.playerPos.y))

        this.bossRageData = Tools.JosnCfg.bossProp[0]
        this.bossDisturbData = Tools.JosnCfg.bossProp[1]

        this.resetBossData()
    }

    /**增加血量百分比 */
    addHpPer: number = 0

    /**增加攻击力百分比 */
    addAttkHurtPer: number = 0


    /**攻击cd */
    attkCd: number = 1
    /**能否攻击 */
    canAttk: boolean = true
    resetBossData() {
        let bossData = Tools.DataMore.gameMode == "playerMode" ? Tools.JosnCfg.bossData[this.data.lv] : Tools.JosnCfg.bossData2[this.data.lv]
        if (Tools.DataMore.gameMode == "outMode") {
            bossData = Tools.JosnCfg.bossData3[this.data.lv]
        }
        if (bossData) {
            this.bossData = bossData
        } else {
            console.log("boss已满级");
        }

        this.maxHp = this.bossData.hp * ((100 + this.addHpPer) / 100)
        if (Tools.DataMore.gameMode == "outMode") {
            this.maxHp *= 10
        }
        this.curHp = this.maxHp
        this.attkHurt = this.bossData.atk * ((100 + this.addAttkHurtPer) / 100)
        this.exLv = this.bossData.exLv

        if (this.isSmallBoss) {
            let attkPer = [0.05, 0.2, 0.4, 0.4, 0.9]
            this.attkHurt *= attkPer[this.data.bossIndex]
            this.lv.string = "lv:" + (this.data.lv + 1)
            Tools.DataMore.gameMode == "bossMode" && (this.maxHp /= 2)
            this.curHp = this.maxHp
        }
    }

    addBossAtk(scale: number = 100) {
        this.attkHurt = this.bossData.atk * ((100 + this.addAttkHurtPer) / 100) * scale
    }

    /** 设置玩家移动方向 */
    setPlayerMoveDir(dir) {
        if (this.playerState == playerState.死亡) return
        if (this.playerState == playerState.眩晕) return
        if (this.playerState == playerState.传送) return
        super.setPlayerMoveDir(dir)
        if (this.moveDir.x != 0 || this.moveDir.y != 0) {
            this.playerState != playerState.攻击 && this.dragonAnimation.playAnimation(AniName.走)
            this.playerState != playerState.攻击 && (this.dragonAnimation.node.scaleX = this.moveDir.x > 0 ? 1 : -1)
        }
    }

    /** 检查是否播放攻击音效 */
    checkPlaySound(soundName) {
        if (Game.Instance.checkPause()) return

        let target = this.node
        if (!target || !target.isValid) return
        let cameraWidth = cc.winSize.width / Game.Instance.camera.camera.zoomRatio
        let cameraHeight = cc.winSize.height / Game.Instance.camera.camera.zoomRatio
        let cameraX = Game.Instance.camera.node.x
        let cameraY = Game.Instance.camera.node.y

        let checkPos = cc.v2(target.x, target.y)
        let show = false


        if (cameraX + cameraWidth / 2 < checkPos.x) {//boss在右
            show = true
        } else if (cameraX - cameraWidth / 2 > checkPos.x) {//boss在左
            show = true
        } else if (cameraY + cameraHeight / 2 < checkPos.y) {//boss在上
            show = true
        } else if (cameraY - cameraHeight / 2 > checkPos.y) {//boss在下
            show = true
        }
        if (!show) {
            Global.Audio.playSound(soundName);
        }

    }

    /**攻击次数 */
    attkCount: number = 0
    /**收割的角色数量 */
    playerDeathCount: number = 0
    /**攻击 */
    onAttack(node: cc.Node) {
        if (!this.canAttk || !node.isValid) return
        this.canAttk = false
        this.checkPlaySound('boss攻击')
        this.dragonAnimation.node.scaleX = (node.x - this.node.x) > 0 ? 1 : -1
        this.playerState = playerState.攻击
        let data = {
            hurt: this.attkHurt * (this.isRage ? 2 : 1)
        }
        this.dragonAnimation.playAnimation(AniName.攻击, () => {
            this.playerState = playerState.待机
            this.setPlayerMoveDir(cc.v2(0, 0))
            if (node.isValid && node.getComponent(ItemBase)) {
                node.getComponent(ItemBase).onHurt(data)
                if (node.getComponent(GameDoorItem)) this.showMsg(Tools.GameCfg.bossTip[Math.floor(Math.random() * Tools.GameCfg.bossTip.length)])
            }

            let rB = node.isValid && node.getComponent(RoleBase)
            if (rB) {
                this.addEx(Tools.DataMore.gameMode == "playerMode" ? 1000 : 500)
                this.playerDeathCount++
                this.checkAddPer(rB)
                rB.onHurt(data)
            } else {
                this.addEx()
            }

            this.attkCount++
            if (this.attkCount % 3 == 0 && !this.isPlayer) {
                this.useRage()
            }
        })
        let attCd = this.attkCd / (this.isRage ? 2 : 1)
        if (this.isSubAttkSpeed) {
            attCd *= 1.3
        }
        this.scheduleOnce(() => {
            this.canAttk = true
        }, attCd + 0.15)
    }

    /**增加经验 */
    addEx(addEx: number = 100, isShow = true) {
        addEx = addEx * (GameUI.Instance.bossAddSpeedTime > 0 ? 2 : 1)
        this.ex += addEx
        if (this.ex >= this.exLv) {
            this.ex = 0
            this.addLevel()
        }
        this.isPlayer && Global.Event.emit("增加经验", addEx, isShow)
    }

    /**升级 */
    addLevel() {
        this.data.lv++
        console.log("boss升级  ", this.data.lv);
        this.lv.string = "lv:" + (this.data.lv + 1)

        if (!this.isSmallBoss && (Tools.DataMore.gameMode != "playerMode" || Game.Instance.gamePlayerCom.isOnBed)) {
            let desc = "收割者升级了！ lv:" + (this.data.lv + 1)
            Global.Event.emit("游戏提示", desc)
        }


        let levelUp = Global.Loader.getInstantiate("eff_LevelUp")
        levelUp.parent = this.node
        this.resetBossData()
    }

    /**检测增加百分比 */
    checkAddPer(rB: RoleBase) {
        let bossAddData = Tools.JosnCfg.bossAddData
        let prop = "", addPer = 10
        for (let i = 0; i < bossAddData.length; i++) {
            let addData = bossAddData[i]
            if (addData.num == this.playerDeathCount) {
                if (addData.hp) {
                    this.addHpPer += addData.hp
                    prop = "血量"
                    addPer = this.addHpPer
                }
                if (addData.atk) {
                    this.addAttkHurtPer += addData.atk
                    prop = "血量"
                    addPer = this.addAttkHurtPer
                }
                break
            }
        }
        this.maxHp = this.bossData.hp * ((100 + this.addHpPer) / 100)
        if (Tools.DataMore.gameMode == "outMode") {
            this.maxHp *= 10
        }
        this.attkHurt = this.bossData.atk * ((100 + this.addAttkHurtPer) / 100)

        console.log("boss升级 this.maxHp  >> ", this.maxHp);
        console.log("boss升级 this.attkHurt  >> ", this.attkHurt);
    }

    attkPlayer: cc.Node = null
    /** 受伤 */
    onHurt(data) {
        data.attkPlayer && (this.attkPlayer = data.attkPlayer)
        super.onHurt(data)
        console.log("boss受到伤害", data.hurt);

        if (data.hurt > 0) {
            this.checkPlaySound('击中boss')
            this.hurtEff.active = true
            for (let i = 0; i < this.hurtEff.childrenCount; i++) {
                const effNode: cc.Node = this.hurtEff.children[i];
                effNode.getComponent(cc.ParticleSystem).resetSystem()
            }
        }



        if (data.hurt > 0 && this.curHp > 0 && this.curHp / this.maxHp < 0.5 && !this.isPlayer) {
            this.useDisturb()
        }

        if (this.curHp > 0) {
            this.progress.progress = this.curHp / this.maxHp
            this.progressNode.active = true
            this.progressNode.stopAllActions()
            this.progressNode.runAction(cc.fadeIn(0.1))
            this.unschedule(this.hideProNode)
            this.scheduleOnce(this.hideProNode, 2)
        }
    }

    /**恢复血量 */
    resumeHp() {
        let data = {
            hurt: -Math.round(this.maxHp * 0.1)
        }
        this.onHurt(data)
    }

    /**获得恢复血量进度 */
    getResumePro() {
        return this.curHp / this.maxHp
    }

    /**隐藏血量条 */
    hideProNode() {
        this.progressNode.runAction(cc.sequence(cc.fadeOut(0.5), cc.callFunc(() => {
            this.progressNode.active = false
        })))
    }

    /**死亡 */
    onDeath() {
        if (this.playerState != playerState.死亡) {
            if (!this.isSmallBoss) {

                if (!this.attkPlayer) {
                    debugger
                }

                Game.Instance.addMvpPlayer(this.attkPlayer || Game.Instance.gamePlayer)

                let desc = "收割者" + this.data.name + "被击败了，韭菜胜利！！！"
                Global.Event.emit("游戏提示", desc)
                Global.Audio.playSound('收割者失败');
                Global.Event.emit("游戏结束")
            } else {
                let desc = "小收割者被击败了！！！"
                Global.Event.emit("游戏提示", desc)
                Game.Instance.removeSmallBoss(this.node)
            }
        }


        super.onDeath()

        this.node.runAction(cc.sequence(cc.fadeOut(1), cc.callFunc(() => {
            this.node.destroy()
        })))
    }

    /**狂暴状态 */
    isRage: boolean = false
    /**能否使用狂暴 */
    canRage: boolean = true
    /**使用狂暴 */
    useRage() {
        if (!this.canRage) return
        this.canRage = false
        let eff_Rage = Global.Loader.getInstantiate("eff_Rage")
        eff_Rage.parent = this.node
        this.isRage = true

        console.log("boss狂暴了");

        Global.Event.emit("释放技能")
        this.scheduleOnce(() => {
            this.canRage = true
        }, this.bossRageData.delay)

        this.scheduleOnce(() => {
            eff_Rage.destroy()
        }, 2)
        this.unschedule(this.resetRage)
        this.scheduleOnce(this.resetRage, this.bossRageData.duration)
    }

    resetRage() {
        this.isRage = false
    }

    /**能否使用干扰 */
    canDisturb: boolean = true
    /**使用干扰 */
    useDisturb() {
        if (!this.canDisturb) return
        this.canDisturb = false
        Global.Event.emit("释放干扰", this.bossDisturbData.duration, this.node)
        Global.Event.emit("释放技能")
        console.log("boss干扰了");

        let eff_Disturb = Global.Loader.getInstantiate("eff_Disturb")
        eff_Disturb.parent = this.node

        this.scheduleOnce(() => {
            eff_Disturb.destroy()
        }, 2)
        this.unschedule(this.resetDisturb)
        this.scheduleOnce(this.resetDisturb, this.bossDisturbData.delay)
    }

    resetDisturb() {
        this.canDisturb = true
    }

    /**能否使用传送 */
    canCS: boolean = true
    /**使用传送 */
    useCS() {
        if (!this.canCS) return
        this.canCS = false
        this.playerState = playerState.传送
        let pos = Tools.DataMgr.getBossCSPos()
        this.dragonAnimation.node.active = false
        this.node.setPosition(MapMgr.Instance.getPosByMapId(pos.x, pos.y))
        let eff_Light = Global.Loader.getInstantiate("eff_Light")
        eff_Light.parent = this.node
        this.node.setSiblingIndex(this.node.parent.childrenCount)
        Global.Audio.playSound('传送');

        this.scheduleOnce(() => {
            this.playerState = playerState.待机
            eff_Light.destroy()
            this.dragonAnimation.node.active = true
            this.canCS = true
        }, 2)
    }


    /**能否使用冲撞 */
    canCZ: boolean = true
    /**使用冲撞 */
    useCZ() {
        if (!this.canCZ) return
        this.canCZ = false
        this.eff_cz && this.eff_cz.destroy()
        this.addMoveSpeed = 2
        this.attkCd = 0.5

        this.eff_cz = Global.Loader.getInstantiate("eff_chongci")
        this.eff_cz.parent = this.node
        this.eff_cz.setSiblingIndex(this.node.childrenCount)
        this.scheduleOnce(() => {
            this.eff_cz && this.resetCZ()
            this.canCZ = true
        }, 10)
    }

    /**重置冲撞 */
    resetCZ() {
        this.eff_cz && this.eff_cz.destroy()
        this.eff_cz = null
        this.addMoveSpeed = 1
        this.attkCd = 1
    }

    /**获得一个攻击目标 */
    getAtkNode() {
        let allGamePlayer = Game.Instance.allGamePlayer
        let targetNode: cc.Node = null
        let maxDis = 90
        for (let i = 0; i < allGamePlayer.length; i++) {
            const p = allGamePlayer[i];
            let dis = p.position.sub(this.node.position).mag()
            if (dis < maxDis && p.getComponent(RoleBase).playerState != playerState.死亡 && !p.getComponent(RoleBase).isHide) {
                maxDis = dis
                targetNode = p
            }
        }
        if (targetNode) {
            return targetNode
        }

        return MapMgr.Instance.getNearTriggerByPlayer(this)

    }

    protected update(dt: number): void {
        if (Tools.DataMore.gameMode == "playerMode" || !this.isPlayer) return
        if (Game.Instance.checkPause()) return
        if (this.playerState == playerState.眩晕) return
        if (this.playerState == playerState.死亡) return
        let atkNode = this.getAtkNode()
        if (atkNode) this.onAttack(atkNode)
    }

}
