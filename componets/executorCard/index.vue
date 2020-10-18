<template>
    <div class="executorCard">
        <div class="executorCard__wrapper">
            <div class="executorCard__inner">
                <h2 class="executorCard__title">Информация о исполнителе</h2>
                <p class="executorCard__name">ФИО: {{executorInfo.name}}</p>
                <p class="executorCard__position">Должность: {{executorInfo.position}}</p>
                <p class="executorCard__task">Поставленная задача: {{executorInfo.task}}</p>
            </div>
            <img class="executorCard__photo"
                 :src="executorInfo.img"
                 alt="executorPhoto"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ExecutorCard",
        props: {
            executorInfo: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style lang="scss">
    .executorCard {
        width: 100%;

        padding: 25px;

        border-radius: 5px;
        background: #347c99;

        &__wrapper {
            display: flex;
        }

        &__title {
            color: white;
        }

        &__inner {
            display: flex;
            flex-direction: column;

            margin-right: 25px;

            p {
                color: white;
                margin-bottom: 15px;
            }
        }

        &__photo {
            max-width: 250px;
            object-fit: contain;
        }
    }
</style>