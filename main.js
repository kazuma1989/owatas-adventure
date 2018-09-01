const SPEED = 12;

phina.define('MainScene', {

  superClass: 'DisplayScene',

  init(options) {
    this.superInit(options);

    this.backgroundColor = 'white';

    this.owata = new AaObject('┏(^o^ )┓\n┃┃');
    this.owata.addChildTo(this);
    this.owata.x = this.gridX.center();
    this.owata.y = this.gridY.center();
  },

  update({
    keyboard,
    pointer,
  }) {
    if (pointer.getPointing()) {
      const diff = pointer.x - this.owata.x;
      if (Math.abs(diff) > SPEED) {
        this.owata.x += Math.sign(diff) * SPEED;
      }
    }
    else {
      if (keyboard.getKey('left')) {
        this.owata.x -= SPEED;
      }
      else if (keyboard.getKey('right')) {
        this.owata.x += SPEED;
      }
      else if (keyboard.getKey('up')) {
        this.owata.y -= SPEED;
      }
      else if (keyboard.getKey('down')) {
        this.owata.y += SPEED;
      }
    }
  },

});

phina.main(() => {
  const app = new GameApp({
    startLabel: 'main',
    width: 550,
    height: 350,
    fit: false,
  });

  app.run();
});
