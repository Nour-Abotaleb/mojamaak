<template>
  <aside
    class="fixed top-4 bottom-4 start-4 w-64 bg-gray-100 rounded-xl shadow-lg flex flex-col p-4 z-40"
  >
    <!-- Logo -->
    <div class="flex items-center justify-center mb-6">
      <img src="../assets/blue logo.png" alt="Logo" class="" />
    </div>

    <!-- Menu Items -->
    <nav class="flex-1 overflow-auto space-y-2 scrollbar-hide">
      <div
        v-for="item in menuItems"
        :key="item.text"
        @click="navigate(item.route)"
        :class="[
          'p-3 rounded-lg cursor-pointer hover:bg-[#38A6DE] hover:text-white transition',
          route.path === item.route ? 'bg-orange-200 text-orange-700 font-bold' : 'text-gray-700'
        ]"
      >
        {{ item.text }}
      </div>
    </nav>

    <!-- Logout -->
    <div class="mt-4 pt-4 border-t">
      <div
        @click="navigate('/logout')"
        class="p-3 rounded-lg cursor-pointer hover:bg-[#38A6DE] hover:text-white text-gray-700 transition"
      >
        تسجيل الخروج
      </div>
    </div>
  </aside>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const navigate = (path) => {
  if (route.path !== path) router.push(path)
}

const menuItems = [
  { text: 'معلومات المجمع', route: '/dashboard/info' },
  { text: 'إدارة المباني والشقق', route: '/dashboard/buildings' },
  { text: 'إدارة السكان', route: '/dashboard/residents' },
  { text: 'المعاملات المالية', route: '/dashboard/finance' },
  { text: 'إدارة طلبات الصيانة', route: '/dashboard/maintenance' },
  { text: 'إدارة طلبات الزيارة', route: '/dashboard/visits' },
  { text: 'التحكم بواجهة الويب', route: '/dashboard/interface' },
  { text: 'إدارة البروفايل', route: '/dashboard/profile' },
  { text: 'إدارة الرسائل الواردة', route: '/dashboard/messages' },
  { text: 'الإعدادات', route: '/dashboard/settings' },
]
</script>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrolllbar-hide::-webkit-scrollbar {
    display: none;
}
</style>
