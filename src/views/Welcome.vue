<template>
  <div class="welcome">
    <div class="left" :class="state === 'all' ? 'single' : ''">
      <img v-if="state !== 'all'" src="../assets/logo-light.svg" width="100%" />
      <img
        class="welcome-image"
        src="../assets/welcome-image.svg"
        width="100%"
      />
    </div>
    <div v-if="state === 'all'" class="right">
      <img src="../assets/logo-dark.svg" width="60%" />
      <div class="green-bg">
        <button class="long green">Join call</button>
      </div>
      <button class="long outline">Sign in</button>
      <button class="long outline">Create an account</button>
      <div class="bottom-section">
        <p>I only use this for calls, don't ask me to sign in</p>
        <label class="switch">
          <input
            type="checkbox"
            @click="$store.commit('toggleOnlyCalls')"
            v-model="onlyCalls"
          />
          <span class="slider"></span>
        </label>
      </div>
    </div>

    <div v-else class="right">
    </div>
  </div>
</template>

<script>
import Popup from "../components/Popup.vue";
import store from "../store/index.js";
import { mapGetters } from "vuex";

export default {
  name: "Welcome",
  store: store,
  //   components: {
  //     Popup,
  //   },
  computed: {
    //   ...mapGetters(["onlyCalls"]),
    onlyCalls: {
      get: function () {
        return store.getters.onlyCalls == true;
      },
      set: function () {},
    },
  },
  created() {
    if (store.getters.signedIn) {
      this.$router.push("/home");
    }
  },
  data() {
    return {
      state: "all",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/main.scss";

.welcome {
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  img {
    padding-top: 24px;
  }

  .left {
    background-color: $green;
    flex: 3;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &.single {
      justify-content: flex-end;
    }
  }

  .right {
    background-color: $bg-color;
    flex: 5;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .green-bg {
      background-color: rgba($green, 0.5);
      display: flex;
      justify-content: center;
      padding: 16px 0;
      margin: 16px 0;
      width: 100%;
    }

    .long {
      width: 70%;
      border-radius: 30px;
      padding: 16px;
      @include serif;
      font-size: 24px;
      margin: 16px 0;
    }

    .green {
      color: white;
      border: 2px solid $green;
    }

    .bottom-section {
      border-top: 2px solid black;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin-top: auto;
      width: 90%;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 76px;
      height: 32px;
      margin: 8px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: white;
      -webkit-transition: 0.2s;
      transition: 0.2s;
      border-radius: 34px;
      outline: 2px solid black;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 24px;
      width: 24px;
      left: 4px;
      bottom: 4px;
      background-color: $green;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }

    .slider:after {
      content: "NO";
      display: flex;
      position: absolute;
      right: 6px;
      top: 5px;
      font-size: 19px;
      @include sans-serif;
    }

    input:checked + .slider:after {
      content: "YES";
      left: 6px;
      color: white;
    }

    input:checked + .slider {
      background-color: $green;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(44px);
      -ms-transform: translateX(44px);
      transform: translateX(44px);
      background-color: white;
    }
  }
}
</style>