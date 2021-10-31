<template>
  <div class="profile">
    <div class="profile-top">
      <div class="left">
        <img :src="require('@/assets/' + profileData.avatar)" />
        <h3>My Groups</h3>
      </div>
      <div class="right">
        <div class="edit-row">
          <h4>NAME:</h4>
          <input type="text" v-model="profileData.name" />
        </div>
        <div class="edit-row">
          <h4>TELEPHONE:</h4>
          <input type="text" v-model="profileData.telephone" />
        </div>
        <div class="edit-row">
          <h4>EMAIL:</h4>
          <input type="text" v-model="profileData.email" />
        </div>
        <div class="edit-row">
          <p><em>Share these details with your groups</em></p>
          <button class="custom-checkbox" @click="$store.commit('toggleShare')">
            <i v-if="profileData.sharing" class="fa fa-check fa-2x"></i>
          </button>
        </div>
        <button class="long green" @click="$emit('changingPassword')">Change password</button>
      </div>
    </div>
    <div class="profile-bottom">
      <div class="groups">
        <div
          v-for="group in $store.getters.profileGroups"
          :key="group.index"
          class="group-div"
        >
          <div class="group-tile" :class="!editing ? group.color + ' expanded' : group.color">
            <h4>{{ group.title }}</h4>
            <img
              v-if="!editing && !group.invited"
              :src="require('@/assets/clubicon-' + group.icon + '.png')"
              class="bottom"
            />
            <p v-if="!editing && group.invited"><em>Pending invite</em></p>
          </div>
          <button v-if="editing && !group.invited" class="long black" @click="$emit('leaveGroup', group.index)">
            LEAVE GROUP
          </button>
          <button v-if="editing && group.invited" class="long green" @click="$emit('joinGroup', group.index)">
            JOIN GROUP
          </button>
          <button v-if="editing && group.invited" class="long black" @click="$emit('declineInvite', group.index)">
            DECLINE
          </button>
        </div>
      </div>
      <div class="edit-button">
        <button @click="editing = !editing">
          {{ editing ? "DONE" : "EDIT" }}
          <i class="fas fa-pencil-alt fa-lg"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store/index.js";
import Folder from "../components/Folder.vue";

export default {
  name: "Profile",
  store: store,
  created() {
    if (!store.getters.signedIn) {
      this.$router.push("/");
    }
  },
  components: {
    Folder,
  },
  computed: {
    ...mapGetters(["profileData"], ["share"]),
  },
  data() {
    return {
      editing: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/main.scss";

.profile {
  display: flex;
  flex-direction: column;
  // margin: 0;
  margin: 16px 64px;

  .profile-top {
    display: flex;
    justify-content: space-between;

    .left {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;

      img {
        height: 200px;
        width: 200px;
        margin: 0 auto;
      }

      h3 {
        margin-bottom: 4px;
        text-align: left;
      }
    }

    .right {
      .long {
        min-width: 300px;
        float: right;
      }

      .edit-row {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 32px;
        align-items: center;
        margin: 8px;

        input {
          height: 48px;
          width: 300px;
        }

        h4 {
          margin: 0px;
        }

        .custom-checkbox {
          height: 36px;
          width: 36px;
          margin: 0;
          border-color: #566370;
        }
      }
    }
  }

  .profile-bottom {
    border-top: 2px solid $green;
    display: flex;
    .edit-button {
      margin-top: 16px;
      margin-left: 16px;
      button {
        font-size: 19px;
        font-weight: 700;
        @include sans-serif;
        border: none;
        background-color: $bg-color;
        cursor: pointer;
      }
    }

    .groups {
      flex-grow: 1;
      // background-color: red;
      display: flex;
      flex-direction: row;
      gap: 32px;
      overflow-x: scroll;
    }
  }
}

.group-tile {
  width: 200px;
  margin: 16px 0 0;
  border-radius: 30px;

  &.expanded {
  flex-grow: 1;

  }

  img {
    height: 64px;
    margin-bottom: 16px;
    padding: 0;
  }

  em {
    color: red;
  }

  p {
    font-weight: 700;
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

  &.red {
    border: 2px solid red;
  }
}

.group-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  gap: 16px;

  button {
    width: 200px;
    font-size: 19px;
    margin: 0;
  }
}
</style>
