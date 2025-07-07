<script setup>
import { useI18n } from "vue-i18n";
import { computed, onMounted, ref } from "vue";
import siteApi from "../../interceptors/SiteInterceptor";

const { t, locale } = useI18n();

const partners = ref([]);

const fetchPartners = async () => {
    try {
        const res = await siteApi.get('/api/partners?per_page=5&page=1');
        const fetchedPartners = res.data.data.partners || [];

        partners.value = fetchedPartners.map((partner, index) => ({
            ...partner, // نسخ البيانات الأصلية
            image: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=500',
            rating: '4.5'
        }));
    } catch (error) {
        console.error('Error fetching partners:', error);
    }
};

onMounted(() => {
    fetchPartners();
});

const getStars = (rating) => {
    const ratingValue = parseFloat(rating) || 0; // تحويل التقييم إلى رقم أو 0 إذا لم يكن موجودًا
    const fullStars = Math.floor(ratingValue); // عدد النجوم الممتلئة
    const hasHalfStar = ratingValue % 1 >= 0.5; // تحقق من وجود نصف نجمة
    const emptyStars = 5 - Math.ceil(ratingValue); // عدد النجوم الفارغة
    return { fullStars, hasHalfStar, emptyStars };
}
</script>

<template>
    <div class="bg-white dark:bg-gray-800" data-aos-duration="1700" data-aos="fade-left">
        <div class="font-shamel container gap-4 mx-auto p-4 max-w-screen-xl grid grid-cols-2 sm:flex">

            <form class="w-full md:w-[170px] mx-auto">
                <select id="countries" class="bg-white shadow border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>{{ t('maintenance.maintenanceGeneral') }}</option>
                    <option value="US">1</option>
                    <option value="CA">2</option>
                    <option value="FR">3</option>
                    <option value="DE">4</option>
                </select>
            </form>

            <form class="w-full md:w-[170px] mx-auto">
                <select id="countries" class="bg-white shadow border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>{{ t('maintenance.maintenanceLatest') }}</option>
                    <option value="US">1</option>
                    <option value="CA">2</option>
                    <option value="FR">3</option>
                    <option value="DE">4</option>
                </select>
            </form>

            <form class="grid col-span-2 w-full mx-auto shadow rounded-lg md:ltr:ml-3 md:rtl:mr-3" style="direction: ltr;">
                <label for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">{{ t('nav.search') }}</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3  pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                        class="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        :placeholder="t('nav.search') " required />
                </div>
            </form>
        </div>

        <div>
            <div class="grid grid-cols-1 max-w-3xl mt-24 mx-5 sm:mx-auto gap-9 font-shamel">
                <div v-for="(partner, index) in partners" :key="index"
                    class="bg-white dark:bg-gray-900 border rounded-xl dark:border-gray-700">
                    <div class="flex-col md:flex-row card font-[500] justify-between rounded-xl overflow-hidden flex">
                        <div class="p-4 flex flex-col justify-center ltr:items-end rtl:items-start">
                            <h3 class="text-lg font-bold mb-2 ltr:text-left rtl:text-right dark:text-white">{{ partner.name }}</h3>
                            <div class="space-y-2">
                                <p class="text-gray-600 dark:text-white text-sm ltr:text-left rtl:text-right mt-5">
                                     {{ t('partnersSection.locationText') }} <span class="text-black dark:text-gray-200">{{ t('partnersSection.location') }}</span>
                                </p>
                                <p class="text-gray-600 dark:text-white text-sm ltr:text-left rtl:text-right">
                                     {{ t('partnersSection.units') }}: <span class="text-black dark:text-gray-200">{{ t('partnersSection.count') }}</span>
                                </p>
                                <p class="text-gray-600 dark:text-white text-sm ltr:text-left rtl:text-right">
                                      {{ t('partnersSection.offer') }}: <span class="text-black dark:text-gray-200">{{ t('partnersSection.discount') }}</span>
                                </p>
                                <p class="text-gray-600 dark:text-white text-sm ltr:text-left rtl:text-right">
                                      {{ t('partnersSection.phoneText') }}: <span class="text-black dark:text-gray-200">{{ t('partnersSection.phone') || 'غير متوفر'
                                    }}</span>
                                </p>
                                <p class="text-gray-600 dark:text-white text-sm ltr:text-left rtl:text-right">
                                    {{ t('partnersSection.emailText') }}: <span class="text-black dark:text-gray-200">{{ t('partnersSection.email') || 'غير متوفر' }}</span>
                                </p>
                                <p class="text-gray-600 dark:text-white text-sm ltr:text-left rtl:text-right">{{ t('partnersSection.categoryText') }}: <span class="text-black dark:text-gray-200">{{ t('partnersSection.category') || 'غير متوفر'}}</span>
                                </p>
                                <p class="text-gray-600 flex dark:text-white text-sm ltr:text-left rtl:text-right">
                                     {{ t('partnersSection.rating') }}: 
                                    <span class="text-black dark:text-gray-200 flex items-center justify-end gap-1">
                                        <span style="direction: ltr;" v-for="n in getStars(partner.rating).fullStars" :key="'full-' + n">
                                            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.538 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.57-1.838-.197-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.27 9.397c-.783-.57-.381-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                                            </svg>
                                        </span>
                                        <span v-if="getStars(partner.rating).hasHalfStar">
                                            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 2.927c-.3-.921-1.603-.921-1.902 0L6.812 6.897a1 1 0 01-.95.69h-4.15c-.969 0-1.371 1.24-.588 1.81l3.357 2.44a1 1 0 01.364 1.118l-1.287 3.97c-.3.921.755 1.688 1.538 1.118l3.357-2.44a1 1 0 01.588 0v-9.906z" />
                                            </svg>
                                        </span>
                                        <span v-for="n in getStars(partner.rating).emptyStars" :key="'empty-' + n">
                                            <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.538 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.57-1.838-.197-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.27 9.397c-.783-.57-.381-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                                            </svg>
                                        </span>
                                        <!-- عرض النص إذا لم يكن هناك تقييم -->
                                        <span v-if="!partner.rating" class="text-gray-500">غير متوفر</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="rounded-xl overflow-hidden w-full md:w-96 h-80">
                            <img :src="partner.image" alt="Card Image"
                                class="p-3 object-cover w-full h-full rounded-[25px]" />
                        </div>
                    </div>
                    <button class="my-4 w-[94%] sm:w-[96%] mx-auto bg-[#38a6de] border border-[#38a6de] dark:border-gray-700 dark:text-gray-300
                         text-white font-bold hover:bg-[#38a6de] gap-3 dark:hover:bg-gray-700
                         py-3 rounded-lg flex items-center justify-center">
                         {{ t('maintenance.maintenanceRequest') }}
                    </button>
                </div>
            </div>
        <nav class="max-w-screen-xl mx-auto pb-20 px-2 border-t pt-10 mt-12 w-full dark:border-t-gray-700" aria-label="Page navigation example">
                <ul class="justify-between w-full inline-flex -space-x-px text-sm">
                    <li>
                        <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white dark:bg-gray-900
                             border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700
                              font-bold dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                            </svg>

                            {{ t('complexes.previous') }}</a>
                    </li>
                    <div class="flex gap-2">

                        <li>
                            <a href="#"
                                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-full">1</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-full">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page"
                                class="flex items-center justify-center px-3 h-8 text-gray-900 rounded-full bg-blue-50
                                hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-full">...</a>
                        </li>
                        <li>
                            <a href="#"
                                class="hidden sm:flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-full">8</a>
                        </li>
                        <li>
                            <a href="#"
                                class="hidden sm:flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-full">9</a>
                        </li>
                        <li>
                            <a href="#"
                                class="hidden sm:flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white rounded-full">10</a>
                        </li>
                    </div>

                    <li>
                        <a href="#"
                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ t('complexes.next') }}
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
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