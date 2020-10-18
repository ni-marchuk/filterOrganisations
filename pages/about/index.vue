<template>
    <div class="about">
        <executor-card v-if="executorInfo"
                       :executorInfo="executorInfo"/>
    </div>
</template>

<script>
    import ExecutorCard from '../../componets/executorCard/index'

    export default {
        name: "About",

        components: {
            ExecutorCard,
        },

        async asyncData() {

            const executorInfo = {
                name: 'Марчук Никита Алексеевич',
                position: 'Frontend developer',
                task: 'Поставленная задача: Создать на главной странице таблицу данных Организации с системой фильтрации по каждому полю данной таблицы.',
                img: 'avatar.jpg'
            };

            return {executorInfo}
        }
    }
</script>

<style lang="scss">

</style>