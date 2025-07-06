<script setup>
import { onMounted, ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
onMounted(() => {
    const lang = locale.value
    document.documentElement.setAttribute('dir', lang === 'ar' ?  'rtl' : 'ltr')
    if (typeof window.initFlowbite === 'function') {
        window.initFlowbite();
    }
    document.documentElement.classList.toggle('dark', isDark.value);
    console.log('Initial theme applied:', isDark.value ? 'dark' : 'light', 'Class:', document.documentElement.className);
});

const isDark = ref(
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
);

const toggleTheme = () => {
    try {
        if (isDark.value) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
        console.log('Theme toggled to:', isDark.value ? 'dark' : 'light', 'Class:', document.documentElement.className);
    } catch (error) {
        console.error('Error in toggleTheme:', error);
    }
};

const toggleLanguage = () => {
    try {
        locale.value = locale.value === 'en' ? 'ar' : 'en';
        localStorage.setItem('language', locale.value);
        document.documentElement.setAttribute('dir', locale.value === 'ar' ? 'rtl' : 'ltr');
    } catch (error) {
        console.error('Error in toggleLanguage:', error);
    }
};

const logoSrc = computed(() => {
    if (isDark.value) {
        return locale.value === 'ar' ? '../src/assets/logo white2.png' : '../src/assets/logo white.png';
    }
    return locale.value === 'ar' ? '../src/assets/logo 2.png' : '../src/assets/logo 1.png';
});
</script>
<template>
    <header>
        <nav
            class="bg-white border-gray-200 border-b dark:border-gray-600 px-4 lg:px-6 py-4 dark:bg-gray-800 font-shamel">
            <div class="flex-col-reverse flex lg:flex-row flex-wrap justify-between items-center mx-auto">
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul
                        class="flex flex-col mt-4 font-medium lg:flex-row-reverse lg:space-x-8 lg:mt-0 rtl:lg:space-x-reverse">
                        <li class="flex items-center justify-center lg:hidden">
                            <a href="#" @click.prevent="toggleLanguage"
                                class="flex gap-2 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                {{ t('nav.language') }}
                                <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15" />
                                </svg>
                            </a>
                        </li>
                        <li class="flex items-center justify-center">
                            <router-link to="/contact"
                                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 router-link-active:font-bold"
                                active-class="font-bold">
                                {{ t('nav.contact') }}
                            </router-link>
                        </li>
                        <li class="flex items-center justify-center">
                            <router-link to="/partners"
                                class="flex gap-2 py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 router-link-active:font-bold"
                                active-class="font-bold">
                                <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 9-7 7-7-7" />
                                </svg>
                                {{ t('nav.partners') }}
                            </router-link>
                        </li>
                        <li class="flex items-center justify-center">
                            <router-link to="/complexes"
                                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 router-link-active:font-bold"
                                active-class="font-bold">
                                {{ t('nav.complexes') }}
                            </router-link>
                        </li>
                        <li class="flex items-center justify-center">
                            <router-link to="/pricing"
                                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 router-link-active:font-bold"
                                active-class="font-bold">
                                {{ t('nav.pricing') }}
                            </router-link>
                        </li>
                        <li class="flex items-center justify-center">
                            <router-link to="/about"
                                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 router-link-active:font-bold"
                                active-class="font-bold">
                                {{ t('nav.about') }}
                            </router-link>
                        </li>
                        <li class="flex items-center justify-center">
                            <router-link to="/"
                                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 router-link-active:font-bold"
                                active-class="font-bold">
                                {{ t('nav.home') }}
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/" class="!top-0 flex items-center justify-center py-2 pr-4 pl-3">
                                <img :src="logoSrc" class="h-6 sm:h-9" :class="locale === 'ar' ? 'ml-3' : 'mr-3'"
                                    alt="Flowbite Logo" />
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div
                    class="w-full justify-between lg:w-auto lg:justify-normal flex items-center lg:order-2 flex-row-reverse">
                    <label class="flex-row relative inline-flex items-center cursor-pointer gap-2">
                        <input type="checkbox" v-model="isDark" class="sr-only peer" @change="toggleTheme" />
                        <div
                            class="relative w-11 h-6 bg-[#38a6de] rounded-full peer dark:bg-gray-700 peer-checked:bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all transition-colors duration-300">
                        </div>
                        <span
                            class="relative top-0.5 rtl:ml-3 ltr:mr-3 text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <span>{{ isDark ? t('nav.theme') : t('nav.theme').replace('الليلي', 'النهاري') }}</span>
                        </span>
                    </label>

                    <a href="#" @click.prevent="toggleLanguage"
                        class="lg:flex hidden gap-2 items-center text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-3 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        {{ t('nav.language') }}
                        <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m13 19 3.5-9 3.5 9m-6.125-2h5.25M3 7h7m0 0h2m-2 0c0 1.63-.793 3.926-2.239 5.655M7.5 6.818V5m.261 7.655C6.79 13.82 5.521 14.725 4 15m3.761-2.345L5 10m2.761 2.655L10.2 15" />
                        </svg>
                    </a>
                    <div class="bg-[#38A6DE] text-white py-1 px-3 rounded">
                        <router-link to="/mojamaak/login">
                            <button class="text-sm font-medium">{{ t('nav.login') }}</button>
                        </router-link>
                    </div>
                    <router-link to="/search"
                        class="flex gap-2 items-center text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-3 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                        {{ t('nav.search') }}
                        <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                    </router-link>
                    <button data-collapse-toggle="mobile-menu-2" type="button"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
li a {
    position: relative;
    top: 3px;
    width: 100%;
}

.rtl {
    text-align: right;
}

.ltr {
    text-align: left;
}

.router-link-active {
    font-weight: bold;
}
</style>
