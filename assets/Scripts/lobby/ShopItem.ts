// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import Shop from "../../Scripts/lobby/Shop";



const { ccclass, property } = cc._decorator;

@ccclass
export default class ShopItem extends cc.Component {

    @property(cc.Sprite)
    itemSprite: cc.Sprite = null

    @property(cc.Label)
    itemName: cc.Label = null

    @property(cc.Label)
    haveNum: cc.Label = null

    @property(cc.Label)
    descLabel: cc.Label = null

    @property(cc.Node)
    buyBtn: cc.Node = null

    @property(cc.Node)
    useBtn: cc.Node = null

    @property(cc.Node)
    goldBox: cc.Node = null

    @property(cc.Node)
    videoBox: cc.Node = null

    @property(cc.Label)
    goldCost: cc.Label = null


    protected onLoad(): void {
        this.buyBtn.on(cc.Node.EventType.TOUCH_END, this.onBuyClick, this)

        this.useBtn.on(cc.Node.EventType.TOUCH_END, this.onUseClick, this)

        Global.Event.on("刷新道具数量", this.onRefreshNum, this)
        Global.Event.on("刷新已装备", this.onRefreshUse, this)
    }

    onRefreshUse() {
        let useP = false
        if (Tools.DataBase.usePropData) {
            useP = this.data.name == (Tools.DataBase.usePropData.name)
        }

        // this.useBtn.getChildByName("useLabel").getComponent(cc.Label).string = useP ? "已装备" : "装备"
    }

    onRefreshNum() {
        this.haveNum.string = "拥有数量：" + Tools.DataMgr.getPropNum(this.data.name)
    }

    protected onDestroy(): void {
        Global.Event.removeAllListeners(this)
    }


    data = null
    cost = null
    shopUI: Shop = null
    init(gamePropUI: Shop, data) {
        this.shopUI = gamePropUI
        this.data = data
        this.cost = data.cost

        this.itemSprite.spriteFrame = Tools.DataMore.getItemSpriteByIndex(this.data.spriteName)
        this.itemName.string = this.data.name

        this.descLabel.string = this.data.desc

        this.goldCost.string = data.happilyGold

        this.goldBox.active = data.happilyGold && !data.video

        this.videoBox.active = data.video

        this.haveNum.string = "拥有数量：" + Tools.DataMgr.getPropNum(data.name)

        if (data.type == "runProp") {
            // this.useBtn.active = true
            // this.buyBtn.y = 17
        }

        this.onRefreshUse()

    }

    onBuyClick() {
        this.shopUI.onSuccess(this.data)
    }

    onUseClick() {
        if (Tools.DataMgr.getPropNum(this.data.name) <= 0) {
            // return Global.Event.emit('UI提示', { content: this.data.name + ' 不足' });
        }
        Tools.DataBase.usePropData = this.data
        Tools.DataBase.saveData()
        Global.Event.emit("刷新已装备")
    }

}
