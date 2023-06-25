<template>
  <!--begin::submitted_grievance drawer-->
  <div
    id="kt_submitted_grievance"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="grievance_view_preview"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_submitted_grievance_toogle"
    data-kt-drawer-close="#kt_submitted_grievance_close"
  >
    <div class="card shadow-none" style="width: 100%">
      <!--begin::Header-->
      <div class="card-header" id="kt_submitted_grievance_header">
        <h3 class="card-title fw-bold text-dark">
          {{translate('allgrievanceTitle')}}
        </h3>
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_submitted_grievance_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body position-relative" id="kt_submitted_grievance_body">
        <!--begin::Content-->
        <div
          id="kt_submitted_grievance_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_submitted_grievance_body"
          data-kt-scroll-dependencies="#kt_submitted_grievance_header, #kt_submitted_grievance_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="modal-body">
            <div class="card">
              <div class="card-body pt-0">
                <Datatable :data="AllGrievanceList"
                  :header="tableHeader"
                  :enable-items-per-page-dropdown="true"
                  :checkbox-enabled="false"
                >
                  <template v-slot:caseNumber="{ row: info }">
                    <template v-if="currentLanguage == 'en'">
                      {{ info?.id }}
                    </template>
                    <template v-if="currentLanguage == 'bn'">
                      {{ info?.id }}
                    </template>
                  </template>
                  <template v-slot:trackingNo="{ row: info }">
                    <template v-if="currentLanguage == 'en'">
                      {{ info?.tracking_number }}
                    </template>
                    <template v-if="currentLanguage == 'bn'">
                      {{ info?.tracking_number_bn }}
                    </template>
                  </template>
                  <template v-slot:grievanceDate="{ row: info }">
                    <template v-if="currentLanguage == 'en'">
                      {{ info?.submission_date }}
                    </template>
                    <template v-if="currentLanguage == 'bn'">
                      {{ info?.submission_date_bn }}
                    </template>
                  </template>
                  <template v-slot:grievanceSubject="{ row: info }">
                    {{ info?.subject }}
                  </template>
                  <template v-slot:currentStatus="{ row: info }">
                    <template v-if="currentLanguage == 'en'">
                      {{ info?.current_status }}
                    </template>
                    <template v-if="currentLanguage == 'bn'">
                      {{ info?.current_status_bn }}
                    </template>
                  </template>
                </Datatable>
              </div>
              <hr class="blackLine" />
              <div class="modal-footer">
                    <button class="btn btn-danger btn-md me-2" id="kt_blacklist_toogle" type="button"><i class="icon-ban"></i> <span>{{translate('doBlacklist') }}</span></button>
                    <button class="btn btn-secondary" data-dismiss="modal" type="button" id="kt_submitted_grievance_close">
                      {{translate('cancel') }}
                    </button>
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

  <!--end::submitted_grievance drawer-->
  <KTBlackListDrawer></KTBlackListDrawer>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useBus } from "@/bus";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import ApiService from "@/core/services/ApiService";
import KTBlackListDrawer from "@/layouts/main-layout/drawers/administrative/BlackListDrawer.vue"

export default defineComponent({
  name: "kt-submitted-grievance-drawer",


  components: {
    Datatable,
    KTBlackListDrawer,
  },
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
    const tableHeader = ref([
      {
        columnName: "#",
        columnLabel: "sl",
        sortEnabled: true,
      },
      {
        columnName: "caseNumber",
        columnLabel: "caseNumber",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "trackingNumber",
        columnLabel: "trackingNo",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "grievanceDate",
        columnLabel: "grievanceDate",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "grievanceSubject",
        columnLabel: "grievanceSubject",
        sortEnabled: true,
        columnWidth: 230,
      },
      {
        columnName: "grievanceCurrentStatus",
        columnLabel: "currentStatus",
        sortEnabled: true,
        columnWidth: 225,
      },
    ]);
    return {
      tableHeader,
      getAssetPath,
      translate,
      currentLanguage,
    };
  },
  data() {
    return {
      AllGrievanceList: "" as any,
      companinantID: "" as any,
    };
  },
  async created() {
    const { bus } = useBus();
     bus.on('complainantID', async (data) => {
      console.log(data);
      this.companinantID = data;
      this.getAllGrievanceList();
    });
   
  },
  methods: {
    async getAllGrievanceList() {
      if( this.companinantID){
        await ApiService.get("grievance/list?complainant_id=", this.companinantID)
        .then((response) => {
        //console.log(response.data.data);
        this.AllGrievanceList = response.data.data;
       
        })
        .catch(({ response }) => {
          console.log(response);
        });
      }
     
    },
  },
});
</script>
