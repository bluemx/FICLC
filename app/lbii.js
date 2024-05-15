var lbii_currentscreeninglist = [
  {month: 'JUNIO', month_en: 'JUNE', month_num: 6 },
  {month: 'JULIO', month_en: 'JULY', month_num: 7 },
  {month: 'OCTUBRE', month_en: 'OCTOBER', month_num: 10 },
  {month: 'NOVIEMBRE', month_en: 'NOVEMBER', month_num: 11 }
]


var lbii_films = [
    {
      id: 1,
      film: {
        name: 'Cabo desesperación',
        country: 'México',
        year: '2023',
        director: 'Juan Javier Maen',
        script: 'Carlos Aguirre',
        photo: 'Grabiel Mendoza',
        duration: '110',
        rating: 'B',
        synopsis: 'En “Cabo Desesperación”, la vida de María, interpretada por Camila Sánchez, se ve sacudida por el naufragio de su esposo, interpretado por Javier Morales, frente a la costa de Los Cabos. Atormentada por la incertidumbre y la pérdida, María se sumerge en un viaje emocional por las playas soleadas y los paisajes impresionantes de México en busca de respuestas y consuelo. Con la ayuda de su amiga Ana, encarnada por Gabriela Rojas, y el apoyo inesperado de Juan, interpretado por Carlos Martínez, María se enfrenta a sus miedos más profundos mientras lucha por encontrar la paz interior en medio de la desolación.',
        synopsis_en: 'In “Cabo Desesperación,” the life of María, played by Camila Sánchez, is shaken by the shipwreck of her husband, played by Javier Morales, off the coast of Los Cabos. Haunted by uncertainty and loss, María embarks on an emotional journey through the sunny beaches and stunning landscapes of Mexico in search of answers and solace. With the help of her friend Ana de ella, played by Gabriela Rojas, and the unexpected support of Juan, played by Carlos Martínez, María faces her deepest fears as she struggles to find inner peace in the midst of the desolation.'
      }
    },
    {
      id: 2,
      film: {
        name: 'Navegando en Papel',
        country: 'México',
        year: '2022',
        director: 'Elena García',
        script: 'Luis Rodríguez',
        photo: 'Grabiel Mendoza',
        duration: '95',
        rating: 'A',
        synopsis: 'En “Navegando en Papel”, Lucas, un joven creativo, construye un barco de papel que lo lleva a una aventura inesperada en un océano surrealista hecho de papel. En este viaje, enfrentará desafíos extraordinarios y descubrirá lecciones sobre coraje y el poder de la imaginación.',
        synopsis_en: 'In “Sailing on Paper,” Lucas, a young creative, builds a paper boat that takes him on an unexpected adventure in a surreal ocean made of paper. On this journey, he will face extraordinary challenges and learn lessons about courage and the power of imagination.'
      }
    },
    {
      id: 3,
      film: {
        name: 'Trotando en la Arena',
        country: 'México',
        year: '2024',
        director: 'Ana López',
        script: 'Diego Ramírez',
        photo: 'Grabiel Mendoza',
        duration: '120',
        rating: 'B',
        synopsis: 'En "Trotando en la Arena", la vida de Pablo, un joven jinete apasionado por los caballos, se encuentra en un viaje de autodescubrimiento mientras entrena en las playas de Baja California. Enfrentándose a desafíos tanto personales como atléticos, Pablo se embarca en un viaje emocionante y emotivo hacia la realización de sus sueños mientras forja una conexión única con su noble corcel.',
        synopsis_en: 'In "Trotting in the Sand," the life of Pablo, a young horse enthusiast, is on a journey of self-discovery while training on the beaches of Baja California. Facing both personal and athletic challenges, Pablo embarks on an exciting and emotional journey towards the realization of his dreams while forging a unique connection with his noble steed.'
      }
    },
    {
      id: 4,
      film: {
        name: 'El Hombre en la Orilla',
        country: 'México',
        year: '2023',
        director: 'Sofía García',
        script: 'Manuel Pérez',
        photo: 'Grabiel Mendoza',
        duration: '105',
        rating: 'B',
        synopsis: 'En "El Hombre en la Orilla", Diego, cuya mirada perdida en el horizonte de una playa esconde más que solo pensamientos, se encuentra con una misteriosa mujer, desencadenando una serie de eventos que desafían su percepción de la realidad y lo llevan a enfrentar sus más profundos temores y deseos.',
        synopsis_en: 'In "The Man on the Shore," Diego, whose lost gaze on the horizon of a beach hides more than just thoughts, encounters a mysterious woman, triggering a series of events that challenge his perception of reality and lead him to confront his deepest fears and desires.'
      }
    },
    {
      id: 5,
      film: {
        name: 'Bajo el Sol',
        country: 'México',
        year: '2022',
        director: 'Alejandro Gómez',
        script: 'Ana Martínez',
        photo: 'Grabiel Mendoza',
        duration: '115',
        rating: 'A',
        synopsis: 'En "Bajo el Sol", Ana, una joven en busca de paz, encuentra un mensaje en una botella en una playa del Caribe. Este hallazgo desencadena un viaje emocional donde Ana descubre secretos enterrados en la arena y encuentra el amor bajo el cálido sol tropical.',
        synopsis_en: 'In "Under the Sun," Ana, a young woman in search of peace, finds a message in a bottle on a Caribbean beach. This discovery triggers an emotional journey where Ana uncovers secrets buried in the sand and finds love under the warm tropical sun.'
      }
    },
    {
      id: 6,
      film: {
        name: 'A la Deriva',
        country: 'México',
        year: '2021',
        director: 'Pedro Ramírez',
        script: 'María Sánchez',
        photo: 'Grabiel Mendoza',
        duration: '100',
        rating: 'B',
        synopsis: 'En "A la Deriva", un joven marinero llamado Carlos se embarca en una aventura solitaria en alta mar para escapar de los confines de su vida cotidiana. Sin embargo, cuando una tormenta inesperada lo deja a la deriva, Carlos se enfrenta a su mayor desafío hasta el momento: sobrevivir en un océano implacable mientras lucha por encontrar su camino de regreso a casa y a sí mismo.',
        synopsis_en: 'In "Adrift," a young sailor named Carlos embarks on a solitary adventure on the high seas to escape the confines of his everyday life. However, when an unexpected storm leaves him adrift, Carlos faces his greatest challenge yet: surviving in a relentless ocean while struggling to find his way back home and to himself.'
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