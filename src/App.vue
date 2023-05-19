<script setup>
import MultiLineChartExample from "./examples/MultiLineChartExample.vue";
import { computed, ref } from "vue";
import LineChartExample from "./examples/LineChartExample.vue";
import BarsChartExample from "./examples/BarsChartExample.vue";

const theme = ref("dark");

function switchTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
}

const backgroundColor = computed(() => {
  return theme.value === "dark" ? "#0f172a" : "#fff";
});
</script>

<template>
  <div class="body" :style="{ '--color': backgroundColor }">
    <button class="button" @click="switchTheme()">toggle</button>
    <BarsChartExample />
    <div
      style="
         {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
      "
    >
      <div :style="{
        display: 'flex',
      }">
      <div
        :style="{
          width: '50%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }"
      >
        <MultiLineChartExample />
      </div>
      <div
        :style="{
          width: '50%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }"
      >
        <LineChartExample />
      </div>
      </div>
    </div>
  </div>
</template>
<style>
.button {
  margin-bottom: 100px;
  border: 0;
  background-color: bisque;
  cursor: pointer;
}

.body {
  width: 100vw;
  height: 5000px;
  margin-left: -7px;
  margin-top: -8px;
  background-color: var(--color);
}
</style>
