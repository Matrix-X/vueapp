<style scoped>

.container{
  /* top right bottom left */
  padding: 20px 20px 0px 20px;

}

</style>

<template>

  <div class="container">

    <article class="message" v-show="isVisiable">
      <div class="message-header">
        <p>{{ title }}</p>
        <button class="delete" aria-label="delete" @click="hideModal"></button>
      </div>
      <div class="message-body">{{ body }}</div>
    </article>

  </div>
</template>

<script>





export default {
    name: 'message',
    props: {
      title: '',
      body: ''
    },
    data() {
        return {
          isVisiable: true
        }
    },
    methods: {
      hideModal(){
        this.isVisiable = false;
      }
    },
    created: function(){

    },
    computed: {

    }
}

</script>
