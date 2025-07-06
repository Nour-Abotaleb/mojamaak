<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const direction = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));
</script>

<template>
    <section class="bg-white dark:bg-gray-800 font-shamel overflow-hidden" :dir="direction">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16" data-aos-duration="1700" data-aos="fade-up">
                <h2
                    class="font-shamel mb-7 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    {{ t("features.mainFeatures") }}
                </h2>
                <p class="text-gray-500 sm:text-lg dark:text-gray-400">
                    {{ t("features.systemAdvantages") }}
                </p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0" data-aos-duration="1700"
                data-aos="fade-up">
                <div>
                    <div class="bg-white lg:mx-auto border-2 border-gray-200 shadow-lg flex justify-center items-center
                         mb-4 rounded-lg bg-primary-100 h-12 w-12 dark:bg-primary-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22V20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M12 18V16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M12 14V11C12 7.13 15.13 4 19 4H22" stroke="#292D32" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2 4H5C8.87 4 12 7.13 12 11V12V14" stroke="#292D32" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 2L2 4L4 6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M20 2L22 4L20 6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h3 class="mb-2 text-[17px] font-bold dark:text-white mt-2">
                        إدارة المجمعات والشقق بسهولة
                    </h3>
                    <ul class="text-gray-500 px-2 text-[13px] font-[500] list-disc dark:text-gray-400">
                        <li>إضافة وتعديل المجمعات السكنية والوحدات السكنية بسهولة</li>
                        <li>متابعة حالة الشقق (متاحة / مشغولة)</li>
                    </ul>
                </div>
                <div class="mt-5">
                    <div class="bg-white lg:mx-auto border-2 border-gray-200 shadow-lg flex justify-center items-center
                         mb-4 rounded-lg bg-primary-100 h-12 w-12 dark:bg-primary-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22V20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M12 18V16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M12 14V11C12 7.13 15.13 4 19 4H22" stroke="#292D32" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2 4H5C8.87 4 12 7.13 12 11V12V14" stroke="#292D32" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 2L2 4L4 6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M20 2L22 4L20 6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h3 class="mb-2 text-[17px] font-bold dark:text-white mt-2">
                        متابعة عمليات الدفع والاشتراكات
                    </h3>
                    <ul class="text-gray-500 px-2 text-[13px] font-[500] list-disc dark:text-gray-400">
                        <li>تسجيل الدفعات المالية وجدولة المدفوعات</li>
                        <li>إصدار فواتير وتقارير مالية دورية </li>
                    </ul>
                </div>
                <div class="mt-5">
                    <div class="bg-white lg:mx-auto border-2 border-gray-200 shadow-lg flex justify-center items-center
                         mb-4 rounded-lg bg-primary-100 h-12 w-12 dark:bg-primary-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22V20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M12 18V16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M12 14V11C12 7.13 15.13 4 19 4H22" stroke="#292D32" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2 4H5C8.87 4 12 7.13 12 11V12V14" stroke="#292D32" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 2L2 4L4 6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M20 2L22 4L20 6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h3 class="mb-2 text-[17px] font-bold dark:text-white mt-2">
                        نظام طلبات الصيانة الذكي
                    </h3>
                    <ul class="text-gray-500 px-2 text-[13px] font-[500] list-disc dark:text-gray-400">
                        <li>استقبال طلبات الصيانة من السكان ومعالجتها بكفاءة</li>
                        <li>إسناد الطلبات لشركات الصيانة المعتمدة وتتبع حالتها </li>
                    </ul>

                </div>

                <div class="mt-5">
                    <div class="bg-white lg:mx-auto border-2 border-gray-200 shadow-lg flex justify-center items-center
                         mb-4 rounded-lg bg-primary-100 h-12 w-12 dark:bg-primary-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22V20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M12 18V16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M12 14V11C12 7.13 15.13 4 19 4H22" stroke="#292D32" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2 4H5C8.87 4 12 7.13 12 11V12V14" stroke="#292D32" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 2L2 4L4 6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M20 2L22 4L20 6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h3 class="mb-2 text-[17px] font-bold dark:text-white mt-2">
                        إشعارات وتنبيهات لحظية
                    </h3>
                    <ul class="text-gray-500 px-2 text-[13px] font-[500] list-disc dark:text-gray-400">
                        <li>إرسال رسائل تنبيهية مباشرة للسكان والإداريين</li>
                        <li>استلام إشعارات حول المدفوعات الصيانة. والعروض الجديدة.</li>
                    </ul>

                </div>

            </div>
        </div>
    </section>
</template>

<style scoped></style>
