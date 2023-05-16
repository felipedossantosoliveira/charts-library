<script setup>
import { reactive } from 'vue';
import MultiLineChart from '../components/MultiLineChart.vue';

const items = reactive([
  { value: 1093, key: 'Jan'},
  { value: 1068, key: 'Fev'},
  { value: 1127, key: 'Mar'},
  { value: 1072, key: 'Abr'},
  { value: 1105, key: 'Mai'},
  { value: 1100, key: 'Jun'},
  { value: 1138, key: 'Jul'},
  { value: 1074, key: 'Ago'},
  { value: 1051, key: 'Set'},
  { value: 1086, key: 'Out'},
  { value: 1129, key: 'Nov'},
  { value: 1120, key: 'Dez'},
]);
</script>

<template>
  <MultiLineChart :data="items" color="green" />
</template>
