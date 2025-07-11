<script setup>
import Sidebar from './Sidebar.vue';
import MojamaakHeader from './MojamaakHeader.vue';
</script>

<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <div class="w-64 ms-8">
      <Sidebar />
    </div>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col">
      <!-- Header only spans the content area -->
      <MojamaakHeader />

      <!-- Main Page Content -->
      <div class="flex-1 overflow-auto p-4">
        <router-view />
      </div>
    </div>
  </div>
</template>
