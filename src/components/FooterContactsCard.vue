<script>
    import {store} from '../store.js';

    export default {
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="contacts">
        <div class="logo">
            <span id="next">NEX</span>

            <span id="gen">GEN</span>
        </div>

        <p>
            A functional HTML Template for Corporate & Business.
        </p>

        <ul>
            <li v-for="item in store.contacts">
                <font-awesome-icon :icon="item.icon" />
                {{ item.name }}
            </li>
        </ul>

        <div class="button dark">
            GET IN TOUCH
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;

    .contacts {
        color: $pumice-text;
        .logo {
            font-weight: 900;
            margin-bottom: 1rem;
        
            #next {
                border-radius: 20px 0 0 20px;
                background-color: rgba($primary-color , .2);
                color: #1c918e;
                padding: .5rem .2rem .5rem 1rem;
            }
            
        }

        p {
            margin-bottom: 1rem;
        }

        ul {
            margin-bottom: 3rem;

            li {
                margin-bottom: 1rem;
            }
        }

        .dark {
            background-color: #111117;
            border: 1px solid $primary-color;
            width:fit-content;
            transition: .4s;

            &:hover {
                background-color: $logo-bg;
                border-color: $logo-bg;
            }
        }
    }
</style>