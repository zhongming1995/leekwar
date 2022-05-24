
export default class SubPackMgr {

    /** 是否已经加载完成 */
    public static get isLoading() {
        return this._isLoading;
    }
    private static _isLoading: boolean = false;
    private static loadIndex: number = 0;
    private static finishCb: Function = null;
    private static progresscb: Function = null;
    private static currentLoadName: Array<string> = [];
    private static progress: number = 0;

    public static loadSub(names: Array<string>, finishcb?: Function, progresscb?: Function) {
        console.error('开始加载分包', names);
        if (this.isLoading) {
            console.error('当前未加载完成', this.currentLoadName);
            return
        }
        this.currentLoadName = names;
        this.finishCb = finishcb;
        this.progresscb = progresscb;
        this._isLoading = names.length > 0;
        this.loadIndex = 0;
        this.loadNext();
    }

    public static getProgress() {
        return this.progress;
    }

    private static loadNext() {
        if (this.loadIndex >= this.currentLoadName.length) {
            console.log('所有子包加载完成', this.currentLoadName);
            this._isLoading = false;
            this.finishCb && this.finishCb();
            return;
        }
        let subname = this.currentLoadName[this.loadIndex];
        console.log('load sub:', subname)
        let self = this;
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            let p1 = wx.loadSubpackage({
                name: subname,
                success: () => {
                    console.log('分包加载完成:', subname)
                    self.loadIndex++;
                    self.loadNext()
                },
                fail: () => {
                    console.error(`分包[${subname}]加载失败,正在重新加载`);
                    setTimeout(() => {
                        self.loadNext()
                    }, 0.3)
                }
            })
            p1.onProgressUpdate(function (pro) {
                self.setProgress(pro);
            })
        }
    }
    private static setProgress(v: number) {
        this.progress = (this.loadIndex + 1) / this.currentLoadName.length * v;
        this.progresscb && this.progresscb(this.progress);
    }
}
