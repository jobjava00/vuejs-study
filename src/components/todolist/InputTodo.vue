<template>
    <div>
        <input class="input" type="text" id="task" v-model.trim="todo" placeholder="입력 후 엔터!" @keyup.enter="addTodo"/>
        <span class="addbutton" @click="addTodo">추 가</span>
    </div>
</template>

<script>
import Constant from '../../constant'

export default {
    name : 'InputTodo',
    data(){ 
        return { todo : ""}
    },
    methods: {
        addTodo() {
            this.$store.dispatch(Constant.ADD_TODO, {todo : this.todo});
            this.todo = "";
        }
    }
}
</script>
