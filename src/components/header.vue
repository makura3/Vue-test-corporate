<template>
  <header class="header-wrap">
      <div class="menu">
        <span class="border"></span>
        <span class="menu-text">MENU</span>
      </div>
      <div class="nav">
        <nav>
          <ul>
            <li>profile</li>
            <li>contact</li>
          </ul>
        </nav>
      </div>
  </header>
</template>

<style lang="scss" scoped>
.header-wrap {
  background-color: $white-shadow;
  color: $black;
  position: sticky;
  top: 0;
  z-index: 1;

  .menu {
    right: 30px;
    position: absolute;
    top: 10px;

    .border {
      background: $black;
      display: block;
      height: 2px;
      left: 5px;
      position: relative;
      transition: background 0.5s;
      top: 14px;
      width: 24px;

      &::before,
      &::after {
        background: $black;
        border-radius: 3px;
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        transform: rotate(0deg);
        transition: all 0.3s !important;
        width: 24px;
      }

      &::before {
        transform: translateY(10px);
      }

      &::after {
        transform: translateY(-10px);
      }
    }

    .menu-text {
      position: absolute;
      left: -3px;
      letter-spacing: 0.2em;
      top: 35px;
    }
  }

  .link {
    text-decoration: none;

    &:active,
    &:visited {
      color: $black;
    }
  }
}

.nav {
  // background-color: #ccc;
  // display: block;
  display: none;
}
</style>
