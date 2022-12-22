<script>

    export default {
        props: {
            item: Object,
        },
    }
</script>

<template>
    <div class="card">
        <img :src="item.icon"  alt="">

        <h3>
            {{ item.title }}
        </h3>

        <p>
            {{ item.par }}
        </p>

        <font-awesome-icon icon="fa-solid fa-arrow-right" class="arrow"/>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;

    .card {
        width: calc((100% / 3) - 1rem);
        background-color: $bg-white;
        border-radius: 10px;
        padding: 1.5rem;
        position: relative;
        

        img {
            width: 40px;
            height: 40px;
            filter: brightness(0) saturate(100%) invert(39%) sepia(15%) saturate(4855%) hue-rotate(145deg) brightness(89%) contrast(98%);
            margin-bottom: 1rem;
        }

        .arrow {
            position: absolute;
            right: 20px;
            top: 25px;
            font-size: 20px;
            color: rgba($logo-bg, .3);
            cursor: pointer;

            &:hover {
                background-color: $logo-bg;
                color: $primary-color;
                border-radius: 50%;
                padding: 2px;
            }
        }

        h3 {
            color: #21333e;
            font-size: 23px;
            margin-bottom: 1rem;
        }

        p {
            color: #7e8da1;

        }

    }
</style>