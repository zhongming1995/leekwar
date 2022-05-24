const { ccclass, property } = cc._decorator;

@ccclass
export default class MoveUV extends cc.Component {

  @property
  addTime = 0.02;

  @property
  speedX = 1;

  @property
  speedY = 0;

  @property
  randFlag = false;

  private time = 0

  private _material

  start() {
    this.time = 0;
    let com = this.getComponent(cc.Sprite) || this.getComponent("CustomMotionStreak")
    this._material = com.getMaterial(0);

    if(this.randFlag){
      this.speedX = Math.random()>0.5?1:-1
      this.speedY = Math.random()>0.5?1:-1
    }
    

    this._material.setProperty('speedX', this.speedX);
    this._material.setProperty('speedY', this.speedY);
  }

  update() {
    this.time += this.addTime;
    this._material.setProperty('time', this.time);
  }
}
