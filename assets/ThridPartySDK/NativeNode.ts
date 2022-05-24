import { Tools } from "../module/Tools";


const { ccclass, property } = cc._decorator;

@ccclass
export default class NativeNode extends cc.Component {

    @property
    aUnitId: string = '通用';
    @property
    isShow = false;
    @property
    width = 0;

    nativeAd: any = null;

    onLoad() {
        this.node.tss = this;
        Global.Event.on('显示格子', this.showBox, this);
        // Global.Event.on('格子显现', this.showNode, this);
    }

    start() {
        if (!Global.Platform.isWechat || !Global.api.createCustomAd) return;
        this.scheduleOnce(this.newNativeAd);
        // this.node.active = false;
    }
    
    showNode() {
        this.node.active = true;
    }
    showBox(name, time = 30) {
        if (!Global.canClick) return;
        if (name == this.aUnitId) {
            this.showNativeAd();
            time && this.scheduleOnce(this.hideNativeAd, time);
        }
    }

    newNativeAd() {
        if (!Global.Platform.isWechat) return;
        console.log(Tools.DataMsg.nativeAD, 'Tools.DataMsg.nativeAD');
        if (Tools.DataMsg.nativeAD[this.aUnitId]) {
            this.nativeAd = Tools.DataMsg.nativeAD[this.aUnitId];
            this.isShow && this.showNativeAd();
        } else {
            if (!this.node) return;
            var pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
            var options = wx.getSystemInfoSync();
            var x = (pos.x - this.node.width / 2) / cc.winSize.width * options.screenWidth;
            var y = pos.y / cc.winSize.height * options.screenHeight;
            if (options.screenHeight - y < 50) cc.warn('坐标太靠边');
            var adData = {
                adUnitId: Global.Platform.config.appBox[this.aUnitId],
                adIntervals: 60,
                style: {
                    left: Math.floor(x),
                    top: Math.floor(options.screenHeight - y),
                    fixed: false
                }
            }
            // if (!!this.width) adData.style.width = this.width / 2;
            console.log('showNativeAd:', adData);
            this.nativeAd = Global.api.createCustomAd(adData);
            this.nativeAd.onLoad(() => {
                console.log('原生广告加载成功');
                Tools.DataMsg.nativeAD[this.aUnitId] = this.nativeAd;
                this.isShow && this.showNativeAd();
            })
            this.nativeAd.onError((e) => {
                console.log('原生广告加载失败:', e);
            });
        }
    }

    showNativeAd() {
        this.isShow = true;
        if (this.nativeAd) {
            console.log('创建显示完成');
            this.nativeAd.show();
        } else {
            this.newNativeAd();
        }
    }
    hideNativeAd() {
        this.isShow = false;
        if (this.nativeAd) {
            console.log('创建显示完成');
            this.nativeAd.hide();
        } else {
            this.newNativeAd();
        }
    }

    onDestroy() {
        if (this.nativeAd) {
            this.nativeAd.hide();
        }
    }

}
