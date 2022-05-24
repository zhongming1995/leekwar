import DragonAnimation, { AniName } from "../../../module/animation/DragonAnimation";
import Game from "../../scene/Game";
import MapMgr from "../../MapMgr";
import { Tools } from "../../../module/Tools";

export enum playerState {
    待机 = "待机",
    行走 = "行走",
    死亡 = "死亡",
    攻击 = "攻击",
    弹跳 = "弹跳",
    眩晕 = "眩晕",
    传送 = "传送",
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class RoleBase extends cc.Component {

    @property(DragonAnimation)
    dragonAnimation: DragonAnimation = null;

    @property(cc.Node)
    msgBox: cc.Node = null

    /** 移动方向 */
    public lastMoveDir = cc.v2(0, 0);

    /** 移动方向 */
    public moveDir = cc.v2(0, 0);

    /** 击退状态标记 */
    public beatBackDir = cc.Vec2.ZERO

    /** 角色移动速度 */
    public maxMoveSpeed = 2.7

    /** 角色移动速度加成 */
    public addMoveSpeed = 1

    /**玩家状态 */
    public playerState: playerState = playerState.待机;

    /**游戏中产生的金币 */
    public playerGold: number = 0;

    /**游戏中产生的闪电 */
    public playerLight: number = 0;

    /**玩家皮肤id */
    public skinId: number = -1

    /**是否是玩家 */
    public isPlayer: boolean = false

    /**所在床的mapIndex */
    public mapIndex: number = -1

    /**是否在床上 */
    public isOnBed: boolean = false

    /** 最大血量 */
    public maxHp = 1

    /** 当前血量 */
    public curHp = 1

    /**攻击伤害 */
    attkHurt: number = 120

    /**盾状态 */
    isDun: boolean = false

    /**隐藏不被发现 */
    isHide: boolean = false

    /**是否眩晕 */
    isVertigo: Boolean = false

    /**消息label */
    msgLabel: cc.Label = null

    isGamePlayer: boolean = false


    /**升级所需经验 */
    exLv: number = 0
    /**经验 */
    ex: number = 0

    onLoad() {
        this.node.tss = this
        this.msgLabel = this.msgBox.getChildByName("msg").getComponent(cc.Label)
    }

    hideGuide() {

    }

    /**
     * 增加boss攻击倍数
     * @param scale 倍数
     */
    addBossAtk(scale: number = 100) { }

    showMsgByType(type: number) {

    }

    /**
     * 显示消息
     * @param msg 消息
     * @param duration 持续时间
     */
    showMsg(msg: string, duration: number = 5) {
        // return
        if (this.msgBox.active) return
        this.msgLabel.string = msg
        Global.Event.emit("显示消息", this.node, msg)
        this.msgBox.active = true
        this.msgBox.runAction(cc.sequence(cc.fadeIn(0.5), cc.delayTime(duration), cc.fadeOut(0.5), cc.callFunc(() => {
            Global.Event.emit("隐藏消息", this.node)
            this.msgBox.active = false
        })))
    }

    protected onDestroy(): void {
        Global.Event.removeAllListeners(this);
    }

    isSmallBoss: boolean = false
    playerName: string = ""
    matchId: number = 0
    data = null;
    setOptions(data) {
        this.data = data
        this.playerName = data.name
        this.matchId = data.matchId
    }

    /**获得移动方向 */
    getPlayerLastMoveDir() {
        return this.lastMoveDir
    }

    /** 设置玩家移动方向 */
    setPlayerMoveDir(dir) {
        this.moveDir = cc.v2(dir.x, dir.y).normalize()
        if (this.moveDir.x == 0 && this.moveDir.y == 0) {
            if (this.isGamePlayer || Tools.DataMore.gameMode != "bossMode" || this.playerState != playerState.攻击) {
                this.playerState = playerState.待机
                this.dragonAnimation.playAnimation(AniName.待机)
            }
        }
        else {
            this.lastMoveDir.x = this.moveDir.x
            this.lastMoveDir.y = this.moveDir.y
            if (this.isGamePlayer || Tools.DataMore.gameMode != "bossMode" || this.playerState != playerState.攻击) {
                this.playerState = playerState.行走
            }
        }

    }

    /**
     * 增加或减少金币
     * @param num 改变数量 负数则减少金币
     */
    addPlayerGold(num: number) {

    }

    /**获得玩家游戏中金币 */
    getPlayerGold() {

    }

    /**
   * 增加或减少金币
   * @param num 改变数量 负数则减少金币
   */
    addPlayerLight(num: number) {

    }

    /**获得玩家游戏中金币 */
    getPlayerLight() {

    }

    /**攻击 */
    onAttack(node: cc.Node) {

    }

    canPlayHear = true
    /**被boss设为攻击目标 */
    setBossAttk() {
        if (this.isPlayer) {
            if (this.canPlayHear) {
                this.canPlayHear = false
                let desc = "你被收割者盯上了，快跑!"
                Global.Event.emit("游戏提示", desc)
                Global.Event.emit("心跳")
                this.playHeartSound()
                this.schedule(this.playHeartSound, 5)
                this.scheduleOnce(() => {
                    this.canPlayHear = true
                }, 5)
            }
        } else {
            Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.reSetBossAttk()
        }
    }

    /**播放心跳声音 */
    playHeartSound() {
        Global.Audio.playSound("心跳")
        console.log("播放心跳声音");
    }

    /**被boss取消攻击目标 */
    reSetBossAttk() {
        this.unschedule(this.playHeartSound)
        Global.Event.emit("取消心跳")
    }

    /**增加的营救赏金 */
    addSaveNum: number = 1
    /**设置床状态 */
    setBedFlag(isOnBed: boolean, mapIndex: number, addSaveNum?: number) {
        this.isOnBed = isOnBed
        this.mapIndex = mapIndex

        this.dragonAnimation.node.active = this.isOnBed ? false : true
    }

    /** 受伤 */
    onHurt(data) {
        let hurt = data.hurt
        this.addHp(-hurt)
    }

    /**恢复血量 */
    resumeHp() {

    }

    /**获得恢复血量进度 */
    getResumePro() {
        return 1
    }

    /**
     * 改变血量
     * @param num 改变数量  减少的话为负
     */
    addHp(num: number) {
        this.curHp += num
        if (this.curHp > this.maxHp) {
            this.curHp = this.maxHp
        } else if (this.curHp <= 0) {
            this.onDeath()
        }
    }

    /**增加经验 */
    addEx(addEx: number = 100, isShow = true) {

    }

    /**弹跳 */
    onSpring(posIndex: cc.Vec2, startPos: cc.Vec2) {
        if (this.isPlayer) {
            Global.Audio.playSound('弹簧');
        }
        this.playerState = playerState.弹跳
        this.dragonAnimation.playAnimation(AniName.跳)
        let pos = MapMgr.Instance.getPosByMapId(posIndex.x, posIndex.y)
        if (Math.abs(pos.x - this.node.x) > 90) {
            pos.y = this.node.y
        } else {
            pos.x = this.node.x
        }
        this.node.runAction(cc.sequence(cc.moveTo(0.2, pos), cc.callFunc(() => {
            this.playerState = playerState.待机
            Global.Event.emit("弹跳结束", this.node)
        })))
    }

    /**死亡 */
    onDeath() {
        this.setPlayerMoveDir(cc.v2(0, 0))
        this.msgBox.active = false
        this.playerState = playerState.死亡
    }

    /**使用干扰 */
    useDisturb() {

    }

    useDun() {

    }

    useWater() {

    }

    useSmoke() {

    }

    toSavePlayer() {

    }

    eff_cz: cc.Node = null
    /**重置冲撞 */
    resetCZ() {
    }

    updateRolekMove(dt) {
        let maxSpeed = this.maxMoveSpeed
        let pos = this.moveDir

        if (this.beatBackDir.x != 0 || this.beatBackDir.y != 0) {//被击退状态
            pos = this.beatBackDir
        }
        else {//正常移动
            if (pos.x == 0 && pos.y == 0) { //移动方向为0时，不进行移动

                return
            }
            //移动速度加成
            maxSpeed *= this.addMoveSpeed
        }


        let Vx = maxSpeed * pos.x * 1.25//dt / Tools.dtTime
        let Vy = maxSpeed * pos.y * 1.25//dt / Tools.dtTime

        // console.log(Vx,Vy)


        let movePos = this.checkCanMove(Vx, Vy)
        if (this.eff_cz) {
            let angle = Math.atan2(Vy, Vx) * 180 / Math.PI;
            this.eff_cz.angle = angle + 180
            /*  if (movePos.x != Vx || movePos.y != Vy) {
                 this.resetCZ()
             } */
        }

        this.node.x += movePos.x
        this.node.y += movePos.y
    }

    /**检查行走方向 */
    checkCanMove(x, y) {
        if (this.checkRoleMove(x, y)) {
            return cc.v2(x, y)
        }
        else if (this.checkRoleMove(x, 0)) {
            return cc.v2(x, 0)
        }
        else if (this.checkRoleMove(0, y)) {
            return cc.v2(0, y)
        }
        return cc.Vec2.ZERO
    }

    /**是否可以行走 */
    checkRoleMove(x, y) {
        let mapMgr = MapMgr.Instance;
        let w = this.node.width / 2
        let h = this.node.height / 2

        if (x > 0) {
            if (mapMgr.getGid(this.node.x + x + w, this.node.y + y + h, this.node) != 0) {
                return false
            }
            if (mapMgr.getGid(this.node.x + x + w, this.node.y + y - h, this.node) != 0) {
                return false
            }
            if (mapMgr.getGid(this.node.x + x + w, this.node.y + y, this.node) != 0) {
                return false
            }

        }
        else if (x < 0) {
            if (mapMgr.getGid(this.node.x + x - w, this.node.y + y + h, this.node) != 0) {
                return false
            }
            if (mapMgr.getGid(this.node.x + x - w, this.node.y + y - h, this.node) != 0) {
                return false
            }
            if (mapMgr.getGid(this.node.x + x - w, this.node.y + y, this.node) != 0) {
                return false
            }
        }

        if (y > 0) {
            if (mapMgr.getGid(this.node.x + x + w, this.node.y + y + h, this.node) != 0) {
                return false
            }
            if (mapMgr.getGid(this.node.x + x - w, this.node.y + y + h, this.node) != 0) {
                return false
            }
            if (mapMgr.getGid(this.node.x + x, this.node.y + y + h, this.node) != 0) {
                return false
            }

        }
        else if (y < 0) {
            if (mapMgr.getGid(this.node.x + x + w, this.node.y + y - h, this.node) != 0) {
                return false
            }
            if (mapMgr.getGid(this.node.x + x - w, this.node.y + y - h, this.node) != 0) {
                return false
            }
            if (mapMgr.getGid(this.node.x + x, this.node.y + y - h, this.node) != 0) {
                return false
            }
        }

        return true

        if (mapMgr.getGid(this.node.x + x + w, this.node.y + y + h, this.node) == 0
            && mapMgr.getGid(this.node.x + x + w, this.node.y + y - h, this.node) == 0
            && mapMgr.getGid(this.node.x + x - w, this.node.y + y - h, this.node) == 0
            && mapMgr.getGid(this.node.x + x - w, this.node.y + y + h, this.node) == 0) {
            return true
        }

        return false
    }

    lateUpdate(dt) {
        if (this.playerState == playerState.死亡) return
        if (this.playerState == playerState.眩晕) return
        if (this.playerState == playerState.弹跳) return
        if (this.playerState == playerState.传送) return
        if (Game.Instance.checkPause()) return
        this.updateRolekMove(dt)

    }
}