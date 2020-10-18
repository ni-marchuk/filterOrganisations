<template>
    <div class="filteComponent">
        <p class="filteComponent__title">Выберите параметр фильтра</p>
        <div class="filteComponent__inner">
            <select class="filteComponent__select" v-model="filterItemIndex">
                <option class="filteComponent__selectOption default"
                        :value="0">Сбросить фильтр
                </option>
                <option v-for="(option,index) in filterOptions"
                        class="filteComponent__selectOption" :value="index + 1">{{option}}
                </option>
            </select>
            <input class="filteComponent__input"
                   v-model="filterData"
                   type="text"/>
            <button class="filteComponent__apply" @click="filter()">Применить</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FilterComponent",

        props: {
            filterOptions: {
                type: Array,
                required: true,
            }
        },

        data() {
            return {
                filterItemIndex: 0,
                filterData: '',
            }
        },

        methods: {

            filter() {
                this.$emit('applyFilter', this.filterItemIndex, this.filterData);
            }

        },
    }
</script>

<style lang="scss">
    .filteComponent {
        display: flex;
        flex-direction: column;

        &__title {
            padding-bottom: 10px;

            font-weight: bold;
            color: #347c99;
        }

        &__inner {
            display: flex;
        }

        &__selectOption.default {
            background: #f1f1f1;
        }

        &__input {
            margin: 0 10px;
        }

        &__apply {
            padding: 10px 15px;

            border: none;
            border-radius: 5px;
            color: white;
            background: #347c99;

        }

    }
</style>