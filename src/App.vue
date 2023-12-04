<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Api from './components/Api.vue';
</script>

<style>
@font-face {
  font-family: WW;
  src: url("../fonts/wwDigital.ttf");
}
</style>

<template>
  <header class="w-full">
    <div class="w-full">
      <Api class="w-full"></Api>

      <nav class="w-full flex flex-row justify-center gap-x-10 text-3xl text-white mt-3" style='font-family: WW;'>
        <RouterLink to="/" class="hover:underline">General</RouterLink>
        <RouterLink to="/IEM" class="hover:underline ">IEM</RouterLink>
        <RouterLink to="/ISC" class="hover:underline">ISC</RouterLink>
        <RouterLink to="/IE" class="hover:underline ">IE</RouterLink>
        <RouterLink to="/IER" class="hover:underline ">IER</RouterLink>
        <RouterLink to="/II" class="hover:underline">II</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

