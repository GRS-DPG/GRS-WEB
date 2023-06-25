<template>
  <!--begin::Toolbar-->
  <div
  id="kt_forms_widget_2_editor_toolbar"
  class="ql-toolbar d-flex flex-stack py-2"
>
  <div class="me-2">
    <span class="ql-formats ql-size ms-0">
      <select class="ql-size w-75px">
        <option value="small"></option>
        <option selected></option>
        <option value="large"></option>
        <option value="huge"></option>
      </select>
    </span>
   

    <span class="ql-formats">
      <button class="ql-bold"></button>
      <button class="ql-italic"></button>
      <button class="ql-underline"></button>
      <select class="ql-font">
        <option selected></option>
        <option value="serif"></option>
        <option value="monospace"></option>
      </select>
      <button class="ql-strike"></button>
      <button class="ql-script" value="sub"></button>
      <button class="ql-script" value="super"></button>
      <select class="ql-color">
        <option selected></option>
        <option value="#e60000" style="background-color: rgb(230, 0, 0);"></option>
        <option value="#ff9900" style="background-color: rgb(255, 153, 0);"></option>
        <option value="#ffff00" style="background-color: rgb(255, 255, 0);"></option>
        <option value="#008a00" style="background-color: rgb(0, 138, 0);"></option>
        <option value="#0066cc" style="background-color: rgb(0, 102, 204);"></option>
        <option value="#9933ff" style="background-color: rgb(153, 51, 255);"></option>
        <option value="#ffffff" style="background-color: rgb(255, 255, 255);"></option>
        <option value="#facccc" style="background-color: rgb(250, 204, 204);"></option>
        <option value="#ffebcc" style="background-color: rgb(255, 235, 204);"></option>
        <option value="#ffffcc" style="background-color: rgb(255, 255, 204);"></option>
        <option value="#cce8cc" style="background-color: rgb(204, 232, 204);"></option>
        <option value="#cce0f5" style="background-color: rgb(204, 224, 245);"></option>
        <option value="#ebd6ff" style="background-color: rgb(235, 214, 255);"></option>
        <option value="#bbbbbb" style="background-color: rgb(187, 187, 187);"></option>
        <option value="#f06666" style="background-color: rgb(240, 102, 102);"></option>
        <option value="#ffc266" style="background-color: rgb(255, 194, 102);"></option>
        <option value="#ffff66" style="background-color: rgb(255, 255, 102);"></option>
        <option value="#66b966" style="background-color: rgb(102, 185, 102);"></option>
        <option value="#66a3e0" style="background-color: rgb(102, 163, 224);"></option>
        <option value="#c285ff" style="background-color: rgb(194, 133, 255);"></option>
        <option value="#888888" style="background-color: rgb(136, 136, 136);"></option>
        <option value="#a10000" style="background-color: rgb(161, 0, 0);"></option>
        <option value="#b26b00" style="background-color: rgb(178, 107, 0);"></option>
        <option value="#b2b200" style="background-color: rgb(178, 178, 0);"></option>
        <option value="#006100" style="background-color: rgb(0, 97, 0);"></option>
        <option value="#0047b2" style="background-color: rgb(0, 71, 178);"></option>
        <option value="#6b24b2" style="background-color: rgb(107, 36, 178);"></option>
        <option value="#444444" style="background-color: rgb(68, 68, 68);"></option>
        <option value="#5c0000" style="background-color: rgb(92, 0, 0);"></option>
        <option value="#663d00" style="background-color: rgb(102, 61, 0);"></option>
        <option value="#666600" style="background-color: rgb(102, 102, 0);"></option>
        <option value="#003700" style="background-color: rgb(0, 55, 0);"></option>
        <option value="#002966" style="background-color: rgb(0, 41, 102);"></option>
        <option value="#3d1466" style="background-color: rgb(61, 20, 102);"></option>
        <option value="#4A1031" style="background-color: rgb(61, 20, 102);"></option>
      </select>
      <select class="ql-background">
        <option selected></option>
        <option value="#e60000" style="background-color: rgb(230, 0, 0);"></option>
        <option value="#ff9900" style="background-color: rgb(255, 153, 0);"></option>
        <option value="#ffff00" style="background-color: rgb(255, 255, 0);"></option>
        <option value="#008a00" style="background-color: rgb(0, 138, 0);"></option>
        <option value="#0066cc" style="background-color: rgb(0, 102, 204);"></option>
        <option value="#9933ff" style="background-color: rgb(153, 51, 255);"></option>
        <option value="#ffffff" style="background-color: rgb(255, 255, 255);"></option>
        <option value="#facccc" style="background-color: rgb(250, 204, 204);"></option>
        <option value="#ffebcc" style="background-color: rgb(255, 235, 204);"></option>
        <option value="#ffffcc" style="background-color: rgb(255, 255, 204);"></option>
        <option value="#cce8cc" style="background-color: rgb(204, 232, 204);"></option>
        <option value="#cce0f5" style="background-color: rgb(204, 224, 245);"></option>
        <option value="#ebd6ff" style="background-color: rgb(235, 214, 255);"></option>
        <option value="#bbbbbb" style="background-color: rgb(187, 187, 187);"></option>
        <option value="#f06666" style="background-color: rgb(240, 102, 102);"></option>
        <option value="#ffc266" style="background-color: rgb(255, 194, 102);"></option>
        <option value="#ffff66" style="background-color: rgb(255, 255, 102);"></option>
        <option value="#66b966" style="background-color: rgb(102, 185, 102);"></option>
        <option value="#66a3e0" style="background-color: rgb(102, 163, 224);"></option>
        <option value="#c285ff" style="background-color: rgb(194, 133, 255);"></option>
        <option value="#888888" style="background-color: rgb(136, 136, 136);"></option>
        <option value="#a10000" style="background-color: rgb(161, 0, 0);"></option>
        <option value="#b26b00" style="background-color: rgb(178, 107, 0);"></option>
        <option value="#b2b200" style="background-color: rgb(178, 178, 0);"></option>
        <option value="#006100" style="background-color: rgb(0, 97, 0);"></option>
        <option value="#0047b2" style="background-color: rgb(0, 71, 178);"></option>
        <option value="#6b24b2" style="background-color: rgb(107, 36, 178);"></option>
        <option value="#444444" style="background-color: rgb(68, 68, 68);"></option>
        <option value="#5c0000" style="background-color: rgb(92, 0, 0);"></option>
        <option value="#663d00" style="background-color: rgb(102, 61, 0);"></option>
        <option value="#666600" style="background-color: rgb(102, 102, 0);"></option>
        <option value="#003700" style="background-color: rgb(0, 55, 0);"></option>
        <option value="#002966" style="background-color: rgb(0, 41, 102);"></option>
        <option value="#3d1466" style="background-color: rgb(61, 20, 102);"></option>
        <option value="#4A1031" style="background-color: rgb(61, 20, 102);"></option>
      </select>
      <button class="ql-list" value="ordered"></button>
      <button class="ql-list" value="bullet"></button>
      <select class="ql-align">
        <option selected></option>
        <option value="center"></option>
        <option value="right"></option>
        <option value="justify"></option>
      </select>
      <button class="ql-blockquote"></button>
      <button class="ql-code-block"></button>
      <button class="ql-image"></button>
      <button class="ql-link"></button>
      <button class="ql-clean"></button>
    </span>
  </div>

  <div class="me-n3">
    <span class="btn btn-icon btn-sm btn-active-color-primary">
      <i class="flaticon2-clip-symbol icon-ms"></i>
    </span>

    <span class="btn btn-icon btn-sm btn-active-color-primary">
      <i class="flaticon2-pin icon-ms"></i>
    </span>
  </div>
  </div>
  <!--end::Toolbar-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { toolbarWidthFluid } from "@/core/helpers/config";
import Quill from "quill";

export default defineComponent({
  name: "layout-editor",
  components: {
  
  },
  setup() {
    onMounted(() => {
      const editorId = "kt_forms_widget_2_editor";

      // init editor
      const options = {
        modules: {
          toolbar: {
            container: "#kt_forms_widget_2_editor_toolbar",
          },
        },
        theme: "snow",
      };

      // Init editor
      new Quill("#" + editorId, options);
      //const data = new Quill("#kt_forms_widget_2_editor");

      //console.log(data.root.innerHTML);
    });
    return {
      toolbarWidthFluid,
    };
  },
});
</script>
