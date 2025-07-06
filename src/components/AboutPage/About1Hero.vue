<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const direction = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'));
</script>

<template>
    <section data-aos="fade-up" data-aos-duration="2000" class="bg-gray-100 dark:bg-gray-900 overflow-hidden"
        :dir="direction">
        <div class="gap-4 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-4">
            <div data-aos-duration="1700" data-aos="fade-left"
                class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-7 text-2xl md:text-4xl  font-shamel font-bold text-gray-900 dark:text-white">
                    {{ t('about.know') }}
                </h2>
                <p class="mb-7 text-[16px] w-full font-shamel text-gray-900 dark:text-white font-[500]">

                    {{ t('about.knowDesc') }}
                </p>
            </div>
            <div data-aos-duration="1700" data-aos="fade-right" class="mx-auto mt-[50px] lg:mt-0 ">
                <img class="w-full rounded-xl" src="../../assets/aboutHero.png" alt="unkown image">

            </div>

        </div>
    </section>
</template>

<style scoped></style>