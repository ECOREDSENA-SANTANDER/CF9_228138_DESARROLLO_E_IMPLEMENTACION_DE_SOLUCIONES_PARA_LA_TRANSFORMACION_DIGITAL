<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Aplicaciones para programar dispositivos IoT

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Para programar en IoT se puede realizar en #[em Java, lenguaje C, Python, JavaScript] son algunos de los lenguajes más importantes que se utilizan en el desarrollo de IoT.
        .bg138.p-3.mb-1
          .row.d-flex
            .col-lg-2.mx-0
              img.img-a.img-t(src='@/assets/curso/temas/tema3/img1.svg', alt='')
            .col-lg-10.mx-0 Los dispositivos IoT cuentan con sensores que registran y transforman lo físico o químico en datos electrónicos que podemos manejar.
        p.mb-3
        p.mb-2 Cualquier dispositivo IoT permite conectarse a otros dispositivos y aplicaciones IoT para transmitir información utilizando protocolos estándar de Internet, veamos los siguientes:
      .col-lg-4.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/temas/tema3/img302.png")

    .row.fondo-t3.align-items-center.py-4.py-md-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")


          .row.justify-content-center.align-items-start.mb-5
            .col-lg-10
              img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img33.png', alt='')
    
          Separador
          #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
            h2 3.1 Entornos de desarrollo y #[em Frameworks]
            
      .row.fondo-t4.align-items-center.py-4.py-md-3
        .col-lg-12.col-12.px-lg-12.px-0
          .row.justify-content-center.mb-4(data-aos="fade-down")
          
          .row.justify-content-center.align-items-start.mb-5
            .col-lg-12.col-md-12.col-12.px-lg-12.px-5
            .bloque-texto-g__texto.p-5.my-5
                p.mb-5 Un entorno de desarrollo o IDE es un #[em software] que combina en un solo lugar todas las herramientas para poder desarrollar un proyecto de #[em software], la combinación de varios procesos de programación, cuentan con un editor, compilador, un desbloqueador de las gestiones de código genérico, las mismas se dan en entornos de los lenguajes de desarrollo #[em Python y Java,] los sistémicos y programadores pueden testear por medio de estos entornos de desarrollo los diferentes segmentos de código, esto para poder identificar cualquier error de la aplicación antes de salir al mercado. 
      
    p.mb-3 Los #[em frameworks] pueden ser una de las herramientas más importantes para los programadores en general. Se trata de toda una base de datos en las que se establecen proyectos completos, y que pueden ser utilizados las veces necesarias. 

    Separador    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Estándares de codificación y plantillas 
    p(data-aos="fade-down").mb-5 Los estándares de codificación concentran elementos de ingeniería sólidos para la programación en sus diferentes lenguajes y constituyen la base de cualquier orientación preventiva.<br><br>Los estandares de calidad más relevantes en la construcción de software, de acuerdo con las normas ISO, son los siguientes
    .col-lg-12.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img3.2.png', alt='')
    <br><br>
    p Las herramientas de integración aprueban a las organizaciones a conseguir una mayor eficiencia, productividad y agilidad ya que integra diferentes aplicaciones de #[em software] y servicios, interfaces de programación de aplicaciones (API) datos y dispositivos para automatizar los procesos empresariales y ofrecer al usuario.
    p.mb-3 Las herramientas de gestión de cambios son cualquier cosa que se pueda utilizar para aliviar las tensiones que surgen durante un cambio en el proceso, el personal o el #[em software.]

    .row
      .col-sm-6.col-lg-4.mb-4.mb-lg-4
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-5
            .col-4
              figure
                img(src='@/assets/curso/temas/tema3/azure.svg', alt='Texto que describa la imagen')

          h3.text-center Azure Pipelines
          p.mb-1 Son servicios en la nube que combina y realiza entrega continua, donde compila y prueba automáticamente el código para finalmente colocar el mismo a disposición de otros usuarios. 

      .col-sm-6.col-lg-4.mb-4.mb-lg-4
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-5
            .col-4
              figure
                img(src='@/assets/curso/temas/tema3/jenkins.svg', alt='Texto que describa la imagen')

          h3.text-center Jenkins
          p.mb-5 Es una herramienta de integración continua, siendo la misma de código abierto y se puede configurar en entornos productivos.
      .col-sm-6.col-lg-4.mb-4.mb-lg-4
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-5
            .col-4
              figure
                img(src='@/assets/curso/temas/tema3/gitlab.svg', alt='Texto que describa la imagen')

          h3.text-center Gitlab
          p.mb-5 Tiene un servicio en el cual se construye y prueba el software cada vez que el programador actualiza el repositorio.


    Separador    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3 Implementación de IoT
    .row.justify-content-center.align-items-start.mb-0
      .col-lg-4.col-8.mb-4.mb-lg-0
        img.img-a.img-t.mb-0(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/img3.3.svg', alt='')
        .row
      .col-lg-8(data-aos="fade-left")
        p.mb-2 Cuando miramos las implementaciones de proyectos en IoT pensamos que el conocimiento de inteligencia empresarial no deja de transformarse y, uno de los últimos negocios relevantes se debe a las aplicaciones IoT.
        p.mb-2 Se denomina aplicaciones IoT a las soluciones de software diseñadas para realizar tareas, en este caso, en base a la información procedente de dispositivos conectados a una red. Según datos de IDC, para el 2020, la cantidad de objetos conectados habrá alcanzado los 30 miles de millones, ofreciendo una oportunidad de ingresos de 1.7 miles de millones de dólares americanos, para el año 2030 la proyección sería de 125 mil millones conectados.
        p.mb-0 En la implementación de proyectos IoT se puede conectar hoy en dia cualquier objeto como:
          .row  
        .col-lg-12.mb-0
          ul.lista-ul--color.mx-4.my-0
            li.mb-0 
              i.fas.fa-play
              p Tráfico: como proyectos en Vehículos, Semáforos
            li.mb-0
              i.fas.fa-play
              p Objetos personales: Ropa, zapatos 
            li.mb-0
              i.fas.fa-play
              p Hogar: Timbre, Garaje, Puertas hogar, Electrodomésticos
            li.mb-0
              i.fas.fa-play
              p Equipos electrónicos: todos
            li.mb-0
              i.fas.fa-play
              p Dispositivos de salud en control
            li.mb-0
              i.fas.fa-play
              p Dispositivos de deporte
          p(data-aos="fade-down").mb-5 Dentro del metaverso y comercio electrónico los proyectos de IoT serían fundamentales proyectos de esta línea para los diferentes almacenes o empresas en mejoramiento de los procesos de ventas y afinidad con sus clientes. 
    

    .row.fondo-gray2.align-items-center.py-4.py-md-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")
    
          .mb-4.d-flex
            .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue(style="border-radius: 25px; padding: 10px")
              h3.col.px-4.mb-0.text-white(data-aos="fade-right")  Pruebas de conectividad
              img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema3/titulo.svg' style="max-width: 60px; left: 320px; position: absolute" data-aos="fade-left")

          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8.col-12.my-0.mx-0(data-aos="fade-right")
              p.mb-2 Cuando hablamos sobre las pruebas de conectividad las mismas se miden mediante herramientas de diagnóstico en el cual podemos verificar la conectividad entre los puntos de la red. Podemos realizar un análisis de la configuración y poder analizar datos del plano en vivo, las mismas pruebas de conectividad se usan para ayudar a controlar problemas de conexión de red como: 
              .row  
              .col-lg-12.mb-5
                ul.lista-ul--color.mx-4
                  li.mb-0
                    i.fas.fa-play
                    p Opciones incoherentes no deseadas
                  li.mb-0
                    i.fas.fa-play
                    p Opción obsoletas en la configuración esto se puede dar según las migraciones o cambios que tenga la arquitectura de hardware. 
                  li.mb-0
                    i.fas.fa-play
                    p Error en la variedad de servicio y funciones de la red.
  
            .col-lg-4.col-8.px-0.my-5.mx-0
              img(src="@/assets/curso/temas/tema3/continuidad.png")
                
    .mb-5  
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue(style="border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Pruebas de funcionamiento
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema3/titulo.svg' style="max-width: 60px; left: 350px; position: absolute" data-aos="fade-left")

    .bloque1.p-0.mb-5
      .prueba
        .bloque-texto-b.colo-secundario.p-8.px-0.mb-0(data-aos="fade-left")
          .bloque-texto-b__texto
            .row.justify-content.align-items-center.d-flex
              .col-lg-10.col-12
                p.mb-4 Dentro de las pruebas de funcionamiento se puede realizar el test de conectividad (Ver gráfico 4) mediante el valor de shapley ya que es un método de optimización de recursos y podemos aplicarlo a la conectividad o transmisión de paquetes, también mediante el ping podemos tomar los valores de conectividad de red.
              .col-auto.my-3
                img.mb-0(alt="" src="@/assets/curso/temas/tema3/subir.svg")

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-7
        img.img-a.img-t.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/tema3/ping.svg', alt='')
        .row.justify-content-center.align-items-center
    p Pero se toma las direcciones IP de cabecera de red y se procede a llenar la tabla 2.    
    
    .row.justify-content.mb-4
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-1(data-aos="fade-right")
          h5 Tabla 2
          span  Plantilla de seguimiento de conexiones punto a punto
        
        .tabla-a.color-acento-contenido(data-aos="zoom-in")
          table
            thead(style="border-color: transparent")
              tr
                th(style="background-color: #FED9D3;").text-center Nodo 
                th(style="background-color: #FED9D3;").text-center Valores de RED tiempo 
                th(style="background-color: #FED9D3;").text-center Excelente 
                th(style="background-color: #FED9D3;").text-center Regular 
                th(style="background-color: #FED9D3;").text-center Malo         
            tbody    
              tr
                th(style="background-color: #FFF;").text-center 1
                td(style="background-color: #FFF;").text-center 
                td(style="background-color: #FFF;").text-center
                td(style="background-color: #FFF;").text-center 
                td(style="background-color: #FFF;").text-center 
              tr
                th(style="background-color: #FAF0EF;").text-center 2
                td(style="background-color: #FAF0EF;").text-center 
                td(style="background-color: #FAF0EF;").text-center 
                td(style="background-color: #FAF0EF;").text-center 
                td(style="background-color: #FAF0EF;").text-center
              tr
                th(style="background-color: #FFF;").text-center 3
                td(style="background-color: #FFF;").text-center 
                td(style="background-color: #FFF;").text-center 
                td(style="background-color: #FFF;").text-center 
                td(style="background-color: #FFF;").text-center 
              tr
                th(style="background-color: #FAF0EF;").text-center 4
                td(style="background-color: #FAF0EF;").text-center 
                td(style="background-color: #FAF0EF;").text-center 
                td(style="background-color: #FAF0EF;").text-center 
                td(style="background-color: #FAF0EF;").text-center
              tr
                th(style="background-color: #FFF;").text-center 5
                td(style="background-color: #FFF;").text-center 
                td(style="background-color: #FFF;").text-center 
                td(style="background-color: #FFF;").text-center 
                td(style="background-color: #FFF;").text-center 
        
        .row.justify-content.mb-5
      .col-lg-6.mb-lg-6.my-5(data-aos="fade-left")
        .bg-5321.p-4
          p.mb-4 En el anterior escenario podemos decir que tenemos N =5 donde sería los nodos que conforman la Red Power Line Communications (PLC), dando valores de red solicitados que se pueden extraer los valores de red tiempo por puntos y realizar la comparación entre nodos dando rangos según la topología de red.
          p.mb-4 Ejemplo: Excelente rango de 1 – 20 MS.
          p.mb-4 Regular sería de 1 – 30 MS.
          p.mb-4 Malo sería rango de 1 – 40 Ms pero con interrupciones y fallas.


    .row.fondo5.align-items-center.py-4.py-md-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")

        .mb-4.d-flex
          .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue(style="border-radius: 25px; padding: 10px")
            h3.col.px-4.mb-0.text-white(data-aos="fade-right") Validacion de rendimiento
            img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema3/titulo.svg' style="max-width: 60px; left: 330px; position: absolute" data-aos="fade-left")

        .bloque-texto-b__texto
          .row.justify-content-center.align-items-center.d-flex
            .col-lg-6.col-12.my-0
              p.mb-5-lg-0.mb-0 Los puntos de conexión inalámbricos IoT trabajan durante años y logran instalarse fácilmente en el lugar deseado. Con la aparición continua de nuevas aplicaciones esto puede implicar que estas terminales deban usarse en ambientes de RF realmente adversos. Los medidores inteligentes instalados en bodegas o sótanos, por ejemplo, tienen que hacer frente a condiciones complicadas de cobertura. Nuevos dispositivos, como los sensores de estacionamiento, deben ser muy fuertes y resistentes al agua, lo cual es un gran desafío para el diseño de RF global. El rendimiento de las conexiones inalámbricas de los dispositivos IoT es un factor crucial para el éxito de las aplicaciones del IoT y requiere de atención al detalle, así como de un tiempo y esfuerzo considerables.<br><br>
            .col-lg-6.col-8.px-0.my-0
              img.mb-5(alt="" src="@/assets/curso/temas/tema3/validacion.svg") 

    .mb-5
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4.bg-img-blue(style="border-radius: 25px; padding: 10px")
        h3.col.px-4.mb-0.text-white(data-aos="fade-right") Documentacion de pruebas y resultados
        img.col-lg.d-none.d-lg-flex(src='@/assets/curso/temas/tema3/titulo.svg' style="max-width: 60px; left: 460px; position: absolute" data-aos="fade-left")
    
    
    .bloque1.p-0.mb-5
      .bloque-texto-b.color-secundario.p-4.mb-0(data-aos="fade-left")
        .bloque-texto-b__texto
          .row.justify-content-center.align-items-center.d-flex
              .col-lg-10.col-12
                p.mb-lg-0.mb-3 Un dispositivo IoT, como su nombre indica, es un dispositivo que se conecta a internet para realizar alguna operación, ya sea almacenar datos, consultar un servicio, etc.<br><br>Las pruebas loT, permite al usuario controlar dispositivos de forma remota a través de una red. El IoT testing es un nuevo enfoque de prueba que involucra un alcance más amplio y complejo de pruebas de software tradicionales.  
              .col-lg-2.col-8.px-5
                img.mb-0(alt="" src="@/assets/curso/temas/tema3/documentacion.svg")   


    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/iSWz9b7HCEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    

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
