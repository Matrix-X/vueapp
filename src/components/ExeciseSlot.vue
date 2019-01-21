<style scoped>

</style>

<template>

  <div class="container">

      <modal>
          <template slot="header">
              my title
          </template>
          Here is the main content.
          <template slot="footer">
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
          </template>
      </modal>

  </div>
</template>

<script>

import Vue from 'vue'

Vue.component('modal', {

  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <slot name='header'></slot>
          </p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <slot>
            Default content here.
          </slot>
        </section>
        <footer class="modal-card-foot">
          <slot name="footer">
            <button class="button is-success">OKay</button>
          </slot>
        </footer>
      </div>
    </div>
  `

});


export default {
    name: 'ExeciseSlot',
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
