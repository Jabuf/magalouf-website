<template>
  <div class="mt-5">
    <Place v-for="place in places" :place="place"/>
  </div>
</template>

<script setup>

import Place from '@/components/boyage/Place.vue'
import {places} from '@/data/places.js';</script>
