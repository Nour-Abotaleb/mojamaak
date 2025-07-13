<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();
const router = useRouter();
const route = useRoute();

const isDark = ref(
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  const theme = isDark.value ? "dark" : "light";
  document.documentElement.classList.toggle("dark", isDark.value);
  localStorage.setItem("color-theme", theme);
};

const showMobileMenu = ref(false);

const menuItems = [
  { text: "معلومات المجمع", route: "/dashboard" },
  { text: "إدارة المباني والشقق", route: "/dashboard/buildings" },
  { text: "إدارة السكان", route: "/dashboard/residents" },
  { text: "المعاملات المالية", route: "/dashboard/finance" },
  { text: "إدارة طلبات الصيانة", route: "/dashboard/maintenance" },
  { text: "إدارة طلبات الزيارة", route: "/dashboard/visits" },
  { text: "التحكم بواجهة الويب", route: "/dashboard/interface" },
  { text: "إدارة البروفايل", route: "/dashboard/profile" },
  { text: "إدارة الرسائل الواردة", route: "/dashboard/messages" },
  { text: "الإعدادات", route: "/dashboard/settings" },
];

const navigate = (path) => {
  showMobileMenu.value = false;
  if (route.path !== path) router.push(path);
};
</script>

<template>
  <header class="w-full bg-gray-100 dark:bg-[#1F2937] shadow-md p-4">
    <!-- Top Bar -->
    <div class="flex justify-between items-center flex-wrap">
      <!-- Mobile Menu Button -->
      <button
        class="text-2xl md:hidden"
        @click="showMobileMenu = !showMobileMenu"
      >
        ☰
      </button>

      <!-- Title -->
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
        <IconButton icon="mail" class="bg-[#38A6DE] w-6 h-6 rounded-full" />
        <h1 class="text-2xl font-bold text-[#38A6DE] dark:text-gray-400">
          معلومات المجمع
        </h1>
      </div>

      <!-- Search (Hidden on mobile) -->
      <div class="hidden md:block flex-grow max-w-[400px] mx-8">
        <input
          type="text"
          placeholder="ما الذي تبحث عنه"
          class="w-full border border-[#38A6DE] rounded-md py-2 pr-4 pl-10 text-right placeholder-[#38A6DE] dark:placeholder-gray-400 text-sm dark:bg-[#374151] dark:border-gray-600 dark:text-gray-100 focus:outline-none"
        />
      </div>

      <!-- Right Section -->
      <div class="hidden md:flex items-center gap-3 flex-wrap">
        <IconButton icon="mail" class="bg-[#38A6DE] w-6 h-6 rounded-full" />
        <IconButton icon="chat" class="bg-[#38A6DE] w-6 h-6 rounded-full" />
        <IconButton icon="bell" class="bg-[#38A6DE] w-6 h-6 rounded-full" />

        <!-- Theme Toggle -->
        <label class="flex items-center cursor-pointer gap-2">
          <input
            type="checkbox"
            v-model="isDark"
            class="sr-only peer"
            @change="toggleTheme"
          />
          <div
            class="w-11 h-6 bg-[#38a6de] rounded-full peer dark:bg-gray-700 peer-checked:bg-gray-200 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all relative"
          ></div>
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
            {{
              isDark
                ? t("nav.theme")
                : t("nav.theme").replace("الليلي", "النهاري")
            }}
          </span>
        </label>

        <!-- Profile -->
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
          <div class="text-sm">
            <p class="font-bold text-gray-900 dark:text-gray-400">
              Mena Akhnoukh
            </p>
            <p class="text-gray-600 text-xs dark:text-gray-400">
              CEO & CO-Founder
            </p>
            <p class="text-[#38A6DE] text-xs">admin@wanesah.com</p>
          </div>
          <div class="bg-[#38A6DE] w-12 h-12 rounded-full"></div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Items -->
    <div v-if="showMobileMenu" class="mt-4 md:hidden space-y-2">
      <div
        v-for="item in menuItems"
        :key="item.text"
        @click="navigate(item.route)"
        :class="[
          'block p-2 rounded-lg cursor-pointer transition',
          route.path === item.route
            ? 'bg-[#38A6DE] text-white'
            : 'text-gray-800 dark:text-gray-300 hover:bg-[#38A6DE] hover:text-white dark:hover:bg-[#374151]'
        ]"
      >
        {{ item.text }}
      </div>
      <!-- Logout -->
      <div
        @click="navigate('/')"
        class="p-2 rounded-lg cursor-pointer text-red-600 hover:bg-red-100 dark:hover:bg-red-900 transition"
      >
        تسجيل الخروج
      </div>
    </div>
  </header>
</template>
