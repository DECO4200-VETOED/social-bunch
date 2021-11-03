<template>
  <div class="board-area">
    <div class="top-row">
      <div class="buttons">
        <button class="back" @click="$router.go(-1)">
          {{ `\< Back to group` }}
        </button>

        <button class="add" :class="groupColor" @click="$router.go(-1)">
          {{ `+ Add new post` }}
        </button>
      </div>

      <div class="label-content">
        <h3 class="label">Search:</h3>
        <input type="text" />
      </div>
      <div class="label-content">
        <h3 class="label">Sort by:</h3>
        <drop-down
          :options="['Recent posts', 'Newest comments', 'Most popular']"
          :currentType="'Recent posts'"
        />
      </div>
    </div>

    <div class="feed">
      <div class="post">
        <div class="poster">
          <img :src="require('@/assets/' + profileData.avatar)" />

          <h4>Doris B</h4>
          <h4>23/07/21</h4>
        </div>

        <div class="content" :class="groupColor">
          <div class="main-post">
            <h3>Recommendations for good oil paints?</h3>
            <p>
              I've been trying to get into oil painting recently, but I'm not
              quite sure where the best place to buy from is in Sydney. Has
              anyone had any experience shopping for oil paints in and around
              the cbd? I'd love some advice. Thanks, Doris :)
            </p>
            <div class="center-cropped" 
     style="background-image: url('https://www.carlisleart.com.au/database/images/art-spectrum-oil-paints-series-4-5-main-40063-40063.jpg');">
</div>

            <hr />
          </div>

          <div class="comment">
            <img :src="require('@/assets/' + profileData.avatar)" />
            <div>
              <p class="subtitle">Margaret O, 23/07/21</p>

              <h4>I like Eckersley’s Arts and Crafts in the city</h4>
              <p>
                I usually opt for Eckersley’s on York street. The staff are very
                friendly and their range has never disappointed me.
              </p>
            </div>
          </div>
          <hr />

          <div class="reply-row">
            <textarea type="text" />

            <button class="back" :class="groupColor" @click="$router.go(-1)">
              {{ `Send reply` }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store/index.js";
import DropDown from "./DropDown.vue";

export default {
  name: "MessageBoard",
  store: store,
  props: {
    groupInd: Number,
  },
  components: {
    DropDown,
  },
  computed: {
    ...mapGetters(["profileData"]),
    group() {
      return store.getters.groupByInd(this.groupInd);
    },
    groupColor() {
      console.log(this.groupInd, store.getters.colorByGroup(this.groupInd));
      return store.getters.colorByGroup(this.groupInd);
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./src/assets/main.scss";

.board-area {
  height: 100%;
}

.center-cropped {
    margin: 0 auto 16px;
  width: 100%;
  height: 300px;
  background-position: center center;
  background-repeat: no-repeat;
}

.feed {
  display: flex;
  flex-direction: column;

  overflow: scroll;
  margin: 40px 60px 20px;
  //   background-color: red;
  height: calc(100% - 284px);

  .post {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .poster {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 20%;
      padding: 16px 0;
      img {
        height: 80px;
      }
      h4 {
        margin: 8px 0;
      }
    }

    .content {
      width: 80%;
      //   background-color: blue;
      padding: 8px 16px;

      &.blue {
        border: 2px solid $blue;
        background-color: rgba($blue, 0.15);
      }

      &.orange {
        border: 2px solid $orange;
        background-color: rgba($orange, 0.15);
      }

      &.yellow {
        border: 2px solid $yellow;
        background-color: rgba($yellow, 0.15);
      }

      .main-post {
        text-align: left;
        h3 {
          margin: 8px 0;
        }
      }
      .comment {
        display: flex;
        gap: 16px;
        padding: 8px 0 8px 8px;
        text-align: left;
        img {
          height: 80px;
        }
        h4 {
          margin: 8px 0;
        }

        .subtitle {
          font-weight: 700;
        }

        p {
          margin: 0;
        }
      }

      .reply-row {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 16px;
        margin: 16px 0 8px 0;
        textarea {
          flex-grow: 1;
          //   width: 80%;
          min-height: 48px;
          height: auto;
          @include sans-serif;
          font-size: 19px;
          outline: none;
          resize: vertical;
        }
        button {
          color: black;
          width: 120px;

          //   flex-grow: 0;
        }
      }
    }
  }
}

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 60px;
  height: 100px;
  gap: 32px;
  // background-color: red;
  .label {
    margin-bottom: -10px;
  }
}

.label-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 250px;
  max-width: 400px;
  flex-grow: 1;
  input {
    width: 100%;
  }
}

.buttons {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 102px;
}

.back {
  font-size: 19px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 8px;
  margin: 10px 0 0 0;
  background-color: black;
  color: white;
  width: 100%;
}

.add {
  @include backgrounds;
  font-size: 19px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 8px;
  margin: 0;
  width: 100%;
}
</style>

