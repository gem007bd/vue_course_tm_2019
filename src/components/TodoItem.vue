<template>
    <div v-bind:class="{'is-complete': todo.completed}">
      <ul class="list-group">
        <li class="list-group-item">
          <div class="row">
              <div class="col-sm-1">
                <input type="checkbox"  v-on:change="markComplete">
              </div>
            <div class="col-sm-10">{{todo.title}}</div>
            <div class="col-sm-1">
              <span class="oi oi-x" @click="$emit('del-todo', todo.id)" ></span>
            </div>
          </div>
        </li>       
      </ul>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ["todo"],
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed;
        }
    }
}
</script>

<style scoped>
  .is-complete {
    text-decoration: line-through;
  }
  .list-group {
    margin-bottom: 2px;
}
</style>