import { Tools } from "../../module/Tools";
import UIWindows from "../../module/ui/UIWindows";






const { ccclass, property } = cc._decorator;

@ccclass
export default class TTShareVideo extends UIWindows {
    @property(cc.Node)
    exitButton: cc.Node = null;

    @property(cc.Sprite)
    runSprite: cc.Sprite = null;
    @property(cc.Sprite)
    showSprite: cc.Sprite = null;

    private clickCB: Function = null;
    private isGetShareReward: boolean = false;


    static init() {
        Global.Event.on('tocamera', this.tocamera, this)
    }

    static tocamera(cb: Function) {
        let system = Global.api.getSystemInfoSync()
        cc.game.canvas.toTempFilePath({
            x: 0,
            y: 0,
            destWidth: system.screenWidth,
            destHeight: system.screenHeight,
            success: (res) => {
                let img = wx.createImage();
                img.addEventListener('load', (res1) => {
                    let text = new cc.Texture2D()
                    text.initWithElement(img)
                    text.handleLoadedTexture();
                    cb && cb(text);
                })
                img.src = res.tempFilePath
            }
        })
    }

    onLoad() {
        super.onLoad();

        this.node.tss = this;
        // Global.Audio.playSound('快门');
        Global.Event.emit('tocamera', (texture) => {
            this.runSprite.spriteFrame = new cc.SpriteFrame(texture)
            this.showSprite.spriteFrame = new cc.SpriteFrame(texture)
            cc.tween(this.runSprite.node).to(0.2, {}).to(0.5, { width: 472.5, height: 839 }).call(() => {
                console.log('', this.runSprite.node.width, this.runSprite.node.height)
                this.runSprite.node.active = false;
                this.node.getChildByName('views').active = true;
            }).start()
        })
    }

    onClick(e, d) {
        let self = this;
        if (Global.Platform.isTouTiao) {
            let tt = Global.Platform as unknown as PlatformTouTiao;
            console.log('shareVideoPath:', tt.shareVideoPath)
            Global.api.shareAppMessage({
                channel: "video",
                title: "共同发育",
                desc: "共同发育",
                imageUrl: "",
                templateId: "", // 替换成通过审核的分享ID
                query: "",
                extra: {
                    videoPath: tt.shareVideoPath, // 可替换成录屏得到的视频地址
                    videoTopics: [],
                    withVideoId: true,
                    hashtag_list: ['共同发育'],
                    video_title: "共同发育"
                },
                success(res) {
                    console.log("分享视频成功:", res.videoId);
                    if (!self.isGetShareReward) {
                        self.addReward();
                        self.isGetShareReward = true;
                    }
                },
                fail(e) {
                    console.log("分享视频失败");
                }
            });
        } else {
            let swan = Global.Platform as unknown as PlatformTouTiao;
            Global.api.shareVideo({
                videoPath: swan.shareVideoPath,
                success: function () {
                    if (!self.isGetShareReward) {
                        self.addReward();
                        self.isGetShareReward = true
                    }
                }
            })
        }
    }

    setData(cb: Function) {
        this.clickCB = cb
    }

    setOptions(cb: Function) {
        this.clickCB = cb
    }

    onDestroy() {
        let tt = Global.Platform as unknown as PlatformTouTiao;
        tt.shareVideoPath = ''
        this.clickCB && this.clickCB();
    }

    addReward() {
        setTimeout(() => {
            Global.Event.emit("打点_发送事件", "抖音平台视频分享")
            Tools.DataBase.addGold1(20)
            Tools.DataBase.saveData()
            Global.Event.emit('UI提示', "恭喜获得快乐币 x20");
        }, 500);

        this.node.destroy()
    }
}
