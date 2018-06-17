<template>
  <div>
    <section class="item-wrap">
      <!-- <Item />
      <Item />
      <Item /> -->
      <div v-for="(item, key, index) in items" :key="index">
        <div>{{ item.url }}</div>
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </section>
    <p>テンプレートの部分は別ファイルに切り出すことが可能です。</p>
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

<style scoped>
.item-wrap {
  display: flex;
}
</style>
