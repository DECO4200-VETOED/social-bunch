<template>
  <div class="create">
    <div class="top">
      <div class="header">
        <h1>Create a group</h1>
        <div class="nav">
          <button @click="$router.push('contacts')">
            <i class="fas fa-phone fa-lg"></i>CONTACTS
          </button>
          <button @click="$router.push('profile')">
            <i class="fas fa-user fa-lg"></i>MY PROFILE
          </button>
          <button class="info" @click="$store.commit('setHelp', true)"><i class="fas fa-info fa-lg"></i></button>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque
        ultrices proin aenean faucibus. Amet, et vitae, quam congue. Congue
        porttitor massa, ut viverra neque neque. Tortor magna eget sed lorem
        feugiat. Faucibus.
      </p>

      <div class="edit-row">
        <h4 class="label">Group name:</h4>
        <input type="text" v-model="groupName" />
      </div>
      <p v-if="badAttempt">
        <strong> Your group needs a name to get started! </strong>
      </p>
      <div class="edit-row">
        <h4 class="label">Group icon:</h4>

        <div class="icon-container">
          <div
            v-for="(icon, index) in icons"
            :key="icon"
            class="icon-square"
            :class="index == activeIcon ? 'active' : ''"
            @click="activeIcon = index"
          >
            <img :src="require('@/assets/clubicon-' + icon + '.png')" />
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <button class="long outline" @click="$router.push('/home')">
        Cancel
      </button>
      <button class="long green" @click="createGroup">
        Finish creating group
      </button>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
import { mapGetters } from "vuex";
import Popup from "../components/Popup.vue";

export default {
  name: "Create",
  store: store,
  created() {
    if (!store.getters.signedIn) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      activeIcon: 0,
      groupName: "",
      badAttempt: false,
    };
  },
  computed: {
    ...mapGetters(["icons"]),
  },
  methods: {
    createGroup() {
      if (this.groupName === "") {
        this.badAttempt = true;
        return;
      }
      store.commit("createGroup", {
        name: this.groupName,
        icon: this.activeIcon,
      });

      this.$router.push('/home')
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/main.scss";

.top {
  margin: 0 60px;
}

.nav {
  min-width: 400px;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;

  button {
    font-size: 19px;
    font-weight: 700;
    @include sans-serif;
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 48px;

    .fas {
      margin-right: 8px;
    }

    &.info {
      color: $green;
      background-color: white;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      text-align: center;

      .fas {
        margin: 0 auto;
      }
    }
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.create {
  background-color: rgba($green, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.top {
  flex-grow: 1;
  p {
    text-align: left;
  }
}

.bottom {
  background-color: $bg-color;
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;

  .long {
    padding-left: 70px;
    padding-right: 70px;
  }
}

.edit-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 60px;

  .label {
    width: 20%;
    margin-top: 0;
    // flex-grow: 1;
  }

  input {
    height: 40px;
    width: 400px;
  }

  .icon-container {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    .icon-square {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      background-color: $bg-color;
      border: 2px solid #566370;
      border-radius: 4px;

      img {
        height: 64px;
        max-width: 64px;
      }

      &.active {
        background-color: $green;
        border-color: white;
      }
    }
  }
}
</style>

