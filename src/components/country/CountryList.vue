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
    name : 'app',
    components : { RegionButtons, CountryList}
}
</script>

