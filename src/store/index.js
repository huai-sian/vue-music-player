import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navbar: 'Home',
    favorite: [],
  },
  mutations: {
    CHANGENAV(state, val) {
      state.navbar = val;
    },
    ADDTOFAVORITE(state, val) {
      state.favorite.push(val);
    },
    REMOVEFROMFAVORITE(state, val) {
      state.favorite.splice(val, 1);
    },
  },
  actions: {
    changeNav(context, payload) {
      context.commit('CHANGENAV', payload);
    },
    addToFavorite(context, payload) {
      let favIdx = -1;
      if (context.state.favorite.length > 0) {
        context.state.favorite.forEach((item, idx) => {
          if (item.videoId === payload.videoId) {
            favIdx = idx;
          }
        });
      }
      console.log(favIdx);
      if (favIdx === -1) {
        context.commit('ADDTOFAVORITE', payload);
      } else {
        context.commit('REMOVEFROMFAVORITE', favIdx);
      }
    },
  },
});
