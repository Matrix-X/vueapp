<style scoped>

.contacted{
  text-decoration: line-through;
}

</style>

<template>

  <div class="users">

    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter Name"/>
      <br/>
      <input type="text" v-model="newUser.email" placeholder="Enter Email"/>
      <br/>
      <input type="submit" value="Submit" />

    </form>
    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted" />
        <span :class="{contacted: user.contacted}">
          {{ user.name }} {{ user.email }} <button v-on:click="deleteUser(user)">X</button>
        </span>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
    name: 'users',
    props: {},
    data() {
        return {
          newUser: {},
          users: []
        }
    },
    methods: {
      addUser: function(e){
        e.preventDefault();
        console.log("add User");
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        });
      },
      deleteUser: function (user) {
        this.users.splice(this.users.indexOf(user), 1);
      }
    },
    created: function(){
      // console.log("created ran...");
      this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function(response){
          // console.log(response.data);
          this.users = response.data;
      });
    },
    computed: {
    }
}

</script>
