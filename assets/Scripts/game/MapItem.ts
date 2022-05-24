// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Tools } from "../../module/Tools";
import Game from "../scene/Game";
import MapMgr from "../MapMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MapItem extends cc.Component {

    data = null

    mapBlockIndex = cc.v2(0, 0)

    @property([cc.TiledMapAsset])
    mapAsset: cc.TiledMapAsset[] = [];


    protected onLoad(): void {

        Global.Event.on('初始化地图对象', this.initObjects, this);

        Global.Event.on('矿场经验提示', this.showKTip, this);
    }

    showKTip(num: number) {
        if (this.data.mapIndex != 4) return




        let kTip = Global.Loader.getInstantiate("KTip")

        kTip.parent = this.node.parent.parent.getChildByName("effContent")
        let wPos = this.node.parent.convertToWorldSpaceAR(this.node.position)
        let pos = kTip.parent.convertToNodeSpaceAR(wPos)
        pos.x += 45
        kTip.setPosition(pos)
        kTip.getComponent(cc.Label).string = "收割者经验 +" + num
        kTip.runAction(cc.sequence(
            cc.moveTo(2, cc.v2(45, 200)),
            cc.spawn(cc.fadeOut(0.5), cc.moveTo(0.5, cc.v2(45, 250))),
            cc.callFunc(() => {
                kTip.destroy()
            })
        ))
    }

    onDestroy() {
        Global.Event.removeAllListeners(this);
    }

    protected start(): void {

    }

    setOptions(data) {
        this.data = data
        this.node.getComponent(cc.TiledMap).tmxAsset = null;
        // this.node.getComponent(cc.TiledMap).tmxAsset = this.mapAsset[0]
        this.node.getComponent(cc.TiledMap).tmxAsset = data.mapIndex == 4 ? this.mapAsset[data.mapId - 1] : Tools.DataMore.getTiledMapByIndex(Math.ceil(Math.random() * 26), data.mapId)



        this.mapBlockIndex = cc.v2(this.data.posIndex[0], this.data.posIndex[1])

        this.node.x = MapMgr.Instance.mapBlockRealSize * this.mapBlockIndex.x
        this.node.y = - MapMgr.Instance.mapBlockRealSize * this.mapBlockIndex.y

        MapMgr.Instance.parseMap(this.node.getComponent(cc.TiledMap), this.mapBlockIndex)

        if (data.mapIndex == 3 || data.mapIndex == 5) {//boss回血点
            let buildingNode = MapMgr.Instance.newMapItem({
                posIndex: cc.v2(data.mapIndex == 3 ? - 13 : 13, 4),
                itemIndex: 1005,
                mapIndex: -1 /* this.data.mapIndex */
            })

            Tools.DataMgr.bossAddHpNode.push(buildingNode)

        }
        // this.initObjects()
    }

    /**初始化地图对象 */
    initObjects(): void {
        let map = this.node.getComponent(cc.TiledMap)
        let objs = map.getObjectGroup('对象').getObjects();

        let mapSize = map.getMapSize()
        let tiledSize = map.getTileSize()

        let size = cc.size(mapSize.width * tiledSize.width, mapSize.height * tiledSize.height)

        for (let i = 0; i < objs.length; i++) {
            let obj = objs[i];
            if (!obj || (obj.name != 'bed' && obj.name != 'door' && obj.name != 'map'
                && obj.name != 'playerPos' && obj.name != 'coal' && obj.name != 'coalDoor'
                && obj.name != 'spring' && obj.name != 'light' && obj.name != 'switch' && obj.name != 'saveSelf')) {
                continue
            }
            let position = cc.v2(obj.x - size.width / 2 + tiledSize.width / 2, obj.y - size.height / 2 - tiledSize.width / 2)
            let mapIndex = MapMgr.Instance.getMapIndex(position.x, position.y)
            let pos = cc.v2(mapIndex.x, mapIndex.y)
            let posIndex = cc.v2(pos.x + MapMgr.Instance.mapBlockSize * this.mapBlockIndex.x, pos.y + MapMgr.Instance.mapBlockSize * this.mapBlockIndex.y)
            if (obj.name == 'bed') { //床
                let bedNode = MapMgr.Instance.newMapItem({
                    posIndex: posIndex,
                    itemIndex: 1001,
                    mapIndex: this.data.mapIndex
                })
                Tools.DataMgr.bedNode[this.data.mapIndex] = bedNode
            } else if (obj.name == 'door') { //门
                let doorNode = MapMgr.Instance.newMapItem({
                    posIndex: posIndex,
                    itemIndex: 1002,
                    mapIndex: this.data.mapIndex,
                    mapData: { LorR: obj.LorR, motion: obj.motion, rotate: obj.rotate }
                })
                Tools.DataMgr.doorNode[this.data.mapIndex] = doorNode

                let createDoorNode = MapMgr.Instance.newMapItem({
                    posIndex: posIndex,
                    itemIndex: 1009,
                    mapIndex: this.data.mapIndex,
                    mapData: { LorR: obj.LorR, motion: obj.motion, rotate: obj.rotate }
                })
                Tools.DataMgr.createDoorNode[this.data.mapIndex] = createDoorNode

                createDoorNode.active = false
                createDoorNode.zIndex = 0
            } else if (obj.name == 'map') { //道具底
                if (!MapMgr.Instance.allMapBgNodeIndex[this.data.mapIndex]) {
                    MapMgr.Instance.allMapBgNodeIndex[this.data.mapIndex] = {}
                }
                MapMgr.Instance.allMapBgNodeIndex[this.data.mapIndex][posIndex.x + "*" + posIndex.y] = obj.weapon > 0 ? obj.weapon : 100

                let buildingNode = MapMgr.Instance.newMapItem({
                    posIndex: posIndex,
                    itemIndex: 1003,
                    mapIndex: this.data.mapIndex,
                    mapData: { weapon: obj.weapon || 0 }
                })
            } else if (obj.name == 'spring') { //弹簧
                if (!obj.direction) debugger
                let buildingNode = MapMgr.Instance.newMapItem({
                    posIndex: posIndex,
                    itemIndex: 1004,
                    mapIndex: this.data.mapIndex,
                    mapData: { direction: obj.direction }
                })
            } else if (obj.name == 'playerPos') { //玩家出生点
                Game.Instance.playerPos.push(posIndex)
                let buildingNode = MapMgr.Instance.newMapItem({
                    posIndex: posIndex,
                    itemIndex: 1003,
                    mapIndex: this.data.mapIndex,
                    mapData: { weapon: obj.weapon || 0 }
                })
            } else if (obj.name == 'saveSelf') { //玩家自救点
                Game.Instance.playerSaveSelfPos.push(posIndex)
            } else if (obj.name == 'coal') { //煤矿
                let buildingNode = MapMgr.Instance.newMapItem({
                    posIndex: posIndex,
                    itemIndex: 1003,
                    mapIndex: this.data.mapIndex,
                    mapData: { isK: 1 }
                })
            } else if (obj.name == 'coalDoor') { //煤矿门
                let buildingNode = MapMgr.Instance.newMapItem({
                    posIndex: posIndex,
                    itemIndex: 1007,
                    mapIndex: this.data.mapIndex,
                    mapData: { LorR: obj.LorR, motion: obj.motion, rotate: obj.rotate, id: obj.id }
                })
                Tools.DataMgr.KDoor.push(buildingNode)
            } else if (obj.name == 'light') { //警报灯
                let buildingNode = MapMgr.Instance.newMapItem({
                    posIndex: posIndex,
                    itemIndex: 1006,
                    mapIndex: this.data.mapIndex
                })
            } else if (obj.name == 'switch') { //营救点
                let buildingNode = MapMgr.Instance.newMapItem({
                    posIndex: posIndex,
                    itemIndex: 1008,
                    mapIndex: -1/* this.data.mapIndex */
                })
                buildingNode.zIndex = 999
                Tools.DataMgr.saveNode.push(buildingNode)
            }
        }
    }
}
