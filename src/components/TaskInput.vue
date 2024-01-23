<template>
  <div>
    <!--Two-way binding example-->
    <input v-model="newTask" id="newTaskInput" placeholder="Type a new task...">
    <button @click="addTask">Add Task</button>

    <p v-if="newTask" style="font-size: 1.5em;">{{ newTask }}</p>
  </div>
</template>

<script>
export default {
  name: 'TaskInput',
  data() {
    return {
      newTask: ''
    }
  },
  //Methods
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.$emit('addTask', { id: Date.now(), text: this.newTask });
        this.newTask = '';
      }
    }
  }
}
</script>

<style scoped>
input {
  padding: 10px;
  margin-right: 10px;
}

button {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
</style>