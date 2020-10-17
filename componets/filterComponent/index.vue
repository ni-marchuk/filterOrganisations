<template>
    <div class="filteComponent">
        <p class="filteComponent__title">Выберите параметр фильтра</p>
        <div class="filteComponent__inner">
            <select class="filteComponent__select" v-model="filterItemIndex">
                <option class="filteComponent__selectOption default"
                        :value="0">Исходное состояние
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

        padding: 20px 0;

        &__title {
            padding-bottom: 10px;
        }

        &__inner {
            display: flex;
        }

        &__apply {

            padding: 5px;

            border: none;
            color: white;
            background: #347c99;

        }
    }
</style>