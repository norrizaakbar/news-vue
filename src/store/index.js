import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
  },
  mutations: {
    setNews: (state, articles) => (state.news = articles),
  },
  actions: {
    async fetchNews({ commit }) {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=65660e2292ea44a5ad53edc82e3f6fa9"
      );
      commit("setNews", response.data.articles);
    },
    async updateNews({ commit }, newsData) {
      console.log(newsData);
      commit("setNews", "newsData");
    },
  },
  getters: {
    news: (state) => state.news,
  },
});
