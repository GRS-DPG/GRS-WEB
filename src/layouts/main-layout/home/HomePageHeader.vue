<template>
    <!--begin::TopNav-->
      <div
        class="d-flex flex-center flex-column-auto grs-header"
       
      >
        <div class="topnav py-1 w-100 row m-0">
         <b>  
           <a href="mailto:grs@cabinet.gov.bd"><i class="bi bi-envelope"></i> 
             <h7 class="m-0 fs-6 pb-2" style="color: black">  grs@cabinet.gov.bd
            </h7>
           </a>
         </b>
        </div>
      </div>
      <!--end::TopNav-->
      <!--begin::Header-->
  
      <div class="row m-0 border-bottom border-3 border-info grs-header">
        <div class="flex-center" style="background: #ffff">
          <div class="py-4 w-100 row m-0 menu-bar">
            <div class="col-md-5 p-0">   
              <a  class="btn menu-toggler p-0" href="javascript:;"><i class="fa fa-bars" style="font-size: 28px"></i></a>
              <a href="/" class="btn py-0"><i class="fa fa-home" style="font-size: 24px"></i></a>
              <a href="/">
                <img style="width: 70%;" :src="getAssetPath('media/logos/grs.png')" />
              </a>
            </div>
            <div class="col-md-7 text-end mt-1">
              <template v-if="authCheck">
                <a
                    class="btn btn-default custom btn-md me-2"
                    @click="myPanel()"
                    :title="translate('myPanel')"
                  >
                  {{ translate("myPanel") }}
                </a>
                <a
                    class="btn btn-default custom btn-md"
                    :title="translate('logOut')"
                    @click="signOut()"
                  >
                  {{ translate("logOut") }}
                </a>
              </template>
              <template v-else>
                <a class="btn btn-default custom btn-md me-2" :title="translate('myGovLogin')">
                  {{ translate("myGovLogin") }}
                </a>
                <!-- <router-link
                    class="btn btn-default custom btn-md me-2" :title="translate('complainantLogin')"
                    to="/sign-in"
                  >
                  {{ translate("complainantLogin") }}
                </router-link> -->
                <a class="btn btn-default custom btn-md me-2" href="#/sign-in" :title="translate('complainantLogin')">
                 {{ translate("complainantLogin") }}
                </a>
                <a class="btn btn-default custom btn-md me-2" :title="translate('administrativeLogin')" @click="administrativeUrl()" >
                  {{ translate("administrativeLogin") }}
                </a>
              </template>
              <!-- <a class="m-4" style="color:#666666">
                {{ translate("english") }}
              </a> -->
              <!--begin::Language-->
              <button
                  v-if="currentLanguage === 'bn'"
                  @click="setLang('en')"
                  class="btn p-0 mt-3 ps-3"
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
                
                  class="btn p-0 mt-3 ps-3"
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
              
              <!--end::Language-->
            </div>
          </div>
        </div>
      </div>
  
    <!--end::Header-->
  </template>
  
  <script lang="ts">
  import { getAssetPath } from "@/core/helpers/assets";
  import { defineComponent, onMounted, computed } from "vue";
  import LayoutService from "@/core/services/LayoutService";
  import { useBodyStore } from "@/stores/body";
  import { useI18n } from "vue-i18n";
  import JwtService from "@/core/services/JwtService";
  import { useAuthStore } from "@/stores/auth";
  
  export default defineComponent({
    name: "home-layout",
    components: {},
    setup() {
      const store = useBodyStore();
      const i18n = useI18n();
      const storeAuth = useAuthStore();

      i18n.locale.value = localStorage.getItem("lang")
        ? (localStorage.getItem("lang") as string)
        : "bn";
      const { t, te } = useI18n();
      const translate = (text: string) => {
        if (te(text)) {
          return t(text);
        } else {
          return text;
        }
      };

      const setLang = (lang: string) => {
          localStorage.setItem("lang", lang);
          i18n.locale.value = lang;
        };
      const currentLanguage = computed(() => {
        return i18n.locale.value;
      });

      const authCheck = computed(() => {
        if (JwtService.getToken()) {
           return true;
        }else{
          return false;
        }
      });

      const signOut = () => {
        if(localStorage.getItem("_administrative_user") == '1'){
          window.open("https://n-doptor-accounts-stage.nothi.gov.bd/logout?referer=aHR0cDovLzEyNy4wLjAuMTo1MTcz","_self");
        }
        storeAuth.logout();
      };
        
      return {
        getAssetPath,
        setLang,
        currentLanguage,
        signOut,
        authCheck,
        translate,
      };
    },
    methods: {
      administrativeUrl() {
       window.open("https://n-doptor-accounts-stage.nothi.gov.bd/v2/login?referer=aHR0cDovLzEyNy4wLjAuMTo1MTczLyMvYWRtaW5pc3RyYXRpdmUtbG9naW4=","_self");
      },
      myPanel() {
       window.open("http://127.0.0.1:5173/#/dashboard","_self");
       window.location.reload();
      },
     },
  });
  </script>
  