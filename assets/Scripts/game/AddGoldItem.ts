import { Tools } from "../../module/Tools";
import UIToggle from "../../module/ui/UIToggle";


const { ccclass, property } = cc._decorator;

@ccclass
export default class AddGoldItem extends cc.Component {

    @property(cc.Node)
    sprite: cc.Node = null

    @property(cc.Label)
    goldLabel: cc.Label = null



    protected onLoad(): void {

    }

    protected start(): void {

    }

    /**
     * 
     * @param goldNum 增加数量
     * @param type 0金币 1闪电
     */
    init(goldNum: number, type: number = 0) {
        if (type == 2) {
            this.sprite.active = false
            this.goldLabel.node.x = 0
            this.goldLabel.string = "已满级"
        } else {
            this.sprite.active = true
            this.sprite.getComponent(UIToggle).setToggle(type)
            this.goldLabel.node.x = 14.8
            this.goldLabel.string = "+" + goldNum
        }
        this.node.x = this.node.y = 0

        this.node.runAction(
            cc.sequence(
                cc.spawn(
                    cc.scaleTo(0.3, 1.2),
                    cc.moveBy(0.3, cc.v2(0, 10)),
                    cc.fadeIn(0.3)
                ),
                cc.moveBy(1, cc.v2(0, 20)),
                cc.spawn(
                    cc.scaleTo(1, 0.5),
                    cc.moveBy(1, cc.v2(0, 10)),
                    cc.fadeOut(1)
                ),
                cc.callFunc(() => {
                    Tools.NodePools.putNode(this.node)
                })
            )
        )
    }

}
