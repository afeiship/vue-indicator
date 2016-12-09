import Vue from 'vue';

let instance;
let timer;
let Indicator;

module.exports = {
  install(Vue){
    Indicator = Vue.extend(require('./components/VueIndicator.vue'));
  },
  open(options = {}) {
    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    instance.text = typeof options === 'string' ? options : options.text || '';
    instance.spinOptions=options.spinOptions;
    document.body.appendChild(instance.$el);
    if (timer) {
      clearTimeout(timer);
    }

    Vue.nextTick(() => {
      instance.visible = true;
    });
  },

  close() {
    if (instance) {
      instance.visible = false;
      timer = setTimeout(() => {
        if (instance.$el) {
          instance.$el.style.display = 'none';
        }
      }, 300);
    }
  }
};
