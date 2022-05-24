
import UIWindows from "../../module/ui/UIWindows";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameRevive extends UIWindows {


    @property(cc.Node)
    sureBtn: cc.Node = null

    onLoad() {
        super.onLoad();

        this.sureBtn.on(cc.Node.EventType.TOUCH_END, this.onSureClick, this)
    }

    data = null
    setData(data) {
        this.data = data
    }

    start() {
    }

    onSureClick() {
        Global.Event.emit("打点_发送事件", "失败结算前解救全部韭菜点击")
        
        // Global.Platform.showRewardVideo('结算视频', () => {
        //     Global.Event.emit("打点_发送事件", "失败结算前解救全部韭菜点击视频完播")
        //     super.removeFromUI()
        //     this.data.onSure()
        // });
        zs.Native.PlayVideo(()=>{
            Global.Event.emit("打点_发送事件", "失败结算前解救全部韭菜点击视频完播")
            zs.Native.TrackEvent("失败结算前解决全部韭菜视频点")
            super.removeFromUI()
            this.data.onSure()
        })
    }

    removeFromUI() {
        super.removeFromUI();
        this.data.onClose()
    }
}
