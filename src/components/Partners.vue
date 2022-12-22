<script>
    export default {
        props: {
            item: String
        }
    }
</script>

<template>
    <li>
    
        <img :src="item" alt="">
        
    </li>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;

    li {
        width: calc(20% - 5rem);

        img {
            filter: invert(.5);
            // max-width: 80%;
        }
    }
</style>