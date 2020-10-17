<template>
    <div class="tableComponent">
        <table class="tableComponent__table">
            <thead>
            <tr>
                <th v-for="head in headers">{{head}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in data">
                <td v-for="subItem in item">{{subItem}}</td>
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

        table {
            width: 100%;

            thead, tbody, tr {
                display: table;
                width: 100%;
                table-layout: fixed;
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