<template>
  <div class="home">
    <div class="home-header">
      <h1>Home</h1>
      <div class="home-nav">
        <button><i class="fas fa-user fa-lg"></i>CONTACTS</button>
        <button><i class="fas fa-phone fa-lg"></i>MY PROFILE</button>
      </div>
    </div>

    <div class="row">
      <h3>Your groups</h3>
      <button class="long green">
        <i class="fas fa-plus fa-me"></i>Create a group
      </button>
    </div>

    <div class="tile-row">
      <div class="tile" @click="route(1)"></div>
      <div class="tile" @click="route(2)"></div>
      <div class="tile" @click="route(3)"></div>
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
          <button v-if="meeting.happeningNow" class="black long join-call">
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
      <div class="circle" @click="route()"></div>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  store: store,
  computed: {
    ...mapGetters(["tabs", "nextTwoMeetings"]),
  },
  methods: {
    route(num) {
      this.$router.push(`/group/${num}`);
    },
    triggerRSVP(button, meeting) {
      if (meeting.response == button) {
        store.getters.groupByInd(meeting.groupInd).nextMeeting.response = null;
      } else {
        store.getters.groupByInd(meeting.groupInd).nextMeeting.response =
          button;
      }
    },
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
}

.tile-row {
  margin: 0 60px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.tile {
  background-color: $orange;
  height: 250px;
  flex: 1;
  margin: 30px 0;
  cursor: pointer;
  border-radius: 30px;
}

.row {
  margin: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  button {
    width: 350px;
    margin: 0;
  }
}

.home-area {
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

  h1 {
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-block: 30px;
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

