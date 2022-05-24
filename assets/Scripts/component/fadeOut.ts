
const { ccclass, property } = cc._decorator;

@ccclass
export default class ButtonAction extends cc.Component {
	
	onLoad(){
        this.node.runAction(cc.repeatForever(
            cc.sequence(
                cc.callFunc(() => {
                    this.node.scale = 1;
                    this.node.opacity = 255;
                }),
                cc.spawn(cc.scaleTo(1, 2), cc.fadeOut(1)),
                cc.callFunc(() => {
                    this.node.scale = 1;
                    this.node.opacity = 255;
                }),
                cc.spawn(cc.scaleTo(1, 2), cc.fadeOut(1))
            )));

	}

}
