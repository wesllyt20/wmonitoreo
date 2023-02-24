<template>
  <!--begin::List Widget 5-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-4">
      <h3 class="card-title align-items-start flex-column">
        <h2 id="tiw5" class="fw-bolder mb-2 text-dark">Panel eventos</h2>
        <span  class="text-muted fw-bold fs-7"
          >Programa tus eventos en el calendario</span
        >
      </h3>
      <div
        class="card-toolbar"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-trigger="hover"
      >
        <a
          href="#"
          class="btn btn-sm btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_invite_friends"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          Nuevo Evento
        </a>
      </div>
    </div>
    <!--end::Header-->
    
    <!--begin::Body-->
    <div class="card-body pt-5">
      <h3 class="fw-bolder mb-2 text-dark">Historial</h3>
      <!--begin::Timeline-->
      <div class="mt-7">

        <timeline></timeline>


      </div>
      <!--end::Timeline-->
    </div>
    <!--end: Card Body-->
  </div>
  <!--end: List Widget 5-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import timeline from '@/components/widgets/lists/timeline.vue';
import { MenuComponent } from "@/assets/ts/components/MenuComponent";

export default defineComponent({
  name: "kt-widget-5",
  props: {
    widgetClasses: String,
  },
  components: {
    timeline
  },
  setup() {
    onMounted(() => {
      MenuComponent.reinitialization();
    });
  },
});
</script>
<style>
.timeline-label:before {
  content: "";
  position: absolute;
  left: 1px;
  width: 3px;
  top: 0;
  bottom: 0;
  background-color: #00A3FF;
}
#tiw5{
  color:#0000AF !important
}
</style>
