<template>
  <div>
    <section class="wrap">
      <div v-if="loading" class="loading">
        <i class="fa fa-cog fa-3x" aria-hidden="true"></i>
      </div>
      <p v-else>hello world!</p>
    </section>
    <section class="wrap">
      ２Pめ
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
}
</style>
