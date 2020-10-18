<template>
    <header class="header">
        <div class="header__wrapper">
            <ul class="header__menu">
                <li class="header__menuItem">
                    <nuxt-link :to="'/'">Home</nuxt-link>
                </li>
                <li class="header__menuItem">
                    <nuxt-link :to="'about'">About</nuxt-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>

    export default {
        name: "Header",

    }
</script>

<style lang="scss">
    .header {

        &__wrapper {

        }

        &__menu {
            display: flex;
            list-style: none;
            margin-bottom: 20px;
            background: #347c99;
        }

        &__menuItem {
            padding: 10px 30px;
            width: auto;

            text-align: center;

            &:hover {
                background: #327491;
            }

            a {
                font-size: 18px;
                text-decoration: none;
                color: white;
            }
        }

    }
</style>