<template>
  <i v-if="flg" class="ic_heart fa fa-heart" @click.prevent="add()"></i>
  <i v-else class="ic_heart fa fa-heart-o" @click.prevent="del()"></i>
</template>

<script>
import db from '~/plugins/firebaseInit'

export default {
  props: ['id', 'flg'],
  methods: {
    add: function() {
      db.collection('items')
        .doc(this.id)
        .set(
          {
            favorite: '1'
          },
          { merge: true }
        )
        .then(function() {})
      // this.setFlg(1)
    },
    del: function() {
      return db
        .collection('items')
        .doc(this.id)
        .set(
          {
            favorite: '0'
          },
          { merge: true }
        )
        .then(function() {
          // this.setFlg(0)
        })
    },
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
