<template>
  <div id="app">
    <div id="nav">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
  font-family: 'Roboto', Helvetica, sans-serif;
}

#app {
  width: 100vw;
  min-height: 100vh;
}
</style>
