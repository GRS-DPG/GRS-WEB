<template>
  <!--begin::frq_ask_qns drawer-->
  <div
    id="kt_frq_ask_qns"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="frq_ask_qns"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_frq_ask_qns_toggle"
    data-kt-drawer-close="#kt_frq_ask_qns_close"
  >
    <div class="card shadow-none" style="width: 100%">
      <!--begin::Header-->
      <div class="card-header" id="kt_frq_ask_qns_header">
        <h3 class="card-title fw-bold text-dark">সচরাচর জিজ্ঞাস্য</h3>
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_frq_ask_qns_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body position-relative" id="kt_frq_ask_qns_body">
        <!--begin::Content-->
        <div
          id="kt_frq_ask_qns_scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_frq_ask_qns_body"
          data-kt-scroll-dependencies="#kt_frq_ask_qns_header, #kt_frq_ask_qns_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="modal-body">
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns1"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns1"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span"> অভিযোগ কি?</span>
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns1">
              <p class="font-md" style="text-align: justify">
                সরকারি দপ্তর অথবা আইনের আওতায় নিবন্ধিত সেবা প্রদানকারী
                প্রতিষ্ঠান কর্তৃক প্রতিশ্রুত সেবা বা পণ্য এবং/অথবা সেবাপদ্ধতি
                সম্পর্কে সেবাপ্রত্যাশীদের অসন্তুষ্টি অথবা প্রদেয়/প্রদত্ত সেবার
                সঙ্গে সম্পর্কিত বিধি-বহির্ভূত কাজ অথবা সেবাপ্রত্যাশীদের বৈধ
                অধিকার প্রদানে অস্বীকৃতির বিষয়ে ইলেকট্রনিক বা প্রচলিত পদ্ধতিতে
                (নির্ধারিত ফরমে) দায়েরকৃত দরখাস্ত অভিযোগ হিসেবে বিবেচিত হবে।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns2"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns2"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      সেবা প্রদান প্রতিশ্রুতি (Citizen’s Charter) কি?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns2">
              <p class="font-md" style="text-align: justify">
                সরকারি দপ্তর অথবা আইনের আওতায় নিবন্ধিত সেবা প্রদানকারী
                প্রতিষ্ঠান কর্তৃক প্রতিশ্রুত সেবা বা পণ্য এবং/অথবা সেবাপদ্ধতি
                সম্পর্কে সেবাপ্রত্যাশীদের অসন্তুষ্টি অথবা প্রদেয়/প্রদত্ত সেবার
                সঙ্গে সম্পর্কিত বিধি-বহির্ভূত কাজ অথবা সেবাপ্রত্যাশীদের বৈধ
                অধিকার প্রদানে অস্বীকৃতির বিষয়ে ইলেকট্রনিক বা প্রচলিত পদ্ধতিতে
                (নির্ধারিত ফরমে) দায়েরকৃত দরখাস্ত অভিযোগ হিসেবে বিবেচিত হবে।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns3"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns3"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      অভিযোগ প্রতিকার ব্যবস্থা কি?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns3">
              <p class="font-md" style="text-align: justify">
                সেবাপ্রত্যাশীদের অসন্তুষ্টি সংক্রান্ত বিষয়ে প্রতিকার চাওয়া বা
                বক্তব্য প্রদানের একটি কার্যকর ক্ষেত্র বা প্ল্যাটফরম থাকলে তাঁদের
                অসন্তোষ বা ক্ষোভ প্রশমনের সুযোগ সৃষ্টি হয়। এ লক্ষ্যে অভিযোগ
                প্রতিকার ব্যবস্থার অনলাইন প্ল্যাটফরম প্রস্তুত করা হয়েছে।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns4"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns4"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      কী ধরনের বিষয়ে অভিযোগ দাখিল করা যাবে?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns4">
              <p class="font-md" style="text-align: justify">
                ধর্মীয়, জনসেবার সঙ্গে সংশ্লিষ্ট দপ্তরসমূহের প্রতিশ্রুত সেবা,
                সেবা প্রদান পদ্ধতি এবং সেবা ও পণ্যের মান সম্পর্কে
                সেবাপ্রার্থীদের অসন্তুষ্টি বা সংক্ষুব্ধতা বিষয়ে অভিযোগ দাখিল করা
                যেতে পারে।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns5"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns5"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      কী ধরনের বিষয়ে অভিযোগ দাখিল করা যাবে না?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns5">
              <div class="font-md">
                নিম্নোক্ত বিষয়সমূহের ক্ষেত্রে অভিযোগ দাখিল করা যাবে না-
              </div>
              <ul class="font-md">
                <li>কোনো আদালতে বিচারাধীন ;</li>
                <li>তথ্য অধিকার-সংক্রান্ত; এবং</li>
                <li>
                  আদেশ প্রাপ্তির পর সংশ্লিষ্ট আইন বা বিধির আওতায় রিভিউ/আপিলের
                  সুযোগ রয়েছে।
                </li>
                <li>
                  সেবা প্রদান প্রতিশ্রুতিতে বর্ণিত সংশ্লিষ্ট সেবা প্রদানের
                  নির্ধারিত সময়সীমা অতিক্রান্ত হওয়ার পূর্বে অভিযোগ দাখিল করা
                  যাবে না। তবে নির্ধারিত সময়ের পূর্বেই সেবার আবেদনের বিষয়ে
                  সিদ্ধান্ত গৃহীত হয়ে থাকলে অভিযোগ দাখিল করা যাবে
                </li>
              </ul>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns6"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns6"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      কোন কোন দপ্তরের ক্ষেত্রে অভিযোগ দাখিল করা যাবে?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns6">
              <p class="font-md" style="text-align: justify">
                সকল সরকারি দপ্তর এবং আওতাধীন প্রতিষ্ঠান/সংস্থার জন্য প্রযোজ্য
                হবে। আইনের আওতায় নিবন্ধিত সেবা প্রদানকারী প্রতিষ্ঠানের ক্ষেত্রে
                নিয়ন্ত্রণকারী সরকারি দপ্তর অভিযোগ প্রতিকারের ব্যবস্থা গ্রহণ
                করবে।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns7"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns7"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      নাগরিক অভিযোগ (Public Grievance) কী?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns7">
              <p class="font-md" style="text-align: justify">
                সরকারি দপ্তর অথবা আইনের আওতায় নিবন্ধিত সেবা প্রদানকারী
                প্রতিষ্ঠানের প্রতিশ্রুত সেবা বা পণ্য এবং/অথবা সেবা প্রদান পদ্ধতি
                সম্পর্কে কোনো নাগরিকের অসন্তুষ্টি অথবা প্রদেয়/প্রদত্ত সেবার
                সঙ্গে সম্পর্কিত বিধি-বহির্ভূত কাজ অথবা নাগরিকের বৈধ অধিকার
                প্রদানে অস্বীকৃতির বিষয়ে দাখিলকৃত অভিযোগ নাগরিক অভিযোগ হিসেবে
                বিবেচিত হবে।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns8"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns8"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      কর্মকর্তা-কর্মচারী অভিযোগ (Staff Grievance) কী?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns8">
              <p class="font-md" style="text-align: justify">
                সরকারি দপ্তরে কর্মরত অথবা অবসরপ্রাপ্ত কোনো কর্মকর্তা-কর্মচারী
                সংশ্লিষ্ট কর্তৃপক্ষের নিকট হতে কর্মকর্তা-কর্মচারী হিসেবে তাঁর
                প্রাপ্য যেকোনো সেবা বা বৈধ অধিকার প্রাপ্তির ক্ষেত্রে অসন্তুষ্ট
                বা সংক্ষুব্ধ হয়ে প্রতিকারের জন্য আবেদন দাখিল করলে তা
                কর্মকর্তা-কর্মচারী অভিযোগ হিসেবে গণ্য হবে। অবসরপ্রাপ্ত
                কর্মকর্তা-কর্মচারীগণের পেনশন, আনুতোষিক, আর্থিক সুবিধা-সংক্রান্ত
                যেকোনো অভিযোগও এ শ্রেণির অভিযোগের অন্তর্ভুক্ত হবে।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns9"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns9"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      দাপ্তরিক অভিযোগ (Organizational Grievance) কী?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns9">
              <p class="font-md" style="text-align: justify">
                কোনো সরকারি দপ্তরের প্রতিশ্রুত সেবা বা পণ্য এবং/অথবা সেবা প্রদান
                পদ্ধতি বা বৈধ অধিকার-সংক্রান্ত বিষয়ে কোনো দপ্তর কর্তৃক দাখিলকৃত
                অভিযোগ দাপ্তরিক অভিযোগ হিসেবে বিবেচিত হবে।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns10"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns10"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      কে অভিযোগ দাখিল করতে পারবেন?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns10">
              <p class="font-md" style="text-align: justify">
                সংক্ষুব্ধ ব্যক্তি, প্রতিষ্ঠান অথবা তাঁদের মনোনীত প্রতিনিধি
                অভিযোগ দায়ের করতে পারবেন। প্রতিষ্ঠানের ক্ষেত্রে প্রতিষ্ঠান
                প্রধান কর্তৃক মনোনীত প্রতিনিধি এবং ব্যক্তির ক্ষেত্রে নিকটাত্মীয়
                (বাবা-মা, স্বামী-স্ত্রী অথবা সন্তান) প্রতিনিধি হিসেবে অভিযোগ
                দাখিল করতে পারবেন। দাপ্তরিক-অভিযোগের ক্ষেত্রে সংশ্লিষ্ট দপ্তর
                প্রধান অভিযোগ দাখিল করতে পারবেন।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns11"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns11"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      পরিচয় গোপন রেখে অভিযোগ দাখিল করা যাবে কি-না?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns11">
              <p class="font-md" style="text-align: justify">
                ব্যক্তিগত তথ্য প্রদান না করলে অভিযোগকারীকে অজ্ঞাতনামা হিসেবে
                গণ্য করা হবে। অজ্ঞাতনামা হিসেবে অভিযোগ দায়ের করলে অভিযোগটির ওপর
                কার্যক্রম গ্রহণ করা হবে কিনা, সে বিষয়ে অভিযোগের ধরন / গুরুত্ব
                অনুযায়ী অনিক যথাযথ পদক্ষেপ গ্রহণ করবেন। এক্ষেত্রে অভিযোগ চূড়ান্ত
                নিষ্পত্তি করা সম্ভব নাও হতে পারে।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns12"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns12"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      কার নিকট অভিযোগ দাখিল করতে হবে?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns12">
              <div class="font-md">
                সকল সরকারি দপ্তরে সেবা-সংক্রান্ত অভিযোগ গ্রহণ এবং তা প্রতিকারের
                জন্য একজন অভিযোগ নিষ্পত্তি কর্মকর্তা (অনিক) দায়িত্ব পালন করবেন:
              </div>
              <ul class="font-md">
                <li>
                  জেলা, বিভাগীয়/আঞ্চলিক পর্যায়ের দপ্তর এবং
                  অধিদপ্তর/সংস্থা/অন্যান্য দপ্তরের অভিযোগ নিষ্পত্তি কর্মকর্তা
                  হবেন দপ্তর প্রধান অথবা তাঁর মনোনীত একজন জ্যেষ্ঠ কর্মকর্তা।
                  জেলা পর্যায়ের দপ্তরের অনিক আওতাধীন ইউনিয়ন ও উপজেলা পর্যায়ের
                  দপ্তরসমূহের অনিক হিসেবে গণ্য হবেন; এবং
                </li>
                <li>
                  মন্ত্রণালয়/বিভাগের অভিযোগ নিষ্পত্তি কর্মকর্তা হবেন একজন
                  যুগ্মসচিব। অভিযোগ নিষ্পত্তি কর্মকর্তার তথ্য জানতে
                  <a class="blueLink" href="/groInformation.do" target="_blank"
                    >এখানে ক্লিক করুন</a
                  >।
                </li>
              </ul>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns13"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns13"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      কীভাবে অভিযোগ দাখিল করবেন?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns13">
              <p class="font-md" style="text-align: justify">
                অভিযোগ প্রতিকার ব্যবস্থা-সংক্রান্ত ওয়েবসাইট (www.grs.gov.bd)-এর
                মাধ্যমে অভিযোগ দাখিল করা যাবে। এ ছাড়া ইলেক্ট্রনিক পদ্ধতিতে
                (ইমেইল, ই-ফাইল অথবা কল সেন্টারের মাধ্যমে) অথবা প্রচলিত পদ্ধতিতে
                (সংশ্লিষ্ট দপ্তরে উপস্থিত হয়ে অথবা ডাকযোগে) অভিযোগ দাখিল করা
                যাবে। মন্ত্রণালয়/বিভাগ এবং অভিযোগ ব্যবস্থাপনা সেলে দাখিলযোগ্য
                অভিযোগের ক্ষেত্রে প্রচলিত পদ্ধতিতে সচিবালয়ের গেটে অবস্থিত
                মন্ত্রিপরিষদ বিভাগের অভিযোগ গ্রহণ কেন্দ্রে দাখিল করা যাবে।
                অভিযোগ দাখিলের ক্ষেত্রে নির্ধারিত ফরম (সংযোজনী ‘খ-১’) ব্যবহার
                করতে হবে।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns14"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns14"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      অভিযোগ নিষ্পত্তির সময়সীমা কত?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns14">
              <ul class="font-md">
                <li>
                  <div>
                    অভিযোগ নিষ্পত্তি কর্মকর্তা কর্তৃক অভিযোগ নিষ্পত্তির সর্বোচ্চ
                    সময়সীমা নিম্নরূপ-
                  </div>
                  <ol>
                    <li type="i">
                      সাধারনভাবে অভিযোগ নিষ্পত্তির সর্বোচ্চ সময়সীমা ৩০
                      কার্যদিবস;
                    </li>
                    <li type="i">
                      তদন্তের উদ্যোগ গৃহীত হলে অতিরিক্ত ১০ কার্যদিবস সময়ের মধ্যে
                      অভিযোগ নিষ্পত্তি করতে হবে।
                    </li>
                  </ol>
                </li>
                <li>
                  আপিল নিষ্পত্তির সর্বোচ্চ সময়সীমা আপিল দাখিলের তারিখ থেকে অনধিক
                  ২০ কার্যদিবস;
                </li>
                <li>
                  অভিযোগ ব্যবস্থাপনা সেল কর্তৃক অভিযোগ/আপিল নিষ্পত্তির সর্বোচ্চ
                  সময়সীমা অনধিক ৬০ কার্যদিবস।
                </li>
              </ul>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns15"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns15"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      অভিযোগ নিষ্পত্তির সর্বশেষ অবস্থা কীভাবে জানা যাবে?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns15">
              <p class="font-md" style="text-align: justify">
                ওয়েব-ভিত্তিক অভিযোগ প্রতিকার ব্যবস্থায় প্রাপ্ত অথবা আপলোডকৃত
                অভিযোগসমূহের ট্র্যাকিং নম্বর সংবলিত এসএমএস এবং/অথবা ইমেইল
                অভিযোগকারীকে প্রদান করতে হবে। ওয়েব-ভিত্তিক সিস্টেম চালু না থাকলে
                এসএমএস, ইমেইল অথবা ডাকযোগে প্রাপ্তিস্বীকার প্রদান করতে হবে।
              </p>
              <p class="font-md" style="text-align: justify">
                অনলাইন অভিযোগ প্রতিকার ব্যবস্থার ওয়েবসাইটে (<a
                  class="blueLink"
                  href="http://www.grs.gov.bd/"
                  >www.grs.gov.bd</a
                >) ‘অভিযোগের অবস্থা জানুন’ বাটনে ক্লিক করে প্রাপ্ত ট্র্যাকিং
                নম্বর ব্যবহার করে অভিযোগ নিষ্পত্তির সর্বশেষ অবস্থা জানা যাবে।
                এছাড়া ব্যবহারকারী হিসেবে লগইন করে অভিযোগের তালিকা থেকে অভিযোগ
                নিষ্পত্তির সর্বশেষ অবস্থা জানতে পারবেন।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns16"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns16"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span"> কালো তালিকা কী?</span>
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns16">
              <p class="font-md" style="text-align: justify">
                কোনো অভিযোগকারী অভ্যাসগতভাবে অসত্য এবং কাউকে হয়রানি করার জন্য
                কিংবা অন্য কোনো অসৎ উদ্দেশ্যে অভিযোগ দাখিল করেন মর্মে প্রমাণিত
                হলে অনিক-এর সুপারিশের ভিত্তিতে সংশ্লিষ্ট আপিল কর্মকর্তা উক্ত
                অভিযোগকারীকে কালো তালিকাভুক্ত করতে পারবেন। এরূপ কালো তালিকাভুক্ত
                ব্যক্তির নিকট থেকে পরবর্তী সময়ে প্রাপ্ত কোনো অভিযোগ কর্তৃপক্ষ
                বিনা পদক্ষেপে খারিজ করতে পারবেন।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns17"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns17"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span"> আপিল কর্তৃপক্ষ কে?</span>
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns17">
              <div class="font-md">
                অভিযোগ প্রতিকার-সংক্রান্ত আপিল নিষ্পত্তির লক্ষ্যে সকল সরকারি
                দপ্তরে একজন আপিল কর্মকর্তা দায়িত্ব পালন করবেন:
              </div>
              <ul class="font-md">
                <li>
                  মন্ত্রণালয়/বিভাগ ব্যতীত সকল দপ্তরের ক্ষেত্রে সংশ্লিষ্ট দপ্তরের
                  পরবর্তী ঊর্ধ্বতন দপ্তরের অনিক আপিল কর্মকর্তা হিসেবে দায়িত্ব
                  পালন করবেন;
                </li>
                <li>
                  মন্ত্রণালয়/বিভাগের আপিল কর্মকর্তা হবেন একজন অতিরিক্ত সচিব অথবা
                  জ্যেষ্ঠ যুগ্ম সচিব। আপিল কর্মকর্তার তথ্য জানতে
                  <a class="blueLink" href="/groInformation.do" target="_blank"
                    >এখানে ক্লিক করুন</a
                  >।
                </li>
              </ul>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns18"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns18"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      আপিল নিষ্পত্তিতে অসন্তুষ্ট হলে কী করনীয়?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns18">
              <p class="font-md" style="text-align: justify">
                যেকোনো দপ্তরের আপিল কর্মকর্তার সিদ্ধান্তে সংক্ষুব্ধ হলে অনলাইনে
                (<a class="blueLink" href="http://www.grs.gov.bd/"
                  >www.grs.gov.bd</a
                >) অথবা প্রচলিত পদ্ধতিতে (সংযোজনী ‘খ-৪’-এ নির্ধারিত ফরমে) অভিযোগ
                ব্যবস্থাপনা সেলে আপিল করা যাবে।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns19"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns19"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      প্রচলিত পদ্ধতিতে/অফলাইনে অভিযোগ দাখিল করা যাবে
                      কি-না?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns19">
              <p class="font-md" style="text-align: justify">
                যে সকল দপ্তরে ওয়েব-ভিত্তিক অভিযোগ প্রতিকার ব্যবস্থা চালু হয়নি সে
                সকল দপ্তরে ইলেক্ট্রনিক পদ্ধতিতে (ইমেইল, ই-ফাইল অথবা কল সেন্টারের
                মাধ্যমে) অথবা প্রচলিত পদ্ধতিতে (সংশ্লিষ্ট দপ্তরে উপস্থিত হয়ে
                অথবা ডাকযোগে) অভিযোগ দাখিল করা যাবে। তবে যে সকল দপ্তরে
                ওয়েব-ভিত্তিক অভিযোগ প্রতিকার ব্যবস্থা চালু হবে সে সকল দপ্তরে
                অনলাইনে অভিযোগ দাখিলকে উৎসাহিত করতে হবে।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns20"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns20"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      অভিযোগ নিষ্পত্তিতে প্রতিক্রিয়া কীভাবে জানাবেন?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns20">
              <p class="font-md" style="text-align: justify">
                অনলাইন অভিযোগ প্রতিকার ব্যবস্থার ওয়েবসাইটে (www.grs.gov.bd)
                ‘অভিযোগ নিষ্পত্তিতে প্রতিক্রিয়া’ বাটনে ক্লিক করে প্রতিক্রিয়া
                জানা যাবে। এছাড়া ব্যবহারকারী হিসেবে লগইন করে অভিযোগের তালিকা
                থেকে অভিযোগ নিষ্পত্তির সর্বশেষ অবস্থা জানতে পারবেন।
              </p>
            </div>
            <div class="panel panel-default mt-5">
              <div
                class="panel-heading"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#kt_grs_frqaskqns21"
                aria-expanded="true"
                aria-controls="kt_grs_frqaskqns21"
              >
                <h4 class="panel-title">
                  <a
                    class="accordion-toggle accordion-toggle-styled"
                    data-parent="#accordion3"
                    data-toggle="collapse"
                  >
                    <i class="fa fa-question-circle font-red"></i>
                    <span class="processmap-span">
                      অভিযোগ ব্যবস্থাপনা সেলে কী ধরনের অভিযোগ/আপিল দাখিল?</span
                    >
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel-body collapse show mt-5" id="kt_grs_frqaskqns21">
              <ul class="font-md">
                <li>
                  কোনো অভিযোগ মন্ত্রণালয়/বিভাগের সচিব অথবা আপিল কর্মকর্তা
                  সংশ্লিষ্ট হলে অনলাইনে (<a
                    class="blueLink"
                    href="http://www.grs.gov.bd/"
                    >www.grs.gov.bd</a
                  >) অথবা প্রচলিত পদ্ধতিতে (সংযোজনী ‘খ-৩’-এ নির্ধারিত ফরমে)
                  অভিযোগ ব্যবস্থাপনা সেলে অভিযোগ দাখিল করা যাবে।
                </li>
                <li>
                  যেকোনো দপ্তরের আপিল কর্মকর্তার সিদ্ধান্তে সংক্ষুব্ধ হলে
                  অনলাইনে (<a class="blueLink" href="http://www.grs.gov.bd/"
                    >www.grs.gov.bd</a
                  >) অথবা প্রচলিত পদ্ধতিতে (সংযোজনী ‘খ-৪’-এ নির্ধারিত ফরমে)
                  অভিযোগ ব্যবস্থাপনা সেলে আপিল করা যাবে।
                </li>
              </ul>
            </div>
            <hr class="blackLine" />
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                data-dismiss="modal"
                type="button"
                id="kt_frq_ask_qns_close"
              >
                {{ translate("cancel") }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--end::Timeline items-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Body-->

  <!--end::frq_ask_qns drawer-->
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { getAssetPath } from "@/core/helpers/assets";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "kt-frq-ask-qns-drawer",
  components: {},
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
