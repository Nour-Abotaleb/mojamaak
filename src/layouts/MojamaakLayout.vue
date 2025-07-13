<script setup>
import { ref, provide } from 'vue';
import Sidebar from './Sidebar.vue';
import MojamaakHeader from './MojamaakHeader.vue';

const isSidebarOpen = ref(false);
provide('isSidebarOpen', isSidebarOpen);
</script>

<template>
  <div class="flex h-screen bg-gray-50 dark:bg-[#111827]">
    <!-- Sidebar -->
    <div class="w-0 md:w-64 md:ms-8">
      <Sidebar />
    </div>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col">
      <!-- Header only spans the content area -->
      <MojamaakHeader />

      <!-- Main Page Content -->
      <div class="flex-1 overflow-auto py-4 md:pe-4 scrollbar-hide">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrolllbar-hide::-webkit-scrollbar {
    display: none;
}
</style>
