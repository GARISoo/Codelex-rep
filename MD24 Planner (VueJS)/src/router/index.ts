import ServiceAppVue from "@/components/ServiceApp.vue";
import TaskAppVue from "@/components/TaskApp.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TaskAppVue,
    },
    {
      path: "/services",
      name: "services",
      component: ServiceAppVue,
    },
  ],
});

export default router;
