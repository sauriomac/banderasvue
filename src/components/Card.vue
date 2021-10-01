<template>
  <div class="card mb-1">
          <div class="card-body">
            <h5 class="card-title text-center">{{pais.name.common}}</h5>
            <p class="text-center">
              <img :src="pais.flags[1]" :alt="`bandera-${pais.flags[1]}`" class="img-fluid w-50">
            </p>
            <p class="card-text">
              <span class="badge badge-dark mb-1 d-block">nativeName: {{pais.nativeName}}</span>
              <span class="badge p-3 badge-info mb-1 d-block">Población: {{populationFormato(pais.population)}}</span>
              <span class="badge badge-dark mb-1 d-block">Capital: {{pais.capital}}</span>
              <span class="badge badge-dark d-block">Región: {{pais.region}}</span>
            </p>
          </div>
        </div>
</template>

<script>
export default {
    props: ['pais'],
    setup(){
      const populationFormato = (num) => {
        return new Intl.NumberFormat("de-DE").format(num);
      }
      return {populationFormato}
    }
}
</script>
