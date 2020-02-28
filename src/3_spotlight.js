// 起動コード
window.addEventListener('DOMContentLoaded', () => {
  new Main();
});

/**
 * パーティクルデモのメインクラスです。
 * @author Yasunobu Ikeda
 */
class Main {

  constructor() {
    // スポットライト風グラフィック用のステージを作成
    this.stageOverlay = new createjs.Stage('canvasOverlay');

    // スポットライト風グラフィック
    this.spotLightShape = new SpotLightShape();
    this.stageOverlay.addChild(this.spotLightShape);

    // Tickerを作成
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.on('tick', this.handleTick, this);

    // リサイズイベント
    this.handleResize();
    window.addEventListener('resize', () => {
      this.handleResize();
    });
  }

  /**
   * エンターフレームイベント
   */
  handleTick() {
    // スポットライト風グラフィックの描画
    this.spotLightShape.drawContents(innerWidth, innerHeight);
    this.stageOverlay.update();
  }

  /**
   * リサイズイベント
   */
  handleResize() {
    // スポットライト風グラフィック用ステージのりサイズ
    this.stageOverlay.canvas.width = innerWidth;
    this.stageOverlay.canvas.height = innerHeight;
  }
}
