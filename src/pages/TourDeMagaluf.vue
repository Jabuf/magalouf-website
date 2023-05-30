<template>
  <div>
    <div class="text-center">Jour 1</div>
    <div v-if="!cookies.isKey('PollDay1')" id="surveyDayOne" />
    <div v-else>
      <ResultsPoll :results="{}" day="1" />
    </div>
  </div>
  <div>
    <div class="text-center">Jour 2</div>
    <div v-if="!cookies.isKey('PollDay2')" id="surveyDayTwo" />
    <div v-else>
      <ResultsPoll :results="{}" day="2" />
    </div>
  </div>
  <div>
    <div class="text-center">Jour 3</div>
    <div v-if="!cookies.isKey('PollDay3')" id="surveyDayThree" />
    <div v-else>
      <ResultsPoll :results="{}" day="3" />
    </div>
  </div>
</template>

<script setup>
import 'survey-core/defaultV2.min.css'
import { StylesManager } from 'survey-core'
import { Survey } from 'survey-knockout-ui'
import { pollTdmJson } from '@/data/pollTdm.js'
import { inject, onMounted } from 'vue'
import Airtable from 'airtable'
import ResultsPoll from '@/components/tdm/ResultsPoll.vue'

const cookies = inject('$cookies')

StylesManager.applyTheme('defaultV2')
const surveyDayOne = new Survey(pollTdmJson)
const surveyDayTwo = new Survey(pollTdmJson)
const surveyDayThree = new Survey(pollTdmJson)


onMounted(() => {
  surveyDayOne.onComplete.add(postAnswerDayOne)
  surveyDayOne.render('surveyDayOne')
  surveyDayTwo.onComplete.add(postAnswer)
  surveyDayTwo.render('surveyDayTwo')
  surveyDayThree.onComplete.add(postAnswer)
  surveyDayThree.render('surveyDayThree')
})

async function postAnswerDayOne() {
  const jaune = surveyDayOne.getQuestionByName('jaune').value
  const pois = surveyDayOne.getQuestionByName('pois').value
  const vert = surveyDayOne.getQuestionByName('vert').value
  await postAnswer('PollDay1', { jaune, pois, vert })
}

const base = new Airtable({ apiKey: 'keyphfsB83HLB5gcL' }).base('app8gya478AOE2nxo')

async function postAnswer(tableName, answers) {
  console.log(answers)
  await base(tableName).create([
    {
      'fields': answers
    }
  ])
  cookies.set(tableName, true)
  location.reload()
}

</script>
