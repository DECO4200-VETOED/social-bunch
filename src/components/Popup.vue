<template>
  <div class="modal" :class="color">
    <div class="modal-content">
      <h2>{{ this.title }}</h2>
      <i class="fas fa-times close fa-3x" @click="$emit('triggerClose')"></i>
      <hr />

      <!-- Members modal menu content -->
      <div v-if="type == 'members'" class="modal-child members">
        <div
          v-for="(member, index) in content.members"
          :key="index"
          class="member"
        >
          <img :src="require('@/assets/' + member.avatar)"  />
          <h4>{{ member.name }}</h4>
        </div>
      </div>

      <!-- Other modal menu content -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
    title: String,
    content: Object,
    type: String,
    color: String,
  },
  methods: {
    avatarSrc(src) {
      console.log('../assets/' + src)
      return '../assets/' + src
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./src/assets/main.scss";

h2 {
  text-align: center;
  margin: 16px;
}

.modal-child {
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}

///// Popups /////

/* The Modal (background) */
.modal {
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  &.blue {
    background-color: $blue;
    background-color: rgba($blue, 0.7);
  }

  &.orange {
    background-color: $orange;
    background-color: rgba($orange, 0.7);
  }

  &.yellow {
    background-color: $yellow;
    background-color: rgba($yellow, 0.7);
  }

  &.green {
    background-color: $green;
    background-color: rgba($green, 0.7);
  }
}

/* Modal Content/Box */
.modal-content {
  position: relative;
  display: flex;
  align-content: space-between;
  justify-content: center;
  flex-direction: column;
  background-color: $bg-color;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid black;
  width: 70%;
  height: 70%;
  border-radius: 30px;
}

.popup-header {
  display: inline-block;
  flex-direction: row;
  align-items: center;
}

/* The Close Button */
.close {
  color: black;
  position: absolute;
  top: 18px;
  right: 24px;
  cursor: pointer;
}

///// Members Popup Styles /////
.members {
  padding: 0 30%;
  overflow: auto;
}

h4 {
  text-align: left;
  cursor: pointer;
}

.member {
  display: flex;
  flex-direction: row;
  align-items: center;
}

img {
  float: left;
  padding: 16px;
  min-width: 80px;
  cursor: pointer;
}

/* width */
.members::-webkit-scrollbar {
  width: 20px;
}

/* Track */
.members::-webkit-scrollbar-track {
  background: white;
  border-radius: 10px;
}

/* Handle */
.members::-webkit-scrollbar-thumb {
  width: 20px;
  background: #f9a27d;
  border-radius: 10px;
}
</style>

