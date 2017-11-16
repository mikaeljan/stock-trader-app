<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-default panel-success">
            <div class="panel-heading ">
                <h3 class="panel-title">{{stock.name}} <small>(Price: {{stock.price}} | Amount: {{stock.amount}} )</small></h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <form>
                        <div class="form-group">
                            <input placeholder="Quantity" class="form-control" type="number" v-model.number='amount'>
                        </div>
                    </form>
                </div>
                <div class="pull-right">
                    <button class="btn btn-info"
                            @click='sell({stock:stock, amount:amount})'
                            :disabled='ifNotNumber || stock.price > credit || amount > stock.amount'
                    >Sell Stocks
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                amount: 0,
            }
        },
        props:['stock'],
        computed: {
            ifNotNumber(){
                if ((this.amount <= 0) || (!Number.isInteger(this.amount))){
                    return true;
                } else {
                    return false
                }
            },
            credit(){
                return this.$store.getters.credit;
            }
        },
        methods: {
            sell(stock){
                this.$store.dispatch('sellStock',stock);
                this.amount = 0;
            },

        }
    }
</script>

<style>

</style>