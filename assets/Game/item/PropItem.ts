// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import UIToggle from "../../module/ui/UIToggle";
import Game from "../../Scripts/scene/Game";
import ItemBase, { itemType } from "../../Scripts/ItemBase";
import GamePropUI from "../GamePropUI";



const { ccclass, property } = cc._decorator;

@ccclass
export default class PropItem extends cc.Component {

    @property(cc.Sprite)
    itemSprite: cc.Sprite = null

    @property(cc.Label)
    itemName: cc.Label = null

    @property(cc.Label)
    atkLabel: cc.Label = null
    @property(cc.Label)
    atkDisLabel: cc.Label = null
    @property(cc.Label)
    productionLabel: cc.Label = null

    @property(cc.Node)
    buyBtn: cc.Node = null

    @property(cc.Node)
    videoBtn: cc.Node = null

    @property(cc.Node)
    goldBox: cc.Node = null

    @property(cc.Node)
    lightBox: cc.Node = null

    @property(cc.Label)
    goldCost: cc.Label = null

    @property(cc.Label)
    lightCost: cc.Label = null

    @property(cc.Label)
    lvTypeLabel: cc.Label = null

    @property(cc.Label)
    havePropNum: cc.Label = null




    protected onLoad(): void {


        this.buyBtn.on(cc.Node.EventType.TOUCH_END, this.onBuyClick, this)
        this.videoBtn.on(cc.Node.EventType.TOUCH_END, this.onVideoClick, this)

        Global.Event.on("刷新游戏金币", this.refreshGold, this)
        Global.Event.on("刷新游戏闪电", this.refreshGold, this)
    }

    protected onDestroy(): void {
        Global.Event.removeAllListeners(this)
    }


    refreshGold() {
        if (this.data.type == "remove") {
            this.canBuy = true
            this.buyBtn.getComponent(UIToggle).setToggle(2)
        } else if (this.data.type == "level") {
            this.canBuy = true
        } else {
            this.canBuy = Tools.DataMgr.checkCanBuy(this.cost, Game.Instance.gamePlayerCom) && this.canOperate
            this.buyBtn.getComponent(UIToggle).setToggle(this.canBuy ? 0 : 1)

            if (this.data.type == itemType.床) {
                this.node.getChildByName("finger").active = Tools.DataMgr.checkGuideByIndex(1) && this.canBuy
            }

            if (this.data.type == itemType.门) {
                this.node.getChildByName("finger").active = Tools.DataMgr.checkGuideByIndex(2) && this.canBuy
            }

            if (this.data.type == itemType.武器) {
                this.node.getChildByName("finger").active = Tools.DataMgr.checkGuideByIndex(3) && this.canBuy && !Game.Instance.isCreate
            }
        }
    }

    data = null
    cost = null
    gamePropUI: GamePropUI = null
    init(gamePropUI: GamePropUI, data) {
        this.gamePropUI = gamePropUI
        this.data = data
        this.cost = data.cost

        this.itemSprite.spriteFrame = Tools.DataMore.getItemSpriteByIndex(this.data.spriteName)
        this.itemName.string = this.data.name

        this.atkLabel.string = ""
        this.atkDisLabel.string = ""
        this.productionLabel.string = ""

        this.goldCost.string = this.cost.gold

        this.goldBox.active = this.cost.gold
        this.lightBox.active = this.cost.Knowledge

        this.lightCost.string = this.cost.Knowledge || ""

        if (gamePropUI.type == "升级") {
            this.lvTypeLabel.string = "升级需要"
            // this.buyBtn.y = -23
        }

        switch (this.data.type) {
            case itemType.武器:
                this.atkLabel.string = "攻击力：" + this.data.atk
                this.atkDisLabel.string = "攻击距离：" + this.data.atkDis
                break;
            case itemType.书:
                this.productionLabel.string = "生产速度：" + this.data.production + "知识/s"
                break;
            case itemType.移除:
                this.lvTypeLabel.string = "拆除获得"
                this.productionLabel.string = this.data.desc
                this.goldCost.string = "+" + this.cost.gold
                this.lightCost.string = "+" + (this.cost.Knowledge || "")
                break;
            case itemType.手机:
            case itemType.床:
                this.productionLabel.string = "生产速度：" + this.data.production + "纸钞/s"
                break;
            case itemType.门:
                this.productionLabel.string = "血量：" + this.data.hp
                break;
            case itemType.防御:
            case itemType.攻击:
                this.havePropNum.string = "拥有数量：" + Tools.DataMgr.getPropNum(this.data.name)
                this.productionLabel.string = this.data.desc
                break;
            case itemType.升级:
                this.productionLabel.string = this.data.desc
                this.buyBtn.active = false
                this.videoBtn.active = true
                break;
            default:
                debugger
                break;
        }

        this.checkCondition()
        this.refreshGold()
    }

    /**能否操作 */
    canOperate: boolean = true
    /**检查限制条件 */
    checkCondition() {
        let mapIndex = Game.Instance.gamePlayerCom.mapIndex

        this.canOperate = Tools.DataMgr.checkCondition(this.data.condition, mapIndex)
        if (!this.canOperate) {
            this.atkLabel.string = ""
            this.atkDisLabel.string = ""

            this.productionLabel.string = this.data.condition.desc
        }
    }

    canBuy: boolean = false
    onBuyClick() {
        if (!this.canBuy) return this.checkAlertVideo()
        // GamePropUI.Instance.onSuccess(this.data)
        if (this.data.type == itemType.防御 || this.data.type == itemType.攻击) {
            if (!Tools.DataMgr.usePropByName(this.data.name)) {
                return Global.Event.emit('UI提示', { content: this.data.name + ' 数量不足' });
            }
        }
        this.gamePropUI.onSuccess(this.data)
        //每次新建道具，弹插屏
        zs.Native.ShowInsertAdByInterval();
    }

    checkAlertVideo() {
        if (this.canOperate && this.gamePropUI.type == "升级") {
            let data = {
                isGold: this.cost.gold && Game.Instance.gamePlayerCom.getPlayerGold() < this.cost.gold,
                spriteName: this.data.spriteName,
                endCall: () => {
                    this.gamePropUI.onSuccess(this.data, true)
                }
            }
            Global.UIManger.pushWindow('AlertVideo', 'AlertVideo', data);
        } else if (!this.canOperate) {
            this.data.condition.desc && Global.Event.emit('UI提示', { content: this.data.condition.desc });
        }
    }

    onVideoClick() {
        if (!this.canBuy) return
        Global.Event.emit("打点_发送事件", "视频升级门点击")
        zs.Native.PlayVideo(()=>{
            Global.Event.emit("打点_发送事件", "视频升级道具完成")
            // zs.Native.TrackEvent("视频升级道具视频点，道具："+this.data.name)
            zs.Native.TrackEvent("游戏内视频升级"+this.data.name);
            Game.Instance.isVideoLevel = true
            this.gamePropUI.onSuccess(this.data)
            //每次升级道具，弹插屏
            zs.Native.ShowInsertAdByInterval();
        })
    }

}
