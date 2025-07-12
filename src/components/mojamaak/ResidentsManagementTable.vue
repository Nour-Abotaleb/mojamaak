<script setup>
import { ref } from "vue";

// Sample table data
const Residents = ref([
  { id: 1, name: "محمد العتيبي", phone: 50343333333333, apartments: 'A-10', buildingType: 'ملك',  date: "2023-07-01", selected: false },
  { id: 2, name: "محمد العتيبي", phone: 43434343564, apartments: 'A-30', buildingType: 'إيجار',  date: "2023-07-02", selected: false },
  { id: 3, name: "محمد العتيبي", phone: 495439403943, apartments: 'A20', buildingType: 'ملك',  date: "2023-07-03", selected: false },
]);

const selectAll = ref(false);

// Watch and sync all checkboxes with selectAll
const toggleAll = () => {
  Residents.value.forEach((b) => (b.selected = selectAll.value))
};

const toggleIndividual = () => {
  selectAll.value = Residents.value.every((b) => b.selected);
};
</script>

<template>
  <div class="bg-white dark:bg-[#1F2937] p-6 shadow-md">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-xl font-bold text-gray-800 dark:text-white">إدارة السكان</h2>
        <p class="text-gray-600 dark:text-gray-300">تسجيل السكان في النظام وتتبع بياناتهم</p>
      </div>
      <button class="bg-[#38A6DE] text-white px-4 py-2 rounded hover:bg-[#2c8bbd]">إضافة الساكن +</button>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full table-auto dark:border-gray-600">
        <thead class="bg-gray-50 dark:bg-gray-700">
          <tr class="text-right text-sm text-gray-600 dark:text-gray-300">
            <th class="p-3">التسلسل</th>
            <th class="p-3">
              <input type="checkbox" v-model="selectAll" @change="toggleAll" class="me-2 text-[#38A6DE] rounded"/>
              <span class="ml-2">الاسم</span>
            </th>
            <th class="p-3">رقم الهاتف</th>
            <th class="p-3">الشقة</th>
            <th class="p-3">نوع السكن</th>
            <th class="p-3">تاريخ السكن</th>
            <th class="p-3">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(b, index) in Residents"
            :key="b.id"
            class="text-right text-sm border-t border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <td class="p-3 dark:text-gray-100 font-bold">{{ index + 1 }}</td>
            <td class="p-3 flex items-center gap-2">
              <input type="checkbox" v-model="b.selected" @change="toggleIndividual" class="me-2 text-[#38A6DE] rounded"/>
              <span class="dark:text-gray-100">{{ b.name }}</span>
            </td>
            <td class="p-3 dark:text-gray-100">{{ b.phone }}</td>
            <td class="p-3 dark:text-gray-100">{{ b.apartments }}</td>
            <td class="p-3 dark:text-gray-100">{{ b.buildingType }}</td>
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
