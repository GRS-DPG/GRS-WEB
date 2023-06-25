<template>
  <!--begin::Basic info-->
  <div class="card mt-10 mx-5">
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
        <h3 class="fw-bold m-0"> {{ translate('complainantsInfo') }}</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->

    <!--begin::Content-->
    <div id="kt_account_profile_details" class="collapse show">
      <!--begin::Form-->
        <!--begin::Card body-->
        <div class="card-body border-top p-9">
          <!--begin::Input group-->
          <div class="row m-0 mb-3">
            <!--begin::Label-->
            <label class="col-lg-3 col-form-label required fw-semobold fs-6 text-end py-2"> {{ translate('mobileNumber') }}</label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row position-relative px-0">
              <Field
                type="text"
                name="mobile_number"
                class="form-control form-control-sm"
                :placeholder="translate('mobileNumber')"
                v-model="citizen.mobile_number"
                @focusout="getComplainantInfo(citizen.mobile_number)"
              />
              <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="mobile_number" />
                  </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row m-0 mb-3">
            <!--begin::Label-->
            <label class="col-lg-3 col-form-label required fw-semobold fs-6 text-end py-2">{{ translate('fullName') }}</label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row position-relative px-0">
              <Field
                type="text"
                name="name"
                class="form-control form-control-sm"
                :placeholder="translate('fullName')"
                v-model="citizen.name"
              />
              <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="name" />
                  </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row m-0 mb-3">
            <!--begin::Label-->
            <label class="col-lg-3 col-form-label fw-semobold fs-6 text-end py-2">{{ translate('dateOfBirth') }}</label>
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-3 fv-row position-relative px-0">
              <el-date-picker
                v-model="citizen.birth_date"
                value-format="YYYY-MM-DD"
                format="DD-MM-YYYY"
                type="date"
                name="dob"
                style="
                  width: 100%;
                 
                  border-top-right-radius: 0;
                  border-bottom-right-radius: 0;
                "
              >
              </el-date-picker>
            </div>
            <!--end::Col-->
             <!--begin::Label-->
            <label class="col-lg-2 col-form-label fw-semobold fs-6 text-end py-2">{{ translate('gender') }}</label>
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-3 fv-row position-relative px-0">
              <el-select
                class="form-select-solid"
                :placeholder="translate('selectGender')"
                v-model="citizen.gender"
                filterable
                style="width: 100%;"
              >
                <el-option :label="translate('selectGender')" value="">
                    {{ translate('selectGender') }}</el-option>
                      <template v-if="currentLanguage=='en'">
                          <el-option label="Male" value="MALE">Male</el-option>
                          <el-option label="Female" value="FEMALE">Female</el-option>
                          <el-option label="Others" value="OTHER">Others</el-option>
                      </template>
                      <template v-if="currentLanguage=='bn'">
                          <el-option label="পুরুষ" value="MALE">পুরুষ</el-option>
                          <el-option label="নারী" value="FEMALE">নারী</el-option>
                          <el-option label="অন্যান্য" value="OTHER">অন্যান্য</el-option>
                      </template>
              </el-select>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row m-0 mb-2">
            <!--begin::Label-->
            <label class="col-lg-3 col-form-label fw-semobold fs-6 text-end py-2">{{ translate('occupation') }}</label>
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-3 fv-row position-relative px-0">
              <el-select
                class="form-select-solid"
                :placeholder="translate('chooseYourOccupation')"
                v-model="citizen.occupation"
                filterable
                style="width: 100%;"
              >
                <el-option :label="translate('chooseYourOccupation')" value="">
                    {{ translate('chooseYourOccupation') }}</el-option>
                    <template v-if="currentLanguage=='en'">
                      <el-option
                          v-for="occupation in occupationList"
                          :key="occupation?.id"
                          :label="occupation?.occupation_eng"
                          :value="occupation?.id"
                        >
                          {{ occupation?.occupation_eng }}</el-option>
                          </template>
                      <template v-if="currentLanguage=='bn'">
                        <el-option
                            v-for="occupation in occupationList"
                            :key="occupation?.id"
                            :label="occupation?.occupation_bng"
                            :value="occupation?.id"
                          >
                            {{ occupation?.occupation_bng }}</el-option>
                    </template>
              </el-select>
            </div>
            <!--end::Col-->
             <!--begin::Label-->
            <label class="col-lg-2 col-form-label fw-semobold fs-6 text-end py-2">{{ translate('academicQualification') }}</label>
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-3 fv-row position-relative px-0">
              <el-select
                class="form-select-solid"
                :placeholder="translate('chooseYourEducationLevel')"
                v-model="citizen.educational_qualification"
                filterable
                style="width: 100%;"
              >
                <el-option :label="translate('chooseYourEducationLevel')" value="">
                    {{ translate('chooseYourEducationLevel') }}</el-option>
                    <template v-if="currentLanguage=='en'">
                      <el-option
                          v-for="qualification in qualificationList"
                          :key="qualification?.id"
                          :label="qualification?.education_eng"
                          :value="qualification?.id"
                        >
                          {{ qualification?.education_eng }}</el-option>
                
                      </template>
                      <template v-if="currentLanguage=='bn'">
                        <el-option
                          v-for="qualification in qualificationList"
                          :key="qualification?.id"
                          :label="qualification?.education_bng"
                          :value="qualification?.id"
                        >
                          {{ qualification?.education_bng }}</el-option>
                    </template>
              </el-select>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

           <!--begin::Input group-->
          <div class="row m-0 mb-3">
           <!--begin::Col-->
            <div class="col-lg-3 fv-row position-relative px-0 pe-3">
              <el-select
                class="form-select-solid"
                v-model="citizen.identification_type"
                filterable
                style="width: 100%;"
              >
                    <template v-if="currentLanguage=='en'">
                      <el-option label="National ID" value="NID" selected=tr>National ID</el-option>
                      <el-option label="Birth Certificate Number" value="BCN">Birth Certificate Number</el-option>
                      <el-option label="Passport Number" value="PASSPORT">Passport Number</el-option>
                    </template>
                      <template v-if="currentLanguage=='bn'">
                        <el-option label="জাতীয় পরিচয়পত্র নম্বর" value="NID">জাতীয় পরিচয়পত্র নম্বর</el-option>
                        <el-option label="জন্মনিবন্ধন সনদ নম্বর" value="BCN">জন্মনিবন্ধন সনদ নম্বর</el-option>
                        <el-option label="পাসপোর্ট নম্বর" value="PASSPORT">পাসপোর্ট নম্বর</el-option>
                    </template>
              </el-select>
            </div>
            <!--end::Col-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row position-relative px-0">
              <template v-if="citizen.identification_type=='NID'">
                <Field 
                  type="text"
                  name="nidNumber"
                  class="form-control form-control-sm"
                  :placeholder="translate('nidRequired')"
                  v-model="citizen.identification_value"
                />
                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="nidNumber" />
                    </div>
                </div>
              </template>
              <template v-if="citizen.identification_type=='BCN'">
                <Field
                  type="text"
                  name="bcnNumber"
                  class="form-control form-control-sm"
                  :placeholder="translate('bcnRequired')"
                  v-model="citizen.identification_value"
                />
                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="bcnNumber" />
                    </div>
                </div>
              </template>
              <template v-if="citizen.identification_type=='PASSPORT'">
                <Field
                  type="text"
                  name="passportNumber"
                  class="form-control form-control-sm"
                  :placeholder="translate('passpordRequired')"
                  v-model="citizen.identification_value"
                />
                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="passportNumber" />
                    </div>
                </div>
              </template>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
           <!--begin::Input group-->
          <div class="row m-0 mb-1">
            <!--begin::Label-->
            <label class="col-lg-3 col-form-label fw-semobold fs-6 text-end">{{ translate('email') }}</label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row position-relative px-0">
              <Field
                type="text"
                name="email"
                class="form-control form-control-sm"
                :placeholder="translate('email')"
                v-model="citizen.email"
              />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row m-0 mb-2">
            <!--begin::Label-->
            <label class="col-lg-3 col-form-label fw-semobold fs-6 text-end py-2">{{ translate('country') }}</label>
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-3 fv-row position-relative px-0">
              <el-select
                class="form-select-solid"
                :placeholder="translate('pleaseSelect')"
                v-model="citizen.permanent_address_country_id"
                filterable
                style="width: 100%;"
              >
                <el-option :label="translate('pleaseSelect')" value="">
                    {{ translate('pleaseSelect') }}</el-option>
                    <template v-if="currentLanguage=='en'">
                       <el-option
                          v-for="nationality in nationalityList"
                          :key="nationality?.id"
                          :label="nationality?.country_name_eng"
                          :value="nationality?.id"
                        >
                          {{ nationality.country_name_eng }}</el-option>
                      </template>
                      <template v-if="currentLanguage=='bn'">
                        <el-option
                          v-for="nationality in nationalityList"
                          :key="nationality?.id"
                          :label="nationality?.country_name_bng"
                          :value="nationality?.id"
                        >
                          {{ nationality?.country_name_bng }}</el-option>
                    </template>
              </el-select>
            </div>
            <!--end::Col-->
             <!--begin::Label-->
            <label class="col-lg-2 col-form-label fw-semobold fs-6 text-end py-2">{{ translate('nationality') }}</label>
            <!--end::Label-->
            <!--begin::Col-->
            <div class="col-lg-3 fv-row position-relative px-0">
              <el-select
                class="form-select-solid"
                :placeholder="translate('pleaseSelect')"
                v-model="citizen.nationality_id"
                filterable
                style="width: 100%;"
              >
                <el-option :label="translate('pleaseSelect')" value="">
                    {{ translate('pleaseSelect') }}</el-option>
                    <template v-if="currentLanguage=='en'">
                      <el-option
                          v-for="nationality in nationalityList"
                          :key="nationality?.id"
                          :label="nationality?.nationality_eng"
                          :value="nationality?.id"
                        >
                          {{ nationality?.nationality_eng }}</el-option>
                      </template>
                      <template v-if="currentLanguage=='bn'">
                       <el-option
                          v-for="nationality in nationalityList"
                          :key="nationality?.id"
                          :label="nationality?.nationality_bng"
                          :value="nationality?.id"
                        >
                          {{ nationality?.nationality_bng }}</el-option>
                    </template>
              </el-select>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
      
      
          <!--begin::Input group-->
          <div class="row m-0 mb-3">
            <!--begin::Label-->
            <label class="col-lg-3 col-form-label fw-semobold required fs-6 text-end py-2"
              >{{ translate('address') }}</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row fv-row position-relative px-0">
             <Field
                type="text"
                name="permanent_address_street"
                class="form-control form-control-sm"
                v-model="citizen.permanent_address_street"
              />
              <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="permanent_address_street" />
                    </div>
                </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
            <!--begin::Input group-->
          <div class="row m-0">
            <div class="col-lg-3 col-form-label fw-semobold fs-6 text-end"></div>
            <!--begin::Col-->
            <div class="col-lg-8 fv-row fv-row position-relative px-0">
             <Field
                type="text"
                name="permanent_address_house"
                class="form-control form-control-sm"
                v-model="citizen.permanent_address_house"
              />
               <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="permanent_address_house" />
                    </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

        </div>
        <!--end::Card body-->

        <!--begin::Actions-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
         <button
            :data-kt-indicator="loading ? 'on' : null"
            class="btn btn-lg btn-primary"
            type="submit"
            @click="formSubmit()"
          >
            <span v-if="!loading" class="indicator-label">
              {{ translate("register") }}
              <span class="svg-icon svg-icon-3 ms-2 me-0">
                <inline-svg src="icons/duotune/arrows/arr064.svg" />
              </span>
            </span>
            <span v-if="loading" class="indicator-progress">
              {{ translate("pleaseWait") }}...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
          </div>
        <!--end::Actions-->
      <!--end::Form-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Basic info-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { layout } from "@/core/helpers/config";
import { computed, defineComponent, onMounted, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import KTEditor from "@/layouts/main-layout/toolbar/Editor.vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from '@/core/services/ApiService';
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
    const submitButton1 = ref<HTMLElement | null>(null);

    const profileDetailsValidator = Yup.object().shape({
      // name: Yup.string().required().label("Full name"),
      // mobile_number: Yup.string().required().label(translate("fieldIsRequired")),
      // nidNumber: Yup.string().required().label("Company"),
      // bcnNumber: Yup.string().required().label("Contact phone"),
      // passportNumber: Yup.string().label("Webside"),
      // permanent_address_street: Yup.string().required().label("Permanent address street"),
      // permanent_address_house: Yup.string().label("Permanent address house"),
    });
 

    return {
      index,
      submitButton1,
      profileDetailsValidator,
      layout,
      translate,
      currentLanguage,
      getAssetPath,
    };
  },
  data() {
      return {
        citizen: {
          name: '',
          identification_value: '',
          identification_type: 'NID',
          mobile_number: '',
          email: '',
          birth_date: '',
          occupation: '',
          educational_qualification: '',
          gender: '',
          nationality_id: 15,
          permanent_address_street: '',
          permanent_address_house: '',
          permanent_address_country_id: 15,
        },
        loading: false,
        filterOffice: [] as any,
        occupationList: [] as any,
        qualificationList: [] as any,
        nationalityList: [] as any,
       
        
      }
  },
  async created() {
  
 
     await this.getOccupationList();
     await this.getQualificationList();
     await this.getNationalityList();
  },
  methods: {
   async getOccupationList() {
      await ApiService.get('occupation/list')
        .then((response) => {
          this.occupationList = response.data.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async getQualificationList() {
      await ApiService.get('qualification/list')
        .then((response) => {
          this.qualificationList = response.data.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async getNationalityList() {
      await ApiService.get('nationality/list')
        .then((response) => {
          this.nationalityList = response.data.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async getComplainantInfo(mobile_number) {
      if(mobile_number){
        await ApiService.get('complainant/show?mobile_number=' + mobile_number)
          .then((response) => {
            if(response.data.data){
              this.citizen.mobile_number = '';
                  Swal.fire({
                    title: 'নিবন্ধিত অভিযোগকারী!',
                    text:  'আপনার প্রদানকৃত মোবাইল নম্বর দিয়ে পূর্বেই নিবন্ধন করা করা আছে, অনুগ্রহ করে লগইন করুন',
                    icon: "warning",
                    buttonsStyling: false,
                    heightAuto: false,
                    customClass: {
                      confirmButton: "btn fw-semobold btn-warning",
                  },
                  }).then(() => {
                  
                  });
              }
               
          })
          .catch(({ response }) => {
            console.log(response);
          });
      }
    },
    async formSubmit() {
      let formData = new FormData();
       for (var key in this.citizen) {
        formData.set(key, this.citizen[key]);
      }
      this.loading = true;
      await ApiService.post('complainant/save',formData)
      .then((response) => {
        this.loading = false;
        if(response.status == 200){
          Swal.fire({
              text:  'Registered Successfully.',
              icon: "success",
              buttonsStyling: false,
              heightAuto: false,
              customClass: {
                confirmButton: "btn fw-semobold btn-success",
            },
          }).then(() => {
            this.$router.push('/sign-in');
          });
          this.$router.push('/sign-in');
        }else{
          Swal.fire({
            title: 'Please check all the required field',
            html: response.data.data,
            icon: 'error',
            buttonsStyling: false,
            confirmButtonText: 'Close',
            customClass: {
              confirmButton: 'btn btn-danger',
            },
          });
        }
          
      })
      .catch(({ response }) => {
         this.loading = false;
        let err = '';
          for (const field of Object.keys(response.data.errors)) {
            err += response.data.errors[field][0] + '<br>';
          }
          Swal.fire({
            title: 'Please check all the required field',
            html: err,
            icon: 'error',
            buttonsStyling: false,
            confirmButtonText: 'Close',
            customClass: {
              confirmButton: 'btn btn-danger',
            },
          });
      });
    },
   
  },
});
</script>
<style lang="scss">
 body {
      background: unset !important;
      background-color: var(--bs-app-bg-color) !important;
  }
</style>