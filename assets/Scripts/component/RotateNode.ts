
const { ccclass, property } = cc._decorator;

@ccclass
export default class RotateNode extends cc.Component {


	@property({ type: cc.Float })
	public rotationSpeed = 5;

 	update(dt){
		this.node.angle -= this.rotationSpeed
  	}
}
