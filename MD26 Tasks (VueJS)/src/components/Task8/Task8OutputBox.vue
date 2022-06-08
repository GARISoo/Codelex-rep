<template>
  <div class="task__color-box orange" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskColor",
  props: ["newTitle", "newDesc"],
});
</script>

<style scoped>
@import url("../styles.scss");
</style>
