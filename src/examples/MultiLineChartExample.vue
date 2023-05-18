<script setup>
import { reactive } from 'vue';
import MultiLineChart from '../components/MultiLineChart.vue';

const keys = reactive([
  { value: 'Jan'},
  { value: 'Fev'},
  { value: 'Mar'},
  { value: 'Abr'},
  { value: 'Mai'},
  { value: 'Jun'},
  { value: 'Jul'},
  { value: 'Ago'},
  { value: 'Set'},
  { value: 'Out'},
  { value: 'Nov'},
  { value: 'Dez'},
])

const multiItems= reactive([
  {
    label: '2019',
    data: [
      { value: 1093 },
      { value: 1068 },
      { value: 1127 },
      { value: 1072 },
      { value: 1105 },
      { value: 1100 },
      { value: 1138 },
      { value: 1074 },
      { value: 1051 },
      { value: 1086 },
      { value: 1129 },
      { value: 1120 },
    ],
    color: 'emerald',
    checked: true,
  },
  {
    label: '2020',
    data: [
      { value: 1367 },
      { value: 1059 },
      { value: 1477 },
      { value: 1229 },
      { value: 1332 },
      { value: 1058 },
      { value: 1123 },
      { value: 1232 },
      { value: 1383 },
      { value: 1379 },
      { value: 1129 },
      { value: 1241 }
    ],
    color: 'pink',
    checked: true,
  },
  {
    label: '2021',
    data: [
      { value: 1321 },
      { value: 1276 },
      { value: 1034 },
      { value: 1423 },
      { value: 1256 },
      { value: 1184 },
      { value: 1387 },
      { value: 1007 },
      { value: 1049 },
      { value: 1162 },
      { value: 1114 },
      { value: 1268 }
    ],
    color: 'indigo',
    checked: true,
  },
  {
    label: '2022',
    data: [
      { value: 1345 },
      { value: 1198 },
      { value: 1023 },
      { value: 1077 },
      { value: 1379 },
      { value: 1306 },
      { value: 1465 },
      { value: 1440 },
      { value: 1101 },
      { value: 1264 },
      { value: 1397 },
      { value: 1236 }
    ],
    color: 'orange',
    checked: true,
  },
])


</script>

<template>
  <MultiLineChart :keys="keys" :data="multiItems" color="green" theme="dark" />
</template>
