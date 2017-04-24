<template>
    <div class="Home">
        <v-head></v-head>
        <router-view></router-view>
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
