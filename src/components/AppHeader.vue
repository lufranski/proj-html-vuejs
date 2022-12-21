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
    <header id="header">

        
        <ContactsTopBar />
        
        <HeaderNavbar />
        
        <!-- <div class="bg"> -->
        
        <AppHero />
        
        <!-- </div> -->
        

    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;

    header {
        background-image: url('../assets/consultant/images/bg-parallax.png'), url('../assets/polygon-scatter-haikei\ \(1\).svg');
        height: 630px;
        background-position: 50% 25%;
    }

</style>