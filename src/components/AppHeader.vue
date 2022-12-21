<script>
    import ContactsTopBar from './ContactsTopBar.vue';
    import HeaderNavbar from './HeaderNavbar.vue';

    export default{
        components: { 
            ContactsTopBar, 
            HeaderNavbar 
        }
    }
</script>

<template>
    <header>

        <ContactsTopBar />
    
        <HeaderNavbar />

    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;


</style>