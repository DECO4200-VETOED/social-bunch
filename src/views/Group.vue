<template>
  <div class="group">
    <popup
      v-if="showingInvites"
      @triggerClose="showingInvites = false"
      :color="groupColor"
      title="Invite members"
      :type="'invite'"
    />
    <popup
      v-if="showingMembers"
      @triggerClose="showingMembers = false"
      :color="groupColor"
      :type="'members'"
      :title="'Members'"
      :content="{ members: groupByInd.members }"
    />
    <popup
      v-if="showingCall"
      @triggerClose="showingCall = false"
      :color="groupColor"
      :title="'Before you join...'"
      :type="'joinCall'"
    />
    <popup
      v-if="showingGoing"
      @triggerClose="showingGoing = false"
      :color="groupColor"
      title="Who's going?"
      :type="'going'"
      :content="getAttendance"
    />
    <folder
      :activeColor="tabColors[groupInd]"
      :groupInd="parseInt(groupInd)"
      @showMembers="showingMembers = true"
      @showCall="showingCall = true"
      @showGoing="showingGoing = true"
      @showInvites="showingInvites = true"
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
  
  components: {
    Folder,
    Popup,
  },
  data() {
    return {
      showingMembers: false,
      showingCall: false,
      showingGoing: false,
      showingInvites: false,
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
    getAttendance() {
      let attendance = { yes: [], no: [], unsure: [] };
      let responses = this.groupByInd.members;
      for (let i = 0; i < responses.length; i++) {
        if (responses[i].attending == null) {
          attendance.unsure.push(responses[i].name);
        } else if (responses[i].attending) {
          attendance.yes.push(responses[i].name);
        } else {
          attendance.no.push(responses[i].name);
        }
      }

      return attendance;
    },
  },
};
</script>
