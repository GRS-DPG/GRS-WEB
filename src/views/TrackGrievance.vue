<template>
  <!--begin::Wrapper-->
  <div
    class="w-lg-550px bg-white rounded shadow-sm p-6 py-10 mx-auto my-15 row"
  >
    <div class="px-10 my-auto col-md-12 mt-3">
      <!--begin::Input group-->
      <div class="fv-row mb-8">
        <!--begin::Label-->
        <label class="form-label fs-6 fw-bolder text-dark">{{
          translate("trackingNo")
        }}</label>
        <!--end::Label-->

        <!--begin::Input-->
        <Field
          class="form-control form-control-lg form-control-solid"
          type="text"
          name="trackGrievance"
          autocomplete="off"
          v-model="trackingNO"
        />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="trackGrievance" />
          </div>
        </div>
      </div>
      <!--end::Input group-->
      <!--begin::Actions-->
      <div class="text-center">
        <!--begin::Submit button-->
        <button
          @click="onSubmitTrackGrievance()"
          type="submit"
          ref="submitButton"
          id="kt_track_grievance_submit"
          class="btn btn-lg btn-success w-100 mb-5"
        >
          <span class="indicator-label">{{ translate("trackGrivence") }}</span>

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
    </div>
  </div>
  <!--begin::tracking summary-->
  <div class="card mt-10 mx-20" v-show="grievanceTracShow">
    <!--begin::Card header-->
    <div
      class="card-header cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_profile_details"
      aria-expanded="true"
      aria-controls="kt_account_profile_details"
    >
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h2 class="fw-bold m-0">{{ translate("trackingSummary") }}</h2>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->

    <!--begin::Content-->
    <div id="kt_account_profile_details" class="collapse show">
      <!--begin::Form-->
      <!--begin::Card body-->
      <div class="card-body border-top p-9">
        <div class="row">
          <div class="col-lg-6">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td>{{translate("trackingNumber")}}:</td>
                  <td>{{ grievanceTracInfo.tracking_number }}</td>
                </tr>
                <tr>
                  <td>{{translate("grievanceCurrentStatus")}}:</td>
                  <td>{{ grievanceTracInfo.current_status }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-lg-6">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td>{{translate("grievanceSubject")}}:</td>
                  <td>{{ grievanceTracInfo.subject }}</td>
                </tr>
                <tr>
                  <td>{{translate("grievanceDate")}}:</td>
                  <td>
                    {{ grievanceTracInfo.submission_date }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!--end::Card body-->
      <!--end::Form-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Basic info-->
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { layout } from "@/core/helpers/config";
import { computed, defineComponent, onMounted, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import KTEditor from "@/layouts/main-layout/toolbar/Editor.vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from "@/core/services/ApiService";
import * as Yup from "yup";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "add-grievance",
  components: {
    ErrorMessage,
    Field,
    VForm,
    KTEditor,
  },
  setup() {
    const index = 0;
    const shown: boolean = false;
    const { t, te } = useI18n();
    const i18n = useI18n();
    i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "bn";
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

    return {
      index,
      layout,
      translate,
      currentLanguage,
      getAssetPath,
    };
  },
  data() {
    return {
      api_url: "",
      trackingNO: "",
      grievanceTracInfo: [] as any,
      grievanceTracShow: false,

    };
  },

  methods: {
    async onSubmitTrackGrievance() {
      if(this.trackingNO){
        await ApiService.get("/grievance-track?tracking_number=", this.trackingNO)
        .then((response) => {
          if (response.data.data) {
            this.grievanceTracInfo = response.data.data;
            this.grievanceTracShow = true;
            // Swal.fire({
            //   title: "Grievance found!",
            //   icon: "success",
            // });
          } else {
            this.grievanceTracShow = false;
            Swal.fire({
              title: "Grievance not found!",
              icon: "warning",
            });
          }
        })
        .catch(({ response }) => {
          console.log(response);
        });
      }else{
        Swal.fire({
              title: "Please Input Your Tracking No",
              icon: "warning",
            });
      }
   
    },
  },
});
</script>
