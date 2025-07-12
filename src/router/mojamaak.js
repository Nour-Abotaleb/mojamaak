import MojamaakLayout from "../layouts/MojamaakLayout.vue";
import Buildings from "../Pages/mojamaak/Buildings.vue";
import Dashboard from "../Pages/mojamaak/Dashboard.vue";
import Finance from "../Pages/mojamaak/Finance.vue";
import ResidentsManagement from "../Pages/mojamaak/ResidentsManagement.vue";
import Maintenance from "../Pages/mojamaak/Maintenance.vue";
import Visits from "../Pages/mojamaak/Visits.vue";
import Messages from "../Pages/mojamaak/Messages.vue";

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
      },
      {
        path: "buildings",
        name: "Buildings",
        component: Buildings,
        meta: { requiresAuth: true }
      },
      {
        path: "residents",
        name: "Residents",
        component: ResidentsManagement,
        meta: { requiresAuth: true }
      },
      {
        path: "finance",
        name: "Finance",
        component: Finance,
        meta: { requiresAuth: true }
      },
      {
        path: "maintenance",
        name: "Maintenance",
        component: Maintenance,
        meta: { requiresAuth: true }
      },
      {
        path: "visits",
        name: "Visits",
        component: Visits,
        meta: { requiresAuth: true }
      },
      {
        path: "messages",
        name: "Messages",
        component: Messages,
        meta: { requiresAuth: true }
      },
    ]
  }
];
