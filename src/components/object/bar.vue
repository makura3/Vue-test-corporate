<template>
  <ul>
    <li v-for="(data,index) in init" :key="index" class="bar-list">
      <div class="label">{{data.name}}</div>
      <div class="bar-wrap">
        <span class="bar" v-bind:style="{ backgroundColor: data.color, width: data.ratio + '%'}"></span>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      init: 'getSkill'
    })
  }
}
</script>

<style lang="scss" scoped>
.bar-list {
  display: flex;

  .label {
    padding: 10px 10px 10px 0;
    position: relative;
    width: 200px;
    word-break: break-all;

    &::after {
      border-right: 2px solid $black;
      bottom: 0;
      content: '';
      height: 110%;
      right: 0;
      position: absolute;
      top: 0;
      width: 2px;
    }
  }

  .bar-wrap {
    background-color: $silver;
    margin: 10px 0;
    width: 100%;

    .bar {
      display: inline-block;
      height: 100%;
    }
  }
}
</style>
