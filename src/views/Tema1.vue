<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Caracterización de la situación de salud
      
    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Llevar a cabo la caracterización de cualquier variable que se relacione con la salud o bienestar, se articula con las técnicas de análisis que posibilitan identificar riesgos a los cuales se encuentra expuesto el ser humano, así como las zonas en donde estos prevalecen, de esta forma es posible aplicar las herramientas necesarias para la prevención y mitigación de dichos riesgos. Estas estrategias serán aplicadas por medio de las Entidades Administradoras de Planes de Beneficios (EAPB) y las Administradoras de Riesgos Laborales (ARL), junto con el Plan Territorial de Salud, y las entidades territoriales de salud, bien sea nivel departamental o distrital, tal como lo indica la Resolución 1536 de 2015.

    p(data-aos="fade-right").mb-5 Así mismo, el Plan Decenal de Salud Pública y la Resolución 518 de 2015, han establecido que dicha caracterización, establezca monitoreo, autoevaluación y rendición de cuentas, de la gestión que lleve a cabo la Dirección Territorial de Salud, en relación al cumplimiento de las actividades y metas trazadas en este orden. Estas actividades siguen unas líneas operativas específicas que se indican a continuación (ver figura 1): 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Líneas operativas del Plan Decenal de Salud Pública</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/2.svg', alt='La figura 1, indica las líneas operativas del Plan Decenal de Salud Pública, relacionadas con la promoción de salud, la gestión del riesgo y la gestión de la salud pública.')
          figcaption Nota. Adaptado de Dirección de Promoción y Prevención Dirección de Epidemiología y Demografía, (2016). 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Líneas operativas del Plan Decenal de Salud Pública</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/2-m.svg', alt='La figura 1, indica las líneas operativas del Plan Decenal de Salud Pública, relacionadas con la promoción de salud, la gestión del riesgo y la gestión de la salud pública.')
          figcaption Nota. Adaptado de Dirección de Promoción y Prevención Dirección de Epidemiología y Demografía, (2016). 

    p(data-aos="fade-right").mb-5 En cuanto a las técnicas de análisis de un problema o circunstancia relacionada con la situación de salud, bien sea individual o colectiva, son herramientas que permiten hacer una intervención en un territorio particular, y requiere identificar el ámbito en el cual se encuentra la población de análisis:

    .row.mb-5
      .col-4
        .tarjeta.color-primario.p-4(style="height:100%")
          h3.text-center ¿Qué es el ámbito?
          p Refiere a la situación y esfera física, incorporando el estado y funcionamiento del organismo. A una mejor salud física, hay mayor oportunidad de integrarse en el contexto social al cual se pertenece, a la vez que posibilita el desarrollo de su potencial, lo cual repercutirá en el bienestar de la sociedad en general. 
          p El ámbito puede estar comprendido por varios planes que orientan las intervenciones de salud teniendo en cuenta los problemas, las necesidades y demás situaciones que se son posibles de presentar en una persona o comunidad.
      .col-4
        .tarjeta.color-secundario.p-4(style="height:100%")
          h3.text-center ¿A quién responde?
          p Puede responder a tres elementos específicos: 
          ol.lista-ol--cuadro.mb-5
            li 
              .lista-ol--cuadro__vineta
                span(style="color:#000 !important") <strong>1</strong>
              | Plan poblacional, se articula con un plan de desarrollo, y es una herramienta de gestión que promueve el desarrollo social en un determinado territorio. Atendiendo así las necesidades no satisfechas de la población y para mejorar la calidad de vida de todos los ciudadanos. 
            li 
              .lista-ol--cuadro__vineta
                span(style="color:#000 !important") <strong>2</strong>
              | Población general, corresponde al grupo de personas que comparten un área geográfica, con características similares. 
            li 
              .lista-ol--cuadro__vineta
                span(style="color:#000 !important") <strong>3</strong>
              | Entidad territorial, bajo un mismo ordenamiento físico o político que comparte un mismo significado que es válido para la comunidad.
      .col-4
        .tarjeta.color-acento-contenido.p-4(style="height:100%")
          h3.text-center ¿Cómo se identifica?
          p La identificación del ámbito se realiza particularmente mediante: 
          ol.lista-ol2--cuadro.mb-5
            li 
              .lista-ol2--cuadro__vineta
                span(style="color:#000 !important") <strong>1</strong>
              | La IPS, establecido mediante los afiliados al sistema de salud, a quienes se les presta los servicios de salud en una institución específica, que cumpla parámetros de ley. 
            li 
              .lista-ol2--cuadro__vineta
                span(style="color:#000 !important") <strong>2</strong>
              | Persona-Familia, relacionado de manera particular a cada una de las personas que conforman la comunidad de análisis, o las familias que hacen parte de estas comunidades, y que integran la sociedad.
            li 
              .lista-ol2--cuadro__vineta
                span(style="color:#000 !important") <strong>3</strong>
              | Plan de cuidado, que posibilita formular acciones para prevenir, mitigar o tratar problemas de salud, tanto a nivel de los individuos, como de las familias, y que esté acorde a los hallazgos y/o necesidades evidenciadas para promover y mantener la salud de forma integral.

    p(data-aos="fade-right").mb-5 Para llevar a cabo la caracterización de la población, es necesario recordar el modelo integral de salud, en el que se articulan los determinantes sociales con las entidades territoriales, IPS y EPS y entidades de otros sectores, que aúnan esfuerzos para cumplir con los compromisos establecidos en diferentes espacios de este orden, entre los cuales están:

    .row.justify-content-center.mb-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/3.svg' alt='AvatarTop')
          p Salud Universal. Se relaciona con la necesidad de que todos los seres humanos, y todas las comunidades sin distinción, tengan acceso a los servicios de salud de forma integral. OMS.

        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/4.svg' alt='AvatarTop')
          p En la Reunión Internacional sobre Adelaida 2012. Salud, Bienestar y Equidad, se estableció que la salud debe estar presente en todas las políticas.

        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/5.svg' alt='AvatarTop')
          p El sector de la salud debería actuar con firmeza para reducir las inequidades sanitarias. Conferencia Mundial sobre los Determinantes Sociales de la Salud –CMDSS- 2011.

        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/6.svg' alt='AvatarTop')
          p Funciones Esenciales de la Salud Pública –FESP-: Función esencial No. 1: monitoreo y análisis de la situación de salud de la población – Vigilancia en Salud pública y los Sistemas de Información.

    p(data-aos="fade-right").mb-5 En general la caracterización de una población, mide y resume todas las situaciones de salud en una región y tiene presente lo que corresponde al orden territorial y demográfico; los componentes propios de esta clasificación se relacionan con la priorización y los que corresponden con la diferenciación en cuanto a lo individual. Todos estos se explican a continuación:

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Caracterización territorial y demográfica

    p(data-aos="fade-right") Comprende el estudio de los determinantes sociales en salud. La #[b Resolución 1536 del 2015], establece que es una metodología de análisis de riesgos, tanto a nivel individual como colectivo, mediante la cual no solo se identifica el riesgo, sino que además prioriza las intervenciones individuales requeridas para la prevención o mitigación de dichos riesgos, acciones que se hacen mediante entidades encargadas para tal fin.
    p(data-aos="fade-right").mb-5 La caracterización poblacional, no son los análisis de riesgos de las EPS, o listas de indicadores, tampoco son los perfiles de morbimortalidad de las EPS.

    .cajon.color-secundario.p-4.mb-5
      p El Plan Decenal de Salud Pública 2012- 2021, estableció las diferencias que regula la caracterización poblacional, y que se pueden observar en el siguiente esquema (ver figura 2):

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Caracterización poblacional</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/7.svg', alt='La figura 2, presenta un diagrama de la caracterización poblacional que se encuentra dentro del modelo integral de atención en salud, y que permite constituir los planes coherentes con las necesidades y problemas de salud de la población.')
          figcaption Nota. Modelo Integral de Atención en Salud. MINSALUD (s.f.).

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Caracterización poblacional</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/7-m.svg', alt='La figura 2, presenta un diagrama de la caracterización poblacional que se encuentra dentro del modelo integral de atención en salud, y que permite constituir los planes coherentes con las necesidades y problemas de salud de la población.')
          figcaption Nota. Modelo Integral de Atención en Salud. MINSALUD (s.f.).

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Componentes de la caracterización

    p(data-aos="fade-right").mb-5 Toda caracterización requiere de dimensiones que sean posibles de evaluar, y analizar, con el fin de integrar el marco en el cual se reportarán los datos de los riesgos poblacionales presentes. Para dar claridad sobre este tema, en la siguiente gráfica, se encontrará una descripción al respecto (ver figura 3):

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em>Componente de la caracterización</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/8.svg', alt='La figura 3, responde a los cuestionamientos que se formulan al interior de la caracterización en salud, como son: 1. ¿Cómo se componen? 2. ¿Quiénes hacen parte? 3. ¿Cómo se generan los datos?')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em>Componente de la caracterización</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/8-m.svg', alt='La figura 3, responde a los cuestionamientos que se formulan al interior de la caracterización en salud, como son: 1. ¿Cómo se componen? 2. ¿Quiénes hacen parte? 3. ¿Cómo se generan los datos?')

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Componentes de la priorización 
    p(data-aos="fade-right").mb-5 Se relaciona con el reconocimiento de los principales efectos de salud identificados previamente, corresponde con los Índices de Necesidades en Salud (INS), y es a partir de este punto que se podrán formular propuestas de objetivos sanitarios para la planificación. En la siguiente figura se puede observar cuáles son los componentes que hacen parte de la priorización:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 4.] <em>Componentes de la priorización</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/9.svg', alt='La figura 4 establece los 9 componentes que hacen parte de la priorización en atención en salud, y se identifican aquellos que son de orden municipal y distrital y los que corresponden a los departamentos.')
          figcaption Nota. Modelo Integral de Atención en Salud. MINSALUD (s.f.).

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 4.] <em>Componentes de la priorización</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/9-m.svg', alt='La figura 4 establece los 9 componentes que hacen parte de la priorización en atención en salud, y se identifican aquellos que son de orden municipal y distrital y los que corresponden a los departamentos.')
          figcaption Nota. Modelo Integral de Atención en Salud. MINSALUD (s.f.).

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Caracterización individual 
    p(data-aos="fade-right").mb-5 Está compuesto por varios sistemas, en los que se evidencian las situaciones de salud, y se organizan soluciones a través de la atención dirigida a la familia, teniendo en cuenta las intervenciones que se realizan a nivel del ciclo de vida, como se puede observar a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] <em>Caracterización individual</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/10.svg', alt='La figura 5, presenta un proceso de la caracterización individual que atiende todos los ciclos de la vida del ser humano.')

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] <em>Caracterización individual</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/10-m.svg', alt='La figura 5, presenta un proceso de la caracterización individual que atiende todos los ciclos de la vida del ser humano.')

    p(data-aos="fade-right").mb-5 Además, se realizan algunas actividades que son intervenidas mediante el análisis que se hace, con el fin de generar las evidencias de un determinado territorio, y que se lleva a cabo mediante:

    .row.justify-content-center.mb-4
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-secundario2")
          .row(titulo="Riesgo en entornos")
            .col-12
              p Los riesgos generados en el entorno pueden ser aquellos que son ocasionados por la naturaleza, como huracanes, lluvias, inundaciones, terremotos, maremotos, tsunamis, erupciones volcánicas, plagas, epidemias, virus y muchos otros.
              p.mb-0 A nivel de la salud, se asocian con la ocupación o labor que se desempeña, el lugar, y las medidas de protección que no se usen adecuadamente.

          .row(titulo="Ficha Individual")
            .col-12
              p.mb-0 Es un documento que reúne la información más significativa acerca de su familia, experiencia escolar, aspectos físicos y hereditarios, alimentación, diversiones, nivel socioeconómico cultural, entre otros.

          .row(titulo="Historia clínica")
            .col-12
              p.mb-0 Sistemas de Gestión de la Calidad. Directrices para la mejora del desempeño: esta norma proporciona ayuda para la gestión del éxito sostenido del sistema de gestión de la calidad para beneficiar a todas las partes interesadas a través de las mejoras y el mantenimiento de la satisfacción del cliente. La Norma ISO 9004 abarca tanto la eficiencia como la eficacia del sistema de gestión de la calidad.  Se puede tomar como una ampliación de la norma anterior y no es certificable.

          .row(titulo="Ficha - Encuesta")
            .col-12
              p.mb-0 Hace parte de la ficha individual, corresponde con la información obtenida mediante una encuesta u otro método para obtener información, esta información acredita el rigor con que se ha llevado el procedimiento, y la seriedad de los datos allí consignados.
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/11.png", alt="alt").img400.m-auto

    p(data-aos="fade-right").mb-5 La caracterización poblacional, se encuentra a cargo de las Entidades Administradoras del Plan de Beneficio – EAPB- recordando que trabajan de forma articulada con:

    .row.justify-content-center.mb-5
      .col
        .tarjeta.color-secundario2.p-5(style='border-radius:0px')
          .row.justify-content-center.align-items-center
            .col-4
              img(src='@/assets/curso/temas/tema1/12.svg', alt='Texto que describa la imagen')
            .col-6
              p La sistematización de experiencias tiene en cuenta cinco pasos esenciales, que son: 
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Entidades Promotoras de Salud del Régimen Contributivo y Subsidiado.
                li 
                  i.lista-ul__vineta
                  | Empresas Solidarias de Salud, las Asociaciones Mutuales en sus actividades de Salud. 
                li 
                  i.lista-ul__vineta
                  | Entidades Promotoras de Salud Indígenas.
                li 
                  i.lista-ul__vineta
                  | Cajas de Compensación Familiar en sus actividades de salud.
                li 
                  i.lista-ul__vineta
                  | Entidades que administren planes adicionales de salud.
                li 
                  i.lista-ul__vineta
                  | Entidades obligadas a compensar.
                li 
                  i.lista-ul__vineta
                  | Entidades adaptadas de salud.
                li 
                  i.lista-ul__vineta
                  | Entidades pertenecientes al régimen de excepción de salud. 
                li 
                  i.lista-ul__vineta
                  | Universidades en sus actividades de salud.

    .row.justify-content-center.align-items-center.mb-5
      .col-7 
        p Las Propuestas de Salud que generan las EPS, se relacionan con las presentadas por las organizaciones que administran el plan de beneficios –EAPB-, y son las Administradoras de Riesgos Laborales –ARL- las encargadas de elaborar el perfil poblacional, con el fin de establecer el beneficio o la inclusión de dichas propuestas. Todas estas entidades, tienen a cargo la responsabilidad de proporcionar servicios en salud a una población específica, de acuerdo con los planes de garantía que determina el Sistema General de Servicios de Salud –SGSS-.
        p Por otra parte, a nivel de promoción de la salud, intervienen las EPS, los Consejos Departamentales y Distritales, las compañías de seguros para accidente de tráfico, el Fondo de Solidaridad y Garantía de salud -FOSYGA-, las administradoras de planificación en modos especiales, y las ARL, todas estas organizaciones son las encargadas de formular, determinar, implementar y evaluar aquellos planes que son indicados para la promoción de la salud y la prevención de la enfermedad en determinada característica de salud- enfermedad, o en poblaciones específicas de acuerdo con los riesgos de salud que le aquejen. 
        p Todas las organizaciones relacionadas anteriormente, se rigen de acuerdo con los hallazgos encontrados en la caracterización en salud y los determinantes sociales que están presentes en las personas, y comunidades.
      .col-5
        img(src='@/assets/curso/temas/tema1/13.svg')

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .cajon.color-primario.p-4
          p Es necesario tener clara la definición de los determinantes sociales de la salud (DSS). La Organización Mundial de la Salud –OMS- los define como “las circunstancias en que las personas nacen, crecen, trabajan, viven y envejecen, incluido el conjunto más amplio de fuerzas y sistemas que influyen sobre las condiciones de la vida cotidiana” (s.f).
          p Estas fuerzas y sistemas reconocen e incluyen políticas y sistemas de orden económico, además de diferentes programas de desarrollo en el orden no sólo político sino principalmente social, que posibiliten la equidad en el acceso a los servicios de salud. Sin embargo, puede ser inevitable la desigualdad social, así como puede haber diferencias innecesarias y previsibles, por lo que las políticas deben encaminarse hacia la igualdad.




    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Análisis de la situación en salud (ASIS)  

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/14.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 La sigla ASIS que corresponde al Análisis de Situación de Salud, establece los procesos metodológicos que permiten: conocer, caracterizar, medir, explicar, y describir las condiciones de salud y de patología poblacional dentro de la nación, departamento o municipio. Así mismo, son un instrumento clave para seguir en el reconocimiento de los determinantes sociales que intuyen en estas condiciones y en la identificación de las necesidades que son prioritarias para las actividades e intervenciones con efecto en la salud.

    .row.justify-content-center.align-items-center.mb-5
      .col-8 
        p.mb-3 La #[b Resolución 1536 del 2015], en su artículo 9, indica que el ASIS en las entidades territoriales tiene como responsabilidad realizar el análisis teniendo en cuenta los determinantes sociales y el uso de herramientas establecidas por el Ministerio de Salud y Protección Social que se mantienen vigentes, facilitando de esta forma que los aprendices puedan realizar un buen trabajo de campo.
        .cajon.color-primario.p-4.mb-3
          p No olvide tener en cuenta que ASIS, no es una batería de indicadores, como tampoco es un perfil de morbimortalidad.
        p.mb-3 Antes de entrar en materia de los elementos que debe integrar el análisis, es indispensable hacer una introducción en relación al marco normativo que da orden al ASIS. 
        .cajon.color-secundario.p-4
          p Colombia es un país con una fuerte inequidad social, principalmente por división geográfica del territorio que genera diferentes condiciones sociales y económicas, lo que hace muy necesario que el Plan Nacional de Desarrollo –PND- integre estas brechas regionales, entendiendo las necesidades de cada comunidad, e integrando diferentes herramientas que posibiliten el desarrollo económico y social.
        
      .col-4
        img(src='@/assets/curso/temas/tema1/15.png')

    p(data-aos="fade-right").mb-5 Para dar coherencia a lo anterior, se ha dispuesto de regulaciones estatales en el orden de la salud, entre las que se indican como más relevantes las siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/16.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-contenido--borde.p-3(x="7%" y="39%" numero="1")
            h3 Decreto 3518 de 2006
            p Establece entre las funciones del Ministerio de Salud y Protección Social, en relación con el sistema de vigilancia en salud pública, “realizar el análisis de la situación de la salud del país, con base en la información generada por la vigilancia y otras informaciones que permitan definir áreas prioritarias de intervención en salud pública y orientar las acciones de control de los problemas bajo vigilancia”.

          .tarjeta.color-acento-contenido--borde.p-3(x="7%" y="59%" numero="2")
            h3 Ley 1122 de 2007
            p Artículo 33, creó el Plan Nacional de Salud Pública expresado en el Plan Nacional de Desarrollo. Establece la necesidad de contar con un perfil epidemiológico en el que se identifiquen los factores protectores, de riesgo y determinantes, la incidencia y prevalencia de las principales enfermedades que definan las prioridades en salud pública, como insumo para la construcción del PDSP.

          .tarjeta.color-acento-contenido--borde.p-3(x="7%" y="80.5%" numero="3")
            h3 Decreto 3039 de 2007
            p Reglamenta la adopción del Plan Nacional de Salud Pública (PNSP), capítulo IV; expone el Análisis de Situación de Salud y su importancia para la planificación. Capítulo VI; reafirma las responsabilidades de los actores del sector salud a nivel nacional, a nivel departamental, distrital. Y para las entidades promotoras de salud y administradoras de riesgos profesionales.

          .tarjeta.color-acento-contenido--borde.p-3(x="93%" y="39%" numero="4")
            h3 Resolución 425 de 2008
            p Define la metodología para la elaboración, ejecución, seguimiento, evaluación y control del Plan de Salud Territorial, y las acciones que integran el Plan de Salud Pública de Intervenciones Colectivas que están a cargo de las entidades territoriales. Además define dentro de las actividades para la elaboración del proyecto del plan de salud territorial, la construcción del diagnóstico general de la situación de salud territorial.

          .tarjeta.color-acento-contenido--borde.p-3(x="93%" y="59%" numero="5")
            h3 Decreto 4107 de 2011
            p Determina los objetivos y la estructura del Ministerio de la Salud y Protección Social. Dentro de su nueva estructura se creó la Dirección de Epidemiología y Demografía, estableciendo como una de sus funciones la de “promover, orientar y dirigir la elaboración del estudio de la situación de la salud”.

          .tarjeta.color-acento-contenido--borde.p-3(x="93%" y="80.5%" numero="6")
            h3 Resolución 1841 de 2013
            p Adopta el Plan Decenal de Salud Pública 2012-2021 como una apuesta política por la equidad en salud. El Ministerio de Salud y Protección Social, en relación con: la Ley 1438 de 2011, la Ley 715 de 2001 y el Decreto-ley 4107 de 2011.
    
    .row
      .col-lg-6.movil 
        a.anexo.mb-4(:href="obtenerLink('/downloads/marco_normativo_ASIS.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Descargar. Marco normativo de ASIS.

    p(data-aos="fade-right").mb-5 Para la construcción del ASIS de las entidades territoriales, se recomienda abordar los elementos básicos establecidos y explicados en la guía conceptual y metodológica (2014), a continuación, se presentan los más relevantes:

    .row.justify-content-center.mb-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/17.svg' alt='AvatarTop')
          h3 Caracterización contextos territorial y demográfico
          p Contexto territorial: descripción de la localización, características físicas del territorio, accesibilidad geográfica.
          p Contexto demográfico: descripción del tamaño y volumen poblacional
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | Estructura demográfica. 
            li 
              i.fas.fa-check
              | Dinámica demográfica. 
            li 
              i.fas.fa-check
              | Movilidad forzada

        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/18.svg' alt='AvatarTop')
          h3 Efectos sobre la salud
          p Los efectos sobre la salud, abordan la mortalidad por grandes causas, subgrupos en los que se presenta, la materno infantil y en la niñez; luego la morbilidad, y los determinantes que afectan la salud, o que agravan la inequidad en la prestación del servicio.

        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/19.svg' alt='AvatarTop')
          h3 Los determinantes de la salud
          p Determinantes intermediarios de la salud: · Circunstancias materiales. 
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | Factores conductuales, psicológicos y culturales. 
            li 
              i.fas.fa-check
              | Sistema sanitario. 
          p Determinantes estructurales de las inequidades en salud: biológicos, estrato, etnia, raza, nivel educativo, ocupación ingresos.

        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/20.svg' alt='AvatarTop')
          h3 Priorización de los efectos
          p A partir del análisis completo de la mortalidad surgen las prioridades relacionadas: 
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | Mortalidad general y específica; materno infantil y en la niñez. 
            li 
              i.fas.fa-check
              | Causas identificadas causa de mortalidad. 
            li 
              i.fas.fa-check
              | Valor del indicador de la mortalidad en la entidad. territorial, de acuerdo con la semaforización previa.

        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/21.svg' alt='AvatarTop')
          h3 Factores de riesgo y determinantes
          p Las condiciones en que las personas cumplen su ciclo vital, influyen en la salud, la desigualdad social agrava el problema, aunque estas pueden ser evitadas si se trabaja desde lo social, con el fin de fortalecer a las personas y sus comunidades.

    p(data-aos="fade-right").mb-5 Los grupos de riesgo presentes en el territorio nacional que arroja el análisis de la situación de salud, el cual se llevó a cabo por parte del Ministerio de Salud y Protección Social, estableció como principales grupos de riesgo los siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 6.] <em>Análisis y resultados organizados por grupos de riesgo</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/22.svg', alt='La figura 6, presenta el análisis y resultados que enmarcan el modelo integral de atención en salud, teniendo en cuenta las principales enfermedades que deben ser atendidas por dicho el sistema de salud nacional.')
          figcaption Nota. Adaptado de MIAS Modelo Integral de Atención en Salud. MINSALUD (s.f.).

    .row.justify-content-center.align-items-center.mb-5
      .col.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 6.] <em>Análisis y resultados organizados por grupos de riesgo</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/22-m.svg', alt='La figura 6, presenta el análisis y resultados que enmarcan el modelo integral de atención en salud, teniendo en cuenta las principales enfermedades que deben ser atendidas por dicho el sistema de salud nacional.')
          figcaption Nota. Adaptado de MIAS Modelo Integral de Atención en Salud. MINSALUD (s.f.).

    .row.justify-content-center.align-items-center.mb-5
      .col-8 
        p En cuanto a la periodicidad en el ASIS, debe tenerse en cuenta los parámetros establecidos por el Ministerio de Salud y Protección Social, que indica claramente el registro diario o por período para la entrega de informes, lineamiento al cual deben acogerse los municipios, distritos y departamentos del territorio nacional.
        p Esta rendición de acuerdo con lo consignado en la #[b Resolución 1535 del 2015], posibilita entre otros:
        ol.lista-ol--cuadro.mb-5
            li 
              .lista-ol--cuadro__vineta
                span(style="color:#000 !important") <strong>1</strong>
              | Establecer un ASIS, cada vez más riguroso en concordancia con el Plan Decenal de Salud Pública PDSP, el cual se genera cada cuatro años, siguiendo los dictámenes del Ministerio de Salud y de la Protección Social.
            li 
              .lista-ol--cuadro__vineta
                span(style="color:#000 !important") <strong>1</strong>
              | Reajustar el ASIS en todas sus dimensiones, de acuerdo con los resultados de riesgo surgidos durante el proceso, y que obligan a encontrar estrategias de prevención y promoción con el fin de hacer un reconocimiento de los problemas de salud y sus determinantes sociales.
      .col-4
        img(src='@/assets/curso/temas/tema1/23.png')

    p(data-aos="fade-right").mb-5 El ASIS, tiene propósitos definidos, los cuales se regulan mediante la OMS (2002), que en su publicación: “La Salud Pública en las Américas”, indica entre otros aspectos, la necesidad de hacer cumplir las funciones esenciales de la salud pública que son responsabilidad del estado, y para esto acude a varias actividades e instrumentos que permitan valorar la situación del ejercicio de las funciones de la autoridad sanitaria, de esta forma puede identificar fortalezas y debilidades en pro de la mejora del servicio, llegando a definir  claramente el proceso de monitoreo, evaluación y estudio de esta situación de salud en determinadas poblaciones.

    .row.justify-content-center.align-items-center.mb-5
      .col-4
        img(src='@/assets/curso/temas/tema1/24.png')

      .col-8 
        p El valor del ASIS radica en producir la información que los elementos técnico y político necesitan para los procesos de conducción, gerencia y toma de decisiones en salud, prioridades, políticas en salud y la evaluación de su pertinencia y cumplimiento; asimismo, a nivel sanitario, en pro del fortalecimiento de la rectoría en salud, que es un elemento primordial para la gobernanza, la planificación y la conducción de políticas públicas en salud.
        .cajon.color-primario.p-4
          p Antes de la creación de ASIS, los gobiernos tenían dificultad en la priorización de esfuerzos, riesgos, resultados, y estrategias. Actualmente la pregunta no está en qué priorizar, sino en cómo llevarlo a cabo, es decir, cómo      orientar los escasos recursos públicos para un beneficio general. Cuáles intervenciones cubrir, bajo qué circunstancias y a quiénes. Por esta razón, ASIS orienta mediante sus hallazgos hacia una mirada transectorial, evaluando la equidad, con lo cual se da relevancia técnica en la toma de decisiones.
      
    .row.justify-content-center.align-items-center.mb-5
      .col-10
       .cajon.color-secundario.p-4
          p En conclusión, como lo indica la OPS, en su boletín epidemiológico de 1990, 1-3, “los ASIS sirven para la negociación política, la conducción institucional, la movilización de recursos y la diseminación de información en salud. Su meta principal es contribuir a la toma racional de decisiones para la satisfacción de necesidades en salud de la población con un máximo de equidad, eficiencia y participación social”.

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Diferencia entre ASIS, diagnóstico y perfil de morbilidad y mortalidad. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8 
        p Es importante diferenciar los diagnósticos de salud de un análisis de la situación en salud. Pues si bien los procesos no son excluyentes, sino complementarios en búsqueda de solucionar problemas que se presentan en salud; los diagnósticos pertenecen a una fase descriptiva en su desarrollo, mientras que el ASIS es conclusivo y determinante para la toma de decisiones.
        p Como ya se ha indicado el análisis de salud, requiere diferentes etapas reguladas mediante métodos, no así el diagnóstico, que se maneja mediante la observación y el análisis del objeto de estudio. Estos elementos inciden directamente en la elección del plan de acción para tratar males o enfermedades que aquejan a la población.
        p De igual manera los perfiles de morbimortalidad, en sí mismos no tiene la capacidad de hallar desigualdades o inequidades, que posibiliten identificar necesidades o priorizar problemas de salud, y sirven como aporte a los ASIS para la obtención de resultados.
      .col-4
        img(src='@/assets/curso/temas/tema1/25.png')

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Tipos de ASIS. 

    p Se han clasificado los ASIS, de acuerdo con el propósito, la funcionalidad y la fuente de información. 
    p.mb-5 Según el propósito se han identificado dos tipos de análisis de salud, estos son:

    .row.justify-content-center.mb-5
      .col-sm-5.col-xl-5.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/26.png' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 <strong>ASIS de tendencias</strong>
            p La intención es identificar y determinar las condiciones de los factores que se acogen en los procesos de salud y enfermedad de una población mediante un tiempo medio o largo.
            
      .col-sm-5.col-xl-5.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/27.png' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 <strong>ASIS de coyuntura</strong>
            p La intención es identificar y determinar las condiciones de los factores que se acogen en los procesos de salud y enfermedad de una población mediante un tiempo medio o largo.

    p(data-aos="fade-right").mb-5 Según la fuente de información que son los que vigilan los determinantes sociales de una región se encuentran:

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-primario1.p-4(titulo="ASIS Institucionales")
        .row
          .col
            p Permiten conocer la caracterización de las comunidades por ciclos de vida mediante la información recogida en la IPS, por ejemplo, tazas de natalidad y mortalidad.
            p Las acciones e intervenciones basadas en este tipo de ASIS deben posibilitar modificar de alguna forma lo encontrado, así como contribuir en la modificar, de alguna forma, la realidad encontrada, así como contribuir en la puesta en marcha de las políticas de salud.

      .tarjeta.color-primario1.p-4(titulo="ASIS Comunitarios")
        .row
          .col
            p Organizan y jerarquizan los problemas desde la perspectiva de los actores locales de la comunidad. Permiten conocer la situación de salud de la población y los determinantes que intervienen en su producción, la información utilizada proviene de las comunidades, por ejemplo, los problemas priorizados a través de los comités de salud.
            p La importancia de este tipo de ASIS radica en la mediación entre las necesidades de salud manifiestas y su reconocimiento como problema por parte la comunidad.

      .tarjeta.color-primario1.p-4(titulo="ASIS Integrales")
        .row
          .col
            p Involucran los dos tipos anteriores, busca un análisis mediante el diálogo teniendo en cuenta la información disponible en las instituciones de salud y la participación de los actores claves de la comunidad con base en la información que ellos poseen.
            p El ASIS integral permite el abordaje de un problema de salud a partir de todos los determinantes que intervienen en su producción, sean o no competencia del sector salud, así como los puntos de vista que tienen los actores sociales que observan el problema.

    p(data-aos="fade-right").mb-5 El ASIS tipos tendencias, posibilita la observancia de cambios en los procesos de salud-enfermedad en todos los niveles poblacionales del país, que, junto con el análisis integral, se favorece de las bases de datos y fuentes oficiales de información, así como de los datos cualitativos que traducen las vivencias y experiencias de la comunidad en su propio contexto.

    .BGIMG02.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-3.mb-4.mb-md-0
          img(src="@/assets/curso/temas/tema1/28.svg")

        .col-md.col-lg-8
          h3 Guía conceptual y metodológica para la construcción del ASIS de las Entidades Territoriales.
          .titulo-segundo.color-acento-contenido
          p.mb-4 Le invitamos a consultar en el material complementario el correspondiente a la #[b Guía conceptual y metodológica para la construcción del ASIS de las Entidades Territoriales. Colombia 2014].  Este documento orienta sobre la elaboración del estudio de la situación en salud en busca de aprovechar las normas, planes, políticas y proyectos que hay en relación a la salud pública en el país.
          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/guia_conceptual_metodologica_construccion_ASIS.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Desarrollo del plan de intervenciones colectivas

    .row.justify-content-center.align-items-center.mb-5
      .col-8 
        p El Plan de Intervenciones Colectivas –PIC-, trata de un método de beneficios, el cual se encuentra compuesto por las intervenciones de promoción de la salud y gestión del riesgo, estos se encuentran dentro del Plan Territorial de Salud (PTS), con lo cual se impacta de manera positiva los determinantes de la salud y así alcanzar los resultados definidos en éste.
        p El plan de intervenciones consiste en un conjunto de intervenciones, procedimientos, actividades, todos estos elementos se encuentran regularizados mediante la #[b Resolución 518 de 2015], emitida por el Ministerio de Salud y Protección Social, y que se llevan a la ejecución de manera complementaria a otros planes de beneficio, y que son obligatorio cumplimiento por todos los integrantes del Sistema General de Seguridad Social en Salud –SGSSS-. 
        p Fundamentar el plan de intervención colectiva, es necesario para entender los elementos que le regulan, desde la #[b Resolución 0518 del 2015], y la #[b Resolución 1536 del 2015], a continuación, se hace una breve explicación al respecto:
      .col-4
        img(src='@/assets/curso/temas/tema1/29.png')

    .row.justify-content-center.mb-4
      .col
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-secundario2")
          .row(titulo="Conceptualización del PIC")
            .col-12
              p Son las intervenciones tanto individuales como colectivas que se hacen en un territorio teniendo en cuenta los determinantes sociales en salud.

          .row(titulo="Principios del PIC")
            .col-12
              p #[b Estatal:] es dirigido y administrado por el Estado. Su formulación, ejecución, seguimiento y evaluación está a cargo de los Departamentos, Distritos y Municipios de acuerdo con la normatividad vigente, articulado con PDSP y los Planes Territoriales de Salud, dictados por este Ministerio. 
              p #[b Gratuidad:] las intervenciones colectivas que constituyen el PIC son gratuitas y dirigidas a la totalidad de la población. Su ejecución no está sujeta a condiciones de afiliación, periodos mínimos de cotización, copagos, cuotas moderadoras o cuotas de recuperación. 
              p #[b Territorialidad:] es autónomo, se desarrolla en el territorio - departamento, distrito y municipio-. Las intervenciones colectivas que constituyen el PIC las define cada entidad territorial conforme a la situación de salud de la población, las expectativas de los sujetos en relación con su propia salud, el contexto territorial. las directrices nacionales y atendiendo a lo dispuesto en la resolución 0518.

          .row(titulo="Características de calidad de las intervenciones colectivas")
            .col-12
              p #[b Accesibilidad:] no hay barreras psicosociales, económicas, geográficas, culturales, tecnológicas, organizacionales, como tampoco de orden demográfico. 
              p #[b Oportunidad:] identifica e interviene aspectos que potencian la salud de la persona, familia y comunidad. 
              p #[b Seguridad:] potencian la salud de los grupos sociales, evitando el daño o mitigando sus consecuencias, sin poner en riesgo la salud y la vida de los mismos.
              p #[b Pertinencia:] proceden del reconocimiento de condiciones específicas y diferenciales de la población y su realidad desde la efectividad. 
              p #[b Continuidad:] son lógicos y secuenciales, sin interrupción en el tiempo así contribuyen al logro de los resultados. 
              p #[b Integralidad:] coordinación y convergencia de acciones y esfuerzos en la promoción de la salud y gestión del riesgo, centradas en las personas, ante situaciones de salud. 
              p #[b Adaptabilidad:] los contenidos, planeación, ejecución, seguimiento y evaluación, son en función de los resultados del ASIS y los riesgos asociados a este

          .row(titulo="Responsables en la elaboración")
            .col-12
              p Se debe tener en cuenta que el plan de acción territorial, es en donde se establecen los procesos de acción que orientan las actividades, estrategias, metas del plan anual de salud de acuerdo a los recursos disponibles. 
              p Responsables: 
              ul.lista-ul--color
                li 
                  i.fas.fa-check(style="color:#755952")
                  | Ministerio de Salud y Protección Social. 
                li 
                  i.fas.fa-check(style="color:#755952")
                  | Departamento y Distritos. 
                li 
                  i.fas.fa-check(style="color:#755952")
                  | Municipio. 
                li 
                  i.fas.fa-check(style="color:#755952")
                  | Instituciones contratadas para la ejecución del PIC.
          .row(titulo="¿Que contiene el plan de acción?")
            .col-12
              p El PIC hace parte del PTS, debe ser formulado o ajustado de acuerdo con lo establecido en la Ley 152 de 1994 o en la norma que le modifique o sustituya y lo que defina el Ministerio de Salud y Protección Social.
              p Debe contener:
            .col-6
              ul.lista-ul--color
                li 
                  i.fas.fa-check(style="color:#755952")
                  | Año de ejecución. 
                li 
                  i.fas.fa-check(style="color:#755952")
                  | Dimensiones y componentes. 
                li 
                  i.fas.fa-check(style="color:#755952")
                  | Metas vinculadas al PDSP. 
                li 
                  i.fas.fa-check(style="color:#755952")
                  | Estrategias por dimensiones y componentes. 
                li 
                  i.fas.fa-check(style="color:#755952")
                  | Intervenciones, metas, indicadores y recursos por líneas operativas. 
            .col-6
              ul.lista-ul--color
                li 
                  i.fas.fa-check(style="color:#755952")
                  | Actividades. 
                li 
                  i.fas.fa-check(style="color:#755952")
                  | Unidad de medida.
                li 
                  i.fas.fa-check(style="color:#755952")
                  | Valor. 
                li 
                  i.fas.fa-check(style="color:#755952")
                  | Responsable del cumplimiento.

    p(data-aos="fade-right").mb-5 Las intervenciones en salud deberán estar desagregadas por las líneas operativas del Plan Decenal De Salud Pública PDSP, en consistencia con la promoción de la salud, la gestión del riesgo en salud, la gestión de la salud pública. 

    .BGIMG02.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-3.mb-4.mb-md-0
          img(src="@/assets/curso/temas/tema1/28.svg")

        .col-md.col-lg-8
          h3 Material complementario la resolución 0518 de 2015.
          .titulo-segundo.color-acento-contenido
          p Le invitamos a consultar en el material complementario el correspondiente a la #[b Resolución 0518 de 2015]. 
          p.mb-4 Con el fin de ampliar la información respecto a la Gestión Pública y las directrices para la ejecución, seguimiento y evaluación del Plan de Salud Pública de Intervenciones Colectivas – PIC, se hace extensiva invitación para que consulte la resolución emitida por el Ministerios de Salud y Protección Social.  
          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/resolucion_0518_2015.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

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
