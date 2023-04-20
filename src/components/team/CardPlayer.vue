<template>
  <div @click="switchSide">
    <div class="px-4 py-5">
      <h3 class="flex justify-center">
        {{ player.name }}
        <UIcon :path="mdiArrowUDownLeftBold" class="px-5" size="24"/>
      </h3>
    </div>
    <div v-if="state.recto">
      <div class="max-h-96">
        <img :alt="player.name" :src="`/team/${player.name}.jpg`" class="object-cover object-center h-96 w-96">
      </div>
      <div class="px-4 py-5 sm:p-0">
        <dl class="divide-y divide-gray-200">
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="flex items-center text-sm font-medium text-gray-500">
              <UIcon :path="mdiFaceMan"/>
              Nom
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ player.name }}
            </dd>
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="flex items-center text-sm font-medium text-gray-500">
              <UIcon :path="mdiCake"/>
              Âge
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ player.age }}
            </dd>
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="flex items-center text-sm font-medium text-gray-500">
              <UIcon :path="mdiWeightKilogram"/>
              Poids
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ player.poids }}
            </dd>
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="flex items-center text-sm font-medium text-gray-500">
              <UIcon :path="mdiRuler"/>
              Taille
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ player.taille }}
            </dd>
          </div>
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt class="flex items-center text-sm font-medium text-gray-500">
              <UIcon :path="mdiRugby"/>
              Poste
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ player.poste }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div v-else>
      <dl class="divide-y divide-gray-200">
        <div>
          <StarScore :player-name="player.name" :scores="player.scores"/>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt class="flex items-center text-sm font-medium text-gray-500">
            <UIcon :path="mdiTrophy"/>
            Palmarès
          </dt>
          <ul role="list">
            <li v-for="titre in player.palmares" class="flex items-center justify-between text-sm">
              <div class="flex-1 flex items-center pb-2">
                <span>• {{ titre }}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
          <dt class="flex items-center text-sm font-medium text-gray-500">
            <UIcon :path="mdiStar"/>
            Talent
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> {{ player.talent }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import {
  mdiArrowUDownLeftBold,
  mdiCake,
  mdiFaceMan,
  mdiRugby,
  mdiRuler,
  mdiStar,
  mdiTrophy,
  mdiWeightKilogram
} from '@mdi/js'
import UIcon from '@/components/basic/UIcon.vue'
import {reactive} from 'vue'
import StarScore from '@/components/team/StarScore.vue'

const state = reactive({recto: true})

const props = defineProps({
  player: {
    type: Object,
    required: true
  }
})

function switchSide() {
  state.recto = !state.recto
}
</script>
