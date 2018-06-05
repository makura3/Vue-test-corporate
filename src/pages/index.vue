<template>
  <div>
    <WideImage />
    <p>{{ text }} world!</p>
    <p>テンプレートの部分は別ファイルに切り出すことが可能です。</p>
  </div>
</template>

<script>
import WideImage from '~/components/panels/wideImage.vue'

export default {
  components: {
    WideImage
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
