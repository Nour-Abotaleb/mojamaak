<template>
  <div class="bg-white dark:bg-[#1F2937] p-6 shadow-md">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-xl font-bold text-gray-800 dark:text-white">معلومات المجمع</h2>
        <p class="dark:text-gray-200 text-gray-600">تفاصيل المجمع السكني</p>
      </div>
      <button class="bg-[#38A6DE] text-white px-4 py-2 rounded">تعديل البيانات +
      </button>
    </div>

    <!-- Name, Address -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">اسم المجمع *</label>
        <input type="text" class="w-full border rounded px-3 py-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="مجمع النخيل السكني" />
      </div>
      <div class="flex items-start">
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">العنوان *</label>
          <input type="text" class="w-full border rounded px-3 py-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="الرياض، حي النرجس" />
        </div>
        <div class="pt-7 flex flex-col gap-2">
          <button class="text-gray-500 dark:text-gray-300 hover:text-blue-500"><i class="fas fa-pen"></i></button>
          <button class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    </div>

    <!-- Phone, Email -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">رقم التليفون *</label>
        <div class="flex gap-2">
          <input type="text" class="flex-1 border rounded px-3 py-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="+1 (555) 000-0000" />
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">البريد الالكتروني *</label>
        <div class="relative">
          <input type="email" class="w-full border rounded px-3 py-3 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="email@example.com" />
          <i class="fas fa-envelope absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 dark:text-gray-300"></i>
        </div>
      </div>
    </div>

    <!-- Description -->
    <div class="mb-6">
      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">الوصف</label>
      <input type="text" class="w-full border rounded px-3 py-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="مجمع فاخر بمرافق متكاملة" />
    </div>

    <!-- Logo & Main Image -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <!-- Logo -->
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">شعار المجمع *</label>
        <div class="flex items-center gap-2">
          <div
            class="w-full h-32 rounded border dark:border-gray-500 bg-center bg-cover bg-no-repeat bg-gray-100 dark:bg-gray-700"
            :style="{ backgroundImage: 'url(/uploads/logo.png)' }"
          ></div>
          <div class="flex flex-col gap-2">
            <button class="text-gray-500 dark:text-gray-300 hover:text-blue-500"><i class="fas fa-pen"></i></button>
            <button class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
          </div>
        </div>
      </div>

      <!-- Main Image -->
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">الصورة الأساسية *</label>
        <div class="flex items-center gap-2">
          <div
            class="w-full h-32 rounded border dark:border-gray-500 bg-center bg-cover bg-no-repeat bg-gray-100 dark:bg-gray-700"
            :style="{ backgroundImage: 'url(/uploads/main.jpg)' }"
          ></div>
          <div class="flex flex-col gap-2">
            <button class="text-gray-500 dark:text-gray-300 hover:text-blue-500"><i class="fas fa-pen"></i></button>
            <button class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
          </div>
        </div>
      </div>
      <!-- Sub Images -->
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">الصور الفرعية *</label>
        <div class="grid grid-cols-4 gap-2">
          <div
            v-for="n in 8"
            :key="n"
            class="relative w-full h-[3.75rem] rounded border dark:border-gray-500 bg-center bg-cover bg-no-repeat bg-gray-100 dark:bg-gray-700"
            :style="{ backgroundImage: `url(/uploads/sub${n}.jpg)` }"
          >
      
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<style scoped>
    input {
        border: 2px solid #e1e1e1;
        border-radius: 5px;
    }
</style>
