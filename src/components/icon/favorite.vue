<template>
  <i v-if="flg" class="ic_heart fa fa-heart" @click.prevent="add()"></i>
  <i v-else class="ic_heart fa fa-heart-o" @click.prevent="del()"></i>
</template>

<script>
import db from '~/plugins/firebaseInit'

export default {
  props: ['id', 'flg'],
  created({ params }) {
    console.log(params)
    // asyncData({ params }) {
    return db
      .collection('favorite')
      .doc(params.id)
      .get()
      .then(doc => {
        console.log(doc.data().addFlg)
        return {
          flg: doc.data().addFlg
        }
      })
  },
  methods: {
    add: function() {
      db.collection('items')
        .doc(this.id)
        .update({
          favorite: '1'
        })
        .then(function() {})
      // this.setFlg(1)
    },
    del: function() {
      return db
        .collection('items')
        .doc(this.id)
        .update({
          favorite: '0'
        })
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
