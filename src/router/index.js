import { createRouter, createWebHistory } from "vue-router";
import Header from "../layouts/Header.vue";
import Footer from "../layouts/Footer.vue";
import HomePage from "../Pages/HomePage.vue";
import AboutPage from "../Pages/AboutPage.vue";
import PricingPage from "../Pages/PricingPage.vue";
import ComplexesPage from "../Pages/ComplexesPage.vue";
import Partners from "../Pages/Partners.vue";
import Contact from "../Pages/Contact.vue";
import Login from "../Pages/Login.vue";
import ForgotPassword from "../Pages/ForgotPassword.vue";
import ResetPassword from "../Pages/ResetPassword.vue";

// Admin Routes
import adminRoutes from './admin.js'
const publicRoutes = [
    {
        path: "/",
        components: {
            default: HomePage,
            header: Header,
            footer: Footer,
        },
        name: "Home",
    },
    {
        path: "/about",
        components: {
            default: AboutPage,
            header: Header,
            footer: Footer,
        },
        name: "About",
    },
    {
        path: "/pricing",
        components: {
            default: PricingPage,
            header: Header,
            footer: Footer,
        },
        name: "Pricing",
    },
    {
        path: "/complexes",
        components: {
            default: ComplexesPage,
            header: Header,
            footer: Footer,
        },
        name: "Complexes",
    },
    {
        path: "/partners",
        components: {
            default: Partners,
            header: Header,
            footer: Footer,
        },
        name: "Partners",
    },
    {
        path: "/contact",
        components: {
            default: Contact,
            header: Header,
            footer: Footer,
        },
        name: "Contact",
    },
    {
        path: "/mojamaak/login",
        components: {
            default: Login,
            header: Header,
            footer: Footer,
        },
        name: "Login",
    },
    {
        path: "/mojamaak/forgot-password",
        components: {
            default: ForgotPassword,
            header: Header,
            footer: Footer,
        },
        name: "ForgotPassword",
    },
    {
        path: "/mojamaak/reset-password",
        components: {
            default: ResetPassword,
            header: Header,
            footer: Footer,
        },
        name: "ResetPassword",
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...publicRoutes,
        ...adminRoutes
    ],
});

export default router;
