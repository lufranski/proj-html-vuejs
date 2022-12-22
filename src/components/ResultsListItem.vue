<script>
    export default {
        props: {
            item: Object
        }
    }
</script>

<template>
    <li>
    
        <h3 class="number">
    
            {{ item.number }}
    
        </h3>

    
        <h3 class="title">
    
            {{ item.title }}
    
        </h3>
    </li>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;

    li {
        color: $bg-white;
        .title {
            font-size: 25px;
        }

        .number {
            font-size: 35px;
            color: $primary-color;
        }
    }
</style>