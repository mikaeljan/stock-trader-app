import axios from 'axios';

export const loadData = ({commit}) => {
    axios.get('https://vuejs-http-a1a5c.firebaseio.com/stocks.json')
        .then(res => {
            if (res) {
                const stocks = res.data.stocks;
                const credit = res.data.credit;
                const stocksOwned = res.data.stocksOwned;

                const portfolio = {
                    credit,
                    stocksOwned
                };
                commit('SET_STOCKS', stocks);
                commit('SET_PORTFOLIO', portfolio)
            }
        })
};

