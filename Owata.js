phina.define('Owata', {

  superClass: 'AaObject',

  speed: 12,
  leftFace: true,
  jumpPower: 24,
  gravity: 2,
  touchingGround: true,

  stayingLeft: '┏(^o^ )┓\n┃┃',
  stayingRight: '┏( ^o^)┓\n┃┃',
  movingLeftUp: '┏(^o^ )┛\n┛┏',
  movingLeftDown: '┗(^o^ )┓\n┏┗',
  movingRightUp: '┗( ^o^)┓\n┓┗',
  movingRightDown: '┏( ^o^)┛\n┛┓',
  jumpingLeft: '┗(^o^ )┛\n┗┃',
  jumpingRight: '┗( ^o^)┛\n┃┛',

  init(options) {
    const defaults = {
      text: this.stayingLeft,
    };

    this.superInit(Object.assign(defaults, options));
  },

  stay() {
    this.text = this.leftFace ? this.stayingLeft : this.stayingRight;
    this.originY = 0.5;
  },

  moveLeft(frame) {
    switch (frame % 4) {
      case 0:
      case 1:
        this.text = this.movingLeftUp;
        this.originY = 0.5 + 0.02;
        break;
      case 2:
      case 3:
        this.text = this.movingLeftDown;
        this.originY = 0.5 - 0.02;
        break;
    }
    this.leftFace = true;
    this.x -= this.speed;
  },

  moveRight(frame) {
    switch (frame % 4) {
      case 0:
      case 1:
        this.text = this.movingRightUp;
        this.originY = 0.5 + 0.02;
        break;
      case 2:
      case 3:
        this.text = this.movingRightDown;
        this.originY = 0.5 - 0.02;
        break;
    }
    this.leftFace = false;
    this.x += this.speed;
  },

  jump() {
    this.text = this.leftFace ? this.jumpingLeft : this.jumpingRight;
    if (this.touchingGround) {
      this.touchingGround = false;
      this.physical.velocity.y = -this.jumpPower;
    }
    this.physical.gravity.y = this.gravity;
  },

  touchGround(groundY) {
    this.touchingGround = true;
    this.y = groundY;
    this.physical.velocity.y = 0;
    this.physical.gravity.y = 0;
  },

});
