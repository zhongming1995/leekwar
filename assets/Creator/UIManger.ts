export default class UIManger {

    private node1: cc.Node = null;
    private node2: cc.Node = null;

    SceneArr = []; //场景层
    WindowArr = []; //弹出窗
    UIWindow = [];  //记录弹出窗

    currentScene = null;
    currentWindow = null;

    constructor() {
        this.node1 = cc.find('Canvas/UI');
        this.node2 = cc.find('Canvas/UITop');
    }

    pushScene(url: string, script: any = null, data: any = null) {
        this.popWindow();
        this.SceneArr.push({ url: url, script: script, data: data });
        this._updateScene();
    }

    pushWindow(url: string, script: any = null, data: any = null) {
        this.WindowArr.push({ url: url, script: script, data: data });
        this._updateWindow();
    }
    pushWindowTop(url: string, script: any = null, data: any = null) {
        this.WindowArr.push({ url: url, script: script, data: data });
        this._updateWindowTop();
    }

    popWindow(node?: cc.Node) {
        for (let i = this.UIWindow.length - 1; i >= 0; i--) {
            if (!node || this.UIWindow[i] == node) {
                this.UIWindow[i].emit('onExitWindow');
                this.UIWindow.splice(i, 1);
            }
        }
    }

    _updateScene() {
        if (this.SceneArr.length == 0) return;
        let base = this.SceneArr.pop();
        let node = Global.Loader.getInstantiate(base.url);
        if (!node) return;
        this.node1.addChild(node);
        if (base.script || base.data) {
            let tss: any = node.tss || node.getComponent(base.script);
            let data = base.data || base.script;
            tss && tss.setData && tss.setData(data);
            // tss && tss.setOptions && tss.setOptions(data);
        }
        this.currentScene = node;
    }

    _updateWindow() {
        if (this.WindowArr.length == 0) return;
        let base = this.WindowArr.pop();
        let node = Global.Loader.getInstantiate(base.url);
        if (!node) return;
        this.node1.addChild(node, 10);
        node.emit('onEnterWindow');
        this.UIWindow.push(node);
        if (base.script || base.data) {
            let tss: any = node.tss || node.getComponent(base.script);
            let data = base.data || base.script;
            tss && tss.setData && tss.setData(data);
            // tss && tss.setOptions && tss.setOptions(data);
        }
        this.currentWindow = node;
        this._updateWindow();
    }

    _updateWindowTop() {
        if (this.WindowArr.length == 0) return;
        let base = this.WindowArr.pop();
        let node = Global.Loader.getInstantiate(base.url);
        if (!node) return;
        this.node2.addChild(node, 10);
        node.emit('onEnterWindow');
        this.UIWindow.push(node);
        if (base.script || base.data) {
            let tss: any = node.tss || node.getComponent(base.script);
            let data = base.data || base.script;
            tss && tss.setData && tss.setData(data);
            // tss && tss.setOptions && tss.setOptions(data);
        }
        this.currentWindow = node;
        this._updateWindowTop();
    }
}
