<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const direction = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'));
</script>

<template>
    <section class="overflow-hidden bg-white dark:bg-gray-900 font-shamel" :dir="direction">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16" data-aos="fade-left" data-aos-duration="1500">
                <h6 class="font-shamel mb-5 text-sm font-bold text-[#38a6de] dark:text-white">
                    {{ t('pricing.pricing') }}</h6>

                <h2 class="font-shamel mb-7 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    {{ t('pricing.choosePlan') }}</h2>
                <p class="text-gray-500 sm:text-lg dark:text-gray-400">{{ t('pricing.choosePlanDesc') }}</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500"
                class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">

                <div class="relative bg-white border dark:border-gray-700 shadow-lg rounded-xl p-6 dark:bg-gray-800">
                    <p
                        class="popular-label font-[600] text-center text-[12px] text-[#38a6de] 
                        absolute top-[-24px] right-0 sm:right-[-20px]">
                        {{ t('pricing.popular1') }}
                    </p>
                    <img src="../../assets/arrow-down.png" class="absolute w-12 top-[-20px] right-[52px]" alt="">
                    <h6
                        class="font-shamel text-center mt-8 mb-2 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        150,000 IQD
                    </h6>
                    <h3 class="mb-2 text-[15px] text-center font-bold dark:text-white">{{ t('pricing.basic') }}</h3>
                    <p class="text-gray-500 text-[13px] text-center font-[600] mb-20 dark:text-gray-400">
                        {{ t('pricing.monthly') }}
                    </p>
                    <div class="flex flex-col gap-3">
                        <p
                            class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]">
                            <svg class="w-6 h-6 bg-[#d3f8f6] rounded-full relative top-[-3px] text-[#38a6de]"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                            {{ t('pricing.unlimited') }}
                        </p>
                        <p
                            class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]">
                            <svg class="w-6 h-6 bg-[#d3f8f6] rounded-full relative top-[-3px] text-[#38a6de]"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                            {{ t('pricing.unlimited1') }}
                        </p>
                        <p
                            class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]">
                            <svg class="w-6 h-6 bg-[#d3f8f6] rounded-full relative top-[-3px] text-[#38a6de]"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                            {{ t('pricing.unlimited2') }}
                        </p>
                    </div>
                    <button
                        class="w-full mt-[171px] font-bold text-white bg-[#38a6de] hover:bg-[#38a6de] focus:ring-0 focus:outline-none rounded-lg text-sm px-5 py-3.5 text-center">
                        {{ t('pricing.start') }}
                    </button>
                </div>
                <div class="bg-white border dark:border-gray-700 shadow-lg rounded-xl p-6 dark:bg-gray-800">
                    <h6
                        class="font-shamel text-center mt-6 mb-2 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        150,000 IQD</h6>

                    <h3 class="mb-2 text-[15px] text-center font-bold dark:text-white">{{ t('pricing.basic1') }}
                    </h3>
                    <p class="text-gray-500 text-[13px] text-center font-[600] mb-20 dark:text-gray-400">{{
                        t('pricing.monthly') }}</p>
                    <div class="flex flex-col gap-3">

                        <p class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]
                        ">
                            <svg class="w-6 h-6 bg-[#d3f8f6] rounded-full relative top-[-3px] text-[#38a6de]"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>

                            {{ t('pricing.unlimited') }}
                        </p>
                        <p class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]
                        ">
                            <svg class="w-6 h-6 bg-[#d3f8f6] rounded-full relative top-[-3px] text-[#38a6de]"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>

                            {{ t('pricing.unlimited1') }}
                        </p>
                        <p class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]
                        ">
                            <svg class="w-6 h-6 bg-[#d3f8f6] rounded-full relative top-[-3px] text-[#38a6de]"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                            {{ t('pricing.unlimited2') }}
                        </p>
                        <p class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]
                        ">
                            <svg class="w-6 h-6 bg-[#d3f8f6] rounded-full relative top-[-3px] text-[#38a6de]"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>

                            {{ t('pricing.unlimited3') }}

                        </p>
                        <p class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]
                        ">
                            <svg class="w-6 h-6 bg-[#d3f8f6] rounded-full relative top-[-3px] text-[#38a6de]"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>

                            {{ t('pricing.unlimited4') }}

                        </p>
                    </div>

                    <button
                        class="w-full mt-20 font-bold text-white bg-[#38a6de] hover:bg-[#38a6de] focus:ring-0 focus:outline-none  rounded-lg text-sm px-5 py-3.5 text-center">
                        {{ t('pricing.start') }}
                    </button>
                </div>
                <div class="bg-white border dark:border-gray-700 shadow-lg rounded-xl p-6 dark:bg-gray-800">
                    <h6
                        class="font-shamel text-center mt-6 mb-2 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        150,000 IQD</h6>

                    <h3 class="mb-2 text-[15px] text-center font-bold dark:text-white">{{ t('pricing.basic2') }}
                    </h3>
                    <p class="text-gray-500 text-[13px] text-center font-[600] mb-20 dark:text-gray-400">{{
                        t('pricing.monthly') }}</p>
                    <div class="flex flex-col gap-3">

                        <p class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]
                        ">
                            <svg class="w-6 h-6 bg-[#d3f8f6] rounded-full relative top-[-3px] text-[#38a6de]"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                            {{ t('pricing.unlimited') }}

                        </p>
                        <p class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]
                        ">
                            <svg class="w-6 h-6 bg-[#d3f8f6] rounded-full relative top-[-3px] text-[#38a6de]"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                            {{ t('pricing.unlimited1') }}

                        </p>
                        <p class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]
                        ">
                            <svg class="w-6 h-6 bg-[#d3f8f6] rounded-full relative top-[-3px] text-[#38a6de]"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                            {{ t('pricing.unlimited2') }}

                        </p>
                        <p class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]
                        ">
                            <svg class="w-6 h-6 bg-[#d3f8f6] rounded-full relative top-[-3px] text-[#38a6de]"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                            {{ t('pricing.unlimited3') }}
                        </p>
                        <p class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]
                        ">
                            <svg class="w-6 h-6 bg-[#d3f8f6] rounded-full relative top-[-3px] text-[#38a6de]"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>
                            {{ t('pricing.unlimited4') }}
                        </p>
                        <p class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]
                        ">
                            <svg class="w-6 h-6 bg-[#d3f8f6] rounded-full relative top-[-3px] text-[#38a6de]"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>

                            {{ t('pricing.unlimited5') }}

                        </p>
                    </div>

                    <button
                        class="w-full mt-10 font-bold text-white bg-[#38a6de] hover:bg-[#38a6de] focus:ring-0 focus:outline-none  rounded-lg text-sm px-5 py-3.5 text-center">
                        {{ t('pricing.start') }}
                    </button>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped></style>