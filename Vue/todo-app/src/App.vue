<template>
  <div id="app" class="app-container">
    <div class="todo-container">
      <h1 class="app-title">Seznam úkolů!</h1>
      <div class="todo-form">
        <input v-model="newTask" @keyup.enter="addTask" placeholder="Přidat nový úkol" class="task-input">
        <button @click="addTask" class="add-button">Přidat úkol</button>
      </div>
      <ul class="todo-list">
        <li v-for="(task, index) in tasks" :key="index" class="todo-item">
          <input type="checkbox" v-model="task.completed" class="task-checkbox">
          <span :class="{ completed: task.completed }" class="task-text">{{ task.text }}</span>
          <button @click="deleteTask(index)" class="delete-button">X</button>
        </li>
      </ul>
    </div>
  </div>c
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.todo-container {
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-title {
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.todo-form {
  display: flex;
  margin-bottom: 20px;
}

.task-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}

.add-button {
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 0 5px 5px 0;
  color: white;
  cursor: pointer;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}

.task-checkbox {
  margin-right: 10px;
}

.task-text {
  flex: 1;
  color: #333;
}

.completed {
  text-decoration: line-through;
}

.delete-button {
  padding: 5px;
  background-color: #dc3545;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
}
</style>
