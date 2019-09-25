<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from './components/Todos';
import Header from './components/layout/Header';

export default {
  name: 'app',
  components: {
    Todos,
    Header
  }, 
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Task One",
          completed: false
        },
        {
          id: 2,
          title: "Task two",
          completed: false
        },
        {
          id: 3,
          title: "Task three",
          completed: true
        }
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
}
</script>

