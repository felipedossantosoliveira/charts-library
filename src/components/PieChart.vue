<script setup>
import { computed, onMounted, reactive, ref } from "vue";

const props = defineProps({
  values: {
    type: Array,
    required: true,
  },
});

const showPie = ref(true);

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
    let hsl = (100 * item.value) / accumulator;
    accumulated += hsl;
    return {
      opacityTotal: "hsla(160," + accumulated.toFixed(0) + "%,40%,1)",
      opacity80: "hsla(160," + accumulated.toFixed(0) + "%,40%,0.8)",
    };
  });
});

const linePositions = computed(() => {
  let accumulator = 0;
  let accumulatedPercent = 0;
  values.data.forEach((item) => {
    accumulator += item.value;
  });
  return values.data.map((item) => {
    let percent = (100 * item.value) / accumulator;
    let underPercent = accumulatedPercent;
    accumulatedPercent += percent;
    return {
      x1: underPercent * 5 + 50,
      x2: accumulatedPercent * 5 + 50,
      y: 10,
    };
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

const percents = computed(() => {
  let percents = [];
  let accumulator = 0;
  values.data.forEach((item) => {
    accumulator += item.value;
  });
  values.data.forEach((item) => {
    percents.push(((item.value * 100) / accumulator).toFixed(2));
  });
  return percents.reverse();
});

const invertedValues = computed(() => {
  return values.data.slice().reverse();
});

const invertedColors = computed(() => {
  return color.value.slice().reverse();
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
  <div @click="showPie = !showPie" style="color: white">toogle</div>
  <div class="container">
    <svg v-if="showPie === false" viewBox="0 0 600 20">
      <g v-for="(line, index) in linePositions" :key="index">
        <line
          :x1="line.x1"
          :x2="line.x2"
          :y1="line.y"
          :y2="line.y"
          transform="translate(-1.5 0)"
          stroke-width="20"
          stroke-linecap="round"
          stroke="#ffffff50"
        />
        <line
          :x1="line.x1"
          :x2="line.x2"
          :y1="line.y"
          :y2="line.y"
          stroke-width="20"
          stroke-linecap="round"
          :stroke="color[index].opacityTotal"
        />
      </g>
    </svg>
    <div class="table-container">
      <table v-if="showPie === false" class="table">
        <tr>
          <th class="key">CHAVE</th>
          <th class="value">VALOR</th>
        </tr>
        <tr v-for="(value, index) in invertedValues" :key="index">
          <td class="key">
            <svg width="5px" height="5px" viewBox="0 0 10 10">
              <rect
                width="100%"
                height="100%"
                :fill="invertedColors[index].opacityTotal"
              />
            </svg>
            <span style="margin-left: 20px">{{ value.key }}</span>
          </td>
          <td class="value">
            {{ value.value
            }}<span
              style="margin-left: 10px; color: #737373; font-weight: normal"
              >({{ percents[index] }}%)</span
            >
          </td>
        </tr>
      </table>
    </div>

    <svg
      v-if="showPie"
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- <rect width="100%" height="100%" /> -->

      <!-- <circle cx="50" cy="30" r="10" :fill="color[0]" /> -->
      <!-- <path d="M 50 20 C 35 20 35 40 50 40 Z" stroke-width="0" :fill="color[0]" /> -->
      <g
        v-for="(value, index) in paths"
        :key="index"
        :transform="`rotate(270 300 300)`"
      >
        <transition

        >
        <path
          id="path"
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
        </transition>
      </g>
    </svg>
  </div>
</template>
<style scoped>
.container {
  //background-color: red;
}

@keyframes animarPath {
  0% {
    stroke-dashoffset: 1000;
    fill-opacity: 0;
    width: 0;
    //transform: translate(30px, 0)
  }
  100% {
    stroke-dashoffset: 0;
    fill-opacity: 100%;
    width: 100%;
    //transform: translate(0, 0)
  }
}

#path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  fill-opacity: 100%;
  animation: animarPath 1s linear forwards;
  animation-iteration-count: 1;
}

.table {
  color: #e5e7eb;
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
}

.table-container {
  padding-left: 20px;
  padding-right: 20px;
}

.table,
td {
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #73737335;
  font-size: 10pt;
}

.table th {
  padding-top: 8px;
  padding-bottom: 8px;
  color: #737373;
  font-size: 8pt;
  text-align: left;
  border-bottom: 1px solid #73737335;
  font-weight: bold;
}

.table .key {
  text-align: left;
}

.table .value {
  text-align: right;
  font-weight: 600;
}

tr .key {
  display: flex;
  align-items: center;
}
</style>