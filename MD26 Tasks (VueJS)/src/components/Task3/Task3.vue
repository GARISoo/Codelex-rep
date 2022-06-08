<template>
  <div class="task__box">
    <Task3Form @new-title="setColor" />
    <Task3ColorBox :color="color"></Task3ColorBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Task3Form from "./Task3Form.vue";
import Task3ColorBox from "./Task3ColorBox.vue";
export default defineComponent({
  name: "TaskThird",
  components: { Task3Form, Task3ColorBox },
  data: () => ({
    color: "",
  }),

  methods: {
    setColor(value: string) {
      this.color = value;
      console.log(this.color);
    },
  },
});
</script>

<style scoped>
@import url("../styles.scss");
</style>
