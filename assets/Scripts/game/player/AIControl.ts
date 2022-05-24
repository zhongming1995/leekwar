import { Tools } from "../../../module/Tools";
import Game from "../../scene/Game";
import GameBedItem from "../GameBedItem";
import GameDoorItem from "../GameDoorItem";
import ItemBase, { itemType } from "../../ItemBase";
import MapMgr from "../../MapMgr";
import RoleBase, { playerState } from "./RoleBase";

enum AA {
    "aa",
    "ac",
    "asd",
    "sda",
    "sadas",
    "sdsafsd",
    "sdfsdfsds",
    "sdfdgdf",
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class AIControl extends cc.Component {


    asd = null

    asds = AA.aa


    asfs = null

    dfg = 1

    public dfdgdf = cc.v2(0, 0);


    public fghfg = null

    public jyttfg = null

    public jyuyf = null

    public uyiuioiul = ["金刚盾", "隐匿药水", "麻醉烟雾"]

    onLoad() {
        this.asd = this.node.getComponent(RoleBase)

        this.asfs = Tools.DataMgr.getRandomAiData()

        this.dfg = this.asfs.delay

        this.uyiuioiul.splice(Math.floor(Math.random() * this.uyiuioiul.length), 1)

        if (Tools.DataMore.gameMode == "bossMode") {
            this.iuiuopppp = 40
        }


        Global.Event.on("解救玩家", this.dsfdgfgfhgf, this)
        Global.Event.on("弹跳结束", this.sdfdsfdsgdfasdsadsadas, this)
    }

    sdfdsfdsgdfasdsadsadas(playerNode) {
        if (this.node != playerNode) return
        let a = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
        let aaa = MapMgr.Instance.getTriggerByIndex(a.x, a.y)
        if (aaa && aaa.getComponent(ItemBase).itemIndex != "1004") {
            let aaaa = Tools.DataMgr.bedNode[aaa.getComponent(ItemBase).mapIndex]
            if (aaaa) {
                this.sdfdbfg78()
                this.fghfg = aaaa
                this.jyuyf = null
                this.asds = AA.ac
            }
        }
    }

    dsfdgfgfhgf() {
        if (this.asd.playerState == playerState.死亡) {
            this.jyuyf = this.jyttfg = this.fghfg = null

            this.asds = AA.aa
            this.asd.playerState = playerState.待机
            this.sdfdbfg78()
        }

        if (this.asds == AA.sda || this.asds == AA.sadas) {
            Game.Instance.removeSaveGamePlayer(this.node)
            this.asds = AA.aa
        }
    }

    dgfguyi() {
        if (Game.Instance.playerDeathCount <= 0) {
            if (this.asds == AA.sda || this.asds == AA.sadas) {
                Game.Instance.removeSaveGamePlayer(this.node)
                this.asds = AA.aa
            }
        }
    }

    protected onDestroy(): void {
        Global.Event.removeAllListeners(this)
    }

    start() {
        this.jkhfgbfgn6()
    }

    uyiyufds = -1
    jkhfgbfgn6() {
        let a = Tools.DataMgr.getRandomMapIndex()
        while (this.uyiyufds == a || a == MapMgr.Instance.playerBedIndex) {
            a = Tools.DataMgr.getRandomMapIndex()
        }
        Tools.DataMgr.removeMapIndex(this.uyiyufds)
        this.uyiyufds = a
    }


    utydfsv = 0
    zxsadas = 0
    sdfdbfg78() {
        let a = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
        let aa = MapMgr.Instance.getPosByMapId(a.x, a.y)
        let aaa = cc.v2(aa.x - this.node.x, aa.y - this.node.y).normalize()
        this.dfdgdf = aaa
        this.utydfsv = this.zxsadas = 0
    }

    fdggdfhfgsad3434(aaac, aass?, sddd?, ddsaa?) {
        if (!aaac) debugger
        if (!aaac.isValid) {
            return sddd && sddd()
        }
        let sdd = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
        let fdgfda = MapMgr.Instance.getMapIndex(aaac.x, aaac.y)

        let sadfsgdfgh = Tools.PathFind.searchPathNoWall(sdd, fdgfda)

        if (sadfsgdfgh && sadfsgdfgh.length > 0) {
            let tyubfgd = sadfsgdfgh[sadfsgdfgh.length - 1]
            let dgdfgdfgdf = sadfsgdfgh[sadfsgdfgh.length - 2]

            let qqwewqqqw = MapMgr.Instance.getPosByMapId(tyubfgd.x, tyubfgd.y)
            let lololkj = this.node.position.sub(qqwewqqqw).mag()
            if (lololkj > 3 && lololkj < 75) {
                if (((this.node.position.sub(aaac.position).mag() <= (ddsaa || 92)))) {
                    this.dfdgdf.y = 0
                    this.dfdgdf.x = 0
                    this.asd.setPlayerMoveDir(this.dfdgdf)
                    aass && aass()
                } else {

                    if (Math.abs(this.utydfsv - lololkj) < 0.1) {
                        this.zxsadas++
                        if (this.zxsadas > 20) {
                            this.sdfdbfg78()
                        }
                    } else {
                        this.zxsadas = 0
                        this.utydfsv = lololkj
                    }

                    this.asd.setPlayerMoveDir(this.dfdgdf)
                }

            } else {

                let hfjyuikil = MapMgr.Instance.getPosByMapId(dgdfgdfgdf.x, dgdfgdfgdf.y)
                let iusfsdfsdfwe = cc.v2(hfjyuikil.x - this.node.x, hfjyuikil.y - this.node.y).normalize()

                this.dfdgdf = iusfsdfsdfwe

                this.asd.setPlayerMoveDir(this.dfdgdf)


            }
        } else {
            if (sadfsgdfgh && sadfsgdfgh.length == 0) {
                if (((this.node.position.sub(aaac.position).mag() <= (ddsaa || 35)))) {
                    this.dfdgdf.y = 0
                    this.dfdgdf.x = 0
                    this.asd.setPlayerMoveDir(this.dfdgdf)
                    aass && aass()
                } else {
                    this.asd.setPlayerMoveDir(this.dfdgdf)
                }
            } else {
                sddd && sddd()
            }
        }
    }

    hyutujngfhfd() {
        let gfdhgfhgfhgf = null
        if (!this.jyttfg && !this.jyuyf) {
            this.jyuyf = Tools.DataMgr.doorNode[this.uyiyufds]
            gfdhgfhgfhgf = this.jyuyf
        } else if (this.jyttfg) {
            gfdhgfhgfhgf = this.jyttfg
        } else {
            gfdhgfhgfhgf = this.jyuyf
        }
        this.fdggdfhfgsad3434(gfdhgfhgfhgf, () => {
            this.dfgfdbvvn6(gfdhgfhgfhgf)
        }, () => {
            this.rgdfasdwwe(gfdhgfhgfhgf)
        })
    }

    dfgfdbvvn6(gyrttyjytjyu) {
        let htyuytuyt = gyrttyjytjyu.getComponent(GameDoorItem).getDoorFlag()
        if (!htyuytuyt) {
            Tools.DataMore.gameMode == "outMode" && gyrttyjytjyu.getComponent(GameDoorItem).setDoorFlag(true)
        }
        this.rgdfasdwwe(gyrttyjytjyu)
    }

    rgdfasdwwe(fdhtyjyujuk) {
        this.sdfdbfg78()
        if (fdhtyjyujuk == this.jyuyf) {
            this.fghfg = Tools.DataMgr.bedNode[this.uyiyufds]
            this.jyuyf = null
            this.asds = AA.ac
        } else {
            this.jyuyf = Tools.DataMgr.doorNode[this.uyiyufds]
            this.jyttfg = null
            this.asds = AA.aa
        }
    }

    rsdfssafwegrjt() {
        if (!this.fghfg) debugger

        this.fdggdfhfgsad3434(this.fghfg, () => {
            this.ytuuio099()
        }, () => {
            let uyiuiopoop = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
            let sdsdfdvbcv = MapMgr.Instance.getTriggerByIndex(uyiuiopoop.x, uyiuiopoop.y)
            if (!sdsdfdvbcv) {
                this.asds = AA.aa
                return
            }
            this.jyttfg = Tools.DataMgr.doorNode[sdsdfdvbcv.getComponent(ItemBase).mapIndex]
            this.jkhfgbfgn6()
            this.asds = AA.aa
        })
    }

    ytutyvgdfd = true
    rdfrghytjtyuas1() {
        if (!this.ytutyvgdfd) return
        this.ytutyvgdfd = false

        let xcvcbvbnmng = false
        let iuouidfdsfsa = Tools.DataMgr.doorNode[this.asd.mapIndex]
        if (iuouidfdsfsa && iuouidfdsfsa.isValid && this.asfs.atkToBuildDoor) {
            xcvcbvbnmng = iuouidfdsfsa.getComponent(ItemBase).doorHurt
        }

        let dgdfgfdghgfhyjuysa = MapMgr.Instance.allMapItemNode[this.asd.mapIndex]
        for (let i = 0; i < dgdfgfdghgfhyjuysa.length; i++) {
            const weqwretyytui = dgdfgfdghgfhyjuysa[i];
            if (!weqwretyytui.active) continue
            let mnmnnmnmnmn = weqwretyytui.getComponent(ItemBase)
            let opopololo = mnmnnmnmnmn.getData()
            let qweqwdscxvdfbfgghnhjgh = mnmnnmnmnmn.nextPropData



            let adscxvfgghfdfas = true
            let awqs = 0
            if (opopololo.itemType == itemType.房间底) {
                adscxvfgghfdfas = Tools.DataMgr.checkcount(this.asd.mapIndex, itemType.武器, this.asfs.countDataType)
                if (!adscxvfgghfdfas) {
                    adscxvfgghfdfas = Tools.DataMgr.checkcount(this.asd.mapIndex, itemType.书, this.asfs.countDataType)
                    awqs = 1
                }
                if (!adscxvfgghfdfas) {
                    adscxvfgghfdfas = Tools.DataMgr.checkcount(this.asd.mapIndex, itemType.手机, this.asfs.countDataType)
                    awqs = 2
                }
            }

            if (!xcvcbvbnmng && (opopololo.itemType == itemType.武器 || opopololo.itemType == itemType.书 || opopololo.itemType == itemType.床)) {
                if (!qweqwdscxvdfbfgghnhjgh) continue
                if (opopololo.itemType == itemType.武器) {
                    let ilililillllll = Tools.DataMgr.doorNode[this.asd.mapIndex]
                    if (!ilililillllll || !ilililillllll.isValid) {
                        continue
                    }
                    let liiiiiiiiiiiii = ilililillllll.getComponent(ItemBase).getData().lv
                    if (liiiiiiiiiiiii <= opopololo.lv) {
                        continue
                    }

                    if (this.asfs.weaponLimitLv) {
                        if (Game.Instance.gameBoss && Game.Instance.gameBoss.getComponent(RoleBase).data.lv <= opopololo.lv) {
                            continue
                        }
                    }

                }
                if (Tools.DataMgr.checkCanBuy(qweqwdscxvdfbfgghnhjgh.cost, this.asd) && Tools.DataMgr.checkCondition(qweqwdscxvdfbfgghnhjgh.condition, this.asd.mapIndex)) {
                    qweqwdscxvdfbfgghnhjgh.cost.gold && this.asd.addPlayerGold(-qweqwdscxvdfbfgghnhjgh.cost.gold)
                    qweqwdscxvdfbfgghnhjgh.cost.Knowledge && this.asd.addPlayerLight(-qweqwdscxvdfbfgghnhjgh.cost.Knowledge)
                    mnmnnmnmnmn.onLevelUP()
                    break
                }
            } else if (!xcvcbvbnmng && opopololo.itemType == itemType.房间底 && adscxvfgghfdfas) {
                let qqwqaax = null
                if (opopololo.mapData.weapon && awqs == 0) {
                    qqwqaax = Tools.JosnCfg.weaponData[0]
                } else if (!opopololo.mapData.weapon && awqs == 1) {
                    qqwqaax = Tools.JosnCfg.bookData[0]
                } else if (!opopololo.mapData.weapon && awqs == 2) {
                    qqwqaax = Tools.JosnCfg.phoneData[0]
                } else {
                    continue
                }
                let dsgbzazazaza = qqwqaax.cost
                if (Tools.DataMgr.checkCanBuy(dsgbzazazaza, this.asd)) {

                    dsgbzazazaza.gold && this.asd.addPlayerGold(-dsgbzazazaza.gold)
                    dsgbzazazaza.Knowledge && this.asd.addPlayerLight(-dsgbzazazaza.Knowledge)

                    mnmnnmnmnmn.onDestroyItem(false);
                    let buildingNode = MapMgr.Instance.newMapItem({
                        posIndex: opopololo.posIndex,
                        itemIndex: qqwqaax.itemIndex,
                        mapIndex: opopololo.mapIndex
                    })
                    break
                }
            } else if (opopololo.itemType == itemType.门) {
                if (!qweqwdscxvdfbfgghnhjgh) continue
                if (this.asfs.freeToDoorLevelUp && Game.Instance.gameBoss && Game.Instance.gameBoss.getComponent(RoleBase).data.lv > opopololo.lv) {
                    mnmnnmnmnmn.onLevelUP()
                    continue
                }

                if (qweqwdscxvdfbfgghnhjgh.aiCondition &&
                    Tools.DataMgr.getMapItemMaxLv(qweqwdscxvdfbfgghnhjgh.aiCondition.type, this.asd.mapIndex) < qweqwdscxvdfbfgghnhjgh.aiCondition.limitLv) {
                    continue
                }

                if (Tools.DataMgr.checkCanBuy(qweqwdscxvdfbfgghnhjgh.cost, this.asd) && Tools.DataMgr.checkCondition(qweqwdscxvdfbfgghnhjgh.condition, this.asd.mapIndex)) {
                    qweqwdscxvdfbfgghnhjgh.cost.gold && this.asd.addPlayerGold(-qweqwdscxvdfbfgghnhjgh.cost.gold)
                    qweqwdscxvdfbfgghnhjgh.cost.Knowledge && this.asd.addPlayerLight(-qweqwdscxvdfbfgghnhjgh.cost.Knowledge)
                    mnmnnmnmnmn.onLevelUP()
                    break
                }
            } else if (!xcvcbvbnmng && opopololo.itemType == itemType.床) {
                if (!qweqwdscxvdfbfgghnhjgh) continue
                if (qweqwdscxvdfbfgghnhjgh.aiCondition &&
                    Tools.DataMgr.getMapItemMaxLv(qweqwdscxvdfbfgghnhjgh.aiCondition.type, this.asd.mapIndex) < qweqwdscxvdfbfgghnhjgh.aiCondition.limitLv) {
                    continue
                }
                if (Tools.DataMgr.checkCanBuy(qweqwdscxvdfbfgghnhjgh.cost, this.asd) && Tools.DataMgr.checkCondition(qweqwdscxvdfbfgghnhjgh.condition, this.asd.mapIndex)) {
                    qweqwdscxvdfbfgghnhjgh.cost.gold && this.asd.addPlayerGold(-qweqwdscxvdfbfgghnhjgh.cost.gold)
                    qweqwdscxvdfbfgghnhjgh.cost.Knowledge && this.asd.addPlayerLight(-qweqwdscxvdfbfgghnhjgh.cost.Knowledge)
                    mnmnnmnmnmn.onLevelUP()
                    break
                }
            }
        }

        this.scheduleOnce(() => {
            this.ytutyvgdfd = true
        }, this.dfg)
    }

    ytuuio099() {
        if (this.fghfg.getComponent(GameBedItem).getBedFlag()) {
            this.fghfg.getComponent(GameBedItem).setBedFlag(false, this.node)
            this.asds = AA.asd
            this.asd.setPlayerMoveDir(cc.v2(0, 0))
        } else {
            let aaasds = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
            let dfhgfhghjgh = MapMgr.Instance.getTriggerByIndex(aaasds.x, aaasds.y)
            if (dfhgfhghjgh) {
                this.jyuyf = Tools.DataMgr.doorNode[dfhgfhghjgh.getComponent(ItemBase).mapIndex]
            }
            this.sdfdbfg78()
            this.jyttfg = this.jyuyf
            this.jyuyf = null
            this.jkhfgbfgn6()
            this.asds = AA.aa
        }
    }

    rewrwertryt5() {
        if (this.asd.isOnBed) {
            this.fghfg.getComponent(GameBedItem).setBedFlag(true, null)
        }
    }

    yuiiiii = null
    rgdfvbvcxsd3() {
        if (this.yuiiiii) return this.yuiiiii
        let ytyuicvcxz = Tools.DataMgr.saveNode
        let zxxzxzxzzxzx = 10000
        let xzcxvcbvnnbgh = null
        for (let i = 0; i < ytyuicvcxz.length; i++) {
            const wwwww = ytyuicvcxz[i];
            let wewewew = wwwww.position.sub(this.node.position).mag()
            if (wewewew < zxxzxzxzzxzx) {
                zxxzxzxzzxzx = wewewew
                xzcxvcbvnnbgh = wwwww
            }
        }

        return xzcxvcbvnnbgh
    }

    sdfsd1212() {
        this.yuiiiii = this.rgdfvbvcxsd3()
        this.fdggdfhfgsad3434(this.yuiiiii, () => {
            this.asds = AA.sadas
            this.yuiiiii = null
        }, () => {
            let ghgghkkkkk = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
            let kkkllggg = MapMgr.Instance.getTriggerByIndex(ghgghkkkkk.x, ghgghkkkkk.y)
            let aasssccc = null
            if (!kkkllggg) {
                aasssccc = Tools.DataMgr.doorNode[this.uyiyufds]
            } else {
                aasssccc = Tools.DataMgr.doorNode[kkkllggg.getComponent(ItemBase).mapIndex]
            }

            aasssccc && this.fdggdfhfgsad3434(aasssccc, () => {
                let ewrewrewerwrwewewe = aasssccc.getComponent(GameDoorItem).getDoorFlag()
                if (!ewrewrewerwrwewewe) {

                }
            }, () => {

            })
        }, 10)
    }


    wqqqq = true
    sferteryrty343() {
        this.wqqqq = false

        let ewqe3 = Game.Instance.allSaveGamePlayer.length

        let percent = this.asfs.save
            + (Tools.DataMgr.saveGold >= (this.asfs.money * this.sdfsdfgdfhyuj777()) ? this.asfs.moneyP : 0)
            + (ewqe3 == 1 ? this.asfs.oneP : 0)
            + (ewqe3 == 2 ? this.asfs.twoP : 0)
            + (ewqe3 >= 3 ? this.asfs.threeP : 0)

        if (percent >= Math.random() * 100) {
            Game.Instance.addSaveGamePlayer(this.node)
            this.asds = AA.sda
            this.rewrwertryt5()
        }

        this.scheduleOnce(() => {
            this.wqqqq = true
        }, this.dfg)
    }

    sdfsdfgdfhyuj777() {
        let dsfretre5 = 0, ffdgtr6 = Game.Instance.allGamePlayer
        for (let i = 0; i < ffdgtr6.length; i++) {
            let player = ffdgtr6[i]
            dsfretre5 += player.getComponent(RoleBase).addSaveNum
        }

        return dsfretre5 / Game.Instance.allGamePlayer.length
    }

    dfgdfgh7j() {
        let tyhtyuyi898 = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
        let lili1231 = MapMgr.Instance.getTriggerByIndex(tyhtyuyi898.x, tyhtyuyi898.y)
        if (!lili1231) {
            return true
        }
        let dsfdsfsd111 = Tools.DataMgr.doorNode[lili1231.getComponent(ItemBase).mapIndex]
        if (dsfdsfsd111 && dsfdsfsd111.isValid && !dsfdsfsd111.getComponent(ItemBase).getDoorFlag()) {
            return false
        }

        return true

    }

    yuiuynbm = null
    dsfsd43sdfsd() {
        if (this.asd.playerState == playerState.弹跳) return

        let nnnnn888 = Game.Instance.gameSmallBoss.concat(Game.Instance.gameBoss)
        for (let i = 0; i < nnnnn888.length; i++) {
            const sdfsdfsdf4 = nnnnn888[i];
            let sdfdsbgh7 = this.node.position.sub(sdfsdfsdf4.position).mag()
            if (!sdfsdfsdf4.getComponent(RoleBase).isVertigo && sdfdsbgh7 <= (this.asfs.minDis * MapMgr.Instance.mapTiledSize) && this.dfgdfgh7j()) {
                this.yuiuynbm = sdfsdfsdf4
                return this.asds = AA.sdsafsd
            }
        }

        if (this.asds == AA.sdsafsd) {
            let dis = this.node.position.sub(this.yuiuynbm.position).mag()
            if (dis > (this.asfs.runDis * MapMgr.Instance.mapTiledSize) || this.yuiuynbm.getComponent(RoleBase).isVertigo) {
                this.sdfdbfg78()
                return this.asds = AA.aa
            }
        }
    }

    dsfsdfs232df() {
        if (!this.yuiuynbm || !this.yuiuynbm.isValid) return
        let dgdfgn = cc.v2(this.node.x - this.yuiuynbm.x, this.node.y - this.yuiuynbm.y).normalize()
        let fdgfghhjkj = cc.v2(0, 0)
        if (Math.abs(dgdfgn.x) > Math.abs(dgdfgn.y)) {
            fdgfghhjkj.x = dgdfgn.x > 0 ? 1 : -1
            fdgfghhjkj.y = 0
        } else {
            fdgfghhjkj.y = dgdfgn.y > 0 ? 1 : -1
            fdgfghhjkj.x = 0
        }

        if (!this.asd.checkRoleMove(fdgfghhjkj.x * 5, fdgfghhjkj.y * 5)) {
            fdgfghhjkj = this.asd.checkCanMove(dgdfgn.x * 5, dgdfgn.y * 5)
        }
        if (fdgfghhjkj.mag() == 0) {
            this.scheduleOnce(this.dgdfgdfsd232, this.dfg)
        } else {
            this.unschedule(this.dgdfgdfsd232)
            this.asd.setPlayerMoveDir(fdgfghhjkj)
        }
    }

    dgdfgdfsd232() {
        if (this.asds == AA.sdsafsd) {
            this.asds = AA.aa
        }
    }

    uiuiuir = true
    dsfdse3234dfds() {
        if (!this.uiuiuir) return
        this.uiuiuir = false
        let fdgjudf = Game.Instance.gameSmallBoss.concat(Game.Instance.gameBoss)
        for (let i = 0; i < fdgjudf.length; i++) {
            const sdsdf4 = fdgjudf[i];
            let sdfsdfsd222 = this.node.position.sub(sdsdf4.position).mag()
            if (sdfsdfsd222 <= (3 * MapMgr.Instance.mapTiledSize) && this.dfgdfgh7j()) {
                this.sfsdfsdawe324kjgh()
            }
        }
        this.scheduleOnce(() => {
            this.uiuiuir = true
        }, 1)
    }

    iuiuopppp = 60
    saaad = true
    sfsdfsdawe324kjgh() {
        if (!this.saaad) return
        this.saaad = false
        if (this.uyiuioiul.length > 0) {
            let dfgfjkju = this.uyiuioiul[Math.floor(Math.random() * this.uyiuioiul.length)]
            switch (dfgfjkju) {
                case "金刚盾":
                    this.asd.useDun()
                    break;
                case "隐匿药水":
                    this.asd.useWater()
                    break;
                case "麻醉烟雾":
                    this.asd.useSmoke()
                    break;
                default:
                    debugger
                    break;
            }
        }

        this.scheduleOnce(() => {
            this.saaad = true
        }, this.iuiuopppp)
    }

    aaaxxx = true
    trytyuiu8986ghngf() {
        if (!this.aaaxxx) return
        this.aaaxxx = false
        let fdgdfhfg = Tools.DataMgr.doorNode[this.asd.mapIndex]
        if (!fdgdfhfg || !fdgdfhfg.isValid) {
            this.rewrwertryt5()
            this.sfsdfsdawe324kjgh()
            this.jyuyf = null
            this.jkhfgbfgn6()
            this.asds = AA.aa
        }

        this.scheduleOnce(() => {
            this.aaaxxx = true
        }, 0.5)
    }

    ilil = true
    lili = true
    dgfdhio8976ughf(type: number) {
        switch (type) {
            case 1:
                if (this.lili) {
                    this.lili = false
                    Math.random() > 0.7 && this.asd.showMsgByType(1)
                }
                break;
            case 2:
                if (this.ilil) {
                    this.ilil = false
                    Math.random() > 0.7 && this.asd.showMsgByType(2)
                }
                break;
            default:
                debugger
                break;
        }
    }

    lilili = 0.5
    ililil = true
    rgterlilhg5() {
        if (Tools.DataMore.gameMode != "outMode") return
        if (!this.ililil) return
        this.ililil = false

        let fdgfdghfh = Tools.DataMgr.doorNode[this.asd.mapIndex]
        let doorFlag = fdgfdghfh && fdgfdghfh.isValid && fdgfdghfh.getComponent(GameDoorItem).getDoorFlag()
        if (doorFlag) {
            this.yuiklui898jll()
        }
        this.scheduleOnce(() => {
            this.ililil = true
        }, this.lilili)
    }

    ili = true
    yuiklui898jll() {
        if (!this.ili) return
        this.scheduleOnce(() => {
            if (this.asd.isOnBed) {
                let gfhghkhjklkjf = Tools.DataMgr.doorNode[this.asd.mapIndex]
                let sdfsdf = gfhghkhjklkjf && gfhghkhjklkjf.getComponent(GameDoorItem).getDoorFlag()
                if (sdfsdf) {
                    this.lilill = gfhghkhjklkjf
                    this.rewrwertryt5()
                    this.asds = AA.sdfdgdf
                }
            }
            this.ili = true
        }, Math.floor(Math.random() * 5) + 10)
    }

    lilill = null
    fghfgghml343gfd() {
        this.fdggdfhfgsad3434(this.lilill, () => {
            let fdgfju = this.lilill.getComponent(GameDoorItem).getDoorFlag()
            if (fdgfju) {
                this.lilill.getComponent(GameDoorItem).setDoorFlag(false)
            }
            this.fghfg = Tools.DataMgr.bedNode[this.uyiyufds]
            this.asds = AA.ac
        }, () => {
            debugger
        })
    }

    lllllli = 0
    update(dt) {
        // return
        if (Game.Instance.checkPause()) return
        if (this.asd.playerState == playerState.死亡) return
        if (this.asd.playerState == playerState.弹跳) return
        if (this.asds == AA.aa) {
            this.hyutujngfhfd()
        } else if (this.asds == AA.ac) {
            this.rsdfssafwegrjt()
        } else if (this.asds == AA.asd) {
            this.rdfrghytjtyuas1()
        } else if (this.asds == AA.sda) {
            this.dgfdhio8976ughf(2)
            this.sdfsd1212()
        } else if (this.asds == AA.sdfsdfsds) {
        } else if (this.asds == AA.sdsafsd) {
            this.dgfdhio8976ughf(1)
            this.dsfsdfs232df()
        } else if (this.asds == AA.sdfdgdf) {
            this.fghfgghml343gfd()
        } else if (this.asds == AA.sadas) {

        }

        this.ilil = this.asds != AA.sda
        this.lili = this.asds != AA.sdsafsd

        if (this.wqqqq && this.asds != AA.sda && this.asds != AA.sdfsdfsds && Game.Instance.playerDeathCount > 0) {
            Tools.DataMore.gameMode != "outMode" && this.sferteryrty343()
        }

        if (!this.asd.isOnBed && Game.Instance.isRun && !this.asd.isDun && !this.asd.isHide) {
            this.dsfdse3234dfds()
            this.dsfsd43sdfsd()
        }

        if (this.asds == AA.sda) {
            this.lllllli += dt
            if (this.lllllli >= this.asfs.maxTime) {
                this.lllllli = 0
                this.asds = AA.aa
            }
        }

        if (this.asd.isOnBed && this.saaad) {
            this.trytyuiu8986ghngf()
        }


        if (this.asds == AA.asd) {
            this.rgterlilhg5()
        }

    }



}