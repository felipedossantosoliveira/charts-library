<script setup>
import MultiLineChartExample from './examples/MultiLineChartExample.vue';
import {computed, ref} from "vue";

const theme = ref('dark')

function switchTheme(){
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

const backgroundColor = computed(() => {
  return theme.value === 'dark' ? '#18181b' : '#fff'
})

</script>

<template>
  <div class="body" :style="{'--color': backgroundColor}">
  <MultiLineChartExample/>


  <button class="button" @click="switchTheme()">
    toggle
  </button>
  </div>

</template>
<style>

.button {
  margin-top: 100px;
}

.body {
  width: 100vw ;
  height: 100vw ;
  margin-left: -7px;
  margin-top: -8px;
  background-color: var(--color);
}

</style>
