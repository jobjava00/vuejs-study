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
import Constant from '../../constant';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name : "RegionButtons"    ,
    computed : mapGetters(['country.regions', 'currentRegion']),
    methods : {
        isSelected(region){
            if(region == this.currentRegion) return { selected : true };
            else return { selected : false };
        },
        ...mapMutations([
            Constant.CHANGE_REGION
        ])
    }
}
</script>
