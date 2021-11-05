<template>
  <div class="modal" :class="color">
    <div class="modal-content">
      <h2>{{ this.compTitle }}</h2>
      <i class="fas fa-times close fa-3x" @click="$emit('triggerClose')"></i>
      <hr />

      <!-- New post popup content -->
      <div v-if="type === 'post'" class="modal-child post">
        <div>
          <div>
            <h3 class="label">Title</h3>
            <input type="text" v-model="postTitle" />
          </div>
          <div>
            <h3 class="label">Main content</h3>

            <textarea v-model="postContent" />
          </div>
          <div>
            <h3 class="label">Link to an image</h3>

            <input type="text" v-model="postImg" />
          </div>
        </div>
        <button class="long green" @click="makePost(content.groupInd)">
          Post
        </button>
      </div>

      <!-- Invite members emails popup content -->
      <div v-if="type === 'invite' && inviteMembers" class="modal-child emails">
        <p>Enter the emails of the members you would like to join your group</p>
        <div class="email-list">
          <div v-for="(email, index) in invites" :key="index" class="row">
            <h4 class="label">{{ `Email ${index + 1}:` }}</h4>
            <input type="text" v-model="invites[index]" />
          </div>
        </div>
        <button class="long green" @click="$emit('triggerClose')">
          Invite members
        </button>
      </div>

      <!-- Invite members message popup content -->
      <div v-else-if="type === 'invite'" class="modal-child invite">
        <p>
          Invitees will automatically receive the message below via email or, if
          they have APP, via a notification on their APP home page - you can
          click in the box to edit it.
        </p>
        <textarea />
        <button class="long green" @click="inviteMembers = true">
          Continue to member selection
        </button>
      </div>

      <!-- Who's going popup content -->
      <div v-if="type === 'going'" class="modal-child going">
        <div class="left-column">
          <h3>Not responded</h3>
          <p v-for="(name, index) in content.unsure" :key="index">{{ name }}</p>
        </div>
        <div class="right-column">
          <h3>Responded</h3>
          <div
            v-for="(name, index) in content.yes"
            :key="`yes ${index}`"
            class="row"
          >
            <p>{{ name }}</p>
            <div class="circle" :class="color">
              <i class="fas fa-thumbs-up fa-2x"></i>
            </div>
          </div>
          <div
            v-for="(name, index) in content.no"
            :key="`no ${index}`"
            class="row"
          >
            <p>{{ name }}</p>
            <div class="circle">
              <i class="fas fa-thumbs-down fa-2x"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Join group modal menu content -->
      <div v-if="type === 'joinGroup'" class="modal-child join-group">
        <div class="vertical-center">
          <p>
            Members of this group will be able to see that you're in it, and any
            details you choose to share will be available to these members.
          </p>
        </div>
        <div class="button-row">
          <button class="long red" @click="$emit('triggerClose')">
            NO, NOT YET
          </button>
          <button class="long green" @click="$emit('joinGroup', content.id)">
            YES, JOIN
          </button>
        </div>
      </div>

      <!-- Decline invite modal menu content -->
      <div v-if="type === 'decline'" class="modal-child decline">
        <div class="vertical-center">
          <p>You will need to be re-invited to join this group.</p>
        </div>
        <div class="button-row">
          <button class="long red" @click="$emit('declineInvite', content.id)">
            DECLINE INVITE
          </button>
          <button class="long green" @click="$emit('triggerClose')">
            NO, NOT YET
          </button>
        </div>
      </div>

      <!-- Leave group modal menu content -->
      <div v-if="type === 'leave'" class="modal-child leave">
        <div class="vertical-center">
          <p>You will need to be re-invited to join again.</p>
        </div>
        <div class="button-row">
          <button class="long red" @click="$emit('leaveGroup', content.id)">
            YES, LEAVE
          </button>
          <button class="long green" @click="$emit('triggerClose')">
            NO, STAY
          </button>
        </div>
      </div>

      <!-- Change Password modal menu content -->
      <div
        v-if="type === 'password' && !confirmPassword"
        class="modal-child password"
      >
        <div>
          <h4 class="label">Confirm your current password:</h4>
          <span
            ><input type="password" />
            <h3>*</h3></span
          >
        </div>
        <button class="long green sans" @click="confirmPassword = true">
          Next
        </button>
      </div>

      <!-- Change Password modal menu content -->
      <div
        v-if="type === 'password' && confirmPassword"
        class="modal-child password"
      >
        <div>
          <h4 class="label">Enter your new password:</h4>
          <span
            ><input type="password" />
            <h3>*</h3></span
          >
        </div>
        <div>
          <h4 class="label">Confirm your new password:</h4>
          <span
            ><input type="password" />
            <h3>*</h3></span
          >
        </div>
        <button class="long green sans" @click="$emit('triggerClose')">
          Save changes
        </button>
      </div>

      <!-- Members modal menu content -->
      <div
        v-if="type === 'members'"
        class="modal-child members custom-scroll"
        :class="color"
      >
        <div
          v-for="(member, index) in content.members"
          :key="index"
          class="member"
          @click="goToContact(member)"
        >
          <img :src="require('@/assets/' + member.avatar)" />
          <h4>{{ member.name }}</h4>
        </div>
      </div>

      <!-- Join call modal menu content -->
      <div v-if="type === 'joinCall' && !oops" class="modal-child join-call">
        <div class="checkbox-row">
          <button class="custom-checkbox" @click="video = !video">
            <i v-if="video" class="fa fa-check fa-2x"></i>
          </button>
          <h4>Join with my camera on</h4>
        </div>
        <div class="checkbox-row">
          <button class="custom-checkbox" @click="voice = !voice">
            <i v-if="voice" class="fa fa-check fa-2x"></i>
          </button>
          <h4>Join with my sound on</h4>
        </div>
        <p>
          You'll be able to change these options with in-built zoom settings
          once you dial into the call.
        </p>
        <button
          v-if="color === 'green'"
          class="long green sans"
          @click="noCall"
        >
          Dial me in!
        </button>
        <button v-else class="long green sans">Dial me in!</button>
      </div>

      <!-- Oops no call now modal menu content -->
      <div v-if="type === 'joinCall' && oops" class="modal-child oops">
        <div class="meeting-content">
          <h3>Next scheduled meeting:</h3>
          <h4>10:00 am, Thursday 2 February</h4>
        </div>
        <p>
          You can create an account or sign in to keep up to date with the
          latest updates from your clubs.
        </p>
        <div class="button-row">
          <button class="long outline" @click="$emit('createAccount')">
            Create an account
          </button>
          <button class="long outline" @click="$emit('signIn')">Sign in</button>
        </div>
      </div>

      <!-- Other modal menu content -->
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  name: "Popup",
  store: store,
  props: {
    title: String,
    content: Object,
    type: String,
    color: String,
  },
  methods: {
    avatarSrc(src) {
      console.log("../assets/" + src);
      return "../assets/" + src;
    },
    noCall() {
      if (this.color === "green") {
        this.oops = true;
        this.compTitle = "Oops! There’s no call now.";
      }
    },
    goToContact(member) {
      let id = store.getters.contacts.filter((e) => e.email === member.email)[0]
        .id;
      store.commit("setActiveContact", id);
      this.$router.push("/contacts");
    },
    makePost(groupInd) {
      store.commit("makePost", {title: this.postTitle, content: this.postContent, img: this.postImg, group: groupInd});
      this.$emit('triggerClose')
    }
  },
  data() {
    return {
      video: false,
      voice: false,
      oops: false,
      inviteMembers: false,
      confirmPassword: false,
      compTitle: this.title,
      invites: [[], [], [], [], []],
      postTitle: "",
      postContent: "",
      postImg: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/main.scss";

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

.emails {
  .row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 16px;
    .label {
      margin: 0;
    }
  }

  .email-list {
    max-height: 60%;
    overflow: scroll;
  }
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

///// Password Popup Styles /////
.password {
  padding: 0 15%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

///// Members Popup Styles /////
.members {
  padding: 0 26%;
  overflow: auto;
  img {
    border-radius: 50%;
    height: 80px;
    width: 80px;
  }
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

///// Join call styles /////
.checkbox-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 71%;
  margin: 0 auto;
  gap: 16px;
}

.join-call {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  margin: 16px auto 0;

  p {
    font-weight: 700;
  }
}

.post {
  input {
    width: 100%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}

.oops,
.leave,
.join-group,
.decline,
.invite,
.emails, .post {
  width: 90%;
  margin: 16px auto 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-weight: 700;
    width: 80%;
    margin: 0 auto;
  }

  .meeting-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      margin-top: 0;
    }
  }

  .button-row {
    display: flex;
    justify-content: space-evenly;
    gap: 32px;

    .long {
      flex: 1;

      &.outline {
        @include serif;
      }
    }
  }

  textarea {
    resize: none;
    height: 40%;
    @include sans-serif;
    font-size: 19px;

    &:focus {
      outline: none;
    }
  }
}

.post {
  overflow-x: hidden;
  input {
    width: 100%;
  }

  textarea {
    width: 99%;
    resize: vertical;
    min-height: 48px;
  }

  button {
    width: 60%;
    margin: 32px auto 16px;
  }
}

.going {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  text-align: left;
  overflow: hidden;

  i {
    color: black;
  }

  p {
    font-weight: 700;
    font-size: 24px;
  }

  h3 {
    margin-bottom: 0;
  }

  .left-column {
    flex: 1;
    border-right: 2px solid black;
    padding-right: 5%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .right-column {
    flex: 1;
    padding-left: 5%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .circle {
      border: 2px solid black;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;

      &.blue {
        background-color: $blue;
      }

      &.orange {
        background-color: $orange;
      }

      &.yellow {
        background-color: $yellow;
      }

      &.green {
        background-color: $green;
      }
    }
  }
}

input[type="password"] {
  margin-top: 8px;
  width: 100%;
}

span {
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  h3 {
    color: red;
  }
}
</style>

