<template>
  <!--begin::Wrapper-->
  <div class="w-lg-550px bg-white rounded shadow-sm p-6 py-10 mx-auto row">
    <h1 class="text-dark text-center fs-20 m-0 mb-3">
       <a
        href="/"
        >                     
          <img :src="getAssetPath('media/logos/grs_logo_original.png')"
              class="mw-100 mh-142px"
              alt=""
              style="height: 130px;"
            />
       </a>
    </h1>
     <span class="fw-bold text-center border border-secondary border-1 p-3" style="background:#ddd; color: #f7931e;">
        {{ translate("loginPageMessage") }}
    </span>
    <div class="px-7 my-auto col-md-12 mt-3">
        <VForm
          class="form w-100"
          id="kt_login_signin_form"
          @submit="onSubmitLogin"
          :validation-schema="login"
          :initial-values="{ email: 'admin@demo.com', password: 'demo' }"
        >
        <div class="text-center mb-5">
          <h2 class="text-dark mb-3">{{ translate("complainantLogin") }}</h2>
        </div>

        <!--begin::Input group-->
        <div class="fv-row mb-8">
          <!--begin::Label-->
          <label class="form-label fs-6 fw-bolder text-dark">{{ translate("mobileNumber") }}</label>
          <!--end::Label-->

          <!--begin::Input-->
          <Field
            class="form-control form-control-lg form-control-solid"
            type="text"
            name="username"
            autocomplete="off"
          />
          <!--end::Input-->
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="username" />
            </div>
          </div>
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="fv-row mb-8">
          <!--begin::Wrapper-->
          <div class="d-flex flex-stack mb-2">
            <!--begin::Label-->
            <label class="form-label fw-bolder text-dark fs-6 mb-0"
              >{{ translate("pinCode") }}
            </label>
            <!--end::Label-->

            <!--begin::Link-->
            <router-link to="/retrieve-pin" class="link-success fs-6 fw-bolder">
              {{ translate("retrievePinCode") }} ?
            </router-link>
            <!--end::Link-->
          </div>
          <!--end::Wrapper-->

          <!--begin::Input-->
          <div class="" style="position: relative">
            <Field
              class="form-control form-control-lg form-control-solid"
              :type="passwordFieldType"
              name="password"
              autocomplete="off"
            />

            <i
              class="bi bi-eye-slash"
              id="togglePassword"
              style="
                cursor: pointer;
                right: 17px;
                font-weight: bolder;
                font-size: 18px;
                top: 2vh;
                position: absolute;
                width: 24px;
                color: black;
              "
              @click="tooglePassword"
            ></i>
          </div>

          <!--end::Input-->
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="password" />
            </div>
          </div>
        </div>
        <!--end::Input group-->

        <!--begin::Actions-->
        <div class="text-center">
          <!--begin::Submit button-->
          <button
            type="submit"
            ref="submitButton"
            id="kt_sign_in_submit"
            class="btn btn-lg btn-success w-100 mb-5"
          >
            <span class="indicator-label"> {{ translate("login") }} </span>

            <span class="indicator-progress">
              {{ translate("pleaseWait") }}...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
          <!--end::Submit button-->
        </div>
        
        <!--end::Actions-->
        </VForm>
      <div class="text-center">
        <span
          >
          <router-link to="/register" class="menu-link link-success">
            {{ translate("newAccount") }}?
          </router-link></span
        >
      </div>
    </div>
    <!-- <p class="mb-0 text-center mt-5">
      Developed and Maintained By
      <a href="//tappware.com" target="_blank" class="text-bold"
        ><img alt="Logo" src="media/logos/tappware.png" class="h-30px" />
        TAPPWARE Solutions Limited</a
      >
    </p> -->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, computed } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useAuthStore, type User } from "@/stores/auth";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";
import { config, layout, themeMode } from "@/core/helpers/config";
import { LS_CONFIG_NAME_KEY, useConfigStore } from "@/stores/config";
import { useThemeStore } from "@/stores/theme";
import { useI18n } from "vue-i18n";
import JwtService from "@/core/services/JwtService";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  data() {
    return {
      passwordFieldType: "password",
      message: [],
      show: false,
      load: true,
      appType: '' as any,
      userId: '' as any,
      language: '' as any,
    };
  },
  mounted() {
    const store = useAuthStore();
    const router = useRouter();
    if (JwtService.getToken()) {
      router.push({ name: 'dashboard' });
    }
   

  },
  methods: {
      tooglePassword() {
        this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
      },
  },
  setup() {
    const store = useAuthStore();
    const router = useRouter();
    const storeConfig = useConfigStore();
    const storeTheme = useThemeStore();
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

   // const layoutType = ref(layout.value);

    const submitButton = ref<HTMLButtonElement | null>(null);

    //Create form validation object
    const login = Yup.object().shape({
      username: Yup.string().min(11).required().label("Mobile"),
      password: Yup.string().min(6).required().label("Password"),
    });

    //Form submit function
    const onSubmitLogin = async (values: any) => {
      values = values as User;
      // Clear existing errors
      store.logout();

      if (submitButton.value) {
        // eslint-disable-next-line
        submitButton.value!.disabled = true;
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      // Send login request
      await store.login(values);
      const error = Object.values(store.errors);
      if (error.length === 0) {
        // Go to page after successfully login
        localStorage.removeItem(LS_CONFIG_NAME_KEY);
        const layoutType = "light-header"; 
        storeConfig.setLayoutConfigProperty("general.layout", layoutType);
        // save new config to localStorage
        localStorage.setItem(LS_CONFIG_NAME_KEY, JSON.stringify(config.value));
        router.push({ name: "dashboard" });
        
      } else {
        let msg = '';
        if(i18n.locale.value == 'bn'){
           msg = "ইউজারনেম/পাসওয়ার্ড সঠিক নয়";
        }
        if(i18n.locale.value == 'en'){
           msg = "Wrong username/password";
        }
       
        Swal.fire({
          text:  msg,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        }).then(() => {
          store.errors = {};
        });
      }

      //Deactivate indicator
      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
        submitButton.value!.disabled = false;
    };

    return {
      onSubmitLogin,
      login,
      currentLanguage,
      translate,
      submitButton,
      getAssetPath,
    };
  },
});
</script>
