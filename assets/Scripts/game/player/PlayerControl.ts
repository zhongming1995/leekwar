
import RoleBase from "./RoleBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerControl extends cc.Component {



    private touchData = {
        keyTouchList: {},
        touchFlag: false,
        _speedType: {},
        moveDir: cc.v2(0, 0),
    };

    public isPlayerControl = true;


    private roleCom: RoleBase = null



    onDestroy() {
        Global.Event.removeAllListeners(this);
    }


    onLoad() { 
        Global.Event.on('开始', this.onTouchStart, this);
        Global.Event.on('移动', this.onTouchMove, this);
        Global.Event.on('停止', this.onTouchEnd, this);

        this.roleCom = this.node.getComponent(RoleBase)
    }

    onTouchStart(data) {
        // console.log("开始")
        this.touchData.touchFlag = true

        Global.Event.emit("跟随主角", this.node)
    }

    onTouchMove(data) {
        this.touchData.touchFlag = true
        this.touchData.moveDir = cc.v2(data.moveDistance.x, data.moveDistance.y); //移动方向
    }

    onTouchEnd(data) {
        // console.log("停止")
        this.touchData.touchFlag = false

        this.touchData.moveDir = cc.v2(0, 0)
    }


    update(dt) {
        this.roleCom.setPlayerMoveDir(this.touchData.moveDir)
    }

}