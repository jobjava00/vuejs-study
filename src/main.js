import Vue from 'vue'
import store from './store/todolist'
import TodoList from './components/todolist/TodoList'
import App from './components/country/CountryList'

new Vue({
    store,
    el: '#app',
    render: h => h(TodoList)
})