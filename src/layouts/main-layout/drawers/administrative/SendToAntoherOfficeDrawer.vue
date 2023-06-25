<template>
  <!--begin::send_to_another_office drawer-->
  <div
    id="kt_send_to_another_office"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="send_to_another_office"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
     data-kt-drawer-width="{default:'300px', 'lg': '1000px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_send_to_another_office_toogle"
    data-kt-drawer-close="#kt_send_to_another_office_close"
  >
    <div class="card shadow-none w-100">
      <!--begin::Header-->
      <div class="card-header" id="kt_send_to_another_office_header">
        <h3 class="card-title fw-bold text-dark">{{translate('forwardToAnotherOffice')}}</h3>
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_send_to_another_office_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body position-relative" id="kt_send_to_another_office_body">
        <!--begin::Content-->
        <div
          id="kt_send_to_another_office_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_send_to_another_office_body"
          data-kt-scroll-dependencies="#kt_send_to_another_office_header, #kt_send_to_another_office_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="modal-body">
              <div class="form-group">
                <label class="mb-1">{{translate('note')}}:</label>
                <div class="">
                  <KTEditor />
                  <!--begin::Editor-->
                    <div id="kt_forms_widget_2_editor" style="min-height: 150px" v-html="note">
                    </div>
                  <!--end::Editor-->
                </div>
              </div>
              <div class="form-group mt-5">
                <div class="">
                <label class="fw-semobold fs-6 text-end">{{ translate("grievanceRelatedProofs") }} ({{ translate("ifAny") }})</label>
                <div class="row">
                  <div class="col-lg-4">
                    <button
                        class="btn btn-sm btn-primary d-block mt-1" style="background-color: #32c5d2; !important"
                        @click="uploadFile()"
                      >
                        <KTIcon icon-name="plus" icon-class="fs-2"/>
                        {{ translate("addFiles") }}...
                      </button>
                    <input multiple type="file" class="fileInput2" @change="onFileChange" style="visibility: hidden;">
                  </div>
                    <div class="col-lg-8">
                      <p class="m-0 font-purple fs-6">( {{ translate("fileSizeMessage") }} png, PNG, jpeg, JPEG, bmp, doc, DOC, docx, DOCX, pdf, PDF, xls, xlsx, mp3, MP3, 3gp, 3GP, mp4, MP4, flv, FLV, avi, zip, rar )</p>
                    </div>
                </div>
                </div>
                <div v-if="files" >
                  <div class="row" v-for="(image, index) in files" :key="index" style="background-color: #fbfcfd; padding: 10px; border-bottom: 1px solid #ddd;">
                    <div class="col-lg-3 d-flex align-items-center">
                      <img :src="image.src" v-if="image.type == 'png' || image.type == 'jpeg'" style="width: 80px; height: 80px;"/>
                      <img :src="getAssetPath('media/logos/docx.png')" v-if="image.type == 'docx'" style="width: 50px; height: 50px;"/>
                      <img :src="getAssetPath('media/logos/pdf.png')" v-if="image.type == 'pdf'" style="width: 50px; height: 50px;"/>
                      <img :src="getAssetPath('media/logos/xlsx.png')" v-if="image.type == 'xlsx'" style="width: 50px; height: 50px;"/>
                      <img :src="getAssetPath('media/logos/audio.png')" v-if="image.type == 'mp3'" style="width: 60px; height: 60px;"/>
                      <img :src="getAssetPath('media/logos/video.png')" v-if="image.type == '3gp' || image.type == 'mp4' || image.type == 'avi'" style="width: 60px; height: 60px;"/>
                    </div>
                    <div class="col-lg-8">
                      <p>{{image.name}}</p>
                      <p class="text-white bg-danger p-2  w-150px text-center" v-if="image.size >10"> {{ translate("fileTooLarge") }}</p>
                      <Field
                        v-else-if="image.type =='jpeg' || image.type =='png' || image.type =='docx' || image.type =='pdf'|| image.type =='xlsx' || image.type =='mp3' || image.type =='3gp' || image.type =='mp4'|| image.type =='avi'"
                        type="text"
                        class="form-control form-control-sm"
                        :placeholder="translate('provideDetailsOfAttachedFile')"
                        :name="fileNameByUser"
                        v-model="fileNameByUser[index]"
                      />
                      <p class="text-white bg-danger p-2 w-200px text-center" v-else> {{ translate("fileTypeNotAllowed") }}</p>
                    </div>
                    <div class="col-lg-1 d-flex align-items-center">
                      
                      <a  @click="removeImage(index)">
                        <KTIcon icon-name="trash-square" v-if="image.type =='jpeg' || image.type =='png' || image.type =='docx' || image.type =='pdf'|| image.type =='xlsx' || image.type =='mp3' || image.type =='3gp' || image.type =='mp4'|| image.type =='avi'" icon-class="text-danger" style="font-size: 40px !important;cursor: pointer;" /> 
                        <KTIcon icon-name="cross-circle" v-else-if="image.size >10" icon-class="text-danger" style="font-size: 40px !important;cursor: pointer;" /> 
                        <KTIcon icon-name="cross-circle" v-else icon-class="text-danger" style="font-size: 40px !important;cursor: pointer;" /> 
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group mt-7">
                <div class="input-group">
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
              </div>
              <div class="form-group text-center">
                <label class="my-2">{{translate('or')}}</label>
              </div>
               <div class="form-group">
                 <!--begin::Row-->
                  <div class="row m-0">
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
                        @change="getServiceList()"
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
              <div class="form-group mt-7">
                <label class="my-2">{{translate('selectServiceCommitment')}}({{translate('serviceSelectAlert')}})</label>
                <p class="mb-1">{{translate('nameOfOtherServices')}}:</p>
                <div class="input-group w-50">
                  <Field
                      type="text"
                      name="otherService"
                      class="form-control form-control-sm"
                      :placeholder="translate('nameOfOtherServices')"
                      v-model="otherService"
                    />
                </div>
                 <div class="m-3">
                    <p class="form-check form-check-custom form-check-solid mb-2"  v-for="service in serviceList" :key="service?.id">  
                      <input
                        class="form-check-input me-2"
                        type="radio"
                        name="serviceId"
                        :value="service?.id"
                        v-model="serviceId"
                      /> 
                        {{service?.service_name_bng}}
                    </p>
                 </div>
              </div>
          </div>
        </div>
      </div>
      <!--end::Body-->
      <!--begin::Footer-->
      <div
        class="card-footer py-5 text-end"
        id="kt_send_to_another_office_footer"
      >
       
        <!--begin::Button-->
        <button
          :data-kt-indicator="loading ? 'on' : null"
          class="btn btn-lg btn-primary me-5"
          type="submit"
          @click="formSubmit()"
        >
          <span v-if="!loading" class="indicator-label">
           {{ translate("send") }}
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
        <!--end::Button-->

        <!--begin::Button-->
        <button
          type="reset"
          id="kt_send_to_another_office_close"
          class="btn btn-danger"
        >
           {{ translate("cancel") }}
        </button>
        <!--end::Button-->

      </div>
      <!--end::Footer-->
    </div>
  </div>
  <!--end::send_to_another_office drawer-->
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import KTEditor from "@/layouts/main-layout/toolbar/Editor2.vue";
import { getAssetPath } from "@/core/helpers/assets";
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from '@/core/services/ApiService';
import { DrawerComponent } from '@/assets/ts/components/_DrawerComponent';
import Tree from "vue3-tree";
import "vue3-tree/dist/style.css";
export default defineComponent({
  name: "kt-send-to-another-office-drawer",
  components: {
    ErrorMessage,
    Field,
    VForm,
    KTEditor,
    Tree,
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

    // const onNodeExpanded = (node, state) => {
    //   console.log("state: ", state);
    //   console.log("node: ", node);
    // };

    // const onUpdate = (nodes) => {
      //console.log("nodes:", nodes);
    // };

    // const onNodeClick = (node) => {
    //   console.log(node);
    // };

    return {
      //data,
      //searchText,
      //onNodeExpanded,
      //onUpdate,
      //onNodeClick,
      index,
      getAssetPath,
      translate,
      currentLanguage,
    };
  },
  data() {
    return {
      api_url: "",
      searchOfficeId: '',
      firstSelection: '',
      officeId: '',
      description: '',
      subject: '',
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
      note: "",
      otherService: "",
      complaintId: "" as any,
      singleGrievance: [] as any,
      officers: [] as any,
      files: [] as any,
      inputFiles: [] as any,
      fileNameByUser: {} as any,
      fileName: [] as any,
      organogram: [] as any,
      serviceList: [] as any,
      
    };
  },
  async created() {
    this.complaintId = this.$route.params.id;
    this.note = this.translate("anotherOfficeSendNote");
    await this.getSingleGrievance();
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
  },
  async getSingleGrievance() {
    await ApiService.get('grievance/info?complaint_id='+ this.complaintId)
      .then((response) => {
        this.singleGrievance = response.data.data;
      })
      .catch(({ response }) => {
        console.log(response);
      });
  },
  async formSubmit() {
      this.loading = true;
      let formData = new FormData();
      formData.set('complaint_id', this.complaintId);
      formData.set('feedback_comments', this.note);
      await ApiService.post('grievance/rate-us',formData)
      .then((response) => {
        DrawerComponent?.hideAll();
        Swal.fire({
            text:  'Save Successfully.',
            icon: "success",
            buttonsStyling: false,
            heightAuto: false,
            customClass: {
            confirmButton: "btn fw-semobold btn-success",
          },
        })
          
      })
      .catch(({ response }) => {
        console.log(response);
      });
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.inputFiles.push(files);
      this.createImage(files);
    },
    createImage(files) {
      var vm = this;
      for (var index = 0; index < files.length; index++) {
        let name = files[index].name;
        let type = name.split('.').pop();
        let size = files[index].size;
        size = size/10485760;
        var reader = new FileReader();
        reader.onload = function(event) {
          if(event.target){
            const imageUrl = event.target.result;
            let data = {
              src:imageUrl,
              name: name,
              type: type,
              size: size,
            };
            vm.files.push(data);
          }
           
        }
        reader.readAsDataURL(files[index]);
      }
      
    },
    removeImage(index) {
      this.files.splice(index, 1)
    },

    uploadFile(){
      let button = '' as any;
        button = document.querySelector('.fileInput2');
      if (button) {
        button.click();
      }
    },

  async getServiceList() {
    await ApiService.get('service/list?office_id='+ this.officeId)
      .then((response) => {
        this.serviceList = response.data.data;
      })
      .catch(({ response }) => {
        console.log(response);
      });
   },

  },
});
</script>
