
export default class DataBase {

    public _id = '';
    public id = '';
    public openid = '';
    public token = '';

    private readonly Storage_Key = "gtfc_1.0.1"

    /**isCheck误点开关 0开启,1关闭 */
    public isCheck = 0;
    /**isClick狂点开关 0开启,1关闭 */
    public isClick = 0;
    /**isAlert导流开关 0开启,1关闭 */
    public noShowUI = 0;
    /**endClick结束时狂点开关 0开启,1关闭 */
    public endClick = 0;
    /**gameCheck游戏中误点开关 0开启,1关闭 */
    public gameCheck = 0;

    /**显示关注开关 0开启,1关闭 */
    public isProfile = 0

    /**时间增加字段控制：zs_line_num  0为关闭   默认60  （表示60分钟展示离线收益） */
    public zs_line_num = 60;

    /**原生Native 0开启,1关闭 */
    public native = 0;

    /**钱1 快乐币*/
    public gold1Count = 100;
    /**钱2 碎片*/
    public gold2Count = 100;
    /**钱3 */
    public gold3Count = 0;

    /**当前使用的皮肤编号 */
    public playerSkin = 1

    /**当前使用的boss皮肤编号 */
    public bossSkin = 1

    /**已解锁的皮肤编号 */
    public havePlayerSkin = [1]

    /**已解锁的boss皮肤编号 */
    public haveBossSkin = [1]

    /**拥有的道具数量 */
    public propData = { "镰刀": 0, "咒术封印": 0, "修复机": 0, "冰箱": 0, "麻痹电网": 0, "荆棘": 0, "速冻光线": 0, "致命陷阱": 0, "急速鞋": 0, "金刚盾": 0, "隐匿药水": 0, "麻醉烟雾": 0, "狂暴": 0, "干扰": 0 }

    public usePropData = null;

    /**任务完成次数 */
    public taskCount = { "glodTask": 0, "saveTask": 0 }

    /**排位段位数据 lv段位 rank级数 star星数 addStar增加的星星*/
    public levelData1 = { lv: 0, rank: 0, star: 0, maxRank: 3, maxStar: 2, addStar: 0 }

    /**wx引导步骤 */
    wxGuideIndex: number = 0

    /**存档时间 */
    public saveTime = 0;
    /**读档的存档时间 */
    public saveTime2 = 0;
    /**签到时间 */
    public signTime = 0;
    /**签到天数 */
    public signCount = 0;

    /**每天分享次数 */
    public shareCount = 0;

    /**桌面进入领取金币 */
    isGetDeskGold: boolean = false

    notice_3: boolean = false

    /**boss模式观看视频次数 */
    bossVideoCount: number = 0

    /**大逃杀模式观看视频次数 */
    outVideoCount: number = 0

    //数据初始化
    init(_id, id, openid, token) {
        this._id = _id;
        this.id = id;
        this.openid = openid;
        this.token = token;
    }

    addGold1(num) {
        this.gold1Count += Math.round(num);
        this.saveData();
        Global.Event.emit('刷新钱', 1);
    }
    addGold2(num) {
        this.gold2Count += Math.round(num);
        this.saveData();
        Global.Event.emit('刷新钱', 2);
    }
    addGold3(num) {
        this.gold3Count += Math.round(num);
        this.saveData();
        Global.Event.emit('刷新钱', 3);
    }

    //存档
    saveData() {
        this.saveTime = this.saveTime2 || Date.now();
        let str = JSON.stringify(this);
        cc.sys.localStorage.setItem(this.Storage_Key, str);
    }

    //读档
    readData() {
        // cc.sys.localStorage.clear()
        // return this.setDefData();
        let str = cc.sys.localStorage.getItem(this.Storage_Key);
        console.log('读取缓存结果', str);
        if (!str || str == '' || str == '{}') return this.setDefData();
        let data = JSON.parse(str);
        console.log('转换str结果', data);

        this.gold1Count = data.gold1Count || 0;
        this.gold2Count = data.gold2Count || 0;
        this.gold3Count = data.gold3Count || 0;

        data.propData && (this.propData = data.propData)
        data.usePropData && (this.usePropData = data.usePropData)
        data.taskCount && (this.taskCount = data.taskCount)

        data.levelData1 && (this.levelData1 = data.levelData1)

        data.notice_3 && (this.notice_3 = data.notice_3)

        data.bossVideoCount && (this.bossVideoCount = data.bossVideoCount)
        data.outVideoCount && (this.outVideoCount = data.outVideoCount)
        data.wxGuideIndex && (this.wxGuideIndex = data.wxGuideIndex)

        // this.wxGuideIndex = 0
        this.playerSkin = data.playerSkin || this.playerSkin;
        this.bossSkin = data.bossSkin || this.bossSkin;

        this.havePlayerSkin = data.havePlayerSkin || this.havePlayerSkin;
        this.haveBossSkin = data.haveBossSkin || this.haveBossSkin;


        this.saveTime = data.saveTime || 0;
        this.saveTime2 = data.saveTime || 0;
        this.signTime = data.signTime || 0;
        this.signCount = data.signCount || 0;

        this.shareCount = data.shareCount || 0;
        data.isGetDeskGold && (this.isGetDeskGold = data.isGetDeskGold)

        this.setDefData();
    }

    //初始化默认数据
    setDefData() {
        if (Global.Common.calcDetailDay(new Date(this.saveTime), new Date()) >= 1) {
            this.shareCount = 0
            this.isGetDeskGold = false
        }
    }

    /**获得离线时间 */
    getOffLineTime() {
        if (this.saveTime2 == 0) {
            return { min: 0, sec: 0 }
        }
        let date = Date.now();
        let sec = (date - this.saveTime2) / 1000
        // console.log(min);
        let min = Math.floor(sec / 60)
        return { min: min > 120 ? 120 : min, sec: Math.floor(sec % 60) }
    }


}