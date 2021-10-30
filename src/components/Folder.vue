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
          <button :class="contacts ? 'active' : ''" @click="routePage('contacts')">
            <i class="fas fa-phone fa-lg"></i>CONTACTS
          </button>
          <button :class="profile ? 'active' : ''" @click="routePage('profile')">
            <i class="fas fa-user fa-lg"></i>MY PROFILE
          </button>
          <button class="info"><i class="fas fa-info fa-lg"></i></button>
        </div>
      </div>

      <!-- CONDITIONALLY INSERT OTHER COMPONENTS HERE BASED ON CURRENT PAGE -->
      <group
        v-if="groupInd != null"
        :groupInd="groupInd"
        @showMembers="$emit('showMembers')"
        @showCall="$emit('showCall')"
      ></group>

      <profile
        v-if="profile"
        @changingPassword="$emit('changingPassword')"

      ></profile>

    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
import Group from "./Group.vue";
import Profile from "../components/Profile.vue";
import { mapGetters } from "vuex";

export default {
  name: "Folder",
  components: {
    Group,
    Profile,
  },
  store: store,
  props: {
    activeColor: String,
    manualTitle: String,
    groupInd: Number,
    contacts: Boolean,
    profile: Boolean,
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
      if ((route === 'profile' && this.profile) || (route === 'contacts' && this.contacts)) {
        return
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

    // overflow: hidden;

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

    &.green {
      background-color: $green;
    }

    &.blue {
      background-color: $blue;
    }

    &.orange {
      background-color: $orange;
    }

    &.yellow {
      background-color: $yellow;
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

  &.blue {
    border-color: $blue;
  }

  &.orange {
    border-color: $orange;
  }

  &.yellow {
    border-color: $yellow;
  }

  &.bg {
    border-color: $bg-color;
  }

  h1 {
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    // margin-block: 30px;
  }
}

.folder-nav {
  min-width: 400px;
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

  &.blue {
    border-color: $blue;
  }

  &.orange {
    border-color: $orange;
  }

  &.yellow {
    border-color: $yellow;
  }

  &.green {
    border-color: $green;
  }

  &.bg {
    border-color: $bg-color;
  }
}
</style>

