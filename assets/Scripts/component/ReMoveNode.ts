
const { ccclass, property } = cc._decorator;

@ccclass
export default class ReMoveNode extends cc.Component {

	@property({ type: cc.Float })
	public moveSpeed = 3;

	@property({ type: cc.Float })
	public maxDistance = 1680;

	onLoad(){

	}

	start(){
		// this.maxDistance = this.node.parent.width/2 + this.node.width
	}


 	update(dt){
		this.node.x += this.moveSpeed
		if(this.node.x >= this.maxDistance){
			this.node.x = -this.maxDistance
		}

  	}
}
