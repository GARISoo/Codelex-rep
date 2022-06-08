<template>
  <div class="task__box">
    <Task8Form @is-visible="setVisibility" />
    <Task8OutputBox v-if="isVisible" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Task8Form from "./Task8Form.vue";
import Task8OutputBox from "./Task8OutputBox.vue";
export default defineComponent({
  name: "TaskEight",
  components: { Task8Form, Task8OutputBox },
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
