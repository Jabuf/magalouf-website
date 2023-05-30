<template>
  <div>
    <h3 class="flex justify-center text-xl">Résultats</h3>
    <canvas :id="day"></canvas>
  </div>
</template>

<script setup>

import { onMounted } from 'vue'

const props = defineProps({
  day: {
    type: String,
    required: true
  },
  results: {
    type: Object,
    required: true
  }
})

const labels = ['Lolo', 'Bébert', 'Valde', 'Clams']
const data = {
  labels: labels,
  datasets: [{
    barThickness: 6,
    maxBarThickness: 8,
    minBarLength: 2,
    data: [7, 5, 4, 1]
  }]
}

const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y'
  }
}

onMounted(() => {
  new Chart(
    document.getElementById(props.day),
    config
  )
})


</script>
