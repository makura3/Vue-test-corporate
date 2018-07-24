<template>
  <div>
    <main>
      <section class="wrap">
        <!-- <div v-if="loading" class="loading">
          <i class="fa fa-cog fa-3x" aria-hidden="true"></i>
        </div>
        <div v-else> -->
        <div class="arrow-wrap">
          <span class="arrow"></span>
        </div>
        <!-- </div> -->
      </section>
      <section class="wrap _center">
        <div class="profile">
          <div class="profile-img">ダミー写真</div>
          <span class="profile-name">makura3</span>
          <span class="detail-text">Front-end engineer</span>
        </div>
      </section>
      <section class="wrap _center">
        <div>
          <h2>CONTACT</h2>
          <p>
            <span class="fa fa-envelope" aria-hidden="true"></span>
            <span>@@github.com</span>
          </p>
          <p>
            <span class="fa fa-phone" aria-hidden="true"></span>
            <span>XXX-XXXX-XXXX</span>
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import Item from '~/components/panel/Item.vue'

export default {
  // components: {
  //   Item
  // },
  computed: {
    ...mapState({
      loading: 'loading' //loadingというstateをloadingという名前で呼び出す
    }),
    ...mapGetters({
      init: 'getItems' //getItemsというgetterをinitという名前で呼び出す
    })
  }
}
</script>

<style lang="scss" scoped>
.loading {
  align-items: center;
  color: $gray;
  display: flex;
  flex-basis: auto;
  height: 300px;
  justify-content: center;
}

.wrap {
  color: $black;
  height: 100vh;
  padding: 0 30px;
  position: relative;

  &._center {
    align-items: center;
    display: flex;
    justify-content: center;
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
