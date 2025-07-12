<script setup>
import { ref } from "vue";

// Sample table data
const buildings = ref([
  { id: 1, name: "مبنى A", floors: 5, apartments: 20, date: "2023-07-01", selected: false },
  { id: 2, name: "مبنى B", floors: 4, apartments: 16, date: "2023-07-02", selected: false },
  { id: 3, name: "مبنى C", floors: 3, apartments: 12, date: "2023-07-03", selected: false },
]);

const selectAll = ref(false);

// Watch and sync all checkboxes with selectAll
const toggleAll = () => {
  buildings.value.forEach((b) => (b.selected = selectAll.value));
};

const toggleIndividual = () => {
  selectAll.value = buildings.value.every((b) => b.selected);
};
</script>

<template>
  <div class="bg-white dark:bg-[#1F2937] p-6 shadow-md">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-xl font-bold text-gray-800 dark:text-white">إدارة المباني والشقق</h2>
        <p class="text-gray-600 dark:text-gray-300">إضافة المباني داخل المجمع وتحديد الشقق المتوفرة فيها</p>
      </div>
      <button class="bg-[#38A6DE] text-white px-4 py-2 rounded hover:bg-[#2c8bbd]">إضافة مبنى +</button>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full table-auto dark:border-gray-600">
        <thead class="bg-gray-50 dark:bg-gray-700">
          <tr class="text-right text-sm text-gray-600 dark:text-gray-300">
            <th class="p-3">التسلسل</th>
            <th class="p-3">
              <input type="checkbox" v-model="selectAll" @change="toggleAll" class="me-2 text-[#38A6DE] rounded"/>
              <span class="ml-2">المبنى</span>
            </th>
            <th class="p-3">عدد الطوابق</th>
            <th class="p-3">عدد الشقق</th>
            <th class="p-3">تاريخ الإضافة</th>
            <th class="p-3">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(b, index) in buildings"
            :key="b.id"
            class="text-right text-sm border-t border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <td class="p-3 dark:text-gray-100 font-bold">{{ index + 1 }}</td>
            <td class="p-3 flex items-center gap-2">
              <input type="checkbox" v-model="b.selected" @change="toggleIndividual" class="me-2 text-[#38A6DE] rounded"/>
              <span class="dark:text-gray-100">{{ b.name }}</span>
            </td>
            <td class="p-3 dark:text-gray-100">{{ b.floors }}</td>
            <td class="p-3 dark:text-gray-100">{{ b.apartments }}</td>
            <td class="p-3 dark:text-gray-100">{{ b.date }}</td>
            <td class="p-3 flex gap-2">
              <button class="font-bold border rounded p-2 dark:text-gray-100">إضافة شقة</button>
              <button class="text-blue-500 hover:underline">تعديل</button>
              <button class="text-red-500 hover:underline">حذف</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
