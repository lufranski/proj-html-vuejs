<script>
    import {store} from '../store.js';
    import BACard from './BACard.vue';

    export default {
        components: { BACard },
        data() {
            return {
                store
            };
        },
    }
</script>

<template>
    <!-- Section con cards - Business Areas -->
    <section>
        <div class="container">
            <!-- Section Title -->
            <h5>OUR BUSINESS AREAS</h5>
            <h3>Excellence in <span>Services</span> </h3>

            <!-- Paragraph and button -->
            <div class="parbut">
                <p>
                    We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals. These are some options that you can hire
                </p>

                <div class="button">
                    SEE ALL
                </div>
            </div>

            <div class="cardcontainer">

                <BACard v-for="item in store.businessAreas" :item="item" />
            
            </div>

        </div>
        
        <div class="bullet">
            <img src="../assets/consultant/images/bullets.png" alt="">
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;

    section {
        background-color: #eef4ed;
        padding: 3rem;
        position: relative;

        .container {
            width: 60%;
            margin-top: 5rem;
            margin-bottom: 5rem;

            h5 {
                color: $primary-color;
            }

            h3 {
                color: #21333e;
                font-size: 50px;
                margin-bottom: 1rem;

                span {
                    background-color: rgba($logo-bg, .3);
                    color: $primary-color;
                    padding: .5rem;
                    border-radius: 5px;
                }
            }
            .parbut {
                display: flex;
                justify-content: space-between;
                margin-bottom: 2rem;

                p {
                    color: #7e8da1;
                    width: 80%;
                }

                .button {
                    transition: .4s;

                    &:hover {
                        border-color: $logo-bg;
                        background-color: $logo-bg;
                        color: $bg-white;
                    }
                }
            }

            .cardcontainer {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
            }

        }

        .bullet{
            width: 150px;
            height: 60px;
            object-fit: cover;
            position: absolute;
            bottom: -30px;
            left: 50%;
            transform: translate(-50%);
            z-index: 200;
            overflow-y: hidden;

            img {
                width: 100%;
                filter:opacity(.3);
            }
        }
    }

</style>