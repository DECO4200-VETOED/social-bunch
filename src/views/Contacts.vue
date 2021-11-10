<template>
  <div class="contacts">
    <folder :manualTitle="'Contacts'" :activeColor="'bg'" :contacts="true">
    </folder>
  </div>
</template>

<script>
import store from "../store/index.js";
import Folder from "../components/Folder.vue";

export default {
  name: "Contacts",
  store: store,
  created() {
    if (!store.getters.signedIn) {
      this.$router.push("/");
    }
  },
  components: {
    Folder,
  },
};
</script>
