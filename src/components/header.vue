<template>
  <header class="header-wrap">
    <div>
      左
    </div>
    <div>
      真ん中
    </div>
    <div>
      右
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-wrap {
  background-color: $black;
  color: $white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
