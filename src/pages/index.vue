<template>
  <div>
    <main>
      <section class="wrap _wide back_cat">
        <div class="top-text">
          <span class="text">Hello.</span>
        </div>
        <div class="arrow-wrap">
          <span class="arrow"></span>
        </div>
      </section>
      <section class="wrap _center bg-gra_one">
        <div class="content jsShowScroll">
          <h2>About</h2>
          <p>
            普段は色々なWebサイトの実装を担当させて頂いております。<br>
            一人で作業するのではなく、色々な方とUI/UXについて意見を出し合い、協力して進めていることが多いです。<br>
            猫が好きで飼いはじめたところ、パフォーマンスが上がりました。本当です。
          </p>
          <p>
            技術ブログやってます：<a href="https://makura3.github.io/" target="_blank">MOJIの本棚</a>
          </p>
          <hr>
          <p>
            2013年からITの会社にてサーバーサイド側の実装などの業務を行う。<br>
            2016年以降は今までの経験を活かしつつフロントエンド側の業務を行う。
          </p>
        </div>
      </section>

      <section class="wrap _center">
        <div class="content jsShowScroll">
          <h2>Skill</h2>
          <Bar />
        </div>
      </section>

      <section class="wrap _center">
        <div class="content">
          <h2>CONTACT</h2>
          <p>
            何かありましたら下記までご連絡ください。
          </p>
          <p>
            問い合わせ先：@@github.com<br>
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Bar from '~/components/object/bar.vue'
import { scrollAnimation } from '~/plugins/scrollAnimation'

export default {
  components: {
    Bar
  },
  computed: {
    ...mapState({
      loading: 'loading'
    })
  },
  mounted() {
    let _s = new scrollAnimation()
    _s.setScrollEvent(700) //監視時間をパラメータとして渡す
  }
}
</script>

<style lang="scss" scoped>
.top-text {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  .text {
    color: $white;
    font: {
      size: 20px;
    }
    position: relative;
    text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

    @include min-mq(sm) {
      font: {
        size: 64px;
      }
    }

    &::before,
    &::after {
      border-radius: 50px;
      content: '';
      height: 200px;
      left: -64px;
      position: absolute;
      top: -90px;
      width: 200px;

      @include min-mq(sm) {
        height: 400px;
        left: -125px;
        top: -170px;
        width: 400px;
      }
    }

    &::before {
      animation: rotation 8s infinite linear;
      background: linear-gradient(to bottom, rgba(#e8a, 0.5), rgba($y, 0.5));
      z-index: -1;
    }

    &::after {
      animation: rotation_s 8s infinite linear;
      background: linear-gradient(to top, rgba(#0af, 0.5), rgba($v, 0.3));
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
      z-index: -2;
    }
  }
}

.arrow-wrap {
  bottom: 30px;
  left: 50%;
  margin-left: -25px;
  position: absolute;

  .arrow {
    position: relative;

    &::before {
      background-color: $black;
      content: '';
      height: 30px;
      left: 50%;
      position: absolute;
      top: -40px;
      width: 1px;
      z-index: 2;
    }

    &::after {
      background-color: $y;
      bottom: 6px;
      content: '';
      height: 17px;
      left: 50%;
      margin-left: -8px;
      position: absolute;
      transform: rotate(-45deg);
      width: 17px;
      z-index: 1;
    }
  }
}
</style>
