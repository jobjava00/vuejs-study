<template>
    <div id="todolistapp">
        <div id="header" class="header">
            <h2>Todo List</h2>
            <input-todo></input-todo>
        </div>
        <todo-list></todo-list>
    </div>
</template>

<script>
import InputTodo from './InputTodo.vue';
import TodoList from './TodoList.vue';
export default {
    name : 'TodoListView',
    components : {InputTodo, TodoList}
}
</script>

