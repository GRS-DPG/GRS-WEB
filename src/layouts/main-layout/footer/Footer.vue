<template>
  <!--begin::Footer-->
  <div v-if="footerDisplay" id="kt_app_footer" class="app-footer" style="max-height:40px;">
    <!--begin::Footer container-->
    <div
      class="app-container d-flex flex-column flex-md-row flex-center flex-md-stack py-3"
      :class="{
        'container-fluid': footerWidthFluid,
        'container-xxl': !footerWidthFluid,
      }"
    >
      <!--begin::Copyright-->
      <div class="text-dark order-2 order-md-1">
        <span class="text-muted fw-semibold me-1">2023©</span>
        <a
          href="https://www.grs.gov.bd/"
          target="_blank"
          class="text-gray-800 text-hover-primary"
          >Grievance Redress System</a 
        > by <a
          href="https://tappware.com/"
          target="_blank"
          class="text-gray-800 text-hover-primary"
          >Tappware Solutions Limited </a
        >
      </div>
      <!--end::Copyright-->
    </div>
    <!--end::Footer container-->
  </div>
  <!--end::Footer-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { footerDisplay, footerWidthFluid } from "@/core/helpers/config";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "theme-footer",
  components: {},
  setup() {
    const i18n = useI18n();
    i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "bn";
    return {
      footerWidthFluid,
      footerDisplay,
    };
  },
});
</script>
<style lang="scss">
 body {
      background: unset !important;
      background-color: var(--bs-app-bg-color) !important;
  }
</style>