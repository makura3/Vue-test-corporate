<template>
  <div>
    <main>
      <section class="wrap _wide back_cat">
        <!-- <div v-if="loading" class="loading">
          <i class="fa fa-cog fa-3x" aria-hidden="true"></i>
        </div>
        <div v-else> -->
        <div class="top-text">
          <span class="text">Hello.</span>
        </div>
        <div class="arrow-wrap">
          <span class="arrow">scroll</span>
        </div>
        <!-- </div> -->
      </section>
      <section class="wrap _center bg-gra_one">
        <div class="content">
          <h2>About</h2>
          <p>
            普段は色々なWebサイトの実装を担当させて頂いております。<br>
            猫が好きで飼いはじめたところ、パフォーマンスが上がりました。本当です。
          </p>
          <hr>
          <p>
            2013年からITの会社にてサーバーサイド側の実装などの業務を行う。<br>
            2016年以降は今までの経験を活かしつつフロントエンド側の業務を行う。
          </p>
          <p>
            問い合わせ先：@@github.com
          </p>
        </div>
      </section>

      <section class="wrap _wide _center">
        <div class="content">
          <h2>Skill</h2>
          <ul>
            <li class="bar">
              <div class="label">HTML</div>
              <div class="content">----------</div>
            </li>
            <li class="bar">
              <div class="label">CSS</div>
              <div class="content">-----</div>
            </li>
            <li class="bar">
              <div class="label">JavaScript</div>
              <div class="content">-----</div>
            </li>
            <li class="bar">
              <div class="label">aaaaaaaaaaaaaa</div>
              <div class="content">-----</div>
            </li>
          </ul>
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
// import { mapState, mapGetters } from 'vuex'

export default {
  // components: {
  // }
  // computed: {
  //   ...mapState({
  //     loading: 'loading' //loadingというstateをloadingという名前で呼び出す
  //   }),
  //   ...mapGetters({
  //     init: 'getItems' //getItemsというgetterをinitという名前で呼び出す
  //   })
  // }
}
</script>

<style lang="scss" scoped>
.wrap {
  color: $black;
  height: 100vh;
  padding: 0 30px;
  position: relative;

  &._wide {
    padding: 0;
  }

  &._center {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  &.bg-gra_one {
    background: linear-gradient(to bottom, rgba(#e8a, 0.5), rgba($y, 0.5));
    height: 100vh;
  }

  .content {
    width: 200px;

    @include min-mq(sm) {
      width: 520px;
    }
  }
}

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
      z-index: 1;
    }

    &::after {
      background-color: $y;
      bottom: 25px;
      content: '';
      height: 17px;
      left: 50%;
      margin-left: -8px;
      position: absolute;
      transform: rotate(-45deg);
      width: 17px;
    }
  }
}

.bar {
  display: flex;

  .label {
    padding: 10px 10px 10px 0;
    position: relative;
    width: 200px;
    word-break: break-all;

    &::after {
      border-right: 2px solid $black;
      bottom: 0;
      content: '';
      height: 110%;
      right: 0;
      position: absolute;
      top: 0;
      width: 2px;
    }
  }

  .content {
    padding: 10px 0;
  }
}

.list {
  display: flex;
  flex-direction: column;
}
</style>
