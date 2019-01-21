<style scoped>

</style>

<template>

  <div class="components">

    <task-list></task-list>

    <message title="helloworld" body=" Lorem ipsum dolor sit amet "></message>

  </div>



</template>

<script>


// add new task component
import Vue from 'vue'
import Message from '@/components/Message'

Vue.component('task-list', {
  template:`
    <div>
      <task v-for="(task, index) in tasks" v-bind:key="task.task">{{ task.task }}</task>
    </div>
  `,
  data() {
    return {
      tasks: [
        { task: "Go to the store", completed: true},
        { task: "Go to the email", completed: false},
        { task: "Go to the farm", completed: true},
        { task: "Go to work", completed: false}
      ]
    };
  }

});

Vue.component('task', {
  template: '<li><slot></slot></li>'
});
// add new task component



export default {
    name: 'Components',
    props: {},
    data() {

    },
    methods: {

    },
    created: function(){

    },
    computed: {

    }
}

</script>
