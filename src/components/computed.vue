<style scoped>

.color-red {
  color:red;
}
.color-blue {
  color:blue;
}
.is-loading {
  background-color: red;
}

</style>

<template>

  <div class="attributeBinding">


    <h1>All tasks</h1>
    <ul>
      <li v-for="(task, index) in tasks" ref="taskIndex+index" v-text="index+ ' ' +task.description"></li>
    </ul>

    <h1>incomplete tasks</h1>
    <ul>
      <li v-for="(task, index) in incompleteTasks" ref="incompletedTaskIndex+index" v-text="index+ ' ' +task.description"></li>
    </ul>

    <h1>completed tasks</h1>
    <ul>
      <li v-for="(task, index) in tasks" ref="completedTaskIndex+index" v-if="task.completed" v-text="index+ ' ' +task.description"></li>
    </ul>

  </div>



</template>

<script>

export default {
    name: 'attributebinding',
    props: {},
    data() {
        return {
          title: 'Now the title is set through javascript',
          className: "color-red",
          isLoading: false,

          message: 'Hello World',
          tasks: [
            { description: "Go to the store", completed: true},
            { description: "Finish screenshot", completed: false},
            { description: "Make donation", completed: false},
            { description: "Clear Inbox", completed: false},
            { description: "Make dinner", completed: false},
            { description: "Clean room", completed: true},
          ]
        }
    },
    methods: {
        toggleClass(){
          this.isLoading = true;
        }
    },
    created: function(){

    },
    computed: {
      // reversedMessage(){
      //   return this.message.split('').reverse().join('');
      // }
      incompleteTasks(){
          return this.tasks.filter( task => !task.completed );
      }



    }
}

</script>
