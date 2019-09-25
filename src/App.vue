<template>
  <div id="app">
    <Header/>
    <div class="container">
      <Addtodo v-on:add-todo="addTodo"/>
      <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    </div>
    
  </div>
</template>

<script>
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/Addtodo';

export default {
  name: 'app',
  components: {
    Todos,
    Header,
    Addtodo
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
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  }
}
</script>

