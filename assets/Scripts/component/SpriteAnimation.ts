
const { ccclass, property } = cc._decorator;


@ccclass('SpriteAnim')
export class SpriteAnim {
    @property()
    public aniKey: string = 'animation';
    @property({ tooltip: '序列帧图片资源组', type: [cc.SpriteFrame] })
    Frames: cc.SpriteFrame[] = [];
    @property({ tooltip: '每一帧间隔时间' })
    public delayTime: number = 0.15;
    @property()
    public speed: number = 1;
    @property()
    public repeat = -1;
    public endCB: Function = null;
}



@ccclass
export default class SpriteAnimation extends cc.Component {
    @property({ tooltip: '是否自动播放' })
    public autoPlay: boolean = false;

    @property([SpriteAnim])
    animations: SpriteAnim[] = [];
    private currentAnimation:SpriteAnim = null;
    private curDragonBone = null;

    /** 死亡状态 */
    private isDie = false;

    public isRun: boolean = false;
    public runtime: number = -1;
    public index: number = -1;
    public sprite: cc.Sprite = null;

    private endCB: Function = null;
    private stepCB: Function = null;
    private repeat = -1;
    private Frames: cc.SpriteFrame[] = [];
    private delayTime= 0.1;


    onLoad() {
        this.index = -1;
        this.runtime = 0;
        this.isRun = false;
        if (!this.node.getComponent(cc.Sprite)) this.node.addComponent(cc.Sprite);
        this.sprite = this.node.getComponent(cc.Sprite);
        if(this.animations[0]){
            this.playAnimation(this.animations[0].aniKey)
        }
    }

    playAnimation(animName: string, cb?: Function) {
        if (this.isDie) {
            return;
        }
        let cname = this.getRuningAnimationName()
        if (cname == animName) {
            console.log('重复播放:',animName);
            return;
        }
        let _currentidx = this.animations.findIndex((v)=>{return v.aniKey == animName})
        // let _currentidx = Global.Common.arrayFind(this.animations, { key: animName })

        if (_currentidx == -1) {
            console.error('not find animname:', animName)
        }
        this.currentAnimation = this.animations[_currentidx];
        this.currentAnimation.endCB = cb
        if (this.currentAnimation) {
            this._playAnimation()
        } else {
            console.error('currentAnimation 不存在', animName)
        }
    }

    _playAnimation() {

        this.repeat = this.currentAnimation.repeat;
        this.Frames = this.currentAnimation.Frames;
        this.delayTime = this.currentAnimation.delayTime;
        
        this.startAnimate(this.repeat, this.currentAnimation.endCB, null);
    }


    getRuningAnimationName() {
        return this.currentAnimation ? this.currentAnimation.aniKey : '';
    }


    startAnimate(repeat: number = -1, endCB?: Function, stepcb?: Function) {
        this.sprite = this.node.getComponent(cc.Sprite);
        this.endCB = endCB;
        this.stepCB = stepcb;
        this.index = -1;
        this.isRun = true;
        this.repeat = repeat ? repeat : -1
        this.sprite.spriteFrame = this.Frames[0];
    }


    reset() {
        this.isRun = false;
        this.index = -1;
    }


    stop() {
        this.isRun = false;
    }


    private updateFrame() {
        this.index += 1;
        this.stepCB && this.stepCB(this.index);
        if (this.index == this.Frames.length) {
            if (this.repeat != -1) {
                this.repeat--;
            }
            if (this.repeat > 0 || this.repeat == -1) {
                this.index = this.index % this.Frames.length;
            }
            if (this.repeat == 0) {
                this.isRun = false;
                this.endCB && this.endCB();
                this.sprite.spriteFrame = null;
                
                return;
            }
        }
        this.sprite.spriteFrame = this.Frames[this.index];
    }



    update(dt: number) {
        dt *= cc.director.getScheduler().getTimeScale();
        if (this.isRun) {
            if (this.runtime < 0) {
                this.runtime += this.delayTime;
                this.updateFrame();
                return;
            }
            this.runtime -= dt;
        }
    }

}
