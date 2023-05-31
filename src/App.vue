<template>
  <div class="flex flex-col h-screen justify-between">
    <DuchNavBar class="h-14 z-10" />
    <Suspense>
      <router-view class="mb-auto px-5 sm:px-20 sm:py-20 z-0" />
    </Suspense>
  </div>
</template>

<script setup>
import DuchNavBar from '@/components/section/DuchNavBar.vue';</script>
