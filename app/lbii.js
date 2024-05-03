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
        name: 'Teatro de la Marina',
        description: 'Un elegante teatro ubicado en el corazón de la Marina de Cabo San Lucas, con capacidad para 150 personas.',
        description_en: 'An elegant theater located in the heart of Cabo San Lucas Marina, with a seating capacity of 150 people.',
        calendarLink: 'https://example.com/calendar/teatro-de-la-marina',
        address: 'Calle del Paseo Marítimo, #15, Colonia Marina, Cabo San Lucas, BCS 23450, México',
        googleMapsLink: 'https://goo.gl/maps/abc123',
        imageName: 'teatro_de_la_marina.jpg'
    },
    {
        id: 2,
        name: 'Centro Cultural Cabo',
        description: 'Un espacio cultural vibrante que ofrece una variedad de eventos y actividades para la comunidad local, incluyendo proyecciones de cine, exposiciones de arte y presentaciones musicales.',
        description_en: 'A vibrant cultural space that offers a variety of events and activities for the local community, including film screenings, art exhibitions, and musical performances.',
        calendarLink: 'https://example.com/calendar/centro-cultural-cabo',
        address: 'Calle de la Cultura, #20, Centro, Cabo San Lucas, BCS 23410, México',
        googleMapsLink: 'https://goo.gl/maps/def456',
        imageName: 'centro_cultural_cabo.jpg'
    },
    {
        id: 3,
        name: 'Sala Bahía',
        description: 'Un acogedor salón de eventos con vistas panorámicas al mar, ideal para proyecciones de cine al aire libre y eventos especiales.',
        description_en: 'A cozy event hall with panoramic views of the sea, ideal for outdoor film screenings and special events.',
        calendarLink: 'https://example.com/calendar/sala-bahia',
        address: 'Avenida de la Bahía, #5, Cabo San Lucas, BCS 23453, México',
        googleMapsLink: 'https://goo.gl/maps/ghi789',
        imageName: 'sala_bahia.jpg'
    },
    {
        id: 4,
        name: 'Auditorio Costero',
        description: 'Un impresionante auditorio al aire libre situado junto a la costa, que ofrece una experiencia única de cine bajo las estrellas.',
        description_en: 'An impressive open-air auditorium located by the coast, offering a unique cinema experience under the stars.',
        calendarLink: 'https://example.com/calendar/auditorio-costero',
        address: 'Paseo del Litoral, #10, Cabo San Lucas, BCS 23456, México',
        googleMapsLink: 'https://goo.gl/maps/jkl012',
        imageName: 'auditorio_costero.jpg'
    },
    {
        id: 5,
        name: 'Plaza del Arte',
        description: 'Una encantadora plaza rodeada de galerías de arte y estudios de artistas, donde se celebran proyecciones de cine al aire libre y eventos culturales.',
        description_en: 'A charming square surrounded by art galleries and artist studios, where outdoor film screenings and cultural events are held.',
        calendarLink: 'https://example.com/calendar/plaza-del-arte',
        address: 'Calle de la Artesanía, #30, Centro, Cabo San Lucas, BCS 23412, México',
        googleMapsLink: 'https://goo.gl/maps/mno345',
        imageName: 'plaza_del_arte.jpg'
    },
    {
        id: 6,
        name: 'Salón de Pueblo',
        description: 'Un salón comunitario multifuncional que sirve como centro de reunión para eventos locales, incluyendo proyecciones de cine, conciertos y fiestas.',
        description_en: 'A multifunctional community hall that serves as a gathering place for local events, including film screenings, concerts, and parties.',
        calendarLink: 'https://example.com/calendar/salon-de-pueblo',
        address: 'Calle de la Comunidad, #40, Pueblo Nuevo, Cabo San Lucas, BCS 23478, México',
        googleMapsLink: 'https://goo.gl/maps/pqr901',
        imageName: 'salon_de_pueblo.jpg'
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