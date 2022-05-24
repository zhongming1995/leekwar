import Game from "../scene/Game";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameRocker extends cc.Component {

    @property(cc.Node)
    rockerBtn: cc.Node = null;//轮盘
    @property(cc.Node)
    rockerImg: cc.Node = null;//摇杆1


    rockerPoint = null;
    maxR = 72;  //摇杆最大半径
    isTouch = false;
    isCD = false;
    isCD2 = false;
    isCD3 = false;

    pointArr = [];
    angleArr = [];
    dirArr = [];
    dirNum = [];

    onDestroy() {
        Global.Event.removeAllListeners(this);
    }

    onLoad() {
        this.node.tss = this;

        let p = Math.round(Math.sqrt(this.maxR * this.maxR / 2));
        this.pointArr = [[-p, p], [0, this.maxR], [p, p], [-this.maxR, 0], [0, 0], [this.maxR, 0], [-p, -p], [0, -this.maxR], [p, -p]];
        this.angleArr = [135, 90, 45, 180, null, 0, -135, -90, -45];
        this.dirArr = [[-1, 1], [0, 1], [1, 1], [-1, 0], [0, 0], [1, 0], [-1, -1], [0, -1], [1, -1]];
        this.dirNum = [0, 0, 0, 0];

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);

        this.rockerBtn.on(cc.Node.EventType.TOUCH_START, this.onRockerStart, this);
        this.rockerBtn.on(cc.Node.EventType.TOUCH_MOVE, this.onRockerMove, this);
        this.rockerBtn.on(cc.Node.EventType.TOUCH_END, this.onRockerEnd, this);
        this.rockerBtn.on(cc.Node.EventType.TOUCH_CANCEL, this.onRockerEnd, this);

        Global.Event.on('停止触摸', this.onRockerEnd, this);

        Global.Event.on('上床', this.onUpBed, this);
        Global.Event.on('下床', this.onDownBed, this);

        Global.Event.on('隐藏rocker', this.hideNode, this);
        Global.Event.on('显示rocker', this.showNode, this);
    }

    start() {
        this.node.getComponent(cc.Widget).updateAlignment();
        this.scheduleOnce(() => {
            this.rockerPoint = this.rockerBtn.getPosition();
        }, 0.1)

    }

    /**玩家上床 */
    onUpBed(mapIndex: number) {
        if (Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == mapIndex) {
            this.onRockerEnd(null)
            this.node.active = false
        }
    }

    /**玩家下床 */
    onDownBed(mapIndex: number) {
        if (Game.Instance.gamePlayerCom &&Game.Instance.gamePlayerCom.mapIndex == mapIndex) {
            this.node.active = true
        }
    }

    hideNode() {
        this.onRockerEnd(null)
        this.node.active = false
    }

    showNode() {
        this.node.active = true
    }

    /** 触摸开始 */
    onRockerStart(e) {
        if (!this.rockerPoint) this.rockerPoint = this.rockerBtn.getPosition();
        let inp: cc.Vec2 = Global.Common.getLocation(e);
        this.rockerBtn.setPosition(inp);
        this.rockerImg.active = true;
        Global.Event.emit('开始');
        Global.Event.emit("隐藏消息box")
    }

    onRockerMove(e) {
        this.rockerBtn.opacity = 125
        this.setRockerPoint(e);
    }

    /** 触摸结束 */
    onRockerEnd(e) {
        Global.Event.emit('停止');
        this.rockerBtn.opacity = 0
        if (this.rockerImg && this.rockerBtn && this.rockerPoint) {
            this.rockerImg.setPosition(cc.Vec2.ZERO);
            this.rockerImg.angle = 0;
            this.rockerBtn.setPosition(this.rockerPoint);
        }
    }

    /**实时修改轮盘位置 */
    setRockerPoint(e) {
        var pos = e.getLocation();
        let x = pos.x - cc.winSize.width / 2 - this.rockerBtn.x;
        let y = pos.y - cc.winSize.height / 2 - this.rockerBtn.y;
        let radius = cc.v2(x, y).mag();
        let angle = Math.atan2(y, x) * 180 / Math.PI;   //这就是轮盘实际角度
        if (radius > this.maxR) {
            x = this.maxR / radius * x;
            y = this.maxR / radius * y;
            radius = this.maxR;
        }
        this.rockerImg.setPosition(x, y);
        this.rockerImg.angle = angle

        let moveDistance = cc.v2(x, y).normalize()
        Global.Event.emit('移动', { moveDistance: moveDistance, angle: null, scale: 0, sx: 0, sy: 0, x: 0, y: 0 });
    }

    //-------以下是键盘控制事件-------
    sendAngle() {
        let sum = this.dirNum.reduce((a, b) => { return a + b });
        let angle = this.angleArr[sum + 4];
        let sx = this.dirArr[sum + 4][0];
        let sy = this.dirArr[sum + 4][1];
        let point = this.pointArr[sum + 4];
        this.rockerImg.setPosition(point[0], point[1]);
        let moveDistance = cc.v2(this.rockerImg.x, this.rockerImg.y).normalize()
        if (angle != null) {
            Global.Event.emit('移动', { moveDistance: moveDistance, angle: angle, scale: 1, sx: sx, sy: sy });
        } else {
            Global.Event.emit('移动', { moveDistance: 0, angle: null, scale: 1, sx: 0, sy: 0 });
        }
    }
    // A.65  D.68  W.87  S.83  空格.32
    onKeyDown(e) {
        if (e.keyCode == 65) {
            this.dirNum[0] = -1;
        } else if (e.keyCode == 68) {
            this.dirNum[1] = 1;
        } else if (e.keyCode == 87) {
            this.dirNum[2] = -3;
        } else if (e.keyCode == 83) {
            this.dirNum[3] = 3;
        } else {
            return;
        }
        if (!this.isTouch) {
            this.isTouch = true;
            this.rockerImg.active = true;
            Global.Event.emit('开始');
        }
        this.sendAngle();
    }
    onKeyUp(e) {
        if (e.keyCode == 65) {
            this.dirNum[0] = 0;
        } else if (e.keyCode == 68) {
            this.dirNum[1] = 0;
        } else if (e.keyCode == 87) {
            this.dirNum[2] = 0;
        } else if (e.keyCode == 83) {
            this.dirNum[3] = 0;
        } else {
            return;
        }
        let isTouch = false;
        this.dirNum.forEach(value => { if (value != 0) isTouch = true });
        this.sendAngle();
        if (!isTouch && this.isTouch) {
            this.isTouch = false;
            this.rockerImg.setPosition(cc.Vec2.ZERO);
            Global.Event.emit('停止');
        }
    }

}
