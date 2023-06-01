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

function toogle() {
  if (showPie.value === true) {
    showPie.value = false;
    setTimeout(() => {
      showTable.value = true;
    }, 300);
  } else {
    showTable.value = false;
    // setTimeout(() => {
      showPie.value = true;
    // }, 300);
  }
}

const showTable = ref(false);

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
  <div class="pie">
    <div class="toogle">
      <div class="button-group">
        <!-- <button @click="toogle">toogle</button> -->
        <button class="button-dots">
          <svg class="button-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 3.5C11.5 4.32843 10.8284 5 10 5C9.17157 5 8.5 4.32843 8.5 3.5C8.5 2.67157 9.17157 2 10 2C10.8284 2 11.5 2.67157 11.5 3.5Z" fill="white"/>
            <path d="M11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10Z" fill="white"/>
            <path d="M11.5 3.5C11.5 4.32843 10.8284 5 10 5C9.17157 5 8.5 4.32843 8.5 3.5C8.5 2.67157 9.17157 2 10 2C10.8284 2 11.5 2.67157 11.5 3.5Z" fill="white"/>
            <path d="M11.5 16.5C11.5 17.3284 10.8284 18 10 18C9.17157 18 8.5 17.3284 8.5 16.5C8.5 15.6716 9.17157 15 10 15C10.8284 15 11.5 15.6716 11.5 16.5Z" fill="white"/>
          </svg>
        </button>
        <div class="button-background">
          <button class="button-container left">
            <svg class="button-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10C2 8.27688 2 6.60182 2 5.42857C2 4.95654 2 4.56574 2 4.28571C2 2.45714 3.52381 2 4.28571 2C7.33333 2 13.8857 2 15.7143 2C17.5429 2 18 3.52381 18 4.28571C18 4.62665 18 5.01144 18 5.42857C18 8.74022 18 14.0903 18 15.7143C18 17.5429 16.4762 18 15.7143 18C12.6667 18 6.11429 18 4.28571 18C2.45714 18 2 16.4762 2 15.7143C2 14.2934 2 12.1106 2 10ZM2 10C2 8.17143 3.52381 7.71429 4.28571 7.71429C4.94415 7.71429 14.2151 7.71429 15.7143 7.71429C16.4762 7.71429 18 8.17143 18 10C18 11.8286 16.4762 12.2857 15.7143 12.2857H4.28571C3.52381 12.2857 2 11.8286 2 10Z" stroke="white" stroke-width="1" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="button-container right">
            <svg class="button-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 18C14.4183 18 18 14.4183 18 10C18 8.25928 17.444 6.64841 16.5 5.33528L10 10L13 2.58152C12.0736 2.20651 11.0609 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="white" stroke-linejoin="round"/>
            </svg>

          </button>

        </div>
      </div>
    </div>
    <div class="container">
      <svg class="line" v-if="showTable" viewBox="0 0 600 20">
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
      <div v-if="showTable" class="table-container">
        <table class="table">
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
  <Transition 
  >
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
      </g>
    </svg>
  </Transition>
    </div>
  </div>
</template>
<style scoped>
@keyframes animarPath {
  0% {
    stroke-dashoffset: 1000;
    fill-opacity: 0;
    width: 0;
  }
  100% {
    stroke-dashoffset: 0;
    fill-opacity: 100%;
    width: 100%;
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.pie {
  position: relative;
  width: 98%;
  padding-bottom: 100%;
  overflow: hidden;
}
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.toogle {
  position: absolute;
  bottom: 10px;
  left: 20px;
}
.toogle .button-group {
  position: absolute;
  bottom: 0;
  z-index: 10;
}

.line {
  margin-top: 20px;
}

.button-background {
  display: flex;
  align-items: center;
  background-color: #70707040;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 8px;
}
.button-container.left{
  /* background-color: #00000090; */
  /* margin-right:5px ; */
}
/* .button-container.right{
} */

.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  border: none;
  background: none;
}
.button-svg {
  width: 25px;
  height: 25px;
}

.button-group {
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  background-color: #70707040;
  margin-right: 10px;
  border: none;
}
</style>