
const { ccclass, property } = cc._decorator;



export enum AniName {
    待机 = "待机",
    走1 = "走1",
    走 = "走",
    挖矿 = "挖矿",
    盾 = "盾",
    攻击 = "攻击",
    跳 = "跳"
}

@ccclass('DragonAnim')
export class DragonAnim {
    @property()
    public aniKey: string = 'animation';
    @property()
    public animationName: string = '';
    @property()
    public speed: number = 1;
    @property()
    public loop: boolean = false;
    public cb: Function = null;
}

@ccclass
export default class DragonAnimation extends cc.Component {

    @property([DragonAnim])
    animations: DragonAnim[] = [];
    private currentAnimation: DragonAnim = null;
    private curDragonBone = null;

    /** 死亡状态 */
    private isDie = false;


    onLoad() {
        this.curDragonBone = this.node.getComponent(dragonBones.ArmatureDisplay)
        this.curDragonBone.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, (event) => {
            // console.log("循环播放完成一次",event)

            if (this.currentAnimation && !this.currentAnimation.loop) {
                this.currentAnimation.cb && this.currentAnimation.cb();
            }

        }, this)
    }

    playAnimation(animName: string, cb?: Function) {
        if (this.isDie) {
            return;
        }
        let cname = this.getRuningAnimationName()
        if (cname == animName) {
            // console.log('重复播放:',animName);
            return;
        }
        let _currentidx = this.animations.findIndex((v) => { return v.aniKey == animName })
        // let _currentidx = Global.Common.arrayFind(this.animations, { key: animName })

        if (_currentidx == -1) {
            console.error('not find animname:', animName)
        }
        this.currentAnimation = this.animations[_currentidx];
        this.currentAnimation.cb = cb
        if (this.currentAnimation) {
            this._playAnimation()
        } else {
            console.error('currentAnimation 不存在', animName)
        }
    }

    _playAnimation() {

        // this.curDragonBone.armatureName = "Armature"
        this.curDragonBone.timeScale = this.currentAnimation.speed;
        this.curDragonBone.playAnimation(this.currentAnimation.animationName, this.currentAnimation.loop ? 0 : 1);
    }


    getRuningAnimationName() {
        return this.currentAnimation ? this.currentAnimation.aniKey : '';
    }

    /** 预乘播放速度 */
    setSpeed(sp: number) {
        this.curDragonBone.timeScale *= sp;
    }

    resetSpeed(sp: number) {

        if (this.curDragonBone.timeScale != sp) {
            this.curDragonBone.timeScale = sp;
        }
    }

    getSpeed() {
        return this.curDragonBone.timeScale
    }

}
