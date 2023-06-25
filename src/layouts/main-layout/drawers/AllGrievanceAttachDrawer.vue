<template>
  <!--begin::all_grievance_attach drawer-->
  <div
    id="kt_all_grievance_attach"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="grievance_view_preview"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_all_grievance_attach_toogle"
    data-kt-drawer-close="#kt_all_grievance_attach_close"
  >
    <div class="card shadow-none" style="width: 100%">
      <!--begin::Header-->
      <div class="card-header" id="kt_all_grievance_attach_header">
        <h3 class="card-title fw-bold text-dark">
          {{ translate("attachment") }}
        </h3>
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_all_grievance_attach_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div
        class="card-body position-relative"
        id="kt_all_grievance_attach_body"
      >
        <!--begin::Content-->
        <div
          id="kt_all_grievance_attach_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_all_grievance_attach_body"
          data-kt-scroll-dependencies="#kt_all_grievance_attach_header, #kt_all_grievance_attach_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="modal-body">
            <div class="card border border-top-0">
              <div class="card-body pt-0">
                <div class="mt-list-container list-simple" v-if="grievanceDetailsInfo[
                                                    'allComplaintDetails'
                                                  ]?.complaint_attachment_info">
                  <table
                    class="table table-striped"
                    id="attachedFilesList"
                    :data="grievanceDetailsInfo"
                  >
                    <thead>
                      <tr>
                        <th data-field="name">{{ translate("fileName") }}</th>
                        <th data-field="type">{{ translate("fileType") }}</th>
                        <th data-field="url" style="text-align: center">
                          {{ translate("filePreview") }}
                        </th>
                        <th data-field="url" style="text-align: center">
                          {{ translate("fileDownload") }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span class="uppercase"
                            ><a data-lightbox="test" data-asset="false">
                              {{
                                grievanceDetailsInfo["allComplaintDetails"]
                                  ?.complaint_attachment_info?.file_title
                              }}</a
                            >
                          </span>
                        </td>
                        <td>
                          {{
                            grievanceDetailsInfo["allComplaintDetails"]
                              ?.complaint_attachment_info?.file_type
                          }}
                        </td>
                        <td style="text-align: center">
                          <a :href="`http://127.0.0.1:8000/storage${grievanceDetailsInfo['allComplaintDetails']
                              ?.complaint_attachment_info?.file_path}`"
                            data-lightbox="test"
                            
                            target="_blank"
                            ><i class="fa fa-television"></i
                          ></a>
                        </td>
                        <td style="text-align: center">
                          <a
                          :href="`http://127.0.0.1:8000/storage${grievanceDetailsInfo['allComplaintDetails']
                              ?.complaint_attachment_info?.file_path}`" download
                            target="_blank"
                            ><i class="fa fa-download"></i
                          ></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="mt-list-container list-simple" v-else>
                  <table class="table table-striped" id="complaintAttachFile">{{ translate('noAttachFile') }}</table>
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

  <!--end::all_grievance_attach drawer-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useBus } from "@/bus";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import ApiService from "@/core/services/ApiService";
export default defineComponent({
  name: "kt-grievance-preview-drawer",
  props: { grievanceDetailsInfo: "" as any },

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


    };
  },
  async created() {
   
  },
  methods: {

  },
});
</script>
