<template>
  <div>
    <WideImage />
    <defaultWhitePanel />
    <section class="bg-fast-yellow no-padding wow fadeInUp animated">
      <div class="container">
        <div class="row padding-five sm-text-center">
          <div class="col-md-1">
            <i class="medium-icon black-text no-margin icon-happy"></i>
          </div>
          <div class="col-md-6 no-padding">
            <span class="text-med text-uppercase letter-spacing-2 margin-two black-text font-weight-600 xs-margin-top-six xs-margin-bottom-six display-block">
            JOIN US! 業務拡大に付き、クリエイター絶賛大募集 </span>
          </div>
          <div class="col-md-5 no-padding">
            <a class="highlight-button-dark btn btn-medium button xs-margin-bottom-five xs-no-margin-right" href="https://spice-factory.co.jp/member/">
            働くメンバーを見てみる </a>
            <a class="highlight-button btn btn-medium button xs-margin-bottom-five xs-no-margin-right" href="https://spice-factory.co.jp/recruit/">
            採用情報を見てみる </a>
          </div>
        </div>
      </div>
    </section>
    <p>{{ text }} world!</p>
    <p>テンプレートの部分は別ファイルに切り出すことが可能です。</p>
  </div>
</template>

<script>
import WideImage from '~/components/panels/wideImage.vue'
import defaultWhitePanel from '~/components/panels/defaultWhitePanel.vue'

export default {
  components: {
    WideImage,
    defaultWhitePanel
  },
  data() {
    return { text: 'hellow' }
  },
  head() {
    'スパイスファクトリー（株）｜世界に驚きと感動を、僕らのこの手で。'
  }
}
</script>
