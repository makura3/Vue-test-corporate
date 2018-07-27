'use strict'

// EaselJS系の読み込み
import { Shape, Stage } from '@createjs/easeljs/dist/easeljs.module'
// TweenJS系の読み込み
import { Tween } from '@createjs/tweenjs/dist/tweenjs.module'

class setCanvas {
  constructor() {
    this.stage = new Stage('canvas')
    this.shape = new Shape()
    this.setCanvasSize()
  }

  setCanvasSize() {
    const w = this.getScreenWidth().toString(),
      h = this.getScreenHeight().toString()

    let canvas = document.querySelector('#canvas')
    canvas.setAttribute('width', w + 'px')
    canvas.setAttribute('height', h + 'px')
  }

  getScreenWidth() {
    return window.parent.screen.width
  }

  getScreenHeight() {
    return window.parent.screen.height
  }

  event_set_handler() {
    // wip
  }

  pathRender(x) {
    for (let i = 0; i < x; i++) {
      this.shape.graphics.beginFill('Gainsboro') // 赤色で描画するように設定
      this.shape.graphics.drawCircle(
        Math.random() * 350,
        Math.random() * 300,
        Math.random() * 15
      ) //半径100pxの円を描画
      this.stage.addChild(this.shape) // 表示リストに追加
      this.setAnimation()
    }
  }

  setAnimation() {
    Tween.get(this.shape, { loop: true })
      .to({ scaleX: 1.1, scaleY: 1.1 }, 500)
      .to({ scaleX: 1, scaleY: 1 }, 500)
    this.update()
  }

  update() {
    this.stage.update()
    requestAnimationFrame(() => this.update())
  }
}

let _s = new setCanvas()
_s.pathRender(200)
