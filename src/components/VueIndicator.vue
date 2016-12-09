<template>
  <transition name="mint-indicator">
    <div :class="['mint-indicator',cssClass]" v-show="visible">
      <div class="mint-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
        <spinner class="mint-indicator-spin"
        :width="spinOptions.width"
        :size="spinOptions.size"
        :color="spinOptions.color || '#FFF'"
        :css-class="spinOptions.cssClass"
         />
        <span class="mint-indicator-text" v-show="text">{{ text }}</span>
      </div>
      <div class="mint-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<style lang="sass">
  @import "./style.scss"
</style>

<script>
  import Spinner from 'vue-spinner';

  export default {
    data() {
      return {
        visible: false
      };
    },
    components: {
      Spinner
    },
    props: {
      cssClass:String,
      text: String,
      spinOptions:{
        type:Object,
        default:function(){
          return {};
        }
      }
    }
  };
</script>
