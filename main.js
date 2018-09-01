const SPEED = 12;

phina.define('MainScene', {

  superClass: 'DisplayScene',

  init(options) {
    this.superInit(options);

    this.backgroundColor = 'white';

    const owata = new Owata({
      x: this.gridX.center(),
      y: this.gridY.center(),
    });
    owata.addChildTo(this);
    this.owata = owata;
  },

  update({
    keyboard,
    frame,
  }) {
    const {
      owata,
    } = this;

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

    if (owata.y > this.gridY.center()) {
      owata.touchGround(this.gridY.center());
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
