<template>
  <!--begin::TopNav-->
    <div
      class="d-flex flex-center flex-column-auto grs-header"
     
    >
      <div class="topnav py-1 w-100 row px-10">
        <h7 class="m-0 fs-6 pb-2" style="color: black"
          ><b>grs@cabinet.gov.bd</b></h7
        >
      </div>
    </div>
    <!--end::TopNav-->
    <!--begin::Header-->

    <div class="row border-bottom border-3 border-info grs-header">
      <div class="flex-center" style="background: #ffff">
        <div class="py-4 w-100 row px-5">
          <div class="col-md-6">
            <button class="btn"><i class="fa fa-bars fs-1"></i></button>
            <button class="btn"><i class="fa fa-home fs-1"></i></button>
            <a href="https://training.grs.gov.bd/" target="_blank">
              <img :src="getAssetPath('media/logos/grs.png')" />
            </a>
          </div>
          <div class="col-md-6 text-center">
            <button class="btn btn-primary btn-md mr-2">
              {{ translate("myGovLogin") }}
            </button>
            <button class="btn btn-primary btn-md m-2">
              {{ translate("complainantLogin") }}
            </button>
            <button class="btn btn-primary btn-md mr-2">
              {{ translate("administrativeLogin") }}
            </button>
            <button class="btn btn-primary btn-md m-4">
              {{ translate("english") }}
            </button>
          </div>
        </div>
      </div>
    </div>

  <!--end::Header-->
  <div
    class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
  >
    <!--begin::Content-->
    <div class="d-flex flex-center flex-column flex-column-fluid p-10">
      <router-view></router-view>
    </div>
    <!--end::Content-->

    <!--begin::Footer-->
    <div class="page-prefooter border-top border-5 border-secondary py-5 grs-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-12 footer-block">
            <h4 style="color: #7030a0">{{ translate("importantInfo") }}</h4>
            <ul class="fa-ul text-left m-0 py-4">
              <!--<li><a th:text="#{index.footer.conditions}" href="javascript:featureComingSoon();"></a></li>-->
              <li>
                <a data-toggle="modal" href="#modalOverallCollaborators">{{
                  translate("overallCollaboration")
                }}</a>
              </li>
              <li>
                <a data-toggle="modal" href="#modalContactInformation">{{
                  translate("contact")
                }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12 footer-block">
            <h4 class="" style="color: #7030a0">
              {{ translate("importantLinks") }}
            </h4>
            <ul class="fa-ul text-left m-0 py-4">
              <li>
                <a href="http://bangladesh.gov.bd/" target="_blank">{{
                  translate("bangladeshPortal")
                }}</a>
              </li>
              <li>
                <a href="http://www.cabinet.gov.bd/" target="_blank">{{
                  translate("cabinetDivision")
                }}</a>
              </li>
              <li>
                <a href="http://a2i.pmo.gov.bd/" target="_blank">{{
                  translate("a2iProgram")
                }}</a>
              </li>
              <li>
                <a href="https://eksheba.gov.bd/" target="_blank">{{
                  translate("onlineForms")
                }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12 footer-block">
            <h4 style="color: #7030a0">{{ translate("socialMedia") }}</h4>
            <ul class="py-4">
              <li class="list-inline-item">
                <a href="#" target="_blank" class="facebook"
                  ><i class="lab la-facebook-f fs-1"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" class="twitter"
                  ><i class="lab la-twitter fs-1"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" class="youtube"
                  ><i class="lab la-youtube fs-1"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" class="google-plus"
                  ><i class="lab la-google-plus fs-1"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12 footer-block">
            <h4 class="m-0 fs-6 pb-2" style="color: #7030a0">
              {{ translate("plannedAndBroughtBy") }}
            </h4>
            <ul class="footer_logos py-2" style="list-style: none">
              <li style="float: left; padding-left: 50px">
                <a href="http://a2i.pmo.gov.bd/" target="_blank">
                  <img height="30" :src="getAssetPath('media/logos/a2i.png')" />
                </a>
              </li>
              <li style="float: left; padding-left: 15px">
                <a href="http://cabinet.gov.bd/" target="_blank">
                  <img
                    height="30"
                    :src="getAssetPath('media/logos/bd_gov.png')"
                  />
                </a>
              </li>
            </ul>
            <div class="py-5">
              <p class="fs-8">{{ translate("plannedAndBroughtByDes1") }}</p>
              <p class="fs-8">{{ translate("plannedAndBroughtByDes2") }}</p>
            </div>
          </div>
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
