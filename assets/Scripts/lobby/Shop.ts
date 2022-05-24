// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import UIToggle from "../../module/ui/UIToggle";
import UIWindows from "../../module/ui/UIWindows";
import ShopItem from "./ShopItem";



const { ccclass, property } = cc._decorator;

@ccclass
export default class Shop extends UIWindows {

    @property({ type: cc.Node, tooltip: "防御道具" })
    defenseBtn: cc.Node = null

    @property({ type: cc.Node, tooltip: "攻击道具" })
    attkBtn: cc.Node = null

    @property({ type: cc.Node, tooltip: "逃生道具" })
    runBtn: cc.Node = null

    @property({ type: cc.Node, tooltip: "item content" })
    content: cc.Node = null

    curBtn: cc.Node = null;
    onLoad(): void {
        Global.Event.emit("打点_发送事件", "进入道具商店")
        zs.Native.TrackEvent("进入道具商店")
        super.onLoad()
        this.setEvent()
    }


    setEvent() {

        this.defenseBtn.on(cc.Node.EventType.TOUCH_END, this.onClickBtn.bind(this, "defense", this.defenseBtn), this)
        this.attkBtn.on(cc.Node.EventType.TOUCH_END, this.onClickBtn.bind(this, "attk", this.attkBtn), this)
        this.runBtn.on(cc.Node.EventType.TOUCH_END, this.onClickBtn.bind(this, "runProp", this.runBtn), this)

    }

    onDestroy(): void {
    }
    start(): void {
        this.onClickBtn("defense", this.defenseBtn)
        zs.Native.ShowBanner();
    }

    setData(data) {

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

    propData = null;
    setPropData(type: string) {
        this.propData = Tools.JosnCfg[Tools.GameCfg.propUIData[type][0].type]
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
            const itemData = data[i];
            let shopItem = Global.Loader.getInstantiate("items/ShopItem")
            shopItem.getComponent(ShopItem).init(this, itemData)
            shopItem.parent = this.content
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


    /**操作成功 */
    onSuccess(data) {
        //改变钱
        if (data.video) {
            data.clickEvent && Global.Event.emit("打点_发送事件", data.clickEvent)
            zs.Native.PlayVideo(() => {
                data.buyEvent && Global.Event.emit("打点_发送事件", data.buyEvent)
		        zs.Native.TrackEvent("首页商店"+data.buyEvent+"视频点")
                Tools.DataMgr.addPropByName(data.name)
                // Tools.DataBase.propData[data.name]++
                // Tools.DataBase.saveData()
            });
        } else {
            if (data.happilyGold <= Tools.DataBase.gold1Count) {
                data.buyEvent && Global.Event.emit("打点_发送事件", data.buyEvent)
                Tools.DataBase.addGold1(-data.happilyGold)
                // Tools.DataBase.propData[data.name]++
                Tools.DataMgr.addPropByName(data.name)
                Global.Event.emit('UI提示', { content: '购买 ' + data.name + ' 成功' });
            } else {
                Global.Event.emit('UI提示', { content: '金钱不足' });
            }
        }

        Global.Event.emit("刷新道具数量")
    }

}
