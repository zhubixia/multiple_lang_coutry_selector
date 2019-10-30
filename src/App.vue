<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <country-selector v-model="selected" width="260" language="en"></country-selector>
  </div>
</template>

<script>
import CountrySelector from 'vue-country-selector'
export default {
  name: 'app',
  data() {
    return {
      country: [
          {
              code: 'CN',             // id
              cnName: '中国',        // 中文名
              cnSpell: 'zhongguo',    // 中文拼音（大小写均可）
              enName: 'China',        // 英文名
              hot: true               // 是否热门，值为true的国家将显示在HOTtab下
          },
          {
              code: 'us',
              cnName: '美国',
              cnSpell: 'meiguo',
              enName: 'United States of America',
              hot: true
          },
      ]
    }
  },
  components: {
    CountrySelector
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
