<template>
    <div class="row">
            <stock-comp v-for="(stock, index) in stocks"
                        :stock='stock'
                        :index='index'
                        :key='index'>

            </stock-comp>
    </div>
</template>

<script>
    import Stock from './Stock.vue'
export default {
    computed: {
        stocks(){
            return this.$store.getters.stocks;
        },
    },
    components:{'stock-comp':Stock}
}
</script>

<style>

</style>