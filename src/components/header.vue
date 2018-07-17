<template>
  <header class="header-wrap">
    <div>
      <nuxt-link :to="{ name:'index'}" class="link">
        <h1 class="site-title">まくらのカバー</h1>
      </nuxt-link >
    </div>
    <div>
      右
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-wrap {
  background-color: $white-shadow;
  color: $black;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 1;

  .link {
    text-decoration: none;

    &:active,
    &:visited {
      color: $black;
    }
  }
}

.site-title {
  font-size: 16px;
  font-weight: 300;
  margin: 0;
}
</style>
