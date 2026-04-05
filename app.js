const sections = [
  {
    key: 'identidad',
    title: { es: '1) Identidad de marca personal', en: '1) Personal brand identity', pt: '1) Identidade de marca pessoal' },
    desc: {
      es: 'Define voz, estética y promesa de valor con claridad operativa.',
      en: 'Define voice, aesthetic, and value promise with operational clarity.',
      pt: 'Defina voz, estética e proposta de valor com clareza operacional.'
    },
    checklist: ['Propósito en una frase', 'Público específico', 'Firma visual consistente'],
    articles: [
      'Cómo diseñar una narrativa que no dependa de tendencias.',
      '5 decisiones de estilo para ser reconocible en 3 segundos.',
      'Micro-hábitos diarios para sostener reputación digital.'
    ]
  },
  {
    key: 'monetizacion',
    title: { es: '2) Monetización inmediata', en: '2) Immediate monetization', pt: '2) Monetização imediata' },
    desc: {
      es: 'Convierte habilidades en ofertas concretas con entregables claros.',
      en: 'Turn skills into concrete offers with clear deliverables.',
      pt: 'Converta habilidades em ofertas concretas com entregáveis claros.'
    },
    checklist: ['Oferta principal', 'Oferta rápida de entrada', 'Ruta de upsell ética'],
    articles: ['Modelo 72h: de idea a primera venta.', 'Plantilla de propuesta de valor directa.', 'Errores que bloquean el cierre de ventas.']
  },
  {
    key: 'tiempo',
    title: { es: '3) Gestión del tiempo', en: '3) Time management', pt: '3) Gestão do tempo' },
    desc: { es: 'Planifica semanas de alto rendimiento con bloques realistas.', en: 'Plan high-performance weeks with realistic blocks.', pt: 'Planeje semanas de alto desempenho com blocos realistas.' },
    checklist: ['Top 3 tareas diarias', 'Bloques de foco', 'Revisión nocturna'],
    articles: ['Calendario antifuga mental.', 'Cómo cortar interrupciones sin fricción.', 'Métrica semanal de energía y avance.']
  },
  {
    key: 'contenido',
    title: { es: '4) Sistema de contenido', en: '4) Content system', pt: '4) Sistema de conteúdo' },
    desc: { es: 'Crea lotes de piezas con intención educativa y comercial.', en: 'Create batches with educational and commercial intent.', pt: 'Crie lotes de peças com intenção educativa e comercial.' },
    checklist: ['Pilar de contenido', 'Formato principal', 'Métrica de impacto'],
    articles: ['Mapa de ideas en 15 minutos.', 'Guion corto con gancho real.', 'Edición mínima para máxima retención.']
  },
  {
    key: 'emocion',
    title: { es: '5) Escritura emocional creativa', en: '5) Emotional creative writing', pt: '5) Escrita emocional criativa' },
    desc: { es: 'Transforma emoción en texto útil sin perder autenticidad.', en: 'Turn emotion into useful text without losing authenticity.', pt: 'Transforme emoção em texto útil sem perder autenticidade.' },
    checklist: ['Conflicto real', 'Lección accionable', 'Cierre con invitación'],
    articles: ['Diario creativo para marca personal.', 'Storytelling con límites sanos.', 'Cómo escribir para sanar y vender.']
  },
  {
    key: 'proyectos',
    title: { es: '6) Proyectos y operaciones', en: '6) Projects and operations', pt: '6) Projetos e operações' },
    desc: { es: 'Gestiona proyectos con tableros simples y decisiones rápidas.', en: 'Manage projects with simple boards and fast decisions.', pt: 'Gerencie projetos com quadros simples e decisões rápidas.' },
    checklist: ['Objetivo trimestral', 'Entregables claros', 'Revisión de calidad'],
    articles: ['Cómo elegir ideas que sí terminan.', 'Estructura mínima de un SOP.', 'Delegar sin perder calidad.']
  },
  {
    key: 'neuro',
    title: { es: '7) Neurocomunicación aplicada', en: '7) Applied neurocommunication', pt: '7) Neurocomunicação aplicada' },
    desc: { es: 'Diseña mensajes que mejoran comprensión, memoria y acción.', en: 'Design messages that improve comprehension, memory, and action.', pt: 'Desenhe mensagens que melhorem compreensão, memória e ação.' },
    checklist: ['Mensaje núcleo', 'Prueba social', 'CTA único'],
    articles: ['La secuencia atención-interés-acción.', 'Palabras que bajan fricción cognitiva.', 'Cómo argumentar sin saturar.']
  },
  {
    key: 'fidelizacion',
    title: { es: '8) Comunidad y fidelización', en: '8) Community and loyalty', pt: '8) Comunidade e fidelização' },
    desc: { es: 'Construye relaciones de largo plazo con experiencias memorables.', en: 'Build long-term relationships through memorable experiences.', pt: 'Construa relações de longo prazo com experiências memoráveis.' },
    checklist: ['Mensaje de bienvenida', 'Seguimiento post-servicio', 'Programa de referidos'],
    articles: ['Cómo convertir clientes en embajadores.', 'Eventos digitales de alto valor.', 'Comunicación relacional para retención.']
  },
  {
    key: 'bienestar',
    title: { es: '9) Bienestar y sostenibilidad personal', en: '9) Well-being and personal sustainability', pt: '9) Bem-estar e sustentabilidade pessoal' },
    desc: { es: 'Protege tu energía para sostener crecimiento creativo y financiero.', en: 'Protect your energy to sustain creative and financial growth.', pt: 'Proteja sua energia para sustentar crescimento criativo e financeiro.' },
    checklist: ['Ritual de inicio', 'Pausa regenerativa', 'Cierre diario'],
    articles: ['Evitar burnout en etapas intensas.', 'Límites profesionales saludables.', 'Matriz de decisión para decir no.']
  }
];

const blogPosts = [
  { title: 'Guía de pricing sin humo', text: 'Estructura ofertas con claridad, margen y confianza.' },
  { title: 'Producción audiovisual ágil', text: 'Flujo para grabar, editar y publicar en una sola jornada.' },
  { title: 'Marca personal sin personaje falso', text: 'Cómo mantener autenticidad con estrategia comercial.' }
];

const i18n = {
  es: {
    loading: 'Cargando experiencia cinematográfica…', nav_home: 'Inicio', nav_sections: 'Secciones', nav_barber: 'Barbería Lab', nav_blog: 'Blog', nav_contact: 'Contacto',
    hero_title: 'No esperes claridad: constrúyela hoy.', hero_mystery: 'Todo creador teme quedarse sin rumbo. Aquí conviertes ruido en sistema.',
    hero_truth: 'Menos promesas, más procesos: diseña, produce, publica y cobra con enfoque real.', cta_start: 'Activar laboratorio',
    cta_manifesto: 'Ver manifiesto global', future_pronouns_title: 'Resonar en futuro', media_title: 'Muestras audiovisuales',
    sections_title: '9 secciones estratégicas de ejecución', barber_title: 'Barbería Elite: negocio + academia + estudio',
    barber_window: 'Ventana oficial del negocio físico', barber_window_desc: 'Presentación premium de servicios, equipo, estilo y cultura de marca.',
    barber_university: 'Universidad y academia', barber_university_desc: 'Rutas de aprendizaje con material descargable y retos semanales.',
    barber_content: 'Centro audiovisual', barber_content_desc: 'Producción de contenido educativo y entretenimiento temático.',
    booking_title: 'Reserva y agenda personalizada', booking_cta: 'Guardar reserva', calendar_title: 'Reloj + calendario de acciones', save_note: 'Guardar nota',
    blog_title: 'Blog quincenal', comment_title: 'Comentario rápido', comment_send: 'Publicar comentario', contact_title: 'Contacto para revista digital',
    contact_send: 'Enviar', premium_title: 'Área privada premium', premium_access: 'Acceder', premium_msg: 'Contenido exclusivo desbloqueado: masterclasses y plantillas.',
    admin_info: 'Solo lectura de formularios: contactos y comentarios.', manifesto_title: 'Manifiesto Global Resonará'
  },
  en: {
    loading: 'Loading cinematic experience…', nav_home: 'Home', nav_sections: 'Sections', nav_barber: 'Barber Lab', nav_blog: 'Blog', nav_contact: 'Contact',
    hero_title: 'Do not wait for clarity: build it now.', hero_mystery: 'Every creator fears losing direction. Here you turn noise into systems.',
    hero_truth: 'Fewer promises, more process: design, produce, publish, and charge.', cta_start: 'Activate lab', cta_manifesto: 'Open global manifesto',
    future_pronouns_title: 'Resonar in future', media_title: 'Audiovisual samples', sections_title: '9 strategic execution sections',
    barber_title: 'Elite Barber: business + academy + studio', barber_window: 'Official physical-business window',
    barber_window_desc: 'Premium showcase of services, crew, style, and culture.', barber_university: 'University and academy',
    barber_university_desc: 'Learning tracks with downloadable resources and weekly challenges.', barber_content: 'Audiovisual center',
    barber_content_desc: 'Educational and entertainment content production.', booking_title: 'Booking and personal schedule', booking_cta: 'Save booking',
    calendar_title: 'Clock + action calendar', save_note: 'Save note', blog_title: 'Biweekly blog', comment_title: 'Quick comment', comment_send: 'Post comment',
    contact_title: 'Contact for digital magazine', contact_send: 'Send', premium_title: 'Premium private area', premium_access: 'Access',
    premium_msg: 'Exclusive content unlocked: masterclasses and templates.', admin_info: 'Read-only forms: contacts and comments.', manifesto_title: 'Resonará Global Manifesto'
  },
  pt: {
    loading: 'Carregando experiência cinematográfica…', nav_home: 'Início', nav_sections: 'Seções', nav_barber: 'Barbearia Lab', nav_blog: 'Blog', nav_contact: 'Contato',
    hero_title: 'Não espere clareza: construa hoje.', hero_mystery: 'Todo criador teme perder direção. Aqui você transforma ruído em sistema.',
    hero_truth: 'Menos promessas, mais processo: desenhe, produza, publique e venda.', cta_start: 'Ativar laboratório', cta_manifesto: 'Ver manifesto global',
    future_pronouns_title: 'Resonar no futuro', media_title: 'Amostras audiovisuais', sections_title: '9 seções estratégicas de execução',
    barber_title: 'Barbearia Elite: negócio + academia + estúdio', barber_window: 'Vitrine oficial do negócio físico',
    barber_window_desc: 'Apresentação premium de serviços, equipe, estilo e cultura.', barber_university: 'Universidade e academia',
    barber_university_desc: 'Trilhas de aprendizado com materiais para download e desafios semanais.', barber_content: 'Centro audiovisual',
    barber_content_desc: 'Produção de conteúdo educativo e entretenimento.', booking_title: 'Reserva e agenda personalizada', booking_cta: 'Salvar reserva',
    calendar_title: 'Relógio + calendário de ações', save_note: 'Salvar nota', blog_title: 'Blog quinzenal', comment_title: 'Comentário rápido',
    comment_send: 'Publicar comentário', contact_title: 'Contato para revista digital', contact_send: 'Enviar', premium_title: 'Área privada premium',
    premium_access: 'Acessar', premium_msg: 'Conteúdo exclusivo desbloqueado: masterclasses e modelos.', admin_info: 'Somente leitura: contatos e comentários.',
    manifesto_title: 'Manifesto Global Resonará'
  }
};

const manifesto = `Resonará integra nueve frentes: identidad, monetización, tiempo, contenido, escritura, operaciones, neurocomunicación, fidelización y bienestar.\n\nEl objetivo es convertir pasión en trabajo sostenible, con procesos claros para artistas, freelancers, nómades digitales y profesionales de barbería/educación.\n\nLa promesa central: claridad ejecutable, creación constante y decisiones de negocio alineadas con salud personal.`;

let currentLang = localStorage.getItem('lang') || 'es';

function scrollToId(id) { document.getElementById(id).scrollIntoView({ behavior: 'smooth' }); }
window.scrollToId = scrollToId;

function applyI18n() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (i18n[currentLang][key]) el.textContent = i18n[currentLang][key];
  });
}

function renderSections() {
  const container = document.getElementById('sectionsContainer');
  container.innerHTML = '';
  sections.forEach((sec, idx) => {
    const card = document.createElement('article');
    card.className = 'card glass';
    card.innerHTML = `
      <div class="img"></div>
      <h3>${sec.title[currentLang]}</h3>
      <p>${sec.desc[currentLang]}</p>
      <strong>Checklist</strong>
      <ul>${sec.checklist.map((c) => `<li>${c}</li>`).join('')}</ul>
      <strong>Artículos (3)</strong>
      <ul>${sec.articles.map((a) => `<li>${a}</li>`).join('')}</ul>
      <strong>Herramientas gratis/pago</strong>
      <ul><li>Canva / Figma / CapCut</li><li>Notion / Trello / Obsidian</li><li>DaVinci Resolve / Adobe CC / Descript</li></ul>
      <div class="tool-row">
        <button class="secondary" onclick="downloadSection('${sec.key}','txt')">TXT</button>
        <button class="secondary" onclick="downloadSection('${sec.key}','html')">HTML</button>
        <button class="secondary" onclick="downloadSection('${sec.key}','pdf')">PDF</button>
      </div>
      <textarea id="tool-${sec.key}" rows="3" placeholder="Editor interno: escribe y descarga..."></textarea>
    `;
    card.style.transform = `translateY(${(idx % 3) * 2}px)`;
    container.appendChild(card);
  });
}

function download(filename, type, content) {
  const blob = new Blob([content], { type });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

function toSimplePdf(text) {
  const safe = text.replace(/[()\\]/g, '\\$&').slice(0, 2500);
  return `%PDF-1.1\n1 0 obj<< /Type /Catalog /Pages 2 0 R>>endobj\n2 0 obj<< /Type /Pages /Count 1 /Kids [3 0 R]>>endobj\n3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>endobj\n4 0 obj<< /Length ${safe.length + 70} >>stream\nBT /F1 12 Tf 50 740 Td (${safe}) Tj ET\nendstream\nendobj\n5 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica>>endobj\nxref\n0 6\n0000000000 65535 f\n0000000010 00000 n\n0000000060 00000 n\n0000000117 00000 n\n0000000260 00000 n\n0000000400 00000 n\ntrailer<< /Root 1 0 R /Size 6>>\nstartxref\n480\n%%EOF`;
}

function sectionContent(sec) {
  const note = document.getElementById(`tool-${sec.key}`)?.value || '';
  return `${sec.title.es}\n${sec.desc.es}\nChecklist: ${sec.checklist.join(', ')}\nArtículos: ${sec.articles.join(' | ')}\nNotas: ${note}`;
}

window.downloadSection = (key, format) => {
  const sec = sections.find((s) => s.key === key);
  if (!sec) return;
  const content = sectionContent(sec);
  if (format === 'txt') download(`${key}.txt`, 'text/plain', content);
  if (format === 'html') download(`${key}.html`, 'text/html', `<h1>${sec.title.es}</h1><p>${content}</p>`);
  if (format === 'pdf') download(`${key}.pdf`, 'application/pdf', toSimplePdf(content));
};

function renderBlog() {
  const box = document.getElementById('blogPosts');
  box.innerHTML = blogPosts.map((p) => `<article class="blog-post glass"><h3>${p.title}</h3><p>${p.text}</p></article>`).join('');
}

function bindForms() {
  document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const all = JSON.parse(localStorage.getItem('bookings') || '[]');
    all.push(data);
    localStorage.setItem('bookings', JSON.stringify(all));
    e.target.reset();
    renderBookings();
  });

  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const all = JSON.parse(localStorage.getItem('contacts') || '[]');
    all.push({ ...data, date: new Date().toISOString() });
    localStorage.setItem('contacts', JSON.stringify(all));
    e.target.reset();
    refreshAdmin();
  });

  document.getElementById('commentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const all = JSON.parse(localStorage.getItem('comments') || '[]');
    all.push({ ...data, date: new Date().toISOString() });
    localStorage.setItem('comments', JSON.stringify(all));
    e.target.reset();
    refreshAdmin();
  });

  document.getElementById('premiumLogin').addEventListener('submit', (e) => {
    e.preventDefault();
    const pwd = new FormData(e.target).get('password');
    if (pwd === 'asdfg6789') {
      document.getElementById('premiumContent').hidden = false;
      e.target.hidden = true;
    } else {
      alert('Contraseña incorrecta');
    }
  });
}

function renderBookings() {
  const data = JSON.parse(localStorage.getItem('bookings') || '[]');
  document.getElementById('bookingList').innerHTML = data.map((b) => `<li>${b.date} ${b.time} — ${b.name}</li>`).join('');
}

function clockLoop() {
  const el = document.getElementById('clock');
  setInterval(() => {
    el.textContent = new Date().toLocaleString(currentLang === 'en' ? 'en-US' : currentLang === 'pt' ? 'pt-BR' : 'es-ES');
  }, 1000);
}

function bindCalendar() {
  const dateInput = document.getElementById('calendarDate');
  dateInput.valueAsDate = new Date();
  const load = () => {
    const notes = JSON.parse(localStorage.getItem('calendarNotes') || '{}');
    document.getElementById('notesList').innerHTML = Object.entries(notes)
      .map(([d, n]) => `<li><strong>${d}</strong>: ${n}</li>`)
      .join('');
  };
  document.getElementById('saveNote').addEventListener('click', () => {
    if (!dateInput.value) return;
    const text = document.getElementById('calendarNote').value.trim();
    const notes = JSON.parse(localStorage.getItem('calendarNotes') || '{}');
    notes[dateInput.value] = text;
    localStorage.setItem('calendarNotes', JSON.stringify(notes));
    document.getElementById('calendarNote').value = '';
    load();
  });
  load();
}

function bindManifesto() {
  document.getElementById('manifestoText').textContent = manifesto;
  const modal = document.getElementById('manifestoModal');
  document.getElementById('openManifesto').onclick = () => (modal.hidden = false);
  document.getElementById('closeManifesto').onclick = () => (modal.hidden = true);
  document.getElementById('downloadTxt').onclick = () => download('manifiesto.txt', 'text/plain', manifesto);
  document.getElementById('downloadHtml').onclick = () => download('manifiesto.html', 'text/html', `<h1>Manifiesto</h1><p>${manifesto}</p>`);
  document.getElementById('downloadPdf').onclick = () => download('manifiesto.pdf', 'application/pdf', toSimplePdf(manifesto));
}

function refreshAdmin() {
  document.getElementById('adminContacts').textContent = localStorage.getItem('contacts') || '[]';
  document.getElementById('adminComments').textContent = localStorage.getItem('comments') || '[]';
}

function bindUi() {
  document.getElementById('themeToggle').onclick = () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  };
  document.getElementById('languageSelect').value = currentLang;
  document.getElementById('languageSelect').onchange = (e) => {
    currentLang = e.target.value;
    localStorage.setItem('lang', currentLang);
    applyI18n();
    renderSections();
  };
  document.getElementById('refreshAdmin').onclick = refreshAdmin;

  if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');
}

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').style.opacity = '0';
    setTimeout(() => (document.getElementById('loader').style.display = 'none'), 500);
  }, 950);

  applyI18n();
  renderSections();
  renderBlog();
  bindForms();
  renderBookings();
  clockLoop();
  bindCalendar();
  bindManifesto();
  bindUi();
  refreshAdmin();
});
