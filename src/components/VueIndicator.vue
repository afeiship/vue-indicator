<template>
  <button class="vue-indicator" v-on:click="_click()" :type="type">
    <i>ICON</i>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'vue-indicator',
    props:{
      type:{
        type:String,
        default:'vue-indicator'
      }
    },
    methods:{
      _click:function(){
        alert('Hello YO VUE!');
      }
    }
  };
</script>

<style lang="scss">
  .vue-indicator{
    border:none;
    background: #999;
    padding:10px;
    font-size: 12px;
    color:#333;
    border-radius: 4px;
    i{
      color:#00f;
      font-size: 8px;
    }
  }
</style>
