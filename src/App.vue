<template>
  <div id="app">
    <help v-if="viewHelp" />
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "./assets/main.scss";
import Help from "./components/Help.vue";
import store from "./store/index.js";

export default {
  components: { Help },
  name: "App",
  store: store,
  computed: {
    ...mapGetters(["viewHelp"]),
  },
};
</script>

<style lang="scss">
@import "./src/assets/main.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  min-height: 100%;
  overflow: hidden;
  margin: 0;
}
</style>
