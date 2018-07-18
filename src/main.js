import Vue from 'vue'
import todolistStore from './store/todolist'
import countryStore from './store/country'
import TodoList from './components/todolist/TodoList'
import App from './components/country/CountryList'

new Vue({
    countryStore,
    el: '#app',
    render: h => h(App)
})