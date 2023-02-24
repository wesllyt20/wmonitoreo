<template>
  <!--begin::Toolbar ESTO EDITAR MAÑANA -->
  <div class="toolbar" id="kt_toolbar">
    <!--begin::Container-->
    <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
      <!--begin::Page title-->
      <div
        class="page-title d-flex align-items-center me-3 flex-wrap mb-5 mb-lg-0 lh-1"
      >
        <!--begin::Title-->

        <div class="btn-group" role="group" aria-label="Basic example">
          <a
            type="button"
            href="#"
            class="btn btn-outline-secondary"
            :class="{ active: activeTab === 'tablero' }"
            @click="setActiveTab('tablero')"
          >
          {{ translate("dashboard") }}
          </a>
          <a
            type="button"
            href="#/crafted/modals/general/invite-friends"
            class="btn btn-outline-secondary"
            :class="{ active: activeTab === 'gestion' }"
            @click="setActiveTab('gestion')"
          >
          {{ translate("craft") }}
          </a>
          <a
            type="button"
            href="#/crafted/basicflow/sign-in"
            class="btn btn-outline-secondary"
            :class="{ active: activeTab === 'registros' }"
            @click="setActiveTab('registros')"
          >
          {{ translate("records") }}
          </a>
        </div>

        <!--end::Title

        <span
          v-if="breadcrumbs"
          class="h-20px border-gray-200 border-start mx-4"
        ></span>

   
        <ul
          v-if="breadcrumbs"
          class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1"
        >
          <li class="breadcrumb-item pe-3">
            <router-link to="/dashboard" class="text-muted text-hover-primary">
              Home
            </router-link>
          </li>
          <li class="breadcrumb-item">
            <span class="bullet bg-gray-200 w-5px h-2px"></span>
          </li>
          <template v-for="(item, index) in breadcrumbs" :key="index">
            <li class="breadcrumb-item text-muted">
              {{ item }}
            </li>
            <li class="breadcrumb-item">
              <span class="bullet bg-gray-200 w-5px h-2px"></span>
            </li>
          </template>
          <li class="breadcrumb-item pe-3 text-dark">
            {{ title }}
          </li>
        </ul>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n"; // ejemplo de translate

export default defineComponent({
  setup(){
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
	 }
  },
  data() {
    return {
      activeTab: "tablero",
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
  name: "KToolbar",
  props: {
    breadcrumbs: Array,
    title: String,
  },
  components: {},
});
</script>
<style>
.btn-outline-secondary {
  color: #434349;
  background-color: #ffffff;
  border-color: #b5b5c3;
  height: 25px;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-outline-secondary.active {
  color: #0000af;
  background-color: #ebebef;
  border-color: #b5b5c3;
}
</style>
