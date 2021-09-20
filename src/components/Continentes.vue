<template>
<div class="text-center">
  <p class="mb-0">
    Seleccione un continente:
  </p>
  <div class="btn-group mb-3" role="group" aria-label="Basic example">
    <button
      type="button"
      class="btn btn-dark"
      @click="filtroRegion('Americas')"
    >
      AM
    </button>
    <button type="button" class="btn btn-dark" @click="filtroRegion('Europe')">
      EU
    </button>
    <button type="button" class="btn btn-dark" @click="filtroRegion('Asia')">
      AS
    </button>
    <button type="button" class="btn btn-dark" @click="filtroRegion('Africa')">
      AF
    </button>
    <button type="button" class="btn btn-dark" @click="filtroRegion('Oceania')">
      OC
    </button>
    <button type="button" class="btn btn-dark" @click="filtroRegion('')">
      All
    </button>
  </div>
</div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const filtroRegion = (region) => {
      store.dispatch("filtrarRegion", region);
    };
    return { filtroRegion };
  },
};
</script>

<style>
</style>
