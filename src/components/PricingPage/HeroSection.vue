<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const direction = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));
</script>

<template>
    <!-- -->
    <section class="bg-white dark:bg-gray-800 font-shamel overflow-hidden" :dir="direction">
        <div class="pt-8 px-4 mx-auto max-w-screen-xl sm:pt-20 lg:px-6">
            <div class="max-w-screen-md mx-auto mb-8" data-aos-duration="1700" data-aos="fade-up">
                <h2
                    class="font-shamel text-center mb-6 text-2xl md:text-4xl  tracking-tight font-extrabold text-gray-900 dark:text-white">
                    خطط الأسعار في مجعمك
                </h2>
                <p
                    class="font-shamel text-center mb-7 text-lg tracking-tight font-medium text-gray-600 dark:text-white">
                    اختر الخطة التي تناسب احتياجاتك لإدارة المجمعات السكنية بفعالية. نقدم لك مجمعك خططا مرنة تناسب مختلف
                    المجمعات السكنية. سواء كنت تدير مجمعا صغيرا أو مشروعا سكنيا متكاملا </p>
            </div>
            <div class="gap-12 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-4
                justify-between
            ">

            </div>

        </div>
    </section>
</template>

<style scoped></style>
