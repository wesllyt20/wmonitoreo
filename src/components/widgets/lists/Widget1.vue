<template>
  <!--begin::List Widget 1-->
  <div class="card" :class="widgetClasses">
    <div class="container">
      <FullCalendar :options="calendarOptions" />
    </div>
  </div>
  <!--end::List Widget 1-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default defineComponent({
  name: "kt-widget-1",
  components: {
    FullCalendar,
  },
  props: {
    widgetClasses: String,
  },
  data() {
    return {
      calendarOptions: {
        locales: [esLocale],
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        headerToolbar: {
          start: "today prev,next ",
          center: " title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        initialView: "dayGridMonth",
        views: {
          dayGridMonth: {
            titleFormat: {
              year: "numeric",
              month: "long",
              timeZone: "UTC",
              formatter: (date) => {
                return capitalizeFirstLetter(
                  new Intl.DateTimeFormat("default", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(date)
                );
              },
            },
          },
          timeGridWeek: {
            titleFormat: {
              year: "numeric",
              month: "long",
              timeZone: "UTC",
              day: "numeric",
              formatter: (date) => {
                return capitalizeFirstLetter(
                  new Intl.DateTimeFormat("default", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(date)
                );
              },
            },
          },
          timeGridDay: {
            titleFormat: {
              year: "numeric",
              month: "long",
              timeZone: "UTC",
              day: "numeric",
              formatter: (date) => {
                return capitalizeFirstLetter(
                  new Intl.DateTimeFormat("default", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(date)
                );
              },
            },
          },
        },
        dateClick: this.handleDateClick,
        events: [
          { title: "Test CNECIS", date: "2023-02-01" },
          { title: "Reunion OTIDG", date: "2023-02-22" },
          {
            title: "Simulacion CENSIS",
            start: "2023-02-23T08:00:00",
            end: "2023-02-25T12:00:00",
            description: "Descripción de mi evento",
            color: "red",
          },
          {
            title: "Capacitacion RRHH",
            start: "2023-02-22T09:00:00",
            url: "https://www.miwebsite.com/evento",
          },
          {
            title: "Mi evento 1",
            start: "2023-02-03T09:00:00",
            end: "2023-02-04T11:00:00",
            color: "green",
            description: "Descripción de mi evento",
          },
          {
            title: "Mi evento 2",
            start: "2023-02-03T12:00:00",
            end: "2023-02-04T14:00:00",
            color: "#ECDD28",
            description: "Descripción de mi evento",
          },
          {
            title: "Mi evento 3",
            start: "2023-02-03T15:00:00",
            end: "2023-02-03T17:00:00",
            color: "red",
            description: "Descripción de mi evento",
          },
        ],
      },
    };
  },
  methods: {
    handleDateClick: function (arg) {
      alert("date click! " + arg.dateStr);
    },
  },
});
</script>
<style >
.fc .fc-toolbar-title {
  color: #0000af !important;
  text-transform: capitalize !important;
}
.fc .fc-col-header-cell .fc-col-header-cell-cushion {
  text-transform: capitalize !important;
}
.fc .fc-prev-button,
.fc .fc-next-button {
  color: #3f4254 !important;
  background-color: #ffffff;
}
</style>