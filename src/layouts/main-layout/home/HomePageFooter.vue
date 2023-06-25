<template>
    <!--begin::Footer-->
    <div class="page-prefooter border-top border-5 border-secondary py-5 grs-footer bg-white">
      <div class="container" style="max-width: 1020px;">
        <div class="row m-0">
          <div class="col-md-3 col-sm-6 col-xs-12 footer-block">
            <h4 class="m-0" style="color: #7030a0 color: rgb(112, 48, 160);border-bottom: 1px solid #bebebe;padding-bottom: 5px;font-size: 14px;">{{ translate("importantInfo") }}</h4>
            <ul class="fa-ul text-left m-0 py-4">
              <!--<li><a th:text="#{index.footer.conditions}" href="javascript:featureComingSoon();"></a></li>-->
              <li>
                <a id="kt_overallCollaborators" class="cursor-pointer">{{
                  translate("overallCollaboration")
                }}</a>
              </li>
              <li>
                <a id="kt_contact"  class="cursor-pointer">{{
                  translate("contact")
                }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12 footer-block">
            <h4 class="m-0" style="color: #7030a0 color: rgb(112, 48, 160);border-bottom: 1px solid #bebebe;padding-bottom: 5px;font-size: 14px;">
              {{ translate("importantLinks") }}
            </h4>
            <ul class="fa-ul text-left m-0 py-4">
              <li>
                <a href="http://bangladesh.gov.bd/" class="cursor-pointer" target="_blank">{{
                  translate("bangladeshPortal")
                }}</a>
              </li>
              <li>
                <a href="http://www.cabinet.gov.bd/" class="cursor-pointer" target="_blank">{{
                  translate("cabinetDivision")
                }}</a>
              </li>
              <li>
                <a href="http://a2i.pmo.gov.bd/" class="cursor-pointer" target="_blank">{{
                  translate("a2iProgram")
                }}</a>
              </li>
              <li>
                <a href="https://eksheba.gov.bd/" class="cursor-pointer" target="_blank">{{
                  translate("onlineForms")
                }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12 footer-block">
            <h4 class="m-0" style="color: #7030a0 color: rgb(112, 48, 160);border-bottom: 1px solid #bebebe;padding-bottom: 5px;font-size: 14px;">{{ translate("socialMedia") }}</h4>
            <ul class="py-4" style="padding:0px">
              <li class="list-inline-item">
                <a href="#" target="_blank" class="facebook social-icon"
                  ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" class="twitter social-icon"
                  ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" class="youtube social-icon"
                  ></a>
              </li>
              <li class="list-inline-item">
                <a href="#" target="_blank" class="google-plus social-icon"
                  ></a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12 footer-block">
            <h4 class="m-0 fs-6 pb-2" style="color: #7030a0 color: rgb(112, 48, 160);border-bottom: 1px solid #bebebe;padding-bottom: 5px;font-size: 14px;">
              {{ translate("plannedAndBroughtBy") }}
            </h4>
            <ul class="footer_logos py-2 text-end" style="list-style: none">
              <li>
                <a href="http://a2i.pmo.gov.bd/" target="_blank">
                  <img height="30" :src="getAssetPath('media/logos/a2i.png')" />
                </a>
              </li>
              <li>
                <a href="http://cabinet.gov.bd/" target="_blank">
                  <img
                    height="30"
                    :src="getAssetPath('media/logos/bd_gov.png')"
                  />
                </a>
              </li>
            </ul>
            <div class="cleardiv">&nbsp;</div>
            <div class="py-5 text-end">
              <p class="fs-8 mb-0" style="color: #696969; font-size: 12px;">{{ translate("plannedAndBroughtByDes1") }}</p>
              <p class="fs-8 mb-0" style="color: #696969; font-size: 12px;">{{ translate("plannedAndBroughtByDes2") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end::Footer-->
<OverallCollaboratorsDrawer></OverallCollaboratorsDrawer>
<ContactDrawerVue></ContactDrawerVue>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted } from "vue";
import LayoutService from "@/core/services/LayoutService";
import { useBodyStore } from "@/stores/body";
import { useI18n } from "vue-i18n";
import OverallCollaboratorsDrawer from "../drawers/OverallCollaboratorsDrawer.vue";
import ContactDrawerVue from "../drawers/ContactDrawer.vue";

export default defineComponent({
  name: "home-page-footer",
  components: 
  { 
    OverallCollaboratorsDrawer,
    ContactDrawerVue
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

    return {
      getAssetPath,
      translate,
    };
  },
});
</script>
<style lang="scss">
  .grs-header {
    background-color: #ebebeb;
  }
  .grs-header .topnav, .grs-header .menu-bar{
    max-width: 1020px;
    margin: auto !important;
  }
  .btn-default.custom{
    font-size: 14px;
    margin-top: 10px;
    color: #666666;
    padding: 10px 15px!important;
    box-shadow: 1px 1px #cecece !important;
    border-radius: 4px !important;
    padding-top: 5px !important;
    padding-bottom: 5px !important;
    background-color: #fff;
    border: 1px solid #ccc !important;
  }
  .btn-default.custom:hover{
    background-color: #4f008c;
    color: #fff;
  }
</style>
