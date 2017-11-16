<template>
    <div class="row">
        <div class="container">
            <div v-if="stocks.length < 1">
                <h3>You have no stocks :(</h3>
                <p>Try buying some!</p>
            </div>
                <stock-comp v-else v-for="stock, index in stocks" :stock='stock' :key='index'></stock-comp>
        </div>
    </div>
</template>

<script>
    import Stock from './Stock.vue';
    export default {
        components: {
            'stock-comp': Stock
        },
        computed: {
            stocks(){
                return this.$store.getters.stockPortfolio
            }
        }
    }
</script>
