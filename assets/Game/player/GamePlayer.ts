
import { AniName } from "../../module/animation/DragonAnimation";
import DragonSkinNode from "../../module/animation/DragonSkinNode";
import { Tools } from "../../module/Tools";
import Game from "../../Scripts/scene/Game";
import ItemBase, { itemType } from "../../Scripts/ItemBase";
import MapMgr from "../../Scripts/MapMgr";
import RoleBase, { playerState } from "../../Scripts/game/player/RoleBase";
import GameTask from "../../Scripts/game/GameTask";


const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePlayer extends RoleBase {

    @property(DragonSkinNode)
    dragonSkinNode: DragonSkinNode = null;

    @property(cc.Node)
    guideNode: cc.Node = null;

    onLoad() {
        super.onLoad()
        /*  this.schedule(() => {
             let mapindex = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
             this.isPlayer && console.log(mapindex.x, mapindex.y);
 
         }, 1) */

        Global.Event.on("解救玩家", this.onSavePlayer, this)
        Global.Event.on("视频自救", this.onSaveSelf, this)

        Global.Event.on("使用急速鞋", this.onUseSpeedShoes, this)
        Global.Event.on("使用金刚盾", this.onUseDun, this)
        Global.Event.on("使用隐匿药水", this.onUseWater, this)
        Global.Event.on("使用麻醉烟雾", this.onUseSmoke, this)
    }

    protected start(): void {
        this.schedule(this.checkDoorClose, 1)
    }

    guideTargetNode: cc.Node = null
    guidePath() {

        let startPoint = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
        let endPoint = MapMgr.Instance.getMapIndex(this.guideTargetNode.x, this.guideTargetNode.y)

        let path = Tools.PathFind.searchPathNoWall(startPoint, endPoint)

        if (path && path.length > 0 && this.playerState != playerState.死亡) {
            this.guideNode.opacity = 255
            let curPath = path[path.length - 1]
            let nextPos = path[path.length - 2]
            let dis = nextPos.sub(curPath)
            let dir = dis.normalize()

            //计算弧度
            let radian = Math.atan2(-dir.y, dir.x)
            //弧度转角度
            let angle = radian * 180 / Math.PI;
            this.guideNode.angle = angle

            /*  let dis = this.guideTargetNode.position.sub(this.node.position)
             let dir = dis.normalize()
 
             //计算弧度
             let radian = Math.atan2(dir.y, dir.x)
             //弧度转角度
             let angle = radian * 180 / Math.PI;
             this.guideNode.angle = angle */

        } else {
            this.guideNode.opacity = 0
        }
    }

    hideGuide() {
        this.guideNode.active = false
    }

    protected update(dt: number): void {
        if (this.guideNode.active) {
            this.guidePath()
        }
    }
    /**使用急速鞋 */
    onUseSpeedShoes() {
        if (!this.isPlayer) return
        this.useSpeedShoes()
    }

    useSpeedShoes() {
        this.unschedule(this.resetMoveSpeed)
        this.addMoveSpeed = 2
        this.node.getChildByName("streak").active = true
        this.scheduleOnce(this.resetMoveSpeed, 5)
    }

    resetMoveSpeed() {
        this.addMoveSpeed = 1
        this.node.getChildByName("streak").active = false
    }

    /**使用金刚盾 */
    onUseDun() {
        if (!this.isPlayer) return
        this.useDun()
    }

    useDun() {
        this.node.getChildByName("dun").active = true
        this.isDun = true
    }

    /**使用隐匿药水 */
    onUseWater() {
        if (!this.isPlayer) return
        this.useWater()
    }

    useWater(time: number = 6) {
        let opc = Tools.DataMore.gameMode != "bossMode" ? 125 : 0
        this.dragonSkinNode.node.stopAllActions()
        this.dragonSkinNode.node.runAction(cc.fadeTo(1.5, opc))
        if (this.isDun) {
            this.node.getChildByName("dun").stopAllActions()
            this.node.getChildByName("dun").runAction(cc.fadeTo(1.5, opc))
        }
        this.isHide = true
        this.unschedule(this.resetWater)
        this.scheduleOnce(this.resetWater, time)
    }

    resetWater() {
        this.isHide = false
        this.dragonSkinNode.node.runAction(cc.fadeTo(1.5, 255))
        if (this.isDun) {
            this.node.getChildByName("dun").runAction(cc.fadeTo(1.5, 255))
        }
    }

    /**使用麻醉烟雾 */
    onUseSmoke() {
        if (!this.isPlayer) return
        this.useSmoke()
    }

    useSmoke() {
        let posIndex = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
        let buildingNode = MapMgr.Instance.newMapItem({
            posIndex: posIndex,
            itemIndex: 2012,
            mapIndex: this.mapIndex
        })
    }

    /**矿场被关直接死亡 */
    checkDoorClose() {
        if (this.playerState == playerState.死亡) return
        let itemIndex = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
        let item: cc.Node = MapMgr.Instance.getTriggerByIndex(itemIndex.x, itemIndex.y)
        if (item && item.getComponent(ItemBase).mapIndex == 4 && !Game.Instance.kDoorOpen) {
            this.onDeath()
        }
    }

    setOptions(data) {
        super.setOptions(data)
        this.isGamePlayer = true
        this.isPlayer = data.isPlayer
        this.skinId = data.skinId

        if (this.isPlayer) {
            // this.maxMoveSpeed *= 2
        }
        this.dragonSkinNode.changeSkin(this.skinId - 1)
        this.node.setPosition(MapMgr.Instance.getPosByMapId(data.playerPos.x, data.playerPos.y))

        if (this.isPlayer && Tools.DataMgr.checkGuideByIndex(0)) {
            this.guideNode.active = true
            let doorNode = Tools.DataMgr.doorNode
            let minDis = 10000
            for (const mapIndex in doorNode) {
                if (Object.prototype.hasOwnProperty.call(doorNode, mapIndex)) {
                    const door = doorNode[mapIndex];
                    let dis = this.node.position.sub(door.position).mag()
                    if (dis < minDis) {
                        minDis = dis
                        this.guideTargetNode = Tools.DataMgr.bedNode[mapIndex]
                        MapMgr.Instance.playerBedIndex = Number(mapIndex)
                    }
                }
            }
        }
    }

    /** 设置玩家移动方向 */
    setPlayerMoveDir(dir) {
        if (this.playerState == playerState.死亡) return
        if (this.playerState == playerState.弹跳) return
        if (this.isOnBed) return
        super.setPlayerMoveDir(dir)
        if (this.moveDir.x != 0 || this.moveDir.y != 0) {
            if (Math.abs(this.moveDir.x) > Math.abs(this.moveDir.y)) {
                if (this.moveDir.x > 0) {
                    this.dragonAnimation.resetSpeed(1)
                    this.dragonAnimation.playAnimation(AniName.走1)
                } else {
                    this.dragonAnimation.resetSpeed(-1)
                    this.dragonAnimation.playAnimation(AniName.走1)
                }
            } else {
                if (this.moveDir.y < 0) {
                    this.dragonAnimation.resetSpeed(1)
                    this.dragonAnimation.playAnimation(AniName.走)
                } else {
                    this.dragonAnimation.resetSpeed(-1)
                    this.dragonAnimation.playAnimation(AniName.走)
                }
            }
        }
    }

    /**
     * 增加或减少金币
     * @param num 改变数量 负数则减少金币
     */
    addPlayerGold(num: number) {
        if (isNaN(num)) debugger

        this.playerGold += num
        if (this.playerGold < 0) this.playerGold = 0
        this.isPlayer && Global.Event.emit("刷新游戏金币", this.playerGold)
    }

    /**获得玩家游戏中金币 */
    getPlayerGold() {
        return this.playerGold
    }

    /**
    * 增加或减少闪电
    * @param num 改变数量 负数则减少闪电
    */
    addPlayerLight(num: number) {
        this.playerLight += num
        if (this.playerLight < 0) this.playerLight = 0
        this.isPlayer && Global.Event.emit("刷新游戏闪电", this.playerLight)
    }

    /**获得玩家游戏中闪电 */
    getPlayerLight() {
        return this.playerLight
    }

    /** 受伤 */
    onHurt(data) {
        if (this.isDun) {
            this.isDun = false
            this.node.getChildByName("dun").active = false
            Global.Event.emit("眩晕boss", 2)
            return
        }
        super.onHurt(data)
        if (this.isOnBed) {
            let bed = Tools.DataMgr.bedNode[this.mapIndex]
            bed && bed.getComponent(ItemBase).setBedFlag(true, null, false)
        }
        Global.Event.emit("玩家被攻击", this.node)
    }
    /**死亡 */
    onDeath() {
        super.onDeath()
        Global.Event.emit("玩家死亡", this.mapIndex)

        let desc = "韭菜被抓，收割者变强了!"
        Global.Event.emit("游戏提示", desc)

        if (this.isPlayer) {
            Global.Event.emit("隐藏床按钮")
            Global.Event.emit('隐藏PropUI');
            Global.Event.emit("隐藏修理门")
            Global.Event.emit("隐藏逃生道具")
            Global.Event.emit("默认视野")
            GameTask.Instance.hideSaveTask()
        }

        let long = Global.Loader.getInstantiate("LongItem")
        long.parent = this.node
        long.y = 270
        long.runAction(cc.moveTo(0.3, cc.v2(0, 0)))
        this.isPlayer && Global.Audio.playSound('铁笼掉下');
        Global.Event.emit("关矿场")
        this.scheduleOnce(() => {
            long.destroy()
            this.node.getChildByName("dun").active = false
            this.dragonAnimation.node.active = false
        }, 1)

        this.scheduleOnce(() => {
            this.gotoK()
        }, 2)
    }

    gotoK() {
        let pos = Game.Instance.getBlankPos()
        if (pos) {
            this.node.setPosition(MapMgr.Instance.getPosByMapId(pos.x, pos.y))
            this.node.x += 20
        }

        this.isPlayer && Game.Instance.camera.setFollowBody(this.node)
        let eff_Light = Global.Loader.getInstantiate("eff_Light")
        eff_Light.parent = this.node
        this.node.setSiblingIndex(this.node.parent.childrenCount)

        this.isPlayer && Global.Audio.playSound('传送');


        this.scheduleOnce(() => {
            eff_Light.destroy()
            this.dragonAnimation.node.active = true
            this.dragonAnimation.playAnimation(AniName.挖矿)

            if (this.playerState == playerState.死亡) {
                if (this.isPlayer) {
                    Global.Event.emit('隐藏rocker');
                    !Game.Instance.isOver && Global.Event.emit('显示挖矿');
                    GameTask.Instance.showGoldTask()
                } else {
                    Tools.DataMore.gameMode != "outMode" && this.showMsgByType(3)
                    GameTask.Instance.showSaveTask()
                }
            }



            this.schedule(this.addSaveGold, 1)
        }, 1.5)


    }

    /**被营救 */
    onSavePlayer(isSelf: boolean = false) {
        if (this.playerState == playerState.死亡 && this.isPlayer) {
            this.playerState = playerState.待机
            Global.Event.emit('显示rocker');
            Global.Event.emit('隐藏挖矿');
            this.node.getChildByName("dun").active = this.isDun
        }

        !isSelf && this.unschedule(this.addSaveGold)
    }

    /**视频自救 */
    onSaveSelf() {
        if (this.playerState == playerState.死亡 && this.isPlayer) {
            let playerSaveSelfPos = Game.Instance.playerSaveSelfPos
            let pos = playerSaveSelfPos[Math.floor(Math.random() * playerSaveSelfPos.length)]
            this.node.setPosition(MapMgr.Instance.getPosByMapId(pos.x, pos.y))
            Game.Instance.camera.setFollowBody(this.node)
            this.onSavePlayer(true)
            this.useWater(3)
        }
        this.unschedule(this.addSaveGold)
    }

    toSavePlayer() {
        this.addPlayerGold(Tools.DataMgr.saveGold)
        Global.Event.emit("清空营救赏金");
    }

    /**增加营救赏金 */
    addSaveGold() {
        if (Game.Instance.checkPause()) return
        Global.Event.emit("增加营救赏金", Math.ceil(this.addSaveNum));
    }


    /**设置床状态 */
    setBedFlag(isOnBed: boolean, mapIndex: number, addSaveNum?: number) {
        let mapNode: cc.Node[] = MapMgr.Instance.allMapItemNode[this.mapIndex]
        for (let i = 0; i < mapNode.length; i++) {
            const node = mapNode[i];
            let itemBase = node.getComponent(ItemBase)
            if (itemBase && itemBase.itemType == itemType.手机) {
                addSaveNum += itemBase.curPropData.production
            }
        }

        super.setBedFlag(isOnBed, mapIndex)
        this.node.getChildByName("dun").active = (this.isDun && this.playerState != playerState.死亡 && !isOnBed) ? true : false
        this.dragonSkinNode.node.opacity = (this.isHide && this.playerState != playerState.死亡 && !isOnBed) ? 125 : 255
        if (this.isOnBed && !this.isPlayer) {
            this.showMsgByType(0)
        }
        let addSaveNum1 = 0;
        let addSaveNum2 = 0;
        if (!this.isOnBed && addSaveNum) {
            let allGamePlayer = Game.Instance.allGamePlayer;
            this.addSaveNum = addSaveNum;
            for (let i = 0; i < allGamePlayer.length; i++) {
                let item = allGamePlayer[i];
                addSaveNum1 += item.getComponent(RoleBase).addSaveNum;
            }
            addSaveNum2 = addSaveNum1 * 0.2 /* / allGamePlayer.length */;
            this.addSaveNum = addSaveNum2;
        }
    }

    canShowMsg = [true, true, true, true]
    /**
     * 
     * @param type 0快捷消息 1撤退 2集合 3救援
     */
    showMsgByType(type: number) {
        if (!this.canShowMsg[type]) return
        this.canShowMsg[type] = false
        let duration = 10
        switch (type) {
            case 0://快捷消息
                duration = 20 + Math.floor(Math.random() * 20)
                this.scheduleOnce(() => {
                    this.checkShowMsg(type)
                }, duration)
                break;
            case 1://撤退
            case 2://集合
                duration = 10 + Math.floor(Math.random() * 20)
                this.checkShowMsg(type)
                break;
            case 3://救援
                duration = 10 + Math.floor(Math.random() * 10)
                this.scheduleOnce(() => {
                    this.checkShowMsg(type)
                }, duration)
                break;
            default:
                debugger
                break;
        }

        this.scheduleOnce(() => {
            this.canShowMsg[type] = true
            if (type == 0 || type == 3) {
                this.showMsgByType(type)
            }
        }, duration + 7)
    }

    checkShowMsg(type: number) {
        let msg = ""
        switch (type) {
            case 0://快捷消息
                if (this.isOnBed) {
                    let msgArr = Tools.GameCfg.playerTip["快捷消息"]
                    msg = msgArr[Math.floor(Math.random() * msgArr.length)]
                }
                break;
            case 1://撤退
                if (!this.isOnBed && this.playerState != playerState.死亡) {
                    let msgArr = Tools.GameCfg.playerTip["撤退"]
                    msg = msgArr[Math.floor(Math.random() * msgArr.length)]
                }
                break;
            case 2://集合
                if (!this.isOnBed && this.playerState != playerState.死亡) {
                    let msgArr = Tools.GameCfg.playerTip["集合"]
                    msg = msgArr[Math.floor(Math.random() * msgArr.length)]
                }
                break;
            case 3://救援
                if (!this.isOnBed && this.playerState == playerState.死亡) {
                    let msgArr = Tools.GameCfg.playerTip["救援"]
                    msg = msgArr[Math.floor(Math.random() * msgArr.length)]
                }
                break;
            default:
                debugger
                break;
        }


        msg != "" && this.showMsg(msg)
    }

}
