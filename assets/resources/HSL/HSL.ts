const { ccclass, property } = cc._decorator;

@ccclass
export default class HSL extends cc.Component {


    @property({ range: [-180, 180], slide: true })
    private _dH: number = 0;
    @property({ tooltip: '颜色', range: [-180, 180], slide: true })
    set dH(value: number) {
        this._dH = value;
        this.updateShader()
    }
    get dH(): number {
        return this._dH;
    }

    @property({ range: [-1, 1], slide: true })
    private _dS: number = 0;
    @property({ tooltip: '饱和度', range: [-1, 1], slide: true })
    set dS(value: number) {
        this._dS = value;
        this.updateShader()
    }
    get dS(): number {
        return this._dS;
    }

    @property({ range: [-1, 1], slide: true })
    private _dL: number = 0;
    @property({ tooltip: '亮度', range: [-1, 1], slide: true })
    set dL(value: number) {
        this._dL = value;
        this.updateShader()
    }
    get dL(): number {
        return this._dL;
    }


    private sprite;
    private material: any;

    onEnable() {
        // this.node.on(cc.Node.EventType.COLOR_CHANGED, (data) => {
        //     console.log(data)
        //     this.updateShader()
        // })
    }

    onLoad() {
        this.node.hsl = this;
        this.sprite = this.node.getComponent(cc.Sprite) || this.node.getComponent(dragonBones.ArmatureDisplay);
        this.material = this.sprite.getMaterial(0);
        this.updateShader()
    }

    updateShader() {
        if (CC_EDITOR && !this.sprite) {
            this.sprite = this.node.getComponent(cc.Sprite) || this.node.getComponent(dragonBones.ArmatureDisplay);
            this.material = this.sprite.getMaterial(0);
        }
        this.setR(this.node.color.r)
        this.setG(this.node.color.g)
        this.setB(this.node.color.b)
        this.setA(this.node.color.a)
        this.Hue(this._dH);
        this.Saturation(this._dS);
        this.Lightness(this._dL);
    }

    //R
    setR(value: number) {
        this.material.setProperty("u_dR", value);
    }

    //G
    setG(value: number) {
        this.material.setProperty("u_dG", value);
    }

    //B
    setB(value: number) {
        this.material.setProperty("u_dB", value);
    }

    //A
    setA(value: number) {
        this.material.setProperty("u_dA", value);
    }

    //色相
    Hue(value: number) {
        this.material.setProperty("u_dH", value);
    }

    //饱和度
    Saturation(value: number) {
        this.material.setProperty("u_dS", value);
    }

    //亮度
    Lightness(value: number) {
        this.material.setProperty("u_dL", value);
    }

    callbackH(slider: cc.Slider) {
        this.Hue(Number(slider.progress * 360))
    }

    callbackS(slider: cc.Slider) {
        this.Saturation(Number(slider.progress))
    }

    callbackL(slider: cc.Slider) {
        this.Lightness(Number(slider.progress))
    }

}