<script>
    export default{
        props: {
            item: Object
        }
    }
</script>

<template>
    <div class="card">
        <img :src="item.bg" alt="">

        <p>
            {{ item.par }}
        </p>

        <div>
            <font-awesome-icon icon="fa-solid fa-arrow-right"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;

    .card {
        width: calc((100% / 3) - 2rem);
        position: relative;

        &:hover div {
            display: block;
        }

        img {
            border-radius: 10px;
            filter: brightness(.4);
        }

        p {
            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translate(-50%);
            color: $bg-white;
            font-size: 24px;
            width: 90%;
            font-weight: 800;
            padding: 0 1rem;
        }

        div {
            position: absolute;
            top: 5%;
            right: 5%;
            font-size: 30px;
            color: $bg-white;
            display: none;


        }
    }
</style>