<template>
  <div class="item">
    <div class="header">{{ item.url }}</div>
    <div class="content">
      <p class="title">{{ item.name }}</p>
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
  background: $gray;
  height: 300px;
  width: 200px;
}

.content {
  background: $white;
}

.item {
  background-color: $white;
  border: 1px solid $gray;
  padding: 10px;

  .title {
    color: $black;
    font-size: 16px;
    margin: 10px 0 0 0;
  }
}
</style>
