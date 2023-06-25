<template>
  <div class="card mt-6">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <KTIcon icon-name="message-notif" icon-class="fs-2 fs-md-1 pe-2" />
        <span class="card-label fw-bold fs-3 mb-1">{{ translate("listOfComplaintsYouHaveFiled") }}</span>
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          class="d-flex justify-content-end"
          data-kt-customer-table-toolbar="base"
        >
          <!--begin::Add grievance-->
           <router-link
              class="btn btn-primary rounded-pill"
              to="/add-public-grievance"
            >
              <KTIcon icon-name="plus" icon-class="fs-2"/>
                {{ translate("staffGrievance") }}
            </router-link>
          <!--end::Add grievance-->
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <div class="card-body pt-0">
      <Datatable
        :data="grievanceList"
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
        <template v-slot:relatedService="{ row: info }">
          <router-link
          :to="{ name: 'grievance details', params: {id: info.id}}"
            >
                {{ info?.other_service }}
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

  <KTUserManualDrawer></KTUserManualDrawer>
  <AddCustomerModal></AddCustomerModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import KTUserManualDrawer from "@/layouts/main-layout/drawers/UserManualDrawer.vue";
import { useI18n } from "vue-i18n";
import arraySort from "array-sort";
import { layout } from "@/core/helpers/config";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
export default defineComponent({
  name: "grievance-listing",
  components: {
    Datatable,
    AddCustomerModal,
    KTUserManualDrawer,
  },
    data() {
      return {
        api_url: '',
        userInfo: [] as any,
        grievanceList: [],
        complainant_id: '',
        
      }
  },
  setup() {
    const index = 0;
    const { t, te } = useI18n();
    const i18n = useI18n();
    i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "bn";
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
        columnName: "relatedService",
        columnLabel: "relatedService",
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
        columnName: "grievanceType",
        columnLabel: "grievanceType",
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
        columnWidth: 225,
      },
    ]);
   
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

    // const userInfo = computed(() => {
    //   let user = localStorage.getItem("_grs_user") as any;
    //   return JSON.parse(user);
    // }) as any;

    // const getGrievanceList = async () => {
    //   await ApiService.get('grievance/list?complainant_id=29816'
    //      ).then((response) => {
    //     grievanceList.value = response.data.data
    //   })
    // };
   
    return {
      index,
      layout,
      translate,
      tableHeader,
      currentLanguage,
      getAssetPath,
      //getGrievanceList,
    };
  },
  async created() {
    let userInfo = localStorage.getItem("_grs_user") as any;
    userInfo = JSON.parse(userInfo);
    this.complainant_id = userInfo.user.employee_record_id;
     await this.getGrievanceList();
     if(localStorage.getItem("officeList")){

     }else{
       await this.getOfficeList();
     }
  },
  methods: {
    async getGrievanceList() {
      await ApiService.get(
      
        'grievance/list?complainant_id='+ this.complainant_id
          
      )
        .then((response) => {
          this.grievanceList = response.data.data;
           //window.location.reload();
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    async getOfficeList() {
      await ApiService.get('doptor/office')
        .then((response) => {
          let data = JSON.stringify(response.data.data).slice(0, 100000);
          localStorage.setItem("officeList", data);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
  },
});
</script>
