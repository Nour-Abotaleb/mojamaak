<script setup>
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import siteApi from '../../interceptors/SiteInterceptor';

const { t, locale } = useI18n();
const direction = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'));

const packages = ref([]);

const fetchPackages = async () => {
    try {
        const res = await siteApi.get('/api/home?packages_limit=5');
        packages.value = res.data.data.packages || [];
    } catch (error) {
        console.error('Error fetching packages:', error);
    }
};

onMounted(() => {
    fetchPackages();
});
</script>

<template>
    <section class="overflow-hidden bg-white dark:bg-gray-900 font-shamel" :dir="direction">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16" data-aos="fade-left" data-aos-duration="1500">
                <h6 class="mb-5 text-sm font-bold text-[#38a6de] dark:text-white">{{ t('pricing.pricing') }}</h6>
                <h2 class="mb-7 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    {{ t('pricing.choosePlan') }}
                </h2>
                <p class="text-gray-500 sm:text-lg dark:text-gray-400">
                    {{ t('pricing.choosePlanDesc') }}
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    v-for="(pkg, index) in packages"
                    :key="index"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    class="relative bg-white border dark:border-gray-700 shadow-lg rounded-xl p-6 dark:bg-gray-800 flex flex-col"
                >
                    <!-- Popular Label -->
                    <template v-if="pkg.is_popular">
                        <p class="font-[600] text-center text-[12px] text-[#38a6de] absolute top-[-24px] right-0 sm:right-[-20px]">
                            {{ t('pricing.popular1') }}
                        </p>
                        <img src="../../assets/arrow-down.png" class="absolute w-12 top-[-20px] right-[52px]" alt="" />
                    </template>

                    <h6 class="text-center mt-8 mb-2 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        {{ pkg.price }}
                    </h6>
                    <h3 class="mb-2 text-[15px] text-center font-bold dark:text-white">{{ pkg.name }}</h3>
                    <p class="text-gray-500 text-[13px] text-center font-[600] mb-6 dark:text-gray-400">
                        {{ pkg.description }}
                    </p>

                    <!-- Features -->
                    <div class="flex flex-col gap-3 mb-4">
                        <p
                            v-for="(feature, fIndex) in pkg.features"
                            :key="fIndex"
                            class="text-gray-700 dark:text-white inline-flex gap-2 items-center mt-2 font-[500] text-[15px]"
                        >
                            <svg
                                class="w-6 h-6 bg-[#d3f8f6] rounded-full text-[#38a6de]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 11.917 9.724 16.5 19 7.5"
                                />
                            </svg>
                            {{ feature }}
                        </p>
                    </div>

                    <button
                        class="mt-auto w-full font-bold text-white bg-[#38a6de] hover:bg-[#38a6de] focus:ring-0 focus:outline-none rounded-lg text-sm px-5 py-3.5 text-center"
                    >
                        {{ t('pricing.start') }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
