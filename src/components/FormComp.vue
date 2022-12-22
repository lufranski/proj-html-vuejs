<script>
    import CompileForm from './CompileForm.vue';

    export default {
        components: { CompileForm }
    }
</script>

<template>
    <section>
        <div class="container">

            <CompileForm />

        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;

    section {
        width: 100%;
        background-color: $bg-white;
        padding: 3rem;
        

        .container {
            width: 60%;
        }
    }
</style>