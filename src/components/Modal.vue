<style scoped>

.container{
  /* top right bottom left */
  padding: 20px 20px 0px 20px;

}

</style>

<template>

  <div class="container">

    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->
        <div class="box">
          <slot></slot>
        </div>

      </div>
      <button @click='$emit("close")' class="modal-close is-large" aria-label="close"></button>
    </div>

  </div>
</template>

<script>





export default {
    name: 'message',
    props: {
      title: 'asdfsdf',
      body: 'alsjflasdfjsad;lkfj'
    },
    data() {
        return {
          showModal: false
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
