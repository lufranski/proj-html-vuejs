<script>
    import ActionProjects from './ActionProjects.vue';
    import BusinessAreas from './BusinessAreas.vue';
    import Results from './Results.vue';
    import TheCompany from './TheCompany.vue';
    import FormComp from './FormComp.vue';

    export default {
        components: {
            BusinessAreas,
            TheCompany,
            ActionProjects,
            Results,
            FormComp
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
        <Results />

        <!-- Form section - Get in Touch -->
        <FormComp />

    </main>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;
</style>