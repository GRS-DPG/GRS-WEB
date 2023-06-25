<template>
  <!--begin::feedback drawer-->
  <div
    id="kt_feedback"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="feedback"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_feedback"
    data-kt-drawer-close="#kt_feedback_close"
  >
    <div class="card shadow-none">
      <!--begin::Header-->
      <div class="card-header" id="kt_feedback_header">
        <h3 class="card-title fw-bold text-dark">Feedback</h3>
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_feedback_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body position-relative" id="kt_feedback_body">
        <!--begin::Content-->
        <div
          id="kt_feedback_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_feedback_body"
          data-kt-scroll-dependencies="#kt_feedback_header, #kt_feedback_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="modal-body form">
            <form action="#" class="form-horizontal">
              <div align="center" class="form-body font-md">
                <div class="form-group">
                  <label class="">
                    <span class="font-purple"
                      >মোবাইল নম্বর এবং ট্রাকিং নম্বর দিয়ে বাটনে ক্লিক করে
                      অভিযোগের অবস্থা জানুন। যদি অভিযোগ নিস্পত্তিকৃত হয় তাহলে
                      প্রতিক্রিয়া জানাতে পারবেন।</span
                    >
                  </label>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-6">
                    <span>মোবাইল নম্বর</span>
                    <span class="required">*</span>
                  </label>
                  <div class="col-md-6">
                    <div class="input-group has-success">
                      <span class="input-group-addon">
                        <i class=""></i>
                      </span>
                      <input
                        autocomplete="off"
                        class="form-control"
                        name="mobileNumberFeedback"
                        type="text"
                      />
                      <div class="form-control-focus"></div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-md-4">
                    <span>ট্র্যাকিং নম্বর</span>
                    <span class="required">*</span>
                  </label>
                  <div class="col-md-6">
                    <div class="input-group has-success">
                      <span class="input-group-addon">
                        <i class="fa fa-commenting-o"></i>
                      </span>
                      <input
                        autocomplete="off"
                        class="form-control"
                        name="trackingNumberFeedback"
                        type="text"
                      />
                      <div class="form-control-focus"></div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <button
                    class="btn btn-primary"
                    onclick="javascript:getStatus('grievanceFeedback', 'mobileNumberFeedback', 'trackingNumberFeedback')"
                    type="button"
                  >
                    <span>অবস্থা জানুন </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--end::Timeline items-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Body-->

  <!--end::feedback drawer-->
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
