<template>
  <div class="profile">
    <popup
      v-if="changingPassword"
      @triggerClose="changingPassword = false"
      :color="'green'"
      :type="'password'"
      :title="'Change Password'"
    />
    <folder
      :manualTitle="'My profile'"
      :activeColor="'bg'"
      :profile="true"
      @changingPassword="changingPassword = true"
    >
    </folder>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import store from "../store/index.js";

import Folder from "../components/Folder.vue";
import Popup from "../components/Popup.vue";

export default {
  name: "Profile",
  store: store,
  created() {
    if (!store.getters.signedIn) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      changingPassword: false,
    };
  },
  components: {
    Folder,
    Popup,
  },
};
</script>
