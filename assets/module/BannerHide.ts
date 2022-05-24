import { Tools } from "../module/Tools";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BannerHide extends cc.Component {

    start() {
        // Tools.BannerMng.stopBanner(true);
    }

    onDestroy() {
        // Tools.BannerMng.stopBanner(false);
    }

}
