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
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Todos,
    Header,
    Addtodo
  }, 
  data() {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo(id) {

      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(this.todos = this.todos.filter(todo => todo.id !== id))
      .catch();
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
      .then(res => this.todos = [...this.todos, res.data])
      .catch();
    },
  },
  created() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.todos = res.data)
    .catch();
}
}
</script>

