<template>
  <div class="home">
    <folder :activeColor="'yellow'"></folder>
  </div>
</template>

<script>
import Folder from '../components/Folder.vue'

export default {
  name: 'Home',
  components: {
    Folder
  }
}
</script>
