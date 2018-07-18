<template>
    <p>
        이름 : <input type="text" v-model.trim="name"
        placeholder="두글자 이상 입력후 엔터!"
        @keyup.enter="keyupEvent" />
    </p>
</template>
<script>
import Constant from '@/common/constant';
import Namespace from '@/common/namespace';

export default {
    name : 'search',
    data(){ return {name: ''}},
    methods : {
        keyupEvent(e){
            var val = e.target.value;
            if(val.length >= 2){
                this.$store.dispatch(Namespace.CONTACT+"/"+Constant.SEARCH_CONTACT, {name : val});
                this.name = "";
            }else{
                this.$store.dispatch(Namespace.CONTACT+"/"+Constant.SEARCH_CONTACT, {name : ''});
            }
        }
    }
}
</script>

