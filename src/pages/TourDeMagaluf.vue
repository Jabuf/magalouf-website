<template>
  <div v-if="state.isPollDayThree">
    <div class="text-center text-5xl py-5">Etape 3</div>
    <div v-if="!cookies.isKey('PollDay3')" id="surveyDayThree" />
    <Results v-if="state.isResultDayThree" :results="state.resultsTotal" />
    <Results v-if="state.isResultDayThree" :results="state.resultsDayThree" />
  </div>
  <div v-if="state.isPollDayTwo">
    <div class="text-center text-5xl py-5">Etape 2</div>
    <div v-if="!cookies.isKey('PollDay2')" id="surveyDayTwo" />
    <Results v-if="state.isResultDayTwo" :results="state.resultsDayTwo" />
  </div>
  <div v-if="state.isPollDayOne">
    <div class="text-center text-5xl py-5">Etape 1</div>
    <div v-if="!cookies.isKey('PollDay1')" id="surveyDayOne" />
    <Results v-if="state.isResultDayOne" :results="state.resultsDayOne" />
  </div>
</template>

<script setup>
import 'survey-core/defaultV2.min.css'
import { StylesManager } from 'survey-core'
import { Survey } from 'survey-knockout-ui'
import { pollTdmJson } from '@/data/pollTdm.js'
import { inject, onMounted, reactive } from 'vue'
import Airtable from 'airtable'
import Results from '@/components/tdm/Results.vue'

const cookies = inject('$cookies')

StylesManager.applyTheme('defaultV2')
const surveyDayOne = new Survey(pollTdmJson)
const surveyDayTwo = new Survey(pollTdmJson)
const surveyDayThree = new Survey(pollTdmJson)

const state = reactive({
  resultsDayOne: {}, resultsDayTwo: {}, resultsDayThree: {}, resultsTotal: {},
  isPollDayOne: new Date() > new Date(2023, 5, 3, 10, 0),
  isPollDayTwo: new Date() > new Date(2023, 5, 4, 10, 0),
  isPollDayThree: new Date() > new Date(2023, 5, 4, 20, 0),
  isResultDayOne: new Date() > new Date(2023, 5, 3, 12, 0),
  isResultDayTwo: new Date() > new Date(2023, 5, 4, 12, 0),
  isResultDayThree: new Date() > new Date(2023, 5, 4, 20, 30)
})

const base = new Airtable({ apiKey: 'keyphfsB83HLB5gcL' }).base('app8gya478AOE2nxo')

const resultsDayOne = (await base('PollDay1').select({
  view: 'main'
}).firstPage()).map(e => e.fields)
const resultsDayTwo = (await base('PollDay2').select({
  view: 'main'
}).firstPage()).map(e => e.fields)
const resultsDayThree = (await base('PollDay3').select({
  view: 'main'
}).firstPage()).map(e => e.fields)
const resultsTotal = [...resultsDayOne, ...resultsDayTwo, ...resultsDayThree]
state.resultsDayOne = getTopResultByCategory(resultsDayOne)
state.resultsDayTwo = getTopResultByCategory(resultsDayTwo)
state.resultsDayThree = getTopResultByCategory(resultsDayThree)
state.resultsTotal = getTopResultByCategory(resultsTotal)

function getTopResultByCategory(results) {
  return {
    jaune: mode(results.map(e => e.jaune)),
    vert: mode(results.map(e => e.vert)),
    pois: mode(results.map(e => e.pois))
  }
}

function mode(array) {
  if (array.length === 0)
    return null
  let modeMap = {}
  let maxEl = array[0], maxCount = 1
  for (let i = 0; i < array.length; i++) {
    const el = array[i]
    if (modeMap[el] == null)
      modeMap[el] = 1
    else
      modeMap[el]++
    if (modeMap[el] > maxCount) {
      maxEl = el
      maxCount = modeMap[el]
    }
  }
  return maxEl
}


onMounted(() => {
  surveyDayOne.onComplete.add(postAnswerDayOne)
  surveyDayOne.render('surveyDayOne')
  surveyDayTwo.onComplete.add(postAnswerDayTwo)
  surveyDayTwo.render('surveyDayTwo')
  surveyDayThree.onComplete.add(postAnswerDayThree)
  surveyDayThree.render('surveyDayThree')
})

async function postAnswerDayOne() {
  const jaune = surveyDayOne.getQuestionByName('jaune').value
  const pois = surveyDayOne.getQuestionByName('pois').value
  const vert = surveyDayOne.getQuestionByName('vert').value
  await postAnswer('PollDay1', { jaune, pois, vert })
}

async function postAnswerDayTwo() {
  const jaune = surveyDayTwo.getQuestionByName('jaune').value
  const pois = surveyDayTwo.getQuestionByName('pois').value
  const vert = surveyDayTwo.getQuestionByName('vert').value
  await postAnswer('PollDay2', { jaune, pois, vert })
}

async function postAnswerDayThree() {
  const jaune = surveyDayThree.getQuestionByName('jaune').value
  const pois = surveyDayThree.getQuestionByName('pois').value
  const vert = surveyDayThree.getQuestionByName('vert').value
  await postAnswer('PollDay3', { jaune, pois, vert })
}


async function postAnswer(tableName, answers) {
  await base(tableName).create([
    {
      'fields': answers
    }
  ])
  cookies.set(tableName, true)
  location.reload()
}

</script>
