import DragonSkinNode from "../../module/animation/DragonSkinNode";
import { Tools } from "../../module/Tools";
import UIToggle from "../../module/ui/UIToggle";
import UIWindows from "../../module/ui/UIWindows";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Skin extends UIWindows {

    @property(cc.Node)
    player_btn: cc.Node = null;

    @property(cc.Node)
    boss_btn: cc.Node = null;

    @property(cc.Node)
    playerNode: cc.Node = null;

    @property(cc.Node)
    bossNode: cc.Node = null;

    @property(cc.Node)
    pSkinBox: cc.Node = null;

    @property(cc.Node)
    bSkinBox: cc.Node = null;

    @property(cc.Node)
    pScroll: cc.Node = null;

    @property(cc.Node)
    bScroll: cc.Node = null;

    /**0player 1boss */
    skinType: number = 0
    onLoad(): void {
        super.onLoad()
        this.player_btn.on(cc.Node.EventType.TOUCH_END, this.onPlayerClick, this)
        this.boss_btn.on(cc.Node.EventType.TOUCH_END, this.onBossClick, this)
        zs.Native.TrackEvent("进入皮肤商店")
    }

    onPlayerClick() {
        if (this.skinType == 0) return
        this.skinType = 0
        this.bossNode.active = false
        this.playerNode.active = true
        this.pScroll.active = true
        this.bScroll.active = false
    }

    onBossClick() {
        if (this.skinType == 1) return
        this.skinType = 1
        this.bossNode.active = true
        this.playerNode.active = false
        this.pScroll.active = false
        this.bScroll.active = true
        if (this.bSkinBox.childrenCount < 1) {
            this.createSkinItem(false)
        }
    }

    protected start(): void {
        this.createSkinItem(true)
    }

    /**设置当前人物 */
    setCurPlayer() {
        if (this.skinType == 0) {
            Global.Event.emit('切换皮肤');
            this.playerNode.getComponent(DragonSkinNode).changeSkin(Tools.DataBase.playerSkin - 1)
        } else {
            this.bossNode.getComponent(DragonSkinNode).updateSkinByIndex(Tools.DataBase.bossSkin - 1)
        }

    }

    /**创建皮肤 */
    createSkinItem(isPlayer) {
        let playerData = isPlayer ? Tools.GameCfg.playerData : Tools.GameCfg.bossData
        for (let i = 0; i < playerData.length; i++) {
            const skinData = playerData[i];
            let skinItem = Global.Loader.getInstantiate("items/skinItem")
            skinItem.parent = isPlayer ? this.pSkinBox : this.bSkinBox


            skinItem.on(cc.Node.EventType.TOUCH_END, this.onClickSkinItem.bind(this, skinItem), this)

            skinItem.skinData = skinData


            this.initSkinItem(skinItem)

        }
    }

    curSelectSkinItem: cc.Node = null

    curSelectPSkinItem: cc.Node = null
    curSelectBSkinItem: cc.Node = null
    /** */
    onClickSkinItem(skinItem: cc.Node) {
        let useSkin = Tools.DataBase.playerSkin
        let haveSkinArr = Tools.DataBase.havePlayerSkin
        this.curSelectSkinItem = this.curSelectPSkinItem
        if (this.skinType == 1) {
            useSkin = Tools.DataBase.bossSkin
            haveSkinArr = Tools.DataBase.haveBossSkin
            this.curSelectSkinItem = this.curSelectBSkinItem
        }
        if (this.curSelectSkinItem == skinItem) {
            let skinId = this.curSelectSkinItem.skinData.skinId
            if (!haveSkinArr.includes(skinId)) {//未拥有此皮肤
                zs.Native.PlayVideo(()=>{
                    let keyStr =  this.skinType == 0 ? "视频获取韭菜皮肤" : "视频获取收割者皮肤";
                    zs.Native.TrackEvent(keyStr);
                    Global.Event.emit("打点_发送事件", this.skinType == 0 ? "视频获取韭菜皮肤" : "视频获取收割者皮肤")
                    this.skinType == 0 ? Tools.DataMgr.getPlayerSkin(skinItem.skinData.skinId) : Tools.DataMgr.getBossSkin(skinItem.skinData.skinId)
                    this.updataSkinItem()
                    this.onClickSkinItem(skinItem)
                    this.setCurPlayer()
                    if(skinItem.getChildByName("ac").active == true || skinItem.getChildByName("gji").active == true){
                        zs.Native.TrackEvent("增加数值加成的皮肤单独打点视频_"+keyStr);
                    }
                });
            }
            return
        }

        skinItem.getChildByName("select").getComponent(UIToggle).setToggle(1);
        if (this.curSelectSkinItem) {
            this.curSelectSkinItem.getChildByName("select").getComponent(UIToggle).setToggle(0);
            this.curSelectSkinItem.getChildByName("use").active = useSkin == this.curSelectSkinItem.skinData.skinId
        }

        if (this.skinType == 0) {
            this.curSelectPSkinItem = skinItem
        } else {
            this.curSelectBSkinItem = skinItem
        }
        this.curSelectSkinItem = skinItem
        let skinId = this.curSelectSkinItem.skinData.skinId

        if (haveSkinArr.includes(skinId)) {//已拥有此皮肤
            this.skinType == 0 ? Tools.DataMgr.getPlayerSkin(skinItem.skinData.skinId) : Tools.DataMgr.getBossSkin(skinItem.skinData.skinId)
            this.updataSkinItem();

            this.setCurPlayer()
        } else {
            zs.Native.PlayVideo(()=>{
                let keyStr =  this.skinType == 0 ? "视频获取韭菜皮肤" : "视频获取收割者皮肤";
                zs.Native.TrackEvent(keyStr);
                Global.Event.emit("打点_发送事件", this.skinType == 0 ? "视频获取韭菜皮肤" : "视频获取收割者皮肤")
                this.skinType == 0 ? Tools.DataMgr.getPlayerSkin(skinItem.skinData.skinId) : Tools.DataMgr.getBossSkin(skinItem.skinData.skinId)
                this.updataSkinItem()
                this.onClickSkinItem(skinItem)
                this.setCurPlayer()
                if(skinItem.getChildByName("ac").active == true || skinItem.getChildByName("gji").active == true){
                    zs.Native.TrackEvent("增加数值加成的皮肤单独打点视频_"+keyStr);
                }
            });
        }
    }

    /**刷新皮肤显示 */
    updataSkinItem() {
        let skinBox = this.skinType == 0 ? this.pSkinBox : this.bSkinBox
        for (let i = 0; i < skinBox.childrenCount; i++) {
            this.initSkinItem(skinBox.children[i])
        }
    }

    /**初始化皮肤item */
    initSkinItem(skinItem: cc.Node) {

        let useSkin = Tools.DataBase.playerSkin
        let haveSkinArr = Tools.DataBase.havePlayerSkin
        let spriteName = "player_"
        let skinData = skinItem.skinData

        if (this.skinType == 1) {
            useSkin = Tools.DataBase.bossSkin
            haveSkinArr = Tools.DataBase.haveBossSkin
            spriteName = "corpse_"
            skinItem.getChildByName("gji").active = skinData.skinId == 2 || skinData.skinId == 4;
            skinItem.getChildByName("ac").active = false;
        }else{
            skinItem.getChildByName("ac").active = skinData.skinId == 9 || skinData.skinId == 11;
            skinItem.getChildByName("gji").active = false;
        }

        let videoNode = skinItem.getChildByName("videoNode");
        useSkin == skinData.skinId && this.onClickSkinItem(skinItem)
        videoNode.active = !haveSkinArr.includes(skinData.skinId)
        skinItem.getChildByName("playerNode").getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex(spriteName + skinData.skinId)
        skinItem.getChildByName("use").active = useSkin == skinData.skinId

       
    }
}
