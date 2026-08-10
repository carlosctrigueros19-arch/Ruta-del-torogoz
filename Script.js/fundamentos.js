// ============================================================
// RUTA DEL TOROGOZ — fundamentos.js
// ============================================================

const lugares = {
  "puerta-del-diablo": {
    nombre: "Puerta del Diablo",
    imagenBanner: "assets/img/PUERDIA-INFOLUG.jpg", // 👈 pon aquí el nombre real de tu foto de banner (puede ser distinta a la de la tarjeta)
    ubicacion: "Calle a Mil Cumbres, Cantón El Cedro, municipio de Panchimalco, departamento de San Salvador, a menos de 30 minutos de la capital.",
    sobreElLugar: "Un icónico peñón formado por dos grandes monolitos —El Chulo y El Chulito— que al recibir la luz del sol parecen encenderse. Es uno de los destinos más emblemáticos de El Salvador para senderismo, escalada y vistas panorámicas, gestionado por el ISTU, y reabrió con instalaciones renovadas tras varios años de cierre.",
    actividades: ["Senderismo", "Escalada y rappel", "Canopy", "Mirador de cristal"],
    horario: "Todos los días, de 8:00 a.m. a 10:00 p.m. El acceso a los peñones está permitido hasta las 5:00 p.m.",
    costo: "Entrada al parque, zona de comida y miradores: gratis. Escalar los peñones: $1.50 salvadoreños, $3.00 extranjeros.",
    regresarA: "index.html"   // 👈 este lugar está en las 6 tarjetas de Inicio
  },

  "joya-de-ceren": {
    nombre: "Joya de Cerén",
    imagenBanner: "assets/img/JOYCER-INFOLUG.jpg", // 👈 pon aquí el nombre real de tu foto de banner
    ubicacion: "Km 35, carretera a San Juan Opico, cantón Joya de Cerén, municipio de San Juan Opico, departamento de La Libertad, a unos 36 km de San Salvador.",
    sobreElLugar: "Declarado Patrimonio de la Humanidad por la UNESCO, es el único sitio arqueológico mesoamericano que muestra cómo vivía una comunidad agrícola maya común. El pueblo quedó sepultado por la erupción del volcán Loma Caldera hace más de 1,400 años, preservando casas, cultivos, utensilios y hasta un temazcal, ganándose el apodo de \"la Pompeya de América\".",
    actividades: ["Recorrido guiado", "Museo de sitio", "Réplica de temazcal"],
    horario: "Martes a domingo, de 9:00 a.m. a 4:00 p.m. Cerrado los lunes.",
    costo: "Nacionales: $1.00 · Centroamericanos: $3.00 · Extranjeros residentes: $7.00 · Extranjeros no residentes: $10.00. Estacionamiento: $1.00. Estudiantes con carné, menores de 12 años y adultos mayores: entrada gratis.",
    regresarA: "index.html"   // 👈 este lugar está en las 6 tarjetas de Inicio
  },

  "lago-de-coatepeque": {
    nombre: "Lago de Coatepeque",
    imagenBanner: "assets/img/LAGCOA-INFOLUG.jpg", // 👈 pon aquí el nombre real de tu foto de banner
    ubicacion: "Departamento de Santa Ana, dentro del complejo volcánico de Santa Ana.",
    sobreElLugar: "Uno de los destinos naturales más reconocidos de El Salvador, formado en un antiguo cráter volcánico. Sus aguas turquesa, rodeadas de montañas verdes, lo convierten en un punto ideal para relajarse, hacer actividades acuáticas y disfrutar de vistas panorámicas. El lago también cuenta con zonas de aguas termales naturales de origen volcánico.",
    actividades: ["Kayak", "Jet ski", "Tours en lancha", "Aguas termales"],
    dayPass: "Villas Noelia, Cardedeu Residence y Hotel Equinoccio ofrecen day pass. Precios y condiciones varían, confirma directamente con el lugar.",
    regresarA: "index.html"   // 👈 este lugar está en las tarjetas de Lugares
  },

  "volcan-de-santa-ana": {
    nombre: "Volcán de Santa Ana",
    imagenBanner: "assets/img/VOLSAN-INFOLUG.jpg", // 👈 pon aquí el nombre real de tu foto de banner
    ubicacion: "Departamento de Santa Ana, dentro del Parque Nacional Los Volcanes, con acceso por Cerro Verde. Es el volcán más alto de El Salvador, con 2,384 metros.",
    sobreElLugar: "Conocido también como Ilamatepec, es uno de los monumentos naturales más emblemáticos del país. La ruta atraviesa bosque nuboso y culmina en un cráter con una laguna turquesa impresionante. Desde la cima, en días despejados, se puede ver el Lago de Coatepeque, el Volcán de Izalco, el Volcán Cerro Verde e incluso el Océano Pacífico.",
    actividades: ["Senderismo guiado", "Mirador al cráter", "Vista al Izalco"],
    avisoTitulo: "Sube con guía autorizado",
    aviso: "El ascenso es obligatorio con guía, en grupos con horario de salida. Ingreso de 7:30 a.m. a 11:00 a.m.",
    costo: "Aproximadamente $1.00–$1.50 salvadoreños y $3.00–$6.00 extranjeros, más tarifa de guía (~$4.00). Confirma el monto vigente antes de tu visita.",
    regresarA: "index.html"   // 👈 confírmame si está en Inicio o en Lugares
  },

  "playa-punta-roca": {
    nombre: "Playa Punta Roca",
    imagenBanner: "assets/img/PLAPUN-INFOLUG.jpg", // 👈 pon aquí el nombre real de tu foto de banner
    ubicacion: "En las afueras del Puerto de La Libertad, departamento de La Libertad, sobre la costa del Pacífico, a unos 20 km de San Salvador.",
    sobreElLugar: "Considerada por expertos como una de las 10 mejores olas del mundo para surfear, con una derecha que rompe sobre fondo rocoso, ideal para surfistas de nivel intermedio-avanzado. Es la joya del corredor \"Surf City\", en la costa de La Libertad. El acceso y el parqueo son gratuitos, lo que la vuelve un espacio accesible para surfear o pasar el día en la playa.",
    actividades: ["Surf", "Picnic frente al mar", "Competencias de surf", "Atardecer"],
    avisoTitulo: "Recomendado para surfistas con experiencia",
    aviso: "La ola rompe sobre fondo rocoso, por lo que no es la mejor opción para principiantes.",
    costo: "Acceso y parqueo gratuitos.",
    regresarA: "index.html"   // 👈 confírmame si está en Inicio o en Lugares
  },

  "playa-los-cobanos": {
    nombre: "Playa Los Cóbanos",
    imagenBanner: "assets/img/LOSCOB-INFOLUG.jpg", // 👈 pon aquí el nombre real de tu foto de banner
    ubicacion: "En el municipio de Acajutla, departamento de Sonsonate, dentro del Área Natural Protegida Los Cóbanos, a unos 85 km de San Salvador.",
    sobreElLugar: "Es la única playa de arrecife de El Salvador y alberga el mayor arrecife de coral del Pacífico centroamericano. Sus formaciones rocosas actúan como rompeolas naturales, creando pozas de aguas tranquilas ideales para nadar, bucear y explorar naufragios de más de 100 años. Es también zona de anidación y liberación de tortugas marinas.",
    actividades: ["Snorkel", "Buceo", "Avistamiento de ballenas", "Pesca deportiva"],
    avisoTitulo: "Mejor época: noviembre a marzo",
    aviso: "Es cuando las ballenas jorobadas visitan la zona para reproducirse, ideal para combinar el avistamiento con snorkel o buceo.",
    costo: "Acceso a la playa: gratuito. Snorkel: $15–$20 por persona (incluye equipo básico y guía local). Buceo: desde $80 hasta $120 según profundidad y certificación. Precios varían según el operador y el tamaño del grupo, confirma directamente.",
    regresarA: "index.html"   // 👈 confírmame si está en Inicio o en Lugares
  },

  "parque-nacional-el-imposible": {
    nombre: "Parque Nacional: El Imposible",
    imagenBanner: "assets/img/PARIMP-INFOLUG.jpg", // 👈 pon aquí el nombre real de tu foto de banner
    ubicacion: "Sierra de Apaneca-Ilamatepec, departamento de Ahuachapán, entre San Francisco Menéndez y Tacuba, al suroeste de la Ruta de las Flores.",
    sobreElLugar: "El parque nacional más grande de El Salvador, considerado la reliquia natural más importante del país. Su nombre nace de una ruta de cafetaleros tan peligrosa que provocó numerosas tragedias, hasta que en 1968 un puente seguro \"hizo posible lo imposible\". Hoy protege más de 500 especies de plantas, 100 de mamíferos y 285 de aves.",
    actividades: ["Senderismo", "Avistamiento de aves", "Camping", "Miradores"],
    avisoTitulo: "Requiere permiso previo",
    aviso: "Envía tu solicitud y listado de visitantes al correo del MARN antes de ir. Ingreso desde las 7:30 a.m.",
    costo: "$3.00 nacionales, $6.00 extranjeros. Estudiantes con carné: $0.30 (público) o $1.00 (privado).",
    regresarA: "lugares.html"   // 👈 sección Lugares
  },

  "san-blas": {
    nombre: "San Blas",
    imagenBanner: "assets/img/SANBLA-INFOLUG.jpg", // 👈 pon aquí el nombre real de tu foto de banner
    ubicacion: "Carretera al Cerro Verde, Finca San Blas, departamento de Santa Ana, a una hora y media aproximadamente desde San Salvador.",
    sobreElLugar: "A 1,800 metros sobre el nivel del mar, es famoso por su amplia terraza frente al Volcán de Izalco y sus precios económicos. Ofrece un clima fresco todo el año y es uno de los destinos favoritos para acampar y conectar con la naturaleza en la zona de los volcanes. Cuenta con el San Blas Gastro Café, ideal para comer o tomar un café con esas vistas.",
    actividades: ["Terraza con vista al Izalco", "Camping", "Senderismo", "Gastro Café"],
    avisoTitulo: "Recomendación de acceso",
    aviso: "No confiar completamente en apps de navegación GPS, ya que cerca del destino suelen indicar desvíos incorrectos.",
    costo: "Entrada general: $1.25. Camping desde $2.50.",
    regresarA: "lugares.html"   // 👈 sección Lugares
  },

  "albania": {
    nombre: "Laberinto de Albania",
    imagenBanner: "assets/img/ALBANI-INFOLUG.jpg", // 👈 pon aquí el nombre real de tu foto de banner
    ubicacion: "Dentro de una finca cafetalera en el municipio de Apaneca, departamento de Ahuachapán, en el corazón de la Ruta de Las Flores.",
    sobreElLugar: "Nacido en una finca de café, es hoy uno de los destinos más singulares de la Ruta de las Flores. Su atractivo principal es el laberinto formado por más de 2,000 árboles de ciprés, considerado el más grande de El Salvador y Centroamérica. El lugar combina naturaleza, gastronomía y atracciones extremas con vista al paisaje montañoso.",
    actividades: ["Laberinto de cipreses", "Bici en el aire", "Canopy", "Tobogán"],
    presupuesto: "Comida rápida y bebidas desde $25.00 por persona/pareja. Almuerzos completos entre $35.00 y $40.00 por pareja.",
    costo: "$5.00 por persona (consumible en restaurante o atracciones). Atracciones extremas individuales: ~$10.00 c/u, o paquete completo por ~$40.00.",
    regresarA: "lugares.html"   // 👈 sección Lugares
  },

  "amapulapa": {
    nombre: "Parque Recreativo Amapulapa",
    imagenBanner: "assets/img/AMAPUL-INFOLUG.jpg", // 👈 pon aquí el nombre real de tu foto de banner
    ubicacion: "San Vicente, a 60 km al oriente de San Salvador.",
    sobreElLugar: "Administrado por el ISTU, su nombre en náhuatl significa \"Río donde se hunden los Amates\". Tiene una extensión de 33 manzanas sobre suelo de origen volcánico, con varios nacimientos de agua que alimentan sus piscinas naturales. Cuenta con toboganes, cabañas, canchas deportivas y áreas de picnic bajo la sombra de amates centenarios.",
    actividades: ["Piscinas naturales", "Toboganes", "Cabañas", "Picnic"],
    horario: "Todos los días, de 8:00 a.m. a 4:00 p.m.",
    costo: "Nacionales: $1.50 · Extranjeros: $3.00. Parqueo: liviano $1.00, pesado $2.00.",
    regresarA: "lugares.html"   // 👈 sección Lugares
  },

  "ruta-de-las-flores": {
    nombre: "Ruta De Las Flores",
    imagenBanner: "assets/img/RUTFLO-INFOLUG.webp", // 👈 pon aquí el nombre real de tu foto de banner
    ubicacion: "Carretera CA-8, entre los departamentos de Sonsonate y Ahuachapán, conectando los pueblos de Nahuizalco, Salcoatitán, Juayúa, Apaneca y Concepción de Ataco.",
    sobreElLugar: "Un recorrido de unos 36 km por la cordillera Apaneca-Ilamatepec que conecta cinco pueblos llenos de color y tradición: Nahuizalco, de fuerte herencia indígena Pipil; Salcoatitán, con su ceiba centenaria; Juayúa, epicentro gastronómico con su famosa feria de los alimentos; Apaneca, tierra de café de altura y la Laguna de Ninfa; y Concepción de Ataco, conocido por sus murales y arte callejero. El nombre nace de las flores silvestres que brotan a los lados del camino, sobre todo entre noviembre y febrero.",
    actividades: ["Ferias gastronómicas", "Pueblos coloridos", "Tours de café", "Murales y artesanías"],
    avisoTitulo: "Mejor época para visitar",
    aviso: "Entre noviembre y febrero florecen los caminos y el clima es más fresco. Se recomienda dedicar de 2 a 3 días para recorrer los cinco pueblos con calma.",
    costo: "Recorrido libre por la carretera CA-8, sin costo de entrada. Presupuesto aproximado: $50–$100 por persona al día, según comida, hospedaje y actividades.",
    regresarA: "lugares.html"   // 👈 sección Lugares
  },

  "parque-wtd": {
    nombre: "Parque de Aventuras Surf City Walter Thilo Deininger",
    imagenBanner: "assets/img/PARWTD-INFOLUG.jpeg", // 👈 pon aquí el nombre real de tu foto de banner
    ubicacion: "Cantón Hacienda San Diego, Km. 55, Carretera Litoral, La Libertad, a unos 39 km de San Salvador.",
    sobreElLugar: "Con más de 1,000 manzanas de reserva natural donadas por el filántropo Walter Thilo Deininger, alberga cerca del 7% de la vegetación del país y tres tipos de bosque: de galería, seco caducifolio y secundario. Forma parte de la estrategia Surf City y combina senderismo, deportes extremos y educación ambiental dentro de un área natural protegida frente a la costa de La Libertad.",
    actividades: ["Canopy y rappel", "Senderismo", "Vía ferrata", "Bici de montaña"],
    horario: "Miércoles a domingo, de 8:00 a.m. a 4:00 p.m. El sendero \"Camino a la Aventura\" inicia a las 9:00 a.m. (4 horas aprox.) y la \"Ruta de la Mariposa\" a las 10:00 a.m.",
    costo: "Entrada general: $5.00 nacionales, $10.00 extranjeros (incluye senderos). Parqueo liviano: $1.00. Actividades extremas como canopy, rappel o vía ferrata pueden tener costo adicional; confirma tarifas vigentes antes de ir.",
    regresarA: "lugares.html"   // 👈 sección Lugares
  }

  // 👇 A partir de aquí, todos los próximos lugares son de la sección
  // Lugares, así que usa regresarA: "lugares.html"
};

function activarTarjetas() {
  const tarjetas = document.querySelectorAll(".place-card[data-lugar]");

  tarjetas.forEach((tarjeta) => {
    tarjeta.style.cursor = "pointer";
    tarjeta.addEventListener("click", () => {
      const id = tarjeta.dataset.lugar;
      window.location.href = `lugar.html?lugar=${id}`;
    });
  });
}

function pintarLugar() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("lugar");
  const datos = lugares[id];

  if (!datos) {
    console.warn(`No hay información todavía para "${id}"`);
    return;
  }

  document.title = `Ruta del Torogoz | ${datos.nombre}`;
  document.getElementById("lugar-imagen").src = datos.imagenBanner;
  document.getElementById("lugar-imagen").alt = datos.nombre;
  document.getElementById("lugar-nombre").textContent = datos.nombre;
  document.getElementById("lugar-ubicacion").textContent = datos.ubicacion;
  document.getElementById("lugar-sobre").textContent = datos.sobreElLugar;

  // Bloque Costo (o Day pass)
  if (datos.dayPass) {
    document.getElementById("lugar-costo-titulo").textContent = "¿Dónde encontrar day pass?";
    document.getElementById("lugar-costo").textContent = datos.dayPass;
  } else {
    document.getElementById("lugar-costo-titulo").textContent = "Costo de entrada";
    document.getElementById("lugar-costo").textContent = datos.costo;
  }

  // Bloque Horario (o Aviso destacado, ej. "Sube con guía autorizado")
  const bloqueHorario = document.getElementById("bloque-horario");
  if (datos.dayPass || (!datos.aviso && !datos.horario)) {
    // Sin day pass propio, o el lugar simplemente no tiene horario ni aviso
    bloqueHorario.style.display = "none";
  } else if (datos.aviso) {
    bloqueHorario.style.display = "";
    bloqueHorario.classList.add("lugar-detalle__bloque--aviso");
    document.getElementById("lugar-horario-titulo").textContent = datos.avisoTitulo;
    document.getElementById("lugar-horario").textContent = datos.aviso;
  } else {
    bloqueHorario.style.display = "";
    bloqueHorario.classList.remove("lugar-detalle__bloque--aviso");
    document.getElementById("lugar-horario-titulo").textContent = "Horario";
    document.getElementById("lugar-horario").textContent = datos.horario;
  }

  // Bloque Presupuesto de comida (opcional, solo si el lugar lo trae)
  const bloquePresupuesto = document.getElementById("bloque-presupuesto");
  if (bloquePresupuesto) {
    if (datos.presupuesto) {
      bloquePresupuesto.style.display = "";
      document.getElementById("lugar-presupuesto").textContent = datos.presupuesto;
    } else {
      bloquePresupuesto.style.display = "none";
    }
  }

  const contenedorChips = document.getElementById("lugar-actividades");
  contenedorChips.innerHTML = "";
  datos.actividades.forEach((actividad) => {
    const chip = document.createElement("span");
    chip.classList.add("chip");
    chip.textContent = actividad;
    contenedorChips.appendChild(chip);
  });

  // Botón Regresar: manda a index.html o lugares.html según de dónde venga el lugar
  document.getElementById("lugar-regresar").href = datos.regresarA;
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".place-grid")) {
    activarTarjetas();
  }
  if (document.getElementById("lugar-nombre")) {
    pintarLugar();
  }
});