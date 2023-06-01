<script setup>
import { reactive } from "vue";
import PieChart from "../components/PieChart.vue";

const values = reactive([
  { value: 1367, key: 'purple'},
  { value: 1059 , key: 'green'},
  { value: 7000 , key: 'brown'},
  { value: 1229 , key: 'orange'},
  { value: 2500 , key: 'blue'},
  { value: 1058 , key: 'yellow'},
  { value: 3500 , key: 'red'},
  { value: 1232 , key: 'pink'},
  { value: 1383 , key: 'gray'},
  { value: 1367, key: 'purple'},
  { value: 1059 , key: 'green'},
  { value: 7000 , key: 'brown'},
  { value: 1229 , key: 'orange'},
  { value: 2500 , key: 'blue'},
  { value: 1058 , key: 'yellow'},
  { value: 3500 , key: 'red'},
  { value: 1232 , key: 'pink'},
  { value: 1383 , key: 'gray'},
]);

</script>
<template>
    <div class="container">
      <PieChart :values="values"/>
    </div>
</template>
<style scoped>
</style>