<template>
    <div class="container">
        <div class="main" v-if="headers && organisations">
            <filterComponent :filterOptions='headers'
                             @applyFilter="applyFilter"/>
            <tableComponent :headers='headers'
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

            let headers = [
                'Идентификационный номер',
                'Федеральный орган',
                'Наименование организации',
                'Уровень бюджета',
                'ИНН',
                'КПП',
                'Статус',
            ];

            await store.dispatch('getOrganisations');

            const renderOrganisations = await store.getters.ORGANISATIONS.map((item, index) => ({
                id: item.id,
                headName: item.bk.head_name,
                title: item.title,
                budgetLvl: item.budget_level,
                inn: item.inn,
                kpp: item.kpp,
                egrulStatus: item.egrul_status,
            }));

            await store.commit('RENDER_ORGANISATIONS', renderOrganisations);

            return {headers}
        },

        computed: {
            organisations() {
                return this.$store.getters.RENDER_ORGANISATIONS;
            }
        },

        methods: {
            applyFilter(filterItem, filterData) {
                let y = 'id';
                let x = '55';
                const regexp = new RegExp(x, 'i');
                let filteredOrganisations = this.$store.getters.RENDER_ORGANISATIONS.filter(x => regexp.test(x[String(y)]));
                console.log(filteredOrganisations);
                this.$store.commit('RENDER_ORGANISATIONS', filteredOrganisations);
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
        align-items: center;
        text-align: center;
    }

    .main {
        display: flex;
        flex-direction: column;
    }
</style>
