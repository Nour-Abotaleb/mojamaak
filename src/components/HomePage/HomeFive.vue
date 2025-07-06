<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const { t, locale } = useI18n();

const direction = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));

const complexes = [
    {
        name: t('complexes.riyan'),
        price: t('complexes.price25'),
        image:
            "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?uid=R118249704&ga=GA1.1.696324772.1728654570&semt=ais_hybrid&w=740",
    },
    {
        name: t('complexes.rahat'),
        price: t('complexes.price25'),
        image:
            "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?uid=R118249704&ga=GA1.1.696324772.1728654570&semt=ais_hybrid&w=740",
    },
    {
        name: t('complexes.zahia'),
        price: t('complexes.price25'),
        image:
            "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?uid=R118249704&ga=GA1.1.696324772.1728654570&semt=ais_hybrid&w=740",
    },
    {
        name: t('complexes.yasmine'),
        price: t('complexes.price40'),
        image:
            "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?uid=R118249704&ga=GA1.1.696324772.1728654570&semt=ais_hybrid&w=740",
    },
    {
        name: t('complexes.riyan'),
        price: t('complexes.price25'),
        image:
            "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?uid=R118249704&ga=GA1.1.696324772.1728654570&semt=ais_hybrid&w=740",
    },
    {
        name: t('complexes.rahat'),
        price: t('complexes.price25'),
        image:
            "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?uid=R118249704&ga=GA1.1.696324772.1728654570&semt=ais_hybrid&w=740",
    },
    {
        name: t('complexes.zahia'),
        price: t('complexes.price25'),
        image:
            "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?uid=R118249704&ga=GA1.1.696324772.1728654570&semt=ais_hybrid&w=740",
    },
    {
        name: t('complexes.yasmine'),
        price: t('complexes.price40'),
        image:
            "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?uid=R118249704&ga=GA1.1.696324772.1728654570&semt=ais_hybrid&w=740",
    },
];

const testimonials = [
    // { image: "src/assets/svg 1.svg" },
    // { image: "src/assets/svg 2.svg" },
    // { image: "src/assets/svg 3.svg" },
    { image: "src/assets/svg 4.svg" },
    { image: "src/assets/svg 5.svg" },
    { image: "src/assets/svg 6.svg" },
    { image: "src/assets/svg 7.svg" },
    { image: "src/assets/svg 8.svg" },
    { image: "src/assets/svg 9.svg" },
    { image: "src/assets/svg 4.svg" },
    { image: "src/assets/svg 5.svg" },
    { image: "src/assets/svg 6.svg" },
    { image: "src/assets/svg 7.svg" },
    { image: "src/assets/svg 8.svg" },
    { image: "src/assets/svg 9.svg" },

];
</script>

<template>
    <section
        class="overflow-hidden bg-white dark:bg-gray-800" :dir="direction">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-0" data-aos-duration="2000"  data-aos="fade-down">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <div class="lg:flex-row flex-col flex items-center justify-between w-full">
                    <h2 class="mb-7 text-4xl font-shamel font-bold text-gray-900 dark:text-white">
                        {{ t('homeFive.title') }}
                    </h2>
                    <a href="#"
                        class="mb-5 lg:mb-0 font-shamel text-[13px] text-gray-700 justify-center hover:text-gray-600 inline-flex items-center px-4 py-1 rounded-lg border-2 border-gray-300 font-bold dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-300">

                        {{ t('homeFive.showAll') }}
                    </a>
                </div>
                <p class="mb-7 text-[15px] font-shamel font-[500]">
                    {{ t('homeFive.desc') }}
                </p>
            </div>

            <div class="relative slider-container" data-aos="fade-down" data-aos-duration="2000" >
                <Swiper :modules="[Navigation]" :navigation="{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }" :dir="direction" :breakpoints="{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 20 },
                }" class="mySwiper ">
                    <SwiperSlide v-for="(complex, index) in complexes" :key="index">
                        <div
                            class="bg-white dark:bg-gray-900 dark:border-gray-700 rounded-xl shadow-md border p-3 overflow-hidden w-full">
                            <img :src="complex.image" alt="Complex Image" class="rounded-xl w-full h-72 object-cover" />
                            <div class="pt-4">
                                <h3 class="my-2 text-lg font-shamel font-bold text-gray-900 dark:text-white">
                                    {{ complex.name }}
                                </h3>
                                <p class="pb-4 text-sm text-gray-600 dark:text-gray-200">
                                    {{ complex.price }} - {{ t('homeFive.perMonth') }}
                                </p>
                                <a href="#"
                                    class="mt-3 mb-1 inline-block px-4 py-2 bg-[#38a6de] dark:text-black text-white rounded-lg font-shamel font-[500]
                                     hover:bg-blue-400">
                                    {{ t('homeFive.details') }}
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div class="swiper-button-prev-custom nav-button"></div>
                <div class="swiper-button-next-custom nav-button"></div>
            </div>
            <div data-aos-duration="2000" data-aos="fade-down" class="mt-32 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <div class="lg:flex-row flex-col flex items-center justify-between w-full">
                    <h2 class="mb-7 text-4xl font-shamel font-bold text-gray-900 dark:text-white">
                        {{ t('partnersSection.title') }}
                    </h2>
                    <a href="#"
                        class="mb-5 lg:mb-0 font-shamel text-[13px] text-gray-700 
                        justify-center hover:text-gray-600 inline-flex items-center px-4 py-1 rounded-lg border-2
                         border-gray-300 font-bold dark:text-gray-400 dark:border-gray-600 dark:hover:text-gray-300">
                        {{ t('partnersSection.showAll') }}
                    </a>
                </div>
                <p class="mb-7 text-[15px] font-shamel font-[500]">
                    {{ t('partnersSection.description') }}
                </p>
            </div>

            <!-- السلايدر مع الأزرار الخارجية -->
            <div class="relative slider-container" data-aos-duration="2000"  data-aos="fade-down">
                <Swiper :modules="[Navigation]" :navigation="{
                    nextEl: '.prev-button',
                    prevEl: '.next-button',
                }" :dir="direction" :slidesPerView="5" :breakpoints="{
                    320: { slidesPerView: 3, spaceBetween: 20 },
                    640: { slidesPerView: 5, spaceBetween: 20 },
                    768: { slidesPerView: 6, spaceBetween: 20 },
                    1024: { slidesPerView: 9, spaceBetween: 20 },
                }" class="mySwiper">
                    <SwiperSlide v-for="(complex, index) in testimonials" :key="index">
                        <div
                            class="bg-white dark:bg-gray-900 dark:border-gray-700 rounded-xl shadow-md border p-3 overflow-hidden">
                            <img :src="complex.image" alt="Complex Image" class="rounded-xl w-full h-20 object-cover" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <!-- أزرار التنقل المخصصة -->
                <div class="prev-button nav-button"></div>
                <div class="next-button nav-button"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* تخصيص أنماط السلايدر */
.mySwiper {
    padding: 10px 0;
    width: 100% !important;
}

/* أنماط الحاوية والأزرار */
.slider-container {
    position: relative;
    padding: 0 60px;
    /* إضافة مساحة على الجانبين للأزرار */
}

@media screen and (max-width: 768px) {
    .slider-container {
        padding: 0px;
    }
}

/* أنماط أزرار التنقل المخصصة */
.nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 15%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-button:hover {
    background: rgba(255, 255, 255, 1);
}

/* أضف أيقونات الأسهم */
.nav-button::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-top: 2px solid #000;
    border-right: 2px solid #000;
}

/* تحديد موضع الأزرار حسب الاتجاه */
[dir="rtl"] .swiper-button-next-custom,
.next-button {
    left: 10px;
    right: auto;
}

[dir="rtl"] .swiper-button-next-custom::after,
.next-button:after {
    transform: rotate(225deg);
}

[dir="rtl"] .swiper-button-prev-custom,
.prev-button {
    right: 1px;
    left: auto;
}

[dir="rtl"] .swiper-button-prev-custom::after,
.prev-button:after {
    transform: rotate(45deg);
}

/* عند استخدام الاتجاه LTR */
[dir="ltr"] .swiper-button-next-custom,
.next-button {
    right: 1px;
    left: auto;
}

[dir="ltr"] .swiper-button-next-custom::after,
.next-button:after {
    transform: rotate(45deg);
}

[dir="ltr"] .swiper-button-prev-custom,
.prev-button {
    left: 10px;
    right: auto;
}

[dir="ltr"] .swiper-button-prev-custom::after,
.prev-button:after {
    transform: rotate(225deg);
}

[dir="ltr"] .swiper-slide {
    margin-left: 0px !important;
    margin-right: 20px !important;
}

/* ضبط عرض الشريحة */
:deep(.swiper-slide) {
    height: auto;
}
</style>
