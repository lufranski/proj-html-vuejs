<script>
    export default{

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
                    <li>
                        <font-awesome-icon icon="fa-solid fa-phone" />
                        +1 (305) 1234-5678
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-envelope" />
                        hello@example.com
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
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
            justify-content: space-evenly;
            color: $pumice-text;
            width: 60%;

            .contacts {
                ul {
                    display: flex;
                    gap: 2rem;
                }
            }
        }
    }

</style>