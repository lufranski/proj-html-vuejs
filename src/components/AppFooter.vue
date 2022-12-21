<script>
    import FooterNav from './FooterNav.vue';

    export default {
        components: { FooterNav }
    }
</script>

<template>
    <footer>
        <FooterNav />
    </footer>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;

    footer {
        background-color: #111117;
        padding: 3rem;
        // DEBUG
        // height: 300px;
    }
</style>