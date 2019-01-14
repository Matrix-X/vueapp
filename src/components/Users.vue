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
          users: [
            {
              name: 'John Doe',
              email: 'JDoe@gmail.com',
              contacted: false
            },
            {
              name: 'Steven Smith',
              email: 'SSmith@gmail.com',
              contacted: false
            },
            {
              name: 'Tom White',
              email: 'TWhite@gmail.com',
              contacted: false
            }
          ]
        }
    },
    methods: {
      addUser: function(e){
        e.preventDefault({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        });
        console.log("add User");
        this.users.push();
      },
      deleteUser: function (user) {
        this.users.splice(this.users.indexOf(user), 1);
      },
      created: function(){
        console.log("created ran...");
      }
    },
    computed: {
    }
}

</script>
