<template>
  <section class="wrap">
    <div v-if="item" class="content-wrap">
      <div class="content">
        <h2 class="title">{{item.name}}</h2>
        <div class="images-wrap">
          <img :src='"/images/items/"+item.url' class="images"/>
        </div>
        <p class="des">{{item.description}}</p>
      </div>
      <div class="action">
        <div class="btn-wrap">
          <Btn />
          <p>商品にお間違いがないかご確認ください。</p>
        </div>
      </div>
    </div>
    <div v-else>
      ろおディング
    </div>
  </section>
</template>

<script>
import db from '~/plugins/firebaseInit'

import Btn from '~/components/button/button.vue'

export default {
  components: {
    Btn
  },
  validate({ params }) {
    // 数値でなければならない
    return /^[a-zA-Z0-9]+$/.test(params.id)
  },
  data() {
    return {
      item: [],
      loading: true
    }
  },
  asyncData({ params }) {
    return db
      .collection('items')
      .doc(params.id)
      .get()
      .then(doc => {
        return {
          item: {
            url: doc.data().url,
            name: doc.data().name,
            description: doc.data().description,
            favorite: doc.data().favorite
          }
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.content-wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 35px 10px;
}

.content {
  .title {
    font-size: 16px;
    font-weight: 600;
    max-width: 445px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .images-wrap {
    text-align: center;

    .images {
      width: 300px;
    }
  }

  .des {
    border-top: 1px solid $gray;
  }
}

.content,
.action {
  width: 100%;

  @include min-mq(sm) {
    flex: 1;
  }
}

.action {
  // width: 100%;

  @include min-mq(sm) {
    margin: 0 0 0 10px;
  }
}

.btn-wrap {
  background-color: $silver;
  padding: 20px;
  text-align: center;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter {
  opacity: 0;
}
</style>
