
import { Tools } from "../module/Tools";
import Game from "./scene/Game";
import ItemBase from "./ItemBase";
import RoleBase from "./game/player/RoleBase";
import MapItem from "./game/MapItem";


const { ccclass, property } = cc._decorator;

@ccclass
export default class MapMgr extends cc.Component {

    static _instance: MapMgr;

    static get Instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new MapMgr();
        return this._instance;
    }



    /** 地图地形，代表障碍 */
    public mapTerrain = {}
    /** 地图 对应的地形 */
    public mapTerrainItem = {}


    @property(cc.Node)
    itemContent: cc.Node = null;



    /** 每个地图多少格子 */
    public mapBlockSize = 9
    /** 地图每格大小 */
    public mapTiledSize = 90
    /** 每个地图像素大小 */
    public mapBlockRealSize = 810


    private initPathFind = false

    /**开被攻击的item */
    public monsterAttackPropList = []

    /**所有的地图itemNode */
    allMapItemNode = {};

    /**地块优先级 */
    allMapBgNodeIndex = {}

    /**五种地图类型 */
    mapId: number = 1

    /**玩家引导的床index */
    playerBedIndex: number = -1

    onLoad() {

        MapMgr._instance = this
        this.mapBlockRealSize = this.mapTiledSize * this.mapBlockSize

        Global.Event.on('销毁item', this.onTriggerDestroy, this);
        Global.Event.on('建造建筑', this.onCreateGameBuilding, this);

        this.mapId = 1 + Tools.DataMgr.gameCount % 5 /* Math.ceil(Math.random() * 5) */
        this.init()
    }



    onDestroy() {
        Global.Event.removeAllListeners(this);
    }


    init(data?) {
        this.mapTerrain = {}
        this.mapTerrainItem = {}
        this.allMapBgNodeIndex = {}
        this.mapBlockRealSize = this.mapTiledSize * this.mapBlockSize
        Global.Audio.stopMusic();
        this.itemContent.destroyAllChildren()
        this.allMapItemNode["-1"] = []
        for (let index = 0; index <= Tools.GameCfg.mapData.length; index++) {
            this.allMapItemNode[index] = []
            this.newMapBlock(index)
        }

        this.creatorAround()

        Global.Event.emit("初始化地图对象")

        /** 延迟显示 为了同步其他事件 */
        this.scheduleOnce(() => {
            Game.Instance.initGamePlayer()
        })

    }

    /**创建周围行走格子 */
    creatorAround() {
        for (let y = 14; y <= 15; y++) {
            for (let x = -15; x <= 15; x++) {
                if (!this.mapTerrain[y]) {
                    this.mapTerrain[y] = {}
                }
                this.mapTerrain[y][x] = 0
                this.createMapBg(x, y)
            }
        }
        for (let y = -15; y <= -14; y++) {
            for (let x = -15; x <= 15; x++) {
                if (!this.mapTerrain[y]) {
                    this.mapTerrain[y] = {}
                }
                if (this.mapTerrain[y][x] == 0) {
                    continue
                }
                this.mapTerrain[y][x] = 0
                this.createMapBg(x, y)
            }
        }

        for (let x = 14; x <= 15; x++) {
            for (let y = -15; y <= 15; y++) {
                if (!this.mapTerrain[y]) {
                    this.mapTerrain[y] = {}
                }
                if (this.mapTerrain[y][x] == 0) {
                    continue
                }
                this.mapTerrain[y][x] = 0
                this.createMapBg(x, y)
            }
        }

        for (let x = -15; x <= -14; x++) {
            for (let y = -15; y <= 15; y++) {
                if (!this.mapTerrain[y]) {
                    this.mapTerrain[y] = {}
                }
                if (this.mapTerrain[y][x] == 0) {
                    continue
                }
                this.mapTerrain[y][x] = 0
                this.createMapBg(x, y)
            }
        }
    }

    /**地图bg */
    createMapBg(x, y) {
        let mapBg = Global.Loader.getInstantiate("mapBgItem")
        mapBg.parent = this.node
        let pos = this.getPosByMapId(x, y)
        mapBg.x = pos.x
        mapBg.y = pos.y
    }


    /**初始化game地图 */
    newMapBlock(index) {
        const mapBlockData = Tools.GameCfg.mapData[index];
        if (!mapBlockData) return
        let mapBlock = Global.Loader.getInstantiate("MapItem")
        mapBlock.parent = this.node
        mapBlock.name = "MapItem_" + index
        mapBlockData.mapIndex = index
        mapBlockData.mapId = this.mapId
        mapBlock.zIndex = -1
        mapBlock.getComponent(MapItem).setOptions(mapBlockData)
    }

    start() {
        this.initPathFind = true
        this.reSetPathFind()
    }

    /** 初始寻路 */
    reSetPathFind() {
        if (!this.initPathFind) return
        //初始化寻路地形
        let mapData = {}
        for (const keyY in this.mapTerrain) {
            for (const keyX in this.mapTerrain[keyY]) {
                if (this.getGidByIndex(keyX, keyY) != 0) {
                    mapData[keyY + "*" + keyX] = 1
                }
            }
        }
        Tools.PathFind.init(mapData)

        let mapData2 = {}
        for (const keyY in this.mapTerrain) {
            for (const keyX in this.mapTerrain[keyY]) {
                if (this.getGidByIndex2(keyX, keyY) != 0) {
                    mapData2[keyY + "*" + keyX] = 1
                }
            }
        }
        Tools.PathFind2.init(mapData2)
    }

    /**解析地图 */
    parseMap(map: cc.TiledMap, mapIndex = cc.v2(0, 0)) {
        let floorLayer: cc.TiledLayer = map.getLayer('地形')
        let noPathLayer: cc.TiledLayer = map.getLayer('障碍')
        let size = this.mapBlockSize;
        for (let i = 0; i < size; i++) {

            for (let j = 0; j < size; j++) {
                // 
                let indexY = j + size * mapIndex.y - Math.floor(size / 2)
                let indexX = i + size * mapIndex.x - Math.floor(size / 2)

                if (!this.mapTerrain[indexY]) {
                    this.mapTerrain[indexY] = {}
                }
                if (floorLayer.getTileGIDAt(i, j) && !noPathLayer.getTileGIDAt(i, j)) {
                    this.mapTerrain[indexY][indexX] = 0
                }
                else {
                    this.mapTerrain[indexY][indexX] = -1
                }
            }

        }
    }


    /** 获取格子id的中心位置 */
    getPosByMapId(x, y) {
        let offset = this.mapBlockSize % 2 == 0 ? 0 : this.mapTiledSize / 2//偏移
        return cc.v2(x * this.mapTiledSize + this.mapTiledSize / 2 - offset, -y * this.mapTiledSize - this.mapTiledSize / 2 + offset)
    }

    /** 获取当前坐标对应的格子ID */
    getMapIndex(x, y) {
        let offset = this.mapBlockSize % 2 == 0 ? 0 : this.mapTiledSize / 2//偏移
        let mapTiledIndex = cc.v2(Math.floor((x + offset) / this.mapTiledSize), Math.floor((-y + offset) / this.mapTiledSize))
        let ax = mapTiledIndex.x;
        let ay = mapTiledIndex.y;
        return cc.v2(ax, ay)
    }

    // 获取当前格子id的地图 id
    getCurMapPosId(x, y) {
        let ax = Math.floor((Math.abs(x) - this.mapBlockSize / 2) / this.mapBlockSize);
        if (ax < 0) {
            ax = 0
        } else {
            ax += 1
            if (x < 0) {
                ax = -ax
            }
        }

        let ay = Math.floor((Math.abs(y) - this.mapBlockSize / 2) / this.mapBlockSize);
        if (ay < 0) {
            ay = 0
        } else {
            ay += 1
            if (y < 0) {
                ay = -ay
            }
        }

        return cc.v2(-ax, -ay)
    }

    /** 获取当前坐标是否为墙壁 */
    getGid(x: number, y: number, playerNode: cc.Node) {
        let index = this.getMapIndex(x, y)
        let ax = index.x
        let ay = index.y
        if (Tools.DataMore.gameMode == "bossMode" && !playerNode.getComponent(RoleBase).isGamePlayer) {
            return this.getGidByIndex2(ax, ay, playerNode)
        }

        return this.getGidByIndex(ax, ay, playerNode)
    }

    /**能否行走 0可 */
    getGidByIndex(ax, ay, playerNode?: cc.Node) {
        let terrainIndex = this.getMapTerrain(ax, ay)
        if (terrainIndex == null) return -1
        if (terrainIndex >= 10000) {//门特殊处理
            if (!playerNode && terrainIndex == 10000) {
                return 0
            }
            let item = this.getTriggerByIndex(ax, ay)
            if (item && item.getComponent(ItemBase)) {
                let playerPosIndex = playerNode ? MapMgr.Instance.getMapIndex(playerNode.position.x, playerNode.position.y) : { x: null, y: null }
                if (item.getComponent(ItemBase).getDoorFlag() ||
                    (playerNode && playerNode.getComponent(RoleBase).isGamePlayer && terrainIndex != 10001) ||//玩家特殊处理
                    (playerPosIndex.x == ax && playerPosIndex.y == ay)) {
                    return 0
                }
            }
        }
        return terrainIndex;
    }

    /**能否行走 0可 */
    getGidByIndex2(ax, ay, playerNode?: cc.Node) {
        let terrainIndex = this.getMapTerrain(ax, ay)
        if (terrainIndex == null) return -1
        if (terrainIndex >= 10000) {//门特殊处理
            let item = this.getTriggerByIndex(ax, ay)
            if (item && item.getComponent(ItemBase)) {
                let playerPosIndex = playerNode ? MapMgr.Instance.getMapIndex(playerNode.position.x, playerNode.position.y) : { x: null, y: null }
                if (item.getComponent(ItemBase).getDoorFlag() ||
                    (playerPosIndex.x == ax && playerPosIndex.y == ay)) {
                    return 0
                }
            }
        } else if (Tools.DataMore.gameMode == "bossMode") {
            let item = this.getTriggerByIndex(ax, ay)
            if (item && item.getComponent(ItemBase) && item.getComponent(ItemBase).getData().bossNoMove) {
                return -1
            }
        }
        return terrainIndex;
    }

    getCentPos() {
        let x = 0
        let y = 0
        return this.getPosByMapId(x, y)
    }

    /** 占格子不能移动 */
    addMapTerrain(data) {
        let x = data.posIndex.x
        let y = data.posIndex.y
        let item = data.item
        let terrainIndex = data.terrainIndex
        this.mapTerrain[y][x] += terrainIndex
        //地形值
        item.terrainIndex = terrainIndex
        if (!this.mapTerrainItem[y]) {
            this.mapTerrainItem[y] = {}
        }
        if (!this.mapTerrainItem[y][x]) {
            this.mapTerrainItem[y][x] = []
        }
        this.mapTerrainItem[y][x].push(item)
        //进行排序，保证可操作的物体在数组尾部
        this.mapTerrainItem[y][x].sort((a, b) => {
            return a.tss.data.sort - b.tss.data.sort
        })

        this.reSetPathFind()

    }

    /** 移除当前格子 */
    removeMapTerrain(data) {
        let x = data.posIndex.x
        let y = data.posIndex.y
        let item = data.item
        let terrainIndex = data.terrainIndex
        if (this.mapTerrainItem[y] && this.mapTerrainItem[y][x]) {
            let index = this.mapTerrainItem[y][x].indexOf(item)
            if (index != -1) {
                this.mapTerrain[y][x] -= terrainIndex
                this.mapTerrainItem[y][x].splice(index, 1)
            }
        }
        this.reSetPathFind()
    }


    /**获得格子的地形值 */
    getMapTerrain(x, y) {
        if (!this.mapTerrain[y])
            return null
        return this.mapTerrain[y][x]
    }

    /**  创建地图资源 */
    newMapItem(buildData) {
        let posIndex = buildData.posIndex
        let itemIndex = buildData.itemIndex
        let mapIndex = buildData.mapIndex

        let mapData = buildData.mapData


        let data = Global.Common.deepCopy(Tools.GameCfg.itemData[itemIndex])

        let item = Global.Loader.getInstantiate(data.buildName)
        item.parent = this.itemContent

        data.itemIndex = itemIndex
        data.posIndex = posIndex
        data.mapIndex = mapIndex

        data.mapData = mapData


        let pos = this.getPosByMapId(posIndex.x, posIndex.y)
        item.x = pos.x
        item.y = pos.y
        item.getComponent(ItemBase).setOptions(data)

        item.width = this.mapTiledSize
        item.height = this.mapTiledSize

        if (this.mapTerrain[posIndex.y] && this.mapTerrain[posIndex.y][posIndex.x] == undefined) {
            debugger
        }
        if (this.mapTerrain[posIndex.y] && this.mapTerrain[posIndex.y][posIndex.x] != 0) {
            // debugger
        }
        let terrainIndex = data.terrainIndex
        let terrainData = {
            posIndex: posIndex,
            item: item,
            terrainIndex: terrainIndex
        }
        this.addMapTerrain(terrainData)

        if (!this.allMapItemNode[mapIndex]) {
            debugger
        }

        this.allMapItemNode[mapIndex].push(item)
        this.sortMapItem(mapIndex)
        return item

    }

    /**
     * 排序
     * @param mapIndex 地图id
     */
    sortMapItem(mapIndex: number) {
        let MapBgNode = this.allMapBgNodeIndex[mapIndex]
        if (!MapBgNode) return
        this.allMapItemNode[mapIndex].sort((a, b) => {
            let aCom: ItemBase = a.getComponent(ItemBase)
            let bCom: ItemBase = b.getComponent(ItemBase)
            let aNum = MapBgNode[aCom.posIndex.x + "*" + aCom.posIndex.y] || 100
            let bNum = MapBgNode[bCom.posIndex.x + "*" + bCom.posIndex.y] || 100
            return aNum - bNum
        })
    }

    onCreateGameBuilding(buildData) {
        //此处index为建筑最左下方的index
        let posIndex = buildData.posIndex
        let itemIndex = buildData.itemIndex

        let data = Global.Common.deepCopy(Tools.GameCfg.itemData[itemIndex])
        data.itemIndex = itemIndex
        data.posIndex = posIndex



        let item = this.newGameBuildItem(data)


        return item
    }

    /** 生成玩家建筑 */
    newGameBuildItem(data) {
        //此处index为建筑最左下方的index
        let posIndex = data.posIndex
        let itemIndex = data.itemIndex

        if (!(this.mapTerrain[posIndex.y])) return

        // if(itemIndex == "3033"){
        //     debugger
        // }

        let buildType = data.buildType || "GameBuildItem"
        let item = Global.Loader.getInstantiate("item/" + buildType)
        item.parent = this.itemContent




        let size = data.size || [1, 1]
        // console.log("随机生成地图资源",posIndex.x,posIndex.y)

        let width = size[0]
        let height = size[1]

        // || 0
        let offsetZIndex = data.zIndex
        // 位置在处于地图块的中心
        let pos = this.getPosByMapId(posIndex.x, posIndex.y)
        item.x = pos.x + (width - 1) * this.mapTiledSize / 2
        item.y = pos.y + (height - 1) * this.mapTiledSize / 2

        // item.getComponent(BaseTrigger).setOptions(data)

        item.width = width * this.mapTiledSize
        item.height = height * this.mapTiledSize

        item.zIndex = 10000 + posIndex.y * 10 + offsetZIndex

        if (this.mapTerrain[posIndex.y] && this.mapTerrain[posIndex.y][posIndex.x] == undefined) {
            debugger
        }

        let curTerrainIndex = this.getMapTerrain(posIndex.x, posIndex.y)
        let buildRange = data.buildRange

        if (!data.buildRange) {
            debugger
            return
        }

        if (curTerrainIndex < buildRange[0] || curTerrainIndex > buildRange[1]) {
            // debugger
        }

        let terrainIndex = data.terrainIndex

        // debugger
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {

                let terrainData = {
                    posIndex: cc.v2(posIndex.x + i, posIndex.y - j),
                    item: item,
                    terrainIndex: terrainIndex
                }
                this.addMapTerrain(terrainData)
            }
        }


        if (data.type != "productRes" && !data.canNotAttack && !data.monsterBuilding) {
            this.monsterAttackPropList.push(item)
        }

        return item
    }

    /**获得格子上的item */
    getTriggerByIndex(x, y): cc.Node {
        if (this.mapTerrainItem[y] && this.mapTerrainItem[y][x] && this.mapTerrainItem[y][x].length > 0) {
            let list = this.mapTerrainItem[y][x]
            return list[list.length - 1]
        }
        return null
    }

    /**获得格子上所有的item */
    getAllTriggerByIndex(x, y): cc.Node[] {
        if (this.mapTerrainItem[y] && this.mapTerrainItem[y][x] && this.mapTerrainItem[y][x].length > 0) {
            let list = this.mapTerrainItem[y][x]
            return list
        }
        return []
    }

    /** 获取玩家最近的触发器 */
    getNearTriggerByPlayer(playerCom: RoleBase) {
        if (playerCom && playerCom.node && playerCom.node.isValid) {

        }
        else {
            return null
        }
        let index = this.getMapIndex(playerCom.node.x, playerCom.node.y)
        let dir = playerCom.getPlayerLastMoveDir();
        let nrDir = dir.normalize()
        let turnFace = playerCom.dragonAnimation.node.scale > 0 ? 1 : 0;
        let searchList = []
        let firstFindY = Math.abs(nrDir.y) > Math.abs(nrDir.x) ? true : false


        searchList.push(cc.v2(0, 0))
        if (nrDir.y > 0) {
            //y方向最快则先找y方向的
            if (firstFindY) {
                searchList.push(cc.v2(0, -1))
            }

            if (turnFace > 0) {
                searchList.push(cc.v2(1, 0))
                searchList.push(cc.v2(1, -1))
                searchList.push(cc.v2(1, 1))
            }
            else {
                searchList.push(cc.v2(-1, 0))
                searchList.push(cc.v2(-1, -1))
                searchList.push(cc.v2(-1, 1))
            }

            if (!firstFindY) {
                searchList.push(cc.v2(0, -1))
            }
        }
        else {
            //y方向最快则先找y方向的
            if (firstFindY) {
                searchList.push(cc.v2(0, 1))
            }
            if (turnFace > 0) {
                searchList.push(cc.v2(1, 0))
                searchList.push(cc.v2(1, 1))
                searchList.push(cc.v2(1, -1))
            }
            else {
                searchList.push(cc.v2(-1, 0))
                searchList.push(cc.v2(-1, 1))
                searchList.push(cc.v2(-1, -1))
            }
            if (!firstFindY) {
                searchList.push(cc.v2(0, 1))
            }
        }


        for (let i = 0; i < searchList.length; i++) {
            const offset = searchList[i];
            let x = index.x + offset.x, y = index.y + offset.y
            let item = this.getTriggerByIndex(x, y)
            if (item && item.getComponent(ItemBase).getCanBossAttk()) {
                return item
            }
        }
        return null
    }


    /** 获取可以攻击的建筑 */
    getAttackBuilding(enemy) {
        let index = this.getMapIndex(enemy.x, enemy.y)
        let dir = enemy.getComponent(RoleBase).getPlayerLastMoveDir();
        let nrDir = dir.normalize()
        let turnFace = enemy.getComponent(RoleBase).getPlayerTrunFace();
        let searchList = []
        let firstFindY = Math.abs(nrDir.y) > Math.abs(nrDir.x) ? true : false

        // searchList.push(cc.v2(0,0))
        if (nrDir.y > 0) {
            //y方向最快则先找y方向的
            if (firstFindY) {
                searchList.push(cc.v2(0, -1))
            }

            if (turnFace > 0) {
                searchList.push(cc.v2(1, 0))
                searchList.push(cc.v2(1, -1))
            }
            else {
                searchList.push(cc.v2(-1, 0))
                searchList.push(cc.v2(-1, -1))
            }

            if (!firstFindY) {
                searchList.push(cc.v2(0, -1))
            }
        }
        else {
            //y方向最快则先找y方向的
            if (firstFindY) {
                searchList.push(cc.v2(0, 1))
            }
            if (turnFace > 0) {
                searchList.push(cc.v2(1, 0))
                searchList.push(cc.v2(1, 1))
            }
            else {
                searchList.push(cc.v2(-1, 0))
                searchList.push(cc.v2(-1, 1))
            }
            if (!firstFindY) {
                searchList.push(cc.v2(0, 1))
            }
        }




        //再找可操作的
        for (let i = 0; i < searchList.length; i++) {
            const offset = searchList[i];
            let terrainIndex = this.getMapTerrain(index.x + offset.x, index.y + offset.y)
            if (terrainIndex > 10) {
                let item = this.getTriggerByIndex(index.x + offset.x, index.y + offset.y)
                let tariggerData = null//item.getComponent(BaseTrigger).getData()
                if (item && tariggerData.type != "productRes" && !tariggerData.canNotAttack) {
                    return item
                }
            }

        }

    }


    getNearAttackBuilding(enemy) {
        if (!this.monsterAttackPropList) return null
        this.monsterAttackPropList.sort((a, b) => {
            if (a && a.isValid) { } else return 1
            if (b && b.isValid) { } else return -1
            let dis1 = a.position.sub(enemy.position).mag() + a.searchRadius
            let dis2 = b.position.sub(enemy.position).mag() + b.searchRadius
            a.dis = dis1
            b.dis = dis2

            return dis1 - dis2
        })

        let startPoint = this.getMapIndex(enemy.x, enemy.y)

        for (let i = 0; i < this.monsterAttackPropList.length; i++) {
            const item = this.monsterAttackPropList[i];
            if (item && item.isValid) {
                let searchData = this.getBuildingPathByIndex(startPoint, item)
                if (searchData) {
                    return searchData
                }
            }
        }

    }

    getBuildingPathByIndex(startPoint, item) {
        let tariggerData = null// item.getComponent(BaseTrigger).getData()
        let itemIndex = tariggerData.itemIndex
        let clearList = []
        let itemData = Tools.GameCfg.itemData[itemIndex]
        let size = itemData.size || [0, 0]
        for (let i = 0; i < size[0]; i++) {
            for (let j = 0; j < size[1]; j++) {
                clearList.push(cc.v2(i, -j))
            }
        }

        let endPoint = tariggerData.posIndex

        let path = Tools.PathFind.searchPathNoWall(startPoint, endPoint, clearList)
        if (path) {
            return { building: item, path: path }
        }
        return false
    }

    /** 获取可以攻击的建筑 */
    getNearAttackBuilding2(enemy) {
        let index = this.getMapIndex(enemy.x, enemy.y)
        let maxSearchNum = 100

        //从中间往四周发散寻找建筑，且找到可以寻路到的建筑
        for (let k = 1; k <= maxSearchNum; k++) {

            let curSearchNum = k
            let searchList = [-curSearchNum, curSearchNum]
            for (let i = 0; i <= curSearchNum; i++) {

                for (let j = 0; j < searchList.length; j++) {
                    let value = searchList[j]

                    let pathData = this.getBuildingPathByIndex2(index, i, value)
                    if (pathData) {
                        return pathData
                    }

                    pathData = this.getBuildingPathByIndex2(index, -i, value)
                    if (pathData) {
                        return pathData
                    }

                    pathData = this.getBuildingPathByIndex2(index, value, i)
                    if (pathData) {
                        return pathData
                    }

                    pathData = this.getBuildingPathByIndex2(index, value, -i)
                    if (pathData) {
                        return pathData
                    }

                }

            }

        }
    }

    getBuildingPathByIndex2(index, offsetX, offsetY) {
        let nextPos = cc.v2(index.x + offsetX, index.y + offsetY)
        let terrainIndex = this.getMapTerrain(nextPos.x, nextPos.y)
        if (terrainIndex == null) return false
        if (terrainIndex > 10) {
            let item = this.getTriggerByIndex(nextPos.x, nextPos.y)
            let tariggerData = null//item.getComponent(BaseTrigger).getData()
            if (item && tariggerData.type != "productRes" && !tariggerData.canNotAttack && !tariggerData.monsterBuilding) {
                //为了更好的寻路
                let itemIndex = tariggerData.itemIndex
                let clearList = []
                let itemData = Tools.GameCfg.itemData[itemIndex]
                let size = itemData.size || [0, 0]
                for (let i = 0; i < size[0]; i++) {
                    for (let j = 0; j < size[1]; j++) {
                        clearList.push(cc.v2(i, -j))
                    }
                }
                let startPoint = index
                let endPoint = tariggerData.posIndex

                let path = Tools.PathFind.searchPathNoWall(startPoint, endPoint, clearList)
                if (path) {
                    return { building: item, path: path }
                }
            }
        }
        return false
    }

    getNearCanMovePos(enemy) {
        let index = this.getMapIndex(enemy.x, enemy.y)
        let maxSearchNum = 100

        for (let k = 1; k <= maxSearchNum; k++) {

            let curSearchNum = k
            let searchList = [-curSearchNum, curSearchNum]
            for (let i = -curSearchNum; i <= curSearchNum; i++) {

                for (let j = 0; j < searchList.length; j++) {
                    let value = searchList[j]
                    const offset = cc.v2(i, value);

                    let terrainIndex = this.getMapTerrain(index.x + offset.x, index.y + offset.y)
                    if (terrainIndex == null) continue
                    if (terrainIndex >= 0 && terrainIndex < 3000) {
                        return cc.v2(index.x + offset.x, index.y + offset.y)
                    }

                }

            }

            for (let i = -curSearchNum + 1; i <= curSearchNum - 1; i++) {

                for (let j = 0; j < searchList.length; j++) {
                    let value = searchList[j]
                    const offset = cc.v2(value, i);

                    let terrainIndex = this.getMapTerrain(index.x + offset.x, index.y + offset.y)
                    if (terrainIndex == null) continue
                    if (terrainIndex >= 0 && terrainIndex < 3000) {
                        return cc.v2(index.x + offset.x, index.y + offset.y)
                    }

                }

            }
        }

    }
    /** Trigger被摧毁 */
    onTriggerDestroy(data) {
        let item = data.item
        let tariggerData = item.getComponent(ItemBase).getData()
        let posIndex = tariggerData.posIndex
        let mapIndex = tariggerData.mapIndex
        let size = [1, 1]


        //  console.log("onTriggerDestroy", posIndex.x, posIndex.y)
        // console.log(data)

        //从数据中删除
        let itemIndex = tariggerData.itemIndex
        //console.log("摧毁", itemIndex, mapIndex);


        let terrainIndex = tariggerData.terrainIndex

        for (let i = 0; i < size[0]; i++) {
            for (let j = 0; j < size[1]; j++) {
                let terrainData = {
                    posIndex: cc.v2(posIndex.x + i, posIndex.y - j),
                    item: item,
                    terrainIndex: terrainIndex
                }
                this.removeMapTerrain(terrainData)
            }
        }


        let rmIndex2 = this.allMapItemNode[mapIndex].indexOf(item)
        if (rmIndex2 != -1) {
            console.log(" 删除map " + mapIndex + " 地图的itemNode");

            this.allMapItemNode[mapIndex].splice(rmIndex2, 1)

            this.sortMapItem(mapIndex)
        }
    }

}
