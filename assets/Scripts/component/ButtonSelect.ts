const { ccclass, property } = cc._decorator;

@ccclass
export default class ButtonSelect extends cc.Component {

    @property(cc.SpriteFrame)
    selectSpriteFrame = null;
    @property(cc.SpriteFrame)
    noSelectSpriteFrame = null;

    @property(cc.Boolean)
    _isSelect = false;


    @property(cc.Boolean)
    set isSelect(value){
        this._isSelect = value;
        this.setNodeSelect(value)
    }

    get isSelect(){
        return this._isSelect;

    }


    setNodeSelect(select) {
        this._isSelect = select;
        if(select){
            this.node.getComponent(cc.Sprite).spriteFrame = this.selectSpriteFrame
        }
        else{
            this.node.getComponent(cc.Sprite).spriteFrame = this.noSelectSpriteFrame
        }
    }

    getNodeSelect() {
        return this._isSelect;
    }

    

}
