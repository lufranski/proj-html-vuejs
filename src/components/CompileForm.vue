<script>
    export default{

    }
</script>

<template>
    
    <section>

        <!-- Section title -->
        <h5>SEND A MESSAGE</h5>
        <h3>Get in <span>Touch</span> </h3>
    
        <p>We will respond to your message as soon as possible.</p>
    
        <div class="form">
            <input class="input name" type="text" placeholder="Name">
            <input class="input mail" type="email" placeholder="Email">

            <input class="input tel" type="tel" placeholder="Phone">
            <input class="input info" type="text" placeholder="More info">

            <span>
                <font-awesome-icon icon="fa-solid fa-chevron-down"/>
            </span>

            <input class="input txtarea" type="text" placeholder="Message">

            <div class="button">SEND</div>
        
        </div>
    </section>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/_variables.scss' as *;

    section {

        width: 500px;

        h5 {
                 
            color: $primary-color;
            margin-bottom: 1rem;
            
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
    
        p {
            color: #6f7b88;
        }
    
        .form {
            width: 100%;
            margin-top: 1rem;
            position: relative;

            .input {
                cursor: pointer;
                width: 45%;
                padding: 10px;
                background-color: #ececec;
                border-radius: 3px;
                border: none;
                margin-bottom: 10px;
            }

            .input.name {
                background-image: url('../assets/consultant/images/image\ \(1\).png');
                background-position: 200px 10px;
                background-repeat: no-repeat;
                margin-right: 10px;
            }

            .input.tel {
                margin-right: 10px;
            }
            
            span {
                position: absolute;
                color: #6f7b88;
                right: 10%;
                top: 19%;
                cursor: pointer;
            }

            .input.txtarea {
                width: calc(90% + 10px);
                height: 150px;
                padding-bottom: 140px;
            }

            .button {
                width: fit-content;
                cursor: pointer;
                transition: .4s;

                &:hover {
                    background-color: $logo-bg;
                    border-color: $logo-bg;
                }
            }
        }
    }

</style>