<template>
  <div id="bgwidg2" class="card card-xxl-stretch">
    <div class="card-body p-0">
      <div class="card-image">
        <img id="widget2img" src="media/bg/cerros.svg" class="img-rounded" />
        <div class="text-overlay">
          <h2>{{ translate("craft") }}</h2>
          <p>{{ translate("fileCons") }}</p>
        </div>
      </div>

      <div id="elmwdg2" class="card-p position-relative">
        <div class="row m-0">
          <div
            class="subwidget col px-6 py-8 me-6 mb-7"
            style="color: #0000af"
          >
            <span class="numberwidget2 d-block my-2"> 200 </span>
            <a href="#" class="infowidget2 fw-bold" style="color: #0000af">
              {{ translate("report") }}
            </a>
          </div>
          <div class="subwidget col px-6 py-8 me-6 mb-7">
            <span class="numberwidget2 d-block my-2"> 50 </span>
            <a href="#" class="infowidget2 fw-bold">
              {{ translate("incident") }}
            </a>
          </div>
        </div>
        <div class="row m-0">
          <div class="subwidget col px-6 py-8 me-6 mb-7">
            <span class="numberwidget2 d-block my-2"> 25 </span>
            <a href="#" class="infowidget2 fw-bold">
              {{ translate("tracing") }}
            </a>
          </div>
          <div class="subwidget col px-6 py-8 me-6 mb-7">
            <span class="numberwidget2 d-block my-2"> 112 </span>
            <a href="#" class="infowidget2 fw-bold">
              {{ translate("Notify") }}
            </a>
          </div>
        </div>
        <span class="d-block my-2 text-center mt-5"> {{ translate("updateon") }}10/02/2023 10:52:01 </span>
      </div>
    </div>
    <!--end::Mixed Widget 1-->
  </div>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
export default {
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
      translate,
    };
  },
};

/* mañana 21 


<template>
  <div class="card-image">
    <img id="widget2" src="media/bg/cerros.svg" class="img-rounded" alt="Cinque Terre" />
    <div class="text-overlay">
      <h2>Gestión</h2>
      <p>Consolidado de archivos</p>
    </div>
  </div>
</template>

<style>
  .card-image {
    position: relative;
    display: inline-block;
  }

  .text-overlay {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    color: #ffffff;
  }

  .text-overlay h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .text-overlay p {
    font-size: 1.2rem;
  }
</style>


*/
</script>
<style>
#elmwdg2 {
  margin-top: -7rem !important;
}
#bgwidg2 {
  background-color: #e2e4ec;
}

.card-image {
  position: relative;
}
#widget2img {
  width: 100%;
}

.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  color: #ffffff;
}

.text-overlay h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

.text-overlay p {
  font-size: 1.2rem;
}
.subwidget {
  background-color: #ffffff;
  text-align: center;
  margin-left: 8px !important;
  margin-right: 5px !important;
  margin-bottom: 10px !important;
  border-radius: 15px;
}
.numberwidget2 {
  font-size: 46px;
  line-height: 1;
  font-weight: bold;
}
.infowidget2 {
  font-size: 16px;
  color: black;
}
</style>

