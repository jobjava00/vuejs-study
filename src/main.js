import Vue from 'vue'
//import store from './store/todolist'
import store from './store/country'
import TodoList from './components/todolist/TodoList'
import CountryList from './components/country/CountryList'

new Vue({
    store,
    el: '#app',
    render: h => h(CountryList)
})