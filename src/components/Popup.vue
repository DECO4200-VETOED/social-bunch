<template>
  <div v-if="this.showModal" class="modal orange">
    <div class="modal-content">
      <h2>{{ this.title }}</h2>
      <i class="fas fa-times close fa-3x" @click="triggerClose"></i>
      <hr />

      <!-- Members modal menu content -->
      <div v-if="type == 'members'" class="modal-child members">
        <div v-for="(member, index) in content.members" :key="index" class="member">
          <img src="../assets/avatar-placeholder.png" />
          <h4>{{ member }}</h4>
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
    show: Boolean,
    type: String,
  },
  data() {
    return {
      showModal: this.show,
    };
  },
  methods: {
    triggerClose() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style lang="scss" scoped>
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

///// Members Popup Styles /////
.members {
  padding: 0 30%;
}

h4 {
    text-align: left;
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
  background: #F9A27D; 
  border-radius: 10px;

}

</style>

