interface __requestObj {
    path?: string;
    route?: string;
    data?: any;
    cb?: Function;
    reconnect?: boolean,
    url?: string
}
/**
 * 网络请求库
 */
declare class Http {
    /** 
     * 默认url
     */
    defaultUrl: string;
    /**
     * 设置初始参数
     * @param _id 用户id
     * @param token 用户缓存
     */
    setOptions(_id: string, token: string): void;
    /**
     * 自动附加登陆参数的请求
     */
    loginGet(options: __requestObj): XMLHttpRequest;
    /**
     * 正常服务器请求
     */
    get(options: __requestObj): XMLHttpRequest;
    /**
     * 任意外部请求
     * @param url 地址
     * @param cb 回调函数 cb(err,res)
     */
    getUrl(url: string, cb: Function): XMLHttpRequest;
}

/**
 * 缓存加载库
 */
declare class Loader {
    /** 初始化配置 */
    init(resCfg: any): void;

    /**
     * 加载Bundle
     * @param bundle 组名 加载后会自动加载resource中的bundle列表
     * @param completeCallback 结束回调
     * @param progressCallback 进度回调
     */
    loadBundle(name: string, completeCallback: (bd: cc.AssetManager.Bundle, assets: Array<any>) => void, progressCallback?: Function);

    /**
     * 加载Bundle 不限制类型
     * @param bdname bundle名，下载完成后 直接加载根目录
     * @param urls 需要自行加载的非resources中的列表
     * @param completeCallback 结束回调
     * @param progressCallback 进度回调
     */
    loadBundleRes(bdname: string, urls: Array<string>, completeCallback: (bd: cc.AssetManager.Bundle, assets: Array<any>) => void, progressCallback: any);

    /**
     * 加载Bundle 限制只能加载预制件
     * @param groupName bundle名，下载完成后 
     * @param relativePath bundle下的相对目录 默认为 '/' 即为根目录所有
     * @param completeCallback 结束回调
     * @param progressCallback 进度回调
     */
    loadBundleDir(name: string, relativePath: string, completeCallback: (bd: cc.AssetManager.Bundle, assets: Array<any>) => void, progressCallback?: Function);

    /**
     * 加载组
     * @param groupName 组名
     * @param completeCallback 结束回调
     * @param progressCallback 进度回调
     */
    loadResources(groupName: string, completeCallback: Function, progressCallback?: Function);
    /**
     * 自定义加载数组
     * @param urls 数组
     * @param progressCallback 进度回调
     * @param completeCallback 结束回调
     */
    loadResourcesArray(urls: Array<string>, completeCallback: Function, progressCallback: Function)

    /**
     * 添加到缓存表
     * @param name 缓存名
     * @param prefab 预制件
     */
    addPrefab(name: string, prefab: cc.Prefab)

    /**
     * 释放缓存中的预制件
     * @param name 缓存表中，默认跟路径一样
     */
    releaseResUrl(name: string);

    /**
     * 获取缓存中的资源
     * @param name 名字
     */
    get(name: string): cc.Prefab;
    /**
     * 自动实例化
     * @param name 名字
     */
    getInstantiate(name: string): cc.Node;
    /** 
     * 加载本地图片
     * @param url resource相对路径
     * @param sprite 自动设置的精灵
     * @param cb 回调 cb(err,res) res为cc.SpriteFrame
     */
    loadResourcesImage(url: string, sprite: cc.Sprite, cb?: Function);
    /**
     * 加载网络图片
     * @param url 网络地址
     * @param sprite 自动设置的精灵
     * @param cb 回调 cb(err,res) res为cc.Texture
     */
    loadNetworkImage(url: string, sprite: cc.Sprite, cb?: Function);
    /**
     * 清空缓存
     * @param isClean 是否释放资源
     */
    reset(isClean: boolean);
}

declare class Common {
    /**
     * 数值区域限制
     * @param n 限制的值
     * @param min 最小值
     * @param max 最大值
     */
    clamp(n: number, min: number, max: number): number;
    /** 雷同于Object.assign */
    assign(obj1: any, obj2: any): void;
    /**
     * 根据长度切割字符串
     * @param text 字符
     * @param cutlen 长度 例如 10
     */
    subSectionString(text: string, cutlen: number): void;

    /**
     * 深拷贝
     * @param o 新字符
     * @param c 源字符
     */
    deepCopy(o: any, c?: any): any;
    /**
     * 字符串序列化
     * @param str format  如 "下标{0},值{1}"
     * @param arg 参数
     */
    stringFormat(str: string, ...arg: any[]);
    /**
     * 返回两点间的角度
     */
    getAngle(p1: cc.Vec2, p2: cc.Vec2): number;
    /**
     * 解析带注释的json字符串
     * @param d 字符串可cc.JsonAsset
     */
    readJson(d: string | cc.JsonAsset): any;
    /**
     * 计算两个时间相差的天数
     */
    calcDetailDay(time1: Date, time2: Date): number;
    /**
     * 代码向button添加事件回调
     */
    addButtonHandler(target: cc.Component, btnNode: cc.Button, func: string, tag: any)
    /**
     * 获取随机中间值
     * @param min 最小值
     * @param max 最大值
     */
    getRandom(min, max);
    /**
     * 随机打乱数组顺序
     * @param arr 数组
     */
    shuffle(arr: Array<any>);
    getLocation
}

declare class EventA {
    /**
     * 监听事件
     * @param eventName 事件名
     * @param fun 回调函数
     * @param target 回调对象
     */
    on(eventName: string, fun: Function, target: any);
    /**
     * 取消监听事件 只有一个参数的话，取消该事件名的所有监听
     * @param eventName 事件名
     * @param fun 回调函数
     * @param target 回调对象
     */
    off(eventName: string | any, fun?: Function, target?: any);
    /**
     * 触发事件
     * @param eventName 事件名
     * @param args 参数
     */
    emit(eventName: string, ...args: any[]);
    /**
     * 移除所有监听
     * @param eventName string依据事件名，否则依据target
     */
    removeAllListeners(eventName: string | any);
    /**
     * 监听一次性事件
     * @param eventName 事件名
     * @param fun 回调函数
     * @param target 回调对象
     */
    once(eventName: string, fun: Function, target: any);
    /**
     * 清空 
     * */
    clean();
}

declare class AudioA {
    musicVolume: number;
    soundVolume: number;
    musicOpen: number;
    soundOpen: number;
    vibrateOpen: number;
    /**
     * 播放背景音乐
     * @param chip 路径
     * @param cb 回调
     * @param volume 大小
     */
    playMusic(chip: string, cb?: Function, volume?: number): void;
    /**
     * 播放音效
     * @param chip 路径
     * @param cb 回调
     * @param volume 大小
     */
    playSound(chip: string, cb?: Function, volume?: number): void;
    /** 停止背景音乐 */
    stopMusic(): void;
}

interface _alertOption {
    title: string,
    message: string,
    isMask?: boolean,  //是否有半透明遮罩
    okText?: string, //按钮文字
    closeText?: string, //取消文字
    okFunction?: Function,
    closeFunction?: Function
}

declare class UIManger {
    pushScene(url: string, script: any = null, data: any = null);
    pushWindow(url: string, script: any = null, data: any = null);
    pushWindowTop(url: string, script: any = null, data: any = null);
    popWindow(node?: cc.Node);
}
declare class UIMgr {
    /**
     * 提示文字 UI/ToolTip
     * @param message 消息
     * @param duration 时间 默认2
     * @param y 高度 默认0
     */
    tooltip(message: string, duration?: number, y?: number);
    /**
     * 弹窗提示
     * @param opt 
     */
    alert(opt: _alertOption);

    /**
     * 强行添加UI到UI层
     * @param url 路径
     */
    addUI(url: string): cc.Node;

    /**
     * 添加一层UI
     * @param name 路径
     * @param script 脚本类名
     * @param options 参数
     */
    pushUI(name: string, script?: string, options?: any);
    /**
     * 添加一个弹窗
     * @param name 路径
     * @param script 脚本类名
     * @param options 参数
     */
    pushWindow(name: string, script?: string, options?: any);
    /**
     * 获取所有弹出窗口
     * @param name 如果有名字，则只取同名的
     */
    getAllWindow(name?: string): Array<cc.Node>;

    addWindow(name: string, script?: string, options?: any);

    /**
     * 删除顶层UI
     */
    popUI(): void;
    /**
     * 删除顶层弹窗
     * @param node 检测相等
     */
    popWindow(node?)
    delWindow(node?)
}

declare class Platform {
    readonly __className__: string;
    readonly name: string;
    readonly isWeb: boolean;
    readonly isWechat: boolean;
    readonly isTouTiao: boolean;
    readonly isQuTouTiao: boolean;
    readonly isVivo: boolean;
    readonly isOppo: boolean;
    readonly isQQ: boolean;
    readonly isBaiDu: boolean;
    readonly isHuaWei: boolean;
    readonly isAndroid: boolean;
    readonly isIOS: boolean;

    readonly config: any;
    bannerAD: any;
    videoAd: any
    bannerCfg: any;
    interstitialAd: any
    getLaunchData(): any;
    getReferrer(): any;
    /** 自动登陆 */
    autoLogin(cb: Function): void;
    /** 创建用户信息按钮 */
    getUserInfo(x: number, y: number, width: number, height: number, url: String, cb: Function): any;
    /** 删除登陆按钮 */
    destroyLoginButton(): void;
    /** 分享 */
    share(option?: any, cb?: Function): void;
    /** 短振动 短震动 */
    vibrateLong(): void;
    /** 长振动 长震动 */
    vibrateShort(): void;

    reportData();

    /** 预先创建banner后使用 */
    showBanner(adName: string, width?: number, height?: number): void;
    /** 创建banner并直接显示 */
    showBannerPos(adName: string, wwidth: number, hheight: number, x: number, y: number): void;
    /** 销毁banner */
    destroyBanner(scene: string): void;

    /**视频广告 */
    showRewardVideo(aid: String, cb: Function, failcb?: Function): void;
    /**预加载视频广告 */
    preLoadVideo(aid: String)
    /** 插屏广告 */
    showInterstitial(cb?: Function): void;
    /**录屏 */
    startRecord(time: number): void;
    /** 停止录屏 */
    stopRecord(): void;
    /**
     * 盒子广告
     * @param name 名字，如果没有则随机
     * @param cb 关闭回调
     */
    createAppBox(name: string, cb?): void;

    /**
     * 开始录制声音
     * @param time 
     */
    startRecordVoice(time: number)
    /**
     * 停止录音
     */
    stopRecordVoice()
}

declare class Statics {
    static dictionary: any;
    static flows: Array<any>;
    static registerTimeTick: number;

    static readonly openid: string;
    //初始化参数
    static init(url: string, gid: number, secret: string, platform: string): void;
    //注册或登陆
    static register(openid: string, referrerInfoAppId: string, version: string, cb: Function): void;
    static login(openid: string, version: string, cb: Function): void;


    static addFlowCount(data: any): void;
    static addFlowOpenCount(data: any): void;
    /** 添加渠道统计事件 */
    static addEvent(eventName: any): void;
    static userEvent(eventName: any): void;
    static requestSubscribeMessage(cb: any): void;
    static saveCacheData(cache: string): void;
    static get(route: string, data: any, cb: Function, path?: string): void;
}

declare enum TTHost {
    头条 = 0,
    抖音,
    皮皮虾,
    火山,
    西瓜,
    开发工具
}

declare class PlatformTouTiao extends Platform {
    Host: TTHost;
    shareVideoPath: string;
    recordMgr: any;
    isRecording: boolean;
}

declare class PlatformVivo extends Platform {
    showNativeAD(adName: string, cb?: Function);
}

declare class PlatformOppo extends Platform {
    showNativeAD(adName: string, cb?: Function);
}

declare enum Android_Channel {
    DEFAULT = 0,
    穿山甲,
    "233乐园",
}

declare class PlatformAndroid extends Platform {
    /** 当前渠道 */
    static channel: Android_Channel;
    /**
     * 设置广告配置渠道
     * @param c Android_Channel
     */
    setChannel(c: Android_Channel): void;
}

declare module Global {
    interface _alertOption {
        title: string,
        message: string,
        isMask?: boolean,  //是否有半透明遮罩
        okText?: string, //按钮文字
        closeText?: string, //取消文字
        okFunction?: Function,
        closeFunction?: Function
    }


    function Log(msg: string | any, ...subst: any[]): void;
    /** 开启所有统计 时长 */
    function OpenStatics();

    /** 平台的类 */
    var api: any;
    var Event: EventA;
    var Http: Http;
    var Loader: Loader;
    var Common: Common;
    var Audio: AudioA;
    var UIMgr: UIMgr;
    var Platform: Platform;
    var Statics: Statics;
    var isCheck: any;
    var isClick: any;
    var native: any;
    var UIManger: UIManger;
    var canClick: boolean;
    var Debugger: boolean;
    var miniScreen: boolean;
    /** 初始化框架 */
    function _init(platformcfg: any);
}


/**
 * 框架事件监听
 */
declare class GlobalEvent {
    /**
     * 平台onShow的监听
     */
    static readonly API_ON_SHOW: string;
    /**
     * 平台onHide的监听
     */
    static readonly API_ON_HIDE: string;
    /**
     * 平台视频播放成功的监听
     */
    static readonly API_VIDEO_SUCCESS: string;
    /**
     * 平台视频播放成功的监听
     */
    static readonly API_VIDEO_FAIL: string;
    /**
     * 平台Banner创建成功监听
     */
    static readonly API_BANNER_RESIZE: string;
    /**
     * 平台Banner创建失败监听
     */
    static readonly API_BANNER_ERROR: string;
    /**
     * 平台Banner加载完成
     */
    static readonly API_BANNER_ONLOAD: string;
    /**
     * 各平台录屏完成
     */
    static readonly RECORD_END: string;
    /**
     * UI层级有变动监听
     */
    static readonly UI_WINDOW_CHANGE: string;
    /**
     * 框架中的提示
     */
    static readonly UI_TOOLTIP: string;
    /** 
     * 录音完成
     */
    static readonly RECORD_VOICE_END: string;
}