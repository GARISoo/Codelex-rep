<template>
  <div class="container">
    <Switch v-if="animals.length !== 0" @doggieToggle="doggieToggle" />
    <AnimalAdder @addAnimal="addAnimal" />
    <AnimalShower :animals="filteredAnimals" @removeAnimal="removeAnimal" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Switch from "../components/Switch.vue";
import AnimalAdder from "../components/AnimalAdder.vue";
import AnimalShower from "../components/AnimalShower.vue";

type AnimalType = {
  name: string;
  species: string;
};

type FilteredAnimalsType = "All" | "Dogs";

export default defineComponent({
  name: "AnimalApp",

  components: { Switch, AnimalAdder, AnimalShower },

  data: () => ({
    animals: [] as AnimalType[],
    visibleAnimals: "All" as FilteredAnimalsType,
  }),

  created() {
    this.animals = JSON.parse(localStorage.getItem("animals") || "[]");
  },

  watch: {
    animals(newAnimals) {
      localStorage.setItem("animals", JSON.stringify(newAnimals));
    },
  },

  methods: {
    addAnimal(animal: AnimalType) {
      const newAnimals = [...this.animals];
      newAnimals.push(animal);
      this.animals = newAnimals;
    },

    removeAnimal(index: number) {
      const newAnimals = [...this.animals];
      newAnimals.splice(index, 1);
      this.animals = newAnimals;
    },

    doggieToggle(showDogs: boolean) {
      if (!showDogs) {
        this.visibleAnimals = "Dogs";
      } else {
        this.visibleAnimals = "All";
      }
    },
  },

  computed: {
    filteredAnimals() {
      if (this.visibleAnimals === "Dogs") {
        return this.animals.filter((animal) => animal.species === "Dog");
      }
      return this.animals;
    },
  },
});
</script>

<style scoped>
@import url("./HomeView.scss");
</style>
