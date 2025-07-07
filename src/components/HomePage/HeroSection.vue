<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import siteApi from '../../interceptors/SiteInterceptor';

const { t, locale } = useI18n();

const direction = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'));
const textAlign = computed(() => (locale.value === 'ar' ? 'right' : 'left'));

// const slideData = [
//     {
//         image: 'https://www.onlinesociety.co.in/images/vikas6.jpg',
//         titleKey: 'slider.welcome',
//         descriptionKey: 'slider.welcomeDescription',
//     },
//     {
//         image: 'https://www.onlinesociety.co.in/images/vikas6.jpg',
//         titleKey: 'slider.future',
//         descriptionKey: 'slider.futureDescription',
//     },
//     {
//         image: 'https://www.onlinesociety.co.in/images/vikas6.jpg',
//         titleKey: 'slider.creativity',
//         descriptionKey: 'slider.creativityDescription',
//     },
// ];

const slideData = ref([]);

const slides = computed(() =>
    slideData.value.map((slide) => ({
        image: slide.image,
        title: slide.title || t(slide.titleKey),
        subtitle: slide.subtitle ||t(slide.descriptionKey),
    }))
);

const currentSlide = ref(0);

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index) => {
    currentSlide.value = index;
};

let slideInterval;

onMounted(async () => {
    try {
        const res = await siteApi.get('/api/home?sliders_limit=5');
        slideData.value = res.data.data.sliders || [];

    } catch (error) {
        console.error('Failed to load sliders:', error);
    }

    slideInterval = setInterval(nextSlide, 99000);
});

onUnmounted(() => {
    clearInterval(slideInterval);
});
</script>

<template>
    <div :dir="direction" data-aos="fade-up" data-aos-duration="2000" class="relative w-full max-w-full mx-auto">
        <div class="overflow-hidden">
            <div class="flex transition-transform duration-500 ease-in-out" :style="{
                transform: direction === 'rtl'
                    ? `translateX(${currentSlide * 100}%)`
                    : `translateX(-${currentSlide * 100}%)`
            }">
                <div v-for="(slide, index) in slides" :key="index" class="min-w-full h-[550px] relative">
                    <img :src="slide.image" alt="Slide" class="w-full h-full object-cover" />
                    <div class="px-4 lg:px-12 absolute inset-0 flex flex-col justify-center text-white
                     bg-[rgba(96,198,249,0.8)] dark:bg-[rgba(59,55,52,0.6)]" :style="{ textAlign }">
                        <h2 class="text-4xl lg:text-7xl font-bold mb-4" data-aos="right">{{ slide.title }}</h2>
                        <p class="text-2xl max-w-2xl">{{ slide.subtitle }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 flex mx-1">
            <div v-for="(slide, index) in slides" :key="index"
                class="h-1 cursor-pointer transition-all duration-300 mx-1"
                :class="index === currentSlide ? 'w-8 bg-[#38a6de]' : 'w-4 bg-gray-300'" @click="goToSlide(index)">
            </div>
        </div>
    </div>
</template>

<style scoped></style>