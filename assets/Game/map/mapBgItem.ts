// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import MapMgr from "../../Scripts/MapMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class mapBgItem extends cc.Component {

    onLoad() {
        this.node.getComponent(cc.Sprite).spriteFrame = Tools.DataMore.getMapBgMapByMap(MapMgr.Instance.mapId)
    }

}
