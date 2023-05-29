<script setup>
import { reactive } from "vue";
import PieChart from "../components/PieChart.vue";

const values = reactive([
  { value: 1367, color: 'purple'},
  { value: 1059 , color: 'green'},
  { value: 7000 , color: 'brown'},
  { value: 1229 , color: 'orange'},
  { value: 2500 , color: 'blue'},
  { value: 1058 , color: 'yellow'},
  { value: 3500 , color: 'red'},
  { value: 1232 , color: 'pink'},
  { value: 1383 , color: 'gray'},
]);

</script>
<template>
  <PieChart :values="values"/>
</template>