import { Tools } from "../module/Tools";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BannerBlink extends cc.Component {

    @property
    spaceTime = 0;
    @property
    isLongtime = false;
    @property
    autoBlink = true;

    onLoad() {
        this.node.ts = this;
    }

    start() {
        this.autoBlink && this.showBlink();
    }

    showBlink() {
        if (!Tools.DataBase.isCheck) {
            if (this.isLongtime && this.spaceTime > 1) {
                this.schedule(this.bannerBlink, this.spaceTime);
            } else {
                this.scheduleOnce(this.bannerBlink, this.spaceTime);
            }
        }
    }

    bannerBlink() {
        this.node.tss.Show();
        this.scheduleOnce(() => {
            this.node.tss.Hide();
        }, 4);
    }

}
