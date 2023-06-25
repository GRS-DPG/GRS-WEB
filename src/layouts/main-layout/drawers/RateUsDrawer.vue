<template>
  <!--begin::rate_us drawer-->
  <div
    id="kt_rate_us_"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="rate_us"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_rate_us_toogle"
    data-kt-drawer-close="#kt_rate_us__close"
  >
    <div class="card shadow-none">
      <!--begin::Header-->
      <div class="card-header" id="kt_rate_us__header">
        <h3 class="card-title fw-bold text-dark">{{translate('yourFeedback')}}</h3>
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_rate_us__close"
          >
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body position-relative" id="kt_rate_us__body">
        <!--begin::Content-->
        <div
          id="kt_rate_us__scroll"
          class="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_rate_us__body"
          data-kt-scroll-dependencies="#kt_rate_us__header, #kt_rate_us__footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Timeline items-->
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label>{{translate('rating')}}</label>
                <div class="input-group">
                  <div class="rating-container rating-sm rating-animate">
                    <div class="clear-rating clear-rating-active" title="Clear">
                      <i class="glyphicon glyphicon-minus-sign"></i>
                    </div>
                    <div class="rating-stars">
                      <span class="empty-stars"
                        ><span class="star"
                          ><i class="glyphicon glyphicon-star-empty"></i></span
                        ><span class="star"
                          ><i class="glyphicon glyphicon-star-empty"></i></span
                        ><span class="star"
                          ><i class="glyphicon glyphicon-star-empty"></i></span
                        ><span class="star"
                          ><i class="glyphicon glyphicon-star-empty"></i></span
                        ><span class="star"
                          ><i
                            class="glyphicon glyphicon-star-empty"
                          ></i></span></span
                      ><span class="filled-stars" style="width: 0%"
                        ><span class="star"
                          ><i class="glyphicon glyphicon-star"></i></span
                        ><span class="star"
                          ><i class="glyphicon glyphicon-star"></i></span
                        ><span class="star"
                          ><i class="glyphicon glyphicon-star"></i></span
                        ><span class="star"
                          ><i class="glyphicon glyphicon-star"></i></span
                        ><span class="star"
                          ><i class="glyphicon glyphicon-star"></i></span></span
                      ><input
                        class="form-control rating rating-input"
                        data-bind="value: isRated"
                        data-size="sm"
                        id="rating"
                        type="text"
                      />
                    </div>
                    <div class="caption">
                      <span class="label label-default">{{translate('notRated')}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>{{translate('rateUsYourComment')}}</label>
                <div class="input-group">
                  <textarea
                  v-model="feedbackComments"
                    class="form-control"
                    cols="100"
                    id="txtaFeedback"
                    maxlength="500"
                    rows="6"
                    style="resize: none"
                  ></textarea>
                </div>
              </div>
              
              <div class="mt-5">
                <button
                  class="btn dark btn-outline btn-primary btn-action"
                      type="submit"
                      @click="rateUsSend()"
                >
                  {{ translate('send') }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--end::Timeline items-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Body-->

  <!--end::rate_us drawer-->
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { getAssetPath } from "@/core/helpers/assets";
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ApiService from '@/core/services/ApiService';
import { DrawerComponent } from '@/assets/ts/components/_DrawerComponent';

export default defineComponent({
  name: "kt-rate-us-drawer",
  components: {},
  setup() {
    const index = 0;
    const shown: boolean = false;
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
      index,
      getAssetPath,
      translate,
      currentLanguage,
    };
  },
  data() {
    return {
      api_url: "",
      feedbackComments: "",
      complaintNo: "" as any,
    };
  },
  async created() {
    this.complaintNo = this.$route.params.id;

  },
  methods: {
  async rateUsSend() {
      let formData = new FormData();
      //formData.set('rating', this.rating);
      formData.set('complaint_id', this.complaintNo);
      formData.set('feedback_comments', this.feedbackComments);
      await ApiService.post('grievance/rate-us',formData)
      .then((response) => {
        DrawerComponent?.hideAll();
        Swal.fire({
            text:  'Save Successfully.',
            icon: "success",
            buttonsStyling: false,
            heightAuto: false,
            customClass: {
            confirmButton: "btn fw-semobold btn-success",
          },
        })
          
      })
      .catch(({ response }) => {
        console.log(response);
      });
    },
  },
});
</script>
