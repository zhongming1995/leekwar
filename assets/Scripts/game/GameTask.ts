// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";


export enum TaskType {
    逃入房间,
    升级,
    建造,
    营救队友,
    点击挖矿,
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameTask extends cc.Component {

    static _instance: GameTask;

    static get Instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new GameTask();
        return this._instance;
    }

    @property(cc.Node)
    completeBtn: cc.Node = null

    @property(cc.Node)
    noBtn: cc.Node = null

    @property(cc.Label)
    descLabel: cc.Label = null

    @property(cc.Label)
    rewLabel: cc.Label = null

    @property(cc.Node)
    rewItem: cc.Node = null


    taskData = null

    /**当前任务数据 */
    curTaskData = null
    /**任务id */
    taskId = 0

    /**是否是赏金任务 */
    isShowGold: boolean = false

    /**是否是营救任务 */
    isShowSave: boolean = false

    /**赏金任务数据 */
    goldTaskData = null

    /**营救任务数据 */
    saveTaskData = null

    protected onLoad(): void {
        GameTask._instance = this
        this.node.tss = this
        this.completeBtn.on(cc.Node.EventType.TOUCH_END, this.onCompleteClick, this)

        this.taskData = /* Tools.JosnCfg.taskData.concat()// */Global.Common.deepCopy(Tools.JosnCfg.taskData, [])

        this.goldTaskData = this.taskData.pop()
        this.saveTaskData = this.taskData.pop()
        this.curTaskData = this.taskData[this.taskId]
    }

    /** 前置补0 */
    addPreZero(num) {
        return ('000000000' + num).slice(-3);
    }

    onCompleteClick() {
        if (this.isShowGold) {
            Tools.DataBase.taskCount.glodTask++
        } else if (this.isShowSave) {
            Tools.DataBase.taskCount.saveTask++
        } else {
            if (Tools.DataMgr.checkGuideByIndex(0) && this.curTaskData.id == 1) {
                Tools.DataBase.wxGuideIndex++
            }
            this.taskId++
        }
        this.curTaskData.finish = 1
        this.curTaskData.finishEvent && Global.Event.emit("打点_任务", { taskName: this.addPreZero(this.curTaskData.id) + this.curTaskData.finishEvent })
        Tools.DataBase.addGold1(this.curTaskData.happyCount)

        let rewItem = cc.instantiate(this.rewItem)
        rewItem.parent = this.node
        rewItem.scale = 0
        rewItem.opacity = 0
        rewItem.active = true

        rewItem.runAction(cc.sequence(
            cc.spawn(
                cc.scaleTo(0.3, 1.3), cc.fadeIn(0.3)
            ),
            cc.scaleTo(0.1, 1),
            cc.delayTime(1),
            cc.fadeOut(0.5),
            cc.callFunc(() => {
                rewItem.destroy()
            })
        ))

        this.curTaskData = this.taskData[this.taskId]
        this.initView(this.curTaskData)
        this.isShowGold = false
        this.isShowSave = false
    }

    start() {
        this.initView(this.curTaskData)
        this.node.active = Tools.DataMore.gameMode != "bossMode"
    }

    initView(taskData) {
        if (!taskData) {
            this.node.active = false
            return
        }
        this.descLabel.string = /* (this.taskId + 1) + */ taskData.desc
        this.rewLabel.string = "x" + taskData.happyCount
        let complete = taskData.count >= taskData.allCount
        this.completeBtn.active = complete
        this.completeBtn.getChildByName("finger").active = this.completeBtn.active && Tools.DataMgr.checkGuideByIndex(0) && this.curTaskData.id == 1
        this.noBtn.active = !complete
    }

    /**显示赏金任务 */
    showGoldTask() {
        if (Tools.DataMore.gameMode == "outMode") return
        if (Tools.DataBase.taskCount.glodTask >= 5) return
        if (this.goldTaskData.finish) return
        if (this.isShowSave) return
        this.isShowGold = true
        this.curTaskData = this.goldTaskData
        this.initView(this.curTaskData)
    }

    /**隐藏赏金任务 */
    hideGoldTask() {
        if (!this.isShowGold) return
        this.isShowGold = false
        this.curTaskData = this.taskData[this.taskId]
        this.initView(this.curTaskData)
    }

    /**显示营救任务 */
    showSaveTask() {
        if (Tools.DataMore.gameMode == "outMode") return
        if (Tools.DataBase.taskCount.saveTask >= 5) return
        if (this.saveTaskData.finish) return
        if (this.isShowGold) return
        this.isShowSave = true
        this.curTaskData = this.saveTaskData
        this.initView(this.curTaskData)
    }

    /**隐藏营救任务 */
    hideSaveTask() {
        if (!this.isShowSave) return
        this.isShowSave = false
        this.curTaskData = this.taskData[this.taskId]
        this.initView(this.curTaskData)
    }

    /**
     * 检测任务是否完成
     * @param taskType 任务类型
     * @param buildID 建筑id
     * @param num 完成数量
     * @returns 
     */
    checkTask(taskType: TaskType, buildID: number, num: number = 1) {
        if (!this.curTaskData) return
        for (let i = 0; i < this.taskData.length; i++) {
            const data = this.taskData[i];
            if (data.taskType == taskType && data.buildID == buildID) {
                data.count += num
                break
            }
        }

        if (this.isShowGold && this.goldTaskData.taskType == taskType && this.goldTaskData.buildID == buildID) {
            this.goldTaskData.count += num
        }

        if (this.isShowSave && this.saveTaskData.taskType == taskType && this.saveTaskData.buildID == buildID) {
            this.saveTaskData.count += num
        }

        this.initView(this.curTaskData)
    }

}
