<template>
  <div id="survey" />
</template>

<script>
import 'survey-core/defaultV2.min.css'
import { StylesManager } from 'survey-core'
import {Survey} from 'survey-knockout-ui'
import { pollTdmJson } from '@/data/pollTdm.js'

StylesManager.applyTheme('defaultV2')

export default {
  mounted() {
    const survey = new Survey(pollTdmJson)
    survey.render('survey')
  }
}
</script>
