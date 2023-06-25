<template>
  <div class="home-container mx-auto">
    <div class="row m-0">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 py-5 px-7">
        <div
          class="portlet light bordered text-align-justify homepage-first-block">
          <div class="portlet-body">
            <div class="row m-0">
              <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 home-des">
                <p class="fs-6">
                  <span>{{ translate("homePageDescription") }}</span>
                  <span class="more-text">
                    <span
                      >...
                    </span>
                    <a id="kt_click_here_toggle"
                      class="media-embed"
                      data-toggle="modal"
                      href="#modalUserManual"
                    >
                      <span class="blueLink">{{
                        translate("plzClickHere")
                      }}</span
                      >...
                    </a>
                  </span>
                </p>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 m-auto text-end">
                <div class="text-align-center">
                  <!-- <a class="" href="#">
                    <img
                      :src="getAssetPath('media/logos/Submit-Grievance-pressed.png')"
                    />
                  </a> -->
                  <a class="grievance-submit" href="/#add-grievance-without-login">
                    <img v-if="currentLanguage=='bn'"
                      :src="getAssetPath('media/logos/ovijog_dakhil_up.png')"
                    />
                    <img class="pressed" v-if="currentLanguage=='bn'"
                      :src="getAssetPath('media/logos/ovijog_dakhil_down.png')"
                    />
                     <img  v-if="currentLanguage=='en'"
                      :src="getAssetPath('media/logos/Submit-Grievance.png')"
                    />
                     <img class="pressed" v-if="currentLanguage=='en'"
                      :src="getAssetPath('media/logos/Submit-Grievance-pressed.png')"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 middle-part">
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <a id="kt_frq_ask_qns_toggle"
          class="mt-widget-link"
         href="#"
        >
          <div class="mt-widget-1">
            <div class="mt-img circle-1 my-6">
              <!-- <img :src="getAssetPath('media/home/circle2-pressed.png')" /> -->
            </div>
            <div class="mt-body">
              <h3 class="mt-username mb-5">{{ translate("frqAskQns") }}</h3>
              <p class="mt-user-title">
                {{ translate("frqAskQnsDes") }}
              </p>
            </div>
          </div>
        </a>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <a id="kt_feedback"
          class="mt-widget-link"
          href="javascript:showComplaintFeedbackModal()"
        >
          <div class="mt-widget-1">
            <div class="mt-img circle-2 my-6">
              <!-- <img :src="getAssetPath('media/home/circle4-normal.png')" /> -->
            </div>
            <div class="mt-body">
              <h3 class="mt-username mb-5">{{ translate("Feedback") }}</h3>
              <p class="mt-user-title">
                {{ translate("FeedbackDes") }}
              </p>
            </div>
          </div>
        </a>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <a class="mt-widget-link" href="/sign-in">
          <div class="mt-widget-1">
            <div class="mt-img circle-3 my-6">
              <!-- <img :src="getAssetPath('media/home/circle5-normal.png')" /> -->
            </div>
            <div class="mt-body">
              <h3 class="mt-username mb-5">{{ translate("reqForAppeal") }}</h3>
              <p class="mt-user-title">
                {{ translate("reqForAppealDes") }}
              </p>
            </div>
          </div>
        </a>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <router-link
              to="/home/SuggForImprovement">
            <div class="mt-widget-1">
            <div class="mt-img circle-4 my-6">
              <!-- <img :src="getAssetPath('media/home/circle1-normal.png')" /> -->
            </div>
            <div class="mt-body x">
              <h3 class="mt-username mb-5">{{ translate("suggForImprovement") }}</h3>
              <p class="mt-user-title">
                {{ translate("suggForImprovementDes") }}
              </p>
            </div>
          </div>           
            </router-link>
      </div>
    </div>
    <div class="row m-0 bottom-part">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="portlet light px-0">
          <div class="portlet-body">
            <div class="row m-0">
              <div class="col-md-2 col-sm-12 col-xs-12 pe-0">
                <a  id="kt_user_manual_toggle"
                  class="media-embed"
                  data-asset="false"
                  href="/assets/grs_user_manual.pdf"
                  onclick="javascript:previewGrsUserManual(this, event);"
                >
                  <div class="mt-widget-1">
                    <div class="mt-img my-4">
                      <img :src="getAssetPath('media/logos/user_manual.png')" />
                    </div>
                    <div class="mt-body">
                      <p class="mt-user-title px-2 mb-6">
                        {{ translate("userManualDes") }}
                      </p>
                      <div class="mt-stats">
                        <button class="btn btn-info btn-md px-2 w-100 rounded-0">
                          {{ translate("userManual") }}
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-2 col-sm-12 col-xs-12">
                <a id="kt_process_map_toggle" href="#"
                  class="media-embed"
                  data-asset="false"
                  onclick="javascript:showFlowchartModal();">
                  <div class="mt-widget-1">
                    <div class="mt-img my-4">
                      <img :src="getAssetPath('media/logos/flowchart.png')" />
                    </div>
                    <div class="mt-body">
                      <p class="mt-user-title px-2 mb-6">
                        {{ translate("processMapDes") }}
                      </p>
                      <div class="mt-stats">
                        <button class="btn btn-success btn-md px-2 w-100 rounded-0">
                          {{ translate("processMap") }}
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-2 col-sm-12 col-xs-12 px-0">
                <a class="" href="/services.do">
                  <div class="mt-widget-1">
                    <div class="mt-img my-4">
                      <img
                        :src="getAssetPath('media/logos/citizen_charter.png')"
                      />
                    </div>
                    <div class="mt-body">
                      <p class="mt-user-title px-2 mb-6">
                        {{ translate("citizenCharterDes") }}
                      </p>
                      <div class="mt-stats">
                        <button class="btn btn-info btn-md px-2 w-100 rounded-0">
                          {{ translate("citizenCharter") }}
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-2 col-sm-12 col-xs-12">
                <a id="kt_download_toggle" data-toggle="modal" href="#grievanceFormsList">
                  <div class="mt-widget-1">
                    <div class="mt-img my-4">
                      <img :src="getAssetPath('media/logos/forms.png')" />
                    </div>
                    <div class="mt-body">
                      <p class="mt-user-title px-2 mb-6">
                        {{ translate("downloadsDes") }}
                      </p>
                      <div class="mt-stats">
                        <button class="btn btn-success btn-md px-2 w-100 rounded-0">
                          {{ translate("downloads") }}
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-2 col-sm-12 col-xs-12 px-0">
                <a id="kt_grs_guideline_toggle"
                  class="media-embed"
                  data-asset="false"
                  href="/assets/grs_guideline.pdf"
                  onclick="javascript:previewGrsGuideline(this, event);"
                >
                  <div class="mt-widget-1">
                    <div class="mt-img my-4">
                      <img :src="getAssetPath('media/logos/guidline.png')" />
                    </div>
                    <div class="mt-body">
                      <p class="mt-user-title px-2 mb-6">
                        {{ translate("grsGuidelineDes") }}
                      </p>
                      <div class="mt-stats">
                        <button class="btn btn-info btn-md px-2 w-100 rounded-0">
                          {{ translate("grsGuideline") }}
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-2 col-sm-12 col-xs-12">
                <a id="kt_contact" class="cursor-pointer">
                  <div class="mt-widget-1">
                    <div class="mt-img my-4">
                      <img
                        :src="getAssetPath('media/logos/contact.png')"
                        style="width: 40px"
                      />
                    </div>
                    <div class="mt-body grs-box-content">
                      <p class="mt-user-title px-2">
                        {{ translate("contactDes") }}
                      </p>
                      <div class="mt-stats">
                        <button class="btn btn-success btn-md px-2 w-100 rounded-0">
                          {{ translate("contact") }}
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <KTUserManualDrawer></KTUserManualDrawer>
  <ContactDrawerVue></ContactDrawerVue>
  <GrsGuidelineDrawer></GrsGuidelineDrawer>
  <FrqAskQnsDrawer></FrqAskQnsDrawer>
  <FeedbackDrawer></FeedbackDrawer>
  <ProcessMapDrawer></ProcessMapDrawer>
  <DownloadDrawer></DownloadDrawer>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { layout } from "@/core/helpers/config";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import KTUserManualDrawer from "@/layouts/main-layout/drawers/UserManualDrawer.vue";
import ContactDrawerVue from "@/layouts/main-layout/drawers/ContactDrawer.vue";
import GrsGuidelineDrawer from "@/layouts/main-layout/drawers/GrsGuidelineDrawer.vue";
import FrqAskQnsDrawer from "@/layouts/main-layout/drawers/FrqAskQnsDrawer.vue";
import ProcessMapDrawer from "@/layouts/main-layout/drawers/ProcessMapDrawer.vue";
import FeedbackDrawer from "@/layouts/main-layout/drawers/FeedbackDrawer.vue";
import DownloadDrawer from "@/layouts/main-layout/drawers/DownloadDrawer.vue";
import Widget1 from "@/components/dashboard-default-widgets/Widget1.vue";
import Widget2 from "@/components/dashboard-default-widgets/Widget2.vue";
import Widget3 from "@/components/dashboard-default-widgets/Widget3.vue";
import Widget4 from "@/components/dashboard-default-widgets/Widget4.vue";
import Widget5 from "@/components/dashboard-default-widgets/Widget5.vue";
import Widget6 from "@/components/dashboard-default-widgets/Widget6.vue";
import Widget7 from "@/components/dashboard-default-widgets/Widget7.vue";
import Widget8 from "@/components/dashboard-default-widgets/Widget8.vue";
import Widget9 from "@/components/dashboard-default-widgets/Widget9.vue";
import Widget10 from "@/components/dashboard-default-widgets/Widget10.vue";
import MixedWidget5 from "@/components/widgets/mixed/Widget5.vue";

export default defineComponent({
  name: "GrsHome",
  components: {
    Widget1,
    Widget2,
    Widget3,
    Widget4,
    Widget5,
    Widget6,
    Widget7,
    Widget8,
    Widget9,
    Widget10,
    MixedWidget5,
    KTUserManualDrawer,
    ContactDrawerVue,
    GrsGuidelineDrawer,
    FrqAskQnsDrawer,
    FeedbackDrawer,
    ProcessMapDrawer,
    DownloadDrawer,

  },
  setup() {
    const { t, te } = useI18n();
    const i18n = useI18n();
    i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "en";

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
<style lang="scss">
  body {
      background: url(http://127.0.0.1:5173/media/global/bg_main.gif) repeat-y scroll center top white !important;
      background-color: unset !important;
  }
</style>

