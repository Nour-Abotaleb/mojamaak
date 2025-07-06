<script setup>
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';
import { defineAsyncComponent } from 'vue';

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="flex-grow">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>