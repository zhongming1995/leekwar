// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class EventMoveAni extends cc.Component {

    @property()
    EventName = "大厅组件"

    @property(cc.Vec2)
    movePos = cc.v2(0,0);

    private rePos = cc.v2(0,0)

    onLoad() {
        Global.Event.on(this.EventName + "Show", this.onEventShow, this);
        Global.Event.on(this.EventName + "Hide", this.onEventHide, this);
    }

    start(){
        this.rePos = cc.v2(this.node.x,this.node.y)
    }

    onDestroy() {
        Global.Event.removeAllListeners(this);
    }

    onEventShow(){
        this.node.stopAllActions()
        this.node.runAction(cc.moveTo(0.2,this.rePos))
        
    }

    onEventHide(){
        this.node.stopAllActions()
        this.node.runAction(cc.moveBy(0.2,this.movePos))
    }


}
