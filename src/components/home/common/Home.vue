<template>
    <div class="Home">
        <v-head></v-head>
            <div class="container">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vFooter from './Footer.vue';
    export default {
        components:{
            vHead, vFooter
        }
    }
</script>
<style scoped>
    .Home{
        width: 1000px;
        margin: 0 auto;
    }
</style>
