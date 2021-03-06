<template>
  <div class="folder">
    <div class="tab-area">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab"
        :class="tab.color + isActive(index)"
        @click="routeGroup(index)"
      >
        <span
          ><p>{{ tab.text }}</p></span
        >
      </div>
    </div>
    <div class="folder-area" :class="activeColor">
      <div class="folder-header" :class="activeColor">
        <h1>{{ title }}</h1>
        <div class="folder-nav">
          <button
            :class="contacts ? 'active' : ''"
            @click="routePage('contacts')"
          >
            <i class="fas fa-phone fa-lg"></i>CONTACTS
          </button>
          <button
            :class="profile ? 'active' : ''"
            @click="routePage('profile')"
          >
            <span v-if="$store.getters.invites.length > 0" class="fa-stack fa-lg has-badge">
              <i class="fas fa-user fa-stack-lg"></i>
            </span>
            <i v-else class="fas fa-user fa-lg"></i>
            MY PROFILE
          </button>

          <button class="info" @click="$store.commit('setHelp', true)">
            <i class="fas fa-info fa-lg"></i>
          </button>
        </div>
      </div>

      <!-- CONDITIONALLY INSERT OTHER COMPONENTS HERE BASED ON CURRENT PAGE -->
      <message-board
        v-if="messageBoard"
        :groupInd="groupInd"
        @newPost="$emit('newPost')"
      />
      <group
        v-else-if="groupInd != null"
        :groupInd="groupInd"
        @showMembers="$emit('showMembers')"
        @showCall="$emit('showCall')"
        @showGoing="$emit('showGoing')"
        @showInvites="$emit('showInvites')"
      ></group>

      <profile
        v-if="profile"
        @changingPassword="$emit('changingPassword')"
        @leaveGroup="(value) => $emit('leaveGroup', value)"
        @joinGroup="(value) => $emit('joinGroup', value)"
        @declineInvite="(value) => $emit('declineInvite', value)"
      ></profile>

      <contacts v-if="contacts"></contacts>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
import Group from "./Group.vue";
import Profile from "../components/Profile.vue";
import Contacts from "../components/Contacts.vue";
import MessageBoard from "../components/MessageBoard.vue";
import { mapGetters } from "vuex";

export default {
  name: "Folder",
  components: {
    Group,
    Profile,
    Contacts,
    MessageBoard,
  },
  store: store,
  props: {
    activeColor: String,
    manualTitle: String,
    groupInd: Number,
    contacts: Boolean,
    profile: Boolean,
    messageBoard: Boolean,
  },
  computed: {
    ...mapGetters(["tabs"], ["tabColors"]),
    title() {
      if (this.groupInd != null) {
        return this.$store.state.data.groups[this.groupInd - 1].title;
      }
      return this.manualTitle;
    },
  },
  methods: {
    routeGroup(index) {
      if (index == this.groupInd) {
        return;
      } else if (index == 0) {
        this.$router.push("/home");
      } else {
        this.$router.push(`/group/${index}`);
      }
    },
    routePage(route) {
      if (
        (route === "profile" && this.profile) ||
        (route === "contacts" && this.contacts)
      ) {
        return;
      }
      this.$router.push(`/${route}`);
    },
    isActive(index) {
      if (this.groupInd == index) {
        return " active";
      }

      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/main.scss";

.fas {
  margin-right: 8px;
}

.folder {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.tab-area::-webkit-scrollbar {
  display: none;
}

.tab-area {
  background-color: white;
  min-width: 64px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  overflow-x: hidden;
  overflow-y: scroll;

  .tab {
    @include backgrounds;
    z-index: 10;
    margin: 8px 0;
    min-height: 200px;
    width: 48px;
    border-radius: 8px 0 0 8px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    display: flex;
    cursor: pointer;

    span {
      height: 160px;
      padding-top: 20px;
    }

    p {
      writing-mode: vertical-rl;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: inline-block;
      overflow: hidden;
      height: 160px;
      transform: rotate(180deg);
    }

    &.active {
      width: 56px;
    }
  }
}

.folder-area {
  background-color: $bg-color;
  width: 100%;
  height: 100%;
  border-left-style: solid;
  border-left-width: 5px;
  max-width: calc(100% - 69px);

  @include borders;

  h1 {
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

.folder-nav {
  min-width: 440px;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;

  button {
    font-size: 19px;
    font-weight: 700;
    @include sans-serif;
    border: none;
    background-color: $bg-color;
    cursor: pointer;
    margin-left: 20px;

    &.info {
      color: white;
      background-color: $green;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      text-align: center;

      .fas {
        margin: 0 auto;
      }
    }

    &.active {
      border-bottom: 6px solid $green;
    }
  }
}

.folder-header {
  margin: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-bottom-color: black;

  @include borders;
}
</style>

