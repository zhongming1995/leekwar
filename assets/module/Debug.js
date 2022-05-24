
cc.Class({
    extends: cc.Component,

    properties: {
        fps: cc.Label,
        layers: cc.Label,
    },
    onLoad() {
        this.fpstime = [];
        this.canvas = cc.find('Canvas')
    },
    update(dt) {
        if (this.fps) {
            this.fpstime.push(dt);
            var v = 0;
            for (var i = this.fpstime.length - 1; i >= 0; i--) {
                if (v >= 1) {
                    this.fpstime.splice(i, 1);
                } else {
                    v += this.fpstime[i]
                }
            }
            this.fps.string = '' + this.fpstime.length;
        }
        if (this.layers) {
            this.chds = 0;
            this.findChilds(this.canvas);
            this.layers.string = this.chds
        }
    },
    findChilds(chd) {
        for (var c in chd.children) {
            var v = chd.children[c]
            if (v.active) {
                this.chds++;
                this.findChilds(v);
            }
        }

    }

});
