import TableSvelte from "./component/Table.svelte";
import { createApp } from "vue";
import TableVue from './component/Table.vue';
import ReactDOM from 'react-dom';
import TableReact from "./component/Table.jsx"

let  items = [[0,0,12,25],[23,23,13,16],[19,91,73,-5]]

ReactDOM.render(TableReact({data: items}), document.querySelector(`[data-type="table-react"]`))

let vueApp = createApp(TableVue, {
    data:items,
}).mount(`[data-type="table-vue"]`);

new TableSvelte({
    target: document.querySelector(`[data-type="table-svelte"]`) as Element,
    props: {data:items}
})