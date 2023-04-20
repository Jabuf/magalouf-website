<template>
  <div class="flex justify-center py-10">
    <img :alt="props.name" :src="`/pictures/${props.name}.jpg`">
  </div>
</template>

<script setup>

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
