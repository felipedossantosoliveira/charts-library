<script setup>
import { reactive, computed, onMounted, onUnmounted, ref } from "vue";
import "./style.css";

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

const x = ref(0);
const y = ref(0);

function update(event) {
  x.value = event.pageX;
  y.value = event.pageY;
}

onMounted(() => window.addEventListener("mousemove", update));
onUnmounted(() => window.removeEventListener("mousemove", update));

//Tooltip setup
function showTooltip(key, value, index, line) {
  show.value = true;
  show.data.key = key;
  show.data.value = value.toFixed(4);
  show.data.index = index;
  show.data.line = line;
}

function hideTooltip() {
  show.value = false;
  show.data.key = "";
  show.data.value = "";
  show.data.index = null;
  show.data.line = 1;
}

const show = reactive({
  value: false,
  data: {
    key: "",
    value: 0,
    index: null,
    line: 1,
  },
});

const items = props.data;

const itemsp = props.data;

//Chart setup
const maxItems = computed(() => {
  let values = [];
  itemsp.forEach((item) => {
    values.push(Math.max(...item.data.map((item) => item.value)));
  });
  return Math.max(...values);
});

const minItems = computed(() => {
  let values = [];
  itemsp.forEach((item) => {
    values.push(Math.min(...item.data.map((item) => item.value)));
  });
  return Math.min(...values);
});

function calculatePercentageInverted(value) {
  let val = value - minItems.value;
  let max = maxItems.value - minItems.value;
  let result = 100 - (val * 100) / max + 30;
  return result.toFixed(2);
}

const interval = computed(() => {
  return (maxItems.value - minItems.value) / 4;
});

const points = computed(() => {
  let points = [];
  for (let i = 0; i < items.length; i++) {
    points.push(i * 40 + 40);
    points.push(calculatePercentageInverted(items[i].value));
  }
  return points.join(" ");
});

const pointsp = computed(() => {
  let multiPoints = [];
  let points = [];
  itemsp.forEach((item) => {
    for (let i = 0; i < item.data.length; i++) {
      points.push(i * 40 + 40);
      points.push(calculatePercentageInverted(item.data[i].value));
    }
    multiPoints.push({ points: points.join(" "), color: colorHex(item.color) });
    points = [];
  });
  return multiPoints;
});
const pointsAnimate = computed(() => {
  let multiPoints = [];
  let points = [];
  itemsp.forEach((item) => {
    for (let i = 0; i < item.data.length; i++) {
      points.push(i * 40 + 40);
      points.push(80);
    }
    multiPoints.push({ points: points.join(" ") });
    points = [];
  });
  return multiPoints;
});

const pointsPolygonp = computed(() => {
  let multiPoints = [];
  let points = [40, 130];
  itemsp.forEach((item) => {
    for (let i = 0; i < item.data.length; i++) {
      points.push(i * 40 + 40);
      points.push(calculatePercentageInverted(item.data[i].value));
    }
    let final = item.data.length * 40;
    points.push(final, 130);
    multiPoints.push({ points: points.join(" "), color: colorHex(item.color) });
    points = [40, 130];
  });
  return multiPoints;
});

const pointsPolygonAnimate = computed(() => {
  let multiPoints = [];
  let points = [40, 130];
  itemsp.forEach((item) => {
    for (let i = 0; i < item.data.length; i++) {
      points.push(i * 40 + 40);
      points.push(80);
    }
    let final = item.data.length * 40;
    points.push(final, 130);
    multiPoints.push({ points: points.join(" ")});
    points = [40, 130];
  });
  return multiPoints;
});

const viewbox = computed(() => {
  return `0 0 ${itemsp[1].data.length * 40 + 30} 150`;
});

const horizontalLinesWidth = computed(() => {
  return itemsp[1].data.length * 40;
});
</script>
<template>
  <div>
    <svg class="svg" :viewBox="viewbox" xmlns="http://www.w3.org/2000/svg">
      <!--   Valores das divisões horizontais || Values of horizontal divisions   -->
      <text
        :style="'fill: ' + (props.theme === 'dark' ? '#ffffff' : '#000000')"
        x="35"
        y="30"
        text-anchor="end"
        class="horizontal_text"
      >
        {{ maxItems }}
      </text>
      <text
        :style="'fill: ' + (props.theme === 'dark' ? '#ffffff' : '#000000')"
        x="35"
        y="55"
        text-anchor="end"
        class="horizontal_text"
      >
        {{ (maxItems - interval).toFixed(0) }}
      </text>
      <text
        :style="'fill: ' + (props.theme === 'dark' ? '#ffffff' : '#000000')"
        x="35"
        y="80"
        text-anchor="end"
        class="horizontal_text"
      >
        {{ (maxItems - interval * 2).toFixed(0) }}
      </text>
      <text
        :style="'fill: ' + (props.theme === 'dark' ? '#ffffff' : '#000000')"
        x="35"
        y="105"
        text-anchor="end"
        class="horizontal_text"
      >
        {{ (maxItems - interval * 3).toFixed(0) }}
      </text>
      <text
        :style="'fill: ' + (props.theme === 'dark' ? '#ffffff' : '#000000')"
        x="35"
        y="130"
        text-anchor="end"
        class="horizontal_text"
      >
        {{ minItems }}
      </text>

      <!--   Linhas horizontais || Horizontal lines   -->
      <line
        class="line_color"
        x1="40"
        y1="30"
        :x2="horizontalLinesWidth"
        y2="30"
        stroke="currentColor"
        stroke-width="0.4"
      />
      <line
        class="line_color"
        x1="40"
        y1="55"
        :x2="horizontalLinesWidth"
        y2="55"
        stroke="currentColor"
        stroke-width="0.4"
      />
      <line
        class="line_color"
        x1="40"
        y1="80"
        :x2="horizontalLinesWidth"
        y2="80"
        stroke="currentColor"
        stroke-width="0.4"
      />
      <line
        class="line_color"
        x1="40"
        y1="105"
        :x2="horizontalLinesWidth"
        y2="105"
        stroke="currentColor"
        stroke-width="0.4"
      />
      <line
        class="line_color"
        x1="40"
        y1="130"
        :x2="horizontalLinesWidth"
        y2="130"
        stroke="currentColor"
        stroke-width="0.4"
      />

      <!--   Valores das divisões verticais || Values of vertical divisions   -->
      <text
        v-for="(key, index) in keys"
        :key="index"
        :x="index * 40 + 40"
        y="145"
        :style="'fill: ' + (props.theme === 'dark' ? '#ffffff' : '#000000')"
        text-anchor="middle"
      >
        {{ key.value }}
      </text>

      <!--   Linhas verticais || Vertical lines   -->
      <line
        v-for="(item, index) in itemsp[1].data"
        :key="index"
        :x1="index * 40 + 40"
        y1="30"
        :x2="index * 40 + 40"
        y2="130"
        stroke="currentColor"
        stroke-dasharray="2,5"
        class="line_color"
        stroke-width="0.5"
      />

      <!--   Linha do gráfico || Line of chart    -->
      <g v-for="(pointsPolygon, index) in pointsPolygonp">
        <polygon
          :key="index"
          v-if="itemsp[index].checked"
          :points="pointsPolygon.points"
          :style="'fill:' + pointsPolygon.color.op300"
          class="polygon"
          stroke="currentColor"
          stroke-width="0"
          stroke-linejoin="round"
        >
          <animate attributeName="points" dur="0.3s" repeatCount="1" :values="pointsPolygonAnimate[1].points + ';' + pointsPolygon.points" keyTimes="0; 1" />
        </polygon>
      </g>
      <g v-for="(points, index) in pointsp">
        <polyline
          :points="points.points"
          v-if="itemsp[index].checked"
          :style="'stroke:' + points.color.op500"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          fill="none"
          stroke-linejoin="round"
        >
          <animate attributeName="points" dur="0.3s" repeatCount="1" :values="pointsAnimate[1].points + ';' + points.points" keyTimes="0; 1" />
        </polyline>
      </g>

      <!--   Pontos do gráfico || Points of chart    -->
      <g v-for="(item, index) in itemsp" :key="index">
        <circle
          v-for="(point, index) in item.data"
          v-if="itemsp[index].checked"
          :style="'fill:' + colorHex(item.color).op500"
          :cx="index * 40 + 40"
          :cy="calculatePercentageInverted(point.value)"
          r="2.5"
          fill="currentColor"
        >
          <animate attributeName="cy" dur="0.3s" repeatCount="1" :values="'80' + ';' + calculatePercentageInverted(point.value)" keyTimes="0; 1" />
        </circle>
      </g>

      <g v-for="(item, index) in itemsp" :key="index">
        <circle
          v-if="itemsp[index].checked"
          v-for="(point, indexp) in item.data"
          :style="'fill:' + colorHex(item.color).op500"
          :key="indexp"
          :cx="indexp * 40 + 40"
          :cy="calculatePercentageInverted(point.value)"
          r="7"
          class="circle"
          @mouseenter="showTooltip(keys[indexp].value, point.value, indexp, index)"
          @mouseleave="hideTooltip"
        >
          <animate attributeName="cy" dur="0.3s" repeatCount="1" :values="'80' + ';' + calculatePercentageInverted(point.value)" keyTimes="0; 1" />
        </circle>
      </g>
    </svg>

<!--    Tooltip-->
    <div
      :style="{
        '--x':
          (show.data.index + 1 > itemsp[1].data.length / 2 ? x - 150 : x) +
          'px',
        '--y': y - 75 + 'px',
        '--color-200-20': colorHex(itemsp[show.data.line].color).op300 + '70',
        '--color': colorHex(itemsp[show.data.line].color).op500,
        'color': '#000'
      }"
      class="tooltip"
      v-show="show.value"
    >
      <div class="tooltip-atribute tooltip-key">
        {{ show.data.key }}
      </div>
      <div class="tooltip-atribute">
        {{ show.data.value }}
      </div>
    </div>
  </div>

<!--  Data selector-->
  <div class="items-check-container">
    <div v-for="(item, index) in itemsp" :key="index">
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
.tooltip {
  position: absolute;
  top: var(--y);
  left: var(--x);
  width: 150px;
  z-index: 100;
  overflow-y: hidden;
  border-radius: 0.5rem;
  background-color: var(--color-200-20);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.horizontal_text {
  font-size: 9pt;
}

.svg {
  color: var(--color);
}

.line_color {
  color: #a3a3a3;
}

svg text {
  fill: #000;
  font-size: 9pt;
}

.polygon {
  fill-opacity: 0.5;
}

.circle {
  fill-opacity: 0;
}

.circle:hover {
  fill-opacity: 0.2;
}

.tooltip-atribute {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-left-width: 8px;
  border-left-style: solid;
  border-color: var(--color);
  padding: 0.25rem 0.75rem;
}

.tooltip-key {
  border-bottom-width: 1px;
  border-bottom-style: solid;
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

.items-check-container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
}
</style>