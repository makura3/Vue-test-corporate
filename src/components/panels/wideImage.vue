<template>
  <section id="slider" class="no-padding" style="height: 100vh;">
    <div class="item owl-bg-img" style="background-image: url('https://spice-factory.co.jp/wp-content/themes/spice/images/top3.jpg');">
      <div class="opacity-full bg-dark-gray" />
      <div class="container full-screen position-relative" style="min-height: 700px;">
        <div class="slider-typography text-center">
          <div class="slider-text-middle-main">
            <div class="slider-text-middle slider-text-middle6 padding-left-right-px wow fadeInUp animated" style="visibility: visible; animation-name: fadeInUp;">
              <span class="slider-title-big6 white-text font-weight-600 letter-spacing-3" style=" font-family: 'Courgette', cursive; ">
                Spice Up
              </span>
              <span class="white-text text-extra-large strong text-uppercase letter-spacing-10 margin-three no-margin-bottom display-block xs-letter-spacing-6">
                世界に驚きと感動を、僕らのこの手で。 
              </span>
              <LinkButton />
              <a class="btn-small-white btn btn-medium margin-four no-margin-bottom no-margin-right" href="https://spice-factory.co.jp/mission/">
                Our Mission
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LinkButton from '~/components/buttons/link.vue'

export default {
  components: {
    LinkButton
  },
  data() {
    // 非同期でデータを取り合い場合はここに書く。
    return { text: 'hellow' }
  },
  head() {
    'スパイスファクトリー（株）｜世界に驚きと感動を、僕らのこの手で。'
  }
}
</script>
