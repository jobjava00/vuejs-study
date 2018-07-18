import state from './state';
import mutation from './mutation';
import action from './action';

export default {
    namespaced: true,
    state: state,
    mutations: mutation,
    actions: action
}