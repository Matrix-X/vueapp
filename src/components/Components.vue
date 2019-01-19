<style scoped>

</style>

<template>

  <div class="components">
    <task>go to the store</task>
    <task>go to the bank</task>
    <task>go to work</task>
  </div>



</template>

<script>


// add new task component
import Vue from 'vue'

Vue.component('task', {
  template: '<li><slot></slot></li>'
});
// add new task component



export default {
    name: 'Components',
    props: {},
    data() {
        return {

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
