<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
      
    .row.jusfify-content-center.align-items-center.mb-4
      .col-lg-2
        img.img-a.img-t.d-none.d-lg-block(alt="" src="@/assets/curso/portada/img01.svg")
      .col-lg-10.col-12.col-md-12
        .my-3 En este componente formativo se realizará un recorrido por los diferentes recursos para la aplicación  y gestión del Internet de las cosas. En el siguiente video se introduce el tema.
      
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Hu4Hbi4fPYU?si=Zhq9F9SVVAdVWOcy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Leyenda del video
      
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
