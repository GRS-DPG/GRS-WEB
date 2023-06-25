<template>
  <div class="card mt-6">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
      
        <span class="card-label fw-bold fs-3 mb-1">{{ translate("blacklist") }}</span>
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <!--end::Card toolbar-->
    </div>
    <div class="card-body pt-0">
      <Datatable
        :data="blacklistedComplaintInfo"
        :header="tableHeader"
        :enable-items-per-page-dropdown="true"
        :checkbox-enabled="false"
      >

      <template v-slot:name="{ row: info }">      
            {{ info?.complainant_info?.name}}
      </template>
      <template v-slot:mobileNumber="{ row: info }">     
            {{ info?.complainant_info?.mobile_number}}
      </template>
      <template v-slot:occupation="{ row: info }">      
            {{ info?.complainant_info?.occupation}}
      </template>
      <template v-slot:email="{ row: info }">      
            {{ info?.complainant_info?.email}}
      </template>
      <template v-slot:takeAction="">      
         <button class="btn btn-secondary btn-sm" @click="AddOrRemoveBlacklist()">অন্তর্ভুক্তি</button>

      </template>    
      </Datatable>
    </div>
  </div>

</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import { useI18n } from "vue-i18n";
import arraySort from "array-sort";
import { layout } from "@/core/helpers/config";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "blacklist",
  components: {
    Datatable,
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
        columnName: "name",
        columnLabel: "name",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "mobileNumber",
        columnLabel: "mobileNumber",
        sortEnabled: true,
        columnWidth: 230,
      },
      {
        columnName: "occupation",
        columnLabel: "occupation",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "email",
        columnLabel: "email",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "takeAction",
        columnLabel: "takeAction",
        sortEnabled: true,
        columnWidth: 175,
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
        api_url: '',
        blacklistedComplaintInfo : "" as any,
        OfficeID : "" as any,
        isActive: false,
        status: null,
        addRemoveBlacklistInfo: "" as any,
        BlacklistID: "" as any,
        
      }
  },
  async created() {
    let userInfo = localStorage.getItem("_grs_user") as any;
    userInfo = JSON.parse(userInfo);
    this.OfficeID = userInfo.office_info[0].office_id;
    await this.BlacklistedComplaint();
   
    
  },
  methods: {
    async BlacklistedComplaint() {
      await ApiService.get("blacklist/index?office_id=", this.OfficeID)
        .then((response) => {
        this.blacklistedComplaintInfo = response.data.data;
       
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },

    async AddOrRemoveBlacklist(){
      await ApiService.get("blacklist/status?blacklist_id", this.BlacklistID)
        .then((response) => {
          if (response.data.data) {
            this.addRemoveBlacklistInfo = response.data.data;
            this.addRemoveBlacklistInfo = true;
            Swal.fire({
              title: "Complainant is now Blacklisted!",
              icon: "success",
            });
          } else {
            this.addRemoveBlacklistInfo = false;
            Swal.fire({
              title: "Complainant is now Whitelisted!",
              icon: "warning",
            });
          }
        })

        .catch(({ response }) => {
          console.log(response);
        });
},
    

  },
});
</script>
