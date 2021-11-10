<template>
  <div class="tutorial">
    <img
      :src="require(`@/assets/FAQ_Lady_${stateInd + 1}.png`)"
      height="250px"
      style="position: absolute; left: 0; bottom: 0"
    />

    <div class="left">
      <div class="dots">
        <div
          v-for="dot in dots"
          :key="dot"
          class="dot"
          :class="dot == stateInd ? 'active' : ''"
          @click="stateInd = dot"
        ></div>
      </div>

      <div v-if="stateInd == 0" class="content">
        <h2>Welcome to Social Bunch!</h2>
        <h4>
          This is your home page. I’ll be in the corner if you ever have any
          questions!<br /><br />Here, you can access all your groups. Let’s
          start by checking them out!
        </h4>
        <button class="long black" @click="stateInd += 1">Let's start!</button>
      </div>

      <div v-if="stateInd == 1" class="content">
        <h2>Let’s take a look at the Groups Page!</h2>
        <h4>
          The tabs on the left-hand side can help you navigate back to ‘home’ or
          switch between your different groups.<br /><br />Here, in your groups
          page, you can notify your group friends whether you’ll attend the next
          meeting!<br /><br />Now let’s check out the message board!
        </h4>
        <button class="long black" @click="stateInd += 1">Let's go!</button>
      </div>

      <div v-if="stateInd == 2" class="content">
        <h2>Check out the Message Board!</h2>
        <h4>
          In your group’s Message Board, you can create your own post by
          clicking ‘add new post’.<br /><br />
          Search for other group member’s posts by using the search ar at the
          top.<br /><br />
          And last but not least, have fun interacting with your friend’s by
          replying to their posts!
        </h4>
        <button class="long black" @click="stateInd += 1">What's next?</button>
      </div>

      <div v-if="stateInd == 3" class="content">
        <h2>This is your Contacts Page</h2>
        <h4>
          Check out how you can communicate with your friends from all of your
          groups here!<br /><br />
          You can search for them using the ‘search bar’ or scroll through the
          cards.
        </h4>
        <button class="long black" @click="stateInd += 1">What's next?</button>
      </div>

      <div v-if="stateInd == 4" class="content">
        <h2>Edit your Profile!</h2>
        <h4>
          This is where you can see your profile.<br /><br />
          Here, you can edit your details by simply clicking in the spaces,
          change your password and leave your group by clicking ‘edit’ and then
          ‘quit’.<br /><br />
          And that’s it! If you ever have any questions, you can access me by
          clicking the info icon on the top right corner of every page.
        </h4>
        <button class="long black" @click="$router.push('/home')">
          Let's start!
        </button>
      </div>
    </div>
    <div class="right">
      <img v-if="stateInd == 0" src="../assets/tut1.png" class="side-image" />
      <img v-if="stateInd == 1" src="../assets/tut2.gif" class="side-image" />
      <img v-if="stateInd == 2" src="../assets/tut3.gif" class="side-image" />
      <img v-if="stateInd == 3" src="../assets/tut4.gif" class="side-image" />
      <img v-if="stateInd == 4" src="../assets/tut5.gif" class="side-image" />
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  name: "Tutorial",
  store: store,
  
  data() {
    return {
      stateInd: 0,
      dots: [0, 1, 2, 3, 4],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/main.scss";

.tutorial {
  display: flex;
  height: 100vh;
  .left {
    width: 50%;
    display: flex;
    background-color: #faf6f1;
    margin: 80px 40px 80px 0;

    .dots {
      display: flex;
      flex-direction: column;
      margin-right: 24px;
      justify-content: center;
      .dot {
        height: 24px;
        width: 24px;
        background-color: #767676;
        border-radius: 50%;
        margin: 12px 16px;

        &.active {
          background-color: #222222;
        }
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        margin: 0;
      }
      h4 {
        font-weight: 500;
        width: 80%;
        margin: 0 auto;
      }
    }

    button {
      margin: 0 auto;
      background-color: $green;
      width: 80%;
    }
  }
  .right {
    width: 50%;
    background: #ebdfcf;
    display: flex;
    align-items: center;
    justify-content: center;

    .side-image {
      width: 90%;
    }
  }
}
</style>

