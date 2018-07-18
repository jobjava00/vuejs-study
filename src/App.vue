<template>
    <div>
        <div class="header">
            <h1 class="headerText">(주)OpenSG</h1>
            <nav>
                <ul>
                    <li>
                        <router-link to="/todolist">Todo-List</router-link>
                    </li>
                    <li>
                        <router-link to="/country">Country</router-link>
                    </li>
                    <li>
                        <router-link to="/contacts">Contacts</router-link>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import VueRouter from 'vue-router';
    import TodoList from '@/components/todolist/TodoListView.vue';
    import Country from '@/components/country/CountryListView.vue';
    import Contacts from '@/components/contact/ContactListView.vue';
    import Contact from '@/components/contact/Contact.vue';

    const router = new VueRouter({
        routes: [{
            path: '/',
            component: TodoList
        }, {
            path: '/todolist',
            component: TodoList
        }, {
            path: '/country',
            component: Country
        }, {
            path: '/contacts',
            component: Contacts
        }, {
            path: '/contacts/:no',
            component: Contact
        }]
    });

    export default {
        name: 'app',
        router
    }
</script>