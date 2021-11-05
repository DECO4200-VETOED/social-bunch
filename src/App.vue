<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/group">Group</router-link>
    </div> -->
    <help v-if="viewHelp" />
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import './assets/main.scss'
import Help from './components/Help.vue'
import store from './store/index.js'

export default {
  components: { Help },
  name: "App",
  store: store,
  computed: {
    ...mapGetters(["viewHelp"])
  }
}

</script>


<style lang="scss">
@import "./src/assets/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
    overflow: hidden;
    margin: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
