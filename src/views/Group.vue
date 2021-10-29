<template>
  <div class="group">
    <popup
      v-if="showingMembers"
      @triggerClose="showingMembers = false"
      :color="groupColor"
      :type="'members'"
      :title="'Members'"
      :content="{members: groupByInd.members}"
    />
    <popup
      v-if="showingCall"
      @triggerClose="showingCall = false"
      :color="groupColor"
      :title="'Before you join...'"
      :type="'joinCall'"
    />
    <folder
      :activeColor="tabColors[groupInd]"
      :groupInd="parseInt(groupInd)"
      @showMembers="showingMembers = true"
      @showCall="showingCall = true"
    >
    </folder>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store/index.js";

import Folder from "../components/Folder.vue";
import Popup from "../components/Popup.vue";

export default {
  name: "Group",
  store: store,
  created() {
    if (!store.getters.signedIn) {
      this.$router.push("/");
    }
  },
  components: {
    Folder,
    Popup,
  },
  data() {
    return {
      showingMembers: false,
      showingCall: false,
    };
  },
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
