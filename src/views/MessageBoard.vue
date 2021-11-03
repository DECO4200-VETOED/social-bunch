<template>
  <div class="message-board">
    <folder
      :activeColor="tabColors[groupInd]"
      :groupInd="parseInt(groupInd)"
      :messageBoard="true"
    />
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store/index.js";

import Folder from "../components/Folder.vue";

export default {
  name: "MessageBoard",
  store: store,
//   created() {
//     if (!store.getters.signedIn) {
//       this.$router.push("/");
//     }
//   },
  components: {
    Folder,
    // Popup,
  },
//   data() {
//     return {
//       showingMembers: false,
//       showingCall: false,
//       showingGoing: false,
//       showingInvites: false,
//     };
//   },
  computed: {
    ...mapGetters(["tabColors"]),
    groupInd() {
      return this.$route.params.id;
    },
    groupByInd() {
      return store.getters.groupByInd(this.groupInd)
    },
    groupColor() {
      return store.getters.colorByGroup(this.groupInd);
    },
    
  },
};
</script>
