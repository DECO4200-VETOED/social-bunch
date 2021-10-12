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
      <button><i class="fas fa-plus fa-me"></i>Create a group</button>
    </div>

    <div class="tile-row">
      <div class="tile" @click="route(1)"></div>
      <div class="tile" @click="route(2)"></div>
      <div class="tile" @click="route(3)"></div>
    </div>

    <div class="meetings-block">
    <h3>Upcoming meetings</h3>
      <p>Art club: 10:00AM Tuesday, 3rd January</p>
      <p>Art club: 10:00AM Tuesday, 3rd January</p>
    </div>



    <div class="circle" @click="route()"></div>


  </div>
</template>

<script>
import store from "../store/index.js";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  store: store,
  props: {
    activeColor: String,
    title: String,
  },
  computed: {
    ...mapGetters(["tabs"]),
  },
  methods: {
    route(num) {
      this.$router.push(`/group/${num}`) 
      // this.$router.push('/group'); 
      // path: `/user/${userId}`
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/main.scss";

.fas {
  margin-right: 8px;
}

h3 {
    margin-block-start: 0; 
    margin-block-end: 0; 
  }

  .meetings-block {
    margin: 0 60px;
    text-align: left;
  }

.circle {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 280px;
  width: 280px;
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
    @include sans-serif;
    color: white;
    background-color: $green;
    padding: 16px;
    width: 350px;
    font-size: 19px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    border-radius: 30px;

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

