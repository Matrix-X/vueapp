<style scoped>



</style>

<template>

<div class="test">
    <input type='text' v-model='title' />
    <h1>{{title}}</h1>
    <p v-if='showName'>
        {{user.firstName}}
    </p>
    <p v-else='showName'>
      Nobody
    </p>
    <!-- <p v-text="user.firstName"></p> -->

    <ul>
      <li v-for="item in items">
          {{item.title}}
      </li>
    </ul>
    <button v-on:click="greet('hello world!')">Say Greeting!</button>
    <br/>
    <input type='text' v-on:keyup='pressKey' v-on:keyup.enter='enterHit' />

    <hr>
    <br/>
    <label>FirstName:</label><input type='text' v-model="user.firstName" />
    <br/>
    <label>LastName:</label><input type='text' v-model="user.lastName" />
    <br/>
    <h3>{{fullName}}</h3>
    <h2>{{msg}}</h2>

</div>

</template>

<script>

export default {
    name: 'test',
    props: {
      msg: {
        type: String,
        default: 'Foobar'
      }
    },
    data() {
        return {
            title: 'Hello World',
            user: {
                firstName: 'John',
                lastName: 'Doe'
            },
            showName: false,
            items: [
              {title:'Item 1'},
              {title:'Item 2'},
              {title:'Item 3'}
            ]
        }
    },
    methods: {
      greet: function(greeting){
        alert(greeting);
      },
      pressKey: function(e) {
        console.log(e.target.value);
      },
      enterHit: function(e) {
        console.log('you enter');
      }
    },
    computed: {
      fullName: function(){
        return this.user.firstName + " " + this.user.lastName;
      }
    }
}

</script>
