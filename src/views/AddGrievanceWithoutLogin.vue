<template>
  <!--begin::Basic info-->
  <div class="card mt-10 mx-5">
    <!--begin::Card header-->
    <div
      class="card-header cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_add_grievance_without_login"
      aria-expanded="true"
      aria-controls="kt_add_grievance_without_login"
    >
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bold m-0"> {{ translate("grievanceSubmissionForm") }}</h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->

    <!--begin::Content-->
    <div id="kt_add_grievance_without_login" class="collapse show">
      <!--begin::Form-->
      <div class="complainant mt-8 border-bottom px-8" style="border-color: #683091 !important;" v-if="!authCheck">
          <div class="row">
            <h4 class="text-danger text-center mb-6 fs-6">{{ translate("withoutLoginGrievancePageMsg") }}</h4>
          </div>
          <!--begin::Input group-->
          <div class="row m-0 mb-6">
            <!--begin::Label-->
            <label class="col-lg-3 col-form-label fw-semobold fs-6 text-end"
              >{{ translate("mobileNumber") }}</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-7 fv-row px-0">
            <Field
                type="text"
                name="mobile_number"
                class="form-control form-control-sm"
                :placeholder="translate('mobileNumber')"
                v-model="mobile_number"
              />
              </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row m-0 mb-6">
            <!--begin::Label-->
            <label class="col-lg-3 col-form-label fw-semobold fs-6 text-end"
              >{{ translate("fullName") }}</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-7 fv-row px-0">
            <Field
                type="text"
                name="name"
                class="form-control form-control-sm"
                :placeholder="translate('fullName')"
                v-model="name"
              />
              </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="row m-0 mb-6">
            <!--begin::Label-->
            <label class="col-lg-3 col-form-label fw-semobold fs-6 text-end"
              >{{ translate("email") }}</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-7 fv-row px-0">
            <Field
                type="text"
                name="email"
                class="form-control form-control-sm"
                :placeholder="translate('email')"
                v-model="email"
              />
              </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
        </div>
        <!--begin::Card body-->
        <div class="card-body p-9">
          <!--begin::Input group-->
          <div class="row m-0">
            <!--begin::Label-->
            <label class="col-lg-3 col-form-label required fw-semobold fs-6 text-end"
              >{{ translate("chooseOfficeFromList") }}</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-7 fv-row position-relative px-0">
              <Field
               v-if="currentLanguage=='en'"
                type="text"
                name="searchOffice"
                class="form-control form-control-sm"
                :placeholder="translate('TypeHereSearchOffice')"
                v-model="filterOfficeName"
                @keyup ="searchOfficeData(filterOfficeName)"
              />
               <Field
                v-if="currentLanguage=='bn'"
                type="text"
                name="searchOffice"
                class="form-control form-control-sm"
                :placeholder="translate('TypeHereSearchOffice')"
                v-model="filterOfficeNameBN"
                @keyup ="searchOfficeData(filterOfficeNameBN)"
              />
              <div class="container-serach-office" v-if="showSearchOffice">
                <ul>
                  <li v-for="info in filterOffice"   :key="info.id" v-on:click="officeName(info.id)">
                    <p class="m-0" v-if="currentLanguage=='en'">{{ info.name }}</p>
                    <p class="m-0" v-if="currentLanguage=='bn'">{{ info.nameBN }}</p>
                  </li>
                 
                </ul>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
           <div class="row m-0">
             <div class="col-lg-3"></div><label class="col-lg-7 col-form-label text-center fw-semobold fs-6 mb-1">{{ translate("or") }}</label>
           </div>
           <!--begin::Input group-->
          <div class="row m-0 mb-6">
            <div class="col-lg-3"></div>
            <!--begin::Col-->
            <div class="col-lg-7">
              <!--begin::Row-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-lg-4 fv-row ps-0">
                   <el-select
                    class="form-select-solid"
                    :placeholder="translate('selectOfficeType')"
                    v-model="officeLayers"
                    filterable
                    @change="changeOfficeLayer(officeLayers)"
                    style="width: 100%"
                  >
                   <el-option :label="translate('selectOfficeType')" value="">
                        {{ translate('selectOfficeType') }}</el-option>
                        <template v-if="currentLanguage=='en'">
                          <el-option
                              v-for="office in officeLayerData"
                              :key="office?.layer_level"
                              :label="office?.name_en"
                              :value="office?.layer_level"
                            >
                              {{ office?.name_en }}</el-option>
                              </template>
                         <template v-if="currentLanguage=='bn'">
                          <el-option
                              v-for="office in officeLayerData"
                              :key="office?.layer_level"
                              :label="office?.name"
                              :value="office?.layer_level"
                            >
                              {{ office?.name }}</el-option>
                        </template>
                  </el-select>
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-lg-4 fv-row px-0" v-if="firstSelectionShow">
                  <el-select
                    class="form-select-solid"
                    :placeholder="translate('pleaseSelect')"
                    v-model="firstSelection"
                    @change="changeOfficeOrigin(firstSelection)"
                    filterable
                    style="width: 100%"
                  >
                    <template v-if="currentLanguage=='bn'">
                      <el-option :label="officeSelectBN"> {{officeSelectBN}}</el-option>
                       <template v-if="showOfficeOrigin">
                         <el-option
                              v-for="office in officeOrigin"
                              :key="office?.id"
                              :label="office?.office_name_bng"
                              :value="office.id"
                            >
                              {{ office?.office_name_bng }}</el-option
                            >
                       </template>
                      <template v-else>
                          <el-option
                              v-for="office in officeOrigin"
                              :key="office?.id"
                              :label="office?.name"
                              :value="office?.id"
                            >
                              {{ office?.name }}</el-option
                            >
                      </template>
                    </template>
                     <template v-if="currentLanguage=='en'">
                     <el-option :label="officeSelectEN"> {{officeSelectEN}}</el-option>
                      <template v-if="showOfficeOrigin">
                         <el-option
                              v-for="office in officeOrigin"
                              :key="office?.id"
                              :label="office?.office_name_eng"
                              :value="office?.id"
                            >
                              {{ office?.office_name_eng }}</el-option
                            >
                       </template>
                      <template v-else>
                          <el-option
                            v-for="office in officeOrigin"
                            :key="office?.id"
                            :label="office?.name_en"
                            :value="office?.id"
                          >
                            {{ office?.name_en }}</el-option
                          >
                      </template>
                    </template>
                  </el-select>
                 
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-lg-4 fv-row pe-0" v-if="secondSelectionShow">
                  <el-select
                    class="form-select-solid"
                    v-model="officeId"
                    :placeholder="translate('pleaseSelect')"
                    filterable
                    style="width: 100%"
                  >
                   <template v-if="currentLanguage=='bn'">
                      <el-option :label="officeSelectBN"> {{officeSelectBN}}</el-option>
                    <el-option 
                          v-for="office in officeData"
                          :key="office?.id"
                          :label="office?.office_name_bng"
                          :value="office?.id"
                        >
                          {{ office?.office_name_bng }}</el-option
                        >
                   </template>
                  <template v-if="currentLanguage=='en'">
                     <el-option :label="officeSelectEN"> {{officeSelectEN}}</el-option>
                        <el-option
                          v-for="office in officeData"
                          :key="office?.id"
                          :label="office?.office_name_eng"
                          :value="office?.id"
                        >
                          {{ office?.office_name_eng }}</el-option
                        >
                    </template>
                  </el-select>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
      
          <!--begin::Input group-->
          <div class="row m-0 mb-6">
            <!--begin::Label-->
            <label class="col-lg-3 col-form-label fw-semobold fs-6 text-end"
              >{{ translate("grievanceSubject") }}</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-7 fv-row px-0">
             <Field
                type="text"
                name="company"
                class="form-control form-control-sm"
                :placeholder="translate('grievanceSubject')"
                v-model="subject"
              />
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
           <!--begin::Input group-->
          <div class="row m-0 mb-6">
            <!--begin::Label-->
            <label class="col-lg-3 col-form-label required fw-semobold fs-6 text-end"
              >{{ translate("description") }}</label
            >
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-7 fv-row h-100 px-0">
               <KTEditor />
             <!--begin::Editor-->
              <div id="kt_forms_widget_1_editor" style="min-height: 150px">
               <!-- <textarea
                  v-model="description"
                  class="form-control form-control-solid mb-8"
                  rows="5"
                >
               </textarea> -->
              </div>
             <!--end::Editor-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

        </div>
        <!--end::Card body-->

        <!--begin::Actions-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <a id="kt_grievance_view_preview_toogle"
            type="button"
            @click="grievancePreview()"
            class="btn btn-light btn-active-light-primary me-2"
          >
            {{ translate("viewPreview") }}
          </a>

          <!-- <button
            type="submit"
            id="kt_kt_add_grievance_submit"
            ref="submitButton1"
            class="btn btn-primary"
          >
            <span class="indicator-label"> {{ translate("sendYourGrievance") }} </span>
            <span class="indicator-progress">
             {{ translate("pleaseWait") }}...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button> -->
          <button
            :data-kt-indicator="loading ? 'on' : null"
            class="btn btn-lg btn-primary"
            type="submit"
            @click="formSubmit()"
          >
            <span v-if="!loading" class="indicator-label">
              {{ translate("sendYourGrievance") }}
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
  <KTViewPreviewDrawer></KTViewPreviewDrawer>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { layout } from "@/core/helpers/config";
import { computed, defineComponent, onMounted, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import KTEditor from "@/layouts/main-layout/toolbar/Editor.vue";
import KTViewPreviewDrawer from "@/layouts/main-layout/drawers/ViewPreviewDrawer.vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from '@/core/services/ApiService';
import * as Yup from "yup";
import { useI18n } from "vue-i18n";
import { useBus } from '@/bus';
import JwtService from "@/core/services/JwtService";
export default defineComponent({
name: "add-grievance",
 components: {
    ErrorMessage,
    Field,
    VForm,
    KTEditor,
    KTViewPreviewDrawer
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
    const authCheck = computed(() => {
      if (JwtService.getToken()) {
          return true;
      }else{
        return false;
      }
    });

    return {
      index,
      layout,
      translate,
      currentLanguage,
      authCheck,
      getAssetPath,
    };
  },
  data() {
      return {
        api_url: '',
        searchOfficeId: '',
        firstSelection: '',
        officeId: '',
        description: '',
        subject: '',
        name: '',
        mobile_number: '',
        email: '',
        searchOffice: '',
        filterOfficeName: '',
        filterOfficeNameBN: '',
        officeLayers: '',
        officeSelectEN : 'Please Select',
        officeSelectBN : 'মন্ত্রণালয়/বিভাগ বাছাই করুন',
        loading: false,
        load: false,
        showSearchOffice: false,
        secondSelectionShow: false,
        firstSelectionShow: false,
        showOfficeOrigin: false,
        filterOffice: [] as any,
        officeLayerData: [] as any,
        officeList: [] as any,
        officeData: [] as any,
        officeOrigin: [] as any,
        userInfo: [] as any,
      }
  },
  async created() {
  await this.getOfficeLayer();
  },
   methods: {
    async getOfficeLayer() {
      let api_url = 'custom-layer-level';
      let api_type = 'POST';
      await ApiService.get('doptor/api?api_url='+ api_url +'&api_type='+ api_type)
        .then((response) => {
          this.officeLayerData = response.data.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async changeOfficeLayer(layer_levels) {
      if(layer_levels == 1){
        this.getOfficeData(layer_levels);
        this.secondSelectionShow = true;
        this.firstSelectionShow = false;
        this.showOfficeOrigin = false;
        this.officeSelectBN = 'মন্ত্রণালয়/বিভাগ বাছাই করুন';
        this.officeSelectEN = 'Please Select Ministry/Division';
      }
      else if(layer_levels == 2){
        this.getOfficeData(layer_levels);
        this.secondSelectionShow = true;
        this.firstSelectionShow = false;
        this.showOfficeOrigin = false;
        this.officeSelectBN = 'অধিদপ্তর/পরিদপ্তর বাছাই করুন';
        this.officeSelectEN = 'Please Select Directorate';
      }
      else if(layer_levels == 3){
        this.getCustomLayer(layer_levels);
        this.secondSelectionShow = false;
        this.firstSelectionShow = true;
        this.showOfficeOrigin = false;
        this.officeSelectBN = 'বাছাই করুন';
        this.officeSelectEN = 'Please Select';
      }else{
        this.getOfficeOrigin(layer_levels);
        this.secondSelectionShow = false;
        this.firstSelectionShow = true;
        this.showOfficeOrigin = true;
        this.officeSelectBN = 'বাছাই করুন';
        this.officeSelectEN = 'Please Select';
      }
    },
    async changeOfficeOrigin(office_origin) {
      if(this.officeLayers == '3'){
        this.showOfficeOrigin = false;
      }else{
        this.showOfficeOrigin = true;
      }
        this.getOfficeData(office_origin);
        this.secondSelectionShow = true;
        this.firstSelectionShow = true;

        console.log(office_origin);
     
    },
    async getOfficeData(layer_levels) {
      let api_url = 'offices';
      let api_type = 'POST';
      let parms = '';
      if(this.officeLayers == '1' || this.officeLayers == '2'){
        parms = '&layer_levels=' + layer_levels;
      }else if (this.officeLayers == '3'){
        parms = '&custom_layer_ids=' + layer_levels;
      }else{
         parms = '&office_origin_ids=' + layer_levels;
      }
      await ApiService.get('doptor/api?api_url='+ api_url +'&api_type='+ api_type + parms)
        .then((response) => {
          this.officeData = response.data.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async getCustomLayer(layer_levels) {
      let api_url = 'custom-layer-level';
      let api_type = 'POST';
      await ApiService.get('doptor/api?api_url='+ api_url +'&api_type='+ api_type + '&layer_levels=' + layer_levels)
        .then((response) => {
          this.officeOrigin = response.data.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async getOfficeOrigin(layer_levels) {
      let api_url = 'office-origins';
      let api_type = 'POST';
      await ApiService.get('doptor/api?api_url='+ api_url +'&api_type='+ api_type + '&layer_levels=' + layer_levels)
        .then((response) => {
          this.officeOrigin = response.data.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async formSubmit() {
      let editorElement = '' as any;
      editorElement = document.querySelector('#kt_forms_widget_1_editor .ql-editor');
      const description = editorElement.innerHTML;
      let formData = new FormData();
      let user = localStorage.getItem("_grs_user") as any;
      this.userInfo = JSON.parse(user);
      if( this.userInfo){
        if(localStorage.getItem("_administrative_user")){
          formData.set('complainant_id', this.userInfo.user.employee_record_id);
          formData.set('is_grs_user', '0');
        }else{
          formData.set('complainant_id', this.userInfo.id);
          formData.set('is_grs_user', '1');
        }
      }
     
      formData.set('officeId', this.officeId);
      formData.set('description', description);
      formData.set('subject', this.subject);
      // if( this.userInfo){
      //   formData.set('complainant_id', this.userInfo.id);
      // }
     
      formData.set('mobile_number', this.mobile_number);
      formData.set('name', this.name);
      formData.set('email', this.email);
      
      this.loading = true;
      await ApiService.post('public-grievance/save',formData)
      .then((response) => {
          this.loading = false;
        Swal.fire({
            text:  'Save Successfully.',
            icon: "success",
            buttonsStyling: false,
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semobold btn-success",
          },
        }).then(() => {
          this.$router.push('/');
        });
          
      })
      .catch(({ response }) => {
        console.log(response);
      });
    },
    grievancePreview(){
      const { bus } = useBus();
      let editorElement = '' as any;
      editorElement = document.querySelector('#kt_forms_widget_1_editor .ql-editor');
      const description = editorElement.innerHTML;
      let value = {
        subject:  this.subject,
        description:  description,
        officeId:  this.officeId,
       };
       bus.emit('grievance-preview', value);
    },
    searchOfficeData(office) {
      if(office){
        let timer;
        clearTimeout(timer);
        timer = setTimeout(() => { 
          this.filterOfficeByName(office); this.showSearchOffice = true;  
        }, 1000);
      }
    },
   
    async filterOfficeByName(office) {

      let prams = '';
      if(localStorage.getItem("lang") == 'en'){
        prams = 'name=' + office;
      }else{
         prams = 'nameBn=' + office;
      }
      await ApiService.get('doptor/office?prams='+ prams)
        .then((response) => {
          this.filterOffice = response.data.data;
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async officeName(id) {
      this.searchOfficeId = id; 
      this.showSearchOffice = false; 
      this.load = true; 
      let parms = '&office_ids=' + id;
      let api_url = 'offices';
      let api_type = 'POST';
       await ApiService.get('doptor/api?api_url='+ api_url +'&api_type='+ api_type + parms)
        .then((response) => {
          this.filterOfficeName = response.data.data[id].office_name_eng;
          this.filterOfficeNameBN = response.data.data[id].office_name_bng;
          this.officeLayers = response.data.data[id].office_layer.layer_level;
          this.changeOfficeLayer(this.officeLayers);
          let layer_levels = '';
           if(this.officeLayers == '1' || this.officeLayers == '2'){
              layer_levels = this.officeLayers;
            }else if (this.officeLayers == '3'){
              layer_levels = response.data.data[id].custom_layer_id;
              this.firstSelection = response.data.data[id].custom_layer_id;
               this.showOfficeOrigin = false;
               this.firstSelectionShow = true;
            }else{
              this.showOfficeOrigin = true;
              layer_levels = response.data.data[id].office_origin_id;
              this.firstSelection = response.data.data[id].office_origin_id;
            }
          this.getOfficeData(layer_levels);
          this.officeId = id;
          this.secondSelectionShow = true;
          this.load = false; 
        })
        .catch(({ response }) => {
          console.log(response);
        });
      console.log(id);
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
