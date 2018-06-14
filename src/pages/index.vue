<template>
  <div>
    <section class="item-wrap">
      <!-- <Item />
      <Item />
      <Item /> -->
      <p v-for="(item, key, index) in items" :key="index">
        {{ item.data().name }}
        {{ item.data().description }}
      </p>
    </section>
    <p>{{ text }} world!</p>
    <p>テンプレートの部分は別ファイルに切り出すことが可能です。</p>
  </div>
</template>

<script>
import Item from '~/components/panel/Item.vue'

export default {
  components: {
    Item
  },
  async asyncData({ app }) {
    try {
      const items = await app.$axios.$get('http://icanhazip.com')
      return { items }
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return { text: 'hellow' }
  }
}
</script>

<style scoped>
.item-wrap {
  display: flex;
}
</style>
