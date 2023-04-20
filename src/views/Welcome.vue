<template>
  <div class="flex justify-center py-5">
    <p>
      <img alt="duche" src="/logo_full.png"/>
    </p>
  </div>
  <div class="space-y-2 justify-center flex">
    <p>Sortie amicale du RCV Magaluf le 1er juin.</p>
  </div>
  <PictureWidget :name="''+state.pictureNumber"/>
</template>

<script setup>
import {onMounted, reactive} from 'vue'
import {getRandomNumber} from '@/utils/math.js'
import PictureWidget from '@/components/pictures/PictureWidget.vue'

const state = reactive({pictureNumber: getRandomNumber(1, 5)})

onMounted(() => {
  window.setInterval(() => {
    state.pictureNumber = getRandomNumber(1, 5)
  }, 5000)
})
</script>
