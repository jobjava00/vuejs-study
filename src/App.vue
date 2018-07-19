<template>
    <div>
        <div class="header">
            <h1 class="headerText">(주)OpenSG</h1>
            <nav>
                <ul>
                    <li>
                        <!-- 객체 바인딩은 v-bind 로 해야 함 -->
                        <router-link v-bind:to="{name: 'todolist'}">Todo-List</router-link>
                    </li>
                    <li>
                        <router-link to="/country">Country</router-link>
                    </li>
                    <li>
                        <router-link v-bind:to="{name: 'contacts'}">Contacts</router-link>
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
    import NotFound from '@/components/NotFound.vue';

    const router = new VueRouter({
        routes: [{
            path: '/',
            component: TodoList
        }, {
            path: '/todolist',
            name: 'todolist',
            component: TodoList
        }, {
            path: '/country',
            component: Country
        }, {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
            children: [{
                path: ':no',
                name: 'contactbyno',
                component: Contact,
                props: true
            }]
        }, {
            path: '*',
            component: NotFound
        }]
    });

    export default {
        name: 'app',
        router
    }
</script>