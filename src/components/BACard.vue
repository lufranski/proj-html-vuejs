<script>
    import {store} from '../store.js';

    export default {
        props: {
            item: Object
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="card">
        <img :src="item.img"  alt="">

        <h3>
            {{ item.name }}
        </h3>

        <p>
            {{ store.businessAreas.par }}
        </p>

        <font-awesome-icon :icon="store.businessAreas.icon" class="arrow"/>
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
            max-width: 30px;
            filter: brightness(0) saturate(100%) invert(39%) sepia(15%) saturate(4855%) hue-rotate(145deg) brightness(89%) contrast(98%);
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
        }

        p {
            color: #7e8da1;

        }

    }
</style>