<script setup>
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import siteApi from '../../interceptors/SiteInterceptor';

const { t, locale } = useI18n();

const direction = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'));

const features = ref([]);

const fetchFeatures = async () => {
    try {
        const res = await siteApi.get('/api/home?features_limit=5');
        features.value = res.data.data.features || [];
    } catch (error) {
        console.error('Error fetching features:', error);
    }
}

onMounted(() => {
    fetchFeatures();
})
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
            <div v-if="features.length" data-aos="fade-up" data-aos-duration="1500" class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                <div v-for="(feature, index) in features" :key="index" class="bg-gray-50 rounded-lg p-6 dark:bg-gray-800 flex flex-col justify-between">
                    <div
                        class="bg-[#38a6de] shadow-lg flex justify-center items-center mb-4 w-8 h-8 rounded-lg bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <img :src="feature.icon" class="w-6 h-6 text-white" alt="icon">
                    </div>
                    <h3 class="mb-2 text-[17px] font-bold dark:text-white mt-20">{{ feature.title }}
                    </h3>
                    <p class="text-gray-500 text-[13px] font-[600] dark:text-gray-400">{{ feature.description }}</p>
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
            </div>
            <div v-else class="text-center text-gray-500 dark:text-gray-400" data-aos="fade-up" data-aos-duration="1500">
                {{ t('common.noData') }}
            </div>
        </div>
    </section>
</template>
