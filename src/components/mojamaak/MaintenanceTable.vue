<script setup>
import { ref } from "vue";

// Sample table data
const Maintenance = ref([
  { id: 1, apartments: 'A-10', name: "محمد العتيبي", department: 'سباكة', requestAddress: 'تسريب مياه',  date: "2023-07-01", selected: false },
  { id: 2, apartments: 'A-10', name: "محمد العتيبي", department: 'سباكة', requestAddress: 'تسريب مياه',  date: "2023-07-02", selected: false },
  { id: 3, apartments: 'A-10', name: "محمد العتيبي", department: 'سباكة', requestAddress: 'تسريب مياه',  date: "2023-07-03", selected: false },
]);

const selectAll = ref(false);

// Watch and sync all checkboxes with selectAll
const toggleAll = () => {
  Maintenance.value.forEach((b) => (b.selected = selectAll.value))
};

const toggleIndividual = () => {
  selectAll.value = Maintenance.value.every((b) => b.selected);
};
</script>

<template>
  <div class="bg-white dark:bg-[#1F2937] p-6 shadow-md">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-xl font-bold text-gray-800 dark:text-white">إدارة طلبات الصيانة</h2>
        <p class="text-gray-600 dark:text-gray-300">طلبات الصيانة</p>
      </div>
      <button class="bg-[#38A6DE] text-white px-4 py-2 rounded hover:bg-[#2c8bbd]">إضافة جهة صيانة جديدة +</button>
    </div>

      <div class="relative flex gap-2 items-center">
        <div class="border border-gray-400 rounded px-6 py-1.5 text-gray-400">Filter</div>
        <input
          type="text"
          placeholder="بحث"
          class="w-full border border-gray-400 rounded-md py-2 pr-4 pl-10 text-right placeholder-gray-400 dark:placeholder-gray-400 text-sm dark:bg-[#374151] dark:border-gray-600 dark:text-gray-100 focus:outline-none"
        />
      </div>
    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full table-auto dark:border-gray-600">
        <thead class="bg-gray-50 dark:bg-gray-700">
          <tr class="text-right text-sm text-gray-600 dark:text-gray-300">
            <th class="p-3">التسلسل</th>
            <th class="p-3">
              <input type="checkbox" v-model="selectAll" @change="toggleAll" class="me-2 text-[#38A6DE] rounded"/>
              <span class="ml-2">الشقة</span>
            </th>
            <th class="p-3">الساكن</th>
            <th class="p-3">القسم</th>
            <th class="p-3">عنوان الطلب</th>
            <th class="p-3">التاريخ</th>
            <th class="p-3">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(b, index) in Maintenance"
            :key="b.id"
            class="text-right text-sm border-t border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <td class="p-3 dark:text-gray-100 font-bold">{{ index + 1 }}</td>
            <td class="p-3 flex items-center gap-2">
              <input type="checkbox" v-model="b.selected" @change="toggleIndividual" class="me-2 text-[#38A6DE] rounded"/>
              <span class="dark:text-gray-100">{{ b.apartments }}</span>
            </td>
            <td class="p-3 dark:text-gray-100">{{ b.name }}</td>
            <td class="p-3 dark:text-gray-100">{{ b.department }}</td>
            <td class="p-3 dark:text-gray-100">{{ b.requestAddress }}</td>
            <td class="p-3 dark:text-gray-100">{{ b.date }}</td>
            <td class="p-3 flex gap-2">
              <button class="text-blue-500 hover:underline">تعديل</button>
              <button class="text-red-500 hover:underline">حذف</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
