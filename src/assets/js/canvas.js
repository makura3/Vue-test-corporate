// EaselJS系の読み込み
import { Shape, Stage } from '@createjs/easeljs/dist/easeljs.module'
// TweenJS系の読み込み
import { Tween } from '@createjs/tweenjs/dist/tweenjs.module'

const stage = new Stage('canvas')

const target = new Shape()
target.graphics.beginFill('#333')
target.graphics.drawPolyStar(0, 0, 20, 3)
stage.addChild(target)

target.x = 100
target.y = 100

Tween.get(target, { loop: true })
  .wait(300)
  .to({ x: 740, y: 400, scale: 2 }, 700)
  .to({ x: 400, y: 0, scale: 1.4 }, 1200)
  .to({ x: 500, y: 300, scale: 3 }, 1200)
  .to({ x: 100, y: 100, scale: 1 }, 700)

update()

// 毎フレームステージを自動更新する
function update() {
  stage.update()
  requestAnimationFrame(() => update())
}
