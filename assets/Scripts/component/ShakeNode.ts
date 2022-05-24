
const { ccclass, property } = cc._decorator;

@ccclass
export default class ShakeNode extends cc.Component {
	
	onLoad(){
		this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(1),cc.rotateBy(0.1,30),cc.rotateBy(0.1,-60),
		cc.rotateBy(0.1,60),cc.rotateBy(0.1,-60),
		cc.rotateBy(0.1,60),cc.rotateBy(0.1,-30))))
	}

}
