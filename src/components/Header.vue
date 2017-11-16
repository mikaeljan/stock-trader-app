<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
        <router-link class='navbar-brand' to='/'>Stock Trader</router-link>
        <ul class="nav navbar-nav">
            <router-link  :to='{name:"portfolio"}' tag='li'><a>Portfolio</a></router-link>
            <router-link  :to='{name:"stocks"}' tag='li'><a>Stocks</a></router-link>
        </ul>
            <ul class="nav navbar-nav navbar-right">
                <li @click='endDay'><a>End Day</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Save Data</a></li>
                        <li><a href="#">Load Data</a></li>
                    </ul>
                </li>
                <li><a>Funds: {{ value }}</a></li>
            </ul>
        </div>

    </nav>


</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        computed: {
            value() {
                return this.$store.getters.credit;
            }
        },
        methods:{...mapActions({
            endDay: 'endDay',
        })}
    }
</script>

<style>
li {
    cursor: pointer;
}
</style>