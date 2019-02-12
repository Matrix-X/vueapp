<style scoped>

</style>

<template>

  <div class="container">
    <input type='text' v-model='coupon'>
  </div>
</template>

<script>

import Vue from 'vue'

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
