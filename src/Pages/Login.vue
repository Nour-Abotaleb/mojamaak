<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const email = ref("");
const password = ref("");

const handleLogin = () => {};
</script>

<template>
  <div class="py-20 flex items-center justify-center dark:bg-gray-900">
    <div
      class="bg-white dark:bg-[#1F2937] p-8 rounded-2xl shadow-md w-[90%] max-w-lg"
    >
      <h2
        class="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6"
      >
        {{ t("loginPage.login") }}
      </h2>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email -->
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >{{ t("loginPage.email") }}</label
          >
          <input
            id="email"
            type="email"
            v-model="email"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <!-- Password -->
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >{{ t("loginPage.password") }}</label
          >
          <input
            id="password"
            type="password"
            v-model="password"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="********"
          />
        </div>

        <!-- Forgot password -->
        <div class="flex justify-end">
          <router-link
            to="/mojamaak/forgot-password"
            class="text-sm text-[#38A6DE] hover:underline"
            >{{ t("loginPage.forgotPassword") }}</router-link
          >
        </div>

        <!-- Submit -->
        <div>
          <button
            type="submit"
            class="w-full bg-[#38A6DE] text-white py-2 rounded-md"
          >
            {{ t("loginPage.signin") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>