<template>
  <!--begin::process-map drawer-->
  <div
    id="kt_process_map"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="process-map"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_process_map_toggle"
    data-kt-drawer-close="#kt_process_map_close"
  >
    <div class="card shadow-none" style="width: 100%">
      <!--begin::Header-->
      <div class="card-header" id="kt_process_map_header">
        <h2 class="card-title fw-bold text-dark"></h2>
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_process_map_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body position-relative" id="kt_process_map_body">
        <!--begin::Content-->
        <div
          id="kt_process_map_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_process_map_body"
          data-kt-scroll-dependencies="#kt_process_map_header, #kt_process_map_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="modal-body">
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_processmap1"
                aria-expanded="true"
                aria-controls="kt_grs_processmap1"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <span class="processmap-span"
                      >৭.১. অভিযোগ দাখিল পদ্ধতি:</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_processmap1">
              <div class="panel-body">
                <img
                  style="width: 100%"
                  :src="getAssetPath('media/processmap/flow01.png')"
                />
              </div>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_processmap2"
                aria-expanded="true"
                aria-controls="kt_grs_processmap2"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <span class="processmap-span"
                      >৭.২. আপিল কর্মকর্তার কার্যপদ্ধতি:</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_processmap2">
              <div class="panel-body">
                <img
                  style="width: 100%"
                  :src="getAssetPath('media/processmap/flow02.png')"
                />
              </div>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_processmap3"
                aria-expanded="true"
                aria-controls="kt_grs_processmap3"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <span class="processmap-span"
                      >৭.৩. অভিযোগ ব্যবস্থাপনা সেলের কার্যপদ্ধতি:</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_processmap3">
              <div class="panel-body">
                <img
                  style="width: 100%"
                  :src="getAssetPath('media/processmap/flow03.png')"
                />
              </div>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_processmap4"
                aria-expanded="true"
                aria-controls="kt_grs_processmap4"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <span class="processmap-span"
                      >৭.৪. অভিযোগ ও আপিল নিষ্পত্তি:</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_processmap4">
              <div class="panel-body">
                <img
                  style="width: 100%"
                  :src="getAssetPath('media/processmap/flow04.png')"
                />
              </div>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_processmap5"
                aria-expanded="true"
                aria-controls="kt_grs_processmap5"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <span class="processmap-span"
                      >৮. অসত্য/হয়রানিমূলক অভিযোগের বিষয়ে করণীয়:</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_processmap5">
              <div class="panel-body">
                <img
                  style="width: 100%"
                  :src="getAssetPath('media/processmap/flow05.png')"
                />
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

  <!--end::process-map drawer-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-processmap-drawer",
  components: {},
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
