<script>
    import AppHero from './AppHero.vue';
    import ContactsTopBar from './ContactsTopBar.vue';
    import HeaderNavbar from './HeaderNavbar.vue';

    export default{
        components: {
            ContactsTopBar,
            HeaderNavbar,
            AppHero
        }
    }
</script>

<template>
    <header>

        <ContactsTopBar />
    
        <HeaderNavbar />

        <AppHero />

    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;

    header {
        // background-color: $bg-dark-card;
        background-image: url("../assets/consultant/images/bg-parallax.png");
        background-position: center;
        background-size: fill;
        height: 700px;
    }

</style>