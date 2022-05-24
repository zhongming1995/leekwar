
const { ccclass, property } = cc._decorator;

@ccclass
export default class UITooltip extends cc.Component {

    @property({ tooltip: '文本组件', type: cc.Label })
    private toolFont: cc.Label = null;
    @property(cc.Node)
    mask: cc.Node = null;
    private isClick: boolean = false;
    private data: any = null;

    onLoad() {
        this.node.tss = this;
        this.node.opacity = 0;
        this.mask.active = false;
        this.mask.on('touchend', this.onClick, this);
    }
    /**
     * 设置弹框的属性
     * @param content 显示内容=''
     * @param time 延迟消失时间=1秒
     * @param y 显示的y坐标=0
    */
    public setData(options: { content: string; time?: number; cb?: Function; }) {
        this.data = options;
        let data = { content: '', time: 1, cb: () => { } };
        Object.assign(data, options);
        this.mask.active = !!options.cb;
        this.toolFont.string = data.content;
        this.node.runAction(cc.sequence(cc.fadeIn(0.2), cc.delayTime(data.time), cc.callFunc(this.onClick.bind(this))));
    };

    onClick() {
        if (this.isClick) return;
        this.isClick = true;
        this.data.cb && this.data.cb();
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.spawn(cc.moveBy(0.4, 0, 50), cc.fadeOut(0.4)), cc.callFunc(this.onClose.bind(this))));
    }

    onClose() {
        this.node.destroy();
    }

}
