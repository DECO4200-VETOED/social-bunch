<template>
  <div class="custom-select">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      <div class="text">
        {{ selected }}
      </div>
      
      <i v-if="!open" class="fas fa-chevron-down fa-lg icon"></i>
      <i v-else class="fas fa-chevron-up fa-lg icon"></i>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="handleSelection(options, i)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: {
    options: Array,
    currentType: String
  },
  data() {
    return {
      selected: this.currentType != null
        ? this.currentType
        : (this.options != null && this.options.length > 0)
        ? this.options[0]
        : null,
      open: false,
    };
  },
  methods: {
    handleSelection(options, i) {
      this.selected = options[i];
      this.open = false;
      this.$emit("input", {options: options, index: i});
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/main.scss";

.selected,
.items {
  @include sans-serif;
  font-size: 19px;
}

.selected {
  font-weight: bold;
}

.items {
  font-weight: normal;
}

.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  border: 2px solid #566370;
  line-height: 34px;
  border-radius: 4px;
  z-index: 10;
}

.selected {
  background-color: white;
  border-radius: 4px;
  border: 2px solid white;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 8px;
}

.text,
.custom-select .items div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}

.icon {
  text-align: center;
  width: 40px;
}

.custom-select .selected.open {
  border-radius: 6px 6px 0px 0px;
  border: 2px solid white;
  background-color: white;
}

.custom-select .items {
  color: #eff2f5;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  background-color: white;
  left: 0;
  right: 0;
  z-index: 0;
  border: 2px solid white;
}

.custom-select .items div {
  border-top: 2px solid #566370;
  color: black;
  padding: 8px;
  cursor: pointer;
  user-select: none;
}

.selectHide {
  display: none;
}
</style>
