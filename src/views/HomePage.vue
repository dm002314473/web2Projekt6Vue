<template>
    <div>
      <h1>Home</h1>
      <TaskInput @addTask="addTask" />
      <TaskList :tasks="tasks" @delete-task="deleteTask" @mark-as-finished="markAsFinished" />
    </div>
  </template>
  
<script>
  import TaskList from '../components/TaskList.vue';
  import TaskInput from '../components/TaskInput.vue';
  import { useTaskStore } from '../store/tasks';
  
  export default {
    name: 'HomePage',
    components: {
      TaskList,
      TaskInput
    },
    data() {
      return {
        tasks: [],
      };
    },
    methods: {
      deleteTask(taskId) {
        useTaskStore().deleteTask(taskId);
      },
      addTask(task) {
        useTaskStore().addTask(task);
      },
      markAsFinished(taskId) {
        useTaskStore().markAsFinished(taskId);
      }
    },
  };
  </script>
  