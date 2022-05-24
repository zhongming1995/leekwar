// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../module/Tools";
import UIToggle from "../module/ui/UIToggle";
import UIWindows from "../module/ui/UIWindows";
import Game from "../Scripts/scene/Game";
import ItemBase from "../Scripts/ItemBase";
import PropItem from "./item/PropItem";
import MapMgr from "../Scripts/MapMgr";
import RoleBase from "../Scripts/game/player/RoleBase";
import GameTask, { TaskType } from "../Scripts/game/GameTask";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePropUI extends UIWindows {
    static _instance: GamePropUI;

    static get Instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new GamePropUI();
        return this._instance;
    }
    @property({ type: cc.Node, tooltip: "标题" })
    title: cc.Node = null

    @property({ type: cc.Node, tooltip: "基础" })
    basicsBtn: cc.Node = null


    @property({ type: cc.Node, tooltip: "防御道具" })
    highTechBtn: cc.Node = null

    @property({ type: cc.Node, tooltip: "攻击道具" })
    blackTechBtn: cc.Node = null

    @property({ type: cc.Node, tooltip: "item content" })
    content: cc.Node = null

    curBtn: cc.Node = null;
    onLoad(): void {
        // GamePropUI._instance = this
        super.onLoad()
        this.setEvent()
    }


    setEvent() {

        this.basicsBtn.on(cc.Node.EventType.TOUCH_END, this.onClickBtn.bind(this, "basics", this.basicsBtn), this)
        this.highTechBtn.on(cc.Node.EventType.TOUCH_END, this.onClickBtn.bind(this, "defense", this.highTechBtn), this)
        this.blackTechBtn.on(cc.Node.EventType.TOUCH_END, this.onClickBtn.bind(this, "attk", this.blackTechBtn), this)

        this.node.getChildByName("mask").on(cc.Node.EventType.TOUCH_END, this.removeFromUI, this)

        Global.Event.on("隐藏PropUI", this.removeFromUI, this)
    }

    onDestroy(): void {
        Global.Event.removeAllListeners(this)
    }
    start(): void {
        // this.node.active = false
    }

    setData(data) {
        this.type = data.propType
        this.targetNode = data.targetNode
        if (this.type == "建筑") {
            this.title.getComponent(UIToggle).setToggle(0)
            this.basicsBtn.parent.active = true
            this.onClickBtn("basics", this.basicsBtn)
        } else {
            this.title.getComponent(UIToggle).setToggle(1)
            this.basicsBtn.parent.active = false
            this.propData = data.levelData
            this.initLevelItem(this.propData)
        }

    }

    onClickBtn(type: string, btnNode: cc.Node) {
        if (this.curBtn) {
            this.curBtn.getComponent(UIToggle).setToggle(0)
        }
        btnNode.getComponent(UIToggle).setToggle(1)
        this.setPropData(type)
        this.initBuildItem(this.propData)
        this.curBtn = btnNode
    }

    showType = null
    propData = null;
    setPropData(type: string) {
        if (type == "basics") {
            this.propData = Tools.GameCfg.propUIData[type]
        } else {
            this.propData = Tools.JosnCfg[Tools.GameCfg.propUIData[type][0].type]
        }
        this.showType = type
        if (!this.propData) {
            debugger
        }
    }

    /**
     * 初始化建筑item
     * @param data 
     */
    initBuildItem(data) {
        this.content.destroyAllChildren()
        for (let i = 0; i < data.length; i++) {
            const itemData = this.showType == "basics" ? Tools.JosnCfg[data[i].type][0] : data[i];
            let propItem = Global.Loader.getInstantiate("item/PropItem")
            propItem.getComponent(PropItem).init(this, itemData)
            propItem.parent = this.content
        }

        this.resetPos()
    }

    /**
    * 初始化升级item
    * @param data 
    */
    initLevelItem(data) {
        this.content.destroyAllChildren()
        for (let i = 0; i < data.length; i++) {
            const itemData = data[i];
            let propItem = Global.Loader.getInstantiate("item/PropItem")
            propItem.getComponent(PropItem).init(this, itemData)
            propItem.parent = this.content
        }

        this.resetPos()
    }

    /**改变位置 */
    resetPos() {
        /*   let wPos = this.targetNode.convertToWorldSpaceAR(cc.v2(0, 0))
          let camera = Game.Instance.camera.camera;
          let cPos = camera.getWorldToScreenPoint(wPos)
          let nodePos = this.node.parent.convertToNodeSpaceAR(cPos)
   */
        let hight = this.propData.length * 191 + 50

        let view = this.node.getChildByName("view")
        view.height = hight

        // this.node.y = nodePos.y + (nodePos.y > 0 ? -(45 * camera.zoomRatio + hight / 2) : (45 * camera.zoomRatio + hight / 2))
        for (let i = 0; i < view.childrenCount; i++) {
            const element = view.children[i];
            element.getComponent(cc.Widget) && element.getComponent(cc.Widget).updateAlignment()
        }
    }

    targetNode: cc.Node = null
    mapIndex: number = -1
    type: string = null;
    /**显示界面 */
    showPropUI(targetNode: cc.Node, data) {

        Global.Event.emit("隐藏GameUI");

        this.type = data.propType
        this.targetNode = targetNode
        this.mapIndex = this.targetNode.getComponent(ItemBase).getData().mapIndex
        if (this.type == "建筑") {
            this.title.getComponent(UIToggle).setToggle(0)
            this.basicsBtn.parent.active = true
            this.setPropData("basics")
            this.content.getComponent(cc.Widget).top = 140
            this.initBuildItem(this.propData)
        } else {
            this.title.getComponent(UIToggle).setToggle(1)
            this.basicsBtn.parent.active = false
            this.propData = data.levelData
            this.content.getComponent(cc.Widget).top = 100
            this.initLevelItem(this.propData)
        }


        this.node.active = true
    }

    /**隐藏页面 */
    hidePropUI() {
        if (!this.targetNode) return
        Global.Event.emit("显示GameUI");
        Global.Event.emit("取消选中", this.mapIndex)
        /*   this.node.active = false
          this.node.y = 0
          this.content.destroyAllChildren() */
    }

    /**创建item */
    createMapItem(data) {


        this.targetNode.getComponent(ItemBase).onDestroyItem(false);
        let itemData = this.targetNode.getComponent(ItemBase).getData()


        let buildingNode = MapMgr.Instance.newMapItem({
            posIndex: itemData.posIndex,
            itemIndex: data.itemIndex,
            mapIndex: itemData.mapIndex
        })
    }

    /**升级 */
    onLevelUp(data) {
        if (Tools.DataMgr.checkGuideByIndex(1) && data.itemIndex == "1001") {
            Tools.DataBase.wxGuideIndex++
        } else if (Tools.DataMgr.checkGuideByIndex(2) && data.itemIndex == "1002") {
            Tools.DataBase.wxGuideIndex++
        }
        this.targetNode.getComponent(ItemBase).onLevelUP()
    }

    /**操作成功 */
    onSuccess(data, isVideo?) {
        this.removeFromUI()

        if (!this.targetNode || !this.targetNode.isValid) {
            return
        }

        if (this.type == "建筑") {
            data.useEvent && Global.Event.emit("打点_发送事件", data.useEvent)
            GameTask.Instance.checkTask(TaskType.建造, data.id)
            if (Tools.DataMgr.checkGuideByIndex(3)) {
                Tools.DataBase.wxGuideIndex++
            }
            Game.Instance.isCreate = true
            this.createMapItem(data)
        } else {
            if (data.type == "remove") {
                data.cost.gold = -data.cost.gold
                data.cost.Knowledge && (-data.cost.Knowledge)

                this.targetNode.getComponent(ItemBase).onDestroyItem();
                let itemData = this.targetNode.getComponent(ItemBase).getData()
                let mapNode = MapMgr.Instance.getTriggerByIndex(itemData.posIndex.x, itemData.posIndex.y)
                if (mapNode) mapNode.active = true
            } else if (data.type == "level" || isVideo) {
                GameTask.Instance.checkTask(TaskType.升级, data.id)
                this.onLevelUp(data)
                this.targetNode = null
                return
            } else {
                GameTask.Instance.checkTask(TaskType.升级, data.id)
                this.onLevelUp(data)
            }
        }
        //改变钱
        let itemData = this.targetNode.getComponent(ItemBase).getData()
        let pCom = Game.Instance.mapPlayerData[itemData.mapIndex].getComponent(RoleBase)

        data.cost.gold && pCom.addPlayerGold(-data.cost.gold)
        data.cost.Knowledge && pCom.addPlayerLight(-data.cost.Knowledge)
        this.targetNode = null
    }

    removeFromUI(): void {
        this.hidePropUI()
        super.removeFromUI()
    }

}
