<template>
  <div class="wrapper">
    <!-- <Header /> -->

    <main v-if="loading">
      <div class="loading">
        ローディングああああ
      </div>
    </main>

    <main v-else>
      <nuxt/>
      <Footer />
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    // Header,
    Footer
  },
  computed: {
    ...mapState({
      loading: 'loading'
    })
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
