import Vue from 'vue';
import Vuex from 'vuex';
import country from './country';
import todolist from './todolist';
import contact from './contact/store';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: { contact, todolist, country }
});

export default store;
