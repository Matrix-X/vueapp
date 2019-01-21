<style scoped>

</style>

<template>

  <div class="container">
    <progress-view inline-template>
      <div>
        <h1>Your Proress Through This Course Is {{ completionRate }}%</h1>
        <p>
          <button @click="completionRate += 10">Update Completion Rate</button>
        </p>
      </div>
    </progress-view>
  </div>
</template>

<script>

import Vue from 'vue'

Vue.component('progress-view', {

    data() {
      return {
        completionRate: 50
      };
    }


});

export default {
    name: 'ExeciseInlineTemplate',
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
