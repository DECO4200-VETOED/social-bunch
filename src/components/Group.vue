<template>
  <div class="group-area">
    <div v-if="group.nextMeeting.time === null" class="left spaced">
      <p v-if="group.admin" class="admin-message">
        You are a group leader so you can invite members and set meeting times
      </p>

      <h4 v-if="group.admin" class="big">
        Set a meeting time by clicking ‘schedule a meeting’
      </h4>
      <p v-else class="big">This group has no arranged meeting times yet</p>
    </div>

    <div v-else-if="!group.nextMeeting.happeningNow" class="left">
      <p v-if="group.admin" class="admin-message">
        You are a group leader so you can invite members and set meeting times
      </p>

      <div class="info">
        <h4>Your next meeting starts at</h4>
        <h3>{{ group.nextMeeting.time }}</h3>
        <p style="font-weight: 700">A join button will appear at that time</p>
      </div>
      <h4>Can you attend?</h4>
      <div class="rsvp-row">
        <div>
          <button
            class="rsvp"
            :class="group.nextMeeting.response == true ? groupColor : ''"
            @click="triggerRSVP(true)"
          >
            <i class="fas fa-thumbs-up fa-4x"></i>
          </button>
          <h4>Yes</h4>
        </div>
        <div>
          <button
            class="rsvp"
            :class="group.nextMeeting.response == false ? groupColor : ''"
            @click="triggerRSVP(false)"
          >
            <i class="fas fa-thumbs-down fa-4x"></i>
          </button>
          <h4>No</h4>
        </div>
      </div>
      <button class="long" :class="groupColor" @click="$emit('showGoing')">
        See who's responded
      </button>
    </div>

    <div v-else class="left">
      <p v-if="group.admin" class="admin-message">
        You are a group leader so you can invite members and set meeting times
      </p>

      <div class="info">
        <h4>Your current meeting started at</h4>
        <h3>{{ group.nextMeeting.time }}</h3>
      </div>
      <button class="long" :class="groupColor" @click="$emit('showGoing')">
        See who's responded
      </button>
      <button class="long black" @click="$emit('showCall')">Join call</button>
    </div>

    <div class="right" :class="group.admin ? 'tight' : ''">
      <button
        v-if="group.admin"
        class="long outline"
        @click="$emit('showInvites')"
      >
        Invite members
      </button>
      <button
        v-if="group.admin"
        class="long outline"
      >
        Schedule a call
      </button>

      <button :class="groupColor" @click="$emit('showMembers')">Members</button>
      <button :class="groupColor" @click="$router.push(`/group/${groupInd}/messages`)">Message Board</button>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  name: "Group",
  store: store,
  props: {
    groupInd: Number,
  },
  computed: {
    group() {
      return store.getters.groupByInd(this.groupInd);
    },
    groupColor() {
      return store.getters.colorByGroup(this.groupInd);
    },
  },
  methods: {
    triggerRSVP(button) {
      if (this.group.nextMeeting.response == button) {
        this.group.nextMeeting.response = null;
      } else {
        this.group.nextMeeting.response = button;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/main.scss";

.admin-message {
  font-weight: 700;
  text-align: left;
}

.group-area {
  margin: 60px 60px;
  display: flex;
  height: calc(100% - 265px);

  .left {
    border-right: 2px black solid;
    display: flex;
    flex-direction: column;
    width: calc(100% / 2);
    padding-right: 60px;
    justify-content: center;

    .big {
      flex-grow: 1;
      display: flex;
      align-items: center;
    }

    &.spaced {
      justify-content: flex-start;
    }

    h4 {
      margin-top: 0;
    }

    .info {
      margin-bottom: 16px;
      h4,
      h3 {
        margin: 8px 0;
      }
    }

    .rsvp-row {
      display: flex;
      flex-direction: row;
      gap: 32px;
      justify-content: center;
      margin-bottom: 16px;

      h4 {
        margin-bottom: 0;
      }

      button {
        height: 84px;
        width: 84px;
        margin-bottom: 8px;
      }
    }
  }

  .right {
    width: calc(100% / 2);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 60px;
    align-items: center;
    margin: 30px 0;

    button {
      width: calc(100% - 60px);
      margin-left: 60px;
      min-height: 200px;
      @include serif;
      font-size: 36px;
      border-radius: 30px;
      border: none;
      padding: 0;
    }

    &.tight {
      gap: 30px;
      button {
        min-height: 150px;
      }
      .outline {
      min-height: 60px;
      }
    }

    .outline {
      min-height: 60px;
      background-color: transparent;
      border: 2px solid black;
      color: black;
      font-size: 24px;
      @include sans-serif;
      margin: 0;
      margin-left: 60px;
    }
  }
}
</style>

