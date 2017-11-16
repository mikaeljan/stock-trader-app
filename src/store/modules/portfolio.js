const state = {
    credit: 10000,
    stocks: []
};

const getters = {
    credit(state){
        return state.credit
    },
    stockPortfolio(state, getters){
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element =>{
                return element.id === stock.id;
            });
            return {
                id: stock.id,
                amount: stock.amount,
                name: record.name,
                price: record.price
            }
        });
    }
};

const mutations = {
    'BUY_STOCK'(state, payload) {
        const record = state.stocks.find(element => {
            return element.id === payload.stock.id;
        });
        if (record) {
            record.amount += payload.amount;
        } else {
            state.stocks.push({
                id: payload.stock.id,
                amount: payload.amount
            })
        }
        state.credit -= payload.stock.price * payload.amount;
    },
    'SELL_STOCK'(state, payload){
        const record = state.stocks.find(element => {
            return element.id === payload.stock.id;
        });
        if (record.amount > payload.amount) {
            record.amount -= payload.amount;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.credit += payload.stock.price * payload.amount;
    }
};


const actions = {
    sellStock({commit}, payload){
        commit('SELL_STOCK', payload)
    }
}

export default {
    actions,
    state,
    mutations,
    getters
}