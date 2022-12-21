<script>

    export default {
        props: {
            item: Object
        },
        data(){
            return{
                // store
            }
        }
    }
</script>

<template>
    <div class="card">
        <h4>{{ item.title }}</h4>

        <ul>
            <li v-for="link in item.subLink">
                <a href="#">
                    <font-awesome-icon :icon="item.icon" /> 
                    
                    <span>
                        {{ link }}
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;

    .card {
        min-width: 23%;
        padding: 1rem 3rem;
        background-color: rgba(#1d2023, .4);
        border-radius: 10px;

        h4 {
            color: $bg-white;
            font-size: 18px;
            margin-bottom: 2rem;
        }

        li {
            margin-bottom: .5rem;

            a {
                color: $pumice-text;
                font-size: 15px;
                
                span {
                    margin-left: .5rem;
                }

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>