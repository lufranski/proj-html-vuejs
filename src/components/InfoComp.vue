<script>
    import {store} from '../store.js';

    export default{
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <section>
        <!-- Section Title -->
        <h4>Example Inc.</h4>
        <p>Lorem ipsum dolor sit amet,consectetur adipisicing elit.</p>
        <p>Praesent diam lacus, dapibus sed imperdiet consectetur.</p>

        <ul>
            <li v-for="item in store.contacts">
                <span>
                    <font-awesome-icon :icon="item.icon"/>
                </span>

                {{ item.name }}
            </li>
        </ul>

        <div class="button white">
            VIEW MAP
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;

    section {
        h4 {
            color: #21333e;
            margin-bottom: 1rem;
            font-size: 20px;
        }

        p {
            color: #6f7b88;
            margin-bottom: 1.5rem;
            font-weight: 300;
        }

        li {
            margin-bottom: 2rem;
            color: $primary-color;
            font-weight: 300;

            span {
                background-color: rgba($logo-bg, .3);
                border-radius: 50%;
                padding: .4rem .5rem;
                margin-right: 1rem;
            }
        }

        .button.white {
            width: fit-content;
            background-color: $bg-white;
            border: 1px solid $primary-color;
            color: $primary-color;
            transition: .4s;
            
            &:hover {
                border-color: $logo-bg;
                background-color: $logo-bg;
                color: $bg-white;
            }
        }
    }

</style>