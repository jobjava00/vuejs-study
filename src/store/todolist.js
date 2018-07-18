import Constant from '@/common/constant';

export default {
    namespaced: true,
    state: {
        todolist: [
            { todo: '영화보기', done: false },
            { todo: '주말 산책', done: true },
            { todo: 'ES6 학습', done: false },
            { todo: '잠실 야구장', done: false }
        ]
    },
    mutations: {
        [Constant.ADD_TODO]: (state, payload) => {
            if (payload.todo !== '') {
                state.todolist.push({ todo: payload.todo, done: false });
            }
        },
        [Constant.DONE_TOGGLE]: (state, payload) => {
            state.todolist[payload].done = !state.todolist[payload].done;
        },
        [Constant.DELETE_TODO]: (state, payload) => {
            state.todolist.splice(payload, 1);
        }
    },
    actions: {
        [Constant.ADD_TODO]: (state, payload) => {
            console.log('### ADD_TODO!!!');
            state.commit(Constant.ADD_TODO, payload);
        },
        [Constant.DONE_TOGGLE]: (state, payload) => {
            console.log('### DONE_TOGGLE!!!');
            state.commit(Constant.DONE_TOGGLE, payload);
        },
        [Constant.DELETE_TODO]: (state, payload) => {
            console.log('### DELETE_TODO!!!');
            state.commit(Constant.DELETE_TODO, payload);
        }
    }
};
