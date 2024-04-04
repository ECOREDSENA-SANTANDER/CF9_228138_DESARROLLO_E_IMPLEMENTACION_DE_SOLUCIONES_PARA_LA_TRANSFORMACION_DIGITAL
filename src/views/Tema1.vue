<template lang="pug">
.curso-main-container.pb-3.tema8
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span 1
        h1 Lenguaje de programación orientado a objetos

      .cajon-b.lenguaje.color-secundario.mb-4.py-0
        .row.align-items-center.justify-content-center
          .col-auto.my-3.mx-2
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/img02.png', alt='')
          .col-10.my-3
            p(data-aos="fade-down") La programación orientada a objetos se conoce como un paradigma o un modelo de programación, no es un lenguaje específico, o una tecnología sino una forma específica de programar, más cercana a cómo expresaremos las cosas en la vida real que otros lenguajes de programación.  

          p.mb-3(data-aos="fade-down") Lenguajes modernos como #[em Java, C# y Python,] utilizan paradigmas para definir los programas, siendo las más populares dentro de la POO esta aprueba que el código sea reutilizable, organizado y fácil de conservar. Alcanza el principio de desarrollo de #[em software] manejado por varios programadores(Roman, 2013). 
          p.mb-0 El primer y más importante concepto que debemos tener en cuenta de la #[em POO] es la distinción entre clase y objeto.  


      .row.fondo-gray.align-items-center.py-4.py-md-3.mb-5
        .col-lg-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4(data-aos="fade-down")
        
          .mb-4.d-flex
            .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
              h3.col.px-4.mb-0.text-white(data-aos="fade-right") Una clase
              img.clase1.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/titulo.svg' data-aos="fade-left")
      
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-8.col-9.mb-9
              p.mb-4 Es una lista genéricamente de cómo van a ser los objetos de un determinado tipo.  
              p.mb-5 Por ejemplo, una clase para personificar a animales puede llamarse ‘animal’ y poseer una serie de atributos, como ‘nombre’ o ‘clase de animal’ (que regularmente son propiedades) y una sucesión con las actuaciones que estos pueden tener, como comer o correr, y que a su vez se efectúan métodos de la clase siendo (funciones).
            .col-lg-4.col-3
              img.mb-lg-0.mb-3(alt="" src="@/assets/curso/temas/tema1/img03.svg")
              
      
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Un objeto
          img.objeto1.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/titulo.svg' data-aos="fade-left")

      p.mb-4 Se puede ver en el gŕafico 1. Una entidad “perro” ,”gato”, “ardilla” tiene una clase asociada “animal”. Está clase animal posee unas características propias que lo distinguen unos de otros, por ejemplo, edad , nombre, raza , entre otros. A su vez, el animal tiene acciones como “comer”, “dormir” y “correr” .  
      
      .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
            h5 Figura 1 
            span Ejemplo POO  

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.col-10.mb-lg-4.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/temas/tema1/img01.jpg")
        .col-lg-5.mb-lg-4(data-aos="fade-left")
          .bg-532.p-3
            p.mb-4 A partir de está clase se pueden crear las instancias, es decir, cuando la clase cuenta con memoria en el sistema operativo que va a operar sobre el software.
            p.mb-0 De está forma, se pueden crear las instancias para un Perro de nombre=”Yoni”  con una edad de “5” años o bien la representación de un gato de nombre=”Milu” y de edad=”1” año.  Los dos están a partir de la clase animal, pero son dos instancias diferentes. Por lo que al llamar a sus métodos logra poseer resultados diferentes. Los dos comparten la lógica de sus requerimientos funcionales, pero cada uno de forma independiente tiene su estado.
        p.mb-0 En estos términos, la programación orientada a objetos ofrece una forma de abstraer entidades del mundo real, a partir de cuatro(4) principios a nombrar:
      
      .row
        .col-lg-7.col-md-12.col-12
            SlyderA(tipo="b").slider-aa-custom.mb-6(data-aos="zoom-in-left")
              .row.justify-content-center.align-items-center.my-lg-8
                .col-md-7
                p.mb-3 <h3> La encapsulación</h3>
                p.mb-3  Un objeto oculta sus datos y solo muestra (interfaz) u ofrece un servicio al universo de las clases. De está forma, “el gato Milu corre”, una clase que representa una veterinaria podría operar sobre ella, sabiendo que “Milu” corre pero desconociendo cuál es su proceso funcional.
              .row.justify-content-center.align-items-center.my-lg-8
                .col-md-7
                p.mb-3 <h3> La abstracción</h3>
                p.mb-5  Es la formalización del objeto en la clase. ¿Qué es un animal?, ¿cómo identificar un animal?, ¿Qué acciones hace un animal?. Con estas respuestas , creó la clase, atributos y sus correspondientes atributos.  
              .row.justify-content-center.align-items-center.my-lg-8
                .col-md-7
                p.mb-3 <h3> La herencia</h3>
                p.mb-5 Clases que dependen del concepto de “es hijo de”, “es relacionado con”, “compartes datos con”. Hace referencia al concepto semántico de “herencia”, es decir, entidades que tienen los atributos de sus padres. A partir del ejemplo, se podría crear una clase “mamífero” a partir de la clase “animal”, ya que todos los mamíferos son animales y comparten los mismos atributos.
              .row.justify-content-center.align-items-center.my-lg-8
                .col-md-7
                p.mb-3 <h3> El polimorfismo</h3>
                p.mb-5 Capacidad que tienen las clases y/u operaciones para hacer la misma función en diferentes contextos o dominios. En el caso particular, no es lo mismo “comer para un perro” que “comer para un gato”, los dos objetos tendrán el mismo método pero diferente acción sobre.
        .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img.img-a.img-t(src="@/assets/curso/temas/tema1/img08.png").mb-5


      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em C++]
          img.cemas.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/titulo.svg'  data-aos="fade-left")

      p.mb-2 Es un lenguaje de programación orientado a objetos. Los cuatro principios básicos de la programación orientada a objetos son: Abstracción: modelar los atributos e interacciones pertinentes de las entidades como clases para definir una representación abstracta de un sistema.

        .row.fondo-pink.align-items-center.py-4.py-md-0.mb-5
          .col-lg-12.col-12.px-lg-5.px-4
            .row.justify-content-center.mb-0(data-aos="fade-down")
      
              .row.align-items-center.justify-content-center(data-aos="zoom-in-left")
                .d-flex.align-items-center.justify-content-center
                .col-lg-5.my-5
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/c++.png', alt='')
        
                .col-lg-7
                  .primero.bloque-texto-b.p-4
                    .bloque-texto-b__texto
                      i.fas.fa-quote-left
                      p En lenguaje como C++ donde los mismos están diseñados dentro de la Programación orientada a Objetos, si dentro del programa a realizar todos los miembros de una clase son públicos y estáticos, en aquel momento equivalen a variables y funciones globales con el prefijo «NombreDeClase:»
                      p.mb-0
                      h5.d-flex.justify-content-end (Gervais, 2016).
                        i.fas.fa-quote-right
                  .cajoni-b.lenguaje.color-secundario.mb-4.my-5
                    .row.align-items-center.justify-content-center.my-5
                      .two.bloque-texto-b.color-primario.p-4.mb-4
                        .bloque-texto-b__texto
                          i.fas.fa-quote-left
                          p Definición de clases. Los datos de una clase se pueden guardar en una estructura. De hecho, en C++ un struct no es otra cosa que una clase con todos los miembros públicos. Como C no permite métodos, usamos funciones globales. El equivalente de C++. 
                          p.mb-5
                          h5.d-flex.justify-content-end (Sierra, 2015) 
                            i.fas.fa-quote-right
                    .row.align-items-center.justify-content-center
                      .col-lg-5.col-md-10.col-12
                        img.my-4(src="@/assets/curso/temas/tema1/cuadroo.svg")
      
      
      .mb-5.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em JAVA (SE,EE)]
          img.javase.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/titulo.svg' data-aos="fade-left")

      p.mb-5 Oracle Java es la plataforma de lenguaje de programación y desarrollo, que reduce costos, acorta los plazos de desarrollo, impulsa la innovación y mejora los servicios de las aplicaciones, conozcamos más:
      .row
        .col-md-7.mb-4.mb-md-0
          AcordionA.acordion(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
            .row(titulo="Plataforma informática Java")
              .col-lg-6.ps-5
                ul.lista-ul--color.lista-acento-botones.mb-0
                  li.mb-0.d-flex 
              p.mb-0 Java es un lenguaje de programación que opera por medio de una plataforma informática Java, hay cuatro ediciones principales de Java: Java Standard Edition (Java SE) Java Enterprise Edition (Java EE) Java Micro Edition (Java ME) 
            .row(titulo="Evoluciones")
              .col-6.ps-5
                ul.lista-ul--color.lista-acento-botones.mb-0
                  li.mb-0.d-flex 
              p.mb-4 Ha tenido constantes evoluciones desde sus inicios, Java nace en 1991 con el nombre “OAK”, posteriormente cambiado por Green por problemas legales, y finalmente con la denominación actual JAVA.
              p.mb-0 El objetivo de Java era crear un lenguaje de programación parecido a C++ en estructura y sintaxis, fuertemente orientado a objetos, pero con una máquina virtual propia.
            .row(titulo="Aplicaciones Java modernas")
              .col-6.ps-5
                ul.lista-ul--color.lista-acento-botones.mb-0
                  li.mb-0.d-flex 
              p.mb-0 Concientizan el tiempo de ejecución y la aplicación de Java, para su correcto funcionamiento se debe instalar Java para escritorio. Encontramos muchas aplicaciones del lenguaje Java en casi todos los campos, ya sea una aplicación o desarrollo web, big data, Inteligencia Artificial, desarrollo móvil, etc
            .row(titulo="Sitio web Java.com")
              .col-6.ps-5
                ul.lista-ul--color.lista-acento-botones.mb-0
                  li.mb-0.d-flex 
              p.mb-4 Oracle Java está disponible en el Acuerdo de licencia de Oracle Technology Network para Oracle Java SE. Esta licencia permite utilizar Java con fines personales y de desarrollo de forma gratuita.
              p.mb-0 Java 18 (Oracle JDK 18) ofrece miles de mejoras en cuanto a rendimiento, estabilidad y seguridad, incluyendo nueve propuestas de mejora de la plataforma, impulsando así aún más la productividad de los desarrolladores.
        .col-lg-5.col-md-10.col-12
          img(src="@/assets/curso/temas/tema1/img10.png")
      .row 
        .col-lg-5.col-md-10.col-12
          img(src="@/assets/curso/temas/tema1/img11.png")
      
        .col-lg-7.col-md-10.col-12
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")    
            .row(titulo="Java EE")
              .col-6.ps-5
                ul.lista-ul--color.lista-acento-botones.mb-0
                  li.mb-0.d-flex 
              p.mb-0 Es escalable para los proyectos, es decir, permite acoplar más tecnologías según vayan dándose las necesidades del software. Y Java SE es Edición Estándar.                              
            .row(titulo="Requisitos para programar Java")
              .col-6.ps-5
                ul.lista-ul--color.lista-acento-botones.mb-0
                  li.mb-0.d-flex 
              p.mb-0 Debe tener una sólida comprensión de la programación orientada a objetos. Estar familiarizado con varios diseños y patrones arquitectónicos. Habilidad para escribir bibliotecas en lenguaje Java reutilizables. Conocimiento de los patrones de concurrencia en Java.
            .row(titulo="Aplicación de uso personal")
              .col-6.ps-5
                ul.lista-ul--color.lista-acento-botones.mb-0
                  li.mb-0.d-flex 
              p.mb-4 Si quiere descargar la aplicación de uso personal es gratuita donde se contará con todos los kits de desarrollo y herramientas útiles y compatibles. Para instalar java puede consultar el siguiente tutorial en línea:&nbsp;
                p.mb-0
                a.en.mb-3(href="https://www.java.com/es/download/help/windows_manual_download.html" target="_blank")
                  span.mb-4.orr https://www.java.com/es/download/help/windows_manual_download.html
                p.mb-0 En la plataforma Link: 
                a.en.mb-3(href="https://www.jdoodle.com/online-java-compiler/" target="_blank")
                  span.mb-4.orr  https://www.jdoodle.com/online-java-compiler/
      
      .mb-5
      .row.fondo6.align-items-center.py-4.py-md-3
        .col-lg-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-3(data-aos="fade-down")

          .mb-4.d-flex
            .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
              h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em PHP]
              img.peache.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/titulo.svg' data-aos="fade-left")
      
          p.mb-4 Es un lenguaje de código abierto muy reconocido sobre todo para el desarrollo web ya que el mismo puede ser fácilmente incrustado en HTML, una de las grandes ventajas es su simplicidad para aquellos desarrolladores principiantes, por medio de este lenguaje se generan páginas web dinámicas que frecuentemente su contenido cambia, debemos tener en cuenta que las páginas webs estáticas son las que sus contenidos permanecen siempre igual.
          p.mb-0 El esquema de php funciona mediante una petición al servidor el mismo recibe la información necesaria realizando las consultas a bases de datos, otros servidores u otras páginas web, el servidor responde si es una página web normal estática, pero donde el diseño y creación del mismo ha sido dinámico.
      
          .row.phpphp.align-items-left.py-4.py-md-3
            .col-lg-10.col-12.px-lg-12.px-5.mx-5.p-4
          
              .row.justify-content-align-items-left.mb-5
                  p.mx-5.px-5 En el editor link:
                  .col-lg-3.col-md-10.col-12.mx-5
                    a.anexo.mb-4.mb-lg-0(href="https://paiza.io/es/projects/new " target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p #[b Enlace web.] paiza.io
              .row.justify-content-center.mb-3(data-aos="zoom-in-left")
                .col-lg-7.col-md-10.col-12
                  .dondo.p-3.mb-0(data-aos="fade-right")
                    .row.justify-content-left.align-items-left.d-flex
                      .col-lg-3.col-8
                        .d-flex.justify-content-left
                          img.my-3(src="@/assets/curso/temas/tema1/programaaa.svg")
                      .col-lg-2.col-12
                        span.text-white Se&nbsp;puede&nbsp;realizar&nbsp;un&nbsp;pequeño&nbsp;saludo:
                        span.text-white <?php&nbsp;
                        p.mb-0
                        span.text-white //Your&nbsp;code&nbsp;here!
                        p.mb-0 
                        span.text-white print&nbsp;“hello”;
                        p.mb-0
                        span.text-white ?> 
                    
                
      
      .mb-5
      .mb-5.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em Ruby]
          img.rubyyy.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/titulo.svg' data-aos="fade-left")
      
      
      p.mb-0 #[em Ruby] es un lenguaje de programación interpretado, abstraído y orientado a objetos su licencia es distribuida bajo #[em software] libre, todos los tipos de datos son con objeto, clases, métodos, es descrito como un lenguaje multiparadigma, permitiendo programación procedimental.  

      .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-7.my-3
          .rubby.bloque-texto-b.mb-3
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-3 Se utiliza en su mayoría en el desarrollo de aplicaciones web, pero también se utiliza para otros tipos de desarrollo en streaming. Ruby maneja estrechamente el paradigma de POO, así que estas variables son privadas y no logran verse desde fuera de la clase, toda comunicación que se realiza entre objetos se hace con los métodos. Se caracteriza por un lenguaje dinámico, ya que los programas en Ruby no se compilan, todo el código de clases, módulos y métodos se realiza por medio de un intérprete.
              h5.d-flex.justify-content-end (Cupul, 2021).
                i.fas.fa-quote-right
          .row.justify-content-center.mb-3(data-aos="zoom-in-left")
            .col-lg-10.col-md-10.col-12
              .fondoaa.p-3.mb-0(data-aos="fade-right")
                .row.justify-content-center.align-items-center.d-flex
                  .col-lg-3.col-8
                    .d-flex.justify-content-center
                      img(src="@/assets/curso/temas/tema1/progra.svg")
                  .col-lg-8.col-12
                    p.text-white Editor en línea 
                    a.anexo(href="https://replit.com/languages/ruby" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p #[b Enlace web]. #[em Code, create, and learn together with Ruby]
                    p.text-white.my-1 #[b Programa: puts ‘Hello, world!’]
        .col-lg-5.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/ruby.png', alt='')
    
      
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em Python]
          img.pytonn.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/titulo.svg' data-aos="fade-left")

      .row
        .col-lg-12.mb-5.mb-lg-0
          .bloque-texto-b.python.color-secundario.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              p.mb-2 #[em Python] es un lenguaje de programación considerablemente utilizado en la mayor parte de las aplicaciones #[em web,] al realizar programas empresariales, la ciencia de datos y el #[em machine learning (ML).] Los programadores utilizan #[em Python] porque es eficientemente muy fácil de aprender, además de que se puede ejecutar en diferentes plataformas. El #[em software Python] es gratuito, se integra bien a todos las características de sistemas y aumenta la velocidad del desarrollo.
              h5.d-flex.justify-content-end (S & G, 2018)
                i.fas.fa-quote-right
      p.mb-5 Las empresas requieren programadores expertos en #[em Python] esto debido que es más fácil con tecnologías emergentes como:
      figure.mb-4(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/iSWz9b7HCEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
