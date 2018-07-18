<template>
    <div id="app">
        <region-buttons></region-buttons>
        <list></list>
    </div>
</template>

<script>
import RegionButtons from './RegionButtons.vue';
import List from './List.vue';

export default {
    name : 'app',
    components : { RegionButtons, List}
}
</script>

