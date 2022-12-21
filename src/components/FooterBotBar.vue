<script>
    export default{

    }
</script>

<template>
    <div class="darkbar">
        <p>
            Enjoy the low price. We are tracking any intention of piracy.
        </p>

        <p>
            &copy; 2020 NEXGEN is Proudly Powered by 
            <span>Codings</span>.
        </p>

        <div>
            <a href="#header">
                <font-awesome-icon icon="fa-solid fa-arrow-up" />
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;
    @use '../styles/partials/_mixins.scss' as *;

    .darkbar {
        width: 100%;
        background-color: #0d0d11;
        font-size: 13px;
        color: $pumice-text;
        padding: 1.5rem 14rem;
        display: flex;
        justify-content: space-between; 
        position: relative;       
        
        p {
            span {
                color: #1c918e;
            }
        }

        div {
            position: absolute;
            right: 20px;
            bottom: 10px;
            background-color: #1a1a1d;
            border-radius: 50%;
            padding: .5rem;
            
            a {
                color: $bg-dark;
                font-size: 20px;
            }
        }
    }
</style>