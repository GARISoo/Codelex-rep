<template>
  <div class="task__box">
    <Task5Form @new-title="setTitle" @new-desc="setDesc" />
    <Task5OutputBox :new-title="title" :new-desc="desc" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Task5Form from "./Task5Form.vue";
import Task5OutputBox from "./Task5OutputBox.vue";
export default defineComponent({
  name: "TaskFifth",
  components: { Task5Form, Task5OutputBox },
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
