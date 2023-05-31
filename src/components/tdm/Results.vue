<template>
  <div>
    <div class="flex justify-center py-10">
      <img alt="jaune" :src="`/jaune.png`">
    </div>
    <div class="text-center">
      <span class="text-5xl">{{results.jaune}}</span>
    </div>
  </div>
  <div>
    <div class="flex justify-center py-10">
      <img alt="vert" :src="`/vert.png`">
    </div>
    <div class="text-center">
      <span class="text-5xl">{{results.vert}}</span>
    </div>
  </div>
  <div>
    <div class="flex justify-center py-10">
      <img alt="pois" :src="`/pois.png`">
    </div>
    <div class="text-center">
      <span class="text-5xl">{{results.pois}}</span>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  results: {
    type: Object,
    required: true
  }
})
</script>
