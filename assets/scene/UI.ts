import { Tools } from "../module/Tools";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UI extends cc.Component {

    @property({ tooltip: '提示预制件', type: cc.Prefab })
    UITooltip: cc.Prefab = null;
    @property({ tooltip: '弹框预制件', type: cc.Prefab })
    UIAlert: cc.Prefab = null;
    @property({ tooltip: '扣钱预制件', type: cc.Prefab })
    UIGold: cc.Prefab = null;

    /**动画最大数量 */
    maxCount: number = 36;
    novice: cc.Node = null;

    onLoad() {
        Global.Event.on('UI扣钱', this.loadGold, this);
        Global.Event.on("UI提示", this.loadTooltip, this);
        Global.Event.on("tooltip", this.loadTooltip, this);
        Global.Event.on("UI弹框", this.loadAlert, this);
        Global.Event.on("UI金币1", this.addGold2, this);
        Global.Event.on("UI金币2", this.addGold1, this);
        Global.Event.on("UI金币3", this.addGold3, this);
        Global.Event.on('UI显示等待', this.onShowLoading, this);
        Global.Event.on('UI隐藏等待', this.onHideLiading, this);
    }

    onDisable() {
        Global.Event.removeAllListeners(this);
    }


    //显示文字提示
    loadTooltip(data) {
        if (!this.node) return;
        let obj = cc.instantiate(this.UITooltip);
        this.node.addChild(obj);
        obj.tss.setData(data);
    }

    //显示弹框询问或提示
    loadAlert(data) {
        if (!this.node) return;
        let obj = cc.instantiate(this.UIAlert);
        this.node.addChild(obj);
        obj.tss.setData(data);
    }

    //显示loading
    onShowLoading() {
        if (CC_DEV) return;
        Global.Platform.isWechat && wx.showLoading({ title: '请稍后', mask: true });
        this.scheduleOnce(this.onHideLiading, 10);
    }

    //隐藏loading
    onHideLiading() {
        if (CC_DEV) return;
        this.unschedule(this.onHideLiading);
        Global.Platform.isWechat && wx.hideLoading();
    }

    /**
     * 播放获得金币的动画
     * @param goldCoin 金币总数
     * @param inp 动画起点
     * @param top 动画终点
    */
    addGold1(options: { goldCoin: number; inp?: cc.Vec2; top?: cc.Vec2; time?: number }) {
        options.top = options.top || cc.v2(-620, 320);
        this.createNode('image/icon1', options);
        Global.Audio.playSound('金币');
        Tools.DataBase.gold1Count += Math.round(options.goldCoin);
        this.scheduleOnce(() => { Tools.DataBase.addGold1(0); }, 1.5);
    }

    addGold2(options: { goldCoin: number; inp?: cc.Vec2; top?: cc.Vec2; time?: number }) {
        options.top = options.top || cc.v2(-300, 320);
        this.createNode('image/icon2', options);
        Global.Audio.playSound('金币');
        Tools.DataBase.gold2Count += Math.round(options.goldCoin);
        this.scheduleOnce(() => { Tools.DataBase.addGold2(0); }, 1.5);
    }
    addGold3(options: { goldCoin: number; inp?: cc.Vec2; top?: cc.Vec2; time?: number }) {
        options.top = options.top || cc.v2(20, 320);
        this.createNode('image/icon3', options);
        Global.Audio.playSound('金币');
        Tools.DataBase.gold3Count += Math.round(options.goldCoin);
        this.scheduleOnce(() => { Tools.DataBase.addGold3(0); }, 1.5);
    }

    //创建动画组件
    createNode(type: string, options: { goldCoin: number; inp?: cc.Vec2; top?: cc.Vec2; time?: number }) {
        let count = options.goldCoin > this.maxCount ? this.maxCount : options.goldCoin;
        let def = { inp: cc.Vec2.ZERO, top: cc.Vec2.ZERO, goldCoin: 0 }
        Object.assign(def, options);
        for (let i = 0; i < count; i++) {
            let item = new cc.Node('money');
            item.addComponent(cc.Sprite);
            let sprite = item.getComponent(cc.Sprite);
            Global.Loader.loadResourcesImage(type, sprite);
            this.node.addChild(item);
            this.playAnima(def, item);
        }
    }

    //播放飞金币动画
    playAnima(def: { inp: any; top: any; goldCoin?: number; time?: number }, node: cc.Node) {
        let num1 = this.getR(300) - 150;
        let num2 = this.getR(100) - 50;
        let num3 = this.getR(100) + 50;
        let num4 = def.time != null ? def.time : this.getR(400) / 1000;
        let action = cc.sequence(
            cc.delayTime(num4),
            cc.fadeIn(0.1),
            cc.jumpBy(0.6, cc.v2(num1, num2), num3, 1).easing(cc.easeOut(1)),
            cc.moveTo(0.8, def.top).easing(cc.easeIn(3)),
            cc.callFunc(() => { node.destroy(); })
        );
        node.opacity = 0;
        node.setPosition(def.inp);
        node.runAction(action);
    }

    loadGold(data) {
        let item = cc.instantiate(this.UIGold);
        this.node.addChild(item);
        item.tss.setData(data)
    }

    //获取随机整数
    getR(n: number) {
        return Math.round(Math.random() * n);
    }

}
