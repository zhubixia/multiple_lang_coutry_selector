import Vue from 'vue'
import App from './App.vue'
import CountrySelector from 'vue-country-selector'
import 'vue-country-selector/dist/countryselector.css'

Vue.use(CountrySelector)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
