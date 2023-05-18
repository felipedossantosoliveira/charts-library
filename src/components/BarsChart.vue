<script setup>
import { ref, computed } from "vue";

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
  },
  minWidth: {
    type: String,
    required: false,
    default: null,
  },
});

function colorHex(color) {
  switch (color) {
    case "amber":
      return {
        op200: "#fde68a",
        op300: "#fcd34d",
        op500: "#f59e0b",
      };
    case "blue":
      return {
        op200: "#bfdbff",
        op300: "#93c5fd",
        op500: "#3b82f6",
      };
    case "cyan":
      return {
        op200: "#a5f3fc",
        op300: "#67e8f9",
        op500: "#06b6d4",
      };
    case "emerald":
      return {
        op200: "#a7f3d0",
        op300: "#6ee7b7",
        op500: "#10b981",
      };
    case "fuchsia":
      return {
        op200: "#f5d0fe",
        op300: "#f0abfc",
        op500: "#d946ef",
      };
    case "gray":
      return {
        op200: "#e5e7eb",
        op300: "#d1d5db",
        op500: "#6b7280",
      };
    case "green":
      return {
        op200: "#bbf7d0",
        op300: "#86efac",
        op500: "#22c55e",
      };
    case "indigo":
      return {
        op200: "#c7d2fe",
        op300: "#a5b4fc",
        op500: "#6366f1",
      };
    case "lime":
      return {
        op200: "#d9f99d",
        op300: "#bee264",
        op500: "#84cc16",
      };
    case "neutral":
      return {
        op200: "#e5e5e5",
        op300: "#d4d4d4",
        op500: "#737373",
      };
    case "orange":
      return {
        op200: "#fed7aa",
        op300: "#fdba74",
        op500: "#f97316",
      };
    case "pink":
      return {
        op200: "#fbcfe8",
        op300: "#f9a8d4",
        op500: "#ec4899",
      };
    case "purple":
      return {
        op200: "#e9d5ff",
        op300: "#d8b4fe",
        op500: "#a855f7",
      };
    case "red":
      return {
        op200: "#fecaca",
        op300: "#fca5a5",
        op500: "#ef4444",
      };
    case "rose":
      return {
        op200: "#fecdd3",
        op300: "#fda4af",
        op500: "#f43f5e",
      };
    case "sky":
      return {
        op200: "#bae6fd",
        op300: "#7dd3fc",
        op500: "#0ea5e9",
      };
    case "slate":
      return {
        op200: "#e2e8f0",
        op300: "#cbd5e1",
        op500: "#64748b",
      };
    case "stone":
      return {
        op200: "#e7e5e4",
        op300: "#d6d3d1",
        op500: "#78716c",
      };
    case "teal":
      return {
        op200: "#99f6e4",
        op300: "#5eead4",
        op500: "#14b8a6",
      };
    case "violet":
      return {
        op200: "#ddd6fe",
        op300: "#c4b5fd",
        op500: "#8b5cf6",
      };
    case "yellow":
      return {
        op200: "#fef08a",
        op300: "#fde047",
        op500: "#e6b308",
      };
    case "zinc":
      return {
        op200: "#e4e4e7",
        op300: "#d4d4d8",
        op500: "#717179",
      };
    default:
      return {
        op200: "#fed7aa",
        op300: "#fdba74",
        op500: "#f97316",
      };
  }
}

const maxItems = computed(() => {
  let values = [];
  props.data.forEach((item) => {
    values.push(Math.max(...item.data.map((item) => item.value)));
  });
  return Math.max(...values);
});

const minItems = computed(() => {
  let values = [];
  props.data.forEach((item) => {
    values.push(Math.min(...item.data.map((item) => item.value)));
  });
  return Math.min(...values);
});

function calculatePercentage(value) {
  let val = value - minItems.value;
  let max = maxItems.value - minItems.value;
  let result = ((val * 100) / max) * 0.9 + 10;
  return result.toFixed(2);
}
</script>
<template>
  <div class="all" >
    <div class="container" :style="minWidth != null ? 'min-width:' + minWidth : ''">
      <div
        class="interval-container"
        :style="props.theme === 'dark' ? 'color: #fff' : 'color: #000'"
      >
        <div>
          {{ maxItems }}
        </div>
        <div v-for="interval in 3">121134</div>
        <div>
          {{ minItems }}
        </div>
        <div>0</div>
      </div>
      <div class="chart-container">
        <div class="lines-container">
          <div class="line-container">
            <div class="line-container-setup">
              <div
                class="line first-line"
                :style="{
                  'grid-template-columns': 'repeat(' + keys.length + ', 1fr)',
                }"
              >
                <div
                  class="vertical-line"
                  v-for="(verticalLine, index) in keys"
                ></div>
              </div>
              <div
                class="line"
                v-for="line in 4"
                :style="{
                  'grid-template-columns': 'repeat(' + keys.length + ', 1fr)',
                }"
              >
                <div
                  class="vertical-line"
                  v-for="(verticalLine, index) in keys"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="bars-container">
          <div class="bar-container" v-for="(box, index) in keys" :key="index">
            <div class="bar-container-top">
              <div
                class="bar-top"
                v-for="bar in data"
                :style="{
                  'background-color': colorHex(bar.color).op500,
                  height: calculatePercentage(bar.data[index].value) + '%',
                }"
              >

              </div>
            </div>
          </div>
        </div>
        <div class="keys-container">
          <div
            v-for="(key, index) in keys"
            :key="index"
            class="key-container"
            :style="props.theme === 'dark' ? 'color: #fff' : 'color: #000'"
          >
            {{ key.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="items-check-container">
      <div v-for="(item, index) in props.data" :key="index">
        <button
            @click="item.checked = !item.checked"
            :style="{'border-left-color':  colorHex(item.color).op500, 'color': (props.theme === 'dark' ? '#ffffff' : '#000000')}"
            class="checked"
        >
          <div class="checkbox" :style="{'background-color': (props.theme === 'dark' ? '#cccccc20' : '#cccccc90')}">
            <svg
                v-if="item.checked"
                width="15px"
                height="15px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          {{ item.label }}
        </button>
      </div>
    </div>
</template>
<style scoped>

.all {
  width: 100%;
  height: 500px;
  overflow: scroll;
}

.container {
  height: 100%;
  display: flex;
}

.chart-container {
  width: 100%;
  padding: 10px;
}

.bars-container {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
}

.bar-container {
  margin: 0 8px;
  display: flex;
  align-items: end;
  width: 100%;
  height: 100%;
}

.bar-container-top {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  animation: fade-in 0.5s ease-in-out;
}

.bar-top {
  z-index: 2;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.keys-container {
  width: 100%;
  height: 10%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.key-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  margin: 0 5px;
}

@keyframes fade-in {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}

.interval-container {
  width: 8%;
  height: 100%;
  display: grid;
  font-size: 12px;
  text-align: right;
}

.lines-container {
  position: relative;
  z-index: 1;
}

.line-container {
  position: absolute;
  width: 100%;
  height: 432px;
}

.line {
  width: 100%;
  border-bottom: #737373 1px solid;
  border-right: 1px dashed #737373;
  display: grid;
}

.first-line {
  border-top: #737373 1px solid;
}

.line-container-setup {
  height: 100%;
  display: grid;
  opacity: 0.5;
}

.vertical-line {
  border-left: 1px dashed #737373;
}

.items-check-container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
}

.checked {
  display: flex;
  align-items: center;
  border: 0;
  border-left: 5px solid;
  background-color: transparent;
  font-size: 13pt;
  padding: 4px 10px 4px 10px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .checked {
    font-size: 10pt;
  }
}

.checkbox {
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 2px 1px 2px 3px;
  margin-right: 7px;
  width: 17px;
  height: 17px;
  border-radius: 4px;
}

</style>
