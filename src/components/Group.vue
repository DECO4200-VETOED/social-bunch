<template>
  <div class="group-area">
    <div v-if="groupInd == 1" class="left">
      <div class="info">
        <h4>Your next meeting starts at</h4>
        <h3>10:00am Fri 16th Oct</h3>
        <p style="font-weight: 700">A join button will appear at that time</p>
      </div>
      <h4>Can you attend?</h4>
      <div class="rsvp-row">
        <div>
          <button class="rsvp yellow">
            <i class="fas fa-thumbs-up fa-4x"></i>
          </button>
          <h4>Yes</h4>
        </div>
        <div>
          <button class="rsvp">
            <i class="fas fa-thumbs-down fa-4x"></i>
          </button>
          <h4>No</h4>
        </div>
      </div>
      <button class="long yellow">See who's responded</button>
    </div>

    <div v-else class="left">
      <div class="info">
        <h4>Your current meeting started at</h4>
        <h3>10:00am Fri 16th Oct</h3>
      </div>
      <button class="long yellow">See who's responded</button>
      <button class="long black">Join call</button>
    </div>

    <div class="right">
      <button>Members</button>
      <button>Message Board</button>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
// import { mapGetters } from "vuex";

export default {
  name: "Group",
  store: store,
  props: {
    groupInd: Number,
  },
  //   computed: {
  //     ...mapGetters(["tabs"]),
  //   },
  //   methods: {
  //     route(title) {
  //       if (title === 'Home') {
  //         this.$router.push('/home')
  //       }
  //     }
  //   }
};
</script>

<style lang="scss" scoped>
@import "./src/assets/main.scss";

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
      background-color: $yellow;
      height: 250px;
      @include serif;
      font-size: 36px;
      border-radius: 30px;
      border: none;
      padding: 0;
    }
  }
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
    margin-top: 0;
  }

  button {
    height: 84px;
    width: 84px;
    margin-bottom: 8px;
  }
}
</style>

