<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const direction = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));
</script>

<template>
    <!-- -->
    <section class="bg-white dark:bg-gray-800 font-shamel overflow-hidden" :dir="direction">
        <div class="mx-auto sm:py-2">
            <div class="gap-4 items-center mx-auto lg:grid lg:grid-cols-2 flex flex-col-reverse justify-between">
                <div data-aos-duration="1700" data-aos="fade-right" class="mx-auto mt-[50px] lg:mt-0 ">
                    <img class="w-full " src="../../assets/about6.PNG" alt="unkown image">
                </div>

                <div data-aos-duration="1700" data-aos="fade-left"
                    class="max-w-screen-md px-8 xl:px-[100px] 2xl:px-[150px] font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <div class="bg-[#f6eafe] rounded-full w-12 h-12 flex items-center justify-center mb-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M18.4698 16.83L18.8598 19.99C18.9598 20.82 18.0698 21.4 17.3598 20.97L13.1698 18.48C12.7098 18.48 12.2599 18.45 11.8199 18.39C12.5599 17.52 12.9998 16.42 12.9998 15.23C12.9998 12.39 10.5398 10.09 7.49985 10.09C6.33985 10.09 5.26985 10.42 4.37985 11C4.34985 10.75 4.33984 10.5 4.33984 10.24C4.33984 5.68999 8.28985 2 13.1698 2C18.0498 2 21.9998 5.68999 21.9998 10.24C21.9998 12.94 20.6098 15.33 18.4698 16.83Z"
                                stroke="#38a6de" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M13 15.2298C13 16.4198 12.56 17.5198 11.82 18.3898C10.83 19.5898 9.26 20.3598 7.5 20.3598L4.89 21.9098C4.45 22.1798 3.89 21.8098 3.95 21.2998L4.2 19.3298C2.86 18.3998 2 16.9098 2 15.2298C2 13.4698 2.94 11.9198 4.38 10.9998C5.27 10.4198 6.34 10.0898 7.5 10.0898C10.54 10.0898 13 12.3898 13 15.2298Z"
                                stroke="#38a6de" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h2 class="mb-7 text-lg md:text-xl font-shamel font-bold text-gray-900 dark:text-white">
                        {{ t('maintenance.title') }}
                    </h2>
                    <p
                        class="flex gap-2 items-center mb-7 text-[16px] w-full font-shamel text-[#6d7279] dark:text-white font-[500]">
                        <svg class="min-w-6 min-h-6 w-6 h-6 bg-[#f6eafe] rounded-full relative top-[-3px] text-[#38a6de]"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 11.917 9.724 16.5 19 7.5" />
                        </svg>
                         {{ t('maintenance.easyInterface') }}
                    </p>
                    <p
                        class="flex gap-2 items-center mb-7 text-[16px] w-full font-shamel text-[#6d7279] dark:text-white font-[500]">
                        <svg class="min-w-6 min-h-6 w-6 h-6 bg-[#f6eafe] rounded-full relative top-[-3px] text-[#38a6de]"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 11.917 9.724 16.5 19 7.5" />
                        </svg>
                         {{ t('maintenance.requestStatus') }}
                    </p>

                    <p
                        class="flex gap-2 items-center mb-7 text-[16px] w-full font-shamel text-[#6d7279] dark:text-white font-[500]">
                        <svg class="min-w-6 min-h-6 w-6 h-6 bg-[#f6eafe] rounded-full relative top-[-3px] text-[#38a6de]"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 11.917 9.724 16.5 19 7.5" />
                        </svg>
                         {{ t('maintenance.assignVendors') }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
