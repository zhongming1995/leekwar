
const { ccclass, property } = cc._decorator;

@ccclass
export default class UIFrameAnimate extends cc.Component {

    @property({ tooltip: '序列帧图片资源组', type: [cc.SpriteFrame] })
    Frames: cc.SpriteFrame[] = [];
    @property({ tooltip: '是否自动播放' })
    autoPlay: boolean = false;
    @property({ tooltip: '每一帧间隔时间' })
    delayTime: number = 0.1;
    @property({ tooltip: '循环次数,-1表示无限循环' })
    repeat: number = -1;
    @property({ tooltip: '是否自动销毁' })
    autoRemove: boolean = false;

    repeatCount: number = -1;
    isRun: boolean = false;
    runtime: number = -1;
    index: number = -1;
    sprite: cc.Sprite = null;
    endCB: Function = null;
    stepCB: Function = null;

    onLoad() {
        this.node.tss = this;
        this.index = -1;
        this.runtime = 0;
        this.isRun = false;
        if (!this.node.getComponent(cc.Sprite)) this.node.addComponent(cc.Sprite);
        this.sprite = this.node.getComponent(cc.Sprite);
    }

    //自动播放前可以主动修改设置参数
    setData(data: { autoPlay?: boolean; delayTime?: number; repeat?: number; autoRemove?: boolean; endCB?: Function; stepcb?: Function } = {}) {
        this.autoPlay = data.autoPlay || this.autoPlay;
        this.delayTime = data.delayTime || this.delayTime;
        this.repeat = data.repeat || this.repeat;
        this.autoPlay = data.autoPlay || this.autoPlay;
        this.endCB = data.endCB || this.endCB;
        this.stepCB = data.stepcb || this.stepCB;
    }

    //开始播放
    start() {
        if (this.autoPlay) {
            this.play();
        }
    }

    play() {
        if (this.Frames.length > 0) {
            this.playAnima(this.repeat, this.endCB, this.stepCB);
        }
    }

    loadFrames(atlas: cc.SpriteAtlas, name: string, begin: number, end: number) {
        this.Frames.splice(0, this.Frames.length);
        for (var i = begin; i < end; i++) {
            this.Frames.push(atlas.getSpriteFrame(name + i));
        }
    }

    addFrame(sf: cc.SpriteFrame) {
        this.Frames.push(sf);
    }
    removeFrame() {
        this.Frames = [];
    }

    playAnima(repeat: number = -1, endCB?: Function, stepcb?: Function) {
        this.endCB = endCB;
        this.stepCB = stepcb;
        this.index = -1;
        this.isRun = true;
        this.repeatCount = repeat ? repeat : -1
        this.sprite.spriteFrame = this.Frames[0];
    }

    stop(num) {
        this.isRun = false;
        if (num != null) {
            this.autoPlay = false;
            this.sprite.spriteFrame = this.Frames[num];
        }
    }

    setDelayTime(time: number) {
        this.delayTime = time;
        this.runtime = this.delayTime;
    }

    reset() {
        this.isRun = false;
        this.index = -1;
        this.Frames = [];
    }

    updateFrame() {
        this.index += 1;
        this.stepCB && this.stepCB(this.index);
        if (this.index == this.Frames.length) {
            if (this.repeatCount != -1) {
                this.repeatCount--;
            }
            if (this.repeatCount > 0 || this.repeatCount == -1) {
                this.index = this.index % this.Frames.length;
            }
            if (this.repeatCount == 0) {
                this.isRun = false;
                this.endCB && this.endCB();
                // this.sprite.spriteFrame = null;
                if (this.autoRemove) {
                    this.node.destroy();
                }
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
