<template>
  <div class="task__color-box" :style="`background-color: ${color}`" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TaskColor",
  props: ["color"],
});
</script>

<style scoped>
@import url("../styles.scss");
</style>
