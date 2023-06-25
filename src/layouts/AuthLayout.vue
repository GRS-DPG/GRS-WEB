<template>
  <div
    class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
  >
    <!--begin::Content-->
    <div class="d-flex flex-center flex-column flex-column-fluid p-10">
      <router-view></router-view>
    </div>
    <!--end::Content-->

    <!--begin::Footer-->
    <div
      class="d-flex flex-center flex-column-auto"
      style="background: #dcddde"
    >
      <div class="footer py-4 w-100 row px-5">
        <div class="footer-reve-logo col-md-6">
          <h4 class="m-0 fs-6" style="color: #7030a0">
            {{ translate("technicalCooperation") }}
          </h4>
          <a href="https://tappware.com" target="_blank">
            <img
              height="40"
              :src="getAssetPath('media/logos/tappware.png')"
              style="height: 40px"
            />
          </a>
        </div>
        <div class="footer-govt-logo col-md-6 text-end">
          <h4 class="m-0 fs-6 pb-2" style="color: #7030a0">
            {{ translate("plannedAndBroughtBy") }}
          </h4>
          <ul class="footer_logos" style="list-style: none">
            <li style="float: right; padding-left: 15px">
              <a href="http://a2i.pmo.gov.bd/" target="_blank">
                <img height="30" :src="getAssetPath('media/logos/a2i.png')" />
              </a>
            </li>
            <li style="float: right; padding-left: 15px">
              <a href="http://cabinet.gov.bd/" target="_blank">
                <img
                  height="30"
                  :src="getAssetPath('media/logos/bd_gov.png')"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--end::Footer-->
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted } from "vue";
import LayoutService from "@/core/services/LayoutService";
import { useBodyStore } from "@/stores/body";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "auth-layout",
  components: {},
  setup() {
    const store = useBodyStore();
    const { t, te } = useI18n();
    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    onMounted(() => {
      LayoutService.emptyElementClassesAndAttributes(document.body);

      store.addBodyClassname("app-blank");
      store.addBodyClassname("bg-body");
    });

    return {
      getAssetPath,
      translate,
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
