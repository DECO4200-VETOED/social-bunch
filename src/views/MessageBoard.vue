<template>
  <div class="message-board">
    <popup
      v-if="newPost"
      @triggerClose="newPost = false"
      :color="groupColor"
      :type="'post'"
      :title="'New Post'"
      :content="{ groupInd: groupInd }"
    />
    <folder
      :activeColor="tabColors[groupInd]"
      :groupInd="parseInt(groupInd)"
      :messageBoard="true"
      @newPost="newPost = true"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store/index.js";

import Folder from "../components/Folder.vue";
import Popup from "../components/Popup.vue";

export default {
  name: "MessageBoard",
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
      newPost: false,
    };
  },
  computed: {
    ...mapGetters(["tabColors"]),
    groupInd() {
      return this.$route.params.id;
    },
    groupByInd() {
      return store.getters.groupByInd(this.groupInd);
    },
    groupColor() {
      return store.getters.colorByGroup(this.groupInd);
    },
  },
};
</script>
