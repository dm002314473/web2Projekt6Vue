<template>
  <div>
    <!--Examples of interpolation-->
    <h2 class="task-list-title">Task List</h2>
    <p class="task-count">Total Tasks: {{ taskCount }}</p>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.text }}
        <button @click="deleteTask(task.id)" class="delete-button">Delete</button>
        <button @click="markAsFinished(task.id)" class="finished-button">Mark as Finished</button>
      </li>
    </ul>

    <router-view />
  </div>
</template>

<script>
import { useTaskStore } from '../store/tasks';

export default {
  name: 'TaskList',
  //Computed properties
  computed: {
    taskCount() {
      return useTaskStore().tasks.length;
    },
    tasks() {
      return useTaskStore().tasks;
    },
  },
  //Methods
  methods: {
    deleteTask(taskId) {
      useTaskStore().deleteTask(taskId);
    },
    markAsFinished(taskId) {
      useTaskStore().markAsFinished(taskId);
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f2f2f2;
  margin: 5px 0;
  padding: 10px;
}

.task-list-title {
  color: rgb(0, 93, 0);
}

.task-count {
  font-weight: bold;
  color: rgb(64, 122, 64);
}
</style>