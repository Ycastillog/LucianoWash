const WHATSAPP_NUMBER = "19296429620";

const bookingForm = document.querySelector("#bookingForm");
const formNote = document.querySelector("#formNote");
const langButtons = document.querySelectorAll("[data-lang]");
const chatWidget = document.querySelector(".chat-widget");
const chatLauncher = document.querySelector(".chat-launcher");
const chatPanel = document.querySelector("#chatPanel");
const chatClose = document.querySelector(".chat-close");
const chatMessage = document.querySelector("#chatMessage");
const chatSend = document.querySelector("#chatSend");
const chatOptionButtons = document.querySelectorAll("[data-chat-message]");
const hero = document.querySelector(".hero");

const translations = {
  es: {
    pageTitle: "Luciano Wash - Limpieza profesional",
    brand_subtitle: "Limpieza profesional",
    nav_about: "Quiénes somos",
    nav_services: "Servicios",
    nav_work: "Trabajos",
    nav_social: "Redes",
    nav_booking: "Cita",
    nav_reserve: "Cotizar",
    hero_eyebrow: "Servicios profesionales de limpieza",
    hero_title: "Limpieza que se nota",
    hero_copy: "Resultados visibles para autos, muebles, hogares, negocios, piscinas y exteriores. Limpieza cercana, clara y profesional.",
    hero_cta: "Cotizar",
    hero_secondary_cta: "Ver trabajos",
    evidence_1: "Autos",
    evidence_2: "Sofás",
    evidence_3: "Alfombras",
    evidence_4: "Piscinas",
    proof_1: "Fotos reales antes/después",
    proof_2: "Respuesta por WhatsApp",
    proof_3: "Servicio móvil en New York y zonas cercanas",
    proof_4: "Autos, hogares y negocios",
    process_eyebrow: "Cómo funciona",
    process_title: "Cotizar es fácil y rápido",
    process_copy: "El cliente entiende el proceso desde el primer momento y sabe qué enviar para recibir una estimación clara.",
    process_1_title: "Envía fotos",
    process_1_copy: "Muestra el auto, mueble, alfombra, piscina o área que necesita limpieza.",
    process_2_title: "Recibe cotización",
    process_2_copy: "Revisamos el tamaño y la condición del trabajo para orientarte claro.",
    process_3_title: "Agendamos y limpiamos",
    process_3_copy: "Coordinamos por WhatsApp y Luciano Wash realiza el servicio.",
    process_4_title: "Luciano Wash llega y limpia",
    process_4_copy: "Servicio profesional para autos, hogares, negocios y exteriores.",
    quick_1_title: "Autos",
    quick_1_body: "Detailing, motor, pintura y PPF",
    quick_2_title: "Hogar",
    quick_2_body: "muebles, colchones, alfombras y ventanas",
    quick_3_title: "Espacios",
    quick_3_body: "negocios, piscinas y Pressure Washing",
    intro_eyebrow: "Quiénes somos",
    intro_title: "Una división de limpieza profesional bajo LPS Company",
    intro_copy: "Luciano Wash ofrece soluciones de limpieza para autos, hogares, negocios, muebles, alfombras, piscinas y exteriores. Trabajamos con atención al detalle, comunicación directa y evidencia visual para que cada cliente sepa qué esperar antes de reservar.",
    history_1_number: "+5 años",
    history_1_label: "De experiencia",
    history_2_number: "+1500",
    history_2_label: "Servicios realizados",
    history_3_number: "+400",
    history_3_label: "Clientes atendidos",
    about_mission_title: "Qué hacemos",
    about_mission_copy: "Detailing, limpieza residencial y comercial, tapicería, alfombras, piscinas y Pressure Washing con enfoque en resultados visibles.",
    about_vision_title: "Cómo trabajamos",
    about_vision_copy: "El cliente envía foto, recibe orientación por WhatsApp y agenda un servicio claro según el tamaño y condición del trabajo.",
    about_values_title: "Cobertura",
    about_values_copy: "Servicio móvil en New York y zonas cercanas para autos, hogares, negocios y espacios exteriores.",
    services_eyebrow: "Servicios profesionales",
    services_title: "Limpieza profesional para cada espacio",
    services_copy: "Autos, muebles, alfombras, hogares, negocios, piscinas y exteriores con cotización rápida por WhatsApp.",
    quote: "Cotizar",
    quote_whatsapp: "Cotizar",
    service_group_vehicle: "Vehículos",
    service_group_home: "Hogar y muebles",
    service_group_outdoor: "Exteriores",
    service_group_property: "Propiedades",
    service_group_estimate: "Estimación rápida",
    service_1_title: "Autos y camiones",
    service_1_copy: "Detailing interior/exterior, lavado de camiones, motor, pintura, cerámico y PPF.",
    service_2_title: "Muebles, colchones y alfombras",
    service_2_copy: "Sofás, sillones, colchones, alfombras y tapicería con limpieza profunda y extracción.",
    service_3_title: "Hogares y negocios",
    service_3_copy: "Residencial, comercial, Airbnb, cocinas, ventanas y mantenimiento de espacios.",
    service_4_title: "Piscinas y Pressure Washing",
    service_4_copy: "Piscinas, aceras, marquesinas, fachadas, ventanas exteriores y áreas abiertas.",
    service_5_title: "Negocios",
    service_5_copy: "Oficinas, locales, comercios y mantenimiento para espacios de alto tránsito.",
    service_6_title: "Piscinas y Pressure Washing",
    service_6_copy: "Piscinas, aceras, marquesinas, fachadas y áreas exteriores.",
    service_quote_title: "¿No sabes qué servicio elegir?",
    service_quote_copy: "Envía una foto por WhatsApp y te orientamos con la mejor opción.",
    service_7_title: "Limpieza residencial",
    service_7_copy: "Hogares, apartamentos, Airbnb, ventanas, cocinas y limpiezas profundas.",
    service_8_title: "Limpieza comercial",
    service_8_copy: "Oficinas, locales, negocios, mantenimiento programado y espacios de alto tránsito.",
    service_9_copy: "Lavado a presión para aceras, marquesinas, fachadas y áreas exteriores.",
    packages_eyebrow: "Paquetes y estimaciones",
    packages_title: "Cotización según foto y tamaño del trabajo",
    packages_copy: "Estos paquetes ayudan a orientar el servicio. El precio final se confirma por WhatsApp con una foto del área, mueble o vehículo.",
    package_1_title: "Auto básico",
    package_1_copy: "Lavado exterior/interior ligero y limpieza general.",
    package_2_title: "Interior profundo",
    package_2_copy: "Aspirado, tapicería, manchas y detalles de cabina.",
    package_3_title: "Sofá / colchón",
    package_3_copy: "Extracción profunda según tamaño, tela y condición.",
    package_4_title: "Limpieza residencial",
    package_4_copy: "Hogar, Airbnb, alfombras, ventanas y mantenimiento.",
    details_eyebrow: "Menú de servicios",
    details_title: "Servicios detallados para cada necesidad",
    detail_1: "Detailing interior/exterior",
    detail_2: "Limpieza de motor",
    detail_3: "Servicios de limpieza profesional",
    detail_4: "Limpieza de muebles, sillones y colchones",
    detail_5: "Restauración de plásticos (vehículo)",
    detail_6: "Descontaminación química y manual",
    detail_7: "Corrección de pintura",
    detail_8: "Restauración de focos e insignias",
    detail_9: "Instalación cerámica",
    detail_10: "Protección de pintura (PPF)",
    detail_11: "Limpieza a fondo de hogares",
    detail_12: "Mantenimiento de espacios",
    detail_13: "Limpieza de ventanas",
    detail_14: "Limpieza de tapicería",
    trust_eyebrow: "Confianza",
    trust_title: "Por qué elegir Luciano Wash",
    trust_1_title: "Atención en New York y zonas cercanas",
    trust_1_copy: "Servicio local y móvil para clientes que necesitan respuesta rápida y trato directo.",
    trust_2_title: "Personal confiable",
    trust_2_copy: "Trabajo organizado, comunicación clara y cuidado al entrar a tu vehículo, hogar o negocio.",
    trust_3_title: "Productos de calidad",
    trust_3_copy: "Procesos y productos pensados para proteger telas, superficies, pintura y acabados.",
    trust_4_title: "Autos, hogares y negocios",
    trust_4_copy: "Una sola empresa para detailing, tapicería, alfombras, mantenimiento y limpieza comercial.",
    trust_5_title: "Cotización rápida por WhatsApp",
    trust_5_copy: "Envía lo que necesitas limpiar y recibe orientación directa para reservar tu servicio.",
    trust_cta: "Cotizar ahora",
    before_eyebrow: "Antes y después",
    before_title: "Resultados que se ven al instante",
    before_copy: "Comparaciones visuales para mostrar lo que más vende en limpieza: el cambio real.",
    before_label: "Antes",
    after_label: "Después",
    compare_1_title: "Auto",
    compare_1_copy: "Detailing exterior e interior para recuperar brillo, limpieza y presencia.",
    compare_2_title: "Sofá / colchón",
    compare_2_copy: "Extracción profunda para manchas, polvo y telas de uso diario.",
    compare_3_title: "Hogar / alfombra",
    compare_3_copy: "Espacios más frescos, claros y listos para disfrutarse.",
    results_eyebrow: "Resultados",
    results_title: "Autos limpios, hogares frescos y negocios listos",
    gallery_1: "Autos",
    gallery_2: "Muebles y alfombras",
    gallery_3: "Piscinas y exteriores",
    gallery_4: "Hogar y alfombras",
    gallery_5: "Detailing y lavado",
    social_eyebrow: "Redes sociales",
    social_title: "Mira los últimos trabajos de Luciano Wash",
    social_copy: "Síguenos para ver videos recientes, procesos de limpieza y resultados reales en autos, hogares y negocios.",
    social_tiktok_cta: "Ver últimos videos",
    social_facebook_cta: "Ver Facebook",
    social_instagram_cta: "Ver Instagram",
    facebook_fallback_title: "Contenido reciente en Facebook",
    facebook_fallback_copy: "Facebook no siempre permite mostrar páginas compartidas dentro de sitios externos. Abre el enlace para ver videos, fotos y publicaciones recientes.",
    instagram_fallback_title: "Trabajos recientes en Instagram",
    instagram_fallback_copy: "Abre el perfil para ver fotos, videos y resultados reales de Luciano Wash.",
    booking_eyebrow: "Agenda",
    booking_title: "Solicita tu servicio",
    booking_copy: "Completa los datos y se abre WhatsApp con el mensaje listo para reservar o cotizar.",
    booking_li_1: "Confirmación directa por WhatsApp.",
    booking_li_2: "Servicios para autos, hogares, negocios y exteriores.",
    booking_li_3: "Lista para agregar agenda y panel administrativo después.",
    form_name: "Nombre",
    form_name_placeholder: "Tu nombre",
    form_item: "Qué necesitas limpiar",
    form_item_placeholder: "Ej. SUV, sofá, oficina, piscina",
    form_service: "Servicio",
    form_select: "Selecciona",
    form_date: "Fecha deseada",
    form_location: "Ubicación",
    form_location_placeholder: "Sector o dirección",
    service_area: "New York y zonas cercanas",
    form_photo: "Foto o video para estimación",
    form_photo_help: "Selecciona una foto o video del auto, mueble o área. WhatsApp se abrirá con el mensaje; adjunta ese archivo en el chat para recibir una estimación.",
    form_submit: "Cotizar",
    contact_eyebrow: "Contáctanos",
    contact_title: "Hablemos de tu servicio",
    float_quote: "Cotizar",
    float_quote_mobile: "Cotizar",
    chat_status: "Respuesta por WhatsApp",
    chat_intro: "Hola, soy Luciano Wash. Envíanos una foto y te damos una estimación rápida.",
    chat_label: "Mensaje",
    chat_placeholder: "Ej. Tengo un sofá de 3 plazas y puedo enviar foto.",
    chat_send: "Cotizar",
    chat_option_auto: "Auto",
    chat_option_sofa: "Sofá",
    chat_option_carpet: "Alfombra",
    chat_option_pool: "Piscina",
    chat_option_home: "Casa / negocio",
    chat_option_pressure: "Pressure Washing",
    chat_default_message: "Hola Luciano Wash, quiero cotizar un servicio. Puedo enviar una foto para estimación.",
    chat_msg_auto: "Quiero cotizar detailing de auto. Puedo enviar foto.",
    chat_msg_sofa: "Quiero cotizar limpieza de sofá. Puedo enviar foto.",
    chat_msg_carpet: "Quiero cotizar limpieza de alfombra. Puedo enviar foto.",
    chat_msg_pool: "Quiero cotizar limpieza de piscina. Puedo enviar foto.",
    chat_msg_home: "Quiero cotizar limpieza para casa o negocio. Puedo enviar foto.",
    chat_msg_pressure: "Quiero cotizar Pressure Washing. Puedo enviar foto.",
    footer_service: "Limpieza profesional integral",
    footer_manager: "Gerente General: Luciano Pediet S.",
    option_1: "Detailing de autos",
    option_2: "Limpieza de motor",
    option_3: "Corrección de pintura",
    option_4: "Instalación cerámica",
    option_5: "Protección de pintura (PPF)",
    option_6: "Lavado de camiones",
    option_7: "Servicios de limpieza profesional",
    option_8: "Limpieza de muebles, sillones y colchones",
    option_9: "Limpieza de alfombras",
    option_10: "Restauración de plásticos (vehículo)",
    option_11: "Restauración de focos e insignias",
    option_12: "Descontaminación química y manual",
    option_13: "Limpieza y mantenimiento de piscinas",
    option_14: "Limpieza residencial",
    option_15: "Limpieza comercial",
    option_16: "Limpieza de ventanas",
    option_17: "Mantenimiento programado",
    option_18: "Lavado a presión / Pressure Washing",
    formNote: "Mensaje listo. Abriendo WhatsApp...",
    waIntro: "Hola Luciano Wash, quiero cotizar un servicio de limpieza.",
    msgName: "Nombre",
    msgNeed: "Necesidad",
    msgService: "Servicio",
    msgDate: "Fecha deseada",
    msgLocation: "Ubicación",
    msgPhoto: "Foto o video para estimación",
    msgPhotoReady: "Archivo seleccionado, lo adjuntaré en este chat.",
    msgPending: "Por confirmar",
  },
  en: {
    pageTitle: "Luciano Wash - Professional Cleaning",
    brand_subtitle: "Professional cleaning",
    nav_about: "About us",
    nav_services: "Services",
    nav_work: "Work",
    nav_social: "Social",
    nav_booking: "Book",
    nav_reserve: "Quote",
    hero_eyebrow: "Professional cleaning services",
    hero_title: "Clean you can see",
    hero_copy: "Visible results for cars, furniture, homes, businesses, pools and outdoor spaces. Friendly, clear and professional service.",
    hero_cta: "Quote",
    hero_secondary_cta: "View work",
    evidence_1: "Cars",
    evidence_2: "Sofas",
    evidence_3: "Carpets",
    evidence_4: "Pools",
    proof_1: "Real before/after photos",
    proof_2: "WhatsApp response",
    proof_3: "Mobile service in New York and nearby areas",
    proof_4: "Cars, homes and businesses",
    process_eyebrow: "How it works",
    process_title: "Getting a quote is easy and fast",
    process_copy: "Customers understand the process right away and know what to send for a clear estimate.",
    process_1_title: "Send photos",
    process_1_copy: "Show the car, furniture, carpet, pool or area that needs cleaning.",
    process_2_title: "Get a quote",
    process_2_copy: "We review job size and condition to guide you clearly.",
    process_3_title: "We schedule and clean",
    process_3_copy: "We coordinate by WhatsApp and Luciano Wash performs the service.",
    process_4_title: "Luciano Wash arrives and cleans",
    process_4_copy: "Professional service for cars, homes, businesses and outdoor spaces.",
    quick_1_title: "Cars",
    quick_1_body: "Detailing, engine, paint and PPF",
    quick_2_title: "Home",
    quick_2_body: "furniture, mattresses, carpets and windows",
    quick_3_title: "Spaces",
    quick_3_body: "businesses, pools and Pressure Washing",
    intro_eyebrow: "About us",
    intro_title: "A professional cleaning division under LPS Company",
    intro_copy: "Luciano Wash provides cleaning solutions for cars, homes, businesses, furniture, carpets, pools and outdoor spaces. We work with attention to detail, direct communication and visual proof so every customer knows what to expect before booking.",
    history_1_number: "+5 years",
    history_1_label: "Of experience",
    history_2_number: "+1500",
    history_2_label: "Services completed",
    history_3_number: "+400",
    history_3_label: "Customers served",
    about_mission_title: "What we do",
    about_mission_copy: "Detailing, residential and commercial cleaning, upholstery, carpets, pools and Pressure Washing focused on visible results.",
    about_vision_title: "How we work",
    about_vision_copy: "The customer sends a photo, gets guidance by WhatsApp and books a clear service based on job size and condition.",
    about_values_title: "Coverage",
    about_values_copy: "Mobile service in New York and nearby areas for cars, homes, businesses and outdoor spaces.",
    services_eyebrow: "Professional services",
    services_title: "Professional cleaning for every space",
    services_copy: "Cars, furniture, carpets, homes, businesses, pools and outdoor spaces with fast quotes by WhatsApp.",
    quote: "Quote",
    quote_whatsapp: "Quote",
    service_group_vehicle: "Vehicles",
    service_group_home: "Home and furniture",
    service_group_outdoor: "Outdoor",
    service_group_property: "Properties",
    service_group_estimate: "Fast estimate",
    service_1_title: "Cars and trucks",
    service_1_copy: "Interior/exterior detailing, truck washing, engine, paint, ceramic and PPF.",
    service_2_title: "Furniture, mattresses and carpets",
    service_2_copy: "Sofas, armchairs, mattresses, carpets and upholstery with deep cleaning and extraction.",
    service_3_title: "Homes and businesses",
    service_3_copy: "Residential, commercial, Airbnb, kitchens, windows and space maintenance.",
    service_4_title: "Pools and Pressure Washing",
    service_4_copy: "Pools, sidewalks, driveways, facades, exterior windows and open areas.",
    service_5_title: "Businesses",
    service_5_copy: "Offices, stores, businesses and maintenance for high-traffic spaces.",
    service_6_title: "Pools and Pressure Washing",
    service_6_copy: "Pools, sidewalks, driveways, facades and outdoor areas.",
    service_quote_title: "Not sure which service to choose?",
    service_quote_copy: "Send a photo by WhatsApp and we will guide you to the best option.",
    service_7_title: "Residential cleaning",
    service_7_copy: "Homes, apartments, Airbnb, windows, kitchens and deep cleaning.",
    service_8_title: "Commercial cleaning",
    service_8_copy: "Offices, stores, businesses, scheduled maintenance and high-traffic spaces.",
    service_9_copy: "Pressure washing for sidewalks, driveways, facades and outdoor areas.",
    packages_eyebrow: "Packages and estimates",
    packages_title: "Quote based on photo and job size",
    packages_copy: "These packages help guide the service. Final pricing is confirmed by WhatsApp with a photo of the area, furniture or vehicle.",
    package_1_title: "Basic auto",
    package_1_copy: "Light exterior/interior wash and general cleaning.",
    package_2_title: "Deep interior",
    package_2_copy: "Vacuuming, upholstery, stains and cabin details.",
    package_3_title: "Sofa / mattress",
    package_3_copy: "Deep extraction based on size, fabric and condition.",
    package_4_title: "Residential cleaning",
    package_4_copy: "Home, Airbnb, carpets, windows and maintenance.",
    details_eyebrow: "Service menu",
    details_title: "Detailed services for every need",
    detail_1: "Interior/exterior Detailing",
    detail_2: "Engine cleaning",
    detail_3: "Professional cleaning services",
    detail_4: "Furniture, armchair and mattress cleaning",
    detail_5: "Plastic restoration (vehicle)",
    detail_6: "Chemical and manual decontamination",
    detail_7: "Paint correction",
    detail_8: "Headlight and emblem restoration",
    detail_9: "Ceramic installation",
    detail_10: "Paint protection (PPF)",
    detail_11: "Deep home cleaning",
    detail_12: "Space maintenance",
    detail_13: "Window cleaning",
    detail_14: "Upholstery cleaning",
    trust_eyebrow: "Trust",
    trust_title: "Why choose Luciano Wash",
    trust_1_title: "Serving New York and nearby areas",
    trust_1_copy: "Local and mobile service for customers who need a fast response and direct communication.",
    trust_2_title: "Reliable staff",
    trust_2_copy: "Organized work, clear communication and care when entering your vehicle, home or business.",
    trust_3_title: "Quality products",
    trust_3_copy: "Processes and products designed to protect fabrics, surfaces, paint and finishes.",
    trust_4_title: "Cars, homes and businesses",
    trust_4_copy: "One company for detailing, upholstery, carpets, maintenance and commercial cleaning.",
    trust_5_title: "Fast quote by WhatsApp",
    trust_5_copy: "Send what you need cleaned and get direct guidance to book your service.",
    trust_cta: "Quote now",
    before_eyebrow: "Before and after",
    before_title: "Results you can see instantly",
    before_copy: "Visual comparisons show what sells cleaning best: the real change.",
    before_label: "Before",
    after_label: "After",
    compare_1_title: "Car",
    compare_1_copy: "Exterior and interior detailing to restore shine, cleanliness and presence.",
    compare_2_title: "Sofa / mattress",
    compare_2_copy: "Deep extraction for stains, dust and everyday fabrics.",
    compare_3_title: "Home / carpet",
    compare_3_copy: "Fresher, brighter spaces ready to enjoy.",
    results_eyebrow: "Results",
    results_title: "Clean cars, fresh homes and business-ready spaces",
    gallery_1: "Cars",
    gallery_2: "Furniture and carpets",
    gallery_3: "Pools and outdoor",
    gallery_4: "Home and carpets",
    gallery_5: "Detailing and washing",
    social_eyebrow: "Social media",
    social_title: "Watch Luciano Wash's latest work",
    social_copy: "Follow us for recent videos, cleaning processes and real results for cars, homes and businesses.",
    social_tiktok_cta: "Latest videos",
    social_facebook_cta: "View Facebook",
    social_instagram_cta: "View Instagram",
    facebook_fallback_title: "Recent content on Facebook",
    facebook_fallback_copy: "Facebook does not always allow shared pages to display inside external websites. Open the link to see recent videos, photos and posts.",
    instagram_fallback_title: "Recent work on Instagram",
    instagram_fallback_copy: "Open the profile to see photos, videos and real Luciano Wash results.",
    booking_eyebrow: "Booking",
    booking_title: "Request your service",
    booking_copy: "Complete the details and WhatsApp opens with the message ready to book or quote.",
    booking_li_1: "Direct confirmation by WhatsApp.",
    booking_li_2: "Services for cars, homes, businesses and outdoor spaces.",
    booking_li_3: "Ready to add scheduling and an admin panel later.",
    form_name: "Name",
    form_name_placeholder: "Your name",
    form_item: "What needs cleaning",
    form_item_placeholder: "Ex. SUV, sofa, office, pool",
    form_service: "Service",
    form_select: "Select",
    form_date: "Preferred date",
    form_location: "Location",
    form_location_placeholder: "Area or address",
    service_area: "New York and nearby areas",
    form_photo: "Photo or video for estimate",
    form_photo_help: "Select a photo or video of the car, furniture or area. WhatsApp will open with the message; attach that file in the chat to receive an estimate.",
    form_submit: "Quote",
    contact_eyebrow: "Contact us",
    contact_title: "Let’s talk about your service",
    float_quote: "Quote",
    float_quote_mobile: "Quote",
    chat_status: "Reply by WhatsApp",
    chat_intro: "Hi, this is Luciano Wash. Send us a photo and we will give you a quick estimate.",
    chat_label: "Message",
    chat_placeholder: "Ex. I have a 3-seat sofa and can send a photo.",
    chat_send: "Quote",
    chat_option_auto: "Auto",
    chat_option_sofa: "Sofa",
    chat_option_carpet: "Carpet",
    chat_option_pool: "Pool",
    chat_option_home: "Home / business",
    chat_option_pressure: "Pressure Washing",
    chat_default_message: "Hello Luciano Wash, I want a quote for a cleaning service. I can send a photo for an estimate.",
    chat_msg_auto: "I want a quote for auto detailing. I can send a photo.",
    chat_msg_sofa: "I want a quote for sofa cleaning. I can send a photo.",
    chat_msg_carpet: "I want a quote for carpet cleaning. I can send a photo.",
    chat_msg_pool: "I want a quote for pool cleaning. I can send a photo.",
    chat_msg_home: "I want a quote for home or business cleaning. I can send a photo.",
    chat_msg_pressure: "I want a quote for Pressure Washing. I can send a photo.",
    footer_service: "Complete professional cleaning",
    footer_manager: "General Manager: Luciano Pediet S.",
    option_1: "Auto Detailing",
    option_2: "Engine cleaning",
    option_3: "Paint correction",
    option_4: "Ceramic installation",
    option_5: "Paint protection (PPF)",
    option_6: "Truck washing",
    option_7: "Professional cleaning services",
    option_8: "Furniture, armchair and mattress cleaning",
    option_9: "Carpet cleaning",
    option_10: "Plastic restoration (vehicle)",
    option_11: "Headlight and emblem restoration",
    option_12: "Chemical and manual decontamination",
    option_13: "Pool cleaning and maintenance",
    option_14: "Residential cleaning",
    option_15: "Commercial cleaning",
    option_16: "Window cleaning",
    option_17: "Scheduled maintenance",
    option_18: "Pressure Washing",
    formNote: "Message ready. Opening WhatsApp...",
    waIntro: "Hello Luciano Wash, I want to quote a cleaning service.",
    msgName: "Name",
    msgNeed: "Need",
    msgService: "Service",
    msgDate: "Preferred date",
    msgLocation: "Location",
    msgPhoto: "Estimate photo or video",
    msgPhotoReady: "File selected, I will attach it in this chat.",
    msgPending: "To confirm",
  },
};

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  document.title = dictionary.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      node.setAttribute("placeholder", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-chat-key]").forEach((node) => {
    const messageKey = node.dataset.chatKey?.replace("chat_option_", "chat_msg_");
    if (messageKey && dictionary[messageKey]) {
      node.dataset.chatMessage = dictionary[messageKey];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  localStorage.setItem("lucianoWashLang", lang);
  updateChatLink();
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  const photo = data.get("photo");
  const lang = localStorage.getItem("lucianoWashLang") || "es";
  const dictionary = translations[lang] || translations.es;
  const message = [
    dictionary.waIntro,
    `${dictionary.msgName}: ${data.get("name")}`,
    `${dictionary.msgNeed}: ${data.get("item")}`,
    `${dictionary.msgService}: ${data.get("service")}`,
    `${dictionary.msgDate}: ${data.get("date")}`,
    `${dictionary.msgLocation}: ${data.get("location") || dictionary.msgPending}`,
    `${dictionary.msgPhoto}: ${photo && photo.name ? dictionary.msgPhotoReady : dictionary.msgPending}`,
  ].join("\n");

  formNote.textContent = dictionary.formNote;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

function updateChatLink() {
  if (!chatSend) {
    return;
  }

  const text = chatMessage && chatMessage.value.trim()
    ? chatMessage.value.trim()
    : (translations[document.documentElement.lang] || translations.es).chat_default_message;
  chatSend.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function setChatOpen(isOpen) {
  if (!chatWidget || !chatPanel || !chatLauncher) {
    return;
  }

  chatWidget.classList.toggle("is-open", isOpen);
  chatPanel.hidden = !isOpen;
  chatLauncher.setAttribute("aria-expanded", String(isOpen));
  if (isOpen && chatMessage) {
    chatMessage.focus();
  }
}

function updateFloatingChat() {
  if (!chatWidget || !hero) {
    return;
  }

  if (!window.matchMedia("(max-width: 640px)").matches) {
    chatWidget.classList.add("is-visible");
    return;
  }

  const heroBottom = hero.getBoundingClientRect().bottom;
  chatWidget.classList.toggle("is-visible", heroBottom < window.innerHeight - 70);
}

chatLauncher?.addEventListener("click", () => {
  setChatOpen(!chatWidget.classList.contains("is-open"));
});

chatClose?.addEventListener("click", () => setChatOpen(false));

chatMessage?.addEventListener("input", updateChatLink);

chatOptionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (chatMessage) {
      chatMessage.value = button.dataset.chatMessage || "";
      updateChatLink();
    }
  });
});

window.addEventListener("scroll", updateFloatingChat, { passive: true });
window.addEventListener("resize", updateFloatingChat);

setLanguage(localStorage.getItem("lucianoWashLang") || "es");
updateChatLink();
updateFloatingChat();
