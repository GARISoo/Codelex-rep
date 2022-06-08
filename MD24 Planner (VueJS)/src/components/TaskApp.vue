<style>
@import "./TaskApp.scss";
</style>

<template>
  <div class="task-planner">
    <div class="task-add">
      <input
        class="task-input"
        type="text"
        placeholder="Your task"
        v-model="inputValue"
      />
      <button class="btn" @click="addTask()">Add</button>
    </div>
    <div
      class="single-task"
      :class="{ doneBox: task.isDone }"
      v-for="task in visibleTasks"
      @click="toggleComplete(task.id)"
      :key="task"
    >
      <span class="task-text" :class="{ doneText: task.isDone }">
        {{ task.title }}
      </span>
      <button class="delete-btn" @click="removeTask(task.id)">X</button>
    </div>
    <div class="task-filters" v-if="tasks.length !== 0">
      <button
        class="btn"
        :class="{ active: filter === 'All' }"
        @click="setFilter('All')"
      >
        All
      </button>
      <button
        class="btn"
        :class="{ active: filter === 'In progress' }"
        @click="setFilter('In progress')"
      >
        In progress
      </button>
      <button
        class="btn"
        :class="{ active: filter === 'Completed' }"
        @click="setFilter('Completed')"
      >
        Completed
      </button>
    </div>
  </div>
</template>

<script lang="ts">
type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

import { defineComponent } from "vue";
export default defineComponent({
  name: "Task-planner",
  data: () => ({
    inputValue: "",
    tasks: [] as Task[],
    id: 0,
    filter: "All",
  }),
  methods: {
    addTask() {
      this.id++;
      this.tasks = [
        ...this.tasks,
        {
          id: this.id,
          title: this.inputValue,
          isDone: false,
        },
      ];
      this.inputValue = "";
    },
    removeTask(id: number) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleComplete(id: number) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : { ...task }
      );
    },
    setFilter(stage: string) {
      this.filter = stage;
    },
  },
  computed: {
    visibleTasks() {
      let filteredTasks;
      if (this.filter === "All") filteredTasks = this.tasks;
      if (this.filter === "In progress")
        filteredTasks = this.tasks.filter((task) => !task.isDone);
      if (this.filter === "Completed")
        filteredTasks = this.tasks.filter((task) => task.isDone);
      return filteredTasks;
    },
  },
});
</script>
