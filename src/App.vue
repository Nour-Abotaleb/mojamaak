<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";

const route = useRoute();

// Match all routes that are admin/dashboard area
const isAdminLayout = computed(
  () => route.path.startsWith("/dashboard") || route.meta.layout === "admin"
);

const isDashboard = window.location.hostname.startsWith("compound");
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Only show Header if NOT admin layout -->
    <Header v-if="!isAdminLayout" />

    <main class="flex-grow">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>

    <!-- Only show Footer if NOT admin layout -->
    <Footer v-if="!isAdminLayout" />
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
