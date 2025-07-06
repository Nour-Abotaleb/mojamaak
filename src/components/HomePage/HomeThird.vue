<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const direction = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'));
</script>

<template>
    <section 
        class="bg-white dark:bg-gray-900 font-shamel overflow-hidden" :dir="direction">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16" data-aos="fade-up" data-aos-duration="1500">
                <h6 class="font-shamel mb-5 text-sm font-bold text-[#38a6de] dark:text-white">
                    {{ t('features.whyYourComplex') }}</h6>

                <h2 class="font-shamel mb-7 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    {{ t('features.mainFeatures') }}</h2>
                <p class="text-gray-500 sm:text-lg dark:text-gray-400">{{ t('features.systemAdvantages') }}</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                <div class="bg-gray-50 rounded-lg p-6 dark:bg-gray-800">
                    <div
                        class="bg-[#38a6de] shadow-lg flex justify-center items-center mb-4 w-8 h-8 rounded-lg bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M2 12.8804V11.1204C2 10.0804 2.85 9.22043 3.9 9.22043C5.71 9.22043 6.45 7.94042 5.54 6.37042C5.02 5.47042 5.33 4.30042 6.24 3.78042L7.97 2.79042C8.76 2.32042 9.78 2.60042 10.25 3.39042L10.36 3.58042C11.26 5.15042 12.74 5.15042 13.65 3.58042L13.76 3.39042C14.23 2.60042 15.25 2.32042 16.04 2.79042L17.77 3.78042C18.68 4.30042 18.99 5.47042 18.47 6.37042C17.56 7.94042 18.3 9.22043 20.11 9.22043C21.15 9.22043 22.01 10.0704 22.01 11.1204V12.8804C22.01 13.9204 21.16 14.7804 20.11 14.7804C18.3 14.7804 17.56 16.0604 18.47 17.6304C18.99 18.5404 18.68 19.7004 17.77 20.2204L16.04 21.2104C15.25 21.6804 14.23 21.4004 13.76 20.6104L13.65 20.4204C12.75 18.8504 11.27 18.8504 10.36 20.4204L10.25 20.6104C9.78 21.4004 8.76 21.6804 7.97 21.2104L6.24 20.2204C5.33 19.7004 5.02 18.5304 5.54 17.6304C6.45 16.0604 5.71 14.7804 3.9 14.7804C2.85 14.7804 2 13.9204 2 12.8804Z"
                                stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                    </div>
                    <h3 class="mb-2 text-[17px] font-bold dark:text-white mt-20">{{ t('features.apartmentManagement') }}
                    </h3>
                    <p class="text-gray-500 text-[13px] font-[600] dark:text-gray-400">{{
                        t('features.apartmentManagementDesc') }}</p>
                    <a href="#" class="text-[#38a6de] inline-flex gap-2 items-center mt-2 text-primary-600 hover:underline
                        font-bold">
                        {{ t('common.learnMore') }}<svg class=" ltr:rotate-180 w-6 h-6 text-[#38a6de] dark:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 12h14M5 12l4-4m-4 4 4 4" />
                        </svg>

                    </a>
                </div>
                <div class="bg-gray-50 rounded-lg p-6 dark:bg-gray-800">
                    <div
                        class="bg-[#38a6de] shadow-lg flex justify-center items-center mb-4 w-8 h-8 rounded-lg bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M18.4698 16.83L18.8598 19.99C18.9598 20.82 18.0698 21.4 17.3598 20.97L13.1698 18.48C12.7098 18.48 12.2599 18.45 11.8199 18.39C12.5599 17.52 12.9998 16.42 12.9998 15.23C12.9998 12.39 10.5398 10.09 7.49985 10.09C6.33985 10.09 5.26985 10.42 4.37985 11C4.34985 10.75 4.33984 10.5 4.33984 10.24C4.33984 5.68999 8.28985 2 13.1698 2C18.0498 2 21.9998 5.68999 21.9998 10.24C21.9998 12.94 20.6098 15.33 18.4698 16.83Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M13 15.2298C13 16.4198 12.56 17.5198 11.82 18.3898C10.83 19.5898 9.26 20.3598 7.5 20.3598L4.89 21.9098C4.45 22.1798 3.89 21.8098 3.95 21.2998L4.2 19.3298C2.86 18.3998 2 16.9098 2 15.2298C2 13.4698 2.94 11.9198 4.38 10.9998C5.27 10.4198 6.34 10.0898 7.5 10.0898C10.54 10.0898 13 12.3898 13 15.2298Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                    <h3 class="mb-2 text-[17px] font-bold dark:text-white mt-20">{{ t('features.maintenanceTracking') }}
                    </h3>
                    <p class="text-gray-500 text-[13px] font-[600] dark:text-gray-400">{{
                        t('features.maintenanceTrackingDesc') }}</p>
                    <a href="#" class="text-[#38a6de] inline-flex gap-2 items-center mt-2 text-primary-600 hover:underline
                        font-bold">
                        {{ t('common.learnMore') }}<svg class="ltr:rotate-180 w-6 h-6 text-[#38a6de] dark:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 12h14M5 12l4-4m-4 4 4 4" />
                        </svg>

                    </a>
                </div>

                <div class="bg-gray-50 rounded-lg p-6 dark:bg-gray-800">
                    <div
                        class="bg-[#38a6de] shadow-lg flex justify-center items-center mb-4 w-8 h-8 rounded-lg bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 6V18" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h3 class="mb-2 text-[17px] font-bold dark:text-white mt-20">{{ t('features.financialManagement') }}
                    </h3>
                    <p class="text-gray-500 text-[13px] font-[600] dark:text-gray-400">
                        {{ t('features.financialManagementDesc') }}</p>
                    <a href="#" class="text-[#38a6de] inline-flex gap-2 items-center mt-2 text-primary-600 hover:underline
                        font-bold">
                        {{ t('common.learnMore') }}<svg class="ltr:rotate-180 w-6 h-6 text-[#38a6de] dark:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 12h14M5 12l4-4m-4 4 4 4" />
                        </svg>

                    </a>
                </div>
                <div class="bg-gray-50 rounded-lg p-6 dark:bg-gray-800">
                    <div
                        class="bg-[#38a6de] shadow-lg flex justify-center items-center mb-4 w-8 h-8 rounded-lg bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9.31993 13.2805H12.4099V20.4805C12.4099 21.5405 13.7299 22.0405 14.4299 21.2405L21.9999 12.6405C22.6599 11.8905 22.1299 10.7205 21.1299 10.7205H18.0399V3.52046C18.0399 2.46046 16.7199 1.96046 16.0199 2.76046L8.44994 11.3605C7.79994 12.1105 8.32993 13.2805 9.31993 13.2805Z"
                                stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M8.5 4H1.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.5 20H1.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.5 12H1.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                    <h3 class="mb-2 text-[17px] font-bold dark:text-white mt-20">{{ t('features.instantNotifications')
                        }}</h3>
                    <p class="text-gray-500 text-[13px] font-[600] dark:text-gray-400">
                        {{ t('features.instantNotificationsDesc') }}</p>
                    <a href="#" class="text-[#38a6de] inline-flex gap-2 items-center mt-2 text-primary-600 hover:underline
                        font-bold">
                        {{ t('common.learnMore') }}<svg class="ltr:rotate-180 w-6 h-6 text-[#38a6de] dark:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 12h14M5 12l4-4m-4 4 4 4" />
                        </svg>

                    </a>
                </div>

            </div>

        </div>
    </section>
</template>

<style scoped></style>