import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConfigStore } from "@/stores/config";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    redirect: "/dashboard",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
    ],
  },
  {
    path: "/grievance-track",
    redirect: "/grievance-track",
    component: () => import("@/layouts/TrackGrievancePageLayout.vue"),
    children: [
      {
        path: "/grievance-track",
        name: "grievance-track",
        component: () =>import("@/views/TrackGrievance.vue"),
        meta: {
          pageTitle: "Grievance Track",
        },
      },
     
    ],
  },
  {
    path: "/grievance",
    redirect: "/grievance",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/grievance",
        name: "grievance",
        component: () => import("@/views/citizen/GrievanceList.vue"),
        meta: {
          pageTitle: "Grievance",
          breadcrumbs: ["Grievance"],
        },
      },
      {
        path: "/add-public-grievance",
        name: "add-public-grievance",
        component: () => import("@/views/citizen/AddGrievance.vue"),
        meta: {
          pageTitle: "Add Grievance",
          breadcrumbs: ["Add Grievance"],
        },
      },
      {
        path: "/grievance-details/:id",
        name: "grievance details",
        component: () => import("@/views/citizen/GrievanceDetails.vue"),
        meta: {
          pageTitle: "Grievance Details",
          breadcrumbs: ["Grievance Details"],
        },
      },
    ],
  },
  {
    path: "/administrative-grievance",
    redirect: "/administrative-grievance",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/administrative-grievance",
        name: "administrative grievance",
        component: () => import("@/views/administrative-grievance/GrievanceList.vue"),
        meta: {
          pageTitle: "Grievance",
          breadcrumbs: ["Grievance"],
        },
      },
      {
        path: "/administrative-grievance-list",
        name: "administrative grievance list",
        component: () => import("@/views/administrative/GrievanceList.vue"),
        meta: {
          pageTitle: "Administrative Grievance List",
          breadcrumbs: ["Grievance"],
        },
      },
        {
        path: "/blacklist",
        name: "blacklist",
        component: () => import("@/views/administrative/Blacklist.vue"),
        meta: {
          pageTitle: "Blacklist",
          breadcrumbs: ["Blacklist"],
        },
      },
     
    ],
  },
  {
    path: "/sign-in",
    redirect: "/sign-in",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignIn.vue"),

        meta: {
          pageTitle: "Sign In",
        },
      },
      {
        path: "/retrieve-pin",
        name: "retrieve pin",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/RetrievePin.vue"),
        meta: {
          pageTitle: "Retrieve pin",
        },
      },
      {
        path: "/administrative-login",
        name: "administrative login",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/AdministrativeLogin.vue"),
        meta: {
          pageTitle: "Retrieve pin",
        },
      },
    ],
  },
  {
    path: "/",
    redirect: "/",
    component: () => import("@/layouts/HomePageLayout.vue"),
    children: [
      {
        path: "/",
        name: "grs-home",
        component: () => import("@/views/GrsHome.vue"),
        meta: {
          pageTitle: "GRS Home",
        },
      },
     
    ],
  },
  {
    path: "/register",
    redirect: "/register",
    component: () => import("@/layouts/RegisterPageLayout.vue"),
    children: [
      {
        path: "/register",
        name: "register",
        component: () =>import("@/views/Register.vue"),
        meta: {
          pageTitle: "Register",
        },
      },
     
    ],
  },
  {
    path: "/add-grievance-without-login",
    redirect: "/add-grievance-without-login",
    component: () => import("@/layouts/AddGrievanceWithoutLoginPageLayout.vue"),
    children: [
      {
        path: "/add-grievance-without-login",
        name: "add grievance without login",
        component: () =>import("@/views/AddGrievanceWithoutLogin.vue"),
        meta: {
          pageTitle: "Add Grievance Without Login",
        },
      },
     
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/SystemLayout.vue"),
    children: [
      {
        // the 404 route, when none of the above matches
        path: "/404",
        name: "404",
        component: () => import("@/views/crafted/authentication/Error404.vue"),
        meta: {
          pageTitle: "Error 404",
        },
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/crafted/authentication/Error500.vue"),
        meta: {
          pageTitle: "Error 500",
        },
      },
    ],
  },
 
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const configStore = useConfigStore();

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  // reset config to initial state
  configStore.resetLayoutConfig();

  // verify auth token before each page change
  authStore.verifyAuth();

  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }

  // Scroll page to top on every route change
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

export default router;
