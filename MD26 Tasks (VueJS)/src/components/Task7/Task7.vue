<template>
  <div class="task__box">
    <Task7Form @is-visible="setVisibility" />
    <Task7OutputBox v-if="isVisible" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Task7Form from "./Task7Form.vue";
import Task7OutputBox from "./Task7OutputBox.vue";
export default defineComponent({
  name: "TaskSeventh",
  components: { Task7Form, Task7OutputBox },
  data: () => ({
    isVisible: true,
  }),

  methods: {
    setVisibility(value: boolean) {
      this.isVisible = value;
    },
  },
});
</script>

<style scoped>
@import url("../styles.scss");
</style>
