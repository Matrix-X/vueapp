<style scoped>

</style>

<template>

  <div class="container">
    <!-- <input type='text' v-model='coupon'> -->
    <!-- <input type='text' :value='coupon' @input="coupon = $event.target.value"> -->
    <coupon v-model='coupon'></coupon>
  </div>
</template>

<script>

import Vue from 'vue'

Vue.component('coupon', {
  props:['code'],
  data(){
    return {
      invalids: ['ALLFREE', 'SOMETHINGELSE']
    }
  },
  template:`
    <input type='text' :value='code' @input="updateCode($event.target.value)" ref="input">
  `,
  methods:{
    updateCode(code){

      if(this.invalids.includes(code)){
        console.log("this coupon is no longer valid. Sorry!");
        this.$refs.input.value = code = "";

      }

      this.$emit('input', code);
    }
  }
});

export default {
    name: 'CustomInput',
    props: {},
    data() {
        return {
          coupon:"FREEBIE"
        }
    },
    methods: {

    },
    created: function(){

    },
    computed: {

    }
}

</script>
