<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const email = ref('')

const handleForgotPassword = () => {
  console.log('Reset email sent to:', email.value)
  // Implement API call here
}
</script>

<template>
  <div class="py-20 flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition">
    <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md w-[90%] max-w-lg">
      <h2 class="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        {{ t('forgotPage.title') }}
      </h2>

      <form @submit.prevent="handleForgotPassword" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {{ t('forgotPage.email') }}
          </label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-[#38A6DE] text-white py-2 rounded-md"
        >
          {{ t('forgotPage.submit') || 'Send Reset Link' }}
        </button>
      </form>
    </div>
  </div>
</template>
