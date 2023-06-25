<template>
  <!--begin::grievance_view_preview drawer-->
  <div
    id="kt_grievance_view_preview"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="grievance_view_preview"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_grievance_view_preview_toogle"
    data-kt-drawer-close="#kt_grievance_view_preview_close"
  >
    <div class="card shadow-none" style="width:100%">
      <!--begin::Header-->
      <div class="card-header" id="kt_grievance_view_preview_header">
        <h3 class="card-title fw-bold text-dark">{{ translate("grievancePreviewTitle") }}</h3>
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_grievance_view_preview_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body position-relative" id="kt_grievance_view_preview_body">
        <!--begin::Content-->
        <div
          id="kt_grievance_view_preview_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_grievance_view_preview_body"
          data-kt-scroll-dependencies="#kt_grievance_view_preview_header, #kt_grievance_view_preview_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                  <span>{{ translate("to") }},</span><br>
                  <span>{{ translate("officer") }}</span><br>
                  <span id="previewOfficeName">
                     <template v-if="currentLanguage=='bn'">
                      {{officeNameBN}}
                     </template>
                     <template v-if="currentLanguage=='en'">
                      {{officeName}}
                     </template>
                  </span><br>
                  <br>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                  <b><span>{{ translate("subject") }}:</span> <span id="previewSubject">{{grievanceData?.subject}}</span></b> <br>
                  <br>
                  <span>{{ translate("toWhom") }},</span>
                  <br>
                  <div v-html="grievanceData?.description"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                  <br>
                  <span>{{ translate("yourFaithful") }}</span><br>
                  <span id="previewName"></span> <br>
                  <span id="previewMobileNumber"></span><br>
              </div>
            </div>
            <div class="row">
                <br><br>
                <div class="mt-element-list">
                    <div class="mt-list-head list-simple">
                        <div class="list-head-title-container">
                            <div class="list-date">&nbsp;</div>
                            <h3 class="list-title"><span>{{ translate("attachment") }}:</span></h3>
                        </div>
                    </div>
                    <div class="mt-list-container list-simple">
                        <ul class="list-group list-group-flush" id="previewAttachedFilesList">
                           <li class="list-group-item ps-0" v-for="(file, index) in grievanceData.files" :key="index">
                            <a class="fs-2" style="color: #34495e; cursor: pointer;"><KTIcon icon-name="file-added"  icon-class="fs-2 me-5" style="color: #34495e;"  />  {{grievanceData.fileNameByUser[index] ? grievanceData.fileNameByUser[index] : translate("untitledFile")}}</a>
                           </li>
                        </ul>
                        
                    </div>
                </div>
              </div>
           
          </div>
        </div>
      </div>
      <!--end::Timeline items-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Body-->

  <!--end::grievance_view_preview drawer-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useBus } from '@/bus';
import ApiService from '@/core/services/ApiService';
export default defineComponent({
  name: "kt-grievance-preview-drawer",
  components: {},
  setup() {
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
      getAssetPath,
      translate,
      currentLanguage,
    };
  },
  data() {
      return {
        grievanceData: [] as any,
        officeName: '',
        officeNameBN: '',
        
      }
  },
  async created() {
    const { bus } = useBus();
     bus.on('grievance-preview', async (data) => {
       setTimeout(() => {
          if(this.grievanceData.officeId){
          this.getOfficeName(this.grievanceData.officeId);
          }
        }, 500);
      this.grievanceData = data;
    });
   
  },
 methods: {
    async getOfficeName(id) {
      let parms = '&office_ids=' + id;
      let api_url = 'offices';
      let api_type = 'POST';
       await ApiService.get('doptor/api?api_url='+ api_url +'&api_type='+ api_type + parms)
        .then((response) => {
          this.officeName = response.data.data[id].office_name_eng;
          this.officeNameBN = response.data.data[id].office_name_bng;
        })
        .catch(({ response }) => {
          console.log(response);
        });
      console.log(id);
    },
  },
});
</script>
