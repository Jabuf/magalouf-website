<template>
  <PictureWidget v-for="index in 44" :key="index" :name="''+index"/>
</template>

<script setup>
import PictureWidget from '@/components/pictures/PictureWidget.vue'</script>
