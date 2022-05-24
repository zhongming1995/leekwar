
import { Tools } from "../../module/Tools";
import UIToggle from "../../module/ui/UIToggle";
import UIWindows from "../../module/ui/UIWindows";
import Game from "../scene/Game";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameLevel extends UIWindows {

    @property(cc.Node)
    title: cc.Node = null

    @property(cc.Node)
    title2: cc.Node = null

    @property(cc.Node)
    lv: cc.Node = null

    @property(cc.Node)
    rank: cc.Node = null

    @property(cc.Node)
    starBox: cc.Node = null

    @property(cc.Node)
    starItem: cc.Node = null

    @property(cc.Label)
    lvLabel: cc.Label = null

    @property(cc.Node)
    ske: cc.Node = null

    private curDragonBone = null;
    first: boolean = true
    onLoad() {
        super.onLoad();

        this.curDragonBone = this.ske.getComponent(dragonBones.ArmatureDisplay)
        this.curDragonBone.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, (event) => {
            if (this.first) {
                this.first = false
                console.log("循环播放完成一次", event)
                this.curDragonBone.playAnimation("xuanzhuan", 0);
                this.scheduleOnce(() => {
                    this.showStar()
                }, 1)
            }
        }, this)
    }

    data = null
    setData(data) {
        this.data = data
    }

    start() {
        this.initView(true)

        this.lv.scale = 0
        this.lv.runAction(cc.scaleTo(0.5, 1))

        if (Game.Instance.isWin) {
            this.ske.active = true
        } else {
            this.title.parent.active = true
            this.title.getComponent(UIToggle).setToggle(Game.Instance.isWin ? 0 : 1)
            this.title2.getComponent(UIToggle).setToggle(Game.Instance.isWin ? 0 : 1)
            this.title.parent.getComponent(UIToggle).setToggle(Game.Instance.isWin ? 0 : 1)
            this.scheduleOnce(() => {
                this.showStar()
            }, 1.5)
        }
        this.scheduleOnce(() => {
            this.closeBtn.active = false
        })
    }

    showStar() {
        let levelData = Tools.DataBase.levelData1
        if (levelData.addStar) {
            if (levelData.addStar > 0) {
                levelData.addStar -= 1
                Tools.DataMgr.addStar()
            } else {
                levelData.addStar += 1
                Tools.DataMgr.subStar()
            }
            this.initView(false)

            this.scheduleOnce(() => {
                this.showStar()
            }, 0.5)
        } else {
            this.closeBtn.scale = 0
            this.closeBtn.active = true
            this.closeBtn.runAction(cc.scaleTo(0.5, 1))
        }
    }

    arr = ["青铜", "白银", "黄金", "钻石", "星耀", "王者"]
    arr2 = ["5", "4", "3", "2", "1"]
    initView(isInit) {

        this.starBox.destroyAllChildren()
        let levelData = Tools.DataBase.levelData1

        let endCall = () => {
            this.lv.getComponent(UIToggle).setToggle(levelData.lv)

            let rankIndex = 5 - levelData.maxRank + levelData.rank

            this.lvLabel.string = this.arr[levelData.lv] + this.arr2[rankIndex]
            this.rank.getComponent(UIToggle).setToggle(rankIndex)

            for (let i = 0; i < (levelData.maxStar > 5 ? 5 : levelData.maxStar); i++) {
                let starItem = cc.instantiate(this.starItem)
                starItem.active = true
                starItem.parent = this.starBox
                if (isInit || !isInit && levelData.star != i + (Game.Instance.isWin ? 1 : 0)) {
                    starItem.getComponent(UIToggle).setToggle(levelData.star > i ? 1 : 0)
                } else {
                    starItem.getComponent(UIToggle).setToggle(Game.Instance.isWin ? 0 : 1)
                    let time = 0
                    if (Game.Instance.isWin && levelData.star == 0) {
                        time = 0.25
                    }
                    starItem.runAction(cc.sequence(cc.delayTime(time), cc.scaleTo(0.2, 4), cc.callFunc(() => {
                        starItem.getComponent(UIToggle).setToggle(levelData.star > i ? 1 : 0)
                    }), cc.scaleTo(0.2, 1)))
                }
            }
        }

        if (Game.Instance.isWin && levelData.star == 0) {
            this.lv.runAction(cc.sequence(cc.scaleTo(0.25, 0), cc.callFunc(() => {
                endCall()
            }), cc.scaleTo(0.25, 1)))
        } else if (!Game.Instance.isWin && levelData.star == levelData.maxStar) {
            this.lv.runAction(cc.sequence(cc.scaleTo(0.25, 0), cc.callFunc(() => {
                endCall()
            }), cc.scaleTo(0.25, 1)))
        } else {
            endCall()
        }


    }

    removeFromUI() {
        super.removeFromUI();
        Global.Event.emit('返回大厅');
    }
}
