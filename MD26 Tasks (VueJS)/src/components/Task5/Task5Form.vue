<template>
  <div>
    <input type="text" v-model="titleInputValue" placeholder="Update title.." />
    <button @click="changeTitle">Change</button>
  </div>
  <div>
    <input type="text" v-model="descInputValue" placeholder="Update desc.." />
    <button @click="changeDesc">Change</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskForm",

  emits: ["newTitle", "newDesc"],

  data: () => ({
    titleInputValue: "",
    descInputValue: "",
  }),

  methods: {
    changeTitle() {
      this.$emit("newTitle", this.titleInputValue);
      this.titleInputValue = "";
    },
    changeDesc() {
      this.$emit("newDesc", this.descInputValue);
      this.descInputValue = "";
    },
  },
});
</script>

<style scoped>
@import url("../styles.scss");
</style>
