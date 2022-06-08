<template>
  <div>
    <input type="text" v-model="titleInputValue" placeholder="Update title.." />
  </div>
  <div>
    <input type="text" v-model="descInputValue" placeholder="Update desc.." />
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

  watch: {
    titleInputValue() {
      this.$emit("newTitle", this.titleInputValue);
    },
    descInputValue() {
      this.$emit("newDesc", this.descInputValue);
    },
  },
});
</script>

<style scoped>
@import url("../styles.scss");
</style>
