<script setup>
import { computed, onMounted, reactive, ref } from "vue";

const props = defineProps({
  values: {
    type: Array,
    required: true,
  },
});

const colors = computed(() => {
  return [
    // {
    //   op200: "#e2e8f0",
    //   op300: "#cbd5e1",
    //   op500: "#64748b",
    //   op800: "#1e3d3b",
    // },
    // {
    //   op200: "#e5e7eb",
    //   op300: "#d1d5db",
    //   op500: "#6b7280",
    //   op800: "#1f2937",
    // },
    // {
    //   op200: "#e4e4e7",
    //   op300: "#d4d4d8",
    //   op500: "#717179",
    //   op800: "#27272a",
    // },
    // {
    //   op200: "#e5e5e5",
    //   op300: "#d4d4d4",
    //   op500: "#737373",
    //   op800: "#262626",
    // },
    // {
    //   op200: "#e7e5e4",
    //   op300: "#d6d3d1",
    //   op500: "#78716c",
    //   op800: "#292524",
    // },
    {
      op200: "#bfdbff",
      op300: "#93c5fd",
      op500: "#3b82f6",
      op800: "#1e40af",
    },
    {
      op200: "#c7d2fe",
      op300: "#a5b4fc",
      op500: "#6366f1",
      op800: "#3730a3",
    },
    {
      op200: "#ddd6fe",
      op300: "#c4b5fd",
      op500: "#8b5cf6",
      op800: "#5b21b6",
    },
    {
      op200: "#e9d5ff",
      op300: "#d8b4fe",
      op500: "#a855f7",
      op800: "#6b21a8",
    },
    {
      op200: "#f5d0fe",
      op300: "#f0abfc",
      op500: "#d946ef",
      op800: "#86198f",
    },
    {
      op200: "#fbcfe8",
      op300: "#f9a8d4",
      op500: "#ec4899",
      op800: "#9d174d",
    },
    {
      op200: "#fecdd3",
      op300: "#fda4af",
      op500: "#f43f5e",
      op800: "#9f1239",
    },
    {
      op200: "#fecaca",
      op300: "#fca5a5",
      op500: "#ef4444",
      op800: "#991b1b",
    },
    {
      op200: "#fed7aa",
      op300: "#fdba74",
      op500: "#f97316",
      op800: "#9a3412",
    },
    {
      op200: "#fde68a",
      op300: "#fcd34d",
      op500: "#f59e0b",
      op800: "#92400e",
    },
    {
      op200: "#fef08a",
      op300: "#fde047",
      op500: "#e6b308",
      op800: "#854d0e",
    },
    {
      op200: "#d9f99d",
      op300: "#bee264",
      op500: "#84cc16",
      op800: "#3f6212",
    },
    {
      op200: "#bbf7d0",
      op300: "#86efac",
      op500: "#22c55e",
      op800: "#166534",
    },
    {
      op200: "#a7f3d0",
      op300: "#6ee7b7",
      op500: "#10b981",
      op800: "#065f46",
    },
    {
      op200: "#99f6e4",
      op300: "#5eead4",
      op500: "#14b8a6",
      op800: "#115e59",
    },
    {
      op200: "#a5f3fc",
      op300: "#67e8f9",
      op500: "#06b6d4",
      op800: "#155e75",
    },
    {
      op200: "#bae6fd",
      op300: "#7dd3fc",
      op500: "#0ea5e9",
      op800: "#075985",
    },
  ];
});

const values = reactive({
  data: [],
});

const hoverIndex = ref(-1);

function position(angle, radius, centerX, centerY) {
  return {
    x: Math.cos(angle) * radius + centerX,
    y: Math.sin(angle) * radius + centerY,
  };
}

const color = computed(() => {
  let accumulator = 0;
  let accumulated = 0;
  values.data.forEach((item) => {
    accumulator += item.value;
  });
  return values.data.map((item) => {
    let hsl = (100 * item.value) / accumulator
    accumulated += hsl
    return {
      opacityTotal: 'hsla(160,'+accumulated.toFixed(0)+'%,40%,1)',
      opacity80: 'hsla(160,'+accumulated.toFixed(0)+'%,40%,0.8)'
    }
  });
});


const linePositions = computed(() => {
  let accumulator = 0;
  let accumulatedPercent = 0;
  values.data.forEach((item) => {
    accumulator += item.value;
  });
  return values.data.map((item) => {
    let percent = (100 * item.value) / accumulator
    let underPercent = accumulatedPercent
    accumulatedPercent += percent
    return {x1: (underPercent * 5) + 50,x2: (accumulatedPercent * 5) + 50, y: 30}
  });
});

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

function convertToAngle(value, total) {
  return toRadians((360 * ((100 * value) / total)) / 100);
}

onMounted(() => {
  values.data = props.values.slice().sort((a, b) => a.value - b.value);
});

const angles = computed(() => {
  let accumulator = 0;
  let positions = [];
  values.data.forEach((item) => {
    accumulator += item.value;
  });
  values.data.forEach((value, index) => {
    let accumulated = convertToAngle(value.value, accumulator);
    for (let j = 0; j < index; j++) {
      accumulated =
        accumulated + convertToAngle(values.data[j].value, accumulator);
    }
    positions.push(accumulated);
  });
  return positions;
});

const halpAngles = computed(() => {
  let accumulator = 0;
  let positions = [];
  values.data.forEach((item) => {
    accumulator += item.value;
  });
  values.data.forEach((value, index) => {
    let accumulated = convertToAngle(value.value, accumulator) / 2;
    for (let j = 0; j < index; j++) {
      accumulated =
        accumulated + convertToAngle(values.data[j].value, accumulator);
    }
    positions.push(accumulated);
  });
  return positions;
});

const halfPositions = computed(() => {
  return halpAngles.value.map((angle) => {
    return position(angle, 250, 300, 300);
  });
});

const halfPositionsDislocated = computed(() => {
  return halpAngles.value.map((angle) => {
    return position(angle, 280, 300, 300);
  });
});

const positions = computed(() => {
  return angles.value.map((angle) => {
    return position(angle, 250, 300, 300);
  });
});

const paths = computed(() => {
  let percents = [];
  let accumulator = 0;
  values.data.forEach((item) => {
    accumulator += item.value;
  });
  values.data.forEach((item) => {
    percents.push((item.value * 100) / accumulator);
  });
  return positions.value.map((position, index) => {
    if (index === values.data.length - 1 && percents[index] > 50) {
      return `M 300 300 L ${position.x} ${
        position.y
      } A 250 250 0 0 0 100 300 A 250 250 0 0 0 ${
        positions.value[index - 1].x
      } ${positions.value[index - 1].y} Z`;
    } else if (index !== 0 && index < values.data.length) {
      return `M 300 300 L ${position.x} ${position.y} A 250 250 0 0 0 ${
        positions.value[index - 1].x
      } ${positions.value[index - 1].y} Z`;
    } else {
      return `M 300 300 L ${position.x} ${position.y} A 250 250 0 0 0 550 300 Z`;
    }
  });
});
</script>
<template>
  <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
    <!-- <rect width="100%" height="100%" /> -->
    <g v-for="(line, index) in linePositions" :key="index">
      <line :x1="line.x1" :x2="line.x2" :y1="line.y" :y2="line.y" transform="translate(-1.5 0)" stroke-width="20" stroke-linecap="round" stroke="#ffffff50"/>
      <line :x1="line.x1" :x2="line.x2" :y1="line.y" :y2="line.y" stroke-width="20" stroke-linecap="round" :stroke="color[index].opacityTotal"/>
    </g>
    <!-- <circle cx="50" cy="30" r="10" :fill="color[0]" /> -->
    <!-- <path d="M 50 20 C 35 20 35 40 50 40 Z" stroke-width="0" :fill="color[0]" /> -->
    <g
      v-for="(value, index) in paths"
      :key="index"
      :transform="`rotate(270 300 300)`"
    >
      <path
        :d="value"
        stroke="#ffffff50"
        :fill="color[index].opacity80"
        stroke-width="1.5"
        @mouseenter="
          () => {
            hoverIndex = index;
          }
        "
        @mouseleave="
          () => {
            hoverIndex = -1;
          }
        "
        :transform="[
          hoverIndex === index
            ? `translate(${
                halfPositionsDislocated[index].x - halfPositions[index].x
              } ${halfPositionsDislocated[index].y - halfPositions[index].y})`
            : '',
        ]"
      />
    </g>
  </svg>
</template>
<style scoped></style>
