<template>
  <!--begin::blacklist drawer-->
  <div
    id="kt_blacklist"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="grievance_view_preview"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_blacklist_toogle"
    data-kt-drawer-close="#kt_blacklist_close"
  >
    <div class="card shadow-none" style="width: 100%" :data="grievanceDetailsInfo">
      <!--begin::Header-->
      <div class="card-header" id="kt_blacklist_header">
        <h3 class="card-title fw-bold text-dark">
          {{translate('blacklist') }}
        </h3>
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_blacklist_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body position-relative" id="kt_blacklist_body">
        <!--begin::Content-->
        <div
          id="kt_blacklist_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_blacklist_body"
          data-kt-scroll-dependencies="#kt_blacklist_header, #kt_blacklist_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="modal-body">
            <div class="card">
              <div class="card-body pt-0">
                <label>{{translate('blacklistReason')}}</label><br/><br/>
             KT Editor will go here..!
              </div>
              <hr class="blackLine" />
              <div class="modal-footer">
                    <button class="btn btn-danger btn-md me-2" id="" type="button"><i class="icon-ban"></i> <span>{{translate('blacklist') }}</span></button>
                    <button class="btn btn-secondary " data-dismiss="modal" type="button" id="kt_blacklist_close">
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

  <!--end::blacklist drawer-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useBus } from "@/bus";
import KTEditor from "@/layouts/main-layout/toolbar/Editor.vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import ApiService from "@/core/services/ApiService";

export default defineComponent({
  name: "kt-blacklist-drawer",
  props: { grievanceDetailsInfo: "" as any },

  components: {
    Datatable,
    KTEditor,
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
    
    return {
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
      await ApiService.get("grievance/list?complainant_id=", this.companinantID)
        .then((response) => {
        //console.log(response.data.data);
        this.AllGrievanceList = response.data.data;
       
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
  },
});
</script>
