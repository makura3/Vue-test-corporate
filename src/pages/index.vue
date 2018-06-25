<template>
  <section class="wrap">
    {{ $store.state }}
    <!-- <transition-group name="fade" tag="div" class="item-wrap">
      <p v-for="(item, index) in init" :key="index">{{item}}</p>
      <Item v-for="(item, index) in init" :key="index" :item="item" />
    </transition-group> -->
  </section>
</template>

<script>
import Item from '~/components/panel/Item.vue'

export default {
  components: {
    Item
  },
  data() {
    return {
      // itemList: [],
      loading: true
    }
  },
  computed: {
    init() {
      console.log('init start!')
      return this.$store.getters.getItems
    }
  }
  // created() {
  //   db.collection('items')
  //     .get()
  //     .then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         let data = {
  //           id: doc.id,
  //           url: doc.data().url,
  //           name: doc.data().name,
  //           description: doc.data().description,
  //           favorite: doc.data().favorite
  //         }
  //         this.itemList.push(data)
  //       })
  //       this.loading = false
  //     })
  // }
}
</script>

<style lang="scss" scoped>
.item-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 35px 10px;
}

.item {
  margin: 15px 5px;

  @include min-mq(sm) {
    margin: 15px 10px;
  }
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter {
  opacity: 0;
}
</style>
