

const { ccclass, property } = cc._decorator;

@ccclass
export default class DragonSkinNode extends cc.Component {

    @property([dragonBones.DragonBonesAsset])
    skeList: dragonBones.DragonBonesAsset[] = [];

    @property([dragonBones.DragonBonesAtlasAsset])
    texList: dragonBones.DragonBonesAtlasAsset[] = [];


    private dragon: dragonBones.ArmatureDisplay;
    onLoad() {
        this.dragon = this.node.getComponent(dragonBones.ArmatureDisplay)
    }

    start() {

    }

    /**
     * 改变人物皮肤
     * @param skinIndex 
     */
    changeSkin(skinIndex: number = 0) {
        this.scheduleOnce(() => {
            let getSlots = this.dragon.armature().getSlots()
            for (let i = 0; i < getSlots.length; i++) {
                const element = getSlots[i];
                // console.log(element.name);
                if (element.name == "锄头") {
                    element.displayIndex = -1
                } else if (element.name == "影子") {
                    element.displayIndex = 0
                } else if (element.name == "韭菜") {
                    element.displayIndex = 0
                } else {
                    element.displayIndex = skinIndex
                }
            }
        })
    }

    /**改变骨骼 */
    updateSkinByIndex(index) {
        let clock = this.dragon.armature().clock;

        if (this.skeList[index]) {
            this.dragon.dragonAsset = this.skeList[index];
        }

        if (this.texList[index]) {
            this.dragon.dragonAtlasAsset = this.texList[index];
        }

        this.dragon.armature().clock = clock;
    }
}
