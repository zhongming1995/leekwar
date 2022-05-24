

const { ccclass, property } = cc._decorator;

class MapInfo {
    public version = false;
    public x = 0;
    public y = 0;
    public links = null;
    public linksLength = 0;
    public parent = null;
    public nowCost = 0;
    public mayCost = 0;
    public next = null;
    public pre = null;
    public dist = 0;

    constructor(nx, ny) {
        this.x = nx;
        this.y = ny;
    }
    /** 将四周加入 */
    addLinks(obj, mapObj) {
        this.links = [];
        // if (this.x > 0) {
        this.addL((this.x - 1), this.y, obj, mapObj);
        // }
        // if (this.y > 0)
        // {
        this.addL(this.x, (this.y - 1), obj, mapObj);
        // }
        this.addL((this.x + 1), this.y, obj, mapObj);
        this.addL(this.x, (this.y + 1), obj, mapObj);
    }

    addL(tx, ty, obj, mapObj) {
        let id = ty + "*" + tx;
        if (mapObj[id] == null) { //如果未加入，就加入
            if (obj[id] == null) {
                obj[id] = new MapInfo(tx, ty);
                this.links[this.links.length] = obj[id];
                this.linksLength++;
            }
        }
    }
}




/** 在线预览 */
//http://qiao.github.io/PathFinding.js/visual/
/**
 * https://www.jianshu.com/p/e52d856e7d48
 * A*原理
 * 选择路径中经过哪个方格的关键是下面这个等式：

    F = G + H

    这里：
    G = 从起点A，沿着产生的路径，移动到网格上指定方格的移动耗费。
    H = 从网格上那个方格移动到终点B的预估移动耗费。这经常被称为启发式的

    曼哈顿方法，它计算从当前格到目的格之间水平和垂直的方格的数量总和，忽略对角线方向。然后把结果乘以10。这被成为曼哈顿方法

    令水平或者垂直移动的耗费为10，对角线方向耗费为14

    路径是通过反复遍历开启列表并且选择具有最低F值的方格来生成的。

    为了继续搜索，我们简单的从开启列表中选择F值最低的方格。

    4．把它从开启列表中删除，然后添加到关闭列表中。

    5．检查所有相邻格子。跳过那些已经在关闭列表中的或者不可通过的地形，把他们添加进开启列表，如果他们还不在里面的话。把选中的方格作为新的方格的父节点。

    6．如果某个相邻格已经在开启列表里了，检查现在的这条路径是否更好。换句话说，检查如果我们用新的路径到达它的话，G值是否会更低一些。如果不是，那就什么都不做。


    A*方法总结

    好，现在你已经看完了整个说明，让我们把每一步的操作写在一起：

    把起始格添加到开启列表。

    重复如下的工作：

    a) 寻找开启列表中F值最低的格子。我们称它为当前格。

    b) 把它切换到关闭列表。

    c) 对相邻的8格中的每一个？

    如果它不可通过或者已经在关闭列表中，略过它。反之如下。

    如果它不在开启列表中，把它添加进去。把当前格作为这一格的父节点。记录这一格的F,G,和H值。

    如果它已经在开启列表中，用G值为参考检查新的路径是否更好。更低的G值意味着更好的路径。如果是这样，就把这一格的父节点改成当前格，并且重新计算这一格的G和F值。如果你保持你的开启列表按F值排序，改变之后你可能需要重新对开启列表排序。

    d) 停止，当你

    把目标格添加进了开启列表，这时候路径被找到，或者

    没有找到目标格，开启列表已经空了。这时候，路径不存在。

    保存路径。从目标格开始，沿着每一格的父节点移动直到回到起始格。这就是你的路径。



 * 
 * 
 * 
 * 
 */

@ccclass
export default class PathFind {


    private mapObj = {}
    init(mapObj) {
        this.mapObj = mapObj
    }

    searchPath(startPoint, endPoint) {
        return this.search(this.mapObj, startPoint, endPoint)
    }

    /**
     *  寻找指定障碍物 
     * @param startPoint 
     * @param endPoint 
     * @param clearList 
     * @returns 
     */
    searchPathNoWall(startPoint, endPoint, clearList?) {
        let curMapObj = Global.Common.deepCopy(this.mapObj)
        curMapObj[startPoint.y + "*" + startPoint.x] = null
        curMapObj[endPoint.y + "*" + endPoint.x] = null

        if (clearList) {
            for (let i = 0; i < clearList.length; i++) {
                const curPos = clearList[i];
                curMapObj[(endPoint.y + curPos.y) + "*" + (endPoint.x + curPos.x)] = null

            }

        }

        return this.search(curMapObj, startPoint, endPoint, 20000)
    }

    /** 开始A*寻路 障碍表,起点，终点*/
    search(mapObj, startPoint, endPoint, findMax = 10000) { // 
        let curMapObj = mapObj
        if (curMapObj[startPoint.y + "*" + startPoint.x] != null) {
            return [];
        }

        // let findMax=10000;//搜索上限  
        findMax = 1000
        let mapArr = {};//Dictionary<string, MapInfo>
        let startNode = new MapInfo(startPoint.x, startPoint.y);
        let endNode = new MapInfo(endPoint.x, endPoint.y);

        let openBase = Math.abs(startPoint.x - endPoint.x) + Math.abs(startPoint.y - endPoint.y);
        let open = [null, null];
        open[0] = startNode;
        startNode.version = true;
        startNode.nowCost = 0;

        let findeCount = 0;//寻找次数
        let current, linkLength, links, i, f, t, test; //用于循环的临时变量
        while (true) {
            findeCount++;
            if (findeCount >= findMax) {
                // console.log("  超出上限  未找到路线");

                //超出上限代表没找到
                return null;
            }
            current = open[0]; //当前节点
            open[0] = current.next;
            if (open[0] != null) open[0].pre = null;
            if (current.x == endNode.x && current.y == endNode.y)//抵达终点
            {
                return this.prunePath(curMapObj, startNode, current);//输出路径;
            }
            if (current.links == null) { //将周围四个加入开启路径
                current.addLinks(mapArr, curMapObj);
            }
            links = current.links; //当前的4个

            linkLength = current.linksLength;
            for (i = 0; i < linkLength; i++) {
                test = links[i];//测试的四个面
                f = current.nowCost + 1;
                if (!test.version) {
                    test.version = true;
                    test.parent = current;
                    test.nowCost = f;
                    test.dist = Math.abs(endPoint.x - test.x) + Math.abs(endPoint.y - test.y);//到终点的距离
                    f += test.dist;
                    test.mayCost = f;//估计的消耗	
                    f = (f - openBase) >> 1;
                    test.pre = null;
                    test.next = open[f];//保存下一步
                    if (open[f] != null) open[f].pre = test;
                    // if (open[f].x == endNode.x&& open[f].y == endNode.y) open[f].pre = test;
                    open[f] = test;
                } else {
                    if (test.pre != null) test.pre.next = test.next;
                    if (test.next != null) test.next.pre = test.pre;
                    if (open[1] == test) open[1] = test.next;

                    test.parent = current;
                    test.nowCost = f;
                    test.mayCost = f + test.dist;//加下终点绝对值
                    test.pre = null;
                    test.next = open[0];
                    if (open[0] != null) open[0].pre = test;
                    open[0] = test;
                }
            }
            if (open[0] == null) {
                if (open[1] == null) {
                    // debugger
                    break;
                }
                t = open[0];
                open[0] = open[1];
                open[1] = t;
                openBase += 2;
            }
        }

    }

    prunePath(mapObj, startNode, endNode) {

        let findPath = []

        if (startNode.x == endNode.x && startNode.y == endNode.y) return findPath;

        let current = endNode;
        let dx = current.x - endNode.x;
        let dy = current.y - endNode.y;
        let cx, cy, t, t2;

        while (true) {
            if (current.x == startNode.x && current.y == startNode.y) {
                findPath[findPath.length] = cc.v2(current.x, current.y);

                return findPath;
            }
            t = current.parent;
            cx = current.x;
            cy = current.y;
            if (t != startNode) {
                t2 = t.parent;
                if (Math.abs(t2.x - cx) == 1 && Math.abs(t2.y - cy) == 1 && mapObj[cy + "*" + t2.x] == null && mapObj[t2.y + "*" + cx] == null) {
                    t = t2;
                }
            }
            if (t.x - cx == dx && t.y - cy == dy) {
                current = t;
            } else {
                dx = t.x - cx;
                dy = t.y - cy;
                findPath[findPath.length] = cc.v2(current.x, current.y);
                current = t;
            }
        }

    }



}