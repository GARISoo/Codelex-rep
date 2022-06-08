<template>
  <div>
    <p>Toggle square visibility on button click</p>
    <button @click="changeVisibility">Toggle</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskForm",

  emits: ["isVisible"],

  data: () => ({
    visible: true,
  }),

  methods: {
    changeVisibility() {
      this.visible = !this.visible;
      this.$emit("isVisible", this.visible);
    },
  },
});
</script>

<style scoped>
@import url("../styles.scss");
</style>
