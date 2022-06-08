<template>
  <div class="task__box">
    <Task4Form @new-color="setColor" />
    <Task4ColorBox :color="color"></Task4ColorBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Task4Form from "./Task4Form.vue";
import Task4ColorBox from "./Task4ColorBox.vue";
export default defineComponent({
  name: "TaskFourth",
  components: { Task4Form, Task4ColorBox },
  data: () => ({
    color: "",
  }),

  methods: {
    setColor(value: string) {
      this.color = value;
    },
  },
});
</script>

<style scoped>
@import url("../styles.scss");
</style>
