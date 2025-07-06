<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const direction = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'));
</script>

<template>
    <section 
        class="bg-gray-100 dark:bg-gray-800 overflow-hidden" :dir="direction">
        <div class=" gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 ">
            <div data-aos="fade-left" data-aos-duration="1500" 
                class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-7 text-4xl font-shamel font-bold text-gray-900 dark:text-white">{{ t('aboutMojamaak.whatIsYourComplex') }}</h2>
                <p class="mb-7 text-[15px] font-shamel font-[500]">{{ t('aboutMojamaak.complexDescription') }}</p>
                <a href="#" class="font-shamel text-[13px] text-gray-700 justify-center hover:text-gray-600 inline-flex 
                    items-center px-4 py-1 rounded-lg border-2 border-gray-300 font-bold
                    dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-300">
                    {{ t('common.learnMore') }}
                </a>
            </div>
            <div data-aos="fade-right" data-aos-duration="1500" 
                class="grid grid-cols-1 gap-4 max-w-4xl mx-auto mt-[50px] lg:mt-0">
                <!-- مجموعة الصور العلوية (صورتان) -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex items-center justify-end">
                        <img class="w-[143px] h-52 object-cover"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                            :alt="t('about.personWorking')">
                    </div>
                    <div class="flex items-end">
                        <img class="w-[163px] h-32 object-cover"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                            :alt="t('about.personWorking')">
                    </div>
                </div>

                <!-- مجموعة الصور السفلية (ثلاث صور) -->
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <img class="w-full lg:w-[163px] h-32 object-cover"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                            :alt="t('about.personWorking')">
                    </div>
                    <div>
                        <img class="w-full h-52 object-cover"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                            :alt="t('about.personWorking')">
                    </div>
                    <div>
                        <img class="w-full lg:w-[163px] h-32 object-cover"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                            :alt="t('about.personWorking')">
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped></style>