const SPEED = 12;

phina.define('MainScene', {

  superClass: 'DisplayScene',

  init(options) {
    this.superInit(options);

    this.backgroundColor = 'white';

    const owata = new Owata({
      x: 484,
      y: 280,
    });
    owata.addChildTo(this);
    this.owata = owata;

    const grounds = new DisplayElement();
    grounds.addChildTo(this);
    this.grounds = grounds;

    new AAObject({
      text: '┌────────────\n│                        \n│                        ',
      width: 167,
      height: 34,
      padding: -6,
      x: this.gridX.width - 167,
      y: this.gridY.width - 34,
    }).addChildTo(grounds);

    new AAObject({
      text: '────────────┐\n                        │\n                        │',
      width: 167,
      height: 34,
      padding: -6,
      x: 0,
      y: this.gridY.width - 34,
    }).addChildTo(grounds);

    const n = new AAObject({
      text: '△△△△△△△△△△△△△△△\n│                            │\n└──────────────┘\n§\n§\n§\n§\n§\n§\n§\n§',
      width: 216,
      height: 14 * 3 - 6,
      x: 164.5,
      y: this.gridY.width - 14,
    }).addChildTo(grounds);
    n.physical.friction = 0.93;
    this.needle = n;

    const s = new Scaffold({
      text: '[ニニニ]',
      width: 52,
      height: 14,
      velocityX: 5,
      x: this.gridX.center(),
      y: this.gridY.width - 100,
      boundaryRight: this.gridX.width - 184,
      boundaryLeft: 223,
    }).addChildTo(grounds);
    this.scaffold = s;

    this.label = new Label({
      text: 'リトライ (R)',
      originX: 1,
      originY: 0,
      x: this.gridX.width,
      y: 0,
    }).addChildTo(this).hide();
  },

  update({
    keyboard,
    frame,
  }) {
    const {
      owata,
      grounds,
      needle,
      scaffold,
    } = this;

    if (this.gameover || owata.hitTestElement(needle)) {
      this.gameover = true;
      this.label.show();
      owata.die(frame);
    }
    else {
      const ground = grounds.children.find(g => owata.hitTestElement(g));
      if (ground) {
        owata.touchGround(ground);
      }
      else {
        owata.fall();
      }

      if (owata.hitTestElement(scaffold)) {
        needle.physical.velocity.y = -11;
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
    }
  },

  onkeypress({
    keyCode,
  }) {
    if (this.gameover && keyCode === 'r'.charCodeAt(0)) {
      this.exit();
    }
  },

});

phina.main(() => {
  const app = new GameApp({
    title: '人生ｵﾜﾀ\n＼(^o^)／\nの大冒険',
    startLabel: 'main',
    width: 550,
    height: 350,
    fit: false,
    assets: {
      sound: {
        owata: 'owata1.wav',
      },
    },
    scenes: [
      {
        label: 'main',
        className: 'MainScene',
        nextLabel: 'main',
      },
    ],
  });

  app.run();
});
