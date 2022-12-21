<script>
    import {store} from '../store.js';

    export default {
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="container">
        <!-- LOGO -->
        <div class="logo">
            <span id="next">NEX</span>

            <span id="gen">GEN</span>
        </div>

        <!-- MENU -->
        <nav>
            <ul>
                <li v-for="item in store.navLinks">
                    <a href="#">
                        {{ item }}
                    </a>
                </li>
            </ul>

            <div class="button">GET IN TOUCH</div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_mixins.scss' as *;
    @use '../styles/partials/_variables.scss' as *;

    .container {
        width: 50%;
        display: flex;
        @include center (vertical);
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        
        .logo {
            font-weight: 900;
    
            #next {
                border-radius: 20px 0 0 20px;
                background-color: rgba($logo-bg, .5);
                color: $primary-color;
                padding: .5rem .2rem .5rem 1rem;
            }
        
            #gen {
                color: $bg-dark;
            }
        }
    
        nav {
            display: flex;
            
    
            ul {
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            .button {
                margin-left: 1rem;
                transition: .4s;

                &:hover {
                    border-color: $logo-bg;
                    background-color: $logo-bg;
                    color: $bg-white;
                }
            }
        }
    }


</style>