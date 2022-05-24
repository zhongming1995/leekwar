// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


export enum itemType {
    空 = "",
    床 = "bed",
    门 = "door",
    房间底 = "houseBg",
    武器 = "weapon",
    书 = "book",
    手机 = "phone",
    维修 = "repair",
    移除 = "remove",
    升级 = "level",
    防御 = "defense",
    攻击 = "attk",
}

import { Tools } from "../module/Tools";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ItemBase extends cc.Component {



    @property(cc.Node)
    leaveUpNode: cc.Node = null

    @property(cc.Node)
    itemSprite: cc.Node = null


    public data: any = null;

    /**所属地图index */
    mapIndex: number = -1;

    /**item类型 */
    itemType: string = ""

    /**地图pos */
    posIndex: cc.Vec2 = null;

    /** 最大血量 */
    public maxHp = 10

    /** 当前血量 */
    public curHp = 10

    /**能否被boss攻击 */
    protected canBossAttk: boolean = false

    
    targetPlayer: cc.Node = null

    protected onLoad(): void {
        this.node.tss = this;

        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchTrigger, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onNoTouchMove, this);

        Global.Event.on("上床", this.onUpBed, this)
        Global.Event.on("下床", this.onDownBed, this)



        this.node._touchListener.setSwallowTouches(false);

        if (this.leaveUpNode) {
            Global.Event.on("刷新游戏金币", this.onRefreshGold, this)
            Global.Event.on("刷新游戏闪电", this.onRefreshLight, this)
        }
    }

    /**能否被boss攻击 */
    getCanBossAttk() {
        return this.canBossAttk
    }

    /**玩家上床 */
    onUpBed(mapIndex: number) {

    }

    /**玩家下床 */
    onDownBed(mapIndex: number) {

    }

    /**刷新游戏金币 */
    onRefreshGold(goldCount: number) {
    }

    /**刷新游戏闪电 */
    onRefreshLight(lightCount: number) {
    }

    refreshLeaveUp() {

    }

    protected onDestroy(): void {
        Global.Event.removeAllListeners(this);
    }

    getData() {
        return this.data
    }

    protected start(): void {
        if (this.leaveUpNode) {
            this.leaveUpNode.parent = this.node.parent.parent.getChildByName("effContent")

            let wPos = this.node.parent.convertToWorldSpaceAR(this.node.position)
            let pos = this.leaveUpNode.parent.convertToNodeSpaceAR(wPos)

            this.leaveUpNode.setPosition(pos)
        }

    }

    /**
     * 改变血量
     * @param num 改变数量  减少的话为负
     */
    addHp(num: number) {
        this.curHp += num
        if (this.curHp > this.maxHp) {
            this.curHp = this.maxHp
        } else if (this.curHp <= 0) {
            this.onDeath()
        }
    }

    getDoorFlag() {
        return false
    }

    /**设置门的开关状态 */
    setDoorFlag(isOpen: boolean) {

    }

    /**设置能否上床 */
    setBedFlag(isCanToBed: boolean, player: cc.Node) {

    }


    itemIndex = null
    /**道具数据 */
    curPropData = null
    /**下一个道具数据 */
    nextPropData = null
    /**所有道具数据 */
    allPropData = null
    setOptions(data) {
        this.data = data;

        this.itemIndex = this.data.itemIndex

        this.mapIndex = this.data.mapIndex

        this.itemType = this.data.itemType

        this.posIndex = this.data.posIndex

        this.node.itemIndex = this.itemIndex

        this.node.name = this.node.name + this.data.itemIndex

        this.data.spriteName && (this.itemSprite.getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex(this.data.spriteName))


        this.allPropData = Tools.DataMgr.getItemDataByItemType(this.data.itemType)
        this.curPropData = this.allPropData[this.data.lv]
        this.nextPropData = this.allPropData[this.data.lv + 1]


        this.maxHp = (this.curPropData && this.curPropData.hp || 1) || 0
        this.curHp = this.maxHp

    }

    onTouchTrigger() {
        this.canTrigger && this.onOperate()
        this.canTrigger = true
        this.triggerCount = 0
    }

    triggerCount: number = 0
    canTrigger: boolean = true
    onNoTouchMove() {
        this.triggerCount++
        if (this.triggerCount > 10) {
            this.canTrigger = false
        }
    }

    /**能否进行操作 */
    canOperate: boolean = false
    /** 进行操作 */
    onOperate(data?) {
        if (!this.canOperate) return /* Global.Event.emit("UI提示", { content: "不能操作" }) */
        console.log(this.data);

    }

    /**门受伤 */
    doorHurt:boolean = false
    /** 受伤 */
    onHurt(data) {
        let hurt = data.hurt

        let eff_Atk = Global.Loader.getInstantiate("eff_Atk")
        eff_Atk.parent = this.node.parent.parent.getChildByName("effContent")

        let wPos = this.node.parent.convertToWorldSpaceAR(this.node.position)
        let pos = eff_Atk.parent.convertToNodeSpaceAR(wPos)

        eff_Atk.setPosition(pos)

        let player = Tools.DataMgr.getPlayerByMapIndex(this.mapIndex)
        if (player) {
            Global.Event.emit("玩家被攻击", player)
        }
        this.addHp(-hurt)
    }

    isDeath: boolean = false
    /**死亡 */
    onDeath() {
        this.onDestroyItem()
    }

    checkPos() { }

    createDoor() { }

    /**升级 */
    onLevelUP() {
        this.data.lv++
        this.curPropData = this.allPropData[this.data.lv]
        this.nextPropData = this.allPropData[this.data.lv + 1]
        this.itemSprite.getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex(this.curPropData.spriteName)
    }

    /** 被摧毁被回收（游戏概念上） */
    onDestroyItem(destroy: boolean = true) {
        let data = {
            item: this.node
        }
        this.node.active = false

        if (destroy) {
            Global.Event.emit("销毁item", data)
            this.leaveUpNode && this.leaveUpNode.isValid && this.leaveUpNode.destroy()
            this.node.destroy()
        }
    }
}
