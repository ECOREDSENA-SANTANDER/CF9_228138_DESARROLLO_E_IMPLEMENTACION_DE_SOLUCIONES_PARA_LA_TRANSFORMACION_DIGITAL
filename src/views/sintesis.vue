<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El primer objetivo de IoT es montar una interconectividad digitalizada y automatizada entre objetos, creando nexos que permitan una continua comunicación entre las cosas a través de sensores, #[em softwares], Inteligencia Artificial y sistemas computarizados. Para potenciar su aplicación, el IoT trabaja con otras tecnologías punteras como #[em C]++, #[em Java (SE, EE), PHP, Ruby. y Python.]

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/portada/Sintesis.png", alt="La síntesis representa un diagrama relacionado con la programación y servicios de aplicación IoT.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
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
