<template>
  <div class="py-5">
    <ul class="u-grid" role="list">
      <li v-for="player in players" :key="player.name"
          class="u-grid sm:space-x-5">
        <CardPlayer :player="player"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {players} from '@/data/players.js'
import CardPlayer from '@/components/team/CardPlayer.vue'</script>
