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
      return db
        .collection('items')
        .doc(this.id)
        .set(
          {
            favorite: '1'
          },
          { merge: true }
        )
        .then(function() {
          console.log('add!')
        })
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
          console.log('delete!')
        })
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
