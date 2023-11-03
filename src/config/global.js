export default {
  global: {
    componenteFormativo:
      'Implementación de los procesos de seguridad sanitaria y ambiental.',
    descripcionCurso:
      'Los mecanismos de participación social y su impacto en la política de seguridad ambiental tienen en cuenta la participación e inclusión del individuo, la comunidad y los organismos de control y regulación, basados en la política de participación social en salud y la Política Integral de Salud Ambiental – PISA, abordada desde la participación social, comunitaria y ciudadana.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'Caracterización de la situación de salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Análisis de la situación en salud (ASIS)  ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Desarrollo del plan de intervenciones colectivas',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Acciones de sensibilización ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Monitoreo y evaluación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Gestión documental',
            hash: 't_2_2',
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA.zip',
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
      tema: '1.	Caracterización de la situación en salud',
      referencia:
        'Resolución 1536 del 11 de mayo de 2015. [Ministerio de Salud y Protección Social]. Por la cual se establecen disposiciones sobre el proceso de planeación integral para la salud. 11 de mayo de 2015.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1536-de-2015.pdf',
    },
    {
      tema: '1.1 Análisis de la situación en salud',
      referencia:
        'Resolución 1535 del 11 de mayo de 2015. [Ministerio de Salud y Protección Social]. Por la cual se define la estructura, el flujo de datos y la disposición del reporte del listado censal de las personas de que trata el Decreto 2487 de 2014. 11 de mayo 2015.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1535-del-2015.pdf',
    },
    {
      tema: '1.1 Análisis de la situación en salud',
      referencia:
        'Ministerio de Salud y Protección Social (2014). Guía conceptual y metodológica para la construcción del ASIS de las Entidades Territoriales Colombia 2014. ',
      tipo: 'Cartilla',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/Guia%20ASIS%2028112013.pdf',
    },
    {
      tema: '1.2 Desarrollo del plan de intervenciones colectivas',
      referencia:
        'Resolución 0518 del 24 de febrero de 2015. [Ministerio de Salud y Protección Social].  Por la cual se dictan disposiciones en relación con la gestión de la Salud Pública y se establecen directrices para la ejecución, seguimiento y evaluación del Plan De Salud Pública De Intervenciones Colectivas -PIC. 24 de febrero de 2015.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%200518%20de%202015.pdf',
    },
    {
      tema: '2.	Acciones de sensibilización',
      referencia:
        'Ministerio de Salud y Protección Social. Plan interno de sensibilización del SME. Sistema de Monitoreo y Evaluación del Plan Decenal de Salud Pública 2012-20121 (SME)',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/plan-interno-sensibilizacion-sme.pdf',
    },
    {
      tema: '2.2 Gestión documental',
      referencia:
        'Resolución 0375 del 09 de marzo de 2020. [Ministerio de Salud y Protección Social]. Por la cual se actualiza el Plan Institucional de Archivos - PINAR -, y el Programa de Gestión Documental – PGD del Ministerio de salud y Protección Social y se deroga la Resolución No. 4266 de 2015 en lo relacionado con dichos instrumentos. 9 de marzo de 2020.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/SiteAssets/Paginas/gestion-documental/Resoluci%c3%b3n%20No.%200375%20de%202020%20PINAR%20Y%20PGD.pdf',
    },
  ],
  glosario: [
    {
      termino: 'ARL',
      significado:
        'Es la sigla para Administradora de Riesgos Laborales. Corresponde a una aseguradora de vida con autorización de una autoridad competente para la explotación del ramo de seguros de riesgos laborales (La República, 2019). ',
    },
    {
      termino: 'ASIS',
      significado:
        'Análisis de la Situación en Salud, es un proceso analítico-sintético que comprende diversos tipos de análisis tanto descriptivos como analíticos, que permiten caracterizar, medir y explicar el perfil de salud enfermedad de la población en su territorio, incluyendo los daños, riesgos y los determinantes de la salud que los generan (Ministerio de Salud y Protección Social, 2022).',
    },
    {
      termino: 'EAPB',
      significado:
        'Las Entidades Administradoras de Planes de Beneficios de Salud (EAPB) las  Entidades Promotoras de Salud del Régimen Contributivo y Subsidiado, Empresas Solidarias de Salud, las Asociaciones Mutuales en sus actividades de Salud, las Entidades Promotoras de Salud Indígenas, las Cajas de Compensación Familiar en sus actividades de salud, las entidades que administren planes adicionales de salud, las entidades obligadas a compensar, las entidades adaptadas de Salud, las entidades pertenecientes al régimen de excepción de salud y las universidades en sus actividades de salud (Ministerio de Salud y Protección Social, 2019).',
    },
    {
      termino: 'Evaluación',
      significado:
        'Es una investigación sistemática y objetiva aplicada en los diferentes eslabones de la cadena de valor (procesos, productos, resultados) que tiene como finalidad generar evidencia que sirva como insumo para mejorar el diseño, la implementación, la ejecución y los efectos del Plan Decenal de Salud (Decreto 1290 de 2014)',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Proceso continuo y sistemático que permite revisar, mediante indicadores, el avance del territorio frente al logro de las metas y objetivos del PTS, lo que permite tomar acciones correctivas de manera oportuna (Resolución 518 del 2015).',
    },
    {
      termino: 'PIC',
      significado:
        'Es un plan de beneficios compuesto por intervenciones de promoción de la salud y gestión del riesgo, las cuales se enmarcan en las estrategias definidas en el Plan Territorial de Salud (PTS), y buscan impactar positivamente los determinantes sociales de la salud y alcanzar los resultados definidos en el PTS (Ministerio de Salud y Protección Social 2022).',
    },
    {
      termino: 'Plan de Acción',
      significado:
        'Es el insumo fundamental para realizar el monitoreo, autoevaluación y rendición de cuentas de la gestión de la Dirección Territorial de Salud en términos de cumplimiento de actividades y su contribución para el cumplimiento de las metas del PTS (Ministerio de Salud y Protección Social 2016).',
    },
    {
      termino: 'PTS',
      significado:
        'Plan Territorial de Salud es el instrumento estratégico e indicativo de política pública en salud, que permite a las entidades territoriales contribuir con el logro de las metas estratégicas del Plan Decenal de Salud Pública (Ministerio de Salud y Protección Social 2016).',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de salud y protección social. (2022). Caracterización Poblacional. ',
      link:
        'https://www.minsalud.gov.co/salud/publica/epidemiologia/Paginas/caracterizacion-de-la-poblacion-afiliada-a-las-EAPB.aspx',
    },
    {
      referencia:
        'Ministerio de salud y protección social, Dirección De Epidemiología Y Demografía. (2015). Caracterización de la Población afiliada a las EAPB      ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/GCFI/Guia_caracterizacion_EAPB%20version%2021072014.pdf',
    },
    {
      referencia:
        'Ministerio De Salud Y Protección Social. (2022). Sistema integrado de gestión. Gestión documental.',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Paginas/gestion-documental.aspx#:~:text=Gesti%C3%B3n%20documental%3A%20conjunto%20de%20actividades,facilitar%20su%20utilizaci%C3%B3n%20y%20conservaci%C3%B3n.',
    },
    {
      referencia:
        'Ministerio De Salud Y Protección Social Análisis de Situación de Salud (ASIS) (2021)  ',
      link:
        'https://www.minsalud.gov.co/salud/publica/epidemiologia/Paginas/analisis-de-situacion-de-salud-.aspx',
    },
    {
      referencia:
        'Ministerio De Salud Y Protección Social. (s.f.). Modelo Integrado de Atención en Salud –MIAS-. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/10-implementacion-mias.pdf ',
    },
    {
      referencia:
        'Ministerio De Salud Y Protección Social. (2019). Plan Interno De Sensibilización Del SME (2012-2021). ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/plan-interno-sensibilizacion-sme.pdf ',
    },
    {
      referencia:
        'Resolución 1536 del 11 de mayo de 2015. [Ministerio de Salud y Protección Social]. Por la cual se establecen disposiciones sobre el proceso de planeación integral para la salud. 11 de mayo de 2015. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1536-de-2015.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz Adriana Cárdenas González',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
