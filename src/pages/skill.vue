<template>
  <section class="wrap">
    <Tree />
  </section>
</template>

<script>
import Tree from '~/components/object/tree.vue'

export default {
  components: {
    Tree
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  color: $black;
  height: 100vh;
  padding: 0 30px;
  position: relative;

  &._center {
    align-items: center;
    display: flex;
    justify-content: center;
  }
}
</style>
