<template>
  <div class="contacts-area">
    <div class="left">
      <div class="row">
        <h4 class="label top">Search:</h4>
        <button
          v-if="activeContact != null"
          class="back"
          @click="$store.commit('setActiveContact', null)"
        >
          {{ "\< Back to results" }}
        </button>
      </div>
      <input type="text" @input="search" />
      <h4 class="label">
        {{ activeContact != null ? "Currently selected:" : "Search results:" }}
      </h4>

      <hr :class="activeContact != null ? 'green' : ''" />

      <div v-if="activeContact != null" class="info">
        <div class="header">
          <img :src="require('@/assets/' + currentContact.avatar)" />
          <h3>{{ currentContact.name }}</h3>
        </div>
        <h4>Email:</h4>
        <p>{{ currentContact.email }}</p>
        <h4>Phone:</h4>
        <p>{{ currentContact.telephone }}</p>
        <h4>Mutual groups:</h4>
        <div
          v-for="(icon, index) in currentContact.icons"
          :key="index"
          class="item"
        >
          <div class="circle" :class="currentContact.groups[index].color">
            <img :src="require('@/assets/clubicon-' + icon + '.png')" />
          </div>
          <p>{{ currentContact.groups[index].title }}</p>
        </div>
      </div>

      <p v-else-if="terms === ''">Type something for results...</p>
      <p v-else-if="filteredContacts().length == 0">No matching results...</p>
      <div v-else class="scroll-list">
        <div
          v-for="contact in filteredContacts()"
          :key="`card-${contact.id}`"
          ref="`card-${contact.id}`"
          class="search-card"
          :class="contact.color"
          @click="
            activeContact == contact.id
              ? $store.commit('setActiveContact', null)
              : activate(contact.id)
          "
        >
          <p>{{ contact.name }}</p>
          <div class="row">
            <img
              v-for="(icon, iconIndex) in contact.icons"
              :key="`icon-${contact.id}-${iconIndex}`"
              :src="require('@/assets/clubicon-' + icon + '.png')"
              class="bottom"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="scroll-list custom-scroll green">
        <div
          v-for="contact in contacts"
          :key="`card-${contact.id}`"
          :id="`card-${contact.id}`"
          class="card"
          :class="
            activeContact == contact.id
              ? 'active ' + contact.color
              : contact.color
          "
          @click="
            activeContact == contact.id
              ? $store.commit('setActiveContact', null)
              : activate(contact.id)
          "
        >
          <h4>{{ contact.name }}</h4>
          <div class="row">
            <img
              v-for="(icon, iconIndex) in contact.icons"
              :key="`icon-${contact.id}-${iconIndex}`"
              :src="require('@/assets/clubicon-' + icon + '.png')"
              class="bottom"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "../store/index.js";

export default {
  name: "Contacts",
  store: store,
  data() {
    return {
      terms: "",
      inResult: null,
    };
  },
  computed: {
    ...mapGetters(["contacts", "activeContact"]),
    currentContact() {
      return this.contacts.filter((c) => c.id == this.activeContact)[0];
    },
  },
  methods: {
    search(e) {
      store.commit("setActiveContact", null);
      this.terms = e.target.value;
    },
    filteredContacts() {
      return this.contacts.filter((contact) =>
        contact.name.toUpperCase().includes(this.terms.toUpperCase())
      );
    },
    activate(index) {
      document.getElementById("card-" + index).scrollIntoView();
      store.commit("setActiveContact", index);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/main.scss";

.top {
  margin-top: 16px;
}

hr {
  border: 2px solid black;
  margin-bottom: 16px;
  &.green {
    border-color: $green;
  }
}

.info {
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  text-align: left;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      margin-right: 16px;
      height: 80px;
      min-width: 80px;
      max-width: 80px;

      border-radius: 50%;
    }
    h3 {
      margin: 0;
    }
  }

  h4 {
    @include serif;
    margin-bottom: 0;
    margin-top: 16px;
  }

  p {
    margin-bottom: 16px;
    margin-top: 0;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 8px 0;

    .circle {
      height: 50px;
      width: 50px;
      @include backgrounds;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      height: 40px;
    }

    p {
      margin: 0;
    }
  }
}

.contacts-area {
  margin: 0 62px;
  display: flex;
  height: calc(100% - 200px);

  .left {
    border-right: 2px black solid;
    display: flex;
    flex-direction: column;
    width: calc(40%);
    padding-right: 60px;

    input[type="text"] {
      height: 40px;
      width: 100%;
    }

    p {
      font-weight: 700;
      text-align: left;
    }

    .back {
      font-size: 19px;
      font-weight: 700;
      border-radius: 8px;
      padding: 4px 8px;
      margin: 4px;
      background-color: black;
      color: white;
    }

    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .right {
    width: calc(60%);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    .controls {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .circle {
        border: 2px solid black;
        border-radius: 100%;
        background-color: white;
      }
    }

    .scroll-list {
      margin-left: 60px;
      //   margin-right: 30px;
    }
  }
}

.scroll-list {
  overflow-y: scroll;
  flex-grow: 1;

  padding-bottom: 30px;
  padding-right: 40px;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  .card {
    @include backgrounds;
    width: calc(100% - 8px);
    border-radius: 18px;
    margin-left: 4px;

    h4 {
      padding: 24px 24px 12px;
      margin-bottom: 0;
    }

    img {
      margin: 16px;
      height: 48px;
    }

    .row {
      display: flex;
      justify-content: flex-end;
    }

    &.active {
      box-shadow: 0px 0px 0px 4px $green;
    }
  }

  .search-card {
    @include backgrounds;
    width: calc(100% - 16px);
    border-radius: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 8px;

    p {
      margin: 0px;
      padding: 16px;
    }

    img {
      height: 40px;
    }

    .row {
      display: flex;
      justify-content: flex-end;
      margin-right: 8px;
    }
  }
}
</style>

