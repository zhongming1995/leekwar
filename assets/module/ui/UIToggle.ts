
const {ccclass, property} = cc._decorator;

@ccclass
export default class UIToggle extends cc.Component {

    @property([cc.SpriteFrame])
    Frams: cc.SpriteFrame[] = [];

    @property([cc.Node])
    attach: cc.Node[] = [];

    @property([cc.Component.EventHandler])
    clickEvents: cc.Component.EventHandler[] = [];

    private index:number = 0;

    onLoad() {
        if(this.clickEvents.length>0){
            this.registerTouch();
        }
    }
    registerTouch(){
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouch, this); 
    }

    _onTouch(event){
        if(this.clickEvents.length == 0)
            return;

        this.index++;
        event.toggle = this;
        this.setToggle(this.index);
        
        cc.Component.EventHandler.emitEvents(this.clickEvents, event);
    }
    setToggle(index:number):void{
        this.index = index % this.Frams.length;
        this.node.getComponent(cc.Sprite).spriteFrame = this.Frams[this.index];
        if(this.attach.length > this.index){
            for(var i=0; i<this.attach.length; i++){
                this.attach[i].active = this.index == i;
            }
        }
    }
    getIndex():number{
        return this.index;
    }
}
