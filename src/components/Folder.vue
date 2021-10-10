<template>
  <div class="folder">
    <div class="tab-area">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab"
        :class="tab.color"
      >
        <span
          ><p>{{ tab.text }}</p></span
        >
      </div>
    </div>
    <div class="folder-area" :class="activeColor">
      <div class="folder-header" :class="activeColor">
        <h1>Art club</h1>
        <div class="folder-nav">
          <button><i class="fas fa-user fa-lg"></i>CONTACTS</button>
          <button><i class="fas fa-phone fa-lg"></i>MY PROFILE</button>
          <button class="info">i</button>
        </div>
      </div>
      <!-- CONDITIONALLY INSERT OTHER COMPONENTS HERE BASED ON CURRENT PAGE -->
      

    </div>
  </div>
</template>

<script>
import store from "../store/Store.js";
import { mapGetters } from "vuex";

export default {
  name: "Folder",
  store: store,
  props: {
    activeColor: String,
    title: String,
  },
  computed: {
    ...mapGetters(["tabs"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";

.fas {
  margin-right: 8px;
}

.folder {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.tab-area {
  background-color: white;
  min-width: 64px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  overflow: scroll;
}

.folder-area {
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

.folder-nav {
  min-width: 400px;
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
  }

  button.info {
    @include serif;

    color: white;
    background-color: $green;
    min-width: 48px;
    min-height: 48px;
    border-radius: 50%;
    font-size: 36px;
    font-weight: 700;
  }
}

.folder-header {
  margin: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-bottom-color: black;

  &.blue {
    border-bottom-color: $blue;
  }

  &.orange {
    border-bottom-color: $orange;
  }

  &.yellow {
    border-bottom-color: $yellow;
  }

  &.green {
    border-bottom-color: $green;
  }
}

.tab {
  z-index: 10;
  margin: 8px 0;
  height: 200px;
  width: 48px;
  border-radius: 8px 0 0 8px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  display: flex;
  cursor: pointer;

  overflow: hidden;

  span {
    height: 160px;
    padding-top: 20px;
  }

  p {
    writing-mode: vertical-rl;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    overflow: hidden;
    height: 160px;
    transform: rotate(180deg);
  }

  &.green {
    background-color: $green;
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
}
</style>

