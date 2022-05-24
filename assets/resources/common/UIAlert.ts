
const { ccclass, property } = cc._decorator;

@ccclass
export default class UIAlert extends cc.Component {

    @property({ tooltip: '遮罩', type: cc.Node })
    private mask: cc.Node = null;

    @property({ tooltip: '文本组件', type: cc.Label })
    private contentText: cc.Label = null;

    @property({ tooltip: '关闭按钮', type: cc.Node })
    private closeBtn: cc.Node = null;

    @property({ tooltip: '取消按钮', type: cc.Node })
    private actionBtn1: cc.Node = null;

    @property({ tooltip: '确定按钮', type: cc.Node })
    private actionBtn2: cc.Node = null;

    private _options: {
        content: string;
        isClose: boolean;
        isModel: boolean;
        isModelClose: boolean;
        caBtnCb?: Function;
        okBtnCb?: Function;
        coBtnCb?: Function
    } = {
            content: '',    //显示的内容
            isClose: false,     //是否显示关闭按钮
            isModel: true,      //是否显示半透明遮罩
            isModelClose: false,     //遮罩是否能关闭弹窗
        };

    onLoad() {
        this.node.tss = this;
        this.mask.on('touchend', this.tapMask, this);
        this.closeBtn.on('touchend', this.onClose, this);
        this.actionBtn1.on('touchend', this.onClickBtn1, this);
        this.actionBtn2.on('touchend', this.onClickBtn2, this);
    }

    /**
     * 设置弹框的属性
     * @param content 弹框内容=''
     * @param isClose 是否显示关闭按钮=false
     * @param isModel 是否显示遮罩背景=true
     * @param isModelClose 点击遮罩是否关闭窗口=false
     * @param caBtnCb 点击取消按钮回调=null
     * @param okBtnCb 点击确定按钮回调=null
     * @param coBtnCb 点击关闭按钮回调=null
    */
    public setData(options: { content: string; isClose?: boolean; isModel?: boolean; isModelClose?: boolean; caBtnCb?: Function; okBtnCb?: Function; cbBtnCb?: Function }) {
        Object.assign(this._options, options);
        this.closeBtn.active = this._options.isClose;
        this.mask.active = this._options.isModel;
        this.contentText.string = this._options.content;
        this.actionBtn1.active = !!this._options.caBtnCb;
        this.actionBtn2.active = !!this._options.okBtnCb;
    };

    private onClickBtn1() {
        !!this._options.caBtnCb && this._options.caBtnCb();
        this.onClose();
    };
    private onClickBtn2() {
        !!this._options.okBtnCb && this._options.okBtnCb();
        this.onClose();
    };

    private tapMask() {
        this._options.isModelClose && this.onClose();
    };

    onClose() {
        !!this._options.coBtnCb && this._options.coBtnCb();
        this.node.destroy();
    }

}
