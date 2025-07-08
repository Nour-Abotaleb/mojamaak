<script setup>
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
</script>

<template>

    <div class="w-full bg-white dark:bg-gray-800">
        <div class="font-shamel  grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto px-4">
            <div class="bg-white dark:bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-[#38a6de]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                        </path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 my-2 dark:text-white">{{ t('partnersSection.phoneText') }}</h3>
                <p class="text-gray-600 mb-5 dark:text-gray-400">{{ t('contact.workingDays') }}</p>
                <a href="tel:+9647701234567" class="text-[#38a6de] hover:underline">+964 770 123 4567</a>
            </div>

            <!-- بطاقة العنوان -->
            <div class="bg-white  dark:bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">

                    <svg class="w-6 h-6 text-[#38a6de]" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path
                            d="M11.9999 13.4304C13.723 13.4304 15.1199 12.0336 15.1199 10.3104C15.1199 8.5873 13.723 7.19043 11.9999 7.19043C10.2768 7.19043 8.87988 8.5873 8.87988 10.3104C8.87988 12.0336 10.2768 13.4304 11.9999 13.4304Z"
                            stroke="#38a6de" stroke-width="1.5" />
                        <path
                            d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                            stroke="#38a6de" stroke-width="1.5" />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 my-2 dark:text-white">{{ t('contact.headOffice') }}</h3>
                <p class="text-gray-600 mb-5 dark:text-white">{{ t('contact.welcomeHeadOffice') }}</p>
                <p class="text-[#38a6de] hover:underline">شارع XYZ. بغداد العراق </p>
            </div>
            <div class="bg-white dark:bg-gray-900  rounded-lg p-6 flex flex-col items-center text-center">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">

                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <path
                            d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                            stroke="#38a6de" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#38a6de"
                            stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 my-2 dark:text-white">{{ t('partnersSection.emailText') }}</h3>
                <p class="text-gray-600 mb-5 dark:text-white">{{ t('contact.ourTeam') }}</p>
                <a href="mailto:support@mogamak.com" class="text-[#38a6de] hover:underline">support@mogamak.com</a>
            </div>

        </div>
    </div>
</template>

<style scoped></style>