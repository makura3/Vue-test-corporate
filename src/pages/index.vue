<template>
  <div>
    <p>{{ text }} world!</p>
    <p>テンプレートの部分は別ファイルに切り出すことが可能です。</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: 'hello'
      }
    }
  }
</script>