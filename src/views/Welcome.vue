<template>
  <div class="welcome">
    <!-- Conditional join call popup -->
    <popup
      v-if="showCallSettings"
      @triggerClose="showCallSettings = false"
      @signIn="goTo('sign')"
      @createAccount="goTo('create')"
      :color="'green'"
      :title="'Before you join...'"
      :type="'joinCall'"
    ></popup>

    <div class="left" :class="state === 'all' ? 'single' : ''">
      <img v-if="state !== 'all'" src="../assets/logo-light.svg" width="100%" />
      <img
        class="welcome-image"
        src="../assets/welcome-image.svg"
        width="100%"
      />
    </div>

    <!-- TOGGLE ON -->
    <div v-if="onlyCalls" class="right green-bg">
      <h2>Join a call</h2>
      <p>
        You can join a call using a code from your club, which you may have
        received by email.
      </p>
      <p class="label">Enter group code:</p>
      <input type="text" />
      <button class="long green sans" @click="callSettings">
        Proceed to call settings
      </button>
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

    <!-- ALL OPTIONS -->
    <div v-else-if="state === 'all'" class="right">
      <img src="../assets/logo-dark.svg" width="60%" />
      <div class="green-bg">
        <button class="long green" @click="state = 'join'">Join call</button>
      </div>
      <button class="long outline" @click="state = 'sign'">Sign in</button>
      <button class="long outline" @click="state = 'create'">
        Create an account
      </button>
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

    <!-- JOIN A CALL -->
    <div v-else-if="state === 'join'" class="right">
      <div class="green-bg col">
        <h2>Join a call</h2>
        <i class="fas fa-times close fa-3x" @click="state = 'all'"></i>
        <p>
          You can join a call using a code from your club, which you may have
          received by email.
        </p>
        <p class="label">Enter group code:</p>
        <input type="text" />
        <button class="long green sans" @click="callSettings">
          Proceed to call settings
        </button>
      </div>
      <button class="long outline" @click="state = 'sign'">Sign in</button>
      <button class="long outline" @click="state = 'create'">
        Create an account
      </button>
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

    <!-- SIGN IN -->
    <div v-else-if="state === 'sign'" class="right">
      <div class="bordered">
        <h2>Sign in</h2>
        <i class="fas fa-times close fa-3x" @click="state = 'all'"></i>
        <p class="label">Email:</p>
        <input type="text" />
        <p class="label">Password:</p>
        <input type="password" />
        <button class="long black sans" @click="signIn">Continue</button>
      </div>

      <button class="long green" @click="state = 'join'">Join a call</button>
      <button class="long outline" @click="state = 'create'">
        Create an account
      </button>
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

    <!-- CREATE AN ACCOUNT -->
    <div v-else-if="state === 'create'" class="right">
      <div class="bordered">
        <h2>Create an account</h2>
        <i class="fas fa-times close fa-3x" @click="state = 'all'"></i>
        <p class="label">Email:</p>
        <input type="text" />
        <p class="label">Password:</p>
        <input type="password" />
        <button class="long black sans" @click="createAccount">Continue</button>
      </div>

      <button class="long green" @click="state = 'join'">Join a call</button>
      <button class="long outline" @click="state = 'sign'">Sign in</button>
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
  </div>
</template>

<script>
import Popup from "../components/Popup.vue";
import store from "../store/index.js";
import { mapGetters } from "vuex";

export default {
  name: "Welcome",
  store: store,
  components: {
    Popup,
  },
  computed: {
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
      showCallSettings: false,
    };
  },
  methods: {
    goTo(state) {
      this.state = state;
      this.showCallSettings = false;
    },
    signIn() {
        store.commit('signIn')
        this.$router.push("/home")
    },
    createAccount() {
        store.commit('createAccount')
        this.$router.push("/home")
    },
    callSettings() {
      this.showCallSettings = true;
    },
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

    .label {
      @include serif;
      color: black;
      font-size: 24px;
      margin-bottom: 0;
      text-align: left;
    }

    &.green-bg {
      background-color: rgba($green, 0.5);
    }

    h2 {
      margin-block-end: 0;
    }

    p {
      width: 70%;
      font-weight: 700;
    }

    .long {
      width: 70%;
      border-radius: 30px;
      padding: 16px;
      @include serif;
      font-size: 24px;
      margin: 16px 0;

      &.sans {
        @include sans-serif;
        color: white;
        margin-top: 32px;
      }
    }

    .green-bg {
      background-color: rgba($green, 0.5);
      display: flex;
      justify-content: center;
      padding: 16px 0;
      margin: 16px 0;
      width: 100%;

      &.col {
        flex-direction: column;
        margin-top: 0;
        align-items: center;
      }

      .label {
        text-align: center;
        padding-bottom: 16px;
      }
    }

    .bordered {
      display: flex;
      justify-content: center;
      padding: 16px 0;
      margin: 16px 0;
      width: 90%;
      border-bottom: 2px solid black;

      flex-direction: column;
      margin-top: 0;
      align-items: center;

      .long {
        width: 77.8%;
      }
    }

    .green {
      color: white;
      border: 2px solid $green;
    }

    .black {
      color: white;
      border: 2px solid black;
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

      p {
        width: auto;
      }
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
      //   border-radius: 34px;
      //   outline: 2px solid black;

      -webkit-border-radius: 34px;
      -moz-border-radius: 34px;
      border-radius: 34px;
      box-shadow: 0px 0px 0px 2px black;
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

  input[type="text"],
  input[type="password"] {
    margin-bottom: 0px;
  }
}
</style>