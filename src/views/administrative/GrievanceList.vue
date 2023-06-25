<template>
  <div class="card mt-6">
    <div class="page-container">
      <div class="page-content-wrapper">
        <div>
          <div class="page-content" style="min-height: 569px">
            <div class="row">
              <div class="col-md-12">
                <!-- BEGIN Portlet PORTLET-->
                <div class="portlet light">
                  <div class="portlet-title">
                    <div
                      class="py-3"
                      style="
                        font-size: x-large;
                        line-height: 18px;
                        color: #683091;
                      "
                    >
                      <span
                        class="modulename modulename-hide-on-mobile caption-subject bold uppercase"
                        > {{translate('admistrativeGrievanceTitle')}}</span
                      >
                    </div>
                  </div>
                  <hr class="blackLine" />
                  <div class="portlet-body py-7">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="tabbable-line">
                          <div class="row">
                            <div class="col-md-12">
                              <ul
                                class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap"
                              >
                                <li class="nav-item">
                                  <a @click="GrievanceIncomingInfo"
                                  :class="{ active: tabIndex === 1 }"
                                    class="nav-link text-active-primary me-6"
                                    data-bs-toggle="tab"
                                    data-tab-index="0"
                                    href="#incoming"
                                    role="tab"
                                  >
                                    <i class="bi bi-arrow-down-circle me-2"></i>
                                    {{translate('incoming')}}   
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <a @click="GrievanceSentInfo"
                                    class="nav-link text-active-primary me-6"
                                   
                                    data-bs-toggle="tab"
                                             href="#sent"
                                    role="tab"
                                  >
                                    <i class="bi bi-arrow-right-circle me-2"></i>
                                    {{translate('sent')}}
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <a  @click="GrievanceCloseInfo"
                                    class="nav-link text-active-primary me-6"
                                 
                                    data-bs-toggle="tab"
                                   
                                  
                                    href="#resolved"
                                    role="tab"
                                  >
                                    <i class="bi bi-check-circle me-2"></i>
                                    {{translate('resolved')}}
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <a @click="GrievanceSentToAnotherOfficeInfo"
                                    class="nav-link text-active-primary me-6"
                                 
                                    data-bs-toggle="tab"
                                  
                                    
                                    href="#sent_to_another_office"
                                    role="tab"
                                  >
                                    <i class="bi bi-trash me-2"></i>
                                    {{translate('sentToAnotherOffice')}}
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <a @click="GrievanceTimePassedInfo"
                                    class="nav-link text-active-primary me-6"
                                 
                                    data-bs-toggle="tab"
                                 
                                   
                                    href="#timePassed"
                                    role="tab"
                                  >
                                    <i class="bi bi-speedometer me-2"></i>
                                    {{translate('timePassed')}}
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <a @click="GrievanceCCInfo"
                                    class="nav-link text-active-primary me-6"
                                  
                                    data-bs-toggle="tab"
                                  
                                   
                                    href="#copy"
                                    role="tab"
                                  >
                                    <i class="bi bi-file-text me-2"></i>
                                    {{translate('copy')}}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <hr class="blackLine" />
                          <div class="py-10">
                            <div class="">
                              <div
                                    class="tab-pane"
                                    id="complaintDetails"
                                   
                                  >
                                  <div class="card">
                                      <div class="card-body pt-0">
                                        <Datatable
                                          :data="GrievanceMovement"
                                          :header="tableHeader"
                                          :enable-items-per-page-dropdown="true"
                                          :checkbox-enabled="false"
                                        >
                                          <template v-slot:trackingNo="{ row: info }">
                                            <router-link
                                          :to="{ name: 'grievance details', params: {id: info.id}}"
                                          >
                                            <template v-if="currentLanguage =='en'">
                                              {{ info?.tracking_number }}
                                            </template>
                                            <template v-if="currentLanguage =='bn'">
                                              {{ info?.tracking_number_bn }}
                                            </template>
                                          </router-link>
                                          </template>
                                          <template v-slot:grievanceSubject="{ row: info }">
                                            <router-link
                                            :to="{ name: 'grievance details', params: {id: info.id}}"
                                          >
                                              {{ info?.subject }}
                                              </router-link>
                                          </template>
                                          <template v-slot:grievanceDate="{ row: info }">
                                            <router-link
                                            :to="{ name: 'grievance details', params: {id: info.id}}"
                                          >
                                            <template v-if="currentLanguage =='en'">
                                              {{ info?.submission_date }}
                                            </template>
                                            <template v-if="currentLanguage =='bn'">
                                                {{ info?.submission_date_bn }}
                                            </template>
                                            </router-link>
                                          </template>
                                          <template v-slot:grievanceType="{ row: info }">
                                            <router-link
                                            :to="{ name: 'grievance details', params: {id: info.id}}"
                                          >
                                            <template v-if="currentLanguage =='en'">
                                              {{ info?.complaint_type }}
                                            </template>
                                            <template v-if="currentLanguage =='bn'">
                                                {{ info?.complaint_type_bn }}
                                            </template>
                                            </router-link>
                                          </template>
                                          <template v-slot:relatedService="{ row: info }">
                                            <router-link
                                            :to="{ name: 'grievance details', params: {id: info.id}}"
                                          >
                                              {{ info?.other_service }}
                                        </router-link>
                                          </template>
                                          <template v-slot:officerInCharge="{ row: info }">
                                            <router-link
                                            :to="{ name: 'grievance details', params: {id: info.id}}"
                                          >
                                            <template v-if="currentLanguage =='en'">
                                              {{ info?.current_appeal_office_id }}
                                            </template>
                                            <template v-if="currentLanguage =='bn'">
                                              {{ info?.current_appeal_office_id }}
                                            </template>
                                            </router-link>
                                          </template>
                                          <template v-slot:currentStatus="{ row: info }">
                                            <router-link
                                            :to="{ name: 'grievance details', params: {id: info.id}}"
                                          >
                                            <template v-if="currentLanguage =='en'">
                                              {{ info?.current_status }}
                                            </template>
                                            <template v-if="currentLanguage =='bn'">
                                              {{ info?.current_status_bn }}
                                            </template>
                                            </router-link>
                                          </template>
                                          <template v-slot:possibleCloseDate="{ row: info }">
                                            <router-link
                                            :to="{ name: 'grievance details', params: {id: info.id}}"
                                          >
                                            <template v-if="currentLanguage =='en'">
                                              {{ info?.expectedDateOfClosingEnglish }}
                                            </template>
                                            <template v-if="currentLanguage =='bn'">
                                                {{ info?.expectedDateOfClosingBangla }}
                                            </template>
                                            </router-link>
                                          </template>
                                        </Datatable>
                                      </div>
                                    </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import ApiService from "@/core/services/ApiService";
import { useI18n } from "vue-i18n";
import arraySort from "array-sort";
import { layout } from "@/core/helpers/config";

export default defineComponent({
  name: "grievance-listing",
  components: {
    Datatable,
  },
  setup() {
    const index = 0;
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
    const tableHeader = ref([
      {
        columnName: "#",
        columnLabel: "sl",
        sortEnabled: true,
      },
    {
        columnName: "trackingNumber",
        columnLabel: "trackingNo",
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
        columnName: "grievanceDate",
        columnLabel: "grievanceDate",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "grievanceType",
        columnLabel: "grievanceType",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "relatedService",
        columnLabel: "relatedService",
        sortEnabled: true,
        columnWidth: 150,
      },
      {
        columnName: "officerInCharge",
        columnLabel: "officerInCharge",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "grievanceCurrentStatus",
        columnLabel: "currentStatus",
        sortEnabled: true,
        columnWidth: 225,
      },
      {
        columnName: "possibleCloseDate",
        columnLabel: "possibleCloseDate",
        sortEnabled: false,
        columnWidth: 175,
      },
    ]);
     

    return {
      index,
      layout,
      translate,
      tableHeader,
      currentLanguage,
      getAssetPath,
    };
  },
  data() {
    return {
      tabIndex: ref(0),
      api_url: "",
      fromEmployeeID: "" as any,
      toEmployeeID: "" as any,
      OfficeUnitOrgaID: "" as any,
      GrievanceMovement: "" as any,
    
    };
  },

  async created() {
    let userInfo = localStorage.getItem("_grs_user") as any;
    userInfo = JSON.parse(userInfo);
    this.fromEmployeeID = userInfo.user.employee_record_id;
    this.toEmployeeID = userInfo.user.employee_record_id;
    this.OfficeUnitOrgaID = userInfo.office_info[0].office_unit_organogram_id;
    await this.GrievanceIncomingInfo();

  },
  methods: {
    async GrievanceIncomingInfo() {
      await ApiService.get("grievance/list?to_employee_record_id=", this.fromEmployeeID)
        .then((response) => {
        //console.log(response.data.data);
        this.GrievanceMovement = response.data.data;
       
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async GrievanceSentInfo() {
      await ApiService.get("grievance/list?from_employee_record_id=", this.toEmployeeID)
        .then((response) => {
        this.GrievanceMovement = response.data.data;
       
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async GrievanceCloseInfo() {
      await ApiService.get("grievance/list?current_status=APPEAL_CLOSED_ACCUSATION_INCORRECT")
        .then((response) => {
        console.log(response.data.data);
        this.GrievanceMovement = response.data.data;
       
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async GrievanceSentToAnotherOfficeInfo() {
      await ApiService.get("grievance/list?to_office_unit_organogram_id=", this.OfficeUnitOrgaID)
        .then((response) => {
        this.GrievanceMovement = response.data.data;
       
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async GrievanceTimePassedInfo() {
      await ApiService.get("grievance/list?time_passed= 1")
        .then((response) => {
        this.GrievanceMovement = response.data.data;
       
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async GrievanceCCInfo() {
      await ApiService.get("grievance/list?is_cc= 1")
        .then((response) => {
        this.GrievanceMovement = response.data.data;
       
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
