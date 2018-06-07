<template>
  <section id="blog" class="wow fadeIn animated" style="visibility: visible; animation-name: fadeIn;">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h3 class="section-title">最新情報</h3>
        </div>
        <div class="separator-line bg-yellow margin-five"></div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-4 wow fadeInUp animated" data-wow-duration="600ms" style="visibility: visible; animation-duration: 600ms; animation-name: fadeInUp;">
          <ImageText />
        </div>
        <div class="col-md-4 col-sm-4 wow fadeInUp animated" data-wow-duration="600ms" style="visibility: visible; animation-duration: 600ms; animation-name: fadeInUp;">
          <ImageText />
        </div>
        <div class="col-md-4 col-sm-4 wow fadeInUp animated" data-wow-duration="600ms" style="visibility: visible; animation-duration: 600ms; animation-name: fadeInUp;">
          <ImageText />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center wow fadeInUp animated" data-wow-duration="1200ms" style="visibility: visible; animation-duration: 1200ms; animation-name: fadeInUp;">
          <a class="btn btn-black btn-small margin-four no-margin-bottom" href="https://spice-factory.co.jp/news/">すべて見る</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageText from '~/components/cassette/imageText.vue'

export default {
  components: {
    ImageText
  }
}
</script>
