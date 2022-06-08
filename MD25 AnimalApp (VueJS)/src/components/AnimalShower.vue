<template>
  <div class="animal__wrapper">
    <div
      class="animal__box"
      :class="{ dogClass: species === 'Dog' }"
      v-for="({ species, name }, index) in animals"
      :key="name"
    >
      <span class="animal__name">{{ name }}</span>
      <span class="animal__species">{{ species }}</span>
      <button class="animal__remove-btn" @click="removeAnimal(index)">X</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnimalShower",

  props: ["animals"],

  emits: ["removeAnimal"],

  methods: {
    removeAnimal(index: number) {
      this.$emit("removeAnimal", index);
    },
  },
});
</script>

<style scoped>
@import url("./AnimalShower.scss");
</style>
