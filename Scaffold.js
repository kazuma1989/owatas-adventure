phina.define('Scaffold', {

  superClass: 'AAObject',

  init(options) {
    const defaults = {
      text: '[ニニニ]',
      width: 52,
      height: 14,

      velocityX: 0,
      velocityY: 0,
      boundaryRight: 0,
      boundaryLeft: 0,
    };

    const opt = Object.assign(defaults, options);
    this.superInit(opt);

    this.physical.velocity.x = opt.velocityX;
    this.physical.velocity.y = opt.velocityY;

    this.boundaryRight = opt.boundaryRight;
    this.boundaryLeft = opt.boundaryLeft;
  },

  update() {
    if (this.x < this.boundaryLeft || this.boundaryRight - this.width < this.x) {
      this.physical.velocity.x *= -1;
    }
  },

});
