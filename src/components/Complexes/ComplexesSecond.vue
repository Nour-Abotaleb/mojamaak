<script setup>
import { computed, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import siteApi from "../../interceptors/SiteInterceptor";

const { t, locale } = useI18n();

const complexes = ref([]);

const fetchComplexes = async () => {
    try {
        const res = await siteApi.get('/api/complexes?per_page=10&page=1');
        complexes.value = res.data.data.complexes || [];

    } catch (error) {
        console.error('Error fetching complexes:', error);
    }
};

onMounted(() => {
    fetchComplexes();
});

// const cards = ref([
//   {
//     title: "مجمع النخيل السكني",
//     location: "بغداد - حي اليرموك",
//     count: "12 وحدة",
//     discount: "خصم 10% علي الإيجارات السنوية",
//     image:
//       "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=500",
//   },
//   {
//     title: "مجمع النخيل السكني",
//     location: "بغداد - حي اليرموك",
//     count: "12 وحدة",
//     discount: "خصم 10% علي الإيجارات السنوية",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500",
//   },
//   {
//     title: "مجمع النخيل السكني",
//     location: "بغداد - حي اليرموك",
//     count: "12 وحدة",
//     discount: "خصم 10% علي الإيجارات السنوية",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500",
//   },
//   {
//     title: "مجمع النخيل السكني",
//     location: "بغداد - حي اليرموك",
//     count: "12 وحدة",
//     discount: "خصم 10% علي الإيجارات السنوية",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500",
//   },
//   {
//     title: "مجمع النخيل السكني",
//     location: "بغداد - حي اليرموك",
//     count: "12 وحدة",
//     discount: "خصم 10% علي الإيجارات السنوية",
//     image:
//       "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=500",
//   },
//   {
//     title: "مجمع النخيل السكني",
//     location: "بغداد - حي اليرموك",
//     count: "12 وحدة",
//     discount: "خصم 10% علي الإيجارات السنوية",
//     image:
//       "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=500",
//   },
//   {
//     title: "مجمع النخيل السكني",
//     location: "بغداد - حي اليرموك",
//     count: "12 وحدة",
//     discount: "خصم 10% علي الإيجارات السنوية",
//     image:
//       "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=500",
//   },
//   {
//     title: "مجمع النخيل السكني",
//     location: "بغداد - حي اليرموك",
//     count: "12 وحدة",
//     discount: "خصم 10% علي الإيجارات السنوية",
//     image:
//       "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=500",
//   },
//   {
//     title: "مجمع النخيل السكني",
//     location: "بغداد - حي اليرموك",
//     count: "12 وحدة",
//     discount: "خصم 10% علي الإيجارات السنوية",
//     image:
//       "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=500",
//   },
// ]);
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800"
    data-aos-duration="1700"
    data-aos="fade-left"
  >
    <div class="container mx-auto p-4 max-w-screen-xl">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 font-shamel"
      >
        <div
          v-for="(complex, index) in complexes"
          :key="index"
          class="card bg-white dark:bg-gray-900 dark:border-gray-700 font-[500] border rounded-xl overflow-hidden"
        >
           <!-- <img
            :src="complex.images[2].image_path"
            alt="Complex Image"
            class="w-full h-48 object-cover rounded-xl"
          /> -->
           <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500"
            alt="Complex Image"
            class="w-full h-48 object-cover rounded-xl"
          />
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2 text-right dark:text-white">
              {{ complex.name }}
            </h3>
            <p class="text-gray-600 dark:text-white text-sm text-right mt-5">
              {{ t('partnersSection.locationText') }}
              <span class="text-black dark:text-gray-200">
                {{ complex.location }}
              </span>
            </p>
            <p class="text-gray-600 dark:text-white text-sm text-right">
                {{ t('partnersSection.units') }}:
              <span class="text-black dark:text-gray-200">
                {{ t('partnersSection.count') }}
              </span>
            </p>
            <p class="text-gray-600 dark:text-white text-sm text-right">
               {{ t('partnersSection.offer') }}:
              <span class="text-black dark:text-gray-200">
                {{ t('partnersSection.discount') }}
              </span>
            </p>
            <button
              class="mt-4 bg-transparent border border-[#d8dade] dark:border-gray-700 dark:text-gray-300 text-[#636770] font-bold hover:bg-gray-100 gap-3 dark:hover:bg-gray-700 py-3 px-4 rounded-lg w-auto flex items-center justify-center mx-auto"
            >
              {{ t("compounds.viewDetails")
              }}<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.5 22H20.5"
                  stroke="#636770"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 3.5L19 17.5"
                  stroke="#636770"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 13.77V3.5H15.27"
                  stroke="#636770"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <nav
        class="border-t pt-10 mt-10 w-full dark:border-t-gray-700"
        aria-label="Page navigation example"
      >
        <ul class="justify-between w-full inline-flex -space-x-px text-sm">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white dark:bg-gray-900 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 font-bold dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                class="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>

              {{ t('complexes.previous') }}</a
            >
          </li>
          <div class="flex gap-2">
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-full"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-full"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="flex items-center justify-center px-3 h-8 text-gray-900 rounded-full bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-full"
                >...</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hidden sm:flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-full"
                >8</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hidden sm:flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-full"
                >9</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hidden sm:flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-full"
                >10</a
              >
            </li>
          </div>

          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >{{ t('complexes.next') }}
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
