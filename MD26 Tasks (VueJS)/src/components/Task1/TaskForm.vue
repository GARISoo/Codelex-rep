<template>
  <div>
    <input type="text" v-model="inputValue" placeholder="Update title..." />
    <button @click="changeTitle">Change</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskForm",

  emits: ["newTitle"],

  data: () => ({
    inputValue: "",
  }),

  methods: {
    changeTitle() {
      this.$emit("newTitle", this.inputValue);
      this.inputValue = "";
    },
  },
});
</script>

<style scoped>
@import url("../styles.scss");
</style>
