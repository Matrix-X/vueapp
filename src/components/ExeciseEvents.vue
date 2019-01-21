<style scoped>

</style>

<template>

  <div class="container">
    <coupon @applied="onCouponApplied"></coupon>
    <h1 v-if="couponApplied">You used a coupon!</h1>
  </div>
</template>

<script>

import Vue from 'vue'

// define a shared instance for eventing sharing
// window.Event = new Vue();
window.Event = new class {
  constructor(){
    this.vue = new Vue();
  }

  fire(event, data=null){
    this.vue.$emit(event, data);
  }

  listen(event, callback){
    this.vue.$on(event, callback);
  }
}
// console.log(Event);

Vue.component('coupon', {
  template: `
    <input placeholder='Enter your coupon' @blur="onCouponApplied">
  `,
  data() {
    return {

    };
  },
  methods: {
    onCouponApplied() {
      // console.log('applied!');
      // this.$emit('applied');
      // Event.$emit('applied');
      Event.fire('applied');

    }
  },
  created() {

  }

});


export default {
    name: 'ExeciseEvents',
    props: {},
    data() {
        return {
            couponApplied: false
        }
    },
    methods: {
        onCouponApplied() {
          // console.log('I am applied!');
          // this.couponApplied = true;
        }
    },
    created: function(){
      // Event.$on('applied', () => console.log('Handling it!') );
      Event.listen('applied', () => console.log('Handling it!') );
    },
    computed: {

    }
}

</script>
