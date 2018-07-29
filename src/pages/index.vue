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
          <span class="arrow"></span>
        </div>
        <!-- </div> -->
      </section>
      <section class="wrap _center bg-gra_one">
        <div>
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
        <Tree />
      </section>
      <section class="wrap _center">
        <div>
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
import Tree from '~/components/object/tree.vue'

export default {
  components: {
    Tree
  }
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
  animation: nextArrow 2s linear infinite;
  bottom: 100px;
  left: 50%;
  position: absolute;

  .arrow {
    position: relative;

    &::before {
      background-color: $black;
      content: '';
      height: 50px;
      position: absolute;
      width: 1px;
    }

    &::after {
      border-bottom: 1px solid $black;
      bottom: -44px;
      content: '';
      height: 30px;
      left: -14px;
      position: absolute;
      transform: rotate(-45deg);
      width: 30px;
    }
  }
}

.profile {
  position: relative;
  width: 100%;

  .profile-img {
    background-color: $gray;
    height: 300px;
    width: 100%;
  }

  .profile-name {
    background-color: $back-color;
    font: {
      size: 24px;
    }
    display: inline-block;
    left: -20px;
    padding: 10px;
    position: absolute;
    top: 20%;
  }

  .detail-text {
    background-color: $back-color;
    bottom: 20%;
    display: inline-block;
    right: -20px;
    padding: 10px;
    position: absolute;
  }
}

.list {
  display: flex;
  flex-direction: column;
}
</style>
