<template>
  <!--begin::App-->
  <div class="d-flex flex-column flex-root app-root" id="kt_app_root">
    <!--begin::Page-->
    <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
      <KTHeader />
        <!--begin::Main-->
        <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
          <!--begin::Content wrapper-->
          <div class="d-flex flex-column flex-column-fluid">
            <div id="kt_app_content" class="app-content flex-column-fluid">
              <KTAddGrievanceWithoutLogin></KTAddGrievanceWithoutLogin>
            </div>
          </div>
          <!--end::Content wrapper-->
          <KTFooter />
        </div>
        <!--end:::Main-->
    </div>
    <!--end::Page-->
  </div>
  <!--end::App-->
  <KTScrollTop />
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeMount,
  onMounted,
  watch,
} from "vue";
import KTSidebar from "@/layouts/main-layout/sidebar/Sidebar.vue";
import KTModals from "@/layouts/main-layout/modals/Modals.vue";
import KTScrollTop from "@/layouts/main-layout/extras/ScrollTop.vue";
import { useRoute } from "vue-router";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import LayoutService from "@/core/services/LayoutService";
import KTAddGrievanceWithoutLogin from "@/views/AddGrievanceWithoutLogin.vue";
import KTHeader from "@/layouts/main-layout/home/HomePageHeader.vue";
import KTFooter from "@/layouts/main-layout/home/HomePageFooter.vue";
import { useI18n } from "vue-i18n";


export default defineComponent({
  name: "register-layout",
  components: {
    KTHeader,
    KTFooter,
    KTSidebar,
    KTAddGrievanceWithoutLogin,
    KTScrollTop,
    KTModals,
  },
  setup() {
    const route = useRoute();
    const { t, te } = useI18n();
    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    onBeforeMount(() => {
      LayoutService.init();
    });

    onMounted(() => {
      nextTick(() => {
        reinitializeComponents();
      });
    });

    watch(
      () => route.path,
      () => {
        nextTick(() => {
          reinitializeComponents();
        });
      }
    );
  },
});
</script>

