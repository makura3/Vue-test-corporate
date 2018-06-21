<template>
  <section class="wrap">
    <!-- <div v-if="loading" class="loading">読み込み中です</div> -->
    <transition-group name="fade" tag="div" class="item-wrap">
      <Item v-for="(item, index) in items" :key="index" :item="item" />
    </transition-group>
  </section>
</template>

<script>
import db from '~/plugins/firebaseInit'

import Item from '~/components/panel/Item.vue'

export default {
  components: {
    Item
  },
  data() {
    return {
      items: [],
      loading: true
    }
  },
  created() {
    db.collection('items')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let data = {
            id: doc.id,
            url: doc.data().url,
            name: doc.data().name,
            description: doc.data().description,
            favorite: doc.data().favorite
          }
          this.items.push(data)
        })
        this.loading = false
      })
  }
}
</script>

<style lang="scss" scoped>
.item-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 35px 10px;
}

.item {
  margin: 15px 5px;

  @include min-mq(sm) {
    margin: 15px 10px;
  }
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter {
  opacity: 0;
}
</style>
