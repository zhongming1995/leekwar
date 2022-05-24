
const { ccclass, property } = cc._decorator;

@ccclass
export default class SpriteFrameSkinNode extends cc.Component {

    @property({ type: cc.SpriteFrame  })
    spriteFrameList = [];

    @property({ type: cc.Integer })
    curSkinIndex = 0


    private spriteNode

	onLoad(){

	}

	start(){
        // let dragonAsset = this.node.getComponent(dragonBones.ArmatureDisplay).dragonAsset
        // if(this.node.getComponent(dragonBones.ArmatureDisplay)){
        //     this.node.removeComponent(dragonBones.ArmatureDisplay)
        // }
        this.spriteNode = this.node.getComponent(cc.Sprite)


        
        // this.spriteNode.dragonAsset = dragonAsset
        // this.updateSkinByIndex(this.curSkinIndex)
    }
    
    updateSkinByIndex(index){
        if(!this.spriteFrameList[index]) return
        this.spriteNode = this.node.getComponent(cc.Sprite)
        this.curSkinIndex = index 
        this.spriteNode.spriteFrame = this.spriteFrameList[index]
    }


 	
}
