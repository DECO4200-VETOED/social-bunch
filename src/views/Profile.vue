<template>
  <div class="profile">
    <folder
    :manualTitle="'My profile'"
      :activeColor="'bg'"
      :profile="true"
    >
    </folder>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import store from "../store/index.js";

import Folder from "../components/Folder.vue";
// import Popup from "../components/Popup.vue";

export default {
  name: "Profile",
  // store: store,
  created() {
    // if (!store.getters.signedIn) {
    //   this.$router.push("/");
    // }
  },
  components: {
    Folder,
    // Popup,
  },
};
</script>
