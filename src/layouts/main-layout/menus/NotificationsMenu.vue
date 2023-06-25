<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px"
    data-kt-menu="true"
  >
    <!--begin::Heading-->
    <div
      class="d-flex flex-column bgi-no-repeat rounded-top border-bottom"
      :style="`background-image: url('${getAssetPath(
        '/media/misc/menu-header-bg.jpg'
      )}')`"
    >
      <!--begin::Title-->
      <h3 class="text-info fw-semobold px-9 mt-10 mb-6">
        নটিফিকেশন <span class="fs-8 opacity-75 ps-3">(১ টি নতুন নটিফিকেশন )</span>
      </h3>
      <!--end::Title-->
    </div>
    <!--end::Heading-->

    <!--begin::Tab content-->
    <div class="">
      <!--begin::Tab panel-->
      <div class="">
        <!--begin::Items-->
        <div class="scroll-y mh-325px my-5 px-8">
          <template v-for="(item, index) in data1" :key="index">
            <!--begin::Item-->
            <div class="d-flex flex-stack py-4">
              <!--begin::Section-->
              <div class="d-flex align-items-center">
                <!--begin::Symbol-->
                <div class="symbol symbol-35px me-4">
                  <span class="bg-warning symbol-label">
                    <KTIcon
                      icon-name="notification-on"
                      icon-class="fs-2 fs-md-1 text-white"
                    />
                  </span>
                </div>
                <!--end::Symbol-->

                <!--begin::Title-->
                <div class="mb-0 me-2">
                  <a
                    href="#"
                    class="fs-7 text-gray-800 text-hover-primary fw-bold"
                    >{{ item.title }}</a
                  >
                </div>
                <!--end::Title-->
              </div>
              <!--end::Section-->

              <!--begin::Label-->
              <span class="badge badge-light fs-8">{{ item.time }}</span>
              <!--end::Label-->
            </div>
            <!--end::Item-->
          </template>
        </div>
        <!--end::Items-->

        <!--begin::View more-->
        <div class="py-3 text-center border-top">
          <a href="#" class="btn btn-color-gray-600 btn-active-color-primary">
            সকল নোটিফিকেশন দেখুন
            <KTIcon icon-name="arrow-right" icon-class="fs-5" />
          </a>
        </div>
        <!--end::View more-->
      </div>
      <!--end::Tab panel-->
    </div>
    <!--end::Tab content-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "notifications-menu",
  components: {},
  setup() {
    const data1 = [
      {
        title: "বিভাগীয় ব্যবস্থা গ্রহণের সুপারিশ করা হয়েছে ",
        description: "",
        time: "৬ মাস ৮ দিন",
        icon: "technology-2",
        state: "primary",
      },
      {
        title: "ভাগীয় ব্যবস্থা গ্রহণের সুপারিশ করা হয়েছে",
        description: "",
        time: "৬ মাস ১৩ দিন",
        icon: "information-5",
        state: "danger",
      },
     {
        title: "ভাগীয় ব্যবস্থা গ্রহণের সুপারিশ করা হয়েছে",
        description: "",
        time: "৬ মাস ১৩ দিন",
        icon: "information-5",
        state: "danger",
      },
      {
        title: "ভাগীয় ব্যবস্থা গ্রহণের সুপারিশ করা হয়েছে",
        description: "",
        time: "৬ মাস ১৩ দিন",
        icon: "information-5",
        state: "warning",
      },
      {
        title: "ভাগীয় ব্যবস্থা গ্রহণের সুপারিশ করা হয়েছে",
        description: "",
        time: "৬ মাস ১৩ দিন",
        icon: "information-5",
        state: "info",
      },
    ];

    const data2 = [
      {
        code: "200 OK",
        state: "success",
        message: "New order",
        time: "Just now",
      },
      {
        code: "500 ERR",
        state: "danger",
        message: "New customer",
        time: "2 hrs",
      },
      {
        code: "200 OK",
        state: "success",
        message: "Payment process",
        time: "5 hrs",
      },
      {
        code: "300 WRN",
        state: "warning",
        message: "Search query",
        time: "2 days",
      },
      {
        code: "200 OK",
        state: "success",
        message: "API connection",
        time: "1 week",
      },
      {
        code: "200 OK",
        state: "success",
        message: "Database restore",
        time: "Mar 5",
      },
      {
        code: "300 WRN",
        state: "warning",
        message: "System update",
        time: "May 15",
      },
      {
        code: "300 WRN",
        state: "warning",
        message: "Server OS update",
        time: "Apr 3",
      },
      {
        code: "300 WRN",
        state: "warning",
        message: "API rollback",
        time: "Jun 30",
      },
      {
        code: "500 ERR",
        state: "danger",
        message: "Refund process",
        time: "Jul 10",
      },
      {
        code: "500 ERR",
        state: "danger",
        message: "Withdrawal process",
        time: "Sep 10",
      },
      {
        code: "500 ERR",
        state: "danger",
        message: "Mail tasks",
        time: "Dec 10",
      },
    ];

    return {
      data1,
      data2,
      getIllustrationsPath,
      getAssetPath,
    };
  },
});
</script>
