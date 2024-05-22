var lbii_currentscreeninglist = [
  {month: 'JUNIO', month_en: 'JUNE', month_num: 6 },
  {month: 'JULIO', month_en: 'JULY', month_num: 7 },
  {month: 'OCTUBRE', month_en: 'OCTOBER', month_num: 10 },
  {month: 'NOVIEMBRE', month_en: 'NOVEMBER', month_num: 11 }
]


var lbii_films = [
  {
      id: 1,
      type: 'feature',
      gallery: ['film1_1.jpg', 'film1_2.jpg', 'film1_3.jpg'],
      film: {
          name: 'YŪREI (FANTASMAS)',
          country: 'México',
          year: '2022',
          director: 'Sumei García Hirata',
          script: 'Sumei García Hirata y Óscar Velázquez Lanzázuri',
          photo: '',
          duration: '83',
          rating: 'A',
          synopsis: 'La historia velada de los mexicanos japoneses y el impacto perdurable del silencio histórico en sus descendientes se retrata a través de una exploración espacial y coreográfica, cuestionando la formación y teatralidad de la identidad individual y colectiva.',
          synopsis_en: 'The veiled history of Japanese Mexicans and the lasting impact of historical silence on their descendants is portrayed through a spatial and choreographic exploration, questioning the formation and theatricality of individual and collective identity.'
      }
  },
  {
      id: 2,
      type: 'feature',
      gallery: ['film2_1.jpg', 'film2_2.jpg', 'film2_3.jpg'],
      film: {
          name: 'CHÈCHE LAVI: BUSCANDO UNA VIDA',
          country: 'Estados Unidos, México, Haití',
          year: '2019',
          director: 'Sam Ellison',
          script: '',
          photo: 'Sam Ellison',
          duration: '76',
          rating: '',
          synopsis: 'La hermandad de dos inmigrantes haitianos es probada cuando se quedan atrapados en el caos geopolítico de la frontera entre México y los Estados Unidos. Sin ninguna posibilidad de avanzar y nadie a quien recurrir, sus difíciles decisiones llevan a los dos amigos a futuros muy diferentes.',
          synopsis_en: 'The brotherhood of two Haitian immigrants is tested when they become trapped in the geopolitical chaos of the border between Mexico and the United States. With no chance to move forward and no one to turn to, their difficult decisions lead the two friends to very different futures.'
      }
  },
  {
      id: 3,
      type: 'feature',
      gallery: ['film3_1.jpg', 'film3_2.jpg', 'film3_3.jpg'],
      film: {
          name: 'LOS HÁMSTERS',
          country: 'México',
          year: '2014',
          director: 'Gilberto González Penilla',
          script: 'Gilberto González Penilla y Carlos Rodríguez Rodríguez',
          photo: 'Juan Pablo Ramírez',
          duration: '71',
          rating: '',
          synopsis: 'Rodolfo y Beatriz son padres de dos jóvenes: Jessica y Juan, juntos forman la perfecta familia disfuncional. Rodolfo sale todos los días como si fuera al trabajo, pero en realidad está desempleado. Beatriz, quien se encuentra en medio de una crisis por la edad, es seducida en el gimnasio. Jessica juega un triángulo amoroso entre su novio y su mejor amiga. Y Juan, se entera que será papá. Una familia común tijuanense en la que cada uno esconde sus secretos a pesar de vivir bajo el mismo techo.',
          synopsis_en: 'Rodolfo and Beatriz are parents to two young adults: Jessica and Juan, together they form the perfect dysfunctional family. Rodolfo leaves every day as if he were going to work, but in reality, he is unemployed. Beatriz, who is in the midst of a midlife crisis, is seduced at the gym. Jessica plays out a love triangle between her boyfriend and her best friend. And Juan finds out he\'s going to be a father. A typical Tijuana family where everyone hides their secrets despite living under the same roof.'
      }
  },
  {
      id: 4,
      type: 'short',
      gallery: ['film4_1.jpg', 'film4_2.jpg', 'film4_3.jpg'],
      film: {
          name: 'EL PEREGRINO',
          country: 'México',
          year: '2022',
          director: 'Rodrigo Ruiz Patterson',
          script: 'Rodrigo Ruiz Patterson y Odei Zabaleta',
          photo: 'Odei Zabaleta',
          duration: '18',
          rating: '',
          synopsis: 'El cuidador de un rancho en medio de la nada presencia un extraño evento que hace que dos hombres misteriosos en una camioneta negra empiecen a seguirlo.',
          synopsis_en: 'The caretaker of a ranch in the middle of nowhere witnesses a strange event that causes two mysterious men in a black truck to start following him.'
      }
  },
  {
      id: 5,
      type: 'short',
      gallery: ['film5_1.jpg', 'film5_2.jpg', 'film5_3.jpg'],
      film: {
          name: 'LO QUE DEJAMOS EN EL MAR',
          country: '',
          year: '--',
          director: 'Guido Turtula',
          script: 'Florencia Goulu y Guido Turtula',
          photo: '',
          duration: '',
          rating: '',
          synopsis: 'A un año de mudarse a Los Cabos, la pandemia y el encierro ponen en jaque a una pareja que se desintegra en una ciudad que no es la suya.',
          synopsis_en: 'One year after moving to Los Cabos, the pandemic and confinement put a strain on a couple who are falling apart in a city that is not their own.'
      }
  },
  {
    id: 6,
    type: 'short',
    gallery: ['film6_1.jpg'],
    film: {
        name: 'TIBURONES DEL MAR DE CORTÉS: ¿UN TESORO PERDIDO?',
        country: '-',
        year: '--',
        director: '-',
        script: '-',
        photo: '-',
        duration: '-',
        rating: '-',
        synopsis: '-',
        synopsis_en: '-'
    }
}
];





  var lbii_venues = [
    {
        id: 1,
        name: 'Centro Estatal de Las Artes Tijuana (CEART)',
        description: '<p>Inaugurado el 19 de abril de 2013, el CEART consta de un complejo arquitectónico integrado por seis edificios y una explanada con capacidad para recibir a 2,000 personas. Su misión es contribuir a la construcción de una sociedad con mayor sentido, en respeto a las diferentes expresiones multiculturales y étnicas, en un clima de tolerancia, aceptación, equidad y justicia, así como implementar modelos educativos de excelencia, para el desarrollo profesional de artistas, creadores, gestores culturales, promotores y docentes de arte.</p><p>Su programación artística consta de un Foro Experimental para la realización de conferencias, obras de teatro, danza y eventos musicales. También cuenta con el espacio <strong>Cinema CEART Tijuana</strong>, donde constantemente ofrece proyecciones de cine de manera gratuita.</p>',
        description_en: '---',
        calendarLink: 'https://example.com/calendar/teatro-de-la-marina',
        address: 'Vía Rápida Ote. 15320, Rio Tijuana 3ra Etapa, 22105 Tijuana, B.C.',
        googleMapsLink: 'https://maps.app.goo.gl/NDd8RCj4mfQGUs2V9',
        imageName: 'ceart.jpg'
    },
    {
        id: 2,
        name: 'Centro Cultural Tijuana (CECUT)',
        description: '<p>El CECUT es un centro cultural de México en la frontera, fundado el 20 de octubre de 1982. Tiene el compromiso de satisfacer las necesidades artísticas y culturales de la región norte del país, a través de programas que incluyen diversas manifestaciones artísticas y temas de la cultura tradicional y contemporánea.</p><p>Sus instalaciones se integran de la siguiente manera: Domo IMAX, Museo de las Californias, Sala de Espectáculos, El Cubo (tres salas de estándares internacionales), Salas de Exposiciones Temporales, <strong>Cineteca</strong>, Acuario, Salones de Ensayo, entre otras. Sumando una superficie de 3.5 hectáreas, ubicado a dos kilómetros de la frontera con Estados Unidos, es el símbolo de mayor reconocimiento con que se identifica a Tijuana y a los tijuanenses.</p>',
        description_en: '---',
        calendarLink: 'https://example.com/calendar/centro-cultural-cabo',
        address: 'P.º de los Héroes 9350, Zona Urbana Rio Tijuana, 22010 Tijuana, B.C.',
        googleMapsLink: 'https://maps.app.goo.gl/ckPHfpkpEuBiJMUy8',
        imageName: 'cecut.jpg'
    },
    {
        id: 3,
        name: 'Cinema Vagabundo',
        description: '<p>Cineclub fundado en agosto del 2011. Ubicado en el Pabellón Cultural de Cabo San Lucas, su propósito es brindar un espacio a películas independientes o de poca difusión en salas comerciales. Uno de sus objetivos principales es incentivar la creación de materiales audiovisuales locales; como cortometrajes, cineminutos, mediometrajes y largometrajes de ficción, así como documentales. El nombre de vagabundo, surge de su esencia itinerante.</p><p>A lo largo de los ya casi 13 años de exhibición, ha contado con la presencia de actores  como: Joaquín Cosío, Tenoch Huerta, Arcelia Ramirez y recientemente Adan Jodorowsky. Los creadores de Cinema Vagabundo también son fundadores de CEDECINE, una comunidad nacional de cineclubes conformada en los estudios churubusco.</p><p>Han proyectado en gran parte de Baja California Sur; San José del Cabo, Todos Santos, San Javier, Loreto, Mulegé, San Francisco de la Sierra, San Ignacio, entre otros.</p>',
        description_en: '---',
        calendarLink: 'https://example.com/calendar/sala-bahia',
        address: 'Blvd. Paseo de la Marina, Centro, 23450 Cabo San Lucas, B.C.S.',
        googleMapsLink: 'https://maps.app.goo.gl/NswKTbRnAaqgqHu86',
        imageName: 'cinema_vagabundo.jpg'
    },
    {
        id: 4,
        name: 'MUABCS (Museo de Arte de Baja California Sur)',
        description: '<p>El Museo de Arte de Baja California Sur es el primer espacio en el territorio sudcaliforniano dedicado y equipado para recibir, montar y mostrar arte moderno y arte contemporáneo, además de la sala dedicada a la plástica sudcaliforniana. Sus instalaciones se encuentran en lo que fue la primera Casa de Gobierno reconstruida en 1981. A partir de 2019 se inician los trabajos de ampliación para albergar al MUABCS.</p><p>En coordinación con el Museo de Arte Moderno de la Ciudad de México, el MUABCS se inauguró con la exposición “Paisajes”, colección MAM. Esta exposición se conformó con la obra de reconocidos artistas como Manuel Álvarez Bravo, Rufino Tamayo, Juan Soriano, Carlos Mérida, entre otros; de la generación de La Ruptura se encuentran Lilia Carrillo, Gunther Gerzso y Vicente rojo; una foto icónica de Graciela Iturbide y autores contemporáneos como Helen Escobedo, Gabriel Orozco, Carla Rippey y Daniel Lezama.</p><p><strong>Cuenta con una sala audiovisual para 59 personas.</strong></p>',
        description_en: '---',
        calendarLink: 'https://example.com/calendar/auditorio-costero',
        address: 'Cl. 5 de Mayo SN-S"BANCO VITAL", Zona Central, 23000 La Paz, B.C.S.',
        googleMapsLink: 'https://maps.app.goo.gl/SnCFQb4Knn6Yit9F7',
        imageName: 'muabcs.jpg'
    },
    {
        id: 5,
        name: 'Museo del Vaquero de las Californias',
        description: '<p>MUVACA es un espacio que muestra historias cruciales de los orígenes de la cultura vaquera y ranchera en las Californias. Este museo se adentra en el estilo de vida e identidad de los vaqueros, así como en las tradiciones que se mantienen vivas hasta nuestros días gracias a las familias que viven en distintas regiones de Baja California Sur.</p><p>Facebook: Museo del Vaquero de las Californias</p><p>Instagram: @museo_muvaca</p>',
        description_en: '---',
        calendarLink: 'https://example.com/calendar/plaza-del-arte',
        address: 'Calle Ayuntamiento, Minero Núm. 1 esq, 23210 El Triunfo, B.C.S.',
        googleMapsLink: 'https://maps.app.goo.gl/Qbfa4DriNu1qydSz5',
        imageName: 'museo_vaquero_californias.jpg'
    },
    {
        id: 6,
        name: 'Museo Ruta de Plata',
        description: '<p>El Museo Ruta de Plata Centro Regional Interpretativo está dedicado a preservar y compartir la historia minera de Baja California Sur, así como las migraciones, vivencias de las personas que han habitado el lugar, desde los primeros colonos, a mediados de los años 1500, hasta los años del auge minero de la región.</p><p>Facebook: Museo Ruta de Plata Centro Regional Interpretativo</p><p>Instagram: @museorutadeplata</p>',
        description_en: '---',
        calendarLink: 'https://example.com/calendar/salon-de-pueblo',
        address: 'Calle Ayuntamiento (Progreso y, Gral. M. Márquez de León, Centro, 23210 El Triunfo, B.C.S.',
        googleMapsLink: 'https://maps.app.goo.gl/MzAKrBTiKW3psd2v8',
        imageName: 'museo_ruta_plata.jpg'
    },
    {
        id: 7,
        name: 'Playa Costa Azul',
        description: '<p>La Playa Costa Azul es uno de los lugares favoritos de los amantes del surf. Corre a lo largo de la Carretera Transpeninsular en la costa suroeste de San José del Cabo, lo que la convierte en un lugar privilegiado para que la Liga Mundial de Surf realice su apertura anual todos los años en junio. También es un hermoso lugar para practicar snorkel o simplemente para disfrutar de una caminata en la playa.</p>',
        description_en: '---',
        calendarLink: 'https://example.com/calendar/salon-de-pueblo',
        address: 'Baja California Sur',
        googleMapsLink: 'https://maps.app.goo.gl/cL143xmGiBGPXW4EA',
        imageName: 'playa_costa_azul.jpg'
    },
    {
        id: 8,
        name: 'Plaza Mijares',
        description: '<p>Ubicada en el corazón de San José del Cabo, Plaza Mijares está rodeada de edificios históricos como el Ayuntamiento, la iglesia de San José y la Casa de la Cultura, además del atractivo kiosko, la asta bandera y el jardín de caballeros ilustres. También cuenta con un anfiteatro al aire libre donde se llevan a cabo una variedad de eventos culturales. Es conocida por los lugareños como La Plaza y es un punto de encuentro popular entre los residentes y turistas.</p>',
        description_en: '---',
        calendarLink: 'https://example.com/calendar/salon-de-pueblo',
        address: 'Blvd. Antonio Mijares, Centro, 23400 San José del Cabo, B.C.S.',
        googleMapsLink: 'https://maps.app.goo.gl/w7X2AbczvqQe7WKRA',
        imageName: 'plaza_mijares.jpg'
    },
    {
        id: 9,
        name: 'Universidad Autónoma de Baja California Sur (UABCS)',
        description: '<p>Creada el 31 de diciembre de 1975, la Universidad Autónoma de Baja California Sur (UABCS) es la institución de educación superior con más variedad disciplinar y de niveles educativos en Sudcalifornia al ofrecer programas de tecnicatura superior universitaria, licenciaturas, ingenierías, maestrías y doctorados en las áreas de conocimiento de ciencias sociales y humanidades, ciencias del mar y de la tierra, ciencias agropecuarias, y sistemas computacionales.</p><p>En el ámbito de la docencia, la Universidad ha aumentado y diversificado significativamente sus servicios educativos en los cinco municipios de la entidad a través del campus La Paz y cuatro extensiones académicas: Guerrero Negro, Loreto, Ciudad Insurgentes, y Los Cabos.</p><p><strong>Cuenta con una sala de cine</strong>, un espacio creado para que los y las estudiantes puedan disfrutar de una película, que comúnmente no podrían encontrar en otros cines comerciales. Y siempre aprender cosas nuevas con cada proyección.</p><p>Facebook: Sala de cine UABCS</p><p>Instagram: UABCS_sala de cine</p>',
        description_en: '---',
        calendarLink: 'https://example.com/calendar/salon-de-pueblo',
        address: 'Avenida de la Juventud 17, Juárez, 23460 Cabo San Lucas, B.C.S.',
        googleMapsLink: 'https://maps.app.goo.gl/XBchtNXNJ5tFUnjd6',
        imageName: 'uabcs.jpg'
    },
    {
        id: 10,
        name: 'Universidad de Tijuana',
        description: '',
        description_en: '---',
        calendarLink: 'https://example.com/calendar/salon-de-pueblo',
        address: 'Parcela No. 4772 P 1/3 Km. 6.5 Carretera Cabo San Lucas – San José del Cabo El Tezal, 23400 Cabo San Lucas, B.C.S.',
        googleMapsLink: 'https://maps.app.goo.gl/pfusZMiEz4ert6nQ6',
        imageName: 'universidad_tijuana.jpg'
    },
    {
        id: 11,
        name: 'Cineclub El Nido',
        description: '',
        description_en: '---',
        calendarLink: 'https://example.com/calendar/salon-de-pueblo',
        address: 'Baja California Sur',
        googleMapsLink: 'https://maps.app.goo.gl/T2syBchnCvd6BWV29',
        imageName: 'cineclub_el_nido.jpg'
    }
  ];

  var lbii_screenings = [
    {
        filmId: 1,
        venueId: 1,
        dateTime: '2024-06-05T18:00:00'
    },
    {
        filmId: 1,
        venueId: 1,
        dateTime: '2024-06-06T18:00:00'
    },
    {
        filmId: 1,
        venueId: 1,
        dateTime: '2024-06-07T18:00:00'
    },
    {
        filmId: 2,
        venueId: 2,
        dateTime: '2024-06-10T19:30:00'
    },
    {
        filmId: 3,
        venueId: 3,
        dateTime: '2024-06-15T17:00:00'
    },
    {
        filmId: 4,
        venueId: 4,
        dateTime: '2024-07-05T18:00:00'
    },
    {
        filmId: 5,
        venueId: 5,
        dateTime: '2024-07-10T19:30:00'
    },
    {
        filmId: 6,
        venueId: 6,
        dateTime: '2024-07-15T17:00:00'
    },
    {
        filmId: 1,
        venueId: 1,
        dateTime: '2024-10-05T18:00:00'
    },
    {
        filmId: 2,
        venueId: 2,
        dateTime: '2024-10-10T19:30:00'
    },
    {
        filmId: 3,
        venueId: 3,
        dateTime: '2024-10-15T17:00:00'
    },
    // Noviembre vacío o próximo a anunciar
];