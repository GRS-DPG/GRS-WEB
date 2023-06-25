<template>
  <!--begin::Wrapper-->
  <div class="w-lg-550px bg-white rounded shadow-sm p-6 py-10 mx-auto row">
    <h1 class="text-dark text-center fs-20 m-0 mb-3">
     <img :src="getAssetPath('media/logos/grs_logo_original.png')"
              class="mw-100 mh-142px"
              alt=""
              style="height: 130px;"
            />
    </h1>
     <span class="fw-bold text-center border border-secondary border-1 p-3" style="background:#ddd; color: #f7931e;">
        {{ translate("penRetrieveMsg") }}
    </span>
    <div class="px-7 my-auto col-md-12 mt-3">
        <VForm
          class="form w-100"
          id="kt_login_signin_form"
          @submit="onSubmitLogin"
          :validation-schema="login"
          :initial-values="{ email: 'admin@demo.com', password: 'demo' }"
        >

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

        <!--begin::Actions-->
        <div class="text-center">
          <!--begin::Submit button-->
          <button
            type="submit"
            ref="submitButton"
            id="kt_sign_in_submit"
            class="btn btn-lg btn-success w-100 mb-5"
          >
            <span class="indicator-label"> {{ translate("submit") }} </span>

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
          <router-link to="/sign-in" class="text-info d-flex justify-content-center f-5">
            <KTIcon icon-name="arrow-left" icon-class="fs-4 me-1 text-info" />{{ translate("previousPage") }}
          </router-link>
      </div>
    </div>
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

export default defineComponent({
  name: "retrieve-pin",
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
    };
  },
  methods: {
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
