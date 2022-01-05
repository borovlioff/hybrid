<script lang="ts">

export default {
    props: {
        data:{
            default: ()=>{ [[], [], []] }
        }
    }
};

</script>

<template>
<div>
    <h2>Vue</h2>
    <table>
        <tbody>
            <tr v-for="row in data" :key="row" bind:data>
            <td v-for="column of row" :key="column">{{column}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>