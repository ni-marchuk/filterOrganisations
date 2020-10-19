<template>
    <div class="customCheckbox">
        <label class="customCheckbox__label"
               :for="forId">{{title}}</label>
        <input class="customCheckbox__input"
               @change="check"
               v-model="checked"
               type="checkbox"
               :id="forId"/>

    </div>
</template>

<script>
    export default {
        name: "customCheckbox",

        props: {

            title: {
                required: true,
                type: String,
            },

            forId: {
                required: true,
                type: String,
            }

        },

        data() {
            return {
                checked: false,
            }
        },

        methods: {
            check() {
                this.$emit('isChecked', this.checked);
            }
        }

    }
</script>

<style lang="scss">
    .customCheckbox {
        display: flex;
        align-items: center;

        &__label {
            margin-right: 5px;
            cursor: pointer;
        }

        &__input {
            width: auto;
        }

    }
</style>