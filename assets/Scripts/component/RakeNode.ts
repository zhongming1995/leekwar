
const { ccclass, property } = cc._decorator;

@ccclass
export default class RakeNode extends cc.Component {

	@property({ type: cc.Float })
    public aniTime = 0.5;
    
    @property({ type: cc.Float })
    public minRorate = 0
    
    @property({ type: cc.Float })
    public maxRotate = 360


	onLoad(){

	}

	start(){
        this.node.runAction(cc.repeatForever(cc.sequence(
            cc.rotateTo(this.aniTime,this.minRorate),
            cc.rotateTo(this.aniTime,this.maxRotate),
        )))
        // cc.tintTo(0.5,255,255,255)
	}


 	
}
