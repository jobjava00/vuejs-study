<template>
    <ul id="todolist">
        <li v-for="(a, index) in todolist" v-bind:class="checked(a.done)" @click="doneToggle(index)" :key="a.todo">
            <span>{{ a.todo }}</span>
            <span v-if="a.done">(완료)</span>
            <span class="close" @click.stop="deleteTodo(index)">&#x00D7;</span>
        </li>
    </ul>
</template>

<script>
    import {
        mapState,
        mapMutations,
        mapActions
    } from 'vuex';
    import Constant from '@/common/constant';
    import Namespace from '@/common/namespace';

    export default {
        name: 'TodoList',
        computed: mapState(Namespace.TODO_LIST, ['todolist']),
        methods: {
            checked(done) {
                if (done) return {
                    checked: true
                };
                else return {
                    checked: false
                };
            },
            ...mapMutations(Namespace.TODO_LIST, [
                Constant.DELETE_TODO,
                Constant.DONE_TOGGLE
            ]),
            ...mapActions(Namespace.TODO_LIST, [
                Constant.DELETE_TODO,
                Constant.DONE_TOGGLE
            ])
        }
    }
</script>