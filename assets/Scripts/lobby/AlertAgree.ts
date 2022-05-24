import UIWindows from "../../module/ui/UIWindows";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AlertAgree extends UIWindows {


    @property(cc.Node)
    advBtn: cc.Node = null;

    @property(cc.Node)
    advBtn1: cc.Node = null;

    @property(cc.Node)
    view: cc.Node = null;

    @property(cc.Node)
    view1: cc.Node = null;

    onLoad(): void {
        super.onLoad()

        this.advBtn.on(cc.Node.EventType.TOUCH_END, this.onAdvClick, this)
        this.advBtn1.on(cc.Node.EventType.TOUCH_END, this.onAdvClick1, this)
    }

    protected start(): void {

    }


    onAdvClick() {
        this.removeFromUI()
        Global.Event.emit("检测离线收益")
    }
    
    onAdvClick1() {
        this.view.active=false
        this.view1.active=true
    }
}
