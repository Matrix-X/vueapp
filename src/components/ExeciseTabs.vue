<style scoped>

</style>

<template>

  <div class="container">
      <tabs>
          <tab name="Abous Us" :selected="true">
              <h1>Here is the content for the about us tab</h1>
          </tab>
          <tab name="Abous Our Culture">
              <h1>Here is the content for the about culture tab</h1>
          </tab>
          <tab name="Abous Our Vision">
              <h1>Here is the content for the about vision tab</h1>
          </tab>
      </tabs>
  </div>

</template>

<script>

import Vue from 'vue'

export default {
    name: 'ExeciseTabs',
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

Vue.component('tabs', {

  template:`
    <div>
      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
            <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
          </li>
        </ul>
      </div>

      <div class="tabs-details">
        <slot></slot>
      </div>
    </div>

  `,
  mounted(){
    // console.log(this.$children);
  },
  data() {
    return {
      tabs: []
    }
  },
  created(){
    this.tabs = this.$children;
  },
  methods: {
    selectTab(seletedTab){
      // console.log(seletedTab);
      this.tabs.forEach(tab=>{
        tab.isActive = (tab.name == seletedTab.name);
      });
    }
  }

});

Vue.component('tab', {

  template:`
    <div v-show="isActive"><slot></slot></div>
  `,
  props: {
    name: {required: true},
    selected: {default: false}
  },
  data() {
    return {
      isActive: false
    };
  },
  mounted(){
    this.isActive = this.selected;
  },
  computed:{
    href(){
      return "#" + this.name.toLowerCase().replace(/ /g, '-');
    }
  }

});


</script>
