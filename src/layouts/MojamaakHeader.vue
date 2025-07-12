
<script setup>
  import { onMounted, ref, computed } from "vue";
  import { useI18n } from "vue-i18n";

  const { t, locale } = useI18n();

  onMounted(() => {
  const lang = locale.value;
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  if (typeof window.initFlowbite === "function") {
    window.initFlowbite();
  }
  document.documentElement.classList.toggle("dark", isDark.value);
  console.log(
    "Initial theme applied:",
    isDark.value ? "dark" : "light",
    "Class:",
    document.documentElement.className
  );
});

const isDark = ref(
  localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

const toggleTheme = () => {
  try {
    if (isDark.value) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
    console.log(
      "Theme toggled to:",
      isDark.value ? "dark" : "light",
      "Class:",
      document.documentElement.className
    );
  } catch (error) {
    console.error("Error in toggleTheme:", error);
  }
};

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
  <header class="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-[#1F2937] shadow-md">
    <!-- Left: Profile and icons -->
    <div class="flex items-center space-x-4 rtl:space-x-reverse">

      <!-- Right: Title -->
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
        <IconButton icon="mail" class="bg-[#38A6DE] w-6 h-6 rounded-full"/>
        <h1 class="text-2xl font-bold text-[#38A6DE] dark:text-gray-400">معلومات المجمع</h1>
      </div>
    
    </div>

    <!-- Center: Search -->
    <div class="flex-grow max-w-[400px] mx-8">
      <div class="relative">
        <input
          type="text"
          placeholder="ما الذي تبحث عنه"
          class="w-full border border-[#38A6DE] rounded-md py-2 pr-4 pl-10 text-right placeholder-[#38A6DE] dark:placeholder-gray-400 text-sm dark:bg-[#374151] dark:border-gray-600 dark:text-gray-100 focus:outline-none"
        />
      </div>
    </div>
        <!-- Icons -->
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
      <IconButton icon="mail" class="bg-[#38A6DE] w-6 h-6 rounded-full"/>
      <IconButton icon="chat" class="bg-[#38A6DE] w-6 h-6 rounded-full" />
      <IconButton icon="bell" class="bg-[#38A6DE] w-6 h-6 rounded-full" />
    </div>
    
    <label
            class="flex-row relative inline-flex items-center cursor-pointer gap-2"
          >
            <input
              type="checkbox"
              v-model="isDark"
              class="sr-only peer"
              @change="toggleTheme"
            />
            <div
              class="relative w-11 h-6 bg-[#38a6de] rounded-full peer dark:bg-gray-700 peer-checked:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all transition-colors duration-300"
            ></div>
            <span
              class="relative top-0.5 rtl:ml-3 ltr:mr-3 text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2"
            >
              <span>{{
                isDark
                  ? t("nav.theme")
                  : t("nav.theme").replace("الليلي", "النهاري")
              }}</span>
            </span>
          </label>
    <!-- Profile -->
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
    <!-- <img src="/profile.jpg" alt="Profile" class="w-12 h-12 rounded-full object-cover" /> -->
    <div class="text-sm">
      <p class="font-bold text-gray-900 dark:text-gray-400">Mena Akhnoukh</p>
      <p class="text-gray-600 text-xs dark:text-gray-400">CEO & CO-Founder</p>
      <p class="text-[#38A6DE] text-xs">admin@wanesah.com</p>
    </div>
    <div class="bg-[#38A6DE] w-12 h-12 rounded-full"></div>
    </div>
  </header>
</template>
