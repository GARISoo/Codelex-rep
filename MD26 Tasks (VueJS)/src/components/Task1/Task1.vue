<template>
  <div class="task__box">
    <h1>{{ title }}</h1>
    <TaskForm @new-title="setTitle" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskForm from "./TaskForm.vue";
export default defineComponent({
  name: "TaskOne",
  components: { TaskForm },
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
