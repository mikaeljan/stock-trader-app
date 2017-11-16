<template>
    <div>
        <h1>Trade or View / Portfolio</h1>
        <p> You may Save & Load your Data </p>
        <p> Click on 'End Day' to begin a New Day! </p>
        <hr>
        <p><strong>Your Credit: {{credit | currency}}</strong></p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        computed: {
            credit() {
                return this.$store.getters.credit;
            }
        },
    }
</script>