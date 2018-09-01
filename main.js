const SPEED = 4;

phina.define('MainScene', {

  superClass: 'DisplayScene',

  init(options) {
    this.superInit(options);

    this.backgroundColor = '#444';

    this.owata = AaObject('┏(^o^ )┓\n┃┃');
    this.owata.addChildTo(this);
    this.owata.x = this.gridX.center();
    this.owata.y = this.gridY.center();
    this.owata.fill = 'white';
  },

  update(app) {
    const p = app.pointer;

    if (p.getPointing()) {
      const diff = p.x - this.owata.x;
      if (Math.abs(diff) > SPEED) {
        this.owata.x += Math.sign(diff) * SPEED;
      }
    }
  },

});

phina.main(() => {
  const app = GameApp({
    startLabel: 'main',
  });

  app.run();
});
