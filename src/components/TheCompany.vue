<script>
    import {store} from '../store.js';
    import TCListItem from './TCListItem.vue';

    export default {
        components: { TCListItem },
        data() {
            return {
                store
            };
        },
    }
</script>

<template>
    <section>
        <div class="color">
            <!-- Section Title -->
            <h5>ABOUT THE NETWORK</h5>
            <h3><span>The</span> Company</h3>

            <!-- Paragraph -->
            <p>
                For 12 years we have been providing audit and warranty, financial advice, risk advice, taxes and related services to select clients.
            </p>

            <ul>
                <TCListItem v-for="item in store.theCompany" :item="item"/>
            </ul>

            <div class="buttons">
                <div class="button">GET IN TOUCH</div>

                <div class="button dark">READ MORE</div>
            </div>
            
        </div>

        <div class="image"></div>

        <img src="../assets/consultant/images/bullets.png" alt="">

    </section>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;

    section {
        display: flex;
        position: relative;

        .color {
            width: 50%;
            background-color: $bg-dark;
            padding: 10rem 4rem 10rem 10rem;

            h5 {
                color: $primary-color;
                margin-bottom: 2rem;
            }

            h3 {
                color: $bg-white;
                font-size: 53px;
                margin-bottom: 3rem;

                span {
                    background-color: rgba($logo-bg, .3);
                    padding: .5rem;
                    border-radius: 5px;
                }
            }

            p {
                color: $pumice-text;
                margin-bottom: 4rem;
                font-size: 20px;
            }

            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                margin-bottom: 4rem;
            }

            .buttons {
                display: flex;
                gap: 1rem;
                padding-left: 4rem;

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

                .button {
                    transition: .4s;

                    &:hover {
                        background-color: $logo-bg;
                        border-color: $logo-bg;
                    }
                }
            }

        }

        .image {
            flex-grow: 1;
            background-image: url('../assets/consultant/images/about-4.jpg');
        }

        img {
            width: 80px;
            position: absolute;
            bottom: -40px;
            left: 50%;
            transform: translate(-50%);
            filter:opacity(.3);
            z-index: 200;
        }
    }
</style>
