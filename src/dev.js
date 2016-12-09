import Vue from 'vue'
import VueIndicator from './main.js'


Vue.use(VueIndicator);
Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><button v-on:click="_click()">Click To Show Indicator</button></div>',
  components: { VueIndicator },
  methods:{
    _click:function () {
      VueIndicator.open({
        text:"加载中...",
        spinOptions:{
          size:'40px',
          width:'2px'
        }
      });
      setTimeout(function(){
        VueIndicator.close();
      },1200)
    }
  }
})
