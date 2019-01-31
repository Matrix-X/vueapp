<style scoped>

</style>

<template>

  <div class="container">
    <ul>
      <li v-for="skill in skills">{{ skill }}</li>
    </ul>
  </div>
</template>


<script>

import Vue from 'vue'

export default {
    name: 'ExeciseAjax',
    props: {},
    data() {
        return {
          skills:null
        }
    },
    methods: {

    },
    created: function(){

    },
    mounted(){
      // make an ajax request to our server - blog.com/api/skills
      // console.log("ajax on mounted");

      // axios https://github.com/axios/axios
      axios.get('http://blog.com/api/skills').then(response => {
        console.log(response.data);
        this.skills = response.data;
      });

    },
    computed: {

    }
}

</script>
