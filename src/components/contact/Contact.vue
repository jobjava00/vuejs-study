<template>
    <div>
        <h1>연락처 상세</h1>
        <div>
            <table class="detail">
                <tbody>
                    <tr>
                        <td>일련번호</td>
                        <td>{{contact.no}}</td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td>{{contact.name}}</td>
                    </tr>
                    <tr>
                        <td>전화</td>
                        <td>{{contact.tel}}</td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td>{{contact.address}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import ContactList from '@/store/contact/state';
    export default {
        name: "contact",
        data() {
            return {
                no: 0,
                contacts: ContactList.contacts
            }
        },
        created() {
            this.no = this.$route.params.no;
        },
        watch: {
            '$route' (to, from) {
                this.no = to.params.no;
            }
        },
        computed: {
            contact() {
                let no = this.no;
                let arr = this.contacts.filter(function(item, index) {
                    return item.no == no;
                });
                if (arr.length == 1) return arr[0];
                else return {};
            }
        }
    }
</script>