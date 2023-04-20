<template>
  <div>
    <div
        class="flex items-center px-5 py-3 border shadow-sm font-medium text-sm rounded-lg bg-gray-700 cursor-pointer"
        @click="displayComment()">
      <a v-if="place.location" :href="place.location" target="_blank">
        <UIcon :path="mdiMapMarker" class="flex text-red-700" size="24"/>
      </a>
      <div class="w-full px-5 align-middle text-white">{{ place.order + ' - ' + place.name }}
      </div>
      <div class="right-0">
        <UIcon :class="state.rotate?'inline-flex rotate-90':''" :path="mdiPlay" :size="24"
               class="align-middle text-white"/>
      </div>
    </div>
    <div v-if="state.rotate" class="px-5">
      <Reviews :place-number="place.order"/>
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import {mdiMapMarker, mdiPlay} from '@mdi/js'
import UIcon from '@/components/basic/UIcon.vue'
import Reviews from '@/components/boyage/Reviews.vue'

const props = defineProps({
  place: {
    type: Object,
    required: true
  }
})

const state = reactive({rotate: false})

function displayComment() {
  state.rotate = !state.rotate
}


</script>
