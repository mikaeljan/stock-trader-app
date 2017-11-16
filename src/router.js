import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
const Stocks = () => import('./components/stocks/Stocks.vue');
const Portfolio = () => import('./components/portfolio/Portfolio.vue');

Vue.use(VueRouter);

const routes = [
    { path: '', component: Home, name:'home' },
    { path: '/portfolio', component: Portfolio, name:'portfolio' },
    { path: '/stocks', component: Stocks, name:'stocks',
        children: [
                // {path:'', component: UserStart}
            ]
    },
    {path:'*', redirect:{name:'home'}}
];

export default new VueRouter({mode: 'history', routes})