<template>
  <div class="modal green">
    <div class="modal-content">
      <div>
        <h2>Help</h2>
        <i
          class="fas fa-times close fa-3x"
          @click="$store.commit('setHelp', false)"
        ></i>
      </div>

      <div class="search-bar">
        <h3 class="label">Search:</h3>
        <input type="text" v-model="terms" placeholder="Search for help..." />
      </div>
      <hr />

      <div class="help-items custom-scroll green">
        <div v-for="(faq, index) in filteredFAQs" :key="index">
          <h3 class="label">
            {{ faq.title }}
          </h3>
          <p>{{ faq.body }}</p>
        </div>
        <h3 v-if="filteredFAQs.length == 0" class="label">
          There don't appear to be any matching entries, try searching for
          something else or looking through the tutorial.
        </h3>
      </div>

      <div>
        <hr />
        <button class="long green" @click="toTutorial">
          Revisit the tutorial
        </button>
      </div>
    </div>
    <div class="circle">
      <!-- <button class="long white">Need help?</button> -->
      <img src="../assets/FAQ_Lady.png" height="250px" style="float: right" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store/index.js";

export default {
  name: "Help",
  store: store,
  methods: {
    toTutorial() {
      store.commit("setHelp", false);
      this.$router.push("/tutorial");
    },
  },
  data() {
    return {
      terms: "",
    };
  },
  computed: {
    ...mapGetters(["faqs"]),
    filteredFAQs() {
      return this.faqs.filter(
        (m) =>
          m.title.toUpperCase().includes(this.terms.toUpperCase()) ||
          m.body.toUpperCase().includes(this.terms.toUpperCase())
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/main.scss";

.circle {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 280px;
  width: 280px;
  min-height: 280px;
  min-width: 280px;
  background-color: $bg-color;
  z-index: 100;
  border-radius: 100% 0 0 0;

  img {
    margin: 0;
    z-index: 100;
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

h2 {
  text-align: center;
  margin: 16px 40px;
}

.modal-child {
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}

/* The Modal (background) */
.modal {
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  background-color: $green;
  background-color: rgba($green, 0.7);
}

/* Modal Content/Box */
.modal-content {
  z-index: 110;

  position: relative;
  display: flex;
  align-content: space-between;
  justify-content: space-between;

  flex-direction: column;
  background-color: $bg-color;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid black;
  width: 70%;
  height: 70%;
  border-radius: 30px;

  button {
    margin-top: 10px;
    margin-bottom: 0;
    width: 60%;
  }
  input {
    margin-bottom: 10px;
  }

  .search-bar {
    display: flex;
    height: 48px;
    gap: 16px;
    align-items: center;
    h3 {
      margin: 0;
    }
    input {
      flex-grow: 1;
    }
  }

  .help-items {
    flex-grow: 1;
    overflow-y: scroll;
    p {
      text-align: left;
      margin-top: 0;
    }
  }
}

.popup-header {
  display: inline-block;
  flex-direction: row;
  align-items: center;
}
</style>

