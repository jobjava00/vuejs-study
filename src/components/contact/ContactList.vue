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
                <tr v-for="contact in contacts" :key="contact.no" @click="navigate(contact.no)">
                    <td>{{contact.no}}</td>
                    <td>{{contact.name}}</td>
                    <td>{{contact.tel}}</td>
                    <td>{{contact.address}}</td>
                </tr>
            </tbody>
        </table>
        <router-view></router-view>
    </div>
</template>
<script>
    import {
        mapState
    } from 'vuex';
    import Namespace from '@/common/namespace';

    export default {
        name: "contactList",
        computed: mapState(Namespace.CONTACT, ['contacts']),
        methods: {
            navigate(no) {
                if (confirm("상세 정보를 보시겠습니까?")) {
                    this.$router.push({
                        name: 'contactbyno',
                        params: {
                            no: no
                        }
                    }, function() {
                        console.log("/contacts/" + no + " 로 이동 완료!")
                    })
                }
            }
        }
    }
</script>