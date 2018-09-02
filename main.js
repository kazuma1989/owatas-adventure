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

    const grounds = new DisplayElement();
    grounds.addChildTo(this);
    this.grounds = grounds;

    new AAObject({
      text: '┌────────────\n│                        \n│                        ',
      x: this.gridX.width - 167,
      y: this.gridY.width - 34,
      width: 167,
      height: 34,
      padding: -6,
    }).addChildTo(grounds);

    new AAObject({
      text: '────────────┐\n                        │\n                        │',
      x: 0,
      y: this.gridY.width - 34,
      width: 167,
      height: 34,
      padding: -6,
    }).addChildTo(grounds);

    const g = new AAObject({
      text: '[ニニニ]',
      x: this.gridX.center(),
      y: this.gridY.width - 100,
      width: 52,
      height: 14,
    }).addChildTo(grounds);
    g.physical.velocity.x = 1;
  },

  update({
    keyboard,
    frame,
  }) {
    const {
      owata,
      grounds,
    } = this;

    const ground = grounds.children.find(g => owata.hitTestElement(g));
    if (ground) {
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
