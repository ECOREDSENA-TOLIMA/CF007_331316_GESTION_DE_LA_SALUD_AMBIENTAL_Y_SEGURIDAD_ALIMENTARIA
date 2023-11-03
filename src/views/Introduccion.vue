<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-right") Este componente formativo se relaciona con la implementación de los procesos de seguridad sanitaria y ambiental. Diferentes decretos, resoluciones y leyes se han establecido en el territorio colombiano, con el fin de dar cuenta de los procesos de calidad que deben estar presentes en la prestación del servicio de salud. Así como la disposición de los medios adecuados para que los ciudadanos puedan acceder a los resultados, seguimientos y evaluaciones que se hacen de estos procesos, y de los cuales se debe tener conocimiento.

    p(data-aos="fade-right").mb-5 Se invita a ver el siguiente vídeo en donde se encontrará una información general de este interesante tema,      se podrá revisar tanto los conceptos como las normativas que regulan los procesos de seguridad sanitaria y ambiental:




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
