<template>
    <div class="container">
        <header-comp></header-comp>
        <!--Changing body-->
        <div class="row">
            <div class="col-xs-12">
                <transition
                        enter-active-class="animated zoomIn"
                        leave-active-class="animated zoomOut"
                        mode='out-in'
                        appear
                >
                    <router-view></router-view>
                </transition>
                <!--End Changing body-->
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        components:{'header-comp':Header},
        created(){
            this.$store.dispatch('initStock');
        }
    }
</script>

<style>

</style>
