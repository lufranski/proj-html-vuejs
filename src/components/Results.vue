<script>
    import {store} from '../store.js';
    import ResultsListItem from './ResultsListItem.vue';

    export default {
        components: { ResultsListItem },
        data() {
            return {
                store
            };
        },
    }
</script>

<template>
    <section>
        <div class="results">
            <!-- Section Title -->
            <h5>WHAT ARE WE DOING</h5>
        
            <h3><span>Results</span> in Numbers</h3>

            <!-- Main content -->
            <ul>
                <ResultsListItem  v-for="item in store.results" :item="item"/>
            </ul>
        </div>
        
        <div class="partners"></div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;

    section {
        width: 100%;
        
        .results {
            background-image: url('../assets/consultant/images/bg-7.jpg');
            overflow-y: hidden;
            background-position: center;
            text-align: center;
            // DEBUG
            height: 600px;

            h5 {
                color: $primary-color;
                margin-bottom: 2rem;
                margin-top: 10rem;
            }
            
            h3 {
                color: $bg-white;
                font-size: 53px;
                margin-bottom: 6rem;

                
                span {
                    background-color: rgba($logo-bg, .15);
                    padding: .5rem;
                    border-radius: 5px;
                }
                
            }

            ul {
                display: flex;
                gap: 5rem;
                width: 55%;
                margin: 0 auto;

                
            }

        }
        
        .partners {
            background-color: $bg-dark;
            // DEBUG
            height: 200px;
        }
    }
</style>