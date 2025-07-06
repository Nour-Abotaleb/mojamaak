<script setup>
import { onMounted, ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import searchIcon from "../assets/svg/search.svg";
import { RouterLink } from "vue-router";
const { t, locale } = useI18n();
const direction = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));
const currentYear = new Date().getFullYear();

const isDark = ref(
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
);

const logoSrc = computed(() => {
  if (isDark.value) {
    return locale.value === "ar"
      ? "../src/assets/logo white2.png"
      : "../src/assets/logo white.png";
  }
  return locale.value === "ar"
    ? "../src/assets/logo 2.png"
    : "../src/assets/logo 1.png";
});
</script>

<template>
  <div class="gap-16 items-center py-2 px-4 max-w-full lg:px-[9.5rem] aos-init aos-animate dark:bg-gray-800">
    <p class="text-right dark:text-white font-shamel relative">
      <!-- {{ t("partnersSection.lastUpdate") }} -->
    </p>
  </div>
  <footer :dir="direction" class="w-full font-shamel">
    <div class="bg-[#38a6de] text-white p-6 lg:p-10 dark:bg-gray-950 dark:text-gray-400">
      <div class="container mx-auto max-w-screen-xl">
        <div class="pt-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="flex flex-col">
            <h3 class="text-lg font-[500] mb-4 border-b-2 pb-2 border-gray-200">
              <!-- {{ t("footer.overview") }} -->
              روابط سريعة
            </h3>
            <ul class="space-y-2">
              <li>
                <RouterLink to="/" class="hover:underline">
                  {{ t("nav.home") }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/about" class="hover:underline">
                  {{ t("nav.about") }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/pricing" class="hover:underline">
                  {{ t("nav.pricing") }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" class="hover:underline">
                  {{ t("nav.contact") }}</RouterLink>
              </li>
            </ul>
          </div>

          <div class="flex flex-col">
            <h3 class="text-lg font-[500] mb-4 border-b-2 pb-2 border-gray-200">
              {{ t("footer.importantLinks") }}
            </h3>
            <ul class="space-y-2">
              <li>
                <RouterLink to="/complexes" class="hover:underline">
                  {{ t("nav.complexes") }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/partners" class="hover:underline">
                  {{ t("nav.partners") }}</RouterLink>

              </li>

            </ul>
          </div>

          <div class="flex flex-col">
            <h3 class="text-lg font-[500] mb-4 border-b-2 pb-2 border-gray-200">
              {{ t("footer.contactSupport") }}
            </h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:underline">{{
                  t("footer.customerCenter")
                }}</a>
              </li>
              <li>
                <a href="#" class="hover:underline">{{
                  t("footer.contactUs")
                }}</a>
              </li>
              <li>
                <a href="#" class="hover:underline">{{
                  t("footer.shareWithUs")
                }}</a>
              </li>
              <li>
                <a href="#" class="hover:underline">{{
                  t("footer.submitComplaint")
                }}</a>
              </li>
              <!-- <li>
                  <a href="#" class="hover:underline">{{
                    t("footer.reportCorruption")
                    }}</a>
                </li> -->
            </ul>
          </div>

          <div class="flex flex-col">
            <h3 class="text-lg font-[500] mb-4 border-b-2 pb-2 border-gray-200 ">
              <!-- {{ t("footer.accessibilityTools") }} -->
              تحميل التطبيق
            </h3>
            <div class="flex space-x-4 mb-5 rtl:space-x-reverse">
              <a href="#" class="border p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="h-6 w-6 text-white"
                  viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15.3996 2C15.5996 3.1 15.0996 4.2 14.4996 5C13.8996 5.8 12.7996 6.5 11.6996 6.4C11.4996 5.3 11.9996 4.3 12.5996 3.5C13.2996 2.7 14.3996 2.1 15.3996 2ZM18.5996 19.4C19.0996 18.6 19.3996 18.1 19.7996 17.2C16.6996 16 16.1996 11.6 19.2996 10C18.3996 8.8 17.0996 8.2 15.7996 8.2C14.8996 8.2 14.2996 8.4 13.6996 8.6C13.1996 8.8 12.7996 8.9 12.2996 8.9C11.6996 8.9 11.2996 8.7 10.6996 8.5C10.0996 8.3 9.49956 8.1 8.79956 8.1C7.39956 8.1 5.89956 8.9 4.99956 10.4C3.69956 12.4 3.89956 16.3 5.99956 19.5C6.89956 20.7 7.89955 22 9.19955 22C9.79955 22 10.0996 21.8 10.4996 21.7C10.9996 21.5 11.4996 21.3 12.2996 21.3C13.1996 21.3 13.5996 21.5 14.0996 21.7C14.4996 21.9 14.7996 22 15.3996 22C16.7996 22 17.7996 20.5 18.5996 19.4Z"
                    stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </a>
              <a href="#" class="border p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 32 32" width="32px"
                  height="32px">
                  <path stroke="currentColor"
                    d="M 13 4 C 10.97 4 9.4052969 5.7677656 9.4042969 9.0097656 C 9.4042969 11.126766 12.608219 16.5575 15.449219 21.3125 C 15.449219 9.0005 15.146 7.667 13 4 z M 19 4 C 16.812 7.604 16.550781 8.9995 16.550781 21.3125 C 19.391781 16.5575 22.595703 11.126766 22.595703 9.0097656 C 22.594703 5.7667656 21.03 4 19 4 z M 6 8 C 3.021 10.079 4.0009062 15.000422 5.5039062 16.607422 C 6.4969063 17.647422 10.35 19.52 14 22 L 6 8 z M 26 8 L 18 22 C 21.65 19.52 25.503094 17.647422 26.496094 16.607422 C 27.999094 15.000422 28.979 10.079 26 8 z M 2 16 C 2.048 21.542 5.4307969 23 7.7167969 23 L 13.431641 23 L 2 16 z M 30 16 L 18.568359 23 L 24.283203 23 C 26.569203 23 29.952 21.542 30 16 z M 5.1171875 24 C 5.4361875 25.654 6.1573281 27 8.2363281 27 C 10.315328 27 12.325641 25.8 13.431641 24 L 5.1171875 24 z M 18.568359 24 C 19.674359 25.8 21.684672 27 23.763672 27 C 25.842672 27 26.563813 25.654 26.882812 24 L 18.568359 24 z" />
                </svg>
              </a>
              <a href="#" class="border p-2 rounded-md">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" class="h-6 w-6 text-white" height="24"
                  viewBox="0 0 24 24" fill="none">
                  <path d="M11 18V21C11 21.5 10.6 22 10 22C9.4 22 9 21.5 9 21V18H11Z" stroke="currentColor"
                    stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15 18V21C15 21.5 14.6 22 14 22C13.4 22 13 21.5 13 21V18H15Z" stroke="currentColor"
                    stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M17 11V16C17 17.1 16.1 18 15 18H9C7.9 18 7 17.1 7 16V11C7 9.9 7.9 9 9 9H15C16.1 9 17 9.9 17 11Z"
                    stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M5 11V15C5 15.6 4.6 16 4 16C3.4 16 3 15.6 3 15V11C3 10.4 3.4 10 4 10C4.6 10 5 10.4 5 11Z"
                    stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M21 11V15C21 15.6 20.6 16 20 16C19.4 16 19 15.6 19 15V11C19 10.4 19.4 10 20 10C20.6 10 21 10.4 21 11Z"
                    stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M13 18H11" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M9.6 7H14.4C15.3 7 16 6.25 16 5.28571C16 2.92857 14.2 1 12 1C9.8 1 8 2.92857 8 5.28571C8 6.25 8.7 7 9.6 7Z"
                    stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </a>
            </div>

            <h3 class="text-lg font-[500] mb-4 border-b-2 pb-2 border-gray-200">
              {{ t("footer.followUs") }}
            </h3>
            <div class="flex space-x-4 rtl:space-x-reverse">
              <a href="#" class="border p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" class="border p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" class="border p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24"
                  fill="currentColor">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

          </div>
        </div>

        <div class="mx-auto max-w-screen-xl mt-12 pt-6">
          <div class="flex flex-col md:flex-row md:justify-between gap-4">
            <!-- <div class="flex items-center gap-4">
              <a href="#" class="text-white underline">{{
                t("footer.mobileApp")
                }}</a>
              <a href="#" class="text-white underline">{{ t("footer.rss") }}</a>
              <a href="#" class="text-white underline">{{
                t("footer.siteSettings")
                }}</a>
            </div> -->
            <div class="flex gap-6 items-center justify-end">
              <!-- <img :src="logoSrc" alt="Government Logo" class="h-12 p-1" /> -->
              <img src="../assets/logo white2.png" alt="Government Logo" class="justify-end items-end flex h-20 p-1" />
            </div>
          </div>

          <div class="mt-8 text-sm">
            <p class="font-bold text-center">
              {{ t("footer.copyright", { year: currentYear }) }}
            </p>
            <!-- <p class="mt-2">{{ t("footer.developedBy") }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
