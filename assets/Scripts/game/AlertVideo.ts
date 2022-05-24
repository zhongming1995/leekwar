
import { Tools } from "../../module/Tools";
import UIWindows from "../../module/ui/UIWindows";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AlertVideo extends UIWindows {


    @property(cc.Sprite)
    itemSprite: cc.Sprite = null;

    @property(cc.Node)
    videoBtn: cc.Node = null;

    @property(cc.Label)
    typeLabel: cc.Label = null;

    data: any = null;
    onLoad() {
        super.onLoad();
        this.videoBtn.on('touchend', this.onClick, this);
    }

    setData(data) {
        this.data = data
        if (data.isGold) {
            this.typeLabel.string = "纸钞不够了！观看视频免费升级！"
        } else {
            this.typeLabel.string = "知识不够了！观看视频免费升级！"
        }
        this.itemSprite.spriteFrame = Tools.DataMore.getItemSpriteByIndex(data.spriteName)
    }

    start() {

    }

    onClick() {
        zs.Native.PlayVideo(()=>{
            zs.Native.TrackEvent("游戏内获得道具(纸钞、知识)视频点")
            this.data.endCall()
            this.removeFromUI()
        })
    }

}
