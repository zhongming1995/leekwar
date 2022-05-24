window.zs = window.zs || {};
(function (exports, cc) {
    'use strict';

    class Native {
        //#region js 调用 java 
        /**android 层代码的路径 */
        static classPath = "zhise/JSBridge";
        /** java 签名类型 */
        static signType = {
            int: "I",
            float: "F",
            boolean: "Z",
            string: "Ljava/lang/String;",
        }
        /**console.warn 缩写接口 */
        static log(...agrs) {
            if (cc.sys.isBrowser) {
                console.warn(agrs);
            }
        }
        //#endregion

        /**显示banner */
        static ShowBanner() {
            console.log("zhise_laya_print:zs.Native.ShowBanner")
            try {
                jsb.reflection.callStaticMethod(this.classPath, 'showBanner', '()V');
            } catch (e) {
                this.log("ShowBanner");
            }
        }

        static onShowBanner(){
            console.log("zhise_laya_print:onShowBanner");
        }

        /**隐藏banner */
        static HideBanner() {
            console.log("zhise_laya_print:zs.Native.HideBanner")
            try {
                jsb.reflection.callStaticMethod(this.classPath, 'hideBanner','()V');
            } catch (e) {
                this.log("HideBanner");
            }
        }

        static onHideBanner(){
            console.log("zhise_laya_print:onHideBanner");
        }
        //#endregion

        //#region 视频
        static completedVideoHandler = null;
        static interuptVideoHandler = null;
        static errorVideoHandler = null;
        
        /**播放视频 */
        static PlayVideo(completedHandler, interuptHandler, errorHandler) {
            console.log("zhise_laya_print:zs.Native.PlayVideo")
            this.completedVideoHandler = completedHandler;
            this.interuptVideoHandler = interuptHandler;
            this.errorVideoHandler = errorHandler;
            try {
                jsb.reflection.callStaticMethod(this.classPath, 'PlayVideo','()V');
            } catch (e) {
                this.log("zhise_laya_print:zs.Native PlayVideo error");
                if (completedHandler) {
                    completedHandler(true);
                }
                this.completedVideoHandler = this.interuptVideoHandler = this.errorVideoHandler = null;
            }
        }

        /**视频关闭回调 ,sdk会自动调用*/
        static onAdClose(valid) {
            console.log("zhise_laya_print:onAdClose 参数为------："+valid);
            //这里做了个延时 处理 在游戏返回的一瞬间 字体会丢失
            setTimeout(() => {
                if(valid == true){
                    console.log("valid == true");
                    this.completedVideoHandler && this.completedVideoHandler();
                }else{
                    console.log("valid == false");
                    this.errorVideoHandler && this.errorVideoHandler();
                }
                this.completedVideoHandler = this.interuptVideoHandler = this.errorVideoHandler = null;
            }, 100);
        }
        //#endregion

        /**显示插屏 */
        static interstitialShowFunc = null;
        static interstitialCloseFunc = null;
        static ShowInsertAd() {
            console.log("zhise_laya_print:ShowInsertAd");
            try {
                jsb.reflection.callStaticMethod(this.classPath, 'ShowInsertAd','()V');
            } catch (e) {
                this.log("ShowInsertAd");
            }
        }
         /**有时间限制显示插屏 */
         static ShowInsertAdByInterval() {
             console.log("zhise_laya_print:ShowInsertAdByInterval");
             try {
                 jsb.reflection.callStaticMethod(this.classPath, 'ShowInsertAdByInterval','()V');
             } catch (e) {
                 this.log("ShowInsertAdByInterval");
             }
         }

        /**统计 */
        static TrackEvent(eventName){
            console.log("TrackEvent:"+eventName);
            try {
                jsb.reflection.callStaticMethod(this.classPath, 'GATrackEvent', '(' + this.signType.string + ')V',eventName);
            } catch (e) {
                this.log("TrackEvent");
            }
        }

        static GetLanguage(){
            console.log("zhise_laya_print:zs.Native.GetLanguage")
            try {
                jsb.reflection.callStaticMethod(this.classPath, 'GetLanguage','()V');
            } catch (e) {
                this.onGetLanguage("en");
            }
        }
        static onGetLanguage(language){
            console.log("zhise:language="+language);
            if(language != "ft" && language != "en"){
                language = "en";
            }
            window["LanguageTranslation"]["LanguageMgr"].languageInit = false;
            window["LanguageTranslation"]["LanguageMgr"].init(language);
        }

        static setInterstitialShowCallBack(func){
            this.interstitialShowFunc = func;
        }
        /**插屏展示回调 */
        static onInterstitialShow() {
            console.error("插屏展示");
            if(this.interstitialShowFunc){
                this.interstitialShowFunc();
            }
        }

        static setInterstitialCloseCallBack(func){
            this.interstitialCloseFunc = func;
        }
        /**插屏关闭回调 */
        static onInterstitialClose() {
            console.error("插屏关闭");
            if(this.interstitialCloseFunc){
                this.interstitialCloseFunc();
            }
        }

        //#endregion
    }
    exports.Native = Native;

})(window.zs = window.zs || {}, cc);