<template>
    <div id="exmaple">
        <table id="list">
            <thead>
                <tr>
                    <th>번호</th><th>국가명</th><th>수도</th><th>지역</th>
                </tr>
            </thead>
            <tbody id="contacts">
                <tr v-for="c in countries" :key="c.no">
                    <td>{{c.no}}</td>
                    <td>{{c.name}}</td>
                    <td>{{c.capital}}</td>
                    <td>{{c.region}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';
    import Constant from '@/common/constant';
    import Namespace from '@/common/namespace';

    export default {
        name: 'CountryList',
        computed: mapGetters(Namespace.COUNTRY, {
            countries: 'countriesByRegion'
        })
    }
</script>