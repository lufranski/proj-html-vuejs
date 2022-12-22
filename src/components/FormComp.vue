<script>
    import CompileForm from './CompileForm.vue';
    import InfoComp from './InfoComp.vue';

    export default {
        components: { CompileForm, InfoComp }
    }
</script>

<template>
    <div class="container">
        <div>

            <CompileForm />

        </div>

        <div class="info">

            <InfoComp />

        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;

    .container {
        background-color: $bg-white;
        padding: 3rem 10rem;
        display: flex;
        

        div {
            width: 70%;
        }

        .info {
            width: 30%;
        }
    }
</style>