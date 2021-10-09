<template>
  <div class="about">
    <h1>This is an about page</h1>
    <popup :show="true" :title="'Members'" :type="'members'" :content="{members: members}"></popup>
  </div>
</template>

<script>
import Popup from '../components/Popup.vue'
import store from '../store/Store.js'
import { mapGetters } from "vuex";

export default {
  name: 'About',
  store: store,
  components: {
    Popup,
  },
  computed: {
    ...mapGetters(["members"]),
  },
}
</script>