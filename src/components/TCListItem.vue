<script>
    export default{
        props: {
            item: Object
        }
    }
</script>

<template>
    <li>
        <h4>
            <span>
                <font-awesome-icon :icon="item.icon" />
            </span>

            {{ item.title }}
        </h4>

        <p>
            {{ item.par }}
        </p>
    </li>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;
    li{
        width: 50%;
        margin-bottom: 2rem;

        h4 {
            color: $bg-white;
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 1rem;
    
            span {
                color: $primary-color;
            }
        }
    
        p {
            color: $pumice-text;
            font-size: 18px;
        }
    }

</style>