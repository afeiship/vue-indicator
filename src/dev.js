import Vue from 'vue'
import VueIndicator from './components/VueIndicator.vue'

Vue.component(VueIndicator.name, VueIndicator)

console.log(VueIndicator);

Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><vue-indicator>Hello</vue-indicator></div>',
  components: { VueIndicator }
})
