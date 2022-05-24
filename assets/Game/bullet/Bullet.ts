// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {

    private data = null

    /** 子弹速度 */
    public bulletSpeed = 18

    /** 子弹移动方向 */
    public attackDir = cc.Vec2.ZERO

    /** 子弹状态 */
    public isActive = true


    private targetNode = null

    private hitCall = null

    onLoad() {

        this.node.runAction(cc.sequence(cc.delayTime(10), cc.callFunc(() => {
            this.node.destroy()
        })))
    }

    setOptions(data) {
        this.data = data

        this.targetNode = data.targetNode
        this.hitCall = data.hitCall
        let bulletIndex = data.bulletIndex

        let bulletData = Tools.GameCfg.itemData[bulletIndex]
        let spriteName = bulletData.spriteName



        this.node.getChildByName("bulletSprite").getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getItemSpriteByIndex(spriteName)
        this.bulletSpeed = data.bulletSpeed || 5

        this.node.scale = 0.1
        this.node.runAction(cc.scaleTo(0.1, 1))
    }

    lateUpdate(dt) {
        if (!this.isActive) return

        let dir = cc.v2(this.attackDir.x, this.attackDir.y)

        if (this.targetNode && this.targetNode.isValid) {
            let dis = this.targetNode.position.sub(this.node.position)
            if (dis.mag() <= this.targetNode.width / 3) {
                this.hitCall && this.hitCall()
                this.isActive = false
                this.node.destroy()
                return
            }
            dir = dis.normalize()
        }
        else {//自我摧毁
            return this.node.destroy()
        }



        let Vx = this.bulletSpeed * dir.x * dt / Tools.dtTime
        let Vy = this.bulletSpeed * dir.y * dt / Tools.dtTime

        //计算弧度
        let radian = Math.atan2(dir.y, dir.x)
        //弧度转角度
        let angle = radian * 180 / Math.PI;
        this.node.angle = angle;

        let movePos = cc.v2(Vx, Vy)


        this.node.x += movePos.x
        this.node.y += movePos.y

    }

}
