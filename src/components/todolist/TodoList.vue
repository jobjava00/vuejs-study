<template>
    <div id="todolistapp">
        <div id="header" class="header">
            <h2>Todo List</h2>
            <input-todo></input-todo>
        </div>
        <list></list>
    </div>
</template>

<script>
import InputTodo from './InputTodo.vue';
import List from './List';
export default {
    name : 'todo-list',
    components : {InputTodo, List}
}
</script>

