import { Tools } from "../../module/Tools";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameCamera extends cc.Component {

    private followBody;

    camera: cc.Camera;

    private targetPos = null
    private moveSpeed = 20;

    /** 摄像机跟随模式 */
    private cameraMode = "FreeMode";//FollowMode

    /** 摄像机跟随完成回调 */
    private followOverCallBack = null;

    @property(cc.Vec2)
    private maxPos = cc.v2(1334, 750);
    @property(cc.Vec2)
    private minPos = cc.v2(-1334, -750);


    private followSpeed = 20;
    private freeSpeed = 25

    public moveScale = 1

    /**默认zoomRatio */
    public norZoomRatio = 1

    /**目标zoomRatio */
    public tarZoomRatio = -1

    /**增加zoomRatio */
    public addScaleValue = 0.01

    onLoad() {
        this.camera = this.node.getComponent(cc.Camera);

        this.norZoomRatio = this.camera.zoomRatio

        Global.Event.on('跟随主角', this.setFollowBody, this);

        Global.Event.on('扩大视野', this.onAddViewSize, this);

        Global.Event.on('默认视野', this.reSetViewSize, this);

        Global.Event.on('恢复原视野', this.reSetNorViewSize, this);
    }

    onDestroy() {
        Global.Event.removeAllListeners(this);
    }

    start() {

    }

    /**扩大视野 */
    onAddViewSize() {
        this.norZoomRatio = 0.9
        this.tarZoomRatio = 0.9
    }

    /**默认视野 */
    reSetViewSize() {
        this.norZoomRatio = 1.1
        this.tarZoomRatio = 1.1
    }

    /**恢复原视野 */
    reSetNorViewSize() {
        this.tarZoomRatio = this.norZoomRatio
    }


    setCameraRange(maxPos, minPos) {
        this.maxPos = maxPos
        this.minPos = minPos
    }



    setFollowBody(node, callBack?) {
        if (node) {
            this.followBody = node

            this.cameraMode = "FollowMode"
            this.moveSpeed = this.followSpeed

            this.updateCameraByBody()
        }

        this.followOverCallBack = callBack
    }

    /** 重置camera位置 */
    reSetInPlayer() {
        this.camera.node.x = this.followBody.x
        this.camera.node.y = this.followBody.y
    }

    setCameraTargetPos(pos) {
        this.cameraMode = "FreeMode"
        this.moveSpeed = this.freeSpeed
        let targetPos = this.checkCameraShow(pos)

        targetPos && (pos = targetPos)
        this.targetPos = cc.v2(pos.x, pos.y)
        // this.checkCameraShow()
    }

    getCameraTargetPos() {
        return this.targetPos || cc.v2(this.node.x, this.node.y)
    }

    /** 设置摄像机缩放 */
    setCameraScale(scale) {
        // if (!CC_DEBUG) return
        this.tarZoomRatio = -1
        this.camera.zoomRatio += scale

        if (this.camera.zoomRatio < 0.6) {
            this.camera.zoomRatio = 0.6
        }
        if (this.camera.zoomRatio > 2) {
            this.camera.zoomRatio = 2
        }
        let targetPos = this.checkCameraShow()
        if (targetPos) {
            // console.log("-----", targetPos.x, targetPos.y)
            this.cameraMode = "FreeMode"
            this.targetPos = cc.v2(targetPos.x, targetPos.y)
            this.moveSpeed = 50
        }
        let cameraWidth = cc.winSize.width / this.camera.zoomRatio
        // console.log("=======", -cameraWidth / 2 + this.node.x)
    }

    /** 检查摄像机位置是否需要调整 */
    checkCameraShow(checkPos?) {
        let cameraWidth = cc.winSize.width / this.camera.zoomRatio
        let cameraHeight = cc.winSize.height / this.camera.zoomRatio


        !checkPos && (checkPos = cc.v2(this.node.x, this.node.y))
        let targetPos = cc.v2(checkPos.x, checkPos.y)


        if (cameraWidth / 2 + checkPos.x > this.maxPos.x) {
            targetPos.x = this.maxPos.x - cameraWidth / 2
        }
        if (-cameraWidth / 2 + checkPos.x < this.minPos.x) {
            targetPos.x = this.minPos.x + cameraWidth / 2
        }
        if (cameraHeight / 2 + checkPos.y > this.maxPos.y) {
            targetPos.y = this.maxPos.y - cameraHeight / 2
        }
        if (-cameraHeight / 2 + checkPos.y < this.minPos.y) {
            targetPos.y = this.minPos.y + cameraHeight / 2
        }
        if (targetPos.x != checkPos.x || targetPos.y != checkPos.y) {

            return targetPos
        }
        else {
            return false
        }

    }

    /**振屏 */
    runScaleAni(scale = 1.1) {
        let curZoomRatio = this.camera.zoomRatio
        let toZoomRatio = curZoomRatio * scale
        cc.tween(this.camera).to(0.05, {
            zoomRatio: toZoomRatio
        }).to(0.05, {
            zoomRatio: curZoomRatio
        }).start()
    }


    /** 更新跟随节点位置 */
    updateCameraByBody() {
        if (!this.followBody || !this.followBody.parent) return

        let pos = this.followBody.convertToWorldSpaceAR(cc.v2(0, 0))

        pos = this.node.parent.convertToNodeSpaceAR(pos)

        this.targetPos = cc.v2(pos.x, pos.y)

        //根据距离计算摄像机移动速度
        let dis = this.targetPos.sub(this.node.position).mag()

        this.moveSpeed = dis / 60 < this.followSpeed ? this.followSpeed : dis / 60
        // console.log("this.moveSpeed",this.moveSpeed)

    }

    update(dt) {
        if (this.cameraMode == "FollowMode") {
            this.updateCameraByBody()
        }
        if (this.tarZoomRatio > 0) {
            let addScale = (this.tarZoomRatio > this.camera.zoomRatio) ? this.addScaleValue : -this.addScaleValue
            this.camera.zoomRatio += addScale
            if (Math.abs(this.tarZoomRatio - this.camera.zoomRatio) < this.addScaleValue) {
                this.tarZoomRatio = -1
            }
        }

    }

    lateUpdate(dt) {

        if (!this.targetPos) {
            return
        }

        let addV = this.moveSpeed * dt / Tools.dtTime * this.moveScale


        // console.log(addV)

        let disX = this.targetPos.x - this.node.x
        let disY = this.targetPos.y - this.node.y

        let dir = cc.v2(disX, disY).normalize()
        // let curAngle = Math.atan2(dir.y, dir.x)

        let maxAddX = addV * dir.x
        let maxAddY = addV * dir.y


        let addX = ((Math.abs(disX) > Math.abs(maxAddX)) ? maxAddX : disX)
        let addY = ((Math.abs(disY) > Math.abs(maxAddY)) ? maxAddY : disY)

        //是否重置目标位置
        let reSetFlag = false

        let needChangePos = this.checkCameraShow(cc.v2(this.node.x + addX, this.node.y + addY))
        if (needChangePos) {

            let cameraWidth = cc.winSize.width / this.camera.zoomRatio
            let cameraHeight = cc.winSize.height / this.camera.zoomRatio

            if (needChangePos.x == this.node.x + addX) {
                this.node.x += addX
            }
            else {
                if ((addX > 0 && this.node.x - cameraWidth / 2 <= this.minPos.x) || (addX < 0 && this.node.x + cameraWidth / 2 >= this.maxPos.x)) {// 如果不在位移之内，判断移动方向是否朝内
                    this.node.x += addX
                }
                else {
                    reSetFlag = true
                }
            }

            if (needChangePos.y == this.node.y + addY) {
                this.node.y += addY
            }
            else {

                if ((addY > 0 && this.node.y - cameraHeight / 2 <= this.minPos.y) || (addY < 0 && this.node.y + cameraHeight / 2 >= this.maxPos.y)) {// 如果不在位移之内，判断移动方向是否朝内
                    this.node.y += addY
                }
                else {
                    reSetFlag = true
                }
            }

        }
        else {
            this.node.x += addX
            this.node.y += addY
        }


        if (this.followOverCallBack) {//如果有跟随回调
            if (Math.floor(this.node.x) == Math.floor(this.targetPos.x) && Math.floor(this.targetPos.y) == Math.floor(this.targetPos.y)) {
                this.followOverCallBack()
                this.followOverCallBack = null
            }
        }


    }


}
