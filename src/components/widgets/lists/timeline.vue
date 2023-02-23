<template>
  <div class="timeline-label mt-7">
    <div class="timeline-item" v-for="(event, index) in events" :key="index">
      <div class="timeline-badge text-primary">
        <i class="fa fa-genderless text-primary fs-1"></i>
      </div>
      <div class="timeline-item-content">
        <h6 class="texw5" v-html="event.title"></h6>
        <h8 class="texw5" v-html="event.subtitle"></h8>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      events: [
        {
          title: "<strong>Lunes 19 de Agosto</strong>",
          subtitle: "Reporte del Censis operativo",
        },
        {
          title: "<strong>Martes 10 de Agosto</strong>",
          subtitle: "<strong style=\"color: red;\">[URGENTE]</strong> Simulacro de repositorio caido"
        },
        {
          title: "<strong>Miércoles 8 de Agosto</strong>",
          subtitle: "Ataques a servidores de web CENVUL",
        },
        {
          title: "<strong>Jueves 5 de Agosto</strong>",
          subtitle: "Prueba de servidores CENCIS",
        }
      ],
    };
  },
  methods: {
    addEvent(event) {
      this.events.push(event);
    },
  },
};
</script>
  <style>
.texw5 {
  margin-left: 10px !important;
}
</style>