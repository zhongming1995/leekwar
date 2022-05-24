
import { Tools } from "../../../module/Tools";
import Game from "../../scene/Game";
import GameBedItem from "../GameBedItem";
import ItemBase from "../../ItemBase";
import MapMgr from "../../MapMgr";
import RoleBase, { playerState } from "./RoleBase";
import GameDoorItem from "../GameDoorItem";
import GameKDoorItem from "../GameKDoorItem";

enum A {
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k"
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class AIBoss extends cc.Component {


    ac = null

    aS = A.a

    aM = cc.v2(0, 0);

    aP = null

    aD = null

    aN = null

    aB = null

    aNC = null


    onLoad() {
        this.ac = this.node.getComponent(RoleBase)

    }

    start() {

    }

    mn() {
        let a = Game.Instance.allGamePlayer
        let aa = []
        for (let i = 0; i < a.length; i++) {
            let P = a[i].getComponent(RoleBase)
            if (!P.isOnBed && P.playerState != playerState.死亡 && !P.isHide) {

                if (!Tools.DataMgr.checkInHouse(a[i])) {
                    aa.push(a[i])
                }
            }
        }

        let aaa = null
        let aaaa = 10000
        for (let i = 0; i < aa.length; i++) {
            const p = aa[i];
            let d = p.position.sub(this.node.position).mag()
            if (d < aaaa) {
                aaaa = d
                aaa = p
            }
        }

        return aaa
    }

    apcc = 0
    mnn() {
        let a = Game.Instance.allGamePlayer
        let aa = this.mn()

        if (!aa) {
            let index = 0;
            do {
                aa = a[Math.floor(Math.random() * a.length)]

                index++
                if (index > 500) break
            } while (aa.getComponent(RoleBase).playerState == playerState.死亡 || aa.getComponent(RoleBase).isHide);

            let aaa = MapMgr.Instance.getMapIndex(aa.x, aa.y)
            let aaaa = MapMgr.Instance.getTriggerByIndex(aaa.x, aaa.y)
            if (aaaa && aaaa.getComponent(ItemBase).mapIndex == 4 && !Game.Instance.kDoorOpen) {
                this.apcc++
                if (this.apcc > 10) {
                    return null
                }
                return this.mnn()
            }
        }
        this.apcc = 0
        return aa
    }


    cDs = 0
    sDC = 0
    nmmn() {
        let a = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
        let aa = MapMgr.Instance.getPosByMapId(a.x, a.y)
        let aaa = cc.v2(aa.x - this.node.x, aa.y - this.node.y).normalize()
        this.aM = aaa
        this.cDs = this.sDC = 0
    }
    acc(a, e?, c?, d?) {
        if (!a) debugger
        if (!a.isValid) {
            return c && c()
        }
        let aa = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
        let aaa = MapMgr.Instance.getMapIndex(a.x, a.y)

        let aaaa = Tools.PathFind2.searchPathNoWall(aa, aaa)

        if (aaaa && aaaa.length > 0) {
            let aaaaa = aaaa[aaaa.length - 1]
            let aaaaaa = aaaa[aaaa.length - 2]

            let az = MapMgr.Instance.getPosByMapId(aaaaa.x, aaaaa.y)

            let aza = this.node.position.sub(az).mag()

            if (aza > 3 && aza < 75) {
                if (((this.node.position.sub(a.position).mag() <= (d || 92)))) {
                    this.aM.y = 0
                    this.aM.x = 0
                    this.ac.setPlayerMoveDir(this.aM)
                    e && e()
                } else {
                    if (Math.abs(this.cDs - aza) < 0.1) {
                        this.sDC++
                        if (this.sDC > 20) {
                            this.nmmn()
                        }
                    } else {
                        this.sDC = 0
                        this.cDs = aza
                    }

                    this.ac.setPlayerMoveDir(this.aM)
                }

            } else {
                let axa = MapMgr.Instance.getPosByMapId(aaaaaa.x, aaaaaa.y)
                let ass = cc.v2(axa.x - this.node.x, axa.y - this.node.y).normalize()
                this.aM = ass

                this.ac.setPlayerMoveDir(this.aM)

            }
        } else {
            if (aaaa && aaaa.length == 0) {
                if (((this.node.position.sub(a.position).mag() <= (d || 35)))) {
                    this.aM.y = 0
                    this.aM.x = 0
                    this.ac.setPlayerMoveDir(this.aM)
                    e && e()
                } else {
                    this.ac.setPlayerMoveDir(this.aM)
                }
            } else {
                c && c()
            }
        }
    }

    /**a */
    mkl() {
        if (!this.aP) {
            this.aP = this.mnn()
            if (!this.aP) return
            this.aNC = this.aP.getComponent(RoleBase)
            this.aNC.setBossAttk()
        }
        if (this.aNC.isOnBed) {
            this.nmmn()
            let a = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
            let aa = MapMgr.Instance.getTriggerByIndex(a.x, a.y)
            if (aa && aa.getComponent(ItemBase).mapIndex == 4 && !Game.Instance.kDoorOpen) {
                this.aS = A.k
            } else {
                this.aS = A.c
            }

        } else {
            this.aS = A.b
        }
    }

    lool() {
        if (!this.aD || !this.aD.isValid) {
            this.aD = Tools.DataMgr.doorNode[this.aNC.mapIndex]
        }
        if (!this.aD) {
            return this.aS = A.b
        }
        if (!this.aD.isValid) {
            this.nmmn()
            return this.aS = A.e
        }

        this.acc(this.aD, () => {
            let a = this.aD.getComponent(GameDoorItem).getDoorFlag()
            if (a) {
                this.nmmn()
                this.aS = A.e
            } else {
                this.aS = A.d
            }

        }, () => {
            let aa = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
            let aaa = MapMgr.Instance.getTriggerByIndex(aa.x, aa.y)
            if (aaa && Tools.DataMgr.doorNode[aaa.getComponent(ItemBase).mapIndex]) {
                this.aD = Tools.DataMgr.doorNode[aaa.getComponent(ItemBase).mapIndex]
                this.aS = A.c
            }
        })
    }

    lloo() {
        if (this.aP && !this.aNC.isOnBed) {
            if (!Tools.DataMgr.checkInHouse(this.aP)) {
                if (this.aD && this.aD.isValid && !this.aD.getComponent(GameDoorItem).getDoorFlag()) {
                    let a = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
                    let aa = MapMgr.Instance.getMapIndex(this.aP.x, this.aP.y)
                    let aaa = Tools.PathFind2.searchPathNoWall(a, aa)
                    if (aaa != null) {
                        this.aS = A.b
                        return
                    }
                } else {
                    this.aS = A.b
                    return
                }

            }
        }
        if (this.aD.isValid && !this.aD.getComponent(GameDoorItem).getDoorFlag()) {
            this.ac.onAttack(this.aD)
        } else {
            this.aD = null
            this.nmmn()
            if (Tools.DataMgr.doorNode[this.aNC.mapIndex]) {
                this.aS = A.c
            } else {
                this.aS = A.e
            }

        }
    }

    pp() {
        let a = null
        let aa = MapMgr.Instance.getMapIndex(this.aP.x, this.aP.y)
        let aaa = MapMgr.Instance.getTriggerByIndex(aa.x, aa.y)
        let aaaa = aaa && Tools.DataMgr.bedNode[aaa.getComponent(ItemBase).mapIndex]

        let aaaaa = Tools.DataMgr.bedNode[this.aNC.mapIndex] || aaaa
        if (!aaaaa || !aaaaa.isValid) {
            return a
        }
        let ass = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
        let aas = MapMgr.Instance.getMapIndex(aaaaa.x, aaaaa.y)

        let aaas = Tools.PathFind2.searchPathNoWall(ass, aas)

        if (aaas && aaas.length >= 2) {
            for (let i = aaas.length - 1; i > 0; i--) {
                let aq = aaas[i]
                let aqa = aaas[i - 1]
                let aqsa = aqa.sub(aq).normalize()

                let ads = false
                if (Math.abs(aqsa.x) > 0 && Math.abs(aqsa.y) > 0) {
                    aqsa.x = aqsa.x > 0 ? 1 : -1
                    aqsa.y = aqsa.y > 0 ? 1 : -1
                    ads = true
                }

                let aed = cc.v2(aq.x, aq.y)
                do {
                    aed.x += aqsa.x
                    aed.y += aqsa.y
                    let asdv = MapMgr.Instance.getTriggerByIndex(aed.x, aed.y)
                    if (asdv && asdv.getComponent(ItemBase).getCanBossAttk()) {
                        if (asdv.getComponent(GameBedItem) && ads) {
                            let node1 = MapMgr.Instance.getTriggerByIndex(aed.x - aqsa.x, aed.y)
                            let node2 = MapMgr.Instance.getTriggerByIndex(aed.x, aed.y - aqsa.y)
                            if (node1 && node2 && node1.getComponent(ItemBase).getCanBossAttk() && node2.getComponent(ItemBase).getCanBossAttk()) {
                                return node1
                            } else {
                                return asdv
                            }
                        } else {
                            return asdv
                        }
                    }
                } while (Math.ceil(aed.x) != aqa.x || Math.ceil(aed.y) != aqa.y);
            }
        }
        return a
    }

    ppp() {
        if (!this.aNC.isOnBed) {
            this.aS = A.b
            return
        }

        this.aN = this.pp()
        if (this.aN && !this.aN.getComponent(ItemBase).isDeath) {
            this.acc(this.aN, () => {
                this.aS = A.f
            })
        } else {
            this.aP = null
            this.aNC = null
            this.aD = null
            this.nmmn()
            this.aS = A.a
        }
    }


    plpo() {
        if (this.aN.isValid && !this.aN.getComponent(ItemBase).isDeath) {
            this.ac.onAttack(this.aN)
        } else {
            this.aN = null
            this.nmmn()
            this.aS = A.e
        }
    }

    uio() {
        if (!this.aB) {
            this.aB = Tools.DataMgr.bedNode[this.aNC.mapIndex]
        }
        if (!this.aB) {
            return this.aS = A.c
        }

        this.acc(this.aB, () => {
            this.aS = A.h
        }, () => {
            this.aS = A.c
        })
    }


    uiop() {
        if (this.aP && !this.aNC.isOnBed) {
            this.aS = A.b
            return
        }
        if (this.aB && this.aB.isValid && !this.aB.getComponent(ItemBase).isDeath) {
            this.ac.onAttack(this.aB)
        } else {
            this.aB = null
            this.aP = null
            this.aNC = null
            this.aD = null
            this.nmmn()
            this.aS = A.a

        }
    }


    uiyt() {
        if (this.aNC.playerState != playerState.死亡 && !this.aNC.isHide) {
            if (this.aNC.isOnBed) {
                this.aB = null
                this.aS = A.g
            } else {
                this.acc(this.aP, () => {
                    this.ac.onAttack(this.aP)
                }, () => {
                    let itemIndex = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
                    let item = MapMgr.Instance.getTriggerByIndex(itemIndex.x, itemIndex.y)
                    let itemIndex2 = MapMgr.Instance.getMapIndex(this.aP.x, this.aP.y)
                    let item2 = MapMgr.Instance.getTriggerByIndex(itemIndex2.x, itemIndex2.y)
                    if (item && item.getComponent(ItemBase).mapIndex == 4 && !Game.Instance.kDoorOpen) {
                        this.aS = A.k
                    } else if (item && Tools.DataMgr.doorNode[item.getComponent(ItemBase).mapIndex] && Tools.DataMgr.doorNode[item.getComponent(ItemBase).mapIndex].isValid) {
                        this.aD = Tools.DataMgr.doorNode[item.getComponent(ItemBase).mapIndex]
                        this.aS = A.c
                    } else if (item2 && Tools.DataMgr.doorNode[item2.getComponent(ItemBase).mapIndex] && Tools.DataMgr.doorNode[item2.getComponent(ItemBase).mapIndex].isValid) {
                        this.aD = Tools.DataMgr.doorNode[item2.getComponent(ItemBase).mapIndex]
                        this.aS = A.c
                    } else {
                        this.aS = A.a
                    }
                })
            }

        } else {
            this.aP = null
            this.aNC = null
            this.aS = A.a
        }
    }

    rty() {
        let a = Tools.DataMgr.bossAddHpNode
        let aa = null
        let aaa = 10000
        for (let i = 0; i < a.length; i++) {
            const hpNode = a[i];
            let dis = hpNode.position.sub(this.node.position).mag()
            if (dis < aaa) {
                aaa = dis
                aa = hpNode
            }
        }
        return aa
    }

    aNDa = null
    hnj() {
        if (!this.aNDa) {
            this.aNDa = this.rty()
        }

        this.acc(this.aNDa, () => {
            this.aNDa = null
            this.aS = A.j
        }, () => {
            this.aS == A.c
        }, 10)
    }

    gjg() {
        let pro = this.ac.getResumePro()
        if (this.aS == A.j) {
            if (pro >= 0.6) {
                let player = this.mn()
                if (player) {
                    this.aNC = this.aP = null
                    this.aS = A.a
                }
            }
            if (pro >= 0.95) {
                this.aNC = this.aP = null
                this.aS = A.a
            }
            return
        }

        if (pro < 0.4 && this.aS != A.i && Tools.DataMore.gameMode != "bossMode") {
            this.aS = A.i
        }
    }

    KDN = null
    fgnh() {
        let a = Tools.DataMgr.KDoor
        let aa = null
        let aaa = 10000
        for (let i = 0; i < a.length; i++) {
            const aaaa = a[i];
            let aaaaa = aaaa.position.sub(this.node.position).mag()
            if (aaaaa < aaa) {
                aaa = aaaaa
                aa = aaaa
            }
        }
        return aa
    }

    hgjgh() {
        if (!this.KDN) {
            this.KDN = this.fgnh()
        }
        if (this.KDN.getComponent(ItemBase).getDoorFlag()) {
            return this.aS = A.c
        }

        this.acc(this.KDN, () => {
            Global.Event.emit("id开煤矿门", this.KDN.getComponent(GameKDoorItem).mapData.id)
            this.KDN = null
            this.aS = A.a
        })
    }

    AKDT = 0
    IFA = true
    CDL = 0
    hgjghgff() {
        if (!this.IFA) return
        if (!this.aD || !this.aD.isValid) return
        this.IFA = false
        this.CDL = this.aD.getComponent(ItemBase).curHp
    }

    fghgfgf() {
        if (this.aD && this.aD.isValid) {
            let curHp = this.aD.getComponent(ItemBase).curHp
            if (curHp > this.CDL / 2) {
                this.nmmn()
                this.aNC = null
                this.aD = null
                this.aP = null
                this.aS = A.a
            }
        }
        this.tyuytr()
    }

    vcbfd() {
        let a = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
        let aa = MapMgr.Instance.getTriggerByIndex(a.x, a.y)
        aa && this.ac.addBossAtk(100)
    }


    ADOT = 0
    ATK2 = 0.5
    vcbcvhg() {
        this.ac.addBossAtk(1)
        this.ADOT = 0
        this.ATK2 = 1
    }

    tyuytr() {
        this.IFA = true
        this.AKDT = 0
        this.CDL = 0
    }

    C = true
    uiyuhbg() {
        if (!this.C) return
        this.C = false

        let a = []

        let aa = Game.Instance.allGamePlayer
        for (let i = 0; i < aa.length; i++) {
            const aaa = aa[i];
            let aaaa = this.node.position.sub(aaa.position).mag()
            if (aaaa <= (4 * MapMgr.Instance.mapTiledSize)) {

                let aaaaa = MapMgr.Instance.getMapIndex(this.node.x, this.node.y)
                let aaass = MapMgr.Instance.getMapIndex(aaa.x, aaa.y)
                let aaasss = Tools.PathFind2.searchPathNoWall(aaaaa, aaass)
                if (aaasss != null && !aaa.getComponent(RoleBase).isHide && aaa.getComponent(RoleBase).playerState != playerState.死亡) {
                    a.push(aaa)
                }

            }
        }

        let ssaa = null
        let sssaa = 10000
        for (let i = 0; i < a.length; i++) {
            const p = a[i];
            let sssaaa = p.position.sub(this.node.position).mag()
            if (sssaaa < sssaa) {
                sssaa = sssaaa
                ssaa = p
            }
        }

        if (ssaa) {
            this.fghfdt(ssaa)
        }


        this.scheduleOnce(() => {
            this.C = true
        }, 0.3)
    }

    fghfdt(targetNode) {
        if (targetNode == this.aP) return
        this.aP = targetNode
        this.aNC = targetNode.getComponent(RoleBase)
        this.aNC.setBossAttk()
        this.aD = null
        this.aS = A.b
    }

    update(dt) {
        if (Game.Instance.checkPause()) return
        if (!Game.Instance.isRun) return
        if (this.ac.playerState == playerState.攻击) return
        if (this.ac.playerState == playerState.眩晕) return
        if (this.ac.playerState == playerState.死亡) return
        if (this.aS == A.a) {
            this.mkl()
        } else if (this.aS == A.c) {
            this.lool()
        } else if (this.aS == A.d) {
            this.hgjghgff()
            this.lloo()
        } else if (this.aS == A.e) {
            this.ppp()
        } else if (this.aS == A.f) {
            this.plpo()
        } else if (this.aS == A.g) {
            this.uio()
        } else if (this.aS == A.h) {
            this.uiop()
        } else if (this.aS == A.b) {
            this.uiyt()
        } else if (this.aS == A.i) {
            this.hnj()
        } else if (this.aS == A.k) {
            this.hgjgh()
        }

        if (this.aS == A.d) {
            this.ATK2 = 1
            this.AKDT += dt
            this.ADOT += dt
            if (this.AKDT > 6) {
                this.fghgfgf()
            }
            if (this.ADOT > 60) {
                this.vcbfd()
            }
        } else {
            this.tyuytr()
            this.ATK2 -= dt
            if (this.ATK2 < 0) {
                this.vcbcvhg()
            }

        }

        this.gjg()

        if (this.aNC && this.aNC.isPlayer && this.aNC.isHide) {
            this.aB = null
            this.aP = null
            this.aNC = null
            this.aD = null
            this.aS = A.a
        }

        this.uiyuhbg()
    }

}