<script>
    export default {

    }
</script>

<template>
    <div class="container hero">

        <div class="hero-label">
            <h2>
                Ready <span class="mark">Team</span>
            </h2>

            <p>
                No matter what your company needs, we will be ready to assist you in the best possible way.
            </p>

            <div class="buttons">

                <div class="button">
                    GET IN TOUCH
                </div>

                <div class="button white">
                    READ MORE
                </div>

            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_mixins.scss' as *;
    @use '../styles/partials/_variables.scss' as *;

    .hero {
        position: relative;
        height: 600px;

        img {
            width: 100%;
            object-fit: cover;
        }

        .hero-label {
            width: 40%;
            position: absolute;
            bottom: 40%;
            left: 50%;
            transform: translate(-50%);
            color: $contacts-tp-bg;
            font-size: 16px;
            text-align: center;
            
            h2 {
                font-size: 75px;
                font-weight: 900;            
            
                .mark {
                    background-color: rgba($logo-bg, .5);
                    color: $primary-color;
                    padding: .5rem;
                    border-radius: 5px;
                }
            }

            p {
                width: 90%;
                margin: 30px auto;
                color: $pumice-text;
                font-weight: 600;
            
            }

            .buttons {
                @include center (vertical);
                gap: 1rem;

                .white {
                    background-color: $bg-white;
                    border: 1px solid $primary-color;
                    color: $primary-color;
                   
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

        }
    }

</style>