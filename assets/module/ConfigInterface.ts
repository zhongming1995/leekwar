
export class GateTeam {
    public id:number;
    public num:number;
    public delay:number;
    public createDelay:number;
    public damageScale : number = 1;
    public defenseScale : number = 1;
    public bloodScale : number = 1;
    public speedScale : number = 1;
    public cdScale : number = 1;
    public coinScale : number = 1;
    public coin : Array<number> = [];
    public line : Array<string> = []
}

export class Gate {
    public damageScale : number = 1;
    public bloodScale : number = 1;
    public speedScale : number = 1;
    public defenseScale : number = 1;
    public cdScale : number = 1;
    public coinScale : number = 1;
    public pids :Array<Array<GateTeam> > = [];
    public allEnemyCount : number = 0;
    public star : Array<number> = []
    public warning : Array<Array<number>> = [];
    public reward : number = 0;

    constructor(cfg:any){
        let mapping = {"dams":'damageScale',"blds":'bloodScale',"sps":"speedScale","defs":'defenseScale',"cds":'cdScale',"cos":"coinScale","star":"star","coin":"coin","reward":"reward"}
        for(let k in cfg){
            let v = mapping[k];
            if(v){
                this[v] = cfg[k]
            }
        }
        for(let i=0; i<cfg.pids.length; i++){
            let arrp = cfg.pids[i];
            let arr = [];
            for(let j=0; j<arrp.length; j++){
                let p = arrp[j];
                let t = new GateTeam()
                for(let k in p){
                    let v = mapping[k];
                    if(v){
                        t[v] = p[k]
                    } else {
                        t[k] = p[k]
                    }
                }
                this.allEnemyCount += t.num
                arr.push(t);
            }
            this.pids.push(arr);

            this.warning[i] = []
            let str = cfg.warn[i] || '';
            let m1 = str.split(',')
            for(let j=0; j<m1.length; j++){
                m1[j].length && this.warning[i].push(parseInt(m1[j]))
            }
        }
    }
}

export class LevelData {
    private a:number;
    private b:number;
    private c:number;
    private d:number;
    private l:number;
    private astr:any = {};
    private bstr:any = {};
    private cstr:any = {};
    private dstr:any = {};

    public set level(v:number){
        this.l = v;
        this.setLevel(v)
    }
    public get level():number{
        return this.l;
    }

    public get value():number{
        return this._value
    }
    private _value : number;

    constructor(cfg:any,lv:number){
        this.astr = cfg.a || {}
        this.bstr = cfg.b || {}
        this.cstr = cfg.c || {}
        this.dstr = cfg.d || {}
        this.level = lv
    }
    private findValueByLevel(cv:any,lv:number):number{
        if(typeof cv == 'undefined'){
            return 0;
    }
        if(typeof cv == 'number'){
            return cv;
        }
        let keys = Object.keys(cv);
        for(let i=keys.length; i>=0; i--){
            if(lv >= parseInt(keys[i])){
                return cv[keys[i]]
            }
        }
        return 0;
    }

    setLevel(v:number){
        this.a = this.findValueByLevel(this.astr,v)
        this.b = this.findValueByLevel(this.bstr,v)
        this.c = this.findValueByLevel(this.cstr,v)
        this.d = this.findValueByLevel(this.dstr,v)
        let p = Math.pow(this.a,v)
        this._value = ((v == 0 ? 0 : Math.pow(this.a,v) * this.b) + this.c*v + this.d);
    }
}


export class LevelBase {
    public mapData : any = {};
    protected keys = [];

    constructor(cfg:any,lvs:any){
    }

    protected _init(cfg:any,lvs:any){
        for(let k in this.keys){
            let key = this.keys[k]
            let lv =  lvs[key] || 0
            let cost = new LevelData(cfg[key+'Cost'],lv)
            this.mapData[key] = {
                name : key,
                level : lv,
                valueData : new LevelData(cfg[key],lv),
                costData : cost
            }
            let ties = {};
            ties[key] = {value:this.mapData[key].valueData.value}
            ties[key+'Cost'] = {value:this.mapData[key].costData.value}
            Object.defineProperties(this,ties)
        }
    }

    setLevel(lvs:any){
        for(let k in this.keys){
            let lv =  lvs[k] || 0
            if(this.mapData[k] && this.mapData[k].level != lv){
                this.mapData[k].level = lv
                this.mapData[k].valueData.setLevel(lv)
                this.mapData[k].costData.setLevel(lv)
            }
        }
    }
}

export class RoleWeponData extends LevelBase {
    protected keys = ["damage","interval","power"];
    public damage:number;interval:number;damageCost:number;intervalCost:number;power:number;powerCost:number;

    constructor(cfg:any,lvs:any){
        super(cfg,lvs);
        this._init(cfg,lvs);
    }
}

export class MachineWeaponData extends LevelBase {
    protected keys = ["damage","interval"];
    public damage:number;interval:number;damageCost:number;intervalCost:number;

    constructor(cfg:any,lvs:any){
        super(cfg,lvs);
        this._init(cfg,lvs);
    }
}
