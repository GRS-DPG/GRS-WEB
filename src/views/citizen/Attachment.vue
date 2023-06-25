<template>
  <div class="blog-page blog-content-2">
    <div class="blog-single-sidebar blog-container">
      <div class="blog-single-sidebar-recent">
        <div class="panel-group accordion border-secondary" id="accordion3">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a style="color:#333;"
                  class="accordion-toggle accordion-toggle-styled"
                  data-parent="#accordion3"
                  data-toggle="collapse"
                  href="#collapse_3_6"
                  >{{ translate("fileAttachment") }}</a
                >
              </h4>
            </div>
            <div class="panel-collapse" id="collapse_3_6" :data="grievanceDetailsInfo">
              <div class="panel-body">
                <div class="row" id="allAttachedFiles">
                  <div class="col-md-12 col-sm-12">
                    <a href="" id="kt_all_grievance_attach_toogle"
                      class="bg-font-grey"                   
                    >
                    <i class="bi bi-paperclip"></i>
                      <span style="color: blue"
                        >{{ translate("attachFileList") }} </span
                      ><span> ( <span>1</span>)</span></a
                    ><br /><br />
                    <a href="" id="kt_all_grievance_attach_history_toogle"
                      class="bg-font-grey" 
                    >
                    <i class="bi bi-paperclip"></i>
                      <span style="color: blue"
                        >{{ translate("attachFileHistory") }} </span
                      ><span> ( <span>0</span>)</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <KTAllGrievanceAttachDrawer :grievanceDetailsInfo="grievanceDetailsInfo"/>
  <KTAllGrievanceAttachHistoryDrawer :grievanceDetailsInfo="grievanceMovementInfo"/>

</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import KTAllGrievanceAttachDrawer from "@/layouts/main-layout/drawers/AllGrievanceAttachDrawer.vue";
import KTAllGrievanceAttachHistoryDrawer from "@/layouts/main-layout/drawers/AllGrievanceAttachHistoryDrawer.vue";

import KTRateUsDrawer from "@/layouts/main-layout/drawers/RateUsDrawer.vue";
import ApiService from "@/core/services/ApiService";
import { useI18n } from "vue-i18n";
import arraySort from "array-sort";
import { layout } from "@/core/helpers/config";

export default defineComponent({
  name: "grievance-attachment",
  props: { grievanceDetailsInfo: "" as any },
  components: {
    Datatable,
    KTRateUsDrawer,
    KTAllGrievanceAttachDrawer,
    KTAllGrievanceAttachHistoryDrawer,
  },
  setup() {
    const index = 0;
    const shown: boolean = false;
    const { t, te } = useI18n();
    const i18n = useI18n();
    i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "en";
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
      tabIndex: ref(0),
      api_url: "",
      complaintNo: "" as any,
      grievanceDetailsInfo: "" as any,
      rateUsButtonShow: true,
      grievanceMovementInfo: "" as any,
    };
  },

  async created() {
    //console.log(this.$route.params.id);
    this.complaintNo = this.$route.params.id;

    await this.getGrievanceDetails();
    await this.getGrievanceAttatchmentHistory();
    //await this.grievanceDetailsInfo();
  },
  methods: {
    async getGrievanceDetails() {
      await ApiService.get("grievance/details?complaint_id=", this.complaintNo)
        .then((response) => {
          // console.log(response.data.data.complaintdetails.id);
          this.grievanceDetailsInfo = response.data.data;

          if (
            this.grievanceDetailsInfo["allComplaintDetails"]?.current_status ==
            "NEW"
          ) {
            this.rateUsButtonShow = false;
          } else if (
            this.grievanceDetailsInfo["allComplaintDetails"]
              ?.feedback_comments ||
            this.grievanceDetailsInfo["allComplaintDetails"]?.rating
          ) {
            this.rateUsButtonShow = false;
          }
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async getGrievanceAttatchmentHistory() {
      await ApiService.get("grievance/movement?complaint_id=", this.complaintNo)
        .then((response) => {
        this.grievanceMovementInfo = response.data.data;
        console.log(this.grievanceMovementInfo);
       
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    setActiveTab(event) {
      this.tabIndex = parseInt(event.target.getAttribute("data-tab-index"));
      console.log(this.tabIndex);
    },
  },
});
</script>
