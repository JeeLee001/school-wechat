<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

//Base setting and reset
html{
  font-size: 62.5%;
}

#app{
  max-width: 41.2rem;
  margin: 0 auto;
}

h2 {
  font-size: 1.68rem;
  font-weight: normal;
  color: #111;
}

ul, li, a, h2 {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
