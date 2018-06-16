<template>
  <div>
    <section class="item-wrap">
      <!-- <Item />
      <Item />
      <Item /> -->
      <p v-for="(item, key, index) in items" :key="index">
        {{ item }}
      </p>
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
          console.log(`${doc.data().description}`)
          let data = {
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
