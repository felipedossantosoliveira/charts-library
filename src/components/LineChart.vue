<script setup>
import {reactive, computed, onMounted, onUnmounted, ref} from "vue";

const props = defineProps({
  color: {
    type: String,
    required: false,
    default: 'red'
  }
})

const colorHex = computed(() => {
  switch (props.color){
    case 'amber':
      return {
        op200: '#fde68a',
        op300: '#fcd34d',
        op500: '#f59e0b',
      };
    case 'blue':
      return {
        op200: '#bfcbea',
        op300: '#93c5fd',
        op500: '#3b82f6',
      };
    case 'cyan':
      return {
        op200: '#a5f3fc',
        op300: '#67e8f9',
        op500: '#06b6d4',
      };
    case 'emerald':
      return {
        op200: '#a7f3d0',
        op300: '#6ee7b7',
        op500: '#10b981',
      };
    case 'fuchsia':
      return {
        op200: '#f5d0fe',
        op300: '#f0abfc',
        op500: '#d946ef',
      };
    case 'gray':
      return {
        op200: '#e5e7eb',
        op300: '#d1d5db',
        op500: '#6b7280',
      };
    case 'green':
      return {
        op200: '#bbf7d0',
        op300: '#86efac',
        op500: '#22c55e',
      };
    case 'indigo':
      return {
        op200: '#c7d2fe',
        op300: '#a5b4fc',
        op500: '#6366f1',
      };
    case 'lime':
      return {
        op200: '#d9f99d',
        op300: '#bee264',
        op500: '#84cc16',
      };
    case 'neutral':
      return {
        op200: '#e5e5e5',
        op300: '#d4d4d4',
        op500: '#737373',
      };
    case 'orange':
      return {
        op200: '#fed7aa',
        op300: '#fdba74',
        op500: '#f97316',
      };
    case 'pink':
      return {
        op200: '#fbcfe8',
        op300: '#f9a8d4',
        op500: '#ec4899',
      };
    case 'purple':
      return {
        op200: '#e9d5ff',
        op300: '#d8b4fe',
        op500: '#a855f7',
      };
    case 'red':
      return {
        op200: '#fecaca',
        op300: '#fca5a5',
        op500: '#ef4444',
      };
    case 'rose':
      return {
        op200: '#fecdd3',
        op300: '#fda4af',
        op500: '#f43f5e',
      };
    default:
      return {
        200: '#fed7aa',
        300: '#fdba74',
        500: '#f97316',
      };
  }
})

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))

//Tooltip setup
function showTooltip(key, value, index){
  show.value = true
  show.data.key = key
  show.data.value = value
  show.data.index = index
}

function hideTooltip(){
  show.value = false
  show.data.key = ''
  show.data.value = ''
  show.data.index = null
}

const show = reactive({
  value: false,
  data: {
    key: '',
    value: '',
    index: null
  }
})


const keys = reactive([
  { key: 'Jan'},
  { key: 'Fev'},
  { key: 'Mar'},
  { key: 'Abr'},
  { key: 'Mai'},
  { key: 'Jun'},
  { key: 'Jul'},
  { key: 'Ago'},
  { key: 'Set'},
  { key: 'Out'},
  { key: 'Nov'},
  { key: 'Dez'}
])

const orders = reactive([
  { value: 1093},
  { value: 1068},
  { value: 1127},
  { value: 1072},
  { value: 1105},
  { value: 1100},
  { value: 1138},
  { value: 1074},
  { value: 1051},
  { value: 1086},
  { value: 1129},
  { value: 1120},
]);

const darkmode = computed(() => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
})

//Chart setup
const maxOrders = computed(() => {
  return Math.max(...orders.map((order) => order.value));
});

const minOrders = computed(() => {
  return Math.min(...orders.map((order) => order.value));
});

function calculatePercentageInverted(value) {
  let val = value - minOrders.value;
  let max = maxOrders.value - minOrders.value;
  let result = (100 - ((val * 100) / max))+30;
  return result.toFixed(2);
}

const interval = computed(() => {
  return (maxOrders.value - minOrders.value) / 4;
});

const points = computed(() => {
  let points = []
  for (let i=0; i < orders.length; i++){
    points.push((i*40)+40);
    points.push(calculatePercentageInverted(orders[i].value))
  }
  return points.join(' ')
});

const pointsPolygon = computed(() => {
  let points = [40, 130]
  for (let i=0; i < orders.length; i++){
    points.push((i*40)+40);
    points.push(calculatePercentageInverted(orders[i].value))
  }
  let final = orders.length * 40
  points.push(final, 130);
  return points.join(' ')
});

const viewbox = computed(() => {
  return `0 0 ${orders.length * 40 + 30} 150`
});

const horizontalLinesWidth = computed(() => {
  return orders.length * 40
});
</script>
<template>
  <div :style="{
      '--color': colorHex.op500,
      '--color-200': colorHex.op200,
      '--color-300': colorHex.op300,
    }"
  >
    <svg
      class="svg"
      :viewBox="viewbox"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!--   Valores das divisões horizontais || Values of horizontal divisions   -->
      <text x="35" y="30" text-anchor="end" class="horizontal_text">
        {{ maxOrders }}
      </text>
      <text x="35" y="55" text-anchor="end" class="horizontal_text">
        {{ (maxOrders - interval).toFixed(0) }}
      </text>
      <text x="35" y="80" text-anchor="end" class="horizontal_text">
        {{ (maxOrders - interval * 2).toFixed(0) }}
      </text>
      <text x="35" y="105" text-anchor="end" class="horizontal_text">
        {{ (maxOrders - interval * 3).toFixed(0) }}
      </text>
      <text x="35" y="130" text-anchor="end" class="horizontal_text">
        {{ minOrders }}
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
        text-anchor="middle"
      >
        {{ key.key }}
      </text>

      <!--   Linhas verticais || Vertical lines   -->
      <line
        v-for="(order, index) in orders"
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
      <polygon
        :points="pointsPolygon"
        class="polygon"
        stroke="currentColor"
        stroke-width="0"
        stroke-linejoin="round"
      />
      <polyline
        :points="points"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        fill="none"
        stroke-linejoin="round"
      />

      <!--   Pontos do gráfico || Points of chart    -->
      <circle
        v-for="(order, index) in orders"
        :key="index"
        :cx="index * 40 + 40"
        :cy="calculatePercentageInverted(order.value)"
        r="2.5"
        fill="currentColor"
      />

      <circle
        v-for="(order, index) in orders"
        :key="index"
        :cx="index * 40 + 40"
        :cy="calculatePercentageInverted(order.value)"
        r="7"
        class="circle"
        @mouseenter="showTooltip(keys[index].key, order.value, index)"
        @mouseleave="hideTooltip"
      />
    </svg>
    <div
      :style="{
        '--x': (show.data.index + 1 > orders.length / 2 ? x - 150 : x) + 'px',
        '--y': y - 75 + 'px',
        '--color-200-20': colorHex.op200 + '20'
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
</template>

<style scoped>


</style>
