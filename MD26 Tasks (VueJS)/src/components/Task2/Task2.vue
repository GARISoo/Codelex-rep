<template>
  <div class="task__box">
    <h1>{{ title }}</h1>
    <Task2Form @new-title="setTitle" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Task2Form from "./Task2Form.vue";
export default defineComponent({
  name: "TaskTwo",
  components: { Task2Form },
  data: () => ({
    title: "TITLE",
  }),

  methods: {
    setTitle(value: string) {
      this.title = value;
    },
  },
});
</script>

<style scoped>
@import url("../styles.scss");
</style>
