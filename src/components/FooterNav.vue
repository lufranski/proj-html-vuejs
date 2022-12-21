<script>
    import FooterContactsCard from './FooterContactsCard.vue';
    import FooterNavCard from './FooterNavCard.vue';
    import {store} from '../store.js';

    export default {
        components: { 
            FooterContactsCard, 
            FooterNavCard 
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="container">

        <FooterContactsCard />

        <FooterNavCard v-for="item in store.footerNav" :item="item"/>
        
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;

    .container {
        display: flex;
        gap: 2rem;
        padding: 3rem;
    }
</style>