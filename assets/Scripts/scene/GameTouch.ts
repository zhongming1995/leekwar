import GameCamera from "./GameCamera";
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameTouch extends cc.Component {
    /* ------------------摄像机触屏控制模块----------------- */
    /** 双指操作 */
    private isDoubleTouch = false;
    /** 当前操作数 */
    private currnetTouchs: Array<cc.Touch> = [];
    /** 上次操作距离 */
    private lastTouchLength: number = 0;
    /** 当前中心点 */
    private curCenterPos;

    @property(cc.Node)
    public playerCamera: cc.Node = null;


    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this);
    }

    start() {

    }

    _onMouseWheel(evt: cc.Event.EventMouse) {



        //将屏幕坐标转化为世界坐标
        let touchPos = this.playerCamera.getComponent(cc.Camera).getScreenToWorldPoint(evt.getLocation())

        let addScale = (evt.getScrollY() < 0) ? 0.01 : -0.01
        this.onScaleCamera(touchPos, addScale)
    }

    _onTouchStart(evt: cc.Event.EventTouch) {

        Global.Event.emit('隐藏PropUI');
        Global.Event.emit("隐藏消息box")
        let p = evt.getLocation()

        this.currnetTouchs.push(evt.touch);
        console.log("currnetTouchs", this.currnetTouchs.length)
        this.isDoubleTouch = this.currnetTouchs.length >= 2;
        if (this.currnetTouchs.length >= 2) {
            var s1 = this.currnetTouchs[0].getLocation();
            var s2 = this.currnetTouchs[1].getLocation();
            this.lastTouchLength = s2.sub(s1).mag();

            this.curCenterPos = cc.v2((s1.x + s2.x) / 2, (s1.y + s2.y) / 2)
        }
    }
    _onTouchMove(evt: cc.Event.EventTouch) {
        // Global.Event.emit('检测触摸原生',evt);
        if (this.isDoubleTouch) {

            if (this.curCenterPos) {
                var s1 = this.currnetTouchs[0].getLocation();
                var s2 = this.currnetTouchs[1].getLocation();
                let len = s2.sub(s1).mag()
                if (this.lastTouchLength == len) {
                    return
                }
                let addScaleValue = 0.05

                let addScale = (this.lastTouchLength < len) ? addScaleValue : -addScaleValue

                this.lastTouchLength = len
                this.onScaleCamera(this.curCenterPos, addScale)
            }
        } else {
            this.onMoveCamera(cc.v2(evt.getDeltaX(), evt.getDeltaY()))
        }

    }
    _onTouchEnd(evt: cc.Event.EventTouch) {
        let pos = evt.getLocation()
        // Global.Event.emit('触摸结束',pos);
        this.currnetTouchs = [];
        this.isDoubleTouch = false;
        this.curCenterPos = null
    }

    onScaleCamera(movePos, addScale) {

        // if(!this.gameCanTouch) return
        this.unschedule(this.setCameraNorSize)

        let cameraNode = this.playerCamera

        let targetPos = this.node.convertToNodeSpaceAR(movePos)

        // 移动到中心点
        // cameraNode.getComponent(GameCamera).setCameraTargetPos(targetPos)

        this.playerCamera.getComponent(GameCamera).setCameraScale(addScale)
        this.scheduleOnce(this.setCameraNorSize, 5)
    }

    /**恢复原视野 */
    setCameraNorSize() {
        Global.Event.emit("恢复原视野")
    }

    onMoveCamera(movePos) {
        // if(!this.gameCanTouch) return
        let oldPos = this.playerCamera.getComponent(GameCamera).getCameraTargetPos()
        let targetPos = cc.v2(oldPos.x - movePos.x, oldPos.y - movePos.y)
        this.playerCamera.getComponent(GameCamera).setCameraTargetPos(targetPos)
    }

    onCameraFollowBody(body, callBack = null) {
        if (!body) return
        this.playerCamera.stopAllActions()
        this.playerCamera.getComponent(GameCamera).setFollowBody(body, callBack)

    }

}
