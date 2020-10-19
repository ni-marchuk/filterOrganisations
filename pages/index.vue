<template>
    <div class="container">
        <div class="main" v-if="headers && organisations">
            <filterComponent class="main__filter"
                             :filterOptions='Object.values(headers)'
                             @applyFilter="applyFilter"/>
            <tableComponent class="main__table"
                            :headers='Object.values(headers)'
                            :data='organisations'/>
        </div>
    </div>
</template>

<script>
    import FilterComponent from '../componets/filterComponent/index'
    import TableComponent from '../componets/tableComponent/index'

    export default {
        name: 'Index',
        components: {
            FilterComponent,
            TableComponent,
        },

        async asyncData({app, route, store}) {

            //Дублируется структура из store.

            let headers = {
                id: 'Идентификационный номер',
                headName: 'Федеральный орган',
                title: 'Наименование организации',
                budgetLvl: 'Уровень бюджета',
                inn: 'ИНН',
                kpp: 'КПП',
                egrulStatus: 'Статус',
            };

            await store.dispatch('getOrganisations');
            await store.commit('RENDER_ORGANISATIONS');

            return {headers}
        },

        computed: {
            organisations() {
                return this.$store.getters.RENDER_ORGANISATIONS;
            }
        },

        methods: {
            applyFilter(filterIndexItem, filterData, isStrict) {
                this.$store.dispatch('resetFilter');
                if (filterIndexItem > 0) {
                    const filterName = String(Object.keys(this.headers)[Number(filterIndexItem) - 1]);
                    let filteredOrganisations;
                    if (isStrict) {
                        filteredOrganisations = this.$store.getters.RENDER_ORGANISATIONS.filter(x => String(x[filterName]) === String(filterData));
                    } else {
                        const regexp = new RegExp(filterData, 'i');
                        filteredOrganisations = this.$store.getters.RENDER_ORGANISATIONS.filter(x => regexp.test(x[filterName]));
                    }
                    this.$store.commit('RENDER_ORGANISATIONS', filteredOrganisations);
                }
            }
        },

    }

</script>

<style lang="scss">
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    .main {
        display: flex;
        flex-direction: column;

        &__filter {
            padding: 0 25px 20px 5px;
        }

        &__table {
            -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.44);
            -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.44);
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.44);
        }
    }
</style>
