<template>
  <!--begin::Mixed Widget 1-->
  <div id="bgwidg2" class="card card-xxl-stretch">
    <!--begin::Header-->
    <div id="bgwin2card1" class="card-header border-0 py-5">
      <h3 class="card-title fw-bolder text-white">Sales Statistics</h3>
      <p>aeaaa</p>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body p-0">
      <div class="card-image">
        <img
        id="widget2"
        src="media/bg/cerros.svg"
        class="img-rounded"
        alt="Cinque Terre"
      />


      </div>
      <!--begin::Chart-->
     
      <!--end::Chart-->
      <!--begin::Stats-->
      <div class="card-p mt-n20 position-relative">
        <!--begin::Row-->
        <div class="row m-0">
          <div class="col bg-light-warning px-6 py-8 rounded-2 me-7 mb-7">
            <span class="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
              <inline-svg src="media/icons/duotune/general/gen032.svg" />
            </span>
            <a href="#" class="text-warning fw-bold fs-6"> Weekly Sales </a>
          </div>
          <div class="col bg-light-primary px-6 py-8 rounded-2 mb-7">
            <span class="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
              <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
            </span>
            <a href="#" class="text-primary fw-bold fs-6"> New Users </a>
          </div>
        </div>
        <!--end::Row-->
        <!--begin::Row-->
        <div class="row m-0">
          <div class="col bg-light-danger px-6 py-8 rounded-2 me-7">
            <span class="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
              <inline-svg src="media/icons/duotune/abstract/abs027.svg" />
            </span>
            <a href="#" class="text-danger fw-bold fs-6 mt-2"> Item Orders </a>
          </div>
          <div class="col bg-light-success px-6 py-8 rounded-2">
            <span class="svg-icon svg-icon-3x svg-icon-success d-block my-2">
              <inline-svg src="media/icons/duotune/communication/com010.svg" />
            </span>
            <a href="#" class="text-success fw-bold fs-6 mt-2"> Bug Reports </a>
          </div>
        </div>
        <!--end::Row-->
      </div>
      <!--end::Stats-->
      <!--end::Body-->
    </div>
    <!--end::Mixed Widget 1-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import { MenuComponent } from "@/assets/ts/components/MenuComponent";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "widget-1",
  components: {},
  props: {
    widgetClasses: String,
    widgetColor: String,
    strokeColor: String,
  },
  setup(props) {
    const labelColor = getCSSVariableValue("--bs-gray-500");
    const borderColor = getCSSVariableValue("--bs-gray-200");

    const color = getCSSVariableValue("--bs-" + props.widgetColor);

    const strokeColor = ref(props.strokeColor);

    const chartOptions = {
      chart: {
        fontFamily: "inherit",
        type: "area",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: strokeColor.value,
          opacity: 0.5,
        },
      },
      plotOptions: {},
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "solid",
        opacity: 0,
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: [strokeColor.value],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
        crosshairs: {
          show: false,
          position: "front",
          stroke: {
            color: borderColor,
            width: 1,
            dashArray: 3,
          },
        },
      },
      yaxis: {
        min: 0,
        max: 80,
        labels: {
          show: false,
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands";
          },
        },
        marker: {
          show: false,
        },
      },
      markers: {
        colors: [color],
        strokeColor: [strokeColor.value],
        strokeWidth: 3,
      },
    };

    const series = [
      {
        name: "Net Profit",
        data: [30, 70, 30, 70, 30, 70, 40],
      },
    ];

    onMounted(() => {
      MenuComponent.reinitialization();
    });

    return {
      series,
      chartOptions,
    };
  },
});


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
#bgwidg2 {
  background-color: #e2e4ec;
}
#bgwin2card1 {
  background-color: #5e6278;
}
.card-image {
    height:35%;
    width: 100%;
}

.card-image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>

