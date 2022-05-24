
const { ccclass, property } = cc._decorator;

@ccclass
export default class SkillsAction extends cc.Component {

    onLoad() {
        this.node.runAction(cc.repeatForever(cc.sequence(
            cc.moveBy(0.1, cc.v2(-10, -10)),
            cc.moveBy(0.1, cc.v2(20, 20)),
            cc.moveBy(0.1, cc.v2(-20, 0)),
            cc.moveBy(0.1, cc.v2(20, -20)),
            cc.moveBy(0.1, cc.v2(-10, 10)),
        )
        )
        )
    }

}
