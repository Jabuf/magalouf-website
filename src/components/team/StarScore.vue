<template>
  <div>
    <h3 class="flex justify-center text-xl">Scores</h3>
    <canvas :id="playerName"></canvas>
  </div>
</template>

<script setup>

import {onMounted} from 'vue'

const props = defineProps({
  playerName: {
    type: String,
    required: true
  },
  scores: {
    type: Object,
    required: true
  }
})

const data = {
  labels: [
    'Apéritif',
    '4 deb',
    'Ballon',
    'Bagarre',
    'Déblayage'
  ],
  datasets: [{
    data: [props.scores.aperitif, props.scores.deb, props.scores.ballon, props.scores.bagarre, props.scores.deblayage],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
}

const config = {
  type: 'radar',
  data: data,
  options: {
    scales: {
      r: {
        pointLabels: {
          font: {
            weight: 'bold',
            size: 14
          }
        },
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 5
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  },
  elements: {
    line: {
      borderWidth: 3
    }
  }
}

onMounted(() => {
  new Chart(
      document.getElementById(props.playerName),
      config
  )
})


</script>
