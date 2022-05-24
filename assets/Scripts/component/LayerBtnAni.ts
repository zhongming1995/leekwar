
const { ccclass, property } = cc._decorator;

@ccclass
export default class LayerBtnAni extends cc.Component {

    @property(cc.Node)
    closeBtn: cc.Node = null;

    @property(cc.Node)
    targetBtn: cc.Node = null;

    @property(cc.Node)
    targetBtn2: cc.Node = null;

    @property
    aniType = 1
	
	start(){
        if(Global.Platform.isOppo||Global.Platform.isVivo) return
		if(this.aniType == 1){
            if(!this.closeBtn.active||!this.targetBtn.active) return
            this.targetBtn.x = 0
            this.closeBtn.x = 0
            this.closeBtn.active = false
            this.scheduleOnce(()=>{
                this.closeBtn.active = true
                this.closeBtn.getComponent(cc.Sprite)&&(this.closeBtn.getComponent(cc.Sprite).enabled = false)
                this.closeBtn.width = 120
                this.closeBtn.height = 40
                this.closeBtn.opacity = 0
                this.closeBtn.runAction(cc.spawn(cc.fadeIn(0.5),cc.moveBy(0.5,cc.v2(0,-80))))
            },2)
        }
        else if(this.aniType == 2){
            if(!this.closeBtn.active||!this.targetBtn.active) return
            let reX1 = this.targetBtn.x
            let reX2 = this.closeBtn.x
            this.targetBtn.x = 0
            this.closeBtn.x = 0
            this.closeBtn.active = false
            this.scheduleOnce(()=>{
                this.closeBtn.active = true
                this.closeBtn.opacity = 0
                this.closeBtn.runAction(cc.spawn(cc.fadeIn(0.5),cc.moveTo(0.5,cc.v2(reX2,this.closeBtn.y))))
                this.targetBtn.runAction(cc.spawn(cc.fadeIn(0.5),cc.moveTo(0.5,cc.v2(reX1,this.targetBtn.y))))
            },2)
        }

        else if(this.aniType == 3){
            if(!this.closeBtn.active||!this.targetBtn.active||!this.targetBtn2.active) return
            let reX1 = this.targetBtn.x
            let reX2 = this.targetBtn2.x
            this.targetBtn.x = 0
            this.targetBtn2.x = 0
            this.targetBtn2.active = false
            this.closeBtn.x = 0
            this.closeBtn.active = false
            this.scheduleOnce(()=>{
                this.targetBtn2.active = true
                this.targetBtn2.opacity = 0
                this.targetBtn2.runAction(cc.spawn(cc.fadeIn(0.5),cc.moveTo(0.5,cc.v2(reX2,this.targetBtn2.y))))
                this.targetBtn.runAction(cc.spawn(cc.fadeIn(0.5),cc.moveTo(0.5,cc.v2(reX1,this.targetBtn.y))))

                this.closeBtn.active = true
                this.closeBtn.getComponent(cc.Sprite)&&(this.closeBtn.getComponent(cc.Sprite).enabled = false)
                this.closeBtn.width = 120
                this.closeBtn.height = 40
                this.closeBtn.opacity = 0
                this.closeBtn.runAction(cc.fadeIn(0.5))
            },2)
        }
    }
    

}
