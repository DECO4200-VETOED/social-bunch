<template>
  <div class="group">
    <folder :activeColor="tabColors[groupInd]" :groupInd="parseInt(groupInd)">
    </folder>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../store/index.js'

import Folder from '../components/Folder.vue'

export default {
  name: 'Group',
  store: store,
  components: {
    Folder
  },
  computed: {
    ...mapGetters(["tabColors"], ["groups"]),
    groupInd() {
      return this.$route.params.id
    }
  },
  created() {
    // if (this.groupInd > this.groups.length) {
    //   console.log("NOT A GROUP!")
    // }
  }
}
</script>
