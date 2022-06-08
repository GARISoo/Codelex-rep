<style>
@import "./ServiceApp.scss";
</style>

<template>
  <div class="services">
    <h1 class="services-title">Services</h1>
    <div class="services-box">
      <div
        class="services-single"
        :class="{ selected: service.selected }"
        @click="selectService(service.title)"
        v-for="service in services"
        :key="service"
      >
        <span>{{ service.title }}</span>
        <span>{{ `${service.price.toFixed(2)}$` }}</span>
      </div>
    </div>
    <div class="services-total">
      <span>Total:</span>
      <span>{{ `${inTotal.toFixed(2)}$` }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ServiceSelection",
  data: () => ({
    services: [
      {
        title: "Web Development",
        price: 300.0,
        selected: false,
      },
      {
        title: "Design",
        price: 400.0,
        selected: false,
      },
      {
        title: "Integration",
        price: 250.0,
        selected: false,
      },
      {
        title: "Training",
        price: 220.0,
        selected: false,
      },
    ],
  }),
  methods: {
    selectService(title: string) {
      this.services = this.services.map((service) => {
        if (service.title === title) {
          return {
            ...service,
            selected: !service.selected,
          };
        }
        return service;
      });
    },
  },
  computed: {
    inTotal() {
      let prices = this.services.map((service) => {
        if (service.selected) {
          return service.price;
        }
        return 0;
      });
      return prices.reduce((a, b) => a + b);
    },
  },
});
</script>
