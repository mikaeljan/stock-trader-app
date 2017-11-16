import stocks from '../../data/data'

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;
    },
    'RND_STOCKS' (state){
      state.stocks.forEach(stock=>{
          stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
      })
    },
};

const actions = {
    buyStock({commit}, payload){
        commit('BUY_STOCK',payload);
    },
    initStock({commit}){
        commit('SET_STOCKS',stocks)
    },
    randomizeStocks:({commit})=>{
        commit('RND_STOCKS');
    },
    setStocks({commit},payload){
        commit('UPDATE_STOCKS',payload)
    }
};

const getters = {
    stocks: state=>{
        return state.stocks;
    }
};

export default {
    getters,
    actions,
    mutations,
    state
}