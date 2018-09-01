const SPEED = 12;

phina.define('MainScene', {

  superClass: 'DisplayScene',

  init(options) {
    this.superInit(options);

    this.backgroundColor = 'white';

    const owata = new AaObject('┏(^o^ )┓\n┃┃');
    owata.addChildTo(this);
    owata.x = this.gridX.center();
    owata.y = this.gridY.center();
    owata.leftFace = true;
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
      switch (frame % 4) {
        case 0:
        case 1:
          owata.text = '┏(^o^ )┛\n┛┏';
          owata.originY = 0.5 + 0.02;
          break;
        case 2:
        case 3:
          owata.text = '┗(^o^ )┓\n┏┗';
          owata.originY = 0.5 - 0.02;
          break;
      }
      owata.leftFace = true;
      owata.x -= SPEED;
    }
    else if (keyboard.getKey('right')) {
      switch (frame % 4) {
        case 0:
        case 1:
          owata.text = '┗( ^o^)┓\n┓┗';
          owata.originY = 0.5 + 0.02;
          break;
        case 2:
        case 3:
          owata.text = '┏( ^o^)┛\n┛┓';
          owata.originY = 0.5 - 0.02;
          break;
      }
      owata.leftFace = false;
      owata.x += SPEED;
    }
    else {
      owata.text = owata.leftFace ? '┏(^o^ )┓\n┃┃' : '┏( ^o^)┓\n┃┃';
      owata.originY = 0.5;
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
