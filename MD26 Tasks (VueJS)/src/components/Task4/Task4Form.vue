<template>
  <div>
    <input type="text" v-model="inputValue" placeholder="Color pls..." />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskForm",

  emits: ["newColor"],

  data: () => ({
    inputValue: "",
  }),

  watch: {
    inputValue() {
      this.$emit("newColor", this.inputValue);
    },
  },
});
</script>

<style scoped>
@import url("../styles.scss");
</style>
