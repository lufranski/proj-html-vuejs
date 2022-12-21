<script>
    export default {

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
                <li>HOME</li>
                <li>SERVICES</li>
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>RESULTS</li>
            </ul>

            <div class="button">GET IN TOUCH</div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_mixins.scss' as *;
    @use '../styles/partials/_variables.scss' as *;

    .container {
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
                padding: .5rem;
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
                background-color: $primary-color;
                color: $bg-white;
                padding: .5rem 1rem;
                border-radius: 5px;
            }
        }
    }


</style>