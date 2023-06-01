<template>
  <div>
    <h3 class="py-5">Maillot jaune</h3>
    <table-lite
      :is-loading="tableJaune.isLoading"
      :columns="tableJaune.columns"
      :rows="tableJaune.rows"
      :total="tableJaune.totalRecordCount"
      @is-finished="tableJaune.isLoading = false"
    />
  </div>
  <div>
    <h3 class="py-5">Maillot vert</h3>
    <table-lite
      :is-loading="tableVert.isLoading"
      :columns="tableVert.columns"
      :rows="tableVert.rows"
      :total="tableVert.totalRecordCount"
      @is-finished="tableVert.isLoading = false"
    />
  </div>
  <div>
    <h3 class="py-5">Maillot à pois</h3>
    <table-lite
      :is-loading="tablePois.isLoading"
      :columns="tablePois.columns"
      :rows="tablePois.rows"
      :total="tablePois.totalRecordCount"
      @is-finished="tablePois.isLoading = false"
    />
  </div>
</template>

<script setup>
import TableLite from 'vue3-table-lite'
import { reactive } from 'vue'
import Airtable from 'airtable'
import _ from 'lodash'

const state = reactive({
  resultsTotal: {}
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
state.resultsTotal = {
  jaune: Object.entries(_.countBy(resultsTotal.map(e => e.jaune))).map(([k, v]) => {
    return {
      player: k,
      score: v
    }
  }),
  vert: Object.entries(_.countBy(resultsTotal.map(e => e.vert))).map(([k, v]) => {
    return {
      player: k,
      score: v
    }
  }),
  pois: Object.entries(_.countBy(resultsTotal.map(e => e.pois))).map(([k, v]) => {
    return {
      player: k,
      score: v
    }
  })
}
const tableJaune = reactive({
  isLoading: false,
  columns: [
    {
      label: 'Joueur',
      field: 'player',
      width: '10%',
      isKey: true
    },
    {
      label: 'Score',
      field: 'score',
      width: '5%'
    }
  ],
  rows: state.resultsTotal.jaune,
  totalRecordCount: state.resultsTotal.jaune.length
})

const tableVert = reactive({
  isLoading: false,
  columns: [
    {
      label: 'Joueur',
      field: 'player',
      width: '10%',
      isKey: true
    },
    {
      label: 'Score',
      field: 'score',
      width: '5%'
    }
  ],
  rows: state.resultsTotal.vert,
  totalRecordCount: state.resultsTotal.vert.length
})

const tablePois = reactive({
  isLoading: false,
  columns: [
    {
      label: 'Joueur',
      field: 'player',
      width: '10%',
      isKey: true
    },
    {
      label: 'Score',
      field: 'score',
      width: '5%'
    }
  ],
  rows: state.resultsTotal.pois,
  totalRecordCount: state.resultsTotal.pois.length
})

</script>
