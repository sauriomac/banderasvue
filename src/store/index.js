import { createStore } from 'vuex'

export default createStore({
  state: {
    paises:[],
    paisesFiltrados:[]
  },
  mutations: {
    setPaises(state,payload){
      state.paises = payload
    },
    setPaisesFiltrados(state,payload){
      state.paisesFiltrados = payload
    }
  },
  actions: {
    async getPaises({commit}){
      try {
        let url='https://restcountries.eu/v3/all';
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        commit('setPaises', data)
      } catch (error) {
        console.log(error)
      }
      
    },

    filtrarRegion({commit, state}, region){
      const filtro = state.paises.filter(pais =>
        pais.region.includes(region)
      )
        commit('setPaisesFiltrados', filtro)
    },

    filtroName({ commit, state }, name) {
      const filtro = state.paises.filter((pais) => {
        let nombreApi = pais.name.toLowerCase();
        let nombreInput = name.toLowerCase();
        if (nombreApi.includes(nombreInput)) {
          return pais;
        }
      });
      // console.log(filtro)
      commit("setPaisesFiltrados", filtro);
    },
    
  },
  getters:{
    topPaisesPoblacion(state){
      return state.paisesFiltrados.sort((a,b)=>{
        return a.population < b.population ? 1: -1
      })
    }
  },
  modules: {
  }
})
