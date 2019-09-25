<template>
    <div class="row">
        <form class="col-sm-12" @submit="addTodo">
            <div class="input-group mb-3">
            <input type="text" v-model="title" class="form-control" placeholder="Todo">
            <div class="input-group-append">
                <button class="btn btn-secondary" type="submit">Submit</button>
            </div>
            </div>
        </form>
    </div>
</template>

<script>
import uuid from 'uuid';
export default {
    name: 'Addtodo',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault();
            const newTodo = {
                id: uuid.v4(),
                title: this.title, 
                completed: false
            };
            // Send up to parent
            this.$emit('add-todo', newTodo);
            //clear the from
            this.title = '';
        }
    }
}
</script>

<style>

</style>