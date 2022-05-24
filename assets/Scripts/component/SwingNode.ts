
const { ccclass, property } = cc._decorator;

@ccclass
export default class SwingNode extends cc.Component {
	
	onLoad(){
		this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(0.5,2),cc.rotateBy(0.5,-2),cc.rotateBy(0.5,-2),
		cc.rotateBy(0.5,2),cc.rotateBy(0.5,2),cc.rotateBy(0.5,-2),cc.rotateBy(0.5,-2),
		cc.rotateBy(0.5,2))))
	}

}
