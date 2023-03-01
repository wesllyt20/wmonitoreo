<template>
  <!--begin::Wrapper-->
  <div class="bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
    <!--begin::Form-->
    <Form
      class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      novalidate="novalidate"
      @submit="onSubmitRegister"
      id="kt_login_signup_form"
      :validation-schema="registration"
    >
      <!--begin::Heading-->
      <div class="mb-10 text-center">
        <!--begin::Title-->
        <h1 id="titSigup" class="text-dark mb-3">Crear cuenta</h1>
        <!--end::Title-->
      </div>
      <!--end::Heading-->

      <!--begin::SEPARADOR EJEMPLO
      <div class="d-flex align-items-center mb-10">
        <div class="border-bottom border-gray-300 mw-50 w-100"></div>
        <span class="fw-bold text-gray-400 fs-7 mx-2">OR</span>
        <div class="border-bottom border-gray-300 mw-50 w-100"></div>
      </div>
      end::Separator-->

      <!--begin::Input group-->
      <div class="row fv-row mb-7">
        <!--begin::Col-->
        <div class="col-xl-4">
          <label class="form-label fw-bolder text-dark fs-6">Nombres</label>
          <Field
            class="form-control form-control-lg form-control-solid"
            type="text"
            placeholder=""
            name="name"
            autocomplete="off"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="name" />
            </div>
          </div>
        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-xl-4">
          <label class="form-label fw-bolder text-dark fs-6">Apellidos</label>
          <Field
            class="form-control form-control-lg form-control-solid"
            type="text"
            placeholder=""
            name="surname"
            autocomplete="off"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="surname" />
            </div>
          </div>
        </div>
        <!--end::Col-->
        <div class="col-xl-4">
          <label class="form-label fw-bolder text-dark fs-6">Celular</label>
          <Field
            class="form-control form-control-lg form-control-solid"
            type="tel"
            placeholder=""
            name="cell"
            autocomplete="off"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="cell" />
            </div>
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <div class="row fv-row mb-7">
        <!--begin::Col-->
        <div class="col-xl-4">
          <label class="form-label fw-bolder text-dark fs-6">Correo</label>
          <Field
            class="form-control form-control-lg form-control-solid"
            type="email"
            placeholder=""
            name="email"
            autocomplete="off"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="email" />
            </div>
          </div>
        </div>
        <!--end::Col-->
        <div class="col-xl-4">
          <label for="cargo" class="form-label fw-bolder text-dark fs-6"
            >Unidad organica</label
          >
          <Field
            class="form-select"
            v-model="cargo"
            id="cargo"
            name="cargo"
            as="select"
          >
            <option value="" disabled selected>Seleccionar un cargo</option>
            <option value="otidg">OTIDG</option>
            <option value="redes">REDES</option>
            <option value="cencis">CENCIS</option>
            <option value="cendehua">CENDEHUA</option>
            <option value="oad">O. Administración</option>
          </Field>
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="cargo" />
            </div>
          </div>
        </div>
        <!--begin::Col-->
        <div class="col-xl-4">
          <label class="form-label fw-bolder text-dark fs-6"
            >Tipo de usuario</label
          >
          <Field
            class="form-select"
            v-model="tiUser"
            id="tiUser"
            name="tiUser"
            as="select"
          >
            <option value="" disabled selected>Seleccionar un usuario</option>
            <option value="admOti">Administrador OTIDG</option>
            <option value="admRed">Administrador REDES</option>
            <option value="usCen">Usuario CENCIS</option>
            <option value="user">Usuario</option>
          </Field>
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="tiUser" />
            </div>
          </div>
        </div>
      </div>
      <!--end::Col-->
      <div class="row fv-row mb-7">
        <!--begin::Input group-->
        <div class="mb-10 fv-row col-xl-6" data-kt-password-meter="true">
          <!--begin::Wrapper-->
          <div class="mb-1">
            <!--begin::Label-->
            <label class="form-label fw-bolder text-dark fs-6">
              Contraseña
            </label>
            <!--end::Label-->

            <!--begin::Input wrapper-->
            <div class="position-relative mb-3">
              <Field
                class="form-control form-control-lg form-control-solid"
                type="password"
                placeholder=""
                name="password"
                autocomplete="off"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="password" />
                </div>
              </div>
            </div>
            <!--end::Input wrapper-->
          </div>
          <!--end::Wrapper-->
        </div>
        <!--end::Input group--->

        <!--begin::Input group-->
        <div class="fv-row mb-5 col-xl-6">
          <label class="form-label fw-bolder text-dark fs-6"
            >Confirmar Contraseña</label
          >
          <Field
            class="form-control form-control-lg form-control-solid"
            type="password"
            placeholder=""
            name="cpassword"
            autocomplete="off"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="cpassword" />
            </div>
          </div>
        </div>
        <!--end::Input group-->
      </div>
      <!--begin::Actions-->
      <div class="text-center">
        <button
          id="kt_sign_up_submit"
          ref="submitButton"
          type="submit"
          class="btn btn-lg btn-primary mt-n13"
        >
          <span class="indicator-label"> Crear cuenta</span>
          <span class="indicator-progress">
            Espere por favor ...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </div>
      <!--end::Actions-->
    </Form>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import * as Yup from "yup";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Actions } from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default defineComponent({
  data() {
    return {
      cargo: '',
      tiUser:'',
    };
  },

  name: "sign-up",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const submitButton = ref<HTMLElement | null>(null);
      const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?ñÑ¬]).{8,}$/;
    const registration = Yup.object().shape({
      name: Yup.string().required("Es necesario llenar esta casilla.").label("First Name"),
      surname: Yup.string().required("Es necesario llenar esta casilla.").label("Second Name"),
      email: Yup.string()
        .email("Ingrese un correo valido.")
        .required("Es necesario llenar esta casilla.")
        .label("Email"),
      cargo: Yup.string().required("Seleccione un cargo.").label("Cargo"),
      tiUser: Yup.string().required("Seleccione un tipo de usuario.").label("Usuario"),
      cell: Yup.string()
        .min(9, "La contraseña debe tener al menos 9 caracteres.")
        .max(9)
        .required("Es necesario llenar esta casilla.")
        .label("Celular"),
      password: Yup.string().min(8).required("Es necesario llenar esta casilla.").label("Password")
      .matches(strongPasswordRegex, "La contraseña debe tener al menos 8 digitos, una mayúscula, una minúscula, un número y un simbolo."),
      cpassword: Yup.string()
        .min(4)
        .required("Es necesario llenar esta casilla.")
        .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden.")
        .label("Password Confirmation"),
    });

    const onSubmitRegister = (values) => {
      // Clear existing errors
      store.dispatch(Actions.LOGOUT);

      // Activate indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");

      // Dummy delay
      setTimeout(() => {
        // Send login request
        store
          .dispatch(Actions.REGISTER, values)
          .then(() => {
            Swal.fire({
              text: "La cuenta ha sido creada con exito.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Continuar",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              // Go to page after successfully login
             router.push({ name: "list-users" }); //<- Esto es para ingresar a travez de router ingresar al dashboard
            });
          })
          .catch(() => {
            Swal.fire({
              text: store.getters.getErrors[0],
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Try again!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-danger",
              },
            });
          });

        submitButton.value?.removeAttribute("data-kt-indicator");
      }, 2000);
    };

    return {
      registration,
      onSubmitRegister,
      submitButton,
    };
  },
});
</script>
<style>
#titSigup {
  color: #0000af !important;
  font-weight: bold;
}
</style>
