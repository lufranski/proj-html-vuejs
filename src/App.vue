<script>
  import AppFooter from './components/AppFooter.vue';
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';


  export default {
    components: {
      AppHeader,
      AppFooter,
      AppMain
    }
  }
</script>

<template>
  <!-- Header -->
      <!-- Topbar con contatti -->
      <!-- Navbar con logo e menu -->
      <!-- Hero -->
  <AppHeader />
  
  <!-- Main -->
  <AppMain />    

  <!-- Footer -->
      <!-- Flex container con contatti + card con list items -->
      <!-- Section con pulsante "sali su" -->
  <AppFooter />
</template>

<style lang="scss">
  @use './styles/general.scss' as *;
   
</style>
