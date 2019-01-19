<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <ul>
        <li><router-link to="/">Users</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
        <li><router-link to="/attributeBinding">attributeBinding</router-link></li>
        <li><router-link to="/computed">Compputed</router-link></li>
        <li><router-link to="/components">Components</router-link></li>
        <li><router-link to="/message">Message</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
