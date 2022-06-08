<template>
  <form @submit.prevent="addAnimal()" class="animal__form">
    <input type="text" v-model="inputValue" placeholder="Name" required />
    <select v-model="selectedSpecies" required>
      <option value="" selected disabled>Type</option>
      <option value="Cat">Cat</option>
      <option value="Dog">Dog</option>
    </select>
    <button type="submit">ADD</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnimalAdder",

  emits: ["addAnimal"],

  data: () => ({
    inputValue: "",
    selectedSpecies: "" as "Cat" | "Dog" | "",
  }),

  methods: {
    addAnimal() {
      this.$emit("addAnimal", {
        name: this.inputValue,
        species: this.selectedSpecies,
      });
      this.selectedSpecies = "";
      this.inputValue = "";
    },
  },
});
</script>

<style scoped>
@import "./AnimalAdder.scss";
</style>
