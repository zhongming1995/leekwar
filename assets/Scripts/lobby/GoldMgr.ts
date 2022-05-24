import { Tools } from "../../module/Tools";


const { ccclass, property } = cc._decorator;

enum goldType {
    金币,
    碎片
}

@ccclass
export default class GoldMgr extends cc.Component {

    @property({ type: cc.Enum(goldType) })
    type: goldType = goldType.金币

    protected onLoad(): void {
        Global.Event.on("刷新钱", this.refreshGold, this)
    }

    protected onDestroy(): void {
        Global.Event.removeAllListeners(this)
    }

    protected start(): void {
        // this.refreshGold()
        this.node.getComponent(cc.Label).string = "" + (this.type == goldType.金币 ? Tools.DataBase.gold1Count : Tools.DataBase.gold2Count)
    }

    refreshGold() {
        // this.node.getComponent(cc.Label).string = "" + (this.type == goldType.金币 ? Tools.DataBase.gold1Count : Tools.DataBase.gold2Count)
        this.node.tss.string = (this.type == goldType.金币 ? Tools.DataBase.gold1Count : Tools.DataBase.gold2Count)
    }
}
