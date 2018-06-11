<template>
  <div>
    <section class="item-wrap">
      <Item />
      <Item />
      <Item />
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
