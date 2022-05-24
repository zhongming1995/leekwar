
const { ccclass, property } = cc._decorator;

@ccclass
export default class ButtonAction extends cc.Component {
	
	onLoad(){
		this.node.runAction(cc.repeatForever(cc.sequence(
                cc.delayTime(1),
                cc.rotateTo(0.06,5),
                cc.rotateTo(0.06,-5),
                cc.rotateTo(0.06,5),
                cc.rotateTo(0.06,-5),
                cc.rotateTo(0.06,5),
                cc.rotateTo(0.06,-5),
                cc.rotateTo(0.06,0),
                )
            )
        )
	}

}
