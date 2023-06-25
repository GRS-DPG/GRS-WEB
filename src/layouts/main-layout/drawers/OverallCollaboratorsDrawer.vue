<template>
  <!--begin::overallCollaborators drawer-->
  <div
    id="kt_overallCollaborators"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="overallCollaborators"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_overallCollaborators"
    data-kt-drawer-close="#kt_overallCollaborators_close"
  >
    <div class="card shadow-none">
      <!--begin::Header-->
      <div class="card-header" id="kt_overallCollaborators_header">
        <h3 class="card-title fw-bold text-dark">Overall Collaboration</h3>
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_overallCollaborators_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div
        class="card-body position-relative"
        id="kt_overallCollaborators_body"
      >
        <!--begin::Content-->
        <div
          id="kt_overallCollaborators_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_overallCollaborators_body"
          data-kt-scroll-dependencies="#kt_overallCollaborators_header, #kt_overallCollaborators_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="faq-section">
            <h2 class="font-blue bold font-lg">
              Planning, design and development
            </h2>
            <div class="panel-group faq-content">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <i class="fa fa-circle font-purple"></i>
                    <span
                      >মোঃ মাহমুদুল হোসাইন খান, সচিব ( সমন্বয় ও সংস্কার),
                      মন্ত্রিপরিষদ বিভাগ</span
                    >
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <i class="fa fa-circle font-purple"></i>
                    <span
                      >মোঃ শাফায়াত মাহবুব চৌধুরী, যুগ্মসচিব (সংযুক্ত), সুশাসন ও
                      অভিযোগ ব্যবস্থাপনা অধিশাখা</span
                    >
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <i class="fa fa-circle font-purple"></i>
                    <span
                      >মোঃ ছাইফুল ইসলাম, যুগ্মসচিব (সংযুক্ত), ই-গভর্নেন্স
                      অধিশাখা</span
                    >
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <i class="fa fa-circle font-purple"></i>
                    <span>মোঃ মখলেছুর রহমান, উপসচিব, সুশাসন অধিশাখা </span>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <i class="fa fa-circle font-purple"></i>
                    <span
                      >মোঃ উসমান গনি, সিনিয়র সহকারী সচিব, অভিযোগ ব্যবস্থাপনা
                      শাখা
                    </span>
                  </h4>
                </div>
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

  <!--end::overallCollaborators drawer-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-overallCollaborators-drawer",
  components: {},
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
