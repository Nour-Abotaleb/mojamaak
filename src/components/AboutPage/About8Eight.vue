<script setup>
import { computed, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import siteApi from "../../interceptors/SiteInterceptor";

const { t, locale } = useI18n();
// Sample FAQ data (you can replace this with your own questions and answers)
// const faqs = ref([
//   {
//     question: t("faq.q1"),
//     answer: t("faq.a1"),
//     isOpen: false,
//   },
//   {
//     question: t("faq.q2"),
//     answer: t("faq.a2"), 
//     isOpen: false,
//   },
//   {
//     question: t("faq.q3"), 
//     answer: t("faq.a3"),
//     isOpen: false,
//   },
//   {
//     question: t("faq.q4"),
//     answer:  t("faq.a4"), 
//     isOpen: false,
//   },
// ]);

const faqs = ref([]);

const fetchFaqs = async () => {
    try {
        const res = await siteApi.get('/api/home?faqs_limit=5');
        faqs.value = res.data.data.faqs || [];
    } catch (error) {
        console.error('Error fetching partners:', error);
    }
}

onMounted(() => {
    fetchFaqs();
})

// Function to toggle FAQ open/close state
const toggleFAQ = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
  faqs.value.forEach((faq, i) => {
    if (i !== index) {
      faq.isOpen = false;
    }
  });
};

const direction = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));
</script>

<template>
  <section class="bg-white dark:bg-gray-900 font-shamel overflow-hidden" :dir="direction">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-20 lg:px-6">
      <div class="max-w-screen-md mx-auto mb-8" data-aos-duration="1700" data-aos="fade-up">
        <h2
          class="font-shamel text-center mb-6 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {{ t('faq.title') }}
        </h2>
        <p class="font-shamel text-center mb-7 text-lg tracking-tight font-normal text-gray-600 dark:text-white">
           {{ t('faq.intro') }}
        </p>
      </div>
      <div data-aos-duration="1700" data-aos="fade-left"
        class="gap-12 items-center py-6 px-4 mx-auto max-w-screen-md lg:grid grid-cols-1 lg:px-4 justify-between">
        <!-- FAQ List -->
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" :class="`
                      ${
                        faq.isOpen
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : 'bg-white dark:bg-gray-800'
                      }
                      hover:bg-gray-100 dark:hover:bg-gray-700
                       p-3 rounded-xl transition duration-100`">
            <button @click="toggleFAQ(index)" :class="`ltr:text-left rtl:text-right font-shamel font-medium
                              w-full flex justify-between items-center py-4 text-lg text-gray-900
                                   dark:text-white rounded-xl transition duration-100 focus:outline-none`">
              <span class="flex items-center">
                <span
                  class="mx-3 text-[#a0a4af] border-2 border-[#a0a4af] rounded-full flex items-baseline justify-center text-center !h-6 !w-6 min-w-6 min-h-6">
                  {{ faq.isOpen ? "−" : "+" }}
                </span>
                {{ faq.question }}</span>
              <span class="text-2xl"></span>
            </button>
            <div v-if="faq.isOpen" class="mx-12 pb-4 text-gray-600 dark:text-gray-400 text-base">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ensure smooth transitions for the accordion */
button:focus {
  outline: none;
}

/* Styling for the FAQ section to match the image */
.space-y-4>div {
  transition: all 0.3s ease-in-out;
}
</style>
