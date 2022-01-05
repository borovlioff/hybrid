<script lang="ts">
    export let data: (number|string) [][] = [[],[],[]];
</script>

<h2>Svelte</h2>
<table>
    <tbody>
        {#each data as row, rowIndex}
        <tr>
            {#each row as cell, columnIndex }
                <td>{cell}</td>
            {/each}
        </tr>
        {/each}
    </tbody>
</table>