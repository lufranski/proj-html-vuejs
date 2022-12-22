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
                
        <AppHero />
        
        <ul>
            <li v-for="x in 3"></li>
        </ul>        

    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;

    header {
        background-image: url('../assets/consultant/images/bg-parallax.png'), url('../assets/polygon-scatter-haikei\ \(1\).svg');
        height: 700px;
        background-position: 50% 25%;
        background-size: cover;
        position: relative;

        ul {
            position: absolute;
            right: 10px;
            bottom: 300px;
            height: 100px;

            li {
                width: 10px;
                height: 30px;
                border: 1px solid $primary-color;
                border-radius: 10px;
                margin-bottom: .5rem;
            }

            li:nth-child(2) {
                background-color: $primary-color;
            }
        }
    }

</style>