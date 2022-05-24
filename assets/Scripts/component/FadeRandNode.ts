
const { ccclass, property } = cc._decorator;

@ccclass
export default class FadeRandNode extends cc.Component {

	@property({ type: cc.Float })
    public aniTime = 0.5;

    @property({ type: cc.Float })
    public addValue = 0.2;
    
    @property({ type: cc.Float })
    public minOpacity = 0
    
    @property({ type: cc.Float })
    public maxOpacity = 255

    @property()
    public randPosRange = cc.size(750,1334)


	onLoad(){

	}

	start(){
        this.node.opacity = this.minOpacity
        this.node.runAction(cc.repeatForever(cc.sequence(
            cc.fadeTo(this.aniTime+Math.random()*this.addValue*(Math.random()>0.5?1:-1),this.maxOpacity),
            cc.fadeTo(this.aniTime+Math.random()*this.addValue*(Math.random()>0.5?1:-1),this.minOpacity),
            cc.callFunc(()=>{
                this.node.x = Math.random()*this.randPosRange.width - this.randPosRange.width/2
                this.node.y = Math.random()*this.randPosRange.height - this.randPosRange.height/2
            })
        )))
        // cc.tintTo(0.5,255,255,255)
	}


 	
}
