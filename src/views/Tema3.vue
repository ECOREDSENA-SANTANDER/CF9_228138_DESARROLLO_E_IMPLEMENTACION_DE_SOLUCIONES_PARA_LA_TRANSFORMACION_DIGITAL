<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Aplicaciones para programar dispositivos IoT

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Los lenguajes más importantes y utilizados en el desarrollo de Internet de las cosas- #[em IoT]  son #[em Java,] lenguaje C, #[em Python y JavaScript].
        .bg138.p-3.mb-3
          .row.d-flex
            .col-lg-2.mx-0
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/tema3/img1.svg', alt='')
            .col-lg-10.mx-0
              p.mb-2.my-2  Los dispositivos #[em IoT] cuentan con sensores que registran y transforman lo físico o químico en datos electrónicos que podemos manejar.
        p.mb-0 Cualquier dispositivo IoT permite conectarse a otros dispositivos y aplicaciones IoT para transmitir información utilizando protocolos estándar de Internet, veamos los siguientes:
      .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-0(data-aos="fade-left")
          img.d-none.d-lg-block(src="@/assets/curso/temas/tema3/img302.png")

    .row.fondo-t3.align-items-center.py-4.py-md-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")

        .row.justify-content-center 
          .col-lg-10.col-md-12.col-10
            img.img-a.img-t.mover.d-none.d-lg-block(src="@/assets/curso/temas/tema3/ahp.svg")
            .tabla-a.color-acento-botones.ulim 
              table
                thead
                  tr
                    th.tst Aplicaciones para programar dispositivos loT
                    th
                tbody
                  tr
                    td.uno #[b #[em #[.or Phyton]]] <br><br>Es un lenguaje interpretado de alto nivel,<br> y es uno de los más populares para<br> el desarrollo de IoT.
                    td.dos.mx-5 #[b #[em #[.or C]]]
                      .row.justify-content-center.align-items-start
                        .col-lg-4
                        .col-lg-8
                          p.mb-2
                          | Es un lenguaje de nivel medio comprende toda la arquitectura de proyectos IoT por las grandes propiedades como la portabilidad y el número de bibliotecas que tiene.
                  tr
                    td.tres #[b #[em #[.or Lua]]]<br><br> Lenguaje de nivel alto maneja funciones de descripción de datos y para que funcione correctamente se incorpora a un cliente #[em HOST.]
                    td.cuatro #[b #[em #[.or Golang ]]]<br><br> #[em Go] - aprovecha al máximo el #[em hardware] lo que lo hace útil y apropiado en IoT #[em Java:] esté código puede ejecutarse en cualquier plataforma para el adecuado desarrollo de proyectos de Internet de las cosas.
              
    
          Separador
          #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
            h2 3.1 Entornos de desarrollo y #[em Frameworks]
            
      .row.fondo-t4.align-items-center.py-4.py-md-3
        .col-lg-12.col-12.px-lg-12.px-0
          .row.justify-content-center(data-aos="fade-down")
          
            .row.justify-content-center.mb-5
              .col-lg-10.col-md-10.col-12
                .bloque-texto-a__texto.p-5
                  p.mb-4 Un entorno de desarrollo o #[em IDE] es un #[em software] que combina en un solo lugar todas las herramientas para desarrollar un proyecto, se puede decir que es la combinación de varios procesos de programación. 
                  p.mb-4 Los entornos de desarrollo cuentan con un editor, un compilador, y un desbloqueador de las gestiones de código genérico, las cuales se dan en entornos de los lenguajes de desarrollo #[em Python y Java.] 
                  p.mb-0 Por medio de los entornos de desarrollo, los programadores pueden testear los diferentes segmentos de código, con esto se logra identificar cualquier error de la aplicación antes de salir al mercado.
    p.mb-0 Los #[em frameworks] pueden ser una de las herramientas más importantes para los programadores en general. Se trata de toda una base de datos en la que se establecen proyectos completos, y que pueden ser utilizados las veces necesarias. 

    Separador    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Estándares de codificación y plantillas 
    p(data-aos="fade-down").mb-4 Los estándares de codificación concentran elementos de ingeniería sólidos para la programación en sus diferentes lenguajes y constituyen la base de cualquier orientación preventiva.
    p.mb-3 Los estandares de calidad más relevantes en la construcción de #[em software,] de acuerdo con las normas ISO, son los siguientes:
    
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-md-12.col-12
        img.img-a.img-t.movere.d-none.d-lg-block.my-4(src="@/assets/curso/temas/tema3/flechas.jpg")
        .row.justify-content-center.align-items-start
          .col-lg-12.col-md-12.col-12
            .tabla-a.ocu.mb-4.d-none.d-lg-block(data-aos="zoom-in")
              thead
                tr
                  td.modi.cab1.margen.text-center #[.or Norma ISO 25000]
                    .row
                      .col-lg-12.col-12
                        p.my-3 La norma consta de 5 áreas enfocadas a la gestión, el modelo, la medición del mismo, los requisitos y la evaluación. Donde se asegura la máxima calidad y confianza en los desarrollos de #[em software]. 
                  td.modi.cab2.marggg.text-center #[.or Norma ISO 9126]
                    .row
                      .col-lg-12
                        p.my-3 Esta norma se compone dentro de los estándares y plantillas en 6 aspectos que se deben tener en cuenta que son la funcionalidad, confiabilidad, usabilidad, eficiencia, mantenibilidad, portabilidad. Donde se puede conocer que los desarrollos de #[em software] cumplan con las necesidades de los usuarios.
                  td.modi.cab3.marge.text-center #[.or Norma ISO 9001]
                    .row
                      .col-lg-12
                        p.my-3 Mediante el #[em software] de calidad, donde la confianza y reputación de los usuarios son los beneficios de este modelo de gestión.
                  td.modi.cab4.mari.text-center #[.or Norma ISO 15504]   
                    .row
                      .col-lg-12
                        p.my-3 Es la norma conocida por la mejora de procesos, contando con los estándares de calidad de #[em software.]     
    .row.justify-content-center.mb-4.imagen-mobile
      .col-lg-10.col-md-12.col-12
        .cab1.p-3
          h4 #[.or Norma ISO 25000]
          p.mb-0 La norma consta de 5 áreas enfocadas a la gestión, el modelo, la medición del mismo, los requisitos y la evaluación. Donde se asegura la máxima calidad y confianza en los desarrollos de #[em software]. 
        .cab2.p-3
          h4 #[.or Norma ISO 9126]
          p.mb-0 Esta norma se compone dentro de los estándares y plantillas en 6 aspectos que se deben tener en cuenta que son la funcionalidad, confiabilidad, usabilidad, eficiencia, mantenibilidad, portabilidad. Donde se puede conocer que los desarrollos de #[em software] cumplan con las necesidades de los usuarios.
        .cab3.p-3
          h4 #[.or Norma ISO 9001]
          p.mb-0 Mediante el #[em software] de calidad, donde la confianza y reputación de los usuarios son los beneficios de este modelo de gestión.
        .cab4.p-3
          h4 #[.or Norma ISO 15504]
          p.mb-0 Es la norma conocida por la mejora de procesos, contando con los estándares de calidad de #[em software.]     

    p.mb-4 Las herramientas de integración ayudan a las organizaciones a conseguir mayor eficiencia, productividad y agilidad ya que integran diferentes aplicaciones de #[em software] y servicios, interfaces de programación de aplicaciones (#[em API]), datos y dispositivos para automatizar los procesos empresariales y ofrecer al usuario un producto de calidad.
    p.mb-4 Las herramientas de gestión de cambios son cualquier cosa que se pueda utilizar para aliviar las tensiones que surgen durante un cambio en el proceso, el personal o el #[em software.]

    .row.justify-content-center
      .col-sm-7.col-lg-4.mb-4.mb-lg-4
        .bg11111.p-4
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema3/imagene.svg', alt='Texto que describa la imagen')
          .row.justify-content-center.mb-0
            .col-12
              h3.text-center.mb-3 #[em #[.or Azure Pipelines]]
              p.text-center Son servicios en la nube que combina y realiza entrega continua, donde compila y prueba automáticamente el código para finalmente colocar el mismo a disposición de otros usuarios. 

      .col-sm-7.col-lg-4.mb-4.mb-lg-4
        .bg11111.p-4
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema3/jenkins.svg', alt='Texto que describa la imagen')

          h3.text-center.mb-4 #[em #[.or Jenkins]]
          p.text-center.mb-5 Es una herramienta de integración continua, siendo la misma de código abierto y se puede configurar en entornos productivos.
      
      .col-sm-7.col-lg-4.mb-4.mb-lg-4
        .bg11111.p-4
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema3/genes.svg', alt='Texto que describa la imagen')

          h3.text-center.mb-4 #[em #[.or Gitlab]]
          p.text-center Tiene un servicio en el cual se construye y prueba el #[em software] cada vez que el programador actualiza el repositorio.


    Separador    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3 Implementación de IoT
    
    .row.justify-content-center.align-items-start
      .col-lg-4.col-md-8.col-9
        img.img-a.img-t.mb-4.d-none.d-lg-block(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img3.3.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-3 Cuando miramos las implementaciones de proyectos en IoT pensamos que el conocimiento de inteligencia empresarial no deja de transformarse y, uno de los últimos negocios relevantes se debe a las aplicaciones IoT.
        p.mb-3 Se denomina aplicaciones IoT a las soluciones de #[em software] diseñadas para realizar tareas, en este caso, en base a la información procedente de dispositivos conectados a una red. Según datos de #[em IDC], para el 2020, la cantidad de objetos conectados habrá alcanzado los 30 miles de millones, ofreciendo una oportunidad de ingresos de 1.7 miles de millones de dólares americanos, para el año 2030 la proyección sería de 125 mil millones conectados.
        p.mb-0 En la implementación de proyectos IoT se puede conectar hoy en día cualquier objeto como:
          .row  
        .col-lg-12.col-md-10.col-12
          ul.lista-ul--color.mx-4.my-0.mb-3
            li.mb-0 
              i.fas.fa-play
              span
                strong.or #[b Tráfico: ] 
                | como proyectos en Vehículos, Semáforos.
            li.mb-0
              i.fas.fa-play
              p #[.or #[b Objetos personales:&nbsp;]] ropa, zapatos.
            li.mb-0
              i.fas.fa-play
              span
                strong.or #[b Hogar: ] 
                | timbre, garaje, puertas hogar, electrodomésticos.
            li.mb-0
              i.fas.fa-play
              p #[.or #[b Equipos electrónicos:&nbsp;]]todos.
            li.mb-0
              i.fas.fa-play
              p #[.or #[b Dispositivos de salud en control&nbsp;]]
            li.mb-0
              i.fas.fa-play
              p #[.or #[b Dispositivos de deporte&nbsp;]]
          p.mb-4(data-aos="fade-down") Dentro del metaverso y comercio electrónico los proyectos de IoT serían fundamentales proyectos de esta línea para los diferentes almacenes o empresas en mejoramiento de los procesos de ventas y afinidad con sus clientes. 
    

    .row.ffondo-gray2.align-items-center.py-5.py-md-5.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-0(data-aos="fade-down")
    
          .mb-4.d-flex
            .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
              h3.col.px-4.mb-0.text-white(data-aos="fade-right")  Pruebas de conectividad
              img.pruebasdeee.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema3/titulo.svg' data-aos="fade-left")

          .row.justify-content-center.align-items-center
            .col-lg-8.col-12.my-0.mx-0(data-aos="fade-right")
              p.mb-4 Las pruebas de conectividad se miden mediante herramientas de diagnóstico en el cual se puede verificar la conectividad entre los puntos de la red. Es posible realizar un análisis de la configuración y los datos del plano en vivo. Adicionalmente, las pruebas de conectividad se usan para ayudar a controlar problemas de conexión de red, como lo son:
              .row  
              .col-lg-12.mb-2
                ul.lista-ul--color.mx-4
                  li.mb-0
                    i.fas.fa-play
                    span Opciones incoherentes no deseadas.
                  li.mb-0
                    i.fas.fa-play
                    span Opciones obsoletas en la configuración esto se puede dar según las migraciones o cambios que tenga la arquitectura de #[em hardware. ]
                  li.mb-0
                    i.fas.fa-play
                    p Error en la variedad de servicio y funciones de la red.
  
            .col-lg-4.col-8.px-0.my-2
              img(src="@/assets/curso/temas/tema3/continuidad.png")

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Pruebas de funcionamiento
        img.pruebasdef.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema3/titulo.svg' data-aos="fade-left")

    .bloque1.p-0.mb-4
      .prueba.bloque-texto-b.colo-secundario.p-8.px-0.mb-0(data-aos="fade-left")
        .bloque-texto-b__texto
          .row.justify-content.align-items-center.d-flex
            .col-lg-10.col-12
              p.mb-4 Dentro de las pruebas de funcionamiento se puede realizar el #[em test] de conectividad mediante el valor de #[em shapley,]  este es un método de optimización de recursos y es posible aplicarlo a la conectividad o transmisión de paquetes, mediante el #[em ping] también es posible tomar los valores de conectividad de la red.
            .col-auto
              img.img-a.img-t.d-none.d-lg-block(alt="" src="@/assets/curso/temas/tema3/subir.svg")

    .row.justify-content-center.align-items-start.mb-3
      .col-lg-7
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
          h5 Figura 4.
          | Testeo ping con una página web
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/ping.svg', alt='La figura presenta una captura de pantalla que describe en lenguaje de programación los resultados de un testeo de conectividad.')
    p Tomando los datos obtenidos al realizar el testeo se procede a diligenciar una tabla como la siguiente:
    
    .row.justify-content.mb-2
      .col-lg-8.col-sm-12
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
          h5 Tabla 2.
          span Plantilla de seguimiento  de conexiones punto a punto.
    .row.justify-content.mb-2
      .col-lg-6.col-sm-12
        .tabla-a.color-acento-contenido.mb-4(data-aos="zoom-in")
            thead
              tr
                th.cab.margen.text-center Nodo 
                th.cab.mar.text-center Valores de RED tiempo 
                th.cab.marg.text-center Excelente 
                th.cab.marge.text-center Regular 
                th.cab.mari.text-center Malo         
            tbody    
              tr
                th.blan.text-center 1
                td.blan
                td.blan
                td.blan 
                td.blan 
              tr
                th.bla.text-center 2
                td.bla
                td.bla
                td.bla 
                td.bla
              tr
                th.blan.text-center 3
                td.blan
                td.blan 
                td.blan
                td.blan
              tr
                th.bla.text-center 4
                td.bla
                td.bla
                td.bla 
                td.bla
              tr
                th.blan.text-center 5
                td.blan
                td.blan
                td.blan
                td.blan
      .col-lg-6.mb-lg-6(data-aos="fade-left")
        .bg-5321.p-4
          p.mb-4 En el anterior escenario podemos decir que tenemos N =5 donde sería los nodos que conforman la #[em Red Power Line Communications (PLC),] dando valores de red solicitados que se pueden extraer los valores de red tiempo por puntos y realizar la comparación entre nodos dando rangos según la topología de red.
          p.mb-4 Ejemplo: Excelente rango de 1 – 20 MS.
          p.mb-4 Regular sería de 1 – 30 MS.
          p.mb-4 Malo sería rango de 1 – 40 Ms pero con interrupciones y fallas.


    .row.fondo5.align-items-center.py-4.py-md-3.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")

        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
            h3.col.px-4.mb-0.text-white(data-aos="fade-right") Validación de rendimiento
            img.punto3.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema3/titulo.svg' data-aos="fade-left")

        .bloque-texto-b__texto
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-6.col-12
              p.mb-3 Los puntos de conexión inalámbricos IoT trabajan durante años y logran instalarse fácilmente en el lugar deseado. Con la aparición continua de nuevas aplicaciones esto puede implicar que estas terminales deban usarse en ambientes de RF realmente adversos. Los medidores inteligentes instalados en bodegas o sótanos, por ejemplo, tienen que hacer frente a condiciones complicadas de cobertura. Nuevos dispositivos, como los sensores de estacionamiento, deben ser muy fuertes y resistentes al agua, lo cual es un gran desafío para el diseño de RF global. El rendimiento de las conexiones inalámbricas de los dispositivos IoT es un factor crucial para el éxito de las aplicaciones del IoT y requiere de atención al detalle, así como de un tiempo y esfuerzo considerables.
            .col-lg-6.col-8
              img(alt="" src="@/assets/curso/temas/tema3/validacion.svg") 

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Documentacion de pruebas y resultados
        img.punto44.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema3/titulo.svg' data-aos="fade-left")
    
    
    .introducciones.bloque-texto-b.color-secundario
      .bloque-texto-b__texto
        .row.justify-content.align-items-center.d-flex
          .col-lg-10.col-12.mb-4
            p Un dispositivo IoT, como su nombre indica, es un dispositivo que se conecta a internet para realizar alguna operación, ya sea almacenar datos, consultar un servicio, etc.
          .col-auto
            img.im11.img-a.img-t.d-none.d-lg-block(alt="" src="@/assets/curso/temas/tema3/documentacion.svg")
          .col-lg-10.col-12.mb-4
            p.mb-4 Las pruebas loT, permite al usuario controlar dispositivos de forma remota a través de una red. El #[em IoT testing] es un nuevo enfoque de prueba que involucra un alcance más amplio y complejo de pruebas de #[em software] tradicionales.
          


    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/js-QjCWvfLo?si=RZXfVd0p-n7Rn8uI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video: Documentación de pruebas y resultados

    

</template>

<script>
export default {
  name: 'Tema3',
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
