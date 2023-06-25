<template>
  <div class="m-auto" style="hight:90vh;">
      <img
            alt="Logo"
            :src="getAssetPath('media/logos/grs.png')"
            class="app-sidebar-logo-default"
          />
    <div class="w-100 text-center mt-3">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, computed } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useRouter } from "vue-router";
import * as Yup from "yup";
import { useI18n } from "vue-i18n";
import ApiService from '@/core/services/ApiService';
import { LS_CONFIG_NAME_KEY, useConfigStore } from "@/stores/config";
import { config, layout, themeMode } from "@/core/helpers/config";

export default defineComponent({
  name: "administrative-login",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  data() {
    return {
      message: [],
      show: false,
      load: true,
      appType: '' as any,
      userId: '' as any,
      language: '' as any,
      token: '' as any,
      loading: true,
    };
  },
  async created() {
    this.loading = true;
    await this.administrativeLogin();
  },
  methods: {
    async administrativeLogin() {
      const fragment = window.location.hash;
      this.token = new URLSearchParams(fragment.substr(fragment.indexOf('?'))).get('data');
      let formData = new FormData();
      formData.set('token', this.token);
      await ApiService.post('auth/administrative-login',formData)
        .then((response) => {
          if(response.data.status =='success'){
            var now = Date.now();
            var schedule = now + (2*60*60)*1000 as any; 
            localStorage.setItem("_grs_user", JSON.stringify(response.data.data.user_info));
            localStorage.setItem("_administrative_user", '1');
            localStorage.setItem("id_token", response.data.data.token);
            localStorage.setItem("expiry", schedule);
            const storeConfig = useConfigStore();
            localStorage.removeItem(LS_CONFIG_NAME_KEY);
            const layoutType = "dark-sidebar"; 
            storeConfig.setLayoutConfigProperty("general.layout", layoutType);
            // save new config to localStorage
            localStorage.setItem(LS_CONFIG_NAME_KEY, JSON.stringify(config.value));
            this.$router.push('/');
          }
         
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
  },
  setup() {
    const { t, te } = useI18n();
    const i18n = useI18n();
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

    // const route = useRouter();
    // const entityInfoID = route.prams.data;



    return {
      currentLanguage,
      translate,
      getAssetPath,
    };
  },
});
</script>
