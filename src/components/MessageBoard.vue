<template>
  <div class="board-area">
    <div class="top-row">
      <div class="buttons">
        <button class="back" @click="$router.go(-1)">
          {{ `\< Back to group` }}
        </button>

        <button class="add" :class="groupColor" @click="$emit('newPost')">
          {{ `+ Add new post` }}
        </button>
      </div>

      <div class="label-content">
        <h3 class="label">Search:</h3>
        <input type="text" v-model="terms" />
      </div>
      <div class="label-content">
        <h3 class="label">Sort by:</h3>
        <drop-down
          :options="['Recent posts', 'Newest comments', 'Most popular']"
          :currentType="'Recent posts'"
          @input="(value) => (sortFilter = value.options[value.index])"
        />
      </div>
    </div>

    <div class="feed custom-scroll" :class="groupColor">
      <div v-for="(message, index) in sortMessages()" :key="index" class="post">
        <div class="poster">
          <img :src="require('@/assets/' + message.posterAvatar)" />

          <h4>{{ message.posterName }}</h4>
          <h4>{{ message.date }}</h4>
        </div>

        <div class="content" :class="groupColor">
          <div class="main-post">
            <h3>{{ message.title }}</h3>
            <p>
              {{ message.content }}
            </p>
            <div
              v-if="message.image !== '' && message.image != null"
              class="center-cropped"
              :style="`background-image: url('${message.image}');`"
            ></div>

            <hr v-if="message.comments.length > 0" />
          </div>

          <div
            v-for="(comment, i) in message.comments"
            :key="i"
            class="comment"
          >
            <img :src="require('@/assets/' + comment.posterAvatar)" />
            <div>
              <p class="subtitle">
                {{ `${comment.posterName}, ${comment.date}` }}
              </p>

              <p>
                {{ comment.content }}
              </p>
            </div>
          </div>
          <hr />

          <div class="reply-row">
            <textarea type="text" v-model="replies[group.messages.indexOf(message)]"/>

            <button class="back" :class="groupColor" @click="postReply(group.messages.indexOf(message))">
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
  data() {
    return { terms: "", sortFilter: "Recent posts", replies: new Array(100).fill("") };
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
    messages() {
      return this.group.messages.filter (
        (m) =>
          m.content.toUpperCase().includes(this.terms.toUpperCase()) ||
          m.posterName.toUpperCase().includes(this.terms.toUpperCase()) ||
          m.title.toUpperCase().includes(this.terms.toUpperCase())
      );
    },
  },
  methods: {
    postReply(index) {
      store.commit('postReply', {reply: this.replies[index], message: index, group: this.groupInd})
      this.replies[index] = ""
      
    },
    sortMessages() {
      if (this.sortFilter === "Recent posts") {
        return this.messages;
      } else if (this.sortFilter === "Newest comments") {
        function compare(a, b) {
          if (a.comments.length == 0) {
            return 1
          } else if (b.comments.length == 0) {
            return -1
          }

          a = a.comments[a.comments.length - 1].date
            .split("/")
            .reverse()
            .join("");
          b = b.comments[b.comments.length - 1].date
            .split("/")
            .reverse()
            .join("");
          return a > b ? -1 : a < b ? 1 : 0;
        }
        return this.messages.slice().sort(compare);
      } else if (this.sortFilter === "Most popular") {
        function compare(a, b) {
          if (a.comments.length > b.comments.length) {
            return -1;
          }
          return 1;
        }
        return this.messages.slice().sort(compare);
      }
    },
  },
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

  padding-right: 16px;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  margin: 40px 60px 20px;
  height: calc(100% - 300px);

  .post {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 32px;

    .poster {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 20%;
      margin: 16px 16px 0 0;
      img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
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
          min-width: 80px;
          max-width: 80px;
          border-radius: 50%;
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
  width: 300px;
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

