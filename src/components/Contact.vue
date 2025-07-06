<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const direction = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));
</script>

<template>
    <section class=" dark:bg-gray-800 font-shamel py-12 sm:py-20 overflow-hidden" :dir="direction">
        <div class="max-w-screen-xl mx-auto px-4 ">
            <div data-aos-duration="1700" data-aos="fade-left"
                class="max-w-full mx-auto text-center bg-gray-50 dark:bg-gray-800  rounded-lg p-8 sm:p-12">
                <!-- Heading -->
                <h2
                    class="font-shamel text-center mb-6 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    لا تزال لديك أسئلة ؟
                </h2>
                <!-- Subheading -->
                <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">
                    انضم إلي أكثر من +4000 مجمعع سكني يعتمدون علي مجمعك لإدارة ممتلكاتهم بكفاءة!
                </p>
                <!-- Buttons -->
                <div class="flex justify-center gap-4">
                    <button class="px-4 py-3 bg-[#38a6de] text-white rounded-lg hover:bg-[#38a6de] transition-colors">
                        {{ t('pricing.start') }}
                    </button>
                    <button
                        class="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white
                         hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        تعرف على المزيد
                    </button>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
/* Custom styling for handwritten text look (if needed) */
.text-right {
    font-family: 'Caveat', cursive;
    /* You can use a handwritten font like Caveat */
}
</style>