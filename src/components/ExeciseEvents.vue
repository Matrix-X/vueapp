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
      this.$emit('applied');

    }
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
          console.log('I am applied!');
          this.couponApplied = true;
        }
    },
    created: function(){

    },
    computed: {

    }
}

</script>
