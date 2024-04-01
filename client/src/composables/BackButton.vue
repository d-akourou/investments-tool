<template>
  <button
    type="button"
    class="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
  >
    <span @click="goToHomePage">Home</span>
  </button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goToHomePage = () => {
  router.push('/')
}
</script>
