export default {
  global: {
    componenteFormativo: 'Implementación y pruebas de IoT',
    descripcionCurso:
      'Con este componente, se profundizará en los fundamentos necesarios para conocer los diferentes lenguajes de programación, a través del estudio de conceptos y aplicaciones relacionadas con el internet de las cosas, se pretende  diseñar y buscar alternativas de transformación digital con componentes del IoT',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estructura general del lenguaje',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Editores de código',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Conexiones a bases de datos',
            hash: 't_2_4',
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
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estándares de codificación y plantillas ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Implementación de IoT',
            hash: 't_3_3',
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
      link: 'https://iso25000.com/index.php/normas-iso-25000',
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
      termino: '<em>Framework</em>',
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
      link:
        'https://adrianconza.medium.com/estandares-de-bases-de-datos-2bee81b53447',
    },
    {
      referencia:
        'Gervais, L. (2016). Aprender la programación orientada a objetos con el lenguaje C#. Ediciones ENI',
      link: '',
    },
    {
      referencia: 'Inicio - Introducción a Ruby. (2018.).',
      link: 'https://makeitrealcamp.gitbook.io/ruby-book/',
    },
    {
      referencia: 'ISO/IEC 17789:2014. (2021).',
      link: 'https://ccsp.alukos.com/standards/iso-iec-17789-2014/',
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
      link: '',
    },
    {
      referencia:
        'Somasundaram, K. (2014). Introduction to Java Programming. Penguin Random House.',
    },
    {
      referencia:
        'Velthuis, M. P. (2019). Calidad de datos. Bogotá: Ediciones de la U. Obtenido de',
      link: 'https://www.perlego.com/es/book/2165228/calidad-de-datos-pdf',
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
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'César Antonio Villamizar Núñez',
          cargo: 'Experto Temático',
          centro: 'Regional Norte de Santander- Centro CIES',
        },
        {
          nombre: 'Diego E. Acevedo Guevara',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>Fullstack</em>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y Productora Multimedia',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette González Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
