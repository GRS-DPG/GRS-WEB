<template>
  <!--begin::grs guideline drawer-->
  <div
    id="kt_grs_guideline"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="grs_guideline"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_grs_guideline_toggle"
    data-kt-drawer-close="#kt_grs_guideline_close"
  >
    <div class="card shadow-none">
      <!--begin::Header-->
      <div class="card-header" id="kt_grs_guideline_header">
        <h3 class="card-title fw-bold text-dark"><a
            class=""
            href="https://training.grs.gov.bd/assets/grs_guideline.pdf"
            target="_blank"
            >ডাউনলোড</a
          ></h3>

        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_grs_guideline_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body position-relative" id="kt_grs_guideline_body">
        <!--begin::Content-->
        <div
          id="kt_grs_guideline_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_grs_guideline_body"
          data-kt-scroll-dependencies="#kt_grs_guideline_header, #kt_grs_guideline_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="grs-guideline">
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/01.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/02.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/03.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/04.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/05.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/06.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/07.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/08.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/09.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/10.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/11.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/12.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/13.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/14.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/15.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/16.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/17.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/18.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/19.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/20.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/21.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/22.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/23.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/24.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/25.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/26.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/27.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/grs-guideline/28.jpg')" />
          </div>
          <!--end::Timeline items-->
        </div>
        <!--end::Content-->
      </div>
      <!--end::Body-->
    </div>
  </div>
  <!--end::grs guideline drawer-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Item1 from "@/components/activity-timeline-items/Item1.vue";
import Item2 from "@/components/activity-timeline-items/Item2.vue";
import Item3 from "@/components/activity-timeline-items/Item3.vue";
import Item4 from "@/components/activity-timeline-items/Item4.vue";
import Item5 from "@/components/activity-timeline-items/Item5.vue";
import Item6 from "@/components/activity-timeline-items/Item6.vue";
import Item7 from "@/components/activity-timeline-items/Item7.vue";
import Item8 from "@/components/activity-timeline-items/Item8.vue";

export default defineComponent({
  name: "kt-activity-drawer",
  components: {
    Item1,
    Item2,
    Item3,
    Item4,
    Item5,
    Item6,
    Item7,
    Item8,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
