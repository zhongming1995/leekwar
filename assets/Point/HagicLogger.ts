import { HitDot } from "./HitDot"



export default class HagicLogger {

    init() {
        return;
        // if (!CC_DEBUG && Global.Platform.isWeb) return
        Global.Event.on('打点_任务', this.onMainTaskLogger, this)
        Global.Event.on('打点_发送事件', this.sendEvent, this)

        Global.Event.on('打点_局状态', this.sendGameStatus, this)

        Global.Event.on('打点_第一局时间', this.sendGameFirst, this)

        Global.Event.on('打点_第二局时间', this.sendGameSec, this)

        Global.Event.on('打点_拉取广告成功', this.onShowVideoLogger, this)
        Global.Event.on('打点_观看广告成功', this.onVideoOverLogger, this)
        Global.Event.on('打点_取消观看广告', this.onCancelVideoLogger, this)
        Global.Event.on('打点_拉取广告失败', this.onVideoFailLogger, this)


        HitDot.Instance.init()
    }

    /**
     * 
     * @param eventName 
     * @param status  开始 胜利 失败 离开
     */
    sendGameStatus(eventName, status) {
        HitDot.Instance.blendDot("gameStatus", { eName: eventName, status: status })
    }

    /**
     * 第一局时间
     * @param eventName 
     */
    sendGameFirst(eventName) {
        HitDot.Instance.blendDot("gameFirst", { eName: eventName })
    }

    /**
     * 第二局时间
     * @param eventName 
     */
    sendGameSec(eventName) {
        HitDot.Instance.blendDot("gameSec", { eName: eventName })
    }


    sendEvent(eventName) {
        this.onSendEventLogger({ eventName: eventName })
    }

    /** 完成任务 */
    onMainTaskLogger(data) {
        HitDot.Instance.blendDot("gameTask", { tName: data.taskName })
    }

    /** 发送打点事件 */
    onSendEventLogger(data) {
        HitDot.Instance.blendDot("gameEvent", { eName: data.eventName })
    }

    /** 拉取成功 */
    onShowVideoLogger() {
        HitDot.Instance.blendDot("adVideo", { status: "拉取成功" })
    }
    /** 观看成功 */
    onVideoOverLogger() {
        HitDot.Instance.blendDot("adVideo", { status: "观看成功" })
    }
    /** 取消观看 */
    onCancelVideoLogger() {
        HitDot.Instance.blendDot("adVideo", { status: "取消观看" })
    }
    /** 拉取失败 */
    onVideoFailLogger() {
        HitDot.Instance.blendDot("adVideo", { status: "拉取失败" })
    }


}
