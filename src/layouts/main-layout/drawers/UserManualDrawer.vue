<template>
  <!--begin::user_manual drawer-->
  <div
    id="kt_user_manual"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="user_manual"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_user_manual_toggle"
    data-kt-drawer-close="#kt_user_manual_close"
  >
    <div class="card shadow-none">
      <!--begin::Header-->
      <div class="card-header" id="kt_user_manual_header">
        <h3 class="card-title fw-bold text-dark"><a
            class=""
            href="https://training.grs.gov.bd/assets/grs_user_manual.pdf"
            target="_blank"
            >{{ translate("downloads") }}</a
          ></h3>

        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_user_manual_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body position-relative" id="kt_user_manual_body">
        <!--begin::Content-->
        <div
          id="kt_user_manual_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_user_manual_body"
          data-kt-scroll-dependencies="#kt_user_manual_header, #kt_user_manual_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="user-manual">
             <img style="width:100%;" :src="getAssetPath('media/user-manual/01.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/user-manual/02.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/user-manual/03.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/user-manual/04.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/user-manual/05.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/user-manual/06.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/user-manual/07.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/user-manual/08.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/user-manual/09.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/user-manual/10.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/user-manual/11.jpg')" />
             <img style="width:100%;" :src="getAssetPath('media/user-manual/12.jpg')" />
          </div>
          <!--end::Timeline items-->
        </div>
        <!--end::Content-->
      </div>
      <!--end::Body-->
    </div>
  </div>
  <!--end::user_manual drawer-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "kt-user-manual-drawer",
  components: {

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
});
</script>
