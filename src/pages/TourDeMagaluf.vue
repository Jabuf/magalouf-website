<template>
  <div v-if="!cookies.isKey('answered')" id="survey" class="text-black" />
  <div v-else>resultats</div>
</template>

<script setup>
import 'survey-core/defaultV2.min.css'
import { StylesManager } from 'survey-core'
import { Survey } from 'survey-knockout-ui'
import { pollTdmJson } from '@/data/pollTdm.js'
import { inject, onMounted } from 'vue'

const cookies = inject('$cookies')

StylesManager.applyTheme('defaultV2')

onMounted(() => {
  const survey = new Survey(pollTdmJson)
  survey.onComplete.add(surveyComplete)
  survey.render('survey')
})

function surveyComplete() {
  cookies.set('answered', true)
  location.reload()
}
</script>
