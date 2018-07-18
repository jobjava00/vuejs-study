<template>
    <div>
        <table id="list">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>전화번호</th>
                    <th>주소</th>
                </tr>
            </thead>
            <tbody id="contacts">
                <tr v-for="contact in contacts" :key="contact.no">
                    <router-link v-bind:to="'/contacts/'+contact.no">
                        <td>{{contact.no}}</td>
                        <td>{{contact.name}}</td>
                        <td>{{contact.tel}}</td>
                        <td>{{contact.address}}</td>
                    </router-link>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import Namespace from '@/common/namespace';

export default {
    name : "contactList",
    computed : mapState(Namespace.CONTACT,['contacts'])
}
</script>
