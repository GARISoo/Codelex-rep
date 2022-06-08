<template>
  <div class="task__box">
    <Task6Form @new-title="setTitle" @new-desc="setDesc" />
    <Task6OutputBox :new-title="title" :new-desc="desc" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Task6Form from "./Task6Form.vue";
import Task6OutputBox from "./Task6OutputBox.vue";
export default defineComponent({
  name: "TaskSixth",
  components: { Task6Form, Task6OutputBox },
  data: () => ({
    title: "Title",
    desc: "Desc",
  }),

  methods: {
    setTitle(value: string) {
      this.title = value;
    },
    setDesc(value: string) {
      this.desc = value;
    },
  },
});
</script>

<style scoped>
@import url("../styles.scss");
</style>
