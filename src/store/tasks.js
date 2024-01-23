import { defineStore } from 'pinia';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    finishedTasks: [],
  }),

  actions: {
    addTask(task) {
      this.tasks.push(task);
    },

    deleteTask(taskId) {
      const index = this.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    },

    markAsFinished(taskId) {
        const index = this.tasks.findIndex((task) => task.id === taskId);
        if (index !== -1) {
            const task = { ...this.tasks[index] };
            this.finishedTasks.push(task);
            this.deleteTask(taskId);
      }
    },
  },
});
