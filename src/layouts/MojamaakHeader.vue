<template>
  <header class="flex justify-between items-center px-6 py-4 bg-gray-100 rounded-tl-3xl shadow-md">
    <!-- Left: Profile and icons -->
    <div class="flex items-center space-x-4 rtl:space-x-reverse">

    <!-- Right: Title -->
    <div class="flex items-center space-x-2 rtl:space-x-reverse">
      <h1 class="text-2xl font-bold text-[#38A6DE]">معلومات المجمع</h1>
    </div>
    
    <!-- Icons -->
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
    <IconButton icon="mail" />
    <IconButton icon="chat" />
    <IconButton icon="bell" />
    </div>
    </div>

    <!-- Center: Search -->
    <div class="flex-grow max-w-md mx-8">
      <div class="relative">
        <input
          type="text"
          placeholder="ما الذي تبحث عنه"
          class="w-full border border-[#38A6DE] rounded-md py-2 pr-4 pl-10 text-right placeholder-[#38A6DE] text-sm focus:outline-none"
        />
      </div>
    </div>

    <!-- Profile -->
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
    <!-- <img src="/profile.jpg" alt="Profile" class="w-12 h-12 rounded-full object-cover" /> -->
    <div class="text-sm">
        <p class="font-bold text-gray-900">Mena Akhnoukh</p>
        <p class="text-gray-600 text-xs">CEO & CO-Founder</p>
        <p class="text-[#38A6DE] text-xs">admin@wanesah.com</p>
    </div>
    </div>
  </header>
</template>

<script setup>

</script>
