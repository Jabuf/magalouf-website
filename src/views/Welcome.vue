<template>
  <div class="flex justify-center py-5">
    <p>
      <img alt="duche" src="/logo_full.png"/>
    </p>
  </div>
  <div class="space-y-2">
    <p>Désappointé je le suis par ce message laissé par Loloye, ton autre hémisphère.
      Je me suis dit, a y est, mon heure est arrivée, je vais pouvoir participer à une EVG, ma première
      Quelle chance !</p>

    <p>Forcément mérité après tous ces goûters au Bois Vert, à la bière et au bédo, dès l’âge de vos 12 ans ;)
      Ces festoyes chez Bailly sans y foutre le feu
      Tous ces entrainements et matches au FLRSVSLFRSV, au SR et autre sélection</p>

    <p>Désappointé je le reste, ils ne veulent pas de l’Ancêtre…déjà pour accepter Ugess, la majorité était relative…
      Mais ils sont bons tout de même ces ptits cons et respectueux voyez-vous, puisque la charge d’un discours, d’une
      introduction, d’une bafouille en somme me revient.
      Quel honneur dans l’horreur !</p>
    <p>Alors mon Champion, tu vas convoler en justes noces avec ta belle Clémence de la famille adverse ou plutôt en
      2ème
      noces, délaissant ton Bastien, tes potes, les cuites, abandonnant les bastons … et ton chien.</p>
    <p>Profite bien de ces moments magiques, les 3 ptits loups, les JC, la dream team et le PhiD, tout rassemblé !</p>
    <p>Papa</p>
  </div>
  <PictureWidget :name="''+state.pictureNumber"/>
</template>

<script setup>
import {onMounted, reactive} from 'vue'
import {getRandomNumber} from '@/utils/math.js'
import PictureWidget from '@/components/pictures/PictureWidget.vue'

const state = reactive({pictureNumber: getRandomNumber(1, 14)})

onMounted(() => {
  window.setInterval(() => {
    state.pictureNumber = getRandomNumber(1, 14)
  }, 5000)
})
</script>
