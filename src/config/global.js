export default {
  global: {
    componenteFormativo: 'Implementación y pruebas de IoT',
    descripcionCurso:
      'Con este componente, se profundizará en los fundamentos necesarios para conocer los diferentes lenguajes de programación diseñar y buscar alternativas de transformación digital con componentes del IoT',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Lenguaje de programación orientado a objetos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Conceptos asociados al lenguaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sintaxis',
            hash: 't_1_1',
          },
          {
            numero: '2.2',
            titulo: 'Estructura general del lenguaje',
            hash: 't_1_1',
          },
          {
            numero: '2.3',
            titulo: 'Editores de código',
            hash: 't_1_1',
          },
          {
            numero: '2.4',
            titulo: 'Conexiones a bases de datos',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Aplicaciones para programar dispositivos IoT',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Entornos de desarrollo y Frameworks',
            hash: 't_1_1',
          },
          {
            numero: '3.2',
            titulo: 'Estándares de codificación y plantillas ',
            hash: 't_1_1',
          },
          {
            numero: '3.3',
            titulo: 'Implementación de IoT',
            hash: 't_1_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Lenguaje de programación orientado a objetos',
      referencia:
        'Norma Iso 25000 https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=6385',
      tipo: 'Página Web',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=6385',
    },
    {
      tema: 'Lenguaje de programación orientado a objetos',
      referencia:
        'Edureka. (2019). Learn IoT In 4 Hours [Video]. YouTube. https://www.youtube.com/watch?v=h0gWfVCSGQQ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=h0gWfVCSGQQ',
    },
    {
      tema: 'Aplicaciones para programar dispositivos IoT',
      referencia:
        'Edureka. (2019). Learn IoT In 4 Hours. [Video]. YouTube. https://www.youtube.com/watch?v=h0gWfVCSGQQ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=h0gWfVCSGQQ',
    },
  ],
  glosario: [
    {
      termino: 'Azure',
      significado: 'Servicios de computación en la nube de Microsoft ',
    },
    {
      termino: 'Framework',
      significado:
        'Es un marco de trabajo específico, con instrucciones y estructuras, para la implementación de alguna acción.',
    },
    {
      termino: 'IoT',
      significado: 'Internet de las cosas',
    },
    {
      termino: 'Partner',
      significado:
        'Socio u operador de servicios en la nube (CSN) es una parte que se dedica a respaldar o proporcionar actividades de soporte auxiliar a las actividades del cliente o proveedor de servicios cloud.',
    },
    {
      termino: 'Script',
      significado:
        'Se refiere a fragmentos de código de programación que pueden ejecutar una o varias funciones.',
    },
    {
      termino: 'Smart cities',
      significado: 'Ciudades inteligentes',
    },
    {
      termino: 'SaaS',
      significado: 'Software como servicio.',
    },
    {
      termino: 'TI  ',
      significado: '(IT) Abreviatura de Tecnología de la información.',
    },
  ],
  referencias: [
    {
      referencia:
        'SG Buzz, (2015) Aprendiendo Ruby y Rails. Parte 1. Introducción a Ruby',
      link: 'https://sg.com.mx/content/view/564',
    },
    {
      referencia:
        'Conza, A. (15 de abril de 2018). ESTÁNDARES PARA DISEÑO E IMPLEMENTACIÓN DE BASES DE DATOS RELACIONALES. Obtenido de http://adrianconza.com/:',
      link: 'http://adrianconza.com/estandares-de-bases-de-datos/',
    },
    {
      referencia:
        'Cupul, L. D. N., Ake, G. D. J. C., & Rosado, V. M. B. (2021). Web Page Development in Ruby Programming.',
      link:
        'https://www.codecademy.com/courses/learn-rails/lessons/start/exercises/start-hello-rails',
    },
    {
      referencia:
        'Gervais, L. (2016). Aprender la programación orientada a objetos con el lenguaje C#. Ediciones ENI',
      link:
        'https://www.llardelllibre.cat/es/libro/aprender-la-progamacion-orientada-a-objetos-con-el-lenguaje-c_850051',
    },
    {
      referencia: 'Inicio - Introducción a Ruby. (2018.).',
      link: 'https://makeitrealcamp.gitbook.io/ruby-book/',
    },
    {
      referencia: 'ISO/IEC 17789:2014. (2021).',
      link: 'https://www.iso.org/standard/60545.html',
    },
    {
      referencia:
        'Román, L. L. (2013). Metodología de la programación orientada a objetos. Alfaomega.',
    },
    {
      referencia:
        'Sotaquirá, M. (15 de junio de 2021). Guía completa para el Manejo de Datos Faltantes. Obtenido de codificandobits:',
      link: 'https://www.codificandobits.com/blog/manejo-datos-faltantes/',
    },
    {
      referencia:
        'S, G. & A, V. (2018). Introduction to Python Programming (Illustrated). CRC Press',
      link:
        'https://www.taylorfrancis.com/books/mono/10.1201/9781351013239/introduction-python-programming-gowrishankar-veena.',
    },
    {
      referencia:
        'Somasundaram, K. (2014). Introduction to Java Programming. Penguin Random House.',
    },
    {
      referencia:
        'Velthuis, M. P. (2019). Calidad de datos. Bogotá: Ediciones de la U. Obtenido de',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9094',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
