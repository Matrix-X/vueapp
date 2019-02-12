<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <ul class="menuGuid">
        <li><router-link to="/">Users</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
        <li><router-link to="/attributeBinding">attributeBinding</router-link></li>
        <li><router-link to="/computed">Compputed</router-link></li>
        <li><router-link to="/components">Components</router-link></li>
        <li><router-link to="/message">Message</router-link></li>
        <li><router-link to="/modal">Modal</router-link></li>
        <li><router-link to="/tabs">Tabs</router-link></li>
        <li><router-link to="/events">Events</router-link></li>
        <li><router-link to="/slot">Slot</router-link></li>
        <li><router-link to="/inlineTemplate">InlineTemplate</router-link></li>
        <li><router-link to="/ajax">Ajax</router-link></li>
        <li><router-link to="/shareState">Share State101</router-link></li>
        <li><router-link to="/customInput">custom input</router-link></li>
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


.menuGuid{
  display:flex;
  flex-wrap:wrap;
  padding-left:40px;

}
.menuGuid li{
  margin: 0 0 0 20px;
}




</style>
