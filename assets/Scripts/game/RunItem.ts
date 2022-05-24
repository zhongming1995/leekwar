// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import Game from "../scene/Game";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RunItem extends cc.Component {


    @property(cc.Sprite)
    itemSprite: cc.Sprite = null;

    @property(cc.Label)
    runCount: cc.Label = null;

    @property(cc.Node)
    vicon: cc.Node = null;

    @property(cc.Material)
    mat: cc.Material[] = [];

    @property()
    Propname: string = ''



    protected onLoad(): void {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClickRunProp, this)
    }

    protected start(): void {
        let haveNum = Tools.DataMgr.getPropNum(this.Propname)
        if (haveNum == 0) {
            Tools.DataBase.propData[this.Propname] = 1
        }
        this.initRunBox()
    }

    /**初始化逃生 */
    initRunBox() {
        let haveNum = Tools.DataMgr.getPropNum(this.Propname)
        this.runCount.string = "" + haveNum
        this.runCount.node.active = haveNum > 0
        if ((this.Propname == "狂暴" || this.Propname == "干扰")) {
            this.runCount.node.active = false
        }
        if ((this.Propname == "狂暴" || this.Propname == "干扰") && haveNum <= 0) {
            this.itemSprite.setMaterial(0, this.mat[1])
            this.node.getChildByName("time").active = true
            let bC = Game.Instance.gameBossCom
            this.changeTime(this.Propname == "狂暴" ? bC.bossRageData.delay : bC.bossDisturbData.delay)
        } else {
            this.vicon.active = haveNum <= 0
        }
    }

    changeTime(time) {
        this.node.getChildByName("time").getComponent(cc.Label).string = time + "s"
        if (time > 0) {
            time--
            this.scheduleOnce(() => {
                this.changeTime(time)
            }, 1)
        } else {
            this.itemSprite.setMaterial(0, this.mat[0])
            this.node.getChildByName("time").active = false
            Tools.DataBase.propData[this.Propname]++
            Tools.DataBase.saveData()
            this.initRunBox()
        }
    }

    /**使用逃生道具 */
    onClickRunProp() {
        if (Tools.DataMore.gameMode == "bossMode" && !Game.Instance.gameBossCom) {
            return Global.Event.emit('UI提示', { content: "请等待boss出现" });
        }


        let haveNum = Tools.DataMgr.getPropNum(this.Propname)

        if ((this.Propname == "狂暴" || this.Propname == "干扰") && haveNum <= 0) {
            return
        }

        let endCall = (isVideo?) => {
            if (this.Propname == "急速鞋") {
                isVideo && Global.Event.emit("打点_发送事件", "急速鞋游戏内视频购买完成")
                Global.Event.emit("打点_发送事件", "急速鞋使用")
                Global.Event.emit("使用急速鞋")
            } else if (this.Propname == "金刚盾") {
                isVideo && Global.Event.emit("打点_发送事件", "金刚盾游戏内视频购买完成")
                Global.Event.emit("打点_发送事件", "金刚盾使用")
                Global.Event.emit("使用金刚盾")
            } else if (this.Propname == "隐匿药水") {
                isVideo && Global.Event.emit("打点_发送事件", "隐匿药水游戏内视频购买完成")
                Global.Event.emit("打点_发送事件", "隐匿药水使用")
                Global.Event.emit("使用隐匿药水")
            } else if (this.Propname == "麻醉烟雾") {
                isVideo && Global.Event.emit("打点_发送事件", "麻醉烟雾游戏内视频购买完成")
                Global.Event.emit("打点_发送事件", "麻醉烟雾使用")
                Global.Event.emit("使用麻醉烟雾")
            }

            else if (this.Propname == "狂暴") {
                Global.Event.emit("boss使用狂暴")
            } else if (this.Propname == "干扰") {
                Global.Event.emit("boss使用干扰")
            } else if (this.Propname == "传送") {
                Global.Event.emit("boss使用传送")
            } else if (this.Propname == "冲撞") {
                Global.Event.emit("boss使用冲撞")
            }

            Global.Audio.playSound('玩家放道具');
            this.initRunBox()
        }
        if (haveNum > 0) {
            Tools.DataMgr.usePropByName(this.Propname)
            endCall()
        } else {

            if (this.Propname == "急速鞋") {
                Global.Event.emit("打点_发送事件", "急速鞋游戏内视频购买点击")
                zs.Native.TrackEvent("急速鞋游戏内视频购买点击")
            } else if (this.Propname == "金刚盾") {
                Global.Event.emit("打点_发送事件", "金刚盾游戏内视频购买点击")
                zs.Native.TrackEvent("金刚盾游戏内视频购买点击")
            } else if (this.Propname == "隐匿药水") {
                Global.Event.emit("打点_发送事件", "隐匿药水游戏内视频购买点击")
                zs.Native.TrackEvent("隐匿药水游戏内视频购买点击")
            } else if (this.Propname == "麻醉烟雾") {
                Global.Event.emit("打点_发送事件", "麻醉烟雾游戏内视频购买点击")
                zs.Native.TrackEvent("麻醉烟雾游戏内视频购买点击")
            }

            else if (this.Propname == "狂暴") {
                Global.Event.emit("打点_发送事件", "狂暴游戏内视频购买点击")
                zs.Native.TrackEvent("狂暴游戏内视频购买点击")
            } else if (this.Propname == "干扰") {
                Global.Event.emit("打点_发送事件", "干扰游戏内视频购买点击")
                zs.Native.TrackEvent("干扰游戏内视频购买点击")
            } else if (this.Propname == "传送") {
                Global.Event.emit("打点_发送事件", "传送游戏内视频购买点击")
                zs.Native.TrackEvent("传送游戏内视频购买点击")
            } else if (this.Propname == "冲撞") {
                if (!Game.Instance.gameBossCom.canCZ) {
                    return Global.Event.emit('UI提示', { content: "请等待冲撞CD" });
                }
                Global.Event.emit("打点_发送事件", "冲撞游戏内视频购买点击")
                zs.Native.TrackEvent("冲撞游戏内视频购买点击")
            }


            // Global.Platform.showRewardVideo('获得道具', () => {
            //     endCall(true)
            // });
            zs.Native.PlayVideo(()=>{
                endCall(true)
            })
        }

    }


}
