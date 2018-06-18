<template>
  <div class="item">
    <div class="header">{{ item.url }}</div>
    <div class="content">
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'] //プロパティを記述
}
</script>

<style lang="scss" scoped>
.header {
  background: #ccc;
  height: 300px;
  width: 200px;
}

.content {
  background: #fff;
}
</style>
