
const { ccclass, property } = cc._decorator;



@ccclass
export class NodePools {
    dictPool = {}
    dictPrefab = {}

    static _instance: NodePools;

    static get Instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new NodePools();
        return this._instance;
    }

    static init() {
        return NodePools.Instance
    }


    initNodePool(prefab, num) {

        // let name = prefab.name;
        let name = prefab.nodeName;

        //没有对应对象池，创建他！
        let pool = new cc.NodePool();
        this.dictPool[name] = pool;
        this.dictPrefab[name] = prefab;

        for (let i = 0; i < num; i++) {
            let node = this.getNode(name)
            this.putNode(node)
        }

        return pool
    }

    /** 获取Pool长度 */
    getPoolNodeListLength(name) {
        if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            let pool = this.dictPool[name];
            return pool.size();

        } else {
            return 0
        }
    }

    /**
     * 根据预设从对象池中获取对应节点
     */
    getNode(name): cc.Node {
        let prefab = this.dictPrefab[name]
        let node: cc.Node = null;
        if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            let pool = this.dictPool[name];
            node = pool.get();
            if (node) {

            } else {
                node = cc.instantiate(prefab);
            }
        } else {
            //没有对应对象池，创建他！
            if (prefab) {
                let pool = new cc.NodePool();
                this.dictPool[name] = pool;

                node = cc.instantiate(prefab);
            }
            else {
                prefab = Global.Loader.getInstantiate(name);
                prefab.nodeName = name
                if (prefab) {
                    NodePools.Instance.initNodePool(prefab, 1)
                    return this.getNode(name)
                }
                else {
                    return null
                }

            }
        }
        node.nodeName = name
        // node.parent = parent;
        return node;
    }

    /**
     * 将对应节点放回对象池中
     */
    putNode(node: cc.Node) {
        // let name = node.name;
        let name = node.nodeName;
        let pool = null;
        if (this.dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            pool = this.dictPool[name];
        } else {
            //没有对应对象池，创建他！
            pool = new cc.NodePool();
            this.dictPool[name] = pool;
        }


        pool.put(node);
    }

    /**
     * 根据名称，清除对应对象池
     */
    clearPool(name: string) {
        if (this.dictPool.hasOwnProperty(name)) {
            let pool = this.dictPool[name];
            pool.clear();
        }
    }
}

