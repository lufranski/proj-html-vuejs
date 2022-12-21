<script>
    import FooterBotBar from './FooterBotBar.vue';
    import FooterNav from './FooterNav.vue';

    export default {
        components: { 
            FooterNav, 
            FooterBotBar 
        }
    }
</script>

<template>
    <footer>
        <FooterNav />

        <FooterBotBar />
    </footer>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;

    footer {
        background-color: #111117;
        // padding: 3rem;
        
    }
</style>