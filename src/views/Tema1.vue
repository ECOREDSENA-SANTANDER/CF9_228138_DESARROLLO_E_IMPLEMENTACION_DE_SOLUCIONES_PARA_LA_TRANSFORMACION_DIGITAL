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
          .col-auto
            img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/subir.svg', alt='')
          .col-lg-10.col-md-12.col-12.my-3
            p(data-aos="fade-down") La programación orientada a objetos se conoce como un paradigma o un modelo de programación, en vez de tratarse de un lenguaje específico o una tecnología, se trata de una forma específica de programar, similar a la manera en la que nos expresamos.

          p.mb-3(data-aos="fade-down") Lenguajes modernos como #[em Java, C++ y Python,] utilizan paradigmas para definir los programas, siendo las más populares dentro de la #[em POO], esta aprueba que el código sea reutilizable, organizado y fácil de conservar. Alcanza el principio de desarrollo de #[em software] manejado por varios programadores (Roman, 2013). 
          p.mb-0 El primer y más importante concepto que debemos tener en cuenta de la #[em POO] es la distinción entre clase y objeto.  


      .row.fondo-gray.align-items-center.py-md-3.mb-4
        .col-lg-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-4(data-aos="fade-down")
        
          .mb-4.d-flex
            .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
              h3.col.px-4.mb-0.text-white(data-aos="fade-right") Una clase
              img.clase1.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/titulo.svg' data-aos="fade-left")
      
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-8.col-12.mb-9
              p.mb-4 Es una lista que define genéricamente las características de los objetos de un determinado tipo.
              p.mb-5 Por ejemplo, una clase para personificar a animales puede llamarse ‘animal’ y poseer una serie de atributos, como ‘nombre’ o ‘clase de animal’ (que regularmente son propiedades) y una sucesión con las actuaciones que estos pueden tener, como comer o correr, y que a su vez se efectúan métodos de la clase siendo (funciones).
            .col-lg-4.col-3
              img.mb-lg-0.mb-3.d-none.d-lg-flex(alt="" src="@/assets/curso/temas/tema1/img03.svg")
              
      
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") Un objeto
          img.objeto1.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/titulo.svg' data-aos="fade-left")

      p.mb-4 Es un tipo de entidad que cuenta con propiedades (datos) y comportamientos (métodos).
      p.mb-4 En la siguiente figura se presenta un gráfico donde las entidades: Perro ,Gato, Ardilla están asociadas a una clase: “Animal”. Esta clase posee unas características propias que diferencian a las entidades entre sí: edad , nombre, raza , entre otros. A su vez, la clase “Animal” tiene acciones como: Comer, Dormir, y Correr. 
      
      .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
            h5 Figura 1 
            span Ejemplo POO  

      .row.justify-content-center.align-items-center.mb-0
        .col-lg-7.col-12.mb-lg-4.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/temas/tema1/img01.jpg" alt='En la siguiente imagen, se expone una entidad para este caso, un perro y al frente una gato, debajo de cada uno se detallan características como: Tipo de animal, Clases, Atributos como el nombre asignado por humano y la  edad. Finalmente se describen los métodos que en este caso son comer y correr respectivamente. ')
        .col-lg-5.mb-lg-4.mb-4
          .bg-532.p-3
            p.mb-4 A partir de está clase se pueden crear las instancias, es decir, la clase cuenta con memoria en el sistema operativo que va a operar sobre el #[em software].
            p.mb-0 De está forma, se pueden crear las instancias para un Perro de nombre= ”Yoni”  con una edad de “5” años o bien la representación de un gato de nombre= ”Milu” y de edad= ”1” año.  Los dos están a partir de la clase animal, pero son dos instancias diferentes. Por lo que al llamar a sus métodos logra poseer resultados diferentes. Los dos comparten la lógica de sus requerimientos funcionales, pero cada uno de forma independiente tiene su estado.
      p.mb-4 En estos términos, la programación orientada a objetos ofrece una forma de abstraer entidades del mundo real, a partir de cuatro (4) principios a nombrar:
      
      .row.justify-content-center.mb-4
        .col-lg-7.col-md-12.col-12.mb-2
            SlyderA(tipo="b").slider-aa-custom.mb-6(data-aos="zoom-in-left")
              .row.justify-content-center.align-items-center.my-lg-8
                .col-md-7
                p.mb-3 <h3> La encapsulación</h3>
                p.mb-3  Un objeto oculta sus datos y solo muestra (interfaz) u ofrece un servicio al universo de las clases. De está forma, “el gato Milu corre”, una clase que representa una veterinaria podría operar sobre ella, sabiendo que “Milu” corre pero desconociendo cuál es su proceso funcional.
              .row.justify-content-center.align-items-center.my-lg-8
                .col-md-7
                p.mb-3 <h3> La abstracción</h3>
                p.mb-5  Es la formalización del objeto en la clase. ¿Qué es un animal?, ¿cómo identificar un animal?, ¿Qué acciones hace un animal?. Con las respuestas a estas preguntas se crea la clase, los atributos y sus diferentes métodos, comportamientos o funciones.
              .row.justify-content-center.align-items-center.my-lg-8
                .col-md-7
                p.mb-2 <h3> La herencia</h3>
                p.mb-4 Clases que dependen del concepto de “es hijo de”, “es relacionado con”, “compartes datos con”. Hace referencia al concepto semántico de “herencia”, es decir, entidades que tienen los atributos de sus padres. A partir del ejemplo, se podría crear una clase “mamífero” a partir de la clase “animal”, ya que todos los mamíferos son animales y comparten los mismos atributos.
              .row.justify-content-center.align-items-center.my-lg-8
                .col-md-7
                p.mb-3 <h3> El polimorfismo</h3>
                p.mb-5 Capacidad que tienen las clases y/u operaciones para hacer la misma función en diferentes contextos o dominios. En el caso particular, no es lo mismo “comer para un perro” que “comer para un gato”, los dos objetos tendrán el mismo método pero diferente acción.
        .col-lg-5.col-9.col.md-9.mb-2(data-aos="fade-right")
          img.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/temas/tema1/img08.png")


      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em C++]
          img.cemas.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/titulo.svg'  data-aos="fade-left")

      p.mb-0 Es un lenguaje de programación orientada a objetos que evolucionó de la extensión de lenguaje informático C. #[em C]++ se utiliza para realizar programación estructurada de alto nivel y rendimiento, como sistemas operativos, videojuegos y aplicaciones en la nube. #[em C]++ también se emplea para desarrollar #[em software] de bajo nivel, como controladores de dispositivos.

      .row.fondo-pink.justify-content-center.align-items-center.py-md-0.mb-4
        .col-lg-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-0(data-aos="fade-down")
      
            .row.align-items-center.justify-content-center(data-aos="zoom-in-left")
              .col-lg-5.col-md-7.col-8.mb-4
                img.img-a.img-t.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/tema1/c++.png', alt='')
              
              .col-lg-7.mb-4
                .bloque-texto-b.primero.color-secundario.p-3
                  img.img-a.img-t.faschek(src="@/assets/curso/temas/tema1/fas.svg")  
                  .bloque-texto-b__texto.px-3
                    .col-lg-12.col-md-12.col-12
                      p.mb-5 En lenguaje como #[em C]++ donde se diseña dentro de la Programación orientada a Objetos, si dentro del programa a realizar todos los miembros de una clase son públicos y estáticos, en aquel momento equivalen a variables y funciones globales con el prefijo «NombreDeClase:» 
                      h5.d-flex.justify-content-end.my-2 (Gervais, 2016).
                        i.fas.fa-quote-right
        
                .cajoni-b.lenguaje.color-secundario.mb-4
                  .bloque-texto-b.two.color-secundario.p-3
                    img.img-a.img-t.faschektt(src="@/assets/curso/temas/tema1/fas.svg")  
                    .bloque-texto-b__texto.mx-4
                      .col-lg-12.col-md-12.col-12
                        p Definición de clases: los datos de una clase se pueden guardar en una estructura, de hecho, en #[em C]++ un #[em struct] no es otra cosa que una clase con todos los miembros públicos. Como C no permite métodos, usamos funciones globales. El equivalente de #[em C]++. 
                        h5.d-flex.justify-content-end.my-2 (Sierra, 2015).
                          i.fas.fa-quote-right
                  .row.align-items-center.justify-content-center
                    .col-lg-5.col-md-5.col-12
                      img.my-4.img-a.img-t(src="@/assets/curso/temas/tema1/cuadroo.svg")
      
      
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em JAVA (SE,EE)]
          img.javase.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/titulo.svg' data-aos="fade-left")

      p.mb-4 Oracle Java es la plataforma de lenguaje de programación y desarrollo, que reduce costos, acorta los plazos de desarrollo, impulsa la innovación y mejora los servicios de las aplicaciones, conozcamos más:
      
      .row.justify-content-center
        .col-lg-7.col-md-12.col-12.mb-2
          AcordionA.acordion(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
            .row(titulo="Plataforma informática <em>Java</em>")
              .col-lg-6.ps-5
                ul.lista-ul--color.lista-acento-botones.mb-0
                  li.mb-0.d-flex 
              p.mb-0 #[em Java] es un lenguaje de programación que opera por medio de una plataforma informática #[em Java], hay cuatro ediciones principales de #[em Java: Java Standard Edition (Java SE) Java Enterprise Edition (Java EE) Java Micro Edition (Java ME).]
            .row(titulo="Evoluciones")
              .col-6.ps-5
                ul.lista-ul--color.lista-acento-botones.mb-0
                  li.mb-0.d-flex 
              p.mb-4 Ha tenido constantes evoluciones desde sus inicios, 
                strong.resaltado #[b #[em Java]]   
                |  nace en 1991 con el nombre “OAK”, posteriormente cambiado por Green por problemas legales, y finalmente con la denominación actual 
                strong.resaltado #[b #[em JAVA.]]
              p.mb-0 El objetivo de 
                strong.resaltado #[b #[em Java]]  
                |  era crear un lenguaje de programación parecido a #[em C]++ en estructura y sintaxis, fuertemente orientado a objetos, pero con una máquina virtual propia.
            .row(titulo="Aplicaciones Java modernas")
              .col-6.ps-5
                ul.lista-ul--color.lista-acento-botones.mb-0
                  li.mb-0.d-flex 
              p.mb-0 Concientizan el tiempo de ejecución y la aplicación de #[em Java,] para su correcto funcionamiento se debe instalar #[em Java] para escritorio. Encontramos muchas aplicaciones del lenguaje #[em Java] en casi todos los campos, ya sea una aplicación o desarrollo #[em web, big data], Inteligencia Artificial, desarrollo #[em móvil], etc.
            .row(titulo="Sitio <em>web</em> Java.com")
              .col-6.ps-5
                ul.lista-ul--color.lista-acento-botones.mb-0
                  li.mb-0.d-flex 
              p.mb-4 #[em Oracle Java] está disponible en el Acuerdo de licencia de #[em Oracle Technology Network] para #[em Oracle Java SE.] Esta licencia permite utilizar #[em Java] con fines personales y de desarrollo de forma gratuita.
              p.mb-0 #[em Java] 18 #[em (Oracle JDK 18)] ofrece miles de mejoras en cuanto a rendimiento, estabilidad y seguridad, incluyendo nueve propuestas de mejora de la plataforma, impulsando así aún más la productividad de los desarrolladores.
        .col-lg-5.col-md-9.col-9.mb-2
          img.d-none.d-lg-block(src="@/assets/curso/temas/tema1/img10.png")
      .row.justify-content-center
        .col-lg-5.col-md-9.col-9.mb-2
          img(src="@/assets/curso/temas/tema1/img11.png")
      
        .col-lg-7.col-md-12.col-12.mb-2
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")    
            .row(titulo="<em>Java</em> EE")
              .col-6.ps-5
                ul.lista-ul--color.lista-acento-botones.mb-0
                  li.mb-0.d-flex 
              p.mb-0 Es escalable para los proyectos, es decir, permite acoplar más tecnologías según vayan dándose las necesidades del #[em software.] Y #[em Java] SE es Edición Estándar.                              
            .row(titulo="Requisitos para programar Java")
              .col-6.ps-5
                ul.lista-ul--color.lista-acento-botones.mb-0
                  li.mb-0.d-flex 
              p.mb-0 Debe tener una sólida comprensión de la programación orientada a objetos. Estar familiarizado con varios diseños y patrones arquitectónicos. Habilidad para escribir bibliotecas en lenguaje #[em Java] reutilizables. Conocimiento de los patrones de concurrencia en #[em Java.]
            .row(titulo="Aplicación de uso personal")
              .col-6.ps-5
                ul.lista-ul--color.lista-acento-botones.mb-0
                  li.mb-0.d-flex 
              p.mb-3 Si quiere descargar la aplicación de uso personal es gratuita donde se contará con todos los kits de desarrollo y herramientas útiles y compatibles. Para instalar java puede consultar el siguiente tutorial en línea:&nbsp;
                p.mb-0
                a.en.mb-3(href="https://www.java.com/es/download/help/windows_manual_download.html" target="_blank")
                  span.mb-4.orr #[em https://www.java.com/es/download/help/windows_manual_download.html]
                p.mb-0 En la plataforma Link: 
                a.en.mb-0(href="https://www.jdoodle.com/online-java-compiler/" target="_blank")
                  span.mb-0.orr  #[em https://www.jdoodle.com/online-java-compiler/]
    
      .row.fondo6.align-items-center.py-4.py-md-3.mb-4
        .col-lg-12.col-12.px-lg-5.px-4
          .row.justify-content-center.mb-3(data-aos="fade-down")

          .mb-4.d-flex
            .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
              h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em PHP]
              img.peache.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/titulo.svg' data-aos="fade-left")
      
          p.mb-3 Es un lenguaje de código abierto muy reconocido sobre todo para el desarrollo #[em web] ya que el mismo puede ser fácilmente incrustado en #[em HTML], una de las grandes ventajas es su simplicidad para aquellos desarrolladores principiantes, por medio de este lenguaje se generan páginas #[em web] dinámicas que frecuentemente cambian su contenido, se debe tener en cuenta que las páginas #[em web] estáticas son las que sus contenidos permanecen siempre igual.
          p.mb-4 El esquema de #[em php] funciona mediante una petición al servidor, el mismo recibe la información necesaria realizando las consultas a bases de datos, otros servidores u otras páginas #[em web], el servidor responde si es una página #[em web] normal estática, pero donde el diseño y creación del mismo ha sido dinámico.
      
          .row.justify-content-center.align-items-center.mb-4
            .col-md-12.col-lg-10.col-12
              .bg9
                .row.justify-content-center.align-items-center.mb-2
                  .col-md-11.col-lg-3.col-11.my-3
                    p.mx-3 En el editor link:
                      .col-lg-12
                        a.anexo.mb-lg-0(href="https://paiza.io/es/projects/new " target="_blank")
                          .anexo__icono
                            img(src="@/assets/template/icono-link.svg")
                          .anexo__texto
                            p #[b Enlace web.] paiza.io
                  .col-md-9.col-lg-6.col-10
                    .dondo.p-2.mb-0.my-4(data-aos="fade-right")
                      .row.justify-content-left.align-items-center.d-flex
                        .col-lg-3.col-8
                          .d-flex.justify-content-center
                            img.my-3.img-a.img-t.d-none.d-lg-block(src="@/assets/curso/temas/tema1/programaaa.svg")
                        .col-lg-2.col-6
                          p.text-white Se&nbsp;puede&nbsp;realizar&nbsp;un&nbsp;pequeño&nbsp;saludo:
                          p.mb-4
                          p.text-white.mb-0 <?php&nbsp;
                          p.text-white.mb-0 //Your&nbsp;code&nbsp;here!
                          p.mb-0 
                          span.text-white print&nbsp;“hello”;
                          p.mb-0
                          span.text-white ?> 

      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em Ruby]
          img.rubyyy.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/titulo.svg' data-aos="fade-left")
      
      
      p.mb-4 #[em Ruby] es un lenguaje de programación interpretado, abstraído y orientado a objetos, su licencia es distribuida bajo #[em software] libre, todos los tipos de datos son con objeto, clases, métodos, es descrito como un lenguaje multiparadigma, permitiendo programación procedimental.

      .row.justify-content-center.mb-4
        .col-lg-7.col-md-12.col-12.mb-lg-0
          .bloque-texto-b.rubby.color-secundario.p-3
            img.img-a.img-t.faschek(src="@/assets/curso/temas/tema1/fas.svg")  
            .bloque-texto-b__texto.px-4
              p Se utiliza en su mayoría en el desarrollo de aplicaciones #[em web,] pero también se utiliza para otros tipos de desarrollo en #[em streaming]. #[em Ruby] maneja estrechamente el paradigma de #[em POO,] así que estas variables son privadas y no logran verse desde fuera de la clase, toda comunicación que se realiza entre objetos se hace con los métodos. Se caracteriza por un lenguaje dinámico, ya que los programas en #[em Ruby] no se compilan, todo el código de clases, módulos y métodos se realiza por medio de un intérprete.
              h5.d-flex.justify-content-end.my-2 (Cupul, 2021).
                i.fas.fa-quote-right
          .row.justify-content-center
            .col-lg-9.col-md-10.col-10
              .fondoaa.p-2.mb-0
                .row.justify-content-center.align-items-center.d-flex
                  .col-lg-3.col-8
                    .d-flex.justify-content-center
                      img.img-a.img-t(src="@/assets/curso/temas/tema1/progra.svg")
                  .col-lg-8.col-12
                    p.text-white Editor en línea 
                    a.anexo(href="https://replit.com/languages/ruby" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p #[b Enlace web]. #[em Code, create, and learn together with Ruby]
                    p.text-white.my-1 #[b Programa: puts ‘Hello, world!’]
        .col-lg-5.col-md-7.col-9.my-3
          img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/tema1/ruby.png', alt='')
    
      
      .mb-4.d-flex
        .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
          h3.col.px-4.mb-0.text-white(data-aos="fade-right") #[em Python]
          img.pytonn.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema1/titulo.svg' data-aos="fade-left")

      .row
        .col-lg-12.mb-lg-0
          .bloque-texto-b.python.color-secundario.p-3
            img.img-a.img-t.faschek3(src="@/assets/curso/temas/tema1/fas.svg")  
            .bloque-texto-b__texto.px-4
              p #[em Python] es un lenguaje de programación considerablemente utilizado en la mayor parte de las aplicaciones #[em web,] al realizar programas empresariales, la ciencia de datos y el #[em machine learning (ML).] Los programadores utilizan #[em Python] porque es eficientemente muy fácil de aprender, además de que se puede ejecutar en diferentes plataformas. El #[em software Python] es gratuito, se integra bien a todos las características de sistemas y aumenta la velocidad del desarrollo.
              h5.d-flex.justify-content-end.my-4 (S & G, 2018)
                i.fas.fa-quote-right
      p.mb-4 Las empresas requieren programadores expertos en #[em Python], esto debido que es más fácil con tecnologías emergentes como:
      figure.mb-4(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/7qLlvequpLU?si=CVrJeCpo8PFr_Vay" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
        figcaption Video: Python - Lenguaje de programación
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
