<script>
    import ActionProjects from './ActionProjects.vue';
    import BusinessAreas from './BusinessAreas.vue';
    import TheCompany from './TheCompany.vue';

    export default {
    components: {
        BusinessAreas,
        TheCompany,
        ActionProjects
    }
}
</script>

<template>
    <main>
        <!-- Section con cards - Business Areas -->
        <BusinessAreas />

        <!-- Section con bg e list items - The Company  -->
        <TheCompany />  
        
        <!-- Section con nav menu e cards con bg img - Actions & Projects -->
        <ActionProjects />
        <!-- Section con list items e bg img - Results -->
      
        <!-- Form section - Get in Touch -->
    </main>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;
</style>