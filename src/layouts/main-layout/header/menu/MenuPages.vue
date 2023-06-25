<template>
<div
    data-kt-menu-trigger="click"
    data-kt-menu-placement="bottom-start"
    class="menu-item menu-lg-down-accordion me-lg-1"
  >
    <span class="menu-link">
      <span class="menu-title btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary border"><KTIcon icon-name="menu" icon-class="fs-2 fs-md-1" /></span>
      <span class="menu-arrow d-lg-none"></span>
    </span>
    <div
      class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown w-100 w-lg-300px p-5 p-lg-5"
      style=""
    >
      <!--begin:Row-->
      <div class="row" data-kt-menu-dismiss="true">
        <!--begin:Col-->
        <div class="col-lg-12 border-left-lg-1">
          <div class="menu-inline menu-column menu-active-bg">
            <div class="menu-item">
              <router-link
                class="menu-link"
                to="/administrative-grievance"
              >
                <span class="menu-bullet">
                  <KTIcon icon-name="element-8" icon-class="fs-2 fs-md-1" />
                </span>
                <span class="menu-title">{{ translate("grievancesSubmittedByYou") }}</span>
              </router-link>
            </div>
            <div class="menu-item">
               <router-link
                class="menu-link"
                to="/add-public-grievance"
              >
                <span class="menu-bullet">
                    <KTIcon icon-name="home" icon-class="fs-2 fs-md-1" />
                </span>
                 <span class="menu-title">{{ translate("officialGrievance") }}</span>
              </router-link>
            </div>
            <div class="menu-item">
              <router-link
                class="menu-link"
                to="/add-public-grievance"
              >
                <span class="menu-bullet">
                     <KTIcon icon-name="directbox-default" icon-class="fs-2 fs-md-1" />
                </span>
                 <span class="menu-title">{{ translate("staffGrievance") }}</span>
              </router-link>
            </div>
             <div class="menu-item">
              <router-link
                class="menu-link"
                to="/add-public-grievance"
              >
                <span class="menu-bullet">
                    <i class="fa-solid fa-upload fs-2 fs-md-1"></i>
                </span>
                 <span class="menu-title">{{ translate("grievanceUpload") }}</span>
              </router-link>
            </div>
             <div class="menu-item">
              <router-link
                class="menu-link"
                to="/add-public-grievance"
              >
                <span class="menu-bullet">
                     <KTIcon icon-name="directbox-default" icon-class="fs-2 fs-md-1" />
                </span>
                 <span class="menu-title">{{ translate("selfMotivatedgrievance") }}</span>
              </router-link>
            </div>
            <div class="menu-item">
              <router-link
                class="menu-link"
                to="/blacklist"
              >
                <span class="menu-bullet">
                   <KTIcon icon-name="cross-circle" icon-class="fs-2 fs-md-1" />
                </span>
                <span class="menu-title">{{ translate("blackList") }}</span>
              </router-link>
            </div>
            <div class="menu-item">
              <a href="#" class="menu-link">
                <span class="menu-bullet">
                   <KTIcon icon-name="shield-cross" icon-class="fs-2 fs-md-1" />
                </span>
                <span class="menu-title">{{ translate("blackListRequests") }}</span>
              </a>
            </div>
            <div class="menu-item">
              <a href="#" class="menu-link" id="kt_user_manual_gro_toggle">
                <span class="menu-bullet">
                   <KTIcon icon-name="book" icon-class="fs-2 fs-md-1" />
                </span>
                <span class="menu-title">{{ translate("userManual") }} ({{ translate("gro") }})</span>
              </a>
            </div>
          </div>
        </div>
        <!--end:Col-->
      </div>
      <!--end:Row-->
    </div>
  </div>
  <div class="menu-item me-lg-1">
    <router-link
      class="menu-link"
      to="/dashboard"
      active-class="active"
    >
      <span class="menu-title">{{ translate("dashboard") }}</span>
    </router-link>
  </div>
  <div class="menu-item me-lg-1">
    <router-link
      class="menu-link"
      to="/administrative-grievance-list"
    >
      <span class="menu-title">{{ translate("manageGrievance") }}</span>
    </router-link>
  </div>
  <div class="menu-item me-lg-1">
    <router-link
      class="menu-link"
      to="/"
    >
      <span class="menu-title">{{ translate("manageAppeal") }}</span>
    </router-link>
  </div>
  
  <!-- <KTGroUserManualDrawer></KTGroUserManualDrawer> -->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import MainMenuConfig from "@/core/config/MainMenuConfig";
import { headerMenuIcons } from "@/core/helpers/config";
export default defineComponent({
  name: "KTMenu",
  components: {
    
  },
  setup() {
    const { t, te } = useI18n();
    const route = useRoute();

    const hasActiveChildren = (match: string) => {
      return route.path.indexOf(match) !== -1;
    };

    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    return {
      hasActiveChildren,
      headerMenuIcons,
      MainMenuConfig,
      translate,
      getAssetPath,
    };
  },
});
</script>
