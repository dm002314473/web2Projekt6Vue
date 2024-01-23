<template>
  <header>
    <h1>{{ pageTitle }}</h1>
  </header>
</template>

<script>
export default {
  name: 'TaskManagerHeader',
  data() {
    return {
      pageTitle: 'Task Manager'
    };
  }
}
</script>

<style scoped>
header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}
</style>