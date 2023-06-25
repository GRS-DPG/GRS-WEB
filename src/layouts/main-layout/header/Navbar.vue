<template>
  <!--begin::Navbar-->
  <div class="app-navbar flex-shrink-0">

    <!--begin::Theme mode-->
    <div class="app-navbar-item ms-1 ms-md-3">
      <!--begin::Menu toggle-->
      <a
        href="#"
        class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px"
        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
      >
        <KTIcon
          v-if="themeMode === 'light'"
          icon-name="night-day"
          icon-class="theme-light-show fs-2 fs-md-1"
        />
        <KTIcon
          v-else
          icon-name="moon"
          icon-class="theme-dark-show fs-2 fs-md-1"
        />
      </a>
      <!--begin::Menu toggle-->
      <KTThemeModeSwitcher />
    </div>
    <!--end::Theme mode-->
    <!--begin::Notifications-->
    <div class="app-navbar-item ms-1 ms-md-3" v-if="layout === 'dark-sidebar'">
      <!--begin::Menu- wrapper-->
      <div
        class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
      >
         <span class="badge badge-danger badge-circle fw-bold fs-7 me-n3 mt-n3" style="width: 1.4rem; height: 1.4rem;"
            >3</span>
          <KTIcon icon-name="notification" icon-class="fs-2 fs-md-1" />
      </div>
      <KTNotificationMenu />
      <!--end::Menu wrapper-->
    </div>
    <!--end::Notifications-->
    <!--begin::User menu-->
    <div class="app-navbar-item ms-1 ms-md-3" id="kt_header_user_menu_toggle">
      <!--begin::Menu wrapper-->
      <div
        class="cursor-pointer symbol symbol-30px symbol-md-30px symbol-circle"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
      >
        <!-- <img class="" :src="getAssetPath('media/avatars/300-1.jpg')" alt="user" /> -->
        <template v-if="userType== '1'">
            <template v-if="currentLanguage=='en'">
              <span class="ps-2 user-title" >{{userInfo?.office_info[0]?.office_name_en}} - {{userInfo?.office_info[0]?.designation_en}}</span>
            </template>
            <template v-if="currentLanguage=='bn'">
              <span class="ps-2 user-title" >{{userInfo?.office_info[0]?.office_name_bn}} - {{userInfo?.office_info[0]?.designation}} ( {{userInfo?.office_info[0]?.unit_name_bn}})</span>
            </template>
        </template>
        <template  v-else>
          <span class="ps-2 user-title">{{userInfo.name}}</span>
        </template>
      </div>
      <KTUserMenu />
      <!--end::Menu wrapper-->
    </div>
    <!--end::User menu-->
     <!--begin::Language-->
    <div class="app-navbar-item ms-1 ms-md-3">
      <!--begin::Menu- wrapper-->
      <div
        class=""
      >
      <button
          v-if="currentLanguage === 'bn'"
          @click="setLang('en')"
          class="btn lang-name"
        >
          <!-- <span class="symbol symbol-20px me-4 fs-2">
            <img
              class="rounded-1"
              :src="getAssetPath('media/flags/united-states.svg')"
              alt="metronic"
            />
          </span> -->
          English
        </button>
        <button
          v-if="currentLanguage === 'en'"
          @click="setLang('bn')"
         
          class="btn lang-name"
        >
          <!-- <span class="symbol symbol-20px me-4 fs-2">
            <img
              class="rounded-1"
              :src="getAssetPath('media/flags/bangladesh.svg')"
              alt="metronic"
            />
          </span> -->
          বাংলা
        </button>
      </div>
    </div>
    <!--end::Language-->
    <!--begin::Header menu toggle-->
    <div
      class="app-navbar-item d-lg-none ms-2 me-n3"
      v-tooltip
      title="Show header menu"
    >
      <div
        class="btn btn-icon btn-active-color-primary w-30px h-30px w-md-35px h-md-35px"
        id="kt_app_header_menu_toggle"
      >
        <KTIcon icon-name="text-align-left" icon-class="fs-2 fs-md-1" />
      </div>
    </div>
    <!--end::Header menu toggle-->
  </div>
  <!--end::Navbar-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent } from "vue";
import KTSearch from "@/layouts/main-layout/search/Search.vue";
import KTNotificationMenu from "@/layouts/main-layout/menus/NotificationsMenu.vue";
import KTQuickLinksMenu from "@/layouts/main-layout/menus/QuickLinksMenu.vue";
import KTUserMenu from "@/layouts/main-layout/menus/UserAccountMenu.vue";
import KTThemeModeSwitcher from "@/layouts/main-layout/theme-mode/ThemeModeSwitcher.vue";
import { ThemeModeComponent } from "@/assets/ts/layout";
import { useThemeStore } from "@/stores/theme";
import { useI18n } from "vue-i18n";
import { layout } from "@/core/helpers/config";

export default defineComponent({
  name: "header-navbar",
  components: {
    KTSearch,
    KTNotificationMenu,
    KTQuickLinksMenu,
    KTUserMenu,
    KTThemeModeSwitcher,
  },
  setup() {
    const store = useThemeStore();
    const i18n = useI18n();

     i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "en";

    const countries = {
      en: {
        flag: getAssetPath("media/flags/united-states.svg"),
        name: "English",
      },
      bn: {
        flag: getAssetPath("media/flags/bangladesh.svg"),
        name: "Bangla",
      },
    };

    const themeMode = computed(() => {
      if (store.mode === "system") {
        return ThemeModeComponent.getSystemMode();
      }
      return store.mode;
    });

    const setLang = (lang: string) => {
      localStorage.setItem("lang", lang);
      i18n.locale.value = lang;
    };
    const currentLanguage = computed(() => {
      return i18n.locale.value;
    });

    const userInfo = computed(() => {
      let user = localStorage.getItem("_grs_user") as any;
      return JSON.parse(user);
    });
    const userType = computed(() => {
      return localStorage.getItem("_administrative_user");
    });

    const currentLangugeLocale = computed(() => {
      return countries[i18n.locale.value as keyof typeof countries];
    });

    return {
      themeMode,
      setLang,
      currentLanguage,
      currentLangugeLocale,
      layout,
      userInfo,
      userType,
      getAssetPath,
    };
  },
});
</script>
