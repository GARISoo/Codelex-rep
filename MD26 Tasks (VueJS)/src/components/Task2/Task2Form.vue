<template>
  <div>
    <input type="text" v-model="inputValue" placeholder="Update title..." />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Task2Form",

  emits: ["newTitle"],

  data: () => ({
    inputValue: "",
  }),

  watch: {
    inputValue() {
      this.$emit("newTitle", this.inputValue);
    },
  },
});
</script>

<style scoped>
@import url("../styles.scss");
</style>
