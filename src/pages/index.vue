<template>
  <div>
    <section class="wrap">
      <div v-if="loading" class="loading">
        <i class="fa fa-cog fa-3x" aria-hidden="true"></i>
      </div>
      <div v-else>
        <div class="menu">
          <span class="menu-text">PROFILE</span>
        </div>
        <div class="menu">
          <span class="menu-text">CONTACT</span>
        </div>
      </div>
    </section>
    <section class="wrap">
      <div>
        <div class="profile">
          <div class="profile-img">ダミー写真</div>
          <span class="profile-name">makura3</span>
        </div>
        <div class="profile">
          <span>Front-end engineer</span>
        </div>
      </div>
    </section>
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
  background-color: $back-color;
  color: $white;
  height: 100vh;
  padding: 0 20px;
}

.menu {
  align-items: center;
  background-color: $black;
  border-radius: 75px;
  cursor: pointer;
  color: $white;
  display: flex;
  height: 150px;
  justify-content: center;
  width: 150px;

  &:hover {
    animation: menu 0.5s ease 1;
  }
}

.profile {
  position: relative;

  .profile-img {
    background-color: $gray;
    height: 300px;
    width: 200px;
  }

  .profile-name {
    background-color: $back-color;
    font: {
      size: 24px;
    }
    display: inline-block;
    left: 50%;
    padding: 10px;
    position: absolute;
    top: 30px;
  }
}
</style>
