<template>
  <!--begin::Tables Widget 9-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span id="titabDash" class="card-label fw-bolder fs-2 mb-1"
          >Lista de usuarios</span
        >
        <span class="text-muted mt-1 fw-bold fs-7"
          >Total de usuarios creados: {{ list.length }}</span
        >
        <!--<span class="text-muted mt-1 fw-bold fs-7">Consolidado de incidencias recientes</span>-->
      </h3>

      <div
        class="card-toolbar"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-trigger="hover"
      >
        <a
        type="button"
          href="#/crafted/basicflow/sign-up"
          class="btn btn-sm btn-light-primary"
          data-bs-toggle="modal"
        >
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
        <table
          class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
        >
          <!--begin::Table head-->
          <thead>
            <tr id="tabDash" class="fw-bolder text-muted fs-3">
              <th class="min-w-120px">Personal</th>
              <th class="min-w-120px">Correo</th>
              <th class="min-w-120px">Celular</th>
              <th class="min-w-120px text-center">Tipo de usuario</th>
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
                      <a
                        href="#"
                        class="text-dark fw-bolder text-hover-primary fs-6"
                        >{{ item.nombre }}, {{ item.apellido }}
                      </a>

                      <span
                        class="text-muted fw-bold text-muted d-block fs-7"
                        >{{ item.cargo }}</span
                      >
                    </div>
                  </div>
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.correo }}</a
                  >
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block fs-6"
                    >{{ item.celular }}</a
                  >
                </td>
                <td class="text-center align-middle">
                  <div
                    class="d-flex flex-column w-100 me-2 align-items-center text-nowrap"
                  >
                    <div class="d-flex flex-stack mb-2">
                      <span
                        class="me-2 fs-7 fw-bold"
                        v-bind:style="getStateStyle(item.tipo_usuario)"
                      >
                        {{ item.tipo_usuario }}
                      </span>
                    </div>
                  </div>
                </td>
                <td class="text-center">
                  <a
                  href="#/crafted/basicflow/update-user"
                    class="btnw9 btn btn-icon btn-bg-light btn-sm me-1"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                        class="imw9"
                        src="media/icons/duotune/art/art005.svg"
                      />
                    </span>
                  </a>

                  <a
                    href="#"
                    class="btnw9 btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                        class="imw9"
                        src="media/icons/duotune/general/gen027.svg"
                      />
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
    getStateStyle(tipo_usuario) {
      if (tipo_usuario === "Administrador") {
        return {
          color: "#FF0000",
          backgroundColor: "#FFDEDE",
          borderRadius: "15px",
          width: "105px",
          height: "25px",
          display: "inline-block",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "25px",
        };
      } else if (tipo_usuario === "Usuario") {
        return {
          color: "#00AB44",
          backgroundColor: "#BAFAD7",
          borderRadius: "15px",
          width: "90px",
          height: "25px",
          display: "inline-block",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "25px",
        };
      }
    },
  },
  setup() {
    const checked = ref(false);

    const list = [
      {
        nombre: "Raphael Murphy",
        apellido: "Ramos Carrasco",
        correo: "cencis02@igp.gob.pe",
        cargo: "OTIDG",
        tipo_usuario: "Administrador",
        celular: "+51-987654321",
      },
      {
        nombre: "Maria",
        apellido: "Garcia",
        correo: "cenvul02@igp.gob.pe",
        cargo: "CENVUL",
        tipo_usuario: "Usuario",
        celular: "+51-912345678",
      },
      {
        nombre: "Luis",
        apellido: "Rodriguez",
        correo: "otidg03@igp.gob.pe",
        cargo: "OTIDG",
        tipo_usuario: "Administrador",
        celular: "+51-976543210",
      },
      {
        nombre: "Ana",
        apellido: "Martinez",
        correo: "redes04@igp.gob.pe",
        cargo: "Redes",
        tipo_usuario: "Usuario",
        celular: "+51-951234567",
      },
      {
        nombre: "Mario",
        apellido: "Lopez",
        correo: "cendehua05@igp.gob.pe",
        cargo: "CENDEHUA",
        tipo_usuario: "Administrador",
        celular: "+51-990123456",
      },
      {
        nombre: "Silvia",
        apellido: "Fernandez",
        correo: "oad06@igp.gob.pe",
        cargo: "OAD",
        tipo_usuario: "Usuario",
        celular: "+51-945678901",
      },
      {
        nombre: "Pedro",
        apellido: "Gomez",
        correo: "cencis07@igp.gob.pe",
        cargo: "CENCIS",
        tipo_usuario: "Administrador",
        celular: "+51-922334455",
      },
      {
        nombre: "Julia",
        apellido: "Hernandez",
        correo: "cenvul08@igp.gob.pe",
        cargo: "CENVUL",
        tipo_usuario: "Usuario",
        celular: "+51-998877665",
      },
      {
        nombre: "Roberto",
        apellido: "Sanchez",
        correo: "otidg09@igp.gob.pe",
        cargo: "OTIDG",
        tipo_usuario: "Administrador",
        celular: "+51-967530914",
      },
      {
        nombre: "Marcela",
        apellido: "Alvarez",
        correo: "redes10@igp.gob.pe",
        cargo: "Redes",
        tipo_usuario: "Usuario",
        celular: "+51-913579246",
      },
      {
        nombre: "Felipe",
        apellido: "Garcia",
        correo: "cendehua11@igp.gob.pe",
        cargo: "CENDEHUA",
        tipo_usuario: "Administrador",
        celular: "+51-924680135",
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
  color: #0000af !important;
}
.imw9 {
  filter: invert(80%) sepia(39%) saturate(1000%) hue-rotate(186deg)
    brightness(101%) contrast(101%);
}

.btnw9:hover {
  background-color: #b5b5c3;
  color: #0000af;
}

.btnw9:active {
  background-color: #0000ff;
  color: #ffffff;
}
</style>