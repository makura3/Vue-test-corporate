'use strict'

/* 
 * @target {String} className : 監視対象のclass名 wip
 * @param {Number} delay : scrollの監視をどれぐらいの間隔で行うか
*/
export class scrollAnimation {
  constructor() {
    //初期処理何かあれば
  }

  // set scrollEvent
  setScrollEvent(delay) {
    window.addEventListener('scroll', this.throttle(this.setAnimation, delay))
  }

  // scrollEvent監視処理
  throttle(fn, delay) {
    let lastExec = 0,
      timerId

    return () => {
      let context = this,
        args = arguments,
        lastTime = performance.now() - lastExec // 最後に実行した時間

      const exec = () => {
        lastExec = performance.now()
        fn.apply(context, args)
      }

      if (!timerId) {
        exec()
      }

      if (timerId) {
        clearTimeout(timerId) //timer解除
      }

      if (lastTime > delay) {
        exec()
      } else {
        timerId = setTimeout(exec, delay)
      }
    }
  }

  //アニメーション監視処理のみ記載
  setAnimation() {
    let $targetList = document.querySelectorAll('.jsShowScroll'), //これも引数として外出しにするべき
      $window = window,
      windowHight = $window.parent.screen.height,
      addClassName = '_show' //これも引数として外出しにすべき

    for (let target of $targetList) {
      var rect = target.getBoundingClientRect()
      var isShow =
        // (0 < rect.top && rect.top < windowHight) ||
        0 < rect.bottom && rect.bottom < windowHight
      // 0 > rect.top && rect.bottom > windowHight

      if (isShow && !target.classList.contains(addClassName)) {
        target.classList.add(addClassName)
      }
    }
  }
}
