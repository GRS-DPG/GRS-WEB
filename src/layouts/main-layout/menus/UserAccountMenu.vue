<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold py-4 fs-6 w-400px"
    data-kt-menu="true"
  >
    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <div class="menu-content d-flex align-items-center px-3">
        <!--begin::Avatar-->
        <!-- <div class="symbol symbol-50px me-5">
          <img alt="Logo" :src="getAssetPath('media/avatars/300-1.jpg')" />
        </div> -->
        <!--end::Avatar-->

        <!--begin::Username-->
        <div class="d-flex flex-column">
          <div class="fw-bold d-flex align-items-center fs-5">
           <template v-if="userType== '1'">
            <template v-if="currentLanguage=='en'">
              {{userInfo?.office_info[0]?.office_name_en}} - {{userInfo?.office_info[0]?.designation_en}}
            </template>
            <template v-if="currentLanguage=='bn'">
             {{userInfo?.office_info[0]?.office_name_bn}} - {{userInfo?.office_info[0]?.designation}}
            </template>
           </template>
           <template v-else>
           {{userInfo.name}}  <span class="fw-light"> - ({{userInfo.username}})</span>
           </template>
          </div>
          <a href="#" class="fw-semobold text-muted text-hover-primary fs-7 text-center">
            <template v-if="userType== '1'">
              <template v-if="currentLanguage=='en'">
                ( {{userInfo?.office_info[0]?.unit_name_en}} )
              </template>
              <template v-if="currentLanguage=='bn'">
               ( {{userInfo?.office_info[0]?.unit_name_bn}})
              </template>
            </template>
           
            </a>
        </div>
        <!--end::Username-->
      </div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <router-link to="/pages/profile/overview" class="menu-link px-5">
        My Profile
      </router-link>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <!-- <div class="separator my-2"></div> -->
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <a @click="signOut()" class="menu-link px-5"> {{ translate("logOut") }} </a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "kt-user-menu",
  components: {},
  setup() {
    const router = useRouter();
    const i18n = useI18n();
    const store = useAuthStore();

    i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "bn";


    const signOut = () => {
      if(localStorage.getItem("_administrative_user") == '1'){
         window.open("https://n-doptor-accounts-stage.nothi.gov.bd/logout?referer=aHR0cDovLzEyNy4wLjAuMTo1MTcz","_self");
      }
      store.logout();
      //router.push({ name: "grs-home" });
      window.open('http://127.0.0.1:5173/',"_self");
    };

    const setLang = (lang: string) => {
      localStorage.setItem("lang", lang);
      i18n.locale.value = lang;
    };
    const { t, te } = useI18n();
    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
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

    return {
      signOut,
      setLang,
      currentLanguage,
      userInfo,
      userType,
      translate,
      getAssetPath,
    };
  },
});
</script>
