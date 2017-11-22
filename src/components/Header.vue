<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        <router-link class='navbar-brand' to='/'>Stock Trader</router-link>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <router-link  :to='{name:"portfolio"}' tag='li'><a>Portfolio</a></router-link>
                <router-link  :to='{name:"stocks"}' tag='li'><a>Stocks</a></router-link>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li @click='endDay'><a>End Day</a></li>
                <li class="dropdown"
                    :class="{open: menuDropped}"
                    @click='dropMenu'>
                    <a href="#"
                       class="dropdown-toggle"
                       data-toggle="dropdown"
                       role="button"
                       aria-haspopup="true"
                       aria-expanded="false"
                    >
                        Save & Load
                        <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#" @click='saveData'>Save Data</a></li>
                        <li><a href="#" @click='loadData'>Load Data</a></li>
                    </ul>
                </li>
                <li><a>Funds: {{ credit | currency}}</a></li>
            </ul>
        </div>
        </div>
    </nav>


</template>

<script>
    import {mapActions} from 'vuex';
    import axios from 'axios'
    export default {
        data() {
            return {
                menuDropped: false
            }
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            },
            credit() {
                return this.$store.getters.credit;
            }
        },
        methods: {
            ...mapActions({
                'randomizeStocks':'randomizeStocks',
                'fetchData':'loadData'
            }),
            endDay() {
                this.randomizeStocks();
            },
            dropMenu() {
                this.menuDropped = !this.menuDropped;
            },
            saveData() {
                console.log('Save');
                const data = {
                    credit: this.$store.getters.credit,
                    stocks: this.$store.getters.stocks,
                    stocksOwned: this.$store.getters.stockPortfolio,
                };
                axios.put('https://vuejs-http-a1a5c.firebaseio.com/stocks.json', data)
                    .then((res) => { })
                    .catch(err => {console.log(err)});
            },
            loadData() {
                console.log('Load');
                this.fetchData();
            }
        }
    }
</script>

<style>
li {
    cursor: pointer;
}
</style>