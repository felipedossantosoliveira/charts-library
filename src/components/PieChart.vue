<script setup>
import { computed, onMounted, reactive, ref } from "vue";

const receivedValues = reactive([
  { value: 1367, color: 'purple'},
  { value: 1059 , color: 'green'},
  { value: 7000 , color: 'brown'},
  { value: 1229 , color: 'orange'},
  { value: 2500 , color: 'blue'},
  { value: 1058 , color: 'yellow'},
  { value: 3500 , color: 'red'},
  { value: 1232 , color: 'pink'},
  { value: 1383 , color: 'gray'},
]);

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

function calcHoverPosition(x, y, subx, suby) {
  return {
    x: x - subx,
    y: y - suby,
  };
}
function toRadians(angle) {
  return angle * (Math.PI / 180);
}

function convertToAngle(value, total) {
  return toRadians((360 * ((100 * value) / total)) / 100);
}

onMounted(() => {
  values.data = receivedValues.slice().sort((a, b) => a.value - b.value);
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
    let accumulated = (convertToAngle(value.value, accumulator))/2;
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
    return position(angle, 250, 350, 350);
  });
});

const halfPositionsDislocated = computed(() => {
  return halpAngles.value.map((angle) => {
    return position(angle, 280, 350, 350);
  });
});

const positions = computed(() => {
  return angles.value.map((angle) => {
    return position(angle, 250, 350, 350);
  });
});

// const hoverPositions = computed(() => {
//   return halfPositions.value.map((position, index) => {
//     return calcHoverPosition(position.x, position.y, positions.value[index].x, positions.value[index].y) ;
//   });
// });

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
      return `M 350 350 L ${position.x} ${position.y} A 250 250 0 0 0 100 350 A 250 250 0 0 0 ${positions.value[index - 1].x} ${positions.value[index - 1].y} Z`;
    }else if (index !== 0 && index < values.data.length) {
      return `M 350 350 L ${position.x} ${position.y} A 250 250 0 0 0 ${positions.value[index - 1].x} ${positions.value[index - 1].y} Z`;
    } else {
      return `M 350 350 L ${position.x} ${position.y} A 250 250 0 0 0 600 350 Z`;
    }
  });
});


// function calculateXY(){
//   let accumulator = 0;
//   values.forEach((item) => {
//     accumulator += item.value;
//   });
//   let paths = [];
//   for (let i = 0; i < values.length; i++) {
//     const item = values[i];
//     let acum = convertToAngle(item.value, accumulator)
//     for (let j = 0; j < i; j++) {
//       acum = acum + convertToAngle(values[j].value, accumulator);
//     }
//     const angle = acum;
//     const radius = 250;
//     const center = 250;
//     const x = (Math.cos(angle) * radius) + center;
//     const y = (Math.sin(angle) * radius) + center;
//     paths.push({x, y})
//   }
//   return paths
// }
</script>
<template>
  <svg viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="700" height="700"/>
        <line x1="350" y1="0" x2="350" y2="700" stroke="red" />
        <line x1="0" y1="350" x2="700" y2="350" stroke="red" />
<!--    <circle r="300" cx="350" cy="350" fill="white" stroke="white" />-->
    <g
      v-for="(value, index) in paths"
      :key="index"
      :transform="`rotate(270 350 350)`"
    >
      <path
        :d="value"
        :stroke="values.data[index].color"
        :fill="values.data[index].color"
        stroke-width="1"
        @mouseenter="() => {hoverIndex = index}"
        @mouseleave="() => {hoverIndex = -1}"
        :transform="[hoverIndex === index ? `translate(${halfPositionsDislocated[index].x - halfPositions[index].x} ${halfPositionsDislocated[index].y - halfPositions[index].y})` : '']"
      />
    </g>
<!--        :transform="`translate(${hoverPositions[index].x}, ${hoverPositions[index].y})`"-->
    <text stroke="red" x="5" y="348">
      x
    </text>
    <text stroke="red" x="340" y="695">
      y
    </text>
  </svg>
</template>
<style scoped></style>