<template>
  <div class="form-check form-switch">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
      v-model="showDogs"
      @change="toggleAnimals(showDogs)"
    />
    <label v-if="showDogs" class="form-check-label" for="flexSwitchCheckDefault"
      >SHOW DOGGOS</label
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/js/bootstrap.js";

export default defineComponent({
  name: "ToggleSwitch",

  emits: ["doggieToggle"],

  data: () => ({
    showDogs: false,
  }),

  methods: {
    toggleAnimals(showDogs: boolean) {
      this.$emit("doggieToggle", showDogs);
    },
  },
});
</script>

<style scoped lang="css">
@import "bootstrap/dist/css/bootstrap.css";
</style>
