<template>
    <div class="row">
        <div class="col-md-6">
            <stock-comp v-for="(stock, index) in stocks"
                        :stock='stock'
                        :index='index'
                        :key='index'>

            </stock-comp>
        </div>
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