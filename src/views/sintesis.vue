<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 La implementación de los procesos de seguridad sanitaria y ambiental, regulan en normatividad emanada del Ministerio de Salud y Protección Social, y se ayuda de una serie de herramientas como el Análisis de la Situación de Salud –ASIS-, el cual a la vez se convierte en insumo para llevar a cabo el plan de intervenciones, y las acciones de sensibilización, las cuales incluyen monitoreo y evaluación de los diferentes procesos, o problemáticas que involucran el sector de la salud. En el siguiente gráfico se podrá reconocer una ruta resumida de los aspectos que involucran la temática tratada:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La implementación de los procesos de seguridad sanitaria y ambiental, surge del proceso ASIS, que caracteriza, mide y explica, y desde donde puede llevarse a cabo el monitoreo y la evaluación del proceso.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
