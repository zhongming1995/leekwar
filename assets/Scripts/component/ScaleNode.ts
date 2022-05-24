
const { ccclass, property } = cc._decorator;

@ccclass
export default class ScaleNode extends cc.Component {

	@property({ type: cc.Float })
	public tarScale = 1.1

	onLoad() {
		this.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.5, this.tarScale), cc.scaleTo(0.5, 1))))
	}

}
