<template>
  <div class="profile">
    <popup
      v-if="changingPassword"
      @triggerClose="changingPassword = false"
      :color="'green'"
      :type="'password'"
      :title="'Change Password'"
    />
    <popup
      v-if="leaveGroup != null"
      @triggerClose="leaveGroup = null"
      @leaveGroup="processLeave()"
      :color="'green'"
      :type="'leave'"
      :title="`Are you sure you want to leave ${
        $store.getters.groupByInd(leaveGroup + 1).title
      }?`"
      :content="{ index: leaveGroup }"
    />
    <popup
      v-if="joinGroup != null"
      @triggerClose="joinGroup = null"
      @joinGroup="processJoin()"
      :color="'green'"
      :type="'joinGroup'"
      :title="`Are you sure you want to accept your invite to join ${
        $store.getters.groupByInd(joinGroup + 1).title
      }?`"
      :content="{ index: joinGroup }"
    />
    <popup
      v-if="declineInvite != null"
      @triggerClose="declineInvite = null"
      @declineInvite="processDecline()"
      :color="'green'"
      :type="'decline'"
      :title="`Are you sure you want to decline your invite to join ${
        $store.getters.groupByInd(declineInvite + 1).title
      }?`"
      :content="{ index: declineInvite }"
    />
    <folder
      :manualTitle="'My profile'"
      :activeColor="'bg'"
      :profile="true"
      @changingPassword="changingPassword = true"
      @leaveGroup="(value) => (leaveGroup = value)"
      @joinGroup="(value) => (joinGroup = value)"
      @declineInvite="(value) => (declineInvite = value)"
    >
    </folder>
  </div>
</template>

<script>
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
      leaveGroup: null,
      joinGroup: null,
      declineInvite: null,
    };
  },
  components: {
    Folder,
    Popup,
  },
  methods: {
    processLeave() {
      store.commit("leaveGroup", this.leaveGroup);
      this.leaveGroup = null;
    },
    processJoin() {
      store.commit("joinGroup", this.joinGroup);
      this.joinGroup = null;
    },
    processDecline() {
      store.commit("declineInvite", this.declineInvite);
      this.declineInvite = null;
    },
  },
};
</script>
