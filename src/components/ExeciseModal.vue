<style scoped>

.container{
  /* top right bottom left */
  padding: 20px 20px 0px 20px;

}

</style>

<template>

  <div class="container">

    <modal v-show="showModal" @close="showModal=false">
      <p>we insert any text here.</p>
    </modal>
    <button @click="showModal=true" >show button</button>


  </div>
</template>

<script>

import Vue from 'vue'

Vue.component('modal', {
    name: 'ExeciseTabs',
    props: {},
    data() {
        return {

        }
    },

    template: `
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
    `
});




export default {
    name: 'ExeciseModal',
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
