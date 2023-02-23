<template>
  <!--begin::Tables Widget 9-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span id="titabDash" class="card-label fw-bolder fs-3 mb-1">Ultimas incidencias</span>

        <span class="text-muted mt-1 fw-bold fs-7">Consolidado de incidencias recientes</span>
      </h3>

      <div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover">
        <a href="#" class="btn btn-sm btn-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          Nuevo
        </a>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
          <!--begin::Table head-->
          <thead>
            <tr id="tabDash" class="fw-bolder text-muted">
              <th class="min-w-150px">Responsable</th>
              <th class="min-w-140px">Fecha y hora</th>
              <th class="min-w-120px">Critico</th>
              <th class="min-w-120px text-center">Estado</th>
              <th class="min-w-100px text-center">Acciones</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in list" :key="index">
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="d-flex justify-content-start flex-column">
                      <a href="#" class="text-dark fw-bolder text-hover-primary fs-6">{{ item.name }}</a>

                      <span class="text-muted fw-bold text-muted d-block fs-7">{{ item.skills }}</span>
                    </div>
                  </div>
                </td>

                <td>
                  <a href="#" class="text-dark fw-bolder text-hover-primary d-block fs-6">{{ item.date }}</a>
                  <span class="text-muted fw-bold text-muted d-block fs-7">{{
                    item.hour
                  }}</span>
                </td>

                <td :style="{
                  color: item.critico === 'SI' ? 'red' : '#00A3FF',
                  fontWeight: 'bold',
                }">
                  {{ item.critico }}
                </td>
                <td class="text-center align-middle">
                  <div class="d-flex flex-column w-100 me-2 align-items-center text-nowrap">
                    <div class="d-flex flex-stack mb-2 ">
                      <span class="me-2 fs-7 fw-bold" v-bind:style="getStateStyle(item.state)">
                        {{ item.state }}
                      </span>
                    </div>
                  </div>
                </td>
                <td class="text-center">
                  <a href="#" class="btnw9 btn btn-icon btn-bg-light btn-sm me-1">
                    <span class="svg-icon svg-icon-3">
                      <inline-svg class="imw9" src="media/icons/duotune/art/art005.svg" />
                    </span>
                  </a>

                  <a href="#" class="btnw9 btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                    <span class="svg-icon svg-icon-3">
                      <inline-svg class="imw9" src="media/icons/duotune/general/gen027.svg" />
                    </span>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-widget-9",
  components: {},
  props: {
    widgetClasses: String,
  },
  methods: {
    getStateStyle(state) {
      if (state === "Pendiente") {
        return {
          color: "#FF0000",
          backgroundColor: "#FFDEDE",
          borderRadius: "15px",
          width: "90px",
          height: "25px",
          display: "inline-block",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "25px"
        };
      } else if (state === "En proceso") {
        return {
          color: "#C7880F",
          backgroundColor: "#FBEBCD",
          borderRadius: "15px",
          width: "90px",
          height: "25px",
          display: "inline-block",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "25px"
        };
      } else if (state === "Finalizado") {
        return {
          color: "#00AB44",
          backgroundColor: "#BAFAD7",
          borderRadius: "15px",
          width: "90px",
          height: "25px",
          display: "inline-block",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "25px"
        };
      } else if (state === "Cancelado") {
        return {
          color: "#DADADA",
          backgroundColor: "#464E5F",
          borderRadius: "15px",
          width: "90px",
          height: "25px",
          display: "inline-block",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "25px"
        };
      }
    },
  },
  setup() {
    const checked = ref(false);

    const list = [
      {
        name: "Ana Simmons",
        skills: "CENSIS",
        date: "20/02/23",
        hour: "11:30:00",
        state: "Pendiente",
        critico: "NO",
      },
      {
        name: "Jessie Clarcson",
        skills: "REDES",
        date: "19/02/23",
        hour: "14:10:00",
        state: "En proceso",
        critico: "SI",
      },
      {
        name: "Lebron Wayde",
        skills: "OTIDG",
        date: "15/02/23",
        hour: "15:20:10",
        state: "Finalizado",
        critico: "SI",
      },
      {
        name: "Natali Goodwin",
        skills: "Mayorazgo",
        date: "15/02/23",
        hour: "10:25:20",
        state: "Cancelado",
        critico: "NO",
      },
      {
        name: "Kevin Leonard",
        skills: "CENVUL",
        date: "11/02/23",
        hour: "16:05:10",
        state: "Finalizado",
        critico: "NO",
      },
    ];

    return {
      list,
      checked,
    };
  },
});
</script>
<style>
#tabDash,
#titabDash {
  color: #0000AF !important;
}
.imw9{
  filter: invert(80%) sepia(39%) saturate(1000%) hue-rotate(186deg) brightness(101%) contrast(101%)
}

.btnw9:hover {
  background-color: #b5b5c3;
  color: #0000AF;
}

.btnw9:active {
  background-color: #0000FF;
  color: #FFFFFF;
}
</style>