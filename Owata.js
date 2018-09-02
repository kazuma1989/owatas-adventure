phina.define('Owata', {

  superClass: 'AAObject',

  speed: 8,
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
      width: 60,
      height: 30,
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
  },

  touchGround(ground) {
    this.touchingGround = true;
    this.physical.velocity.y = 0;
    this.physical.gravity.y = 0;

    // あえて少しめり込ませる。
    // このメソッド呼び出し後も hitTestElement の結果が true になるようにすれば、
    // 1px 内で落下と着地を繰り返すのを防げるため。
    this.bottom = ground.top + 1;
  },

  fall() {
    this.physical.gravity.y = this.gravity;
  },

});
