<template>
  <i v-if="getFavoriteData(id)" class="ic_heart fa fa-heart" @click.prevent="del(id)"></i>
  <i v-else class="ic_heart fa fa-heart" @click.prevent="add(id)"></i>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['id'],
  computed: {
    ...mapGetters({
      getFavoriteData: 'getFavoriteData'
    })
  },
  methods: {
    ...mapActions({
      add: 'ADD_FAVORITE', // `this.add()` を `this.$store.dispatch('ADD_FAVORITE')` にマッピングする
      del: 'DEL_FAVORITE' // `this.del()` を `this.$store.dispatch('DEL_FAVORITE')` にマッピングする
    }),
    setFlg(flg) {
      this.flg = flg
    }
  }
}
</script>

<style lang="scss" scoped>
.ic_heart {
  color: $favorite;
  font-weight: 600;
  vertical-align: 0;
}

.favorite-count {
  color: $darkGray;
  font-size: 12px;
  margin-left: 3px;
}
</style>
