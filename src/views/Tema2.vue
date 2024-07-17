<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Conceptos asociados al lenguaje

    .row.bolivar.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")  
    
        .row.justify-content-center.mb-0
          .col-lg-3.col-6.mb-4.mb-lg-0(data-aos="zoom-in")
            figure
              img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/temas/tema2/img001.jpg', alt='imagen decorativa') 

    
          .col-lg-9.mb-0.mx-2-my-3.p-3(data-aos="fade-left")
            p.mb-4.mx-3 Se concluye que cada lenguaje de programación utiliza  una lógica similar, pero los conceptos pueden cambiar. Los lenguajes de programación se definen como procesos donde se crea, se depura y se compila información para crear programas, utilizando códigos o instrucciones que el  desarrollador convierte en lenguaje de programación fuerte, de bajo, medio o alto nivel, compilados y declarativos u orientados a objetos.
            p.mb-5.mx-3 Para iniciar a programar, se deben tener en cuenta los siguientes conceptos básicos de programación:

            .col-lg-12.col-md-12.col-12
                SlyderA(tipo="b").slider-a-customer(data-aos="zoom-in-left")
                  .row.justify-content.align-items-center.my-lg-8
                    .col-md-3
                      img.img-a.img-t(src='@/assets/curso/temas/tema2/Algoritmo.svg', alt='Texto que describa la imagen')
                    .col-md-9.my-4
                      p.mb-5 <h3>Algoritmo</h3>
                      p.mb-5  Es la base para la programación, al dominar los algoritmos es posible encontrar soluciones en cualquier lenguaje de programación.
                  .row.justify-content.align-items-center.my-lg-8
                    .col-md-3
                      img.img-a.img-t(src='@/assets/curso/temas/tema2/Variable.svg', alt='Texto que describa la imagen')
                    .col-md-9.my-4
                      p.mb-5 <h3>Variable</h3>
                      p.mb-5  Son unidades de almacenamientos de datos que se utilizan para programar y se reservan en espacios en la memoria #[em RAM].
                  .row.justify-content.align-items-center.my-lg-8
                    .col-md-3
                      img.img-a.img-t(src='@/assets/curso/temas/tema2/Funcion.svg', alt='Texto que describa la imagen')
                    .col-md-9.my-4
                      p.mb-5 <h3>Función</h3>
                      p.mb-5 Hace referencia a los bloques que realizan tareas específicas, el comando es: #[em function] y se reutiliza este código para realizar la redacción de líneas de manera más rápida.
                  .row.justify-content.align-items-center.my-lg-8
                    .col-md-3
                      img.img-a.img-t(src='@/assets/curso/temas/tema2/Tipos.svg', alt='Texto que describa la imagen')
                    .col-md-9.my-4
                      p.mb-5 <h3>Tipos de datos</h3>
                      p.mb-5 Se refiere a conjuntos de valores que significan lo mismo. Los tipos de datos pueden ser numéricos, booleanos (dos opciones), fecha / Hora, de texto (cadena), #[em variant] o de objeto.

    Separador    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Sintaxis
    p(data-aos="fade-down").mb-3 La sintaxis dentro de todo lenguaje de programación es la combinación de reglas y símbolos que se consideran declaraciones o expresiones estructuradas en un lenguaje de programación.
    p.mb-3 Ideas principales y puntos de conexión:

    .row.fond2.contenedor.align-items-center.py-md-3.mb-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4(data-aos="fade-down")

          .row.align-items-center.justify-content-center.mb-0(data-aos="zoom-in-left")
            .col-lg-7.my-0.mx-0.bg15.mb-2.p-0
              ul.lista-ul--color.my-3
                li.mb-0.pb-0 
                  i.fas.fa-play
                  span Describe a la escritura del código.
                li.mb-0 
                  i.fas.fa-play
                  span Enfrenta a la semántica en sí el significado. 
                li.mb-0 
                  i.fas.fa-play
                  span El método semántico suele ser posterior al sintáctico.
                li.mb-0 
                  i.fas.fa-play
                  span El método semántico es necesario para completar el análisis sintáctico, y se realizan juntos o al mismo tiempo. 
                li.mb-0 
                  i.fas.fa-play
                  span #[em Ruby] es un lenguaje orientado a objetos, su sintaxis y semántica presentan que en su mayoría todos los tipos son objetos. 
                li.mb-5
                  i.fas.fa-play
                  span Muchos operadores son métodos de los objetos (Aprendiendo #[em Ruby y Rails.] Parte 1. Introducción a #[em Ruby], 2015.)
              
            .col-lg-5.col-12.col-md-10(data-aos="fade-right")
              img(src="@/assets/curso/temas/tema2/img2.1.svg")  
    
    Separador    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Estructura general del lenguaje 
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.col-8.my-0
        img.img-a.img-t.mb-2.d-none.d-lg-block(src='@/assets/curso/temas/tema2/estructura.jpg', alt='')
  
      .col-lg-7.col-md-12.col-12
        .bloque-texto-b.estru22.cont.color-secundario.p-3.mb-4
          img.img-a.img-t.faschek33.d-none.d-lg-block(src="@/assets/curso/temas/tema1/fas.svg")  
          .bloque-texto-b__texto.px-3
            p Un programa informático es una serie de acciones (instrucciones o comandos) que manejan un conjunto de objetos (datos e información), depende mucho el lenguaje que estés manejando para conformar su estructura. Los bloques que existen son declaraciones e instrucciones.
            p.d-flex.justify-content-end.my-2 #[b (Inicio - Introducción a #[em  Ruby,] 2018.)]
              i.fas.fa-quote-right.d-none.d-lg-block
            
        p.mb-0 Las declaraciones son los objetos que utiliza el programa como variables y archivos (Variables, archivos, etc.) las instrucciones son los resultados que se esperan por las acciones y operaciones realizadas. En la figura 2, presenta la estructura básica de un programa en #[em Ruby.]
    .row.justify-content-center.mb-4
      .col-lg-8.col-12
        .t
        .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-right")
          h5 Figura 2.
          span Estructura de un programa en #[em Ruby] 
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8.col-md-12.col-12.mb-lg-4.mb-2(data-aos="fade-right")
        img(src="@/assets/curso/temas/tema2/figura.svg", alt='En la siguiente imagen se expone una progresión o pasos secuenciales en una tarea, para este caso “el programa Ruby”.  Se identifica primero el ingreso de datos como etapa de inicio de programa, siguiendo la secuencia se introducen los cálculos en el proceso de programa, y para finalizar se ingresan los resultados con lo cual se concluye la secuencia que se orienta hacia la derecha. ')

    
    .row.justify-content-center.mb-2
      .col-sm-7.col-lg-4.mb-4.mb-lg-4
        .bg11111.p-4
          .row.justify-content-center.mb-5
            .col-4
              figure
                img.img-a.img-t(src='@/assets/curso/temas/tema2/entrada.svg', alt='Texto que describa la imagen')

          h3.text-center #[.or Entrada de datos]
          p.mb-5.text-center Almacenan en la memoria interna datos procedentes de un dispositivo externo.

      .col-sm-7.col-lg-4.mb-4.mb-lg-4
        .bg11111.p-4
          .row.justify-content-center.mb-5
            .col-4
              figure
                img.img-a.img-t(src='@/assets/curso/temas/tema2/proceso.svg', alt='Texto que describa la imagen')

          h3.text-center #[.or Proceso o algoritmo]
          p.mb-5.text-center Instrucciones que modifican los objetos de entrada y en ocaciones crean otros nuevos.

      .col-sm-7.col-lg-4.mb-4.mb-lg-4
        .bg11111.p-4
          .row.justify-content-center.mb-5
            .col-4
              figure
                img.img-a.img-t(src='@/assets/curso/temas/tema2/salida.svg', alt='Texto que describa la imagen')

          h3.text-center  #[.or Salida de resultados]
          p.mb-4.text-center Conjunto de instrucciones que toman los datos finales de la memoria interna y los envían a los dispositivos externos.

    p.mb-4 La estructura básica de un programa informático se muestra en la tabla 1.
          
    .row.justify-content-center.mb-0
      .col-lg-9.col-md-12.col-12
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Tabla 1.
          span Especificacion de la estructura de un programa en #[em Ruby]
        
        .tabla-b
            tr
              th.h5.titu Cabecera
              td.titu Se especifica por medio del nombre de programa, los datos de entrada y datos de salida.
            tr
              th.h5.blanco Funciones 
              td.blanco Son las diseñadas por el desarrollador y se usa las ocasiones necesarias.
            tr
              th.h5.rosa Declaraciones 
              td.rosa Las mismas se definen en los tipos de variables, constantes y los nuevos tipos de datos que se den.
            tr
              th.h5.blanco Asignaciones 
              td.blanco Valores iniciales declarados previamente.
            tr
              th.h5.rosa Entradas 
              td.rosa Almacenan en memoria algunos valores.
            tr
              th.h5.blanco Control 
              td.blanco Las mismas pueden ser alternativas y repetitivas  
            tr
              th.h5.rosa Salidas 
              td.rosa Son las que muestran los resultados obtenidos.
        

    Separador    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Editores de código
      
    .row.ultim.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center(data-aos="fade-down")
    
    
        .row.align-items-center.justify-content-center.mb-0(data-aos="zoom-in-left")
          .col-lg-8.col-12.mb-2-cus
            p.mb-2 En la medida del avance de la tecnología en plena cuarta revolución industrial, los programas de computadora que nos ayudan a realizar códigos fuente de los diferentes proyectos de programación, evolucionan constantemente y pueden combinar diferentes lenguajes o editores: #[em Python, JavaScript, HTML,] etc. Al crear una página #[em Web] es importante considerar que existen editores de códigos compatibles con sistemas operativos como #[em Windows, macOS o Linux.]
            .d-flex.align-items-center.justify-content-center
              img.img-a.img-t.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/tema2/img003.svg', alt='')
              p.ml-1-custom.mt-0 Las características de los editores de código en cada sistema operativo son, capacidad de almacenar proyectos, sintaxis en varios idiomas, funciones de búsqueda y reemplazo, funciones de mostrar y ocultar secciones, edición de macros. Algunos editores son:
            .bg14.p-2.mb-2  
              ul.lista-ul--color.mx-4.my-3
                li.mb-1.pb-0 
                  i.fas.fa-play
                  span
                    strong.or #[b #[em  Coda:]]  
                    |  es una aplicación #[em web] que funciona como editor de código para #[em MacOS.]
                li.mb-1 
                  i.fas.fa-play
                  span
                    strong.or #[b #[em Notepad++:]]  
                    |  es un editor versátil y soporta lenguajes como #[em HTML, JavaScript y php. ]
                li.mb-1
                  i.fas.fa-play
                  span
                    strong.or #[b #[em Visual Studio code: ]]  
                    |  es desarrollado por Microsoft se usa con diferentes lenguajes de programación, incluidos #[em C (C, C ++, C #), F #, HTML] entre otros, incluidos #[em PHP, Java, Ruby] y muchos otros. Une un conjunto de funciones que se reforman según el idioma que esté utilizando. 
                li.mb-1 
                  i.fas.fa-play
                  span
                    strong.or #[b #[em Atom:]]  
                    |  es un editor de #[em JavaScript] ligero y tiene una gran cantidad de extensiones donde se puede personalizar su funcionamiento. 
                li.mb-1 
                  i.fas.fa-play
                  p
                    strong.or #[b #[em Ultraedit:]]&nbsp; 
                    | es uno de los lenguajes donde se puede editar multitud de lenguajes de programación en #[em HTML; JavaScript, ASP.]
            
          .col-lg-4.mb-2-cus
            img.img-a.img-t.mx-2.d-none.d-lg-block(src='@/assets/curso/temas/tema2/img004.png', alt='')

        Separador    
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
          h2 2.4 Conexiones a bases de datos

        .row.justify-content-center  
          .col-lg-2.col-2.mb-2.mb-lg-2
            img.img-a.img-t.d-none.d-lg-block.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/tema2/conexion.svg', alt='')
          .col-lg-10.mb-8.mb-md-0(data-aos="fade-left")
              p(data-aos="fade-down").mb-4 Una conexión de base de datos es un registro de configuración en el que se especifican los detalles físicos de una base de datos, como el tipo de base de datos la versión, y los parámetros para habilitar una conexión. Desde una aplicación por ejemplo en entornos #[em web], se puede concebir la interacción con la base de datos, donde existe un cliente que invoca una petición a la aplicación #[em web] que está alojada en un servidor #[em web,] desde ahí el #[em backend] de la aplicación interactúa con la base de datos respectiva, generando todos los accesos y dando resultados de nuevo al core de la aplicación #[em web] y de allí mostrar resultados a las vistas #[em (frontend)] del cliente respectivo. 
          .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
            h5 Figura 3.
            span Conexión base de datos 
          .col-lg-6.mb-3.mb-lg-0(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema2/img002.jpg', alt='Consultar en la imagen el vínculo dinámico entre cliente PC, Servidor Web y Base de datos. Lo cual se expone en tres figuras geométricas en su orden Triángulo, cuadrado y cilindro, conectadas por flechas')  

          .col-lg-6(data-aos="fade-left")
            .bg14.p-3.mb-0
              p.mb-4.my-3 Una base de datos permite acumular gran número de información de una forma constituida para su futura consulta, construcción de búsquedas, nuevo ingreso de datos, etc. Todo esto lo aprueba si se realiza de una forma rápida y simple desde un computador.
              p En proyectos de #[em IOT] en la nube se pueden adquirir servicios de base de datos como #[em Amazon y Dynamo DB.]


</template>
<script>
export default {
  name: 'Tema2',
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
