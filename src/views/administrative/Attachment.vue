<template>
  <div class="blog-page blog-content-2">
    <div class="blog-single-sidebar blog-container">
      <div class="blog-single-sidebar-recent">
        <div class="panel-group" :data="grievanceDetailsInfo">
          <div class="panel panel-default">
            <div
              class="panel-heading"
              style="background-color: #00ace2; color: white"
            >
              <h4 class="panel-title">
                <a
                  class="accordion-toggle accordion-toggle-styled"
                  data-toggle="collapse"
                  href="#collapse_3_5"
                  >{{ translate("detailsOfService") }}</a
                >
              </h4>
            </div>
            <div class="panel-collapse in" id="collapse_3_5">
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1">
                        <span>{{ translate("NameOfService") }}:</span></label
                      >
                      <span id="serviceName">{{
                        grievanceDetailsInfo["allComplaintDetails"]
                          ?.other_service
                      }}</span>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1"
                        ><span>{{ translate("serviceDate") }}:</span></label
                      >
                      <span id="serviceDate">{{
                        grievanceDetailsInfo["allComplaintDetails"]
                          ?.submission_date
                      }}</span>
                    </div>
                  </div>

                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1"
                        ><span>{{ translate("trackingNumber") }}</span
                        >:
                      </label>
                      <span class="trackingNumber">{{
                        grievanceDetailsInfo["allComplaintDetails"]
                          ?.tracking_number
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div
              class="panel-heading"
              style="background-color: #5653ba; color: white"
            >
              <h4 class="panel-title">
                <a
                  class="accordion-toggle accordion-toggle-styled"
                  data-toggle="collapse"
                  href="#collapse_3_1"
                  >{{ translate("complainantsInfo") }}</a
                >
              </h4>
            </div>
            <div class="panel-collapse in" id="collapse_3_1">
              <div class="panel-body">
              <template v-if="grievanceDetailsInfo?.complainant_info">
                <div class="row">
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1">
                        <span>{{ translate("fullName") }}:</span></label
                      >
                      <span id="fullname">{{
                          grievanceDetailsInfo?.complainant_info?.name}}</span>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1"
                        ><span>{{ translate("mobileNumber") }}:</span></label
                      >
                      <span>{{grievanceDetailsInfo?.complainant_info?.mobile_number}}</span>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1">
                        <span>{{ translate("permanentAddress") }}:</span></label
                      >
                      <span id="permanentAddress"
                        >{{
                          grievanceDetailsInfo?.complainant_info?.permanent_address_street
                        }},{{
                          grievanceDetailsInfo?.complainant_info?.permanent_address_house
                        }},{{
                          grievanceDetailsInfo?.complainant_info?.permanent_address_division_name_bng
                        }},{{
                          grievanceDetailsInfo?.complainant_info?.permanent_address_district_name_bng
                        }}</span
                      >
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1"
                        ><span>{{ translate("occupation") }}:</span></label
                      >
                      <span id="occupation">{{
                       grievanceDetailsInfo?.complainant_info?.occupation
                      }}</span>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1"
                        ><span>{{ translate("dateOfBirth") }}:</span></label
                      >
                      <span id="dateOfBirth">{{
                       grievanceDetailsInfo?.complainant_info?.birth_date
                      }}</span>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1"
                        ><span>{{ translate("nationalID") }}:</span></label
                      >
                      <span id="nationalId">{{
                        grievanceDetailsInfo?.complainant_info?.nationality_id
                      }}</span>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1"
                        ><span>{{ translate("email") }}:</span></label
                      >
                      <span id="email">{{
                        grievanceDetailsInfo?.complainant_info?.email
                      }}</span>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12 panel-footer mt-2">
                    <a  @click="previousGrievancePreview()"
                      class="bg-font-grey"
                      id="kt_submitted_grievance_toogle"
                      style="display: block"
                    >
                      <i class="bi bi-list me-1"></i>
                      <span style="color: blue">{{
                        translate("previousGrievanceList")
                      }}</span></a>
                  </div>
                </div>
              </template>
              <template v-if="grievanceDetailsInfo?.admin_officer_info">
                <div class="row">
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1">
                        <span>{{ translate("fullName") }}:</span></label
                      >
                      <span id="fullname">{{
                           grievanceDetailsInfo?.admin_officer_info[0]?.name
                      }}</span>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1"
                        ><span>{{ translate("mobileNumber") }}:</span></label
                      >
                      <span>{{ grievanceDetailsInfo?.admin_officer_info[0]?.mobile}}</span>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1">
                        <span>{{ translate("permanentAddress") }}:</span></label
                      >
                      <span id="permanentAddress"
                        >{{
                          grievanceDetailsInfo?.admin_officer_info[0]?.permanent_address_street
                        }},{{
                          grievanceDetailsInfo?.admin_officer_info[0]?.permanent_address_house
                        }},{{
                          grievanceDetailsInfo?.admin_officer_info[0]?.permanent_address_division_name_bng
                        }},{{
                          grievanceDetailsInfo?.admin_officer_info[0]?.permanent_address_district_name_bng
                        }}</span
                      >
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1"
                        ><span>{{ translate("occupation") }}:</span></label
                      >
                      <span id="occupation">{{
                       grievanceDetailsInfo?.admin_officer_info[0]?.occupation
                      }}</span>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1"
                        ><span>{{ translate("dateOfBirth") }}:</span></label
                      >
                      <span id="dateOfBirth">{{
                       grievanceDetailsInfo?.admin_officer_info[0]?.birth_date
                      }}</span>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1"
                        ><span>{{ translate("nationalID") }}:</span></label
                      >
                      <span id="nationalId">{{
                       grievanceDetailsInfo?.admin_officer_info[0]?.nationality_id
                      }}</span>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="form-group">
                      <label class="control-label me-1"
                        ><span>{{ translate("email") }}:</span></label
                      >
                      <span id="email">{{
                        grievanceDetailsInfo?.admin_officer_info[0]?.email
                      }}</span>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12 panel-footer mt-2">
                    <a  @click="previousGrievancePreview()"
                      class="bg-font-grey"
                      id="kt_submitted_grievance_toogle"
                      style="display: block"
                    >
                      <i class="bi bi-list me-1"></i>
                      <span style="color: blue">{{
                        translate("previousGrievanceList")
                      }}</span></a>
                  </div>
                </div>
              </template>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div
              class="panel-heading"
              style="background-color: #009444; color: white"
            >
              <h4 class="panel-title">
                <a
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
                      <i class="icon-paper-clip"></i>
                      <span style="color: blue">{{
                        translate("attachFileList")
                      }}</span>
                      <span> ( <span>0</span>)</span></a
                    ><br /><br />
                    <a href="" id="kt_all_grievance_attach_history_toogle"
                      class="bg-font-grey"
                    >
                      <i class="icon-paper-clip"></i>
                      <span style="color: blue">{{
                        translate("attachFileHistory")
                      }}</span>
                      <span> ( <span>0</span>)</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div
              class="panel-heading"
              style="background-color: #3b86ff; color: white"
            >
              <h4 class="panel-title">
                <a
                  class="accordion-toggle accordion-toggle-styled collapsed"
                  data-parent="#accordion4"
                  data-toggle="collapse"
                  href="#collapse_3_3"
                  >{{ translate("guideline") }}</a
                >
              </h4>
            </div>
            <div class="panel-collapse" id="collapse_3_3">
              <div class="panel-body">
                <a href="" id="kt_anik_or_appeal_offcier_activity_toggle" class="bg-font-grey">
                  <i class="icon-paper-clip"></i>
                  <span style="color: blue">{{
                    translate("guideline")
                  }}</span></a>
                  <br /><br />
                <a id="kt_user_manual_toggle"
                  class="media-embed"
                  data-asset="false"
                  href="/assets/grs_user_manual.pdf"
                >
                  <i class="icon-paper-clip"></i>
                  <span style="color: blue">{{
                    translate("grsGuideline")
                  }}</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <KTSubmittedGrievanceDrawer></KTSubmittedGrievanceDrawer>
  <GrsGuidelineDrawer></GrsGuidelineDrawer>
  <KTUserManualDrawer></KTUserManualDrawer>
  <ProcessMapDrawer></ProcessMapDrawer>
  <KTAnikOrApealOfficerActivityDrawer></KTAnikOrApealOfficerActivityDrawer>
  <KTAllGrievanceAttachDrawer :grievanceDetailsInfo="grievanceDetailsInfo"/>
  <KTAllGrievanceAttachHistoryDrawer :grievanceDetailsInfo="grievanceMovementInfo"/>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import KTSubmittedGrievanceDrawer from "@/layouts/main-layout/drawers/administrative/SubmittedGrievanceDrawer.vue";
import GrsGuidelineDrawer from "@/layouts/main-layout/drawers/GrsGuidelineDrawer.vue";
import KTUserManualDrawer from "@/layouts/main-layout/drawers/UserManualDrawer.vue"
import KTAllGrievanceAttachDrawer from "@/layouts/main-layout/drawers/AllGrievanceAttachDrawer.vue"
import KTAllGrievanceAttachHistoryDrawer from "@/layouts/main-layout/drawers/AllGrievanceAttachHistoryDrawer.vue"
import KTAnikOrApealOfficerActivityDrawer from "@/layouts/main-layout/drawers/AnikOrApealOfficerActivityDrawer.vue"
import ProcessMapDrawer from "@/layouts/main-layout/drawers/ProcessMapDrawer.vue";

import ApiService from "@/core/services/ApiService";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import { useI18n } from "vue-i18n";
import arraySort from "array-sort";
import { layout } from "@/core/helpers/config";
import { useBus } from '@/bus';

export default defineComponent({
  name: "grievance-attachment",
  props: { grievanceDetailsInfo: "" as any},
  components: {
    KTSubmittedGrievanceDrawer,
    GrsGuidelineDrawer,
    KTUserManualDrawer,
    ProcessMapDrawer,
    KTAnikOrApealOfficerActivityDrawer,
    KTAllGrievanceAttachDrawer,
    KTAllGrievanceAttachHistoryDrawer,
    Datatable,
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
      grievanceMovementInfo: "" as any,
    };
  },

  async created() {
    this.complaintNo = this.$route.params.id;

    await this.getGrievanceAttatchmentHistory();
    
  },
  methods:{
    previousGrievancePreview(){
      const { bus } = useBus();

      if(this.grievanceDetailsInfo?.complainant_info){
        bus.emit('complainantID', this. grievanceDetailsInfo?.complainant_info?.id);

      }else{
       bus.emit('complainantID', this. grievanceDetailsInfo?.admin_officer_info[0]?.id);
      }
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
    
  }
});
</script>
