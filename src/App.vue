<template>
  <div class="app-wrapper">
    <h1>Home</h1>
    <h1>Sign in</h1>
    <h1>Create an account</h1>
    <h1>Home</h1>
    <i class="fas fa-times fa-3x"></i>
  </div>
</template>

<script>
import './assets/main.scss'
import store from "./store/Store.js"

export default {
  name: 'App',
  store: store,
  created() {
    store.commit("loadState")
  }
}
</script>

