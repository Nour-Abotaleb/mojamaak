<script setup>
  import { onMounted, ref, computed } from "vue";
  import { useRouter, useRoute } from 'vue-router'
  import { useI18n } from "vue-i18n";

  const { t, locale } = useI18n();

  const router = useRouter()
  const route = useRoute()

  const navigate = (path) => {
    if (route.path !== path) router.push(path);
    if (window.innerWidth < 768) {
      isSidebarOpen.value = false;
    }
  }

  const menuItems = [
    { text: 'معلومات المجمع', route: '/dashboard' },
    { text: 'إدارة المباني والشقق', route: '/dashboard/buildings' },
    { text: 'إدارة السكان', route: '/dashboard/residents' },
    { text: 'المعاملات المالية', route: '/dashboard/finance' },
    { text: 'إدارة طلبات الصيانة', route: '/dashboard/maintenance' },
    { text: 'إدارة طلبات الزيارة', route: '/dashboard/visits' },
    { text: 'التحكم بواجهة الويب', route: '/dashboard/interface' },
    { text: 'إدارة البروفايل', route: '/dashboard/profile' },
    { text: 'إدارة الرسائل الواردة', route: '/dashboard/messages' },
    { text: 'الإعدادات', route: '/dashboard/settings' },
  ];
  
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
  <aside
    class="hidden fixed top-4 bottom-4 start-4 w-64 bg-gray-100 dark:bg-[#1F2937] rounded-xl shadow-lg md:flex flex-col p-4 z-40"
  >
    <!-- Logo -->
    <div class="flex items-center justify-center mb-6">
      <img :src="logoSrc" alt="Logo" class="" />
    </div>

    <!-- Menu Items -->
    <nav class="flex-1 overflow-auto space-y-2 scrollbar-hide">
      <div
        v-for="item in menuItems"
        :key="item.text"
        @click="navigate(item.route)"
        :class="[
          'p-3 rounded-lg cursor-pointer hover:bg-[#38A6DE] hover:text-white dark:text-gray-400 dark:hover:bg-[#374151] dark:hover:text-gray-100 transition',
          route.path === item.route ? 'bg-[#38A6DE] text-white dark:bg-[#374151]' : 'text-gray-700'
        ]"
      >
        {{ item.text }}
      </div>
    </nav>

    <!-- Logout -->
    <div class="mt-4 pt-4 border-t">
      <div
        @click="navigate('/')"
        class="p-3 rounded-lg cursor-pointer hover:bg-[#38A6DE] hover:text-white text-gray-700 dark:text-gray-400 dark:hover:bg-[#374151] dark:hover:text-gray-100  transition"
      >
        تسجيل الخروج
      </div>
    </div>
  </aside>
</template>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrolllbar-hide::-webkit-scrollbar {
    display: none;
}
</style>
