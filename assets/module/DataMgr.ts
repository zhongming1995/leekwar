import ItemBase, { itemType } from "../Scripts/ItemBase";
import MapMgr from "../Scripts/MapMgr";
import RoleBase from "../Scripts/game/player/RoleBase";
import Game from "../Scripts/scene/Game";
import { Tools } from "./Tools";
import GameUI from "../Scripts/scene/GameUI";

export default class DataMgr {

    /**保存格子广告信息 */
    public nativeAD = [];

    /**匹配的玩家信息 */
    public matchPlayer = [];

    /**韭菜模式玩家胜利mvp信息 */
    public mvpPlayer: cc.Node[] = [];

    /**匹配的僵尸信息 */
    public matchCorpse = null

    /**游戏所有床 */
    public bedNode = {}

    /**游戏所有门 */
    public doorNode = {}

    /**游戏所有门 */
    public createDoorNode = {}

    /**游戏营救点 */
    public saveNode = []

    /**游戏boss回血点 */
    public bossAddHpNode = []

    /**营救赏金 */
    public saveGold: number = 0

    /**煤矿门 */
    public KDoor = []

    /**进入游戏界面次数 */
    gameCount: number = 0

    /**游戏结算次数 */
    gameOverCount: number = 0

    /**是否首次游戏结束 */
    isFirstGameOver = false;

    reSet() {
        this.matchPlayer = []
        this.mvpPlayer = []
        this.matchCorpse = null
        this.bedNode = {}
        this.doorNode = {}
        this.createDoorNode = {}
        this.allTargetMapIndex = []
        this.saveNode = []
        this.bossAddHpNode = []
        this.saveGold = 0
        this.KDoor = []
        this.aiDataIndex = 0
    }

    /**随机一个玩家名字 */
    getPlayerName() {
        let playerName = Tools.GameCfg.playerName
        return playerName[Math.floor(Math.random() * playerName.length)]
    }

    allTargetMapIndex: number[] = []
    /**随机一个目标mapIndex */
    getRandomMapIndex() {
        let targetMapIndex = Math.floor(Math.random() * Tools.GameCfg.mapData.length)
        while (this.allTargetMapIndex.includes(targetMapIndex) || targetMapIndex == 4) {
            targetMapIndex = Math.floor(Math.random() * Tools.GameCfg.mapData.length)
        }
        this.allTargetMapIndex.push(targetMapIndex)
        return targetMapIndex
    }

    removeMapIndex(mapIndex: number) {
        let rmIndex = this.allTargetMapIndex.indexOf(mapIndex)
        if (rmIndex != -1) {
            this.allTargetMapIndex.splice(rmIndex, 1)
        }
    }

    /**
     * 获得皮肤
     * @param skinId 皮肤id
     */
    getPlayerSkin(skinId) {
        Tools.DataBase.playerSkin = skinId

        if (!Tools.DataBase.havePlayerSkin.includes(skinId)) {
            Tools.DataBase.havePlayerSkin.push(skinId)
        }

        Tools.DataBase.saveData();
    }

    /**
     * 获得boss皮肤
     * @param skinId 皮肤id
     */
    getBossSkin(skinId) {
        Tools.DataBase.bossSkin = skinId

        if (!Tools.DataBase.haveBossSkin.includes(skinId)) {
            Tools.DataBase.haveBossSkin.push(skinId)
        }

        Tools.DataBase.saveData();
    }

    /**随机一个皮肤id */
    getRandomSkinID() {
        let playerData = Tools.GameCfg.playerData
        let skinId = playerData[Math.floor(Math.random() * playerData.length)].skinId
        let playerSkin = Tools.DataBase.playerSkin
        let check: boolean = false
        if (playerSkin != 8 && playerSkin != 9 && playerSkin != 10 && playerSkin != 11 && playerSkin != 13) {
            check = true
        }
        while (check && (skinId == 8 || skinId == 9 || skinId == 10 || skinId == 11 || skinId == 13)) {
            skinId = playerData[Math.floor(Math.random() * playerData.length)].skinId
        }
        return skinId
    }

    /**根据类型获得配置的item数据 */
    getItemDataByItemType(type) {
        let itemData = []
        switch (type) {
            case itemType.床:
                itemData = Tools.JosnCfg.bedData
                break;
            case itemType.门:
                itemData = Tools.JosnCfg.doorData
                break;
            case itemType.房间底:

                break;
            case itemType.武器:
                itemData = Tools.JosnCfg.weaponData
                break;
            case itemType.书:
                itemData = Tools.JosnCfg.bookData
                break;
            case itemType.手机:
                itemData = Tools.JosnCfg.phoneData
                break;
            case itemType.维修:
                itemData = Tools.GameCfg.repairData
                break;
            case itemType.防御:
                itemData = Tools.JosnCfg.defenseData
                break;
            case itemType.攻击:
                itemData = Tools.JosnCfg.attkData
                break;
            default:
                break;
        }

        return itemData
    }


    /**
     * 检查限制条件
     * @param conditionData 限制条件
     * @param mapIndex 地图index
     * @returns 
     */
    checkCondition(conditionData, mapIndex: number) {
        let canOperate = true
        if (conditionData) {
            canOperate = false
            let mapNode: cc.Node[] = MapMgr.Instance.allMapItemNode[mapIndex]
            for (let i = 0; i < mapNode.length; i++) {
                const node = mapNode[i];
                let itemData = node.getComponent(ItemBase).getData()
                if (itemData.itemType == conditionData.type && itemData.lv >= conditionData.limitLv) {
                    canOperate = true
                    break
                }
            }
        }

        return canOperate
    }

    /**
     * 检查限制条件
     * @param countData 限制条件
     * @param mapIndex 地图index
     * @param type 检查类型
     * @returns 
     */
    checkcount(mapIndex: number, type, aiType) {
        let countData = Tools.DataMgr.bedNode[mapIndex].getComponent(ItemBase).nextPropData.countData[aiType]
        let canOperate = false
        let mapData = {}
        let mapNode: cc.Node[] = MapMgr.Instance.allMapItemNode[mapIndex]
        for (let i = 0; i < mapNode.length; i++) {
            const node = mapNode[i];
            let itemData = node.getComponent(ItemBase).getData()
            if (!mapData[itemData.itemType]) {
                mapData[itemData.itemType] = 1
            } else {
                mapData[itemData.itemType]++
            }
        }
        if (countData[type] && (countData[type] > (mapData[type] || 0))) {
            canOperate = true
        }

        return canOperate
    }

    /**
     * 获得地图当前类型item
     * @param itemType item类型
     * @param mapIndex 地图index
     * @returns 
     */
    getMapItemByType(itemType, mapIndex: number) {
        let itemNode = []
        let mapNode: cc.Node[] = MapMgr.Instance.allMapItemNode[mapIndex]
        for (let i = 0; i < mapNode.length; i++) {
            const node = mapNode[i];
            let itemData = node.getComponent(ItemBase).getData()
            if (itemData.itemType == itemType) {
                itemNode.push(node)
            }
        }

        return itemNode
    }

    /**
     * 获得地图当前类型item的最大等级
     * @param itemType item类型 
     * @param mapIndex 地图index
     */
    getMapItemMaxLv(itemType, mapIndex: number) {
        let maxLv = 0
        let itemNodeArr: cc.Node[] = this.getMapItemByType(itemType, mapIndex)
        for (let i = 0; i < itemNodeArr.length; i++) {
            const itemNode = itemNodeArr[i];
            let itemData = itemNode.getComponent(ItemBase).getData()
            if (itemData.lv && itemData.lv > maxLv) {
                maxLv = itemData.lv
            }
        }

        return maxLv
    }

    /**
     * 能否购买
     * @param cost {gold ,Knowledge} 
     * @returns 
     */
    checkCanBuy(cost, pCom: RoleBase) {
        return (!cost.gold || pCom.getPlayerGold() >= cost.gold) && (!cost.Knowledge || pCom.getPlayerLight() >= cost.Knowledge)
    }

    /**根据地图id获得player */
    getPlayerByMapIndex(mapIndex: number) {
        return Game.Instance.mapPlayerData[mapIndex]
    }

    aiDataIndex = 0
    /**随机aiData */
    getRandomAiData() {
        this.aiDataIndex++
        let len = Tools.JosnCfg.aiData.length
        let index = Math.floor(Math.random() * len)
        if (this.aiDataIndex >= 5) {
            index = len - 3 + Math.floor(Math.random() * 3)
        }
        return Tools.JosnCfg.aiData[index]
    }

    /**根据名字获得道具数量 */
    getPropNum(name: string) {
        return Tools.DataBase.propData[name] || 0
    }

    /**根据名字获得道具数量 */
    usePropByName(name: string) {
        if (Tools.DataBase.propData[name] > 0) {
            Tools.DataBase.propData[name]--
            Tools.DataBase.saveData()
            return true
        }
        return false
    }

    addPropByName(name: string, addNum: number = 1) {
        if (!Tools.DataBase.propData[name]) {
            Tools.DataBase.propData[name] = 0
        }

        Tools.DataBase.propData[name] += addNum
        Tools.DataBase.saveData()
    }

    /**
     * 道具能否生效
     * @param mapIndex 
     * @returns 
     */
    checkPropActive(mapIndex: number) {
        let bedNode = Tools.DataMgr.doorNode[mapIndex]
        return bedNode && bedNode.isValid
    }

    /**玩家是否在房间 */
    checkInHouse(player: cc.Node) {
        let itemIndex = MapMgr.Instance.getMapIndex(player.x, player.y)
        let item: cc.Node = MapMgr.Instance.getTriggerByIndex(itemIndex.x, itemIndex.y)
        if (!item || (item && (item.getComponent(ItemBase).mapIndex == -1) || (item.getComponent(ItemBase).mapIndex == 4 && Game.Instance.kDoorOpen))) {
            return false
        }
        return true
    }

    mapIndexArr = { "1*-1": 0, "0*-1": 1, "-1*-1": 2, "1*0": 3, "0*0": 4, "-1*0": 5, "1*1": 6, "0*1": 7, "-1*1": 8 }
    /**获得节点的地图index */
    getNodeMapIndex(targetNode: cc.Node) {
        let posId = MapMgr.Instance.getMapIndex(targetNode.x, targetNode.y)
        let mapIndex = MapMgr.Instance.getCurMapPosId(posId.x, posId.y)
        return this.mapIndexArr[mapIndex.x + "*" + mapIndex.y] || -1
    }

    /**是否双倍 */
    checkDouble(mapIdnex: number) {
        let p = Game.Instance.mapPlayerData[mapIdnex]
        return p && Game.Instance.gamePlayerCom && Game.Instance.gamePlayerCom.mapIndex == mapIdnex && GameUI.Instance.addSpeedTime > 0
    }

    /**取一个boss传送点 */
    getBossCSPos() {
        let targetNode = null
        for (let i = 0; i < this.saveNode.length; i++) {
            const saveNode: cc.Node = this.saveNode[i];
            if (saveNode.getComponent(ItemBase).targetPlayer) {
                targetNode = saveNode
                break
            }
        }

        if (!targetNode) {
            targetNode = this.saveNode[Math.floor(Math.random() * this.saveNode.length)]
        }

        return MapMgr.Instance.getMapIndex(targetNode.x, targetNode.y)
    }

    levelData = [{ rank: 3, star: 2 }, { rank: 4, star: 3 }, { rank: 5, star: 4 }, { rank: 5, star: 5 }, { rank: 5, star: 6 }, { rank: 1, star: 99 }]

    /**增加星星 */
    addStar() {
        let levelData = Tools.DataBase.levelData1
        levelData.star++
        if (levelData.star >= this.levelData[levelData.lv].star) {//升级
            levelData.star = 0
            levelData.rank++
        }
        if (levelData.rank >= this.levelData[levelData.lv].rank) {//升段位
            levelData.rank = 0
            levelData.lv++
            levelData.maxStar = this.levelData[levelData.lv].star
            levelData.maxRank = this.levelData[levelData.lv].rank

        }
        console.log(levelData);

        Tools.DataBase.saveData()
    }

    /**减少星星 */
    subStar() {
        let levelData = Tools.DataBase.levelData1
        levelData.star--
        if (levelData.star <= 0) {//降级
            levelData.rank--
            levelData.star = this.levelData[levelData.lv].star
        }
        if (levelData.rank < 0) {//降段位
            if (levelData.lv > 0) {
                levelData.lv--
                levelData.rank = this.levelData[levelData.lv].rank - 1
                levelData.star = this.levelData[levelData.lv].star
                levelData.maxStar = this.levelData[levelData.lv].star
                levelData.maxRank = this.levelData[levelData.lv].rank
            } else {
                levelData.star = 0
                levelData.rank = 0
            }
        }
        Tools.DataBase.saveData()
    }

    /**获得boss模式观看视频次数 */
    getBossVCount() {
        return Tools.DataBase.bossVideoCount
    }

    /**增加boss模式看视频次数 */
    addBossVCount() {
        Tools.DataBase.bossVideoCount++
        Tools.DataBase.saveData()
    }

    /**获得大逃杀模式观看视频次数 */
    getOutVCount() {
        return Tools.DataBase.outVideoCount
    }

    /**增加大逃杀模式看视频次数 */
    addOutVCount() {
        Tools.DataBase.outVideoCount++
        Tools.DataBase.saveData()
    }

    /**是否需要引导 */
    checkGuideByIndex(index: number) {
        return Tools.DataBase.wxGuideIndex == index && Tools.DataMore.gameMode == "playerMode" && (Global.Platform.isWeb || Global.Platform.isWechat)
    }

}