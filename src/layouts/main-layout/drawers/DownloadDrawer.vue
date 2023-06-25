<template>
  <!--begin::download drawer-->
  <div
    id="kt_download"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="download"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_download_toggle"
    data-kt-drawer-close="#kt_download_close"
  >
    <div class="card shadow-none" style="width:100%">
      <!--begin::Header-->
      <div class="card-header" id="kt_download_header">
        <h2 class="card-title fw-bold text-dark">
          Select a form from the list to download
        </h2>
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_download_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body position-relative" id="kt_download_body">
        <!--begin::Content-->
        <div
          id="kt_download_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_download_body"
          data-kt-scroll-dependencies="#kt_download_header, #kt_download_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="">
            <ul>
              <li>
                <span><i class="fa fa-arrow-circle-o-down"></i></span>
                <a
                  class="media-embed"
                  data-asset="false"
                  href="https://training.grs.gov.bd/assets/grievance_submission_form.pdf"
                  target="_blank"
                >
                  <span class="blueLink">Grievance submission form</span>
                </a>
              </li>
              <li>
                <span><i class="fa fa-arrow-circle-o-down"></i></span>
                <a
                  class="media-embed"
                  data-asset="false"
                  href="https://training.grs.gov.bd/assets/appeal_submission_form.pdf"
                  target="_blank"
                >
                  <span class="blueLink">Appeal submission form</span>
                </a>
              </li>
              <li>
                <span><i class="fa fa-arrow-circle-o-down"></i></span>
                <a
                  class="media-embed"
                  data-asset="false"
                  href="https://training.grs.gov.bd/assets/cell_grievance_submission_form.pdf"
                  target="_blank"
                >
                  <span class="blueLink">Cell grievance form</span>
                </a>
              </li>
              <li>
                <span><i class="fa fa-arrow-circle-o-down"></i></span>
                <a
                  class="media-embed"
                  data-asset="false"
                  href="https://training.grs.gov.bd/assets/cell_appeal_submission_form.pdf"
                  target="_blank"
                >
                  <span class="blueLink">Cell appeal form</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--end::Timeline items-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Body-->

  <!--end::download drawer-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-contact-drawer",
  components: {},
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
