<template>
  <nav class="flex items-center justify-between bg-green flex-wrap p-6">
    <button class="flex items-center flex-shrink-0 text-white mr-6">
      <svg
        class="h-8 w-8"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        @click="goTo()"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <polyline points="5 12 3 12 12 3 21 12 19 12" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <rect x="10" y="12" width="4" height="4" />
      </svg>
    </button>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <button
          @click="goTo('investments')"
          class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
        >
          Investments
        </button>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = (page = '') => {
  router.push(`/${page}`)
}
</script>

<style>
.bg-green {
  background-color: #10a37f;
}
</style>
