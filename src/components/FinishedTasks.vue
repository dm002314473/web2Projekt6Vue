<template>
    <div>
        <h1>Finished Tasks</h1>
        <ul>
            <li v-for="task in finishedTasks" :key="task.id">
                {{ task.text }}
            </li>
        </ul>        
    </div>
</template>
  
<script>
import { useTaskStore } from '../store/tasks';

export default {
    name: 'FinishedTasks',
    computed: {
        finishedTasks() {
            return useTaskStore().finishedTasks;
        },
    },
};
</script>
  