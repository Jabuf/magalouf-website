<template>
  <div class="flex justify-center py-5">
    <p>
      <img alt="duche" src="/logo_full.png" />
    </p>
  </div>
  <div class="space-y-2 justify-center flex">
    <p>Bienvenue à magaluf, bienvenue à toi le chasseur, le portugais, le zézé, le vieux, le coach, le jeune, bienvenue
      à toi le virazellais. Si tu lis ces lignes alors tu participes à ce bel évènement qui nous réunis pour un long,
      très long, week-end. Tu trouveras sur cette plateforme l’ensemble des joueurs présents avec toi, les bars que tu vas
      visiter, un endroit où tu pourras poster tes photos et le classement du Tour de Magaluf auquel tu vas
      participer.</p>
  </div>
  <PictureWidget :name="''+state.pictureNumber" />
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { getRandomNumber } from '@/utils/math.js'
import PictureWidget from '@/components/pictures/PictureWidget.vue'

const state = reactive({ pictureNumber: getRandomNumber(1, 5) })

onMounted(() => {
  window.setInterval(() => {
    state.pictureNumber = getRandomNumber(1, 5)
  }, 5000)
})
</script>
