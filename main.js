const SPEED = 12;

phina.define('MainScene', {

  superClass: 'DisplayScene',

  init(options) {
    this.superInit(options);

    this.backgroundColor = 'white';

    const owata = new Owata({
      x: 484,
      y: 301,
    });
    owata.addChildTo(this);
    this.owata = owata;

    const ground = new AAObject({
      text: '┌────────────\n│                        \n│                        ',
      x: this.gridX.width - 167,
      y: this.gridY.width - 34,
      width: 167,
      height: 34,
      padding: -6,
    });
    ground.addChildTo(this);
    this.ground = ground;
  },

  update({
    keyboard,
    frame,
  }) {
    const {
      owata,
      ground,
    } = this;

    if (owata.hitTestElement(ground)) {
      owata.touchGround(ground);
    }
    else {
      owata.fall();
    }

    if (keyboard.getKey('left')) {
      owata.moveLeft(frame);
    }
    else if (keyboard.getKey('right')) {
      owata.moveRight(frame);
    }
    else {
      owata.stay();
    }

    if (keyboard.getKey('z')) {
      owata.jump();
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
