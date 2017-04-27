<template>
    <div class="Home">
        <v-head></v-head>
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
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
<style>
    body{
        margin: 0 auto;
        padding: 0;
        background: #ececec;
    }
    .Home{
        width: 1000px;
        margin: 0 auto;
    }
</style>
