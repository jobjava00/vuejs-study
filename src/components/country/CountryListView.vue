<template>
    <div id="app">
        <region-buttons></region-buttons>
        <country-list></country-list>
    </div>
</template>

<script>
import RegionButtons from './RegionButtons.vue';
import CountryList from './CountryList.vue';

export default {
    name : 'CountryListView',
    components : { RegionButtons, CountryList}
}
</script>

