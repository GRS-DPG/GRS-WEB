<template>
  <!--begin::send_for_opinion drawer-->
  <div
    id="kt_send_for_opinion"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="send_for_opinion"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
     data-kt-drawer-width="{default:'300px', 'lg': '1000px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_send_for_opinion_toogle"
    data-kt-drawer-close="#kt_send_for_opinion_close"
  >
    <div class="card shadow-none w-100">
      <!--begin::Header-->
      <div class="card-header" id="kt_send_for_opinion_header">
        <h3 class="card-title fw-bold text-dark">{{translate('sendForOpinion')}}</h3>
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_send_for_opinion_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body position-relative" id="kt_send_for_opinion_body">
        <!--begin::Content-->
        <div
          id="kt_send_for_opinion_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_send_for_opinion_body"
          data-kt-scroll-dependencies="#kt_send_for_opinion_header, #kt_send_for_opinion_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="modal-body">
              <div class="form-group">
                <label class="mb-1">{{translate('lastDateToSendOpinion')}}</label>
                <div class="input-group">
                  <el-date-picker
                    @change="dateChange"
                    v-model="deadline"
                    value-format="YYYY-MM-DD"
                    format="DD-MM-YYYY"
                    type="date"
                    name="dob"
                    style="
                      width: 250px;
                      border-top-right-radius: 0;
                      border-bottom-right-radius: 0;
                    "
                  >
                  </el-date-picker>
                </div>
              </div>
              <div class="form-group mt-3">
                <label class="mb-1">{{translate('note')}}:</label>
                <div class="">
                  <KTEditor />
                  <!--begin::Editor-->
                    <div id="kt_forms_widget_1_editor" style="min-height: 150px" v-html="note">
                    </div>
                  <!--end::Editor-->
                </div>
              </div>

              <div class="form-group mt-5">
                <label class="mb-3">{{translate('selectedOfficer')}} ({{translate('selectedOfficerMessage')}}):</label>
                <div class="">
                   <table class="table">
                    <thead>
                      <tr class="border-bottom">
                        <th><b>{{translate('designation')}}</b></th>
                        <th><b>{{translate('name')}}</b></th>
                        <th><b>{{translate('principalRecipient')}}</b></th>
                        <th><b>{{translate('copyRecipient')}}</b></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-bottom" v-for="(officer, index) in officers" :key="index">
                          <th>{{officer.designation}}</th>
                          <td>{{officer.name}}</td>
                          <td>
                            <label class="form-check form-check-custom form-check-solid me-5">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="receiverNodes"
                                :value="officer.id"
                                v-model="receiverNodes" 
                                :checked="officer.receiverCheck"
                                @change="handleRadioChange(index)"
                              />
                            </label>
                          </td>
                          <td>
                            <label
                              class="form-check form-check-sm form-check-custom form-check-solid"
                            >
                              <input
                                v-model="officer.ccCheck" 
                                v-bind:id="officer.id"
                                class="form-check-input"
                                type="checkbox"
                                name="ccNodes"
                                :value="officer.id" 
                                :disabled="officer.receiverCheck"
                               
                              />
                            </label>
                          </td>
                       
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="form-group border my-5 p-4" style="border-color: #683091 !important;">
                <label class="mb-1">{{translate('selectDesignation')}}:</label>
                <div class="">
                  <Tree
                    :nodes="organogram"
                    :search-text="searchText"
                    :use-checkbox="true"
                    :use-icon="true"
                    :show-child-count="false"
                    @nodeExpanded="onNodeExpanded"
                    @update:nodes="onUpdate"
                    @nodeClick="onNodeClick"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                   <div class="col-lg-3">
                     <button
                        class="btn btn-danger"
                        @click="previousAttachment()"
                        type="button"
                      >
                       <KTIcon icon-name="some-files" icon-class="fs-2" /> {{translate('previouslyAddedFiles')}}
                      </button>
                   </div>
                   <div class="col-lg-9" v-if="showPreviousAttachment">
                    <div class="form-group">
                      <label class="mb-1">{{translate('previouslyAddedFiles')}}</label>
                      <div class="input-group">
                        <div class="check-list">
                            <label>{{translate('noAttachmentsFound')}}</label>
                        </div>
                      </div>
                     </div>
                   </div>
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
                    <input multiple type="file" class="fileInput" @change="onFileChange" style="visibility: hidden;">
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
          </div>
        </div>
      </div>
      <!--end::Body-->
      <!--begin::Footer-->
      <div
        class="card-footer py-5 text-end"
        id="kt_send_for_opinion_footer"
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
          id="kt_send_for_opinion_close"
          class="btn btn-danger"
        >
           {{ translate("cancel") }}
        </button>
        <!--end::Button-->

      </div>
      <!--end::Footer-->
    </div>
  </div>
  <!--end::send_for_opinion drawer-->
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import KTEditor from "@/layouts/main-layout/toolbar/Editor.vue";
import { getAssetPath } from "@/core/helpers/assets";
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from '@/core/services/ApiService';
import { DrawerComponent } from '@/assets/ts/components/_DrawerComponent';
import Tree from "vue3-tree";
import "vue3-tree/dist/style.css";
export default defineComponent({
  name: "kt-send-for-opinion-drawer",
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
      deadline: "",
      note: "",
      complaintId: "" as any,
      singleGrievance: [] as any,
      officers: [] as any,
      files: [] as any,
      inputFiles: [] as any,
      fileNameByUser: {} as any,
      fileName: [] as any,
      organogram: [] as any,
      receiverNodes: '',
      ccNodes: [] as any,
      showPreviousAttachment: false,
      loading: false,
    
      
    };
  },
  async created() {
    this.complaintId = this.$route.params.id;
    this.note = '<p>আপনার দায়িত্বাধীন<strong> অন্যান্য </strong> সংক্রান্ত একটি অভিযোগ পাওয়া গিয়েছে। অভিযোগের বিস্তারিত সংযুক্ত করা হলো। আগামী &lt;তারিখ&gt; এর মধ্যে এ বিষয়ে মতামত প্রদানের জন্য অনুরোধ করা হলো।</p><ol><li>অভিযোগে উল্লিখিত সেবাটি ইতোমধ্যে প্রদান করা হয়ে থাকলে বিস্তারিত তথ্য প্রদান করতে হবে;</li><li>সেবা প্রদান না করা হয়ে থাকলে তা প্রদান করে বিস্তারিত তথ্যসহ অবহিত করতে হবে;</li><li>সেবা প্রদানের জন্য অধিকতর সময় প্রয়োজন হলে যথোপযুক্ত কারণ জানাতে হবে;</li><li>অধিনস্ত কোনো কর্মকর্তা/কর্মচারির দায়িত্বে অবহেলার কারণে নির্ধারিত সময়ে বা পদ্ধতিতে সেবা প্রদান করা সম্ভব না হয়ে থাকলে বিস্তারিত উল্লেখ করতে হবে;</li><li>আবেদনের অসম্পূর্ণতা অথবা অন্য কোনো কারণে সেবা প্রদান করা সম্ভব না হলে যথোপযুক্ত কারণ অবহিত করতে হবে।</li></ol>';
    await this.getSingleGrievance();
  },
  methods: {
  async getOfficeOrganogram(office_id) {
    let api_url = 'office/unit-designation-employee-map';
    let api_type = 'POST';
    await ApiService.get('doptor/office-organogram?api_url='+ api_url +'&api_type='+ api_type + '&office_id=' + office_id)
      .then((response) => {
        this.organogram = response.data.data;
      })
      .catch(({ response }) => {
        console.log(response);
      });
  },
  async getSingleGrievance() {
    await ApiService.get('grievance/info?complaint_id='+ this.complaintId)
      .then((response) => {
        this.singleGrievance = response.data.data;
        this.getOfficeOrganogram(response.data.data.office_id)
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
    previousAttachment(){
      this.showPreviousAttachment = ! this.showPreviousAttachment;
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
        button = document.querySelector('.fileInput');
      if (button) {
        button.click();
      }
    },
    dateChange(){
      //this.note = '<p>আপনার দায়িত্বাধীন<strong> অন্যান্য </strong> সংক্রান্ত একটি অভিযোগ পাওয়া গিয়েছে। অভিযোগের বিস্তারিত সংযুক্ত করা হলো। আগামী ' +this.deadline + ' এর মধ্যে এ বিষয়ে মতামত প্রদানের জন্য অনুরোধ করা হলো।</p><ol><li>অভিযোগে উল্লিখিত সেবাটি ইতোমধ্যে প্রদান করা হয়ে থাকলে বিস্তারিত তথ্য প্রদান করতে হবে;</li><li>সেবা প্রদান না করা হয়ে থাকলে তা প্রদান করে বিস্তারিত তথ্যসহ অবহিত করতে হবে;</li><li>সেবা প্রদানের জন্য অধিকতর সময় প্রয়োজন হলে যথোপযুক্ত কারণ জানাতে হবে;</li><li>অধিনস্ত কোনো কর্মকর্তা/কর্মচারির দায়িত্বে অবহেলার কারণে নির্ধারিত সময়ে বা পদ্ধতিতে সেবা প্রদান করা সম্ভব না হয়ে থাকলে বিস্তারিত উল্লেখ করতে হবে;</li></ol>';
    },
    onNodeClick(node){
      if(node.checked){
        if(node.name != ''){
          let receiverCheck = true;
          let ccCheck = false;
          if(this.officers.length > 0){
             receiverCheck = false;
             ccCheck = true;
          }
          let nodeData = {
            id: node.id,
            designation: node.designation,
            name: node.name,
            receiverCheck: receiverCheck,
            ccCheck: ccCheck,
          }
          this.officers.push(nodeData);
        }else{
          alert("আপনি যে পদটি বাছাই করেছেন তা এই মুহূর্তে ফাকা আছে");
        }
        
      }else{
        var index = -1;
        for(let i = 0; i<this.officers.length; i++){
          if(this.officers[i].id == node.id){
            index = i;
          }
        }
        if (index > -1) { 
          this.officers.splice(index, 1);
        }
      }
    },
   
    handleRadioChange(index) {
      for(let i = 0; i<this.officers.length; i++){
          if(i == index){
            this.officers[i].receiverCheck = true;
            this.officers[i].ccCheck = false;
          }else{
            this.officers[i].receiverCheck = false;
            this.officers[i].ccCheck = true;
          }
      }
    },

  },
});
</script>
