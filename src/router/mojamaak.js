import MojamaakLayout from "../layouts/MojamaakLayout.vue";
import Dashboard from "../Pages/mojamaak/Dashboard.vue";

export default [
  {
    path: "/dashboard",
    component: MojamaakLayout, // Optional layout wrapper
    children: [
      {
        path: "",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true }
      }
    ]
  }
];
