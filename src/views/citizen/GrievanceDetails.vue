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
                   <!-- Top Nav Start -->
                  <div class="portlet-title">
                    <div
                      class="py-3"
                      style="
                        text-align: center;
                        font-size: x-large;
                        line-height: 18px;
                        color: #683091;
                      "
                    >
                      <span
                        class="modulename modulename-hide-on-mobile caption-subject bold uppercase"
                        > {{translate('detailsTitle')}}</span
                      >
                    </div>
                  </div>
                  <hr class="blackLine" />
                   <!-- Top Nav End -->
                  <div class="portlet-body py-7">
                    <div class="row">
                      <div class="col-md-9">
                        <div class="tabbable-line">
                           <!-- Home Menu Start -->
                          <div class="row">
                            <div class="col-md-6">
                              <ul
                                class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap"
                              >
                                <li class="nav-item">
                                  <a :data="grievanceDetailsInfo"
                                    class="nav-link text-active-primary me-6"
                                    :class="{ active: tabIndex === 0 }"
                                    data-bs-toggle="tab"
                                    @click="setActiveTab($event)"
                                    data-tab-index="0"
                                    href="#description"
                                    role="tab"
                                  >
                                    <i class="bi bi-book me-2"></i>
                                    {{translate('description')}}   
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <a
                                    class="nav-link text-active-primary me-6"
                                    :class="{ active: tabIndex === 1 }"
                                    data-bs-toggle="tab"
                                    @click="setActiveTab($event)"
                                    data-tab-index="1"
                                    href="#history"
                                    role="tab"
                                  >
                                    <i class="bi bi-book me-2"></i>
                                    {{translate('history')}}
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="col-md-6 text-end">
                              <router-link
                                class="btn btn-danger"
                                to="/dashboard"
                              >
                              <KTIcon icon-name="arrow-left" icon-class="fs-2" /> {{translate('goBackToList')}}
                              </router-link>

                              <a v-show="rateUsButtonShow"
                                type="button"
                                class="btn btn-primary ms-2"
                                id="kt_rate_us_toogle"
                              >
                              {{translate('rateUs')}}
                              </a>
                              <a
                                v-show="appealShow"
                                type="button"
                                class="btn btn-primary ms-2"
                                id=""
                              >
                              {{translate('appeal')}}
                              </a>
                              
                              <!--begin::Menu-->
                                <button
                                  v-show="takeActionShow"
                                  class="btn btn-primary ms-2"
                                  data-kt-menu-trigger="click"
                                  data-kt-menu-placement="bottom-end"
                                  data-kt-menu-overflow="true"
                                >
                                   <i class="fa-solid fa-bolt"></i> {{translate('takeAction')}} <KTIcon icon-name="down" icon-class="fs-2" />
                                </button>
                                <!--begin::Menu 2-->
                                <div
                                  class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold w-275px mt-3"
                                  data-kt-menu="true"
                                >
                                  <!--begin::Menu item-->
                                  <div class="menu-item">
                                    <a href="#" class="menu-link px-3 text-info"  id="kt_send_for_opinion_toogle"> 
                                      <i class="fa-regular fa-comment pe-2"></i> {{translate('forwardToServiceOfficerInSelfOffice')}} 
                                    </a>
                                  </div>
                                  <!--end::Menu item-->

                                  <!--begin::Menu item-->
                                  <div class="menu-item">
                                    <a href="#" class="menu-link px-3 text-info" id="kt_send_to_another_office_toogle"> <i class="fa-regular fa-comment pe-2"></i> {{translate('forwardToAnotherOffice')}} </a>
                                  </div>
                                  <!--end::Menu item-->

                                  <!--begin::Menu item-->
                                  <div class="menu-item">
                                    <a href="#" class="menu-link px-3 text-info"> <i class="fa-regular fa-comment pe-2"></i> {{translate('forwardToSubordinateOffice')}} </a>
                                  </div>
                                  <!--end::Menu item-->

                                  <!--begin::Menu item-->
                                  <div class="menu-item">
                                    <a href="#" class="menu-link px-3 text-info"> <i class="fa-regular fa-comment pe-2"></i> {{translate('sendToAppealOfficer')}} </a>
                                  </div>
                                  <!--end::Menu item-->

                                  <!--begin::Menu item-->
                                  <div class="menu-item">
                                    <a href="#" class="menu-link px-3 text-info"> <i class="fa-regular fa-comment pe-2"></i> {{translate('forwardToSubordinateOfficesGRO')}} </a>
                                  </div>
                                  <!--end::Menu item-->

                                  <!--begin::Menu item-->
                                  <div class="menu-item">
                                    <a href="#" class="menu-link px-3 text-info"> <i class="fa-regular fa-comment pe-2"></i> {{translate('reject')}} </a>
                                  </div>
                                  <!--end::Menu item-->
                                  
                                </div>
                                <!--end::Menu 2-->
                              <!--end::Menu-->
                            </div>
                          </div>
                           <!--Home Menu End -->
                          <div class="py-10">
                            <div class="">
                              <div
                                class="tab-pane"
                                id="complaintDetails"
                                v-if="tabIndex === 0"
                              >
                                <div class="blog-page blog-content-2">
                                  <!-- Details Body Start-->
                                  <div class="row border border-secondary p-5">
                                    <div class="col-lg-12">
                                      <div id="citizenNotification"></div>
                                      <div
                                        class="blog-single-content bordered blog-container"
                                        id="printableArea"
                                      >
                                        <div class="blog-single-desc">
                                          <div class="row">
                                            <div class="col-md-6">
                                              <span>{{translate('to')}},</span><br />
                                              <span>{{translate('officer')}}</span
                                              ><br />
                                              <span id="officeName">
                                                <template v-if="currentLanguage =='en'">
                                                  {{grievanceDetailsInfo["doptoroffice"]?.name}}
                                                </template>
                                                <template  v-if="currentLanguage =='bn'">
                                                  {{grievanceDetailsInfo["doptoroffice"]?.nameBn}}
                                                </template>
                                               
                                                </span
                                              ><br />
                                              <br />
                                            </div>
                                            <div
                                              class="col-md-offset-2 col-md-3"
                                            >
                                              <span>{{translate('grievanceDate')}}:</span>
                                              <span id="dateCreated">{{
                                                grievanceDetailsInfo[
                                                  "allComplaintDetails"
                                                ]?.submission_date
                                              }}</span
                                              ><br />
                                              <span>{{translate('trackingNumber')}}:</span>
                                              <span>{{
                                                grievanceDetailsInfo[
                                                  "allComplaintDetails"
                                                ]?.tracking_number
                                              }}</span
                                              ><br />
                                              <span>{{translate('status')}}:</span>
                                              <span id="status">{{
                                                grievanceDetailsInfo[
                                                  "allComplaintDetails"
                                                ]?.current_status
                                              }}</span>
                                              <br />
                                            </div>
                                            <div class="col-md-1">
                                              <a
                                                class="btn btn-circle btn-icon-only btn-default btn-print pull-right"
                                                data-toggle="tooltip"
                                                id="printGrievanceDetails"
                                                title="প্রিন্ট"
                                              >
                                                <i class="fa fa-print"></i>
                                              </a>
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div class="col-md-12">
                                              <b
                                                ><span>{{translate('subject')}}:</span>
                                                <span id="title">{{
                                                  grievanceDetailsInfo[
                                                    "allComplaintDetails"
                                                  ]?.subject
                                                }}</span></b
                                              >
                                              <br />
                                              <br />
                                              <span>{{translate('toWhom')}},</span>
                                              <br />
                                              <span v-html="grievanceDetailsInfo[
                                                  'allComplaintDetails'
                                                ]?.details"></span>
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div class="col-md-4">
                                              <br />
                                              <span>{{translate('yourFaithful')}}</span
                                              ><br /><br />
                                            <template v-if="grievanceDetailsInfo?.complainant_info">
                                              <span>{{
                                                grievanceDetailsInfo?.complainant_info?.name
                                              }}</span>
                                              <br />
                                              <label class="control-label me-1"
                                                ><span
                                                  >{{translate('mobileNumber')}}:</span
                                                ></label
                                              >
                                              <span class="">{{
                                                  grievanceDetailsInfo?.complainant_info?.mobile_number
                                                }}</span
                                              >
                                              <br />
                                            </template>
                                            <template v-if="grievanceDetailsInfo?.admin_officer_info">
                                              <span>{{
                                                grievanceDetailsInfo?.admin_officer_info[0]?.name
                                              }}</span>
                                              <br />
                                              <label class="control-label me-1"
                                                ><span
                                                  >{{translate('mobileNumber')}}:</span
                                                ></label
                                              >
                                              <span class="">{{
                                                 grievanceDetailsInfo?.admin_officer_info[0]?.mobile
                                                }}</span
                                              >
                                              <br />
                                            </template>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                           <!-- Details Body End-->
                            <!-- Details Footer Start-->
                                  <div v-if="grievanceDetailsInfo[
                                                    'allComplaintDetails'
                                                  ]?.complaint_attachment_info"
                                    class="mt-list-container list-simple complaint-file py-10"
                                  >
                                    <label>{{translate('attachment')}}</label>
                                    <table
                                      class="table table-striped"
                                      id="complaintAttachFile"
                                    >
                                      <thead>
                                        <tr>
                                          <th data-field="name">{{translate('fileName')}}</th>
                                          <th data-field="type">{{translate('fileType')}}</th>
                                          <th
                                            data-field="url"
                                            style="text-align: center"
                                          >
                                          {{translate('filePreview')}}
                                          </th>
                                          <th
                                            data-field="url"
                                            style="text-align: center"
                                          >
                                          {{translate('fileDownload')}}
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <span class="uppercase"
                                              ><a
                                                data-lightbox="test"
                                                data-asset="false"
                                                > {{
                                                  grievanceDetailsInfo[
                                                    "allComplaintDetails"
                                                  ]?.complaint_attachment_info
                                                    ?.file_title
                                                }}</a>
                                               
                                                </span
                                            >
                                          </td>
                                          <td>{{
                                                  grievanceDetailsInfo["allComplaintDetails"]?.complaint_attachment_info?.file_type
                                                }}</td>
                                          <td style="text-align: center">
                                            <a
                                              data-lightbox="test"
                                              :href="`http://127.0.0.1:8000/storage${grievanceDetailsInfo['allComplaintDetails']?.complaint_attachment_info?.file_path}`"
                                              ><i class="fa fa-television"></i
                                            ></a>
                                          </td>
                                          <td style="text-align: center">
                                            <a  :href="`http://127.0.0.1:8000/storage${grievanceDetailsInfo['allComplaintDetails']?.complaint_attachment_info?.file_path}`" download
                                              target="_blank"
                                              ><i class="fa fa-download"></i
                                            ></a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>                                
                                  <div v-else
                                    class="mt-list-container list-simple complaint-file py-10"
                                  >
                                    <label>{{translate('attachment')}}</label><br /><br />
                                    <table class="table table-striped" id="complaintAttachFile">{{ translate('noAttachFile') }}</table>
                                  </div>
                                </div>
                                  <!-- Details Footer End-->
                              </div>
                               <!-- Details History Start-->
                              <div class="tab-pane" v-if="tabIndex === 1">
                                <div class="timeline-item py-10">
                                  <div class="row">
                                    <div class="col-md-11">
                                      <div class="row"  v-for="(item, index) in grievanceDetailsInfo['complainHistory']" :key="index">
                                        <div class="col-md-2">
                                          <div class="timeline-badge">
                                            <img
                                              :src="
                                                getAssetPath(
                                                  'media/logos/g_man.jpg'
                                                )
                                              "
                                            />
                                          </div>
                                        </div>

                                        <div class="col-md-10">
                                              <div class="timeline-body bg-secondary p-10 mb-7">
                                                  <div class="timeline-body-head">
                                                    <div
                                                      class="timeline-body-head-caption">
                                                      ({{ grievanceDetailsInfo['complainHistory'].length - index }}) {{translate('action')}}: {{ item.action }}
                                                      <br />
                                                      {{item.current_status}}<br />
                                                      অভিযোগকারী কর্তৃক <span class="officerName" style="color:#00a887;">{{item.to_employee_name_bng}},{{item.to_employee_designation_bng}},{{item.to_office_name_bng}},{{item.to_employee_unit_name_bng}}</span> এর নিকট প্রেরিত।<br />
                                                      {{translate('date')}}:
                                                      {{item.created_at}}<br />
                                                    </div>
                                                
                                                    <div class="timeline-body-content">
                                                      <br />{{translate('details')}}
                                                      <p></p>
                                                      <p v-html="item.note"></p>
                                                      <p></p>
                                                      <div
                                                        class="mt-list-container list-simple col-md-12"
                                                      >
                                                        <ul id="attachedFiles"></ul>
                                                      </div>
                                                  </div>
                                                </div>
                                              </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-1">
                                      <div id="complaintMovementHistory">
                                        <div class="portlet-body">
                                          <div
                                            class="blog-single-content bordered blog-container"
                                            id="printable-area"
                                          >
                                            <div
                                              class="timeline col-md-11"
                                              id="grievanceHistory"
                                            ></div>
                                            <div class="col-md-1">
                                              <a
                                                class="btn btn-circle btn-icon-only btn-default btn-print pull-right"
                                                data-toggle="tooltip"
                                                id="printGrievanceHistory"
                                                title="প্রিন্ট"
                                              >
                                                <i class="fa fa-print"></i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            <!-- Details History End-->
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3" v-if="adminID">
                        <KTAdministrativeAttachment :grievanceDetailsInfo="grievanceDetailsInfo"/>
                      </div>
                      <div class="col-md-3" v-else>
                        <KTCitizenAttachment :grievanceDetailsInfo="grievanceDetailsInfo"/>
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
  <KTRateUsDrawer></KTRateUsDrawer>
  <KTSendForOpinionDrawer></KTSendForOpinionDrawer>
  <KTSendToAntoherOfficeDrawer></KTSendToAntoherOfficeDrawer>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import KTRateUsDrawer from "@/layouts/main-layout/drawers/RateUsDrawer.vue";
import KTSendForOpinionDrawer from "@/layouts/main-layout/drawers/administrative/SendForOpinionDrawer.vue";
import KTSendToAntoherOfficeDrawer from "@/layouts/main-layout/drawers/administrative/SendToAntoherOfficeDrawer.vue";
import KTCitizenAttachment from "@/views/citizen/Attachment.vue";
import KTAdministrativeAttachment from "@/views/administrative/Attachment.vue";
import ApiService from "@/core/services/ApiService";
import { useI18n } from "vue-i18n";
import arraySort from "array-sort";
import { layout } from "@/core/helpers/config";

export default defineComponent({
  name: "grievance-listing",
  components: {
    Datatable,
    KTRateUsDrawer,
    KTSendForOpinionDrawer,
    KTSendToAntoherOfficeDrawer,
    KTCitizenAttachment,
    KTAdministrativeAttachment
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
      adminUser:"",
      tabIndex: ref(0),
      api_url: "",
      complaintNo: "" as any,
      grievanceDetailsInfo: "" as any,
      rateUsButtonShow: false,
      appealShow: false,
      takeActionShow: false,
      adminID: "" as any,
      grievanceAttachmentHistory: "" as any,
    };
  },

  async created() {
    this.complaintNo = this.$route.params.id;

    this.adminID = localStorage.getItem("_administrative_user");

    if(localStorage.getItem("_administrative_user")){
      this.takeActionShow = true;
    }
  

    await this.getGrievanceDetails();
   
  },
  methods: {
    async getGrievanceDetails() {
      await ApiService.get("grievance/details?complaint_id=", this.complaintNo)
        .then((response) => {
           // console.log(response.data.data.complaintdetails.id);
        this.grievanceDetailsInfo = response.data.data;

        if(!this.adminID){
          if (this.grievanceDetailsInfo["allComplaintDetails"]?.current_status=='APPEAL_CLOSED_ACCUSATION_INCORRECT' && this.grievanceDetailsInfo["allComplaintDetails"]?.is_rating_given==0){
          this.rateUsButtonShow = true;
        }   
        }
         
        if(!this.adminID){
        if (this.grievanceDetailsInfo["allComplaintDetails"]?.current_status=='APPEAL_CLOSED_ACCUSATION_INCORRECT' && this.grievanceDetailsInfo["allComplaintDetails"]?.is_appeal_rating_given==0){
          this.appealShow = true;
        }  
      }   
       
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
