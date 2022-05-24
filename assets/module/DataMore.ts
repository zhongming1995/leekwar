import Lobby from "../Scripts/scene/Lobby";

export default class DataMore {

    /**玩家或者收割者模式    bossMode  outMode 淘汰赛*/
    gameMode: string = "playerMode"

    /**游戏结束金币奖励 */
    gameRew: number = 0;

    /**设置的匹配bossID */
    GMBossID: number = 0

    /** item图 */
    private itemSpriteList = {}

    /** TiledMap */
    private tiledMapList = {}

    public initItemSpriteList(spriteAtlas: cc.SpriteAtlas) {
        let list = spriteAtlas.getSpriteFrames();
        for (let i = 0; i < list.length; i++) {
            const spriteFrame = list[i];
            this.itemSpriteList[spriteFrame.name] = spriteFrame;
        }
    }

    public getItemSpriteByIndex(index) {
        let spite = this.itemSpriteList[index];
        if (!spite) debugger
        return spite
    }


    public initTiledMapList() {
        for (let i = 1; i <= 26; i++) {
            for (let j = 1; j <= 5; j++) {
                let mapName = "map_" + i + "_" + j
                /*  cc.loader.loadRes("map/" + mapName, (err, map) => {
                     this.tiledMapList[mapName] = map
                 }); */
                this.loadMapRes(mapName)
            }
        }
    }

    mapBg = {}
    initMapBg() {
        for (let i = 1; i <= 5; i++) {
            let mapName = "mapbg_" + i
            /* cc.loader.loadRes("map/" + mapName, cc.SpriteFrame, (err, map) => {
                this.mapBg[mapName] = map
            }); */
            this.loadMapSprite(mapName)
        }
    }

    loadMapCount: number = 0
    loadMapRes(mapName) {
        cc.loader.loadRes("map/" + mapName, (err, map) => {
            this.tiledMapList[mapName] = map
            this.loadMapCount++
            if (this.loadMapCount >= 130) {
                Lobby.mapLoadEnd = true
            }
        });
    }

    loadMapSprite(mapName) {
        cc.loader.loadRes("map/" + mapName, cc.SpriteFrame, (err, map) => {
            this.mapBg[mapName] = map
        });
    }

    public getMapBgMapByMap(map) {
        let mapName = "mapbg_" + map
        let mapBg = this.mapBg[mapName];
        if (!mapBg) debugger
        return mapBg
    }

    public getTiledMapByIndex(index, map) {
        let mapName = "map_" + index + "_" + map
        let tiledMap = this.tiledMapList[mapName];
        if (!tiledMap) debugger
        return tiledMap
    }

}