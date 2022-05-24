import { Tools } from "../../module/Tools";



const { ccclass, property } = cc._decorator;

@ccclass
export default class DeskIcon extends cc.Component {

    @property(cc.Node)
    redNode: cc.Node = null

    goldNum: number = 100

    protected onLoad(): void {
        this.node.on(cc.Node.EventType.TOUCH_END, this.showDesk, this)
    }

    protected start(): void {
        this.checkType()
    }

    /**是否已经添加了桌面快捷方式 */
    exist: boolean = false
    checkType() {
        if (Global.Platform.isTouTiao && Global.api.checkShortcut) {
            Global.api.checkShortcut({
                success: (res) => {
                    let status = res.status
                    this.exist = status.exist
                    this.initRed()
                    console.log('是否已经添加了桌面快捷方式  ', status.exist);
                },
                fail: (res) => {
                    this.node.active = false
                    console.log('检查快捷方式失败', res.errMsg);
                }
            })
        } else {
            this.node.active = false;
        }
    }

    initRed() {
        let scene = Global.api.getLaunchOptionsSync().scene
        console.log("scene  > ", scene);
        this.redNode.active = this.exist &&
            (scene == "011020" || scene == "021020" || scene == "991020" || scene == "061020" || scene == "181020" || scene == "141020") &&
            !Tools.DataBase.isGetDeskGold
    }


    onGetClick() {
        Tools.DataBase.isGetDeskGold = true
        Tools.DataBase.addGold1(100)
        this.initRed()
    }


    showDesk() {
        let data = {
            exist: this.exist,
            showGet: this.redNode.active,
            onGetClick: () => {
                this.onGetClick()
            }
        }
        Global.UIManger.pushWindow('Desk', 'Desk', data);
    }
}
