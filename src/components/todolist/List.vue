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
import Constant from '../../constant';
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
    computed : mapState(['todolist']),
    methods : { 
        checked(done){
            if(done) return { checked:true };
            else return { checked:false };
        },
        ...mapMutations([
            Constant.DELETE_TODO,
            Constant.DONE_TOGGLE
        ]),
        ...mapActions([
            Constant.DELETE_TODO,
            Constant.DONE_TOGGLE
        ])
    }
}
</script>
