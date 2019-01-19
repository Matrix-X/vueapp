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

    <button v-on:click='' v-bind:title="title">hover over me</button>
    <button @click='' :title="title">hover over me</button>
    <h1 :class='className'>Hello World</h1>
    <button @click="toggleClass" :class="{'is-loading':isLoading}">Click me</button>

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
          isLoading: false
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
