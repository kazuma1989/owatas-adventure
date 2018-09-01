// phina.js をグローバル領域に展開
phina.globalize();

// MainScene クラスを定義
phina.define('MainScene', {

  superClass: 'DisplayScene',

  init(options) {
    this.superInit(options);

    // 背景色を指定
    this.backgroundColor = '#444';

    // ラベルを生成
    this.label = Label('Hello, phina.js!').addChildTo(this);
    this.label.x = this.gridX.center(); // x 座標
    this.label.y = this.gridY.center(); // y 座標
    this.label.fill = 'white'; // 塗りつぶし色
  },

});

// メイン処理
phina.main(() => {
  // アプリケーション生成
  const app = GameApp({
    startLabel: 'main', // メインシーンから開始する
  });

  // アプリケーション実行
  app.run();
});
