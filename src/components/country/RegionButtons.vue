<template>
    <div>
        <button class="region" v-for="region in regions"
            :class="isSelected(region)"
            :key="region"
            @click="changeRegion({region:region})">
            {{region}}
        </button>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapMutations
    } from 'vuex';
    import Constant from '@/common/constant';
    import Namespace from '@/common/namespace';

    export default {
        name: "RegionButtons",
        computed: mapGetters(Namespace.COUNTRY, ['regions', 'currentRegion']),
        methods: {
            isSelected(region) {
                if (region == this.currentRegion) return {
                    selected: true
                };
                else return {
                    selected: false
                };
            },
            ...mapMutations(Namespace.COUNTRY, [
                Constant.CHANGE_REGION
            ])
        }
    }
</script>