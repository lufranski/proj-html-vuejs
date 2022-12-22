<script>
    import {store} from '../store.js';
    import APCard from './APCard.vue';

    export default {
        components: { APCard },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <section>
        <!-- Section Title -->
        <h5>WE DO MORE FOR EVERYONE</h5>
        
        <h3>Actions & <span>Projects</span></h3>

        <!-- Nav ul -->
        <ul>
            <li v-for="string in store.actionsProjects.list">
                {{ string }}
            </li>
        </ul>

        <div class="card-container">

            <APCard v-for="item in store.actionsProjects.cards" :item="item"/>
        
        </div>


    </section>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;

    section {
        text-align: center;
        padding: 6rem;

        h5 {
           color: $primary-color;
            margin-bottom: 2rem;
        }
            
        h3 {
            color: $contacts-tp-bg;
            font-size: 53px;
            margin-bottom: 3rem;

            span {
                background-color: rgba($logo-bg, .3);
                padding: .5rem;
                border-radius: 5px;
                color: $primary-color;
            }
        }

        ul {
            display: flex;
            gap: 3rem;
            width: 75%;
            margin: 2rem auto;

            li {
                color: #6f7b88;
                padding: .5rem;
                cursor: pointer;

                &:hover{
                    background-color: rgba($logo-bg, .3);
                    border-radius: 2px;
                    color: $contacts-tp-bg;
                }
            }
        }

        .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            width: 80%;
            margin: 0 auto;
        }
    }
</style>