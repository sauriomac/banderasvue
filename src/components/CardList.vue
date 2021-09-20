<template>
<div class="container">
    <div class="row" v-for="pais in paises" :key="pais.name" >
      <div class="col">
      <Card  :pais="pais"/></div>
    </div>
     </div>

</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import {useStore} from 'vuex';
import Card from './Card';

export default {
    components: {
        Card
    },
    setup () {

        const store = useStore();

        const paises = computed(()=>{
            return store.getters.topPaisesPoblacion
        })
        onMounted(async()=>{
            await store.dispatch('getPaises');
            await store.dispatch('filtrarRegion', 'Asia')
        });

        

        return {paises}
    }
}
</script>

<style lang="scss" scoped>

</style>