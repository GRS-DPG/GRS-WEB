<template>
  <!--begin::contact drawer-->
  <div
    id="kt_contact"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="contact"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_contact"
    data-kt-drawer-close="#kt_contact_close"
  >
    <div class="card shadow-none" style="width:100%">
      <!--begin::Header-->
      <div class="card-header" id="kt_contact_header">
        <h3 class="card-title fw-bold text-dark">Contact</h3>
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_contact_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div
        class="card-body position-relative"
        id="kt_contact_body"
      >
        <!--begin::Content-->
        <div
          id="kt_contact_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_contact_body"
          data-kt-scroll-dependencies="#kt_contact_header, #kt_contact_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="text-center font-purple fs-16 contact">
                    <div><span>Email:</span>&nbsp;<a class="blueLink" href="mailto:grs@cabinet.gov.bd">grs@cabinet.gov.bd</a>
                    </div>

                    <div><span>Mobile number:</span>&nbsp;<a class="blueLink" href="tel:+8801768194532">+8801768194532, +8801891964464</a>
                    </div>

                    <div><p class="v1MsoNormal" style="text-align: center"><span style="font-size: 9.0pt;font-family: &quot;Nirmala UI&quot;,&quot;sans-serif&quot;;color: red">শুধুমাত্র</span><span style="font-size: 9.0pt; font-family: &quot;Nikosh&quot;,&quot;serif&quot;; color: red"> </span><span style="font-size: 9.0pt; font-family: &quot;Nirmala UI&quot;,&quot;sans-serif&quot;; color: red">জিআরএস</span><span style="font-size: 9.0pt; font-family: &quot;Nikosh&quot;,&quot;serif&quot;; color: red"> </span><span style="font-size: 9.0pt; font-family: &quot;Nirmala UI&quot;,&quot;sans-serif&quot;; color: red">সফটওয়্যার</span><span style="font-size: 9.0pt; font-family: &quot;Nikosh&quot;,&quot;serif&quot;; color: red"> </span><span style="font-size: 9.0pt; font-family: &quot;Nirmala UI&quot;,&quot;sans-serif&quot;; color: red">সংক্রান্ত</span><span style="font-size: 9.0pt; font-family: &quot;Nikosh&quot;,&quot;serif&quot;; color: red"> </span><span style="font-size: 9.0pt; font-family: &quot;Nirmala UI&quot;,&quot;sans-serif&quot;; color: red">জিজ্ঞাসা</span><span style="font-size: 9.0pt; font-family: &quot;Nikosh&quot;,&quot;serif&quot;; color: red">/</span><span style="font-size: 9.0pt; font-family: &quot;Nirmala UI&quot;,&quot;sans-serif&quot;; color: red">চাহিদা</span><span style="font-size: 9.0pt; font-family: &quot;Nikosh&quot;,&quot;serif&quot;; color: red"> </span><span style="font-size: 9.0pt; font-family: &quot;Nirmala UI&quot;,&quot;sans-serif&quot;; color: red">অথবা</span><span style="font-size: 9.0pt; font-family: &quot;Nikosh&quot;,&quot;serif&quot;; color: red"> </span><span style="font-size: 9.0pt; font-family: &quot;Nirmala UI&quot;,&quot;sans-serif&quot;; color: red">টেকনিক্যাল</span><span style="font-size: 9.0pt; font-family: &quot;Nikosh&quot;,&quot;serif&quot;; color: red"> </span><span style="font-size: 9.0pt; font-family: &quot;Nirmala UI&quot;,&quot;sans-serif&quot;; color: red">সমস্যা</span><span style="font-size: 9.0pt; font-family: &quot;Nikosh&quot;,&quot;serif&quot;; color: red"> </span><span style="font-size: 9.0pt; font-family: &quot;Nirmala UI&quot;,&quot;sans-serif&quot;; color: red">স্ক্রিনশর্টসহ</span><span style="font-size: 9.0pt; font-family: &quot;Nikosh&quot;,&quot;serif&quot;; color: red"> </span><span style="font-size: 9.0pt; font-family: &quot;Nirmala UI&quot;,&quot;sans-serif&quot;; color: red">মেইল</span><span style="font-size: 9.0pt; font-family: &quot;Nikosh&quot;,&quot;serif&quot;; color: red"> </span><span style="font-size: 9.0pt; font-family: &quot;Nirmala UI&quot;,&quot;sans-serif&quot;; color: red">করুন</span><span style="font-size: 10.0pt"><!-- o ignored --></span></p></div>


                    <br>
          </div>
        </div>
      </div>
      <!--end::Timeline items-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Body-->

  <!--end::contact drawer-->
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
