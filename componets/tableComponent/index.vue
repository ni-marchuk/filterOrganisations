<template>
    <div class="tableComponent">
        <table class="tableComponent__table">
            <thead>
            <tr>
                <th v-for="head in headers">{{head}}</th>
            </tr>
            </thead>
            <tbody v-if="data.length > 0">
            <tr v-for="(item,index) in data">
                <td v-for="subItem in item">{{subItem}}</td>
            </tr>
            </tbody>
            <tbody v-else
                   class="tableComponent__tbody message">
            <tr>
                <td>Данные отсутствуют</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: "TableComponent",

        props: {

            headers: {
                type: Array,
                required: true,
            },

            data: {
                type: Array,
                required: true,
            }

        },
    }
</script>

<style lang="scss">
    .tableComponent {
        display: flex;

        &__tbody.message {
            padding-left: 5px;
            padding-right: 25px;
        }

        table {
            width: 100%;

            thead, tbody, tr {
                display: table;
                width: 100%;
                table-layout: fixed;
            }

            thead {
                tr {
                    background: none !important;
                    padding: 0 20px 0 0 !important;
                    word-wrap: break-word;
                }
            }

            tbody {
                display: block;
                overflow: auto;
                table-layout: fixed;
                max-height: 500px;
            }

            th {
                padding: 5px 10px;
                color: white;
                background: #347c99;
                border: 1px solid black;
            }

            tr {
                &:nth-child(odd) {
                    padding: 15px 0;
                    color: white;
                    background: #7F828B;
                }
            }

            td {
                vertical-align: top;
                text-align: center;
            }
        }
    }
</style>