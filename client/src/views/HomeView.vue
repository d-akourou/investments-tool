<template>
  <section
    class="text-gray-600 body-font h-screen flex bg-gray-900 bg-svg-constellation-gray-100 relative"
  >
    <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
      <div class="lg:w-2/3 w-full animate-fade-in-down">
        <!-- Change the heading text -->
        <h1 class="md:text-6xl text-3xl mb-2 font-bold text-white tracking-tight leading-tight">
          Demo
        </h1>
        <!-- Change the subheading text -->
        <h1 class="md:text-6xl text-3xl mb-4 font-bold text-white tracking-tight leading-tight">
          Ask your questions
        </h1>
        <!-- Change the paragraph text -->
        <p class="mt-8 mb-16 md:leading-relaxed leading-normal text-white tracking-tight text-xl">
          Get quick answers
        </p>
        <!-- Update the button texts and links -->
        <RouterLink
          class="uppercase rounded-sm bg-green font-bold text-white px-8 py-4 mx-auto mr-4 hidden md:inline"
          to="/investments"
          >Investments</RouterLink
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<style>
.bg-green {
  background-color: #10a37f;
}
</style>
