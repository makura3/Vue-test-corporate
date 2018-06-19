<template>
  <div>
    <section>
      <div class="item-wrap">
        <Item v-for="(item, key, index) in items" :key="index" :item="item" />
      </div>
    </section>
  </div>
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
        this.loading = false
        querySnapshot.forEach(doc => {
          let data = {
            url: doc.data().url,
            name: doc.data().name,
            description: doc.data().description
          }
          this.items.push(data)
        })
      })
  }
}
</script>

<style lang="scss" scoped>
.item-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
