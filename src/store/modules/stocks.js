import stocks from '../../data/data'

const state = {
    stocks: []
};

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;
  },
    'RND_STOCKS' (state){},
};

const actions = {
    buyStock({commit}, payload){
        commit('BUY_STOCK',payload);
    },
    initStock({commit}, payload){
        commit('SET_STOCKS', stocks)
    },
    randomizeStacks: ({commit})=>{
        commit('RND_STOCKS')
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