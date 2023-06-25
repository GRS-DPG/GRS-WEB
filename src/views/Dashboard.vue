<template>
  <template v-if="layout === 'light-header'"> 
     <KTGrievanceList />
  </template>


</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTGrievanceList from "@/views/citizen/GrievanceList.vue";
import { layout } from "@/core/helpers/config";

export default defineComponent({
  name: "main-dashboard",
  components: {
    KTGrievanceList,
  },
  setup() {
    return {
      getAssetPath,
      layout
    };
  },
});
</script>
