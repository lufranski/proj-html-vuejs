<script>
    import {store} from '../store.js';

    export default{
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="contactbar">
        <div class="container">
            <div class="open-hours">
                <p>
                    <font-awesome-icon icon="fa-clock" />

                    Open Hours: Mon - Sat - 9.00 - 18.00
                </p>
            </div>
            
            <div class="contacts">
                <ul>
                    
                    <li v-for="item in store.contacts.slice(0, 2)">
                       <font-awesome-icon :icon="item.icon" />  
                        {{ item.name }}
                    </li>
                    <li v-for="item in store.brands">
                        <font-awesome-icon :icon="item.icon" />
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_mixins.scss' as *;
    @use '../styles/partials/_variables.scss' as *;

    .contactbar {
        background-color: $contacts-tp-bg;
        padding: .5rem 0;
        font-size: 13px;
        

        .container {
            display: flex;
            justify-content: space-between;
            color: $pumice-text;
            width: 55%;

            .contacts {
                ul {
                    display: flex;
                    gap: 2rem;
                }
            }
        }
    }

</style>