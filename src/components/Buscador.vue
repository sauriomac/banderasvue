<template>
    <input
      type="text"
      placeholder="Ingrese búsqueda"
      class="form-control my-2"
      v-model="texto"
      @keyup="formulario"
    />
</template>

<script>
import { ref } from 'vue';
import {useStore} from 'vuex'
export default {
    setup(){
        const store = useStore()
        const texto = ref('')
        const formulario = () => {
            // console.log(texto.value)
            store.dispatch('filtroName', texto.value)
        }
        return {texto, formulario}
    }
};
</script>