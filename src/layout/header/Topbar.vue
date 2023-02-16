<template>
  <!--begin::Toolbar wrapper-->
  <div
    class="d-flex align-items-stretch flex-shrink-0"
    id="kt_header_user_menu_toggle"
  >
    <!--begin::Activities-->

    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::Menu-->
      <div
        class="cursor-pointer symbol symbol-30px symbol-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <span class="svg-icon svg-icon-1">
          <img src="media/icons/duotune/general/menuOption.svg" />
        </span>
      </div>
      <KTUserMenu></KTUserMenu>
      <!--end::Menu-->
    </div>
    <div id="dividermenu2" class="border border-vertical"></div>
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::drawer toggle-->

      <span class="svg-icon svg-icon-1">
        <div class="d-flex flex-column">
          <div class="fw-bolder text-muted d-flex align-items-center fs-5">
            María Rosa
          </div>
          
            <a class="text-dark fw-bolder fs-3 align-right">OTIDG</a>
          
        </div>
      </span>

      <!--end::drawer toggle-->
    </div>
    <!--end::Activities-->

    <!--begin::Quick links-->

    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <div class="cursor-pointer symbol symbol-30px symbol-md-40px">
        <img src="media/avatars/150-11.jpg" alt="metronic" />
      </div>
    </div>

    <!--end::Heaeder menu toggle-->
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

//import KTQuickLinksMenu from "@/layout/header/partials/QuickLinksMenu.vue";
import KTUserMenu from "@/layout/header/partials/UserMenu.vue";

export default defineComponent({
  name: "topbar",
  components: {
    KTUserMenu,
  },
});
</script>
<style>
#dividermenu2 {
  height: 70%;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
}
.align-right {
  text-align: right;
}

</style>

