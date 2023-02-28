<template>
  <div
    class="
      menu
      menu-lg-rounded
      menu-column
      menu-lg-row
      menu-state-bg
      menu-title-gray-700
      menu-state-title-primary
      menu-state-icon-primary
      menu-state-bullet-primary
      menu-arrow-gray-400
      fw-bold
      my-5 my-lg-0
      align-items-stretch
    "
    id="#kt_header_menu"
    data-kt-menu="true"
  >
    <a class="navbar-brand">
      <img
        id="minam"
        src="media/logos/logo_minAmbiente.png"
        class="img-rounded"
        alt="Cinque Terre"
      />
      <img
        id="igplog"
        src="media/logos/logo_igp.png"
        class="img-rounded"
        alt="Cinque Terre"
      />
    </a>
    <div id="dividermenu" class="border border-vertical"></div>
    <a id="texto-desaparece"
      >{{ translate("operMon") }}</a
    >
    <div class="vr vr-blurry"></div>
  </div>

  <!--end::Menu wrapper-->
</template>

<script lang="ts">

import { useI18n } from "vue-i18n";


export default ({
  name: "menu",
  components: {},
  setup() {
    const { t, te } = useI18n();

      const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };


    return {
      translate
    };
  },
});
</script>
<style>
#dividermenu {
  height: 70%;
  margin-top: 10px;
  margin-left: 15px;
}
#texto-desaparece {
  font-size: 35px;
  color: #0000af;
  margin-top: 10px;
  margin-left: 20px;
  font-weight: 300;
}
@media screen and (max-width: 1080px) {
  #texto-desaparece {
    display: none;
  }
}
#minam {
  margin-top: 10px;
  height: 40px;
}

#igplog {
  margin-top: 10px;
  height: 40px;
  margin-left: 10px;
}

@media screen and (max-width: 990px) {
  #igplog, #minam {
    display: none;
  }
}
.vr {
  height: 245px;
  margin-left: 15px;
}
</style>
