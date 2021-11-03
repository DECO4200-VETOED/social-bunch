<template>
  <div v-if="tabs.length < 2">
    <div class="home-header">
      <h1>Home</h1>
      <div class="home-nav">
        <button @click="routePage('contacts')">
          <i class="fas fa-phone fa-lg"></i>CONTACTS
        </button>
        <button @click="routePage('profile')">
          <i class="fas fa-user fa-lg"></i>MY PROFILE
        </button>
      </div>
    </div>
    <div class="vertical-center">
      <p>Join or create a group to get started with Social Bunch!</p>
      <div class="row" style="width: 60%; margin: 30px auto;">
        <button class="long green" @click="routePage('create')">
          <i class="fas fa-plus fa-me"></i>Create a group
        </button>
        <button class="long black" @click="signOut">Sign out</button>
      </div>
    </div>
    <div class="circle" @click="route()"></div>
  </div>
  <div v-else class="home">
    <popup
      v-if="showingCall"
      @triggerClose="showingCall = false"
      :color="groupColor"
      :title="'Before you join...'"
      :type="'joinCall'"
    />
    <div class="home-header">
      <h1>Home</h1>
      <div class="home-nav">
        <button @click="routePage('contacts')">
          <i class="fas fa-phone fa-lg"></i>CONTACTS
        </button>
        <button @click="routePage('profile')">
          <i class="fas fa-user fa-lg"></i>MY PROFILE
        </button>
      </div>
    </div>

    <div class="row">
      <h3>Your groups</h3>
      <div>
        <button class="long green" @click="routePage('create')">
          <i class="fas fa-plus fa-me"></i>Create a group
        </button>
        <button class="long black" @click="signOut">Sign out</button>
      </div>
    </div>

    <div class="tile-row">
      <div
        v-for="(group, index) in groups"
        :key="index"
        class="tile"
        :class="group[index].color"
        @click="route(parseInt(index + 1))"
      >
        <h4>{{ group.title }}</h4>
        <div class="row">
          <img
            :src="require('@/assets/clubicon-' + group.icon + '.png')"
            :class="groups.length > 2 ? 'centered' : ''"
          />
          <h1
            v-if="groups.length < 3"
            :class="
              groups.length < 2
                ? group[index].color + ' one'
                : group[index].color
            "
          >
            {{ group.title }}
          </h1>
        </div>
      </div>
    </div>

    <div class="bottom-section">
      <div class="meetings-block">
        <div class="heading-row">
          <h3>Upcoming meetings</h3>
          <h4>Attending?</h4>
        </div>

        <div
          v-for="meeting in nextTwoMeetings"
          :key="meeting.groupInd"
          class="group-row"
        >
          <div class="group-label">
            <div class="group-key" :class="meeting.color"></div>
            <p>{{ meeting.text }}</p>
          </div>
          <button
            v-if="meeting.happeningNow"
            class="black long join-call"
            @click="joinCall(meeting.color)"
          >
            Join call
          </button>
          <div v-else class="rsvp-row">
            <button
              class="rsvp"
              :class="meeting.response == true ? meeting.color : ''"
              @click="triggerRSVP(true, meeting)"
            >
              <i class="fas fa-thumbs-up fa-2x"></i>
            </button>
            <button
              class="rsvp"
              :class="meeting.response == false ? meeting.color : ''"
              @click="triggerRSVP(false, meeting)"
            >
              <i class="fas fa-thumbs-down fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="circle" @click="route()">
        <button
              class="long white"
            >Need help?
            </button>
        <img src="../assets/FAQ_Lady.png" height="250px" style="float: right" />
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
import { mapGetters } from "vuex";
import Popup from "../components/Popup.vue";

export default {
  name: "Home",
  store: store,
  components: { Popup },
  created() {
    if (!store.getters.signedIn) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      showingCall: false,
      groupColor: null,
    };
  },
  computed: {
    ...mapGetters(["tabs", "nextTwoMeetings", "groups"]),
  },
  methods: {
    joinCall(color) {
      this.groupColor = color;
      this.showingCall = true;
    },
    route(num) {
      this.$router.push(`/group/${num}`);
    },
    routePage(route) {
      this.$router.push(`/${route}`);
    },
    triggerRSVP(button, meeting) {
      if (meeting.response == button) {
        store.getters.groupByInd(meeting.groupInd).nextMeeting.response = null;
      } else {
        store.getters.groupByInd(meeting.groupInd).nextMeeting.response =
          button;
      }
    },
    signOut() {
      store.commit('signOut')
      this.$router.push('/')
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/main.scss";

.fas {
  margin-right: 8px;
}

h3,
h4 {
  margin-block-start: 0;
  margin-block-end: 0;
}

.meetings-block {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 60px;
  width: 100%;
  margin-bottom: 30px;
  max-width: 700px;
  p {
    font-weight: 700;
  }
}

.bottom-section {
  margin-left: 60px;
  margin-right: 300px;
  display: flex;
  flex-direction: row;
}

.heading-row,
.group-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;

  .group-label {
    display: flex;
    flex-direction: row;
    align-items: center;

    .group-key {
      margin-right: 15px;
      width: 30px;
      height: 15px;

      &.blue {
        background-color: $blue;
      }

      &.orange {
        background-color: $orange;
      }

      &.yellow {
        background-color: $yellow;
      }
    }
  }

  .rsvp-row {
    width: 140px;
    display: flex;
    justify-content: space-between;
  }

  button {
    &.join-call {
      width: 140px;
    }

    &.rsvp {
      width: 56px;
      height: 56px;

      .fas {
        margin: 0 auto;
      }
    }
  }
}

.circle {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 280px;
  width: 280px;
  min-height: 280px;
  min-width: 280px;
  background-color: $green;
  border-radius: 100% 0 0 0;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;

  img {
    margin: 0;
    z-index: 10;
  }

  button {
    color: $green;
    background-color: white;
    font-weight: 700;
    height: 58px;
    margin-left: 20px;
    margin-right: -20px;
  }
}

.tile-row {
  padding: 0 60px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  overflow-x: scroll;
}

.tile {
  @include backgrounds;
  height: 250px;
  flex: 1;
  margin: 30px 0;
  cursor: pointer;
  border-radius: 30px;
  min-width: 250px;

  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  img {
    height: 120px;

    &.centered {
      margin: 0 auto;
    }
  }

  h4 {
    text-align: left;
    padding: 32px;
  }

  h1 {
    &.blue {
      color: #cae8ee;
    }

    &.orange {
      color: #ffbfa4;
    }

    &.yellow {
      color: #ffde9b;
    }

    &.one {
      font-size: 128px;
    }
    text-align: right;
    margin: 0;
    margin-right: -32px;
  }
}

.row {
  margin: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  button {
    width: 350px;
    margin: 0;

    &.black {
      width: 200px;
      margin-left: 16px;
    }
  }
}

.home-nav {
  min-width: 350px;
  display: flex;
  justify-content: space-between;
  margin-left: 60px;

  button {
    font-size: 19px;
    font-weight: 700;
    @include sans-serif;
    border: none;
    background-color: $bg-color;
    cursor: pointer;
    height: 48px;
  }
}

.home-header {
  margin: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

