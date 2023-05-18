<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  keys: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: false,
  },
  theme: {
    type: String,
    required: false,
    default: "light",
  }
})
</script>
<template>
  <div class="container">
    <div class="chart-container">
      <div class="horizontal-lines">
        <svg v-for="line in 5" :key="line">
          <line x1="0" y1="0" x2="100%" y2="0" stroke="black" stroke-width="1.5" />
        </svg>
      </div>
    </div>
  </div>
</template>
<style scoped>

.container {
  width: 100%;
  height: 300px;
  background-color: darkgray;
  display: flex;
}

.chart-container {
  width: 100%;
  padding: 10px;
}

.horizontal-lines {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lightgray;
}
</style>