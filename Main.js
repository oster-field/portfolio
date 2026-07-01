/* ═══════════════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════════════════ */
const T = {
  en: {
    nav_about:'About', nav_work:'Work', nav_pub:'Publications', nav_proj:'Projects', nav_contact:'Contact',
    hero_eye:'Munich, Germany',
    hero_sub:'Data Scientist · R&D Engineer · M.Sc. Computational Mathematics',
    hero_b1:'Get in touch', hero_b2:'View LinkedIn', scroll:'Scroll',
    about_lbl:'About',
    about_q_em:'Expertise with proven impact',
    about_q_rest:' — the complete cycle, from complex math to a deployed container. More than three years of experience in research and building machine learning models.',
    about_body:"Every model has a point where reality stops matching the assumptions. I don't trust its output until I've found that point — and the interesting part isn't building the model, it's noticing where it's been quietly wrong, proving why, and finding how to fix it.",
    about_cv:'View CV',
    btn_diploma:'View diploma',
    btn_ref:'View letter of recommendation',
    exp_ref_note:'Reference available on request',
    exp_gap_role:'M.Sc. Completion &amp; Relocation',
    exp_gap_period:'Nov 2024 – Present',
    exp_gap_text:'Completing my M.Sc., relocating and integrating to Germany; reaching <strong>German B2–C1</strong> — alongside a part-time job (<a href="javascript:void(0)" class="exp-gap-link" onclick="openLightbox(\'lieferando\')">view reference</a>).',
    lb_dl:'Download',
    lb_close:'Close',
    lb_loading:'Loading…',
    s1:'Pipeline speedup<br>10 h → 15 min',
    s2:'Peer-reviewed articles<br>published by age 23',
    s3:'Time-series<br>datapoints processed',
    s4:'International<br>conferences',
    exp_lbl:'Experience', exp_ttl:"Where I've worked",
    exp_org:'Institute of Applied Physics · Academy of Sciences',
    exp_role:'Data Scientist &amp; Research and Development Engineer',
    eb1:'Built sensor data applications within a small cross-functional research team, carrying each <strong>from first idea to production-ready</strong>, mathematically verified solution',
    eb2:'Engineered a domain-driven <strong>data methodology</strong> to clean and extract statistical features from <strong>dozens of gigabytes</strong> of real-world time-series data from long-term field measurements',
    eb3:'Built a <strong>predictive risk-assessment model</strong> that replaced manual risk checks, subsequently commercialised to improve maritime safety',
    eb4:'Formulated and proved a mathematical <strong>theorem</strong> for probability estimation of rare events in stochastic time-series',
    eb5:'Two personal research grants awarded, the largest worth <strong>€130,000</strong>',
    pub_lbl:'Research', pub_ttl:'Publications',
    pa1:'Large-scale statistical analysis of real-world ocean wave measurements from pressure sensors off Sakhalin Island. Derives empirical frequency spectra and wave height distributions, validating theoretical models against field data.',
    pa2:'Numerical simulation study of the statistical behaviour in finite ensembles of irregular ocean waves. Derives probability distribution functions demonstrating how finite-size effects deviate from classical theory.',
    read:'Read paper ↗︎',
    proj_lbl:'Projects', proj_ttl:'Selected work',
    p1d:'End-to-end GUI application for raw ocean pressure-sensor data — reduced workflow from 10 h to 15 min.',
    p2d:'Data pipelines supporting the Springer publication on wave frequency spectra off Sakhalin Island.',
    p3d:'Numerical simulation and probabilistic analysis of random wave fields with wide Fourier spectra.',
    p4d:'Free service monitoring psychiatric appointment availability on Germany\'s 116117 platform. Live and in production.',
    edu_lbl:'Education', edu_ttl:'Academic background',
    e1d:'M.Sc. in Computational Mathematics', e2d:'B.Sc. in Fundamental Mathematics',
    e1s:'University of Passau · Passau, Germany',
    e1m:'March 2026 · GPA <span class="edu-gpa">1.8</span> (Good)',
    e2s:'Higher School of Economics · Moscow, Russia',
    e2m:'June 2023 · GPA <span class="edu-gpa">1.6</span> (Excellent)',
    con_lbl:'Contact', con_ttl:"Let's work together",
    footer_loc:'Munich, Germany',
    con_body:'Data Scientist and R&D Engineer based in Munich, Germany.',
  },
  de: {
    nav_about:'Über mich', nav_work:'Erfahrung', nav_pub:'Publikationen', nav_proj:'Projekte', nav_contact:'Kontakt',
    hero_eye:'München, Deutschland',
    hero_sub:'Data Scientist · R&D Engineer · M.Sc. Computational Mathematics',
    hero_b1:'Kontakt aufnehmen', hero_b2:'LinkedIn ansehen', scroll:'Scrollen',
    about_lbl:'Über mich',
    about_q_em:'Expertise mit nachgewiesener Wirkung',
    about_q_rest:' — der komplette Zyklus, von komplexer Mathematik bis zum produktiv eingesetzten Container. Über 3 Jahre Erfahrung in Forschung und Entwicklung von ML-Modellen.',
    about_body:'Jedes Modell hat einen Punkt, an dem die Realität nicht mehr mit den Annahmen übereinstimmt. Ich vertraue seinem Ergebnis erst, wenn ich diesen Punkt gefunden habe. Der eigentlich interessante Teil ist nicht der Bau des Modells, sondern zu erkennen, wo es sich unbemerkt geirrt hat, zu beweisen, warum, und herauszufinden, wie man es behebt.',
    about_cv:'Lebenslauf ansehen',
    btn_diploma:'Diplom ansehen',
    btn_ref:'Empfehlungsschreiben ansehen',
    exp_ref_note:'Referenz auf Anfrage erhältlich',
    exp_gap_role:'Masterabschluss &amp; Umzug',
    exp_gap_period:'Nov 2024 – heute',
    exp_gap_text:'Abschluss meines Masterstudiums, Umzug nach und Integration in Deutschland; Erreichen von <strong>Deutsch B2–C1</strong> — neben einem Nebenjob (<a href="javascript:void(0)" class="exp-gap-link" onclick="openLightbox(\'lieferando\')">Nachweis ansehen</a>).',
    lb_dl:'Herunterladen',
    lb_close:'Schließen',
    lb_loading:'Wird geladen…',
    s1:'Pipeline-Beschleunigung<br>10 h → 15 Min',
    s2:'Begutachtete Artikel<br>veröffentlicht im Alter von 23',
    s3:'Zeitreihen-<br>datenpunkte verarbeitet',
    s4:'Internationale<br>Konferenzen',
    exp_lbl:'Erfahrung', exp_ttl:'Beruflicher Werdegang',
    exp_org:'Institut für Angewandte Physik · Akademie der Wissenschaften',
    exp_role:'Data Scientist &amp; Research and Development Engineer',
    eb1:'Entwicklung von Sensor-Datenanwendungen in einem kleinen, interdisziplinären Forschungsteam — <strong>von der ersten Idee bis zur produktionsreifen</strong>, mathematisch verifizierten Lösung',
    eb2:'Konzipierung einer <strong>Datenverarbeitungsmethodik</strong> zur Bereinigung und Merkmalsextraktion aus <strong>zahlreichen Gigabyte</strong> realer Zeitreihendaten aus Langzeit-Feldmessungen',
    eb3:'Entwicklung eines <strong>Modells zur prädiktiven Risikobewertung</strong>, das manuelle Prüfungen ersetzte und anschließend zur Verbesserung der Seesicherheit kommerzialisiert wurde',
    eb4:'Formulierung und Beweis eines mathematischen <strong>Theorems</strong> zur Wahrscheinlichkeitsschätzung seltener Ereignisse in stochastischen Zeitreihen',
    eb5:'Zwei persönliche Forschungsstipendien erhalten, das größte im Wert von <strong>130.000 €</strong>',
    pub_lbl:'Forschung', pub_ttl:'Publikationen',
    pa1:'Großskalige statistische Analyse realer Ozeanwellenmessungen von Drucksensoren vor Sachalin. Empirische Frequenzspektren und Wellenhöhenverteilungen werden hergeleitet und mit Feldmessungen validiert.',
    pa2:'Numerische Simulationsstudie zum statistischen Verhalten in endlichen Ensembles irregulärer Ozeanwellen. Herleitung von Wahrscheinlichkeitsverteilungsfunktionen für Extremereignisse.',
    read:'Publikation lesen ↗︎',
    proj_lbl:'Projekte', proj_ttl:'Ausgewählte Arbeiten',
    p1d:'GUI-Anwendung zur Rohverarbeitung von Ozean-Sensordaten — Workflow von 10 h auf 15 Min reduziert.',
    p2d:'Datenpipelines als Grundlage der Springer-Publikation zu Wellenspektren vor Sachalin.',
    p3d:'Numerische Simulation und probabilistische Analyse irregulären Wellenverhaltens.',
    p4d:'Kostenloser Dienst zur Überwachung freier Psychiater-Termine über 116117. Live und in Produktion.',
    edu_lbl:'Ausbildung', edu_ttl:'Akademischer Werdegang',
    e1d:'M.Sc. Computational Mathematics', e2d:'B.Sc. Fundamental Mathematics',
    e1s:'Universität Passau · Passau, Deutschland',
    e1m:'März 2026 · Note <span class="edu-gpa">1,8</span> (gut)',
    e2s:'Higher School of Economics · Moskau, Russland',
    e2m:'Juni 2023 · Note <span class="edu-gpa">1,6</span> (sehr gut)',
    con_lbl:'Kontakt', con_ttl:'Zusammenarbeiten',
    footer_loc:'München, Deutschland',
    con_body:'Data Scientist und R&D Engineer mit Sitz in München, Deutschland.',
  }
};

let lang = 'en';
// positions the droplet behind the active button
function positionDroplet(pillId, dropletId) {
  const pill    = document.getElementById(pillId);
  const droplet = document.getElementById(dropletId);
  if (!pill || !droplet) return;
  const activeBtn = pill.querySelector('.lang-btn.on');
  if (!activeBtn) return;
  // skip if not yet laid out — window.load call retries
  if (activeBtn.offsetWidth === 0) return;
  droplet.style.left  = activeBtn.offsetLeft + 'px';
  droplet.style.width = activeBtn.offsetWidth + 'px';
}

function positionAllDroplets() {
  positionDroplet('lang-pill', 'lang-droplet');
  positionDroplet('mob-lang-pill', 'mob-lang-droplet');
}

function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('on', b.textContent === l.toUpperCase()));
  document.querySelectorAll('[data-k]').forEach(el => {
    const v = T[l][el.dataset.k];
    if (v !== undefined) el.innerHTML = v;
  });
  document.documentElement.lang = l;
  // Glide the droplet to the newly active button
  positionAllDroplets();
}

// keep droplet aligned on load and resize
window.addEventListener('load', () => {
  // snap instantly on first paint, no slide-in
  document.querySelectorAll('.lang-droplet').forEach(d => d.style.transition = 'none');
  positionAllDroplets();
  // retry once — iOS can report width 0 during address-bar animation
  setTimeout(positionAllDroplets, 200);
  requestAnimationFrame(() => {
    document.querySelectorAll('.lang-droplet').forEach(d => d.style.transition = '');
  });
});
window.addEventListener('resize', positionAllDroplets, { passive: true });

/* ═══════════════════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════════════════════ */
function openMenu() {
  document.getElementById('mob-menu').classList.add('open');
  document.getElementById('ham-btn').classList.add('open');
  document.getElementById('ham-btn').setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('mob-menu').classList.remove('open');
  document.getElementById('ham-btn').classList.remove('open');
  document.getElementById('ham-btn').setAttribute('aria-expanded', 'false');
  // Only restore scroll if lightbox is also closed
  if (!document.getElementById('lb-overlay').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function toggleMenu() {
  document.getElementById('mob-menu').classList.contains('open') ? closeMenu() : openMenu();
}

/* ═══════════════════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════════════════════ */
const LB_DOCS = {
  cv: {
    en: { type: 'CV / Résumé',       title: 'Curriculum Vitae — Andrei Tregubov', path: 'doc/cv_en.pdf' },
    de: { type: 'Lebenslauf',        title: 'Lebenslauf — Andrei Tregubov',        path: 'doc/cv_de.pdf' },
  },
  msc: {
    en: { type: 'Academic Diploma',  title: 'Master of Science · Computational Mathematics · University of Passau', path: 'doc/msc.pdf' },
    de: { type: 'Akademisches Diplom', title: 'Master of Science · Computational Mathematics · Universität Passau', path: 'doc/msc.pdf' },
  },
  bsc: {
    en: { type: 'Academic Diploma',  title: 'Bachelor of Science · Fundamental Mathematics · Higher School of Economics', path: 'doc/bsc.pdf' },
    de: { type: 'Akademisches Diplom', title: 'Bachelor of Science · Fundamental Mathematics · Higher School of Economics', path: 'doc/bsc.pdf' },
  },
  ref: {
    en: { type: 'Letter of Recommendation', title: 'Institute of Applied Physics · Academy of Sciences', path: 'doc/IAP.pdf' },
    de: { type: 'Empfehlungsschreiben',      title: 'Institut für Angewandte Physik · Akademie der Wissenschaften', path: 'doc/IAP.pdf' },
  },
  lieferando: {
    en: { type: 'Reference Letter', title: 'Employment Reference', path: 'doc/lieferando.pdf' },
    de: { type: 'Arbeitszeugnis',   title: 'Arbeitszeugnis',       path: 'doc/lieferando.pdf' },
  },
};


/* ─── PDF.js setup ─── */
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

const NATURAL_SCALE = 96 / 72;  // 100% = 96dpi / 72pt
const ZOOM_STEPS    = [0.5, 0.67, 0.75, 0.9, 1, 1.25, 1.5, 1.75, 2, 2.5, 3];

let lbPdfDoc    = null;
let lbBaseScale = NATURAL_SCALE;
let lbZoomIdx   = 4;
let lbGen       = 0;   // generation counter — stale renders check this and abort

function lbZoom(dir) {
  lbZoomIdx = Math.max(0, Math.min(ZOOM_STEPS.length - 1, lbZoomIdx + dir));
  document.getElementById('lb-zoom-label').textContent =
    Math.round(ZOOM_STEPS[lbZoomIdx] * 100) + '%';
  if (!lbPdfDoc) return;
  const gen = ++lbGen;
  lbDrawPages(lbPdfDoc, lbBaseScale * ZOOM_STEPS[lbZoomIdx], gen);
}

async function lbDrawPages(pdf, scale, gen) {
  const pages   = document.getElementById('lb-pdf-pages');
  const loading = document.getElementById('lb-pdf-loading');
  pages.innerHTML = '';
  loading.classList.remove('hidden');
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

  for (let i = 1; i <= pdf.numPages; i++) {
    if (lbGen !== gen) return;   // stale — a newer render started, abort

    const page = await pdf.getPage(i);
    if (lbGen !== gen) return;

    const vp     = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    canvas.width  = Math.round(vp.width  * dpr);
    canvas.height = Math.round(vp.height * dpr);
    canvas.style.width  = Math.round(vp.width)  + 'px';
    canvas.style.height = Math.round(vp.height) + 'px';
    const wrap = document.createElement('div');
    wrap.className = 'lb-page-wrap';
    wrap.appendChild(canvas);
    pages.appendChild(wrap);
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    await page.render({ canvasContext: ctx, viewport: vp }).promise;
  }

  if (lbGen === gen) loading.classList.add('hidden');
}

async function renderPDF(path) {
  const gen = ++lbGen;
  const viewer = document.getElementById('lb-pdf-viewer');
  const containerW = viewer.getBoundingClientRect().width;

  try {
    const pdf = await pdfjsLib.getDocument(path).promise;
    if (lbGen !== gen) return;   // lightbox closed while loading

    lbPdfDoc = pdf;
    const firstPage = await pdf.getPage(1);
    const naturalW  = firstPage.getViewport({ scale: NATURAL_SCALE }).width;
    const availW    = containerW - 32;
    lbBaseScale = (availW > 0 && naturalW > availW)
      ? availW / firstPage.getViewport({ scale: 1 }).width
      : NATURAL_SCALE;

    lbZoomIdx = 4;
    document.getElementById('lb-zoom-label').textContent = '100%';
    await lbDrawPages(pdf, lbBaseScale * ZOOM_STEPS[lbZoomIdx], gen);

  } catch (err) {
    if (lbGen === gen) {
      console.error('PDF render error:', err);
      const txt = document.querySelector('#lb-pdf-loading .lb-loading-text');
      if (txt) txt.textContent = 'Could not load document.';
    }
  }
}

function openLightbox(docKey) {
  const meta = (LB_DOCS[docKey] || {})[lang] || (LB_DOCS[docKey] || {})['en'];
  if (!meta) return;

  document.getElementById('lb-type').textContent  = meta.type;
  document.getElementById('lb-title').textContent = meta.title;
  document.getElementById('lb-dl').href           = meta.path;

  document.getElementById('lb-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  // Wait for overlay to paint so getBoundingClientRect returns real width
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { renderPDF(meta.path); });
  });
}

function closeLightbox() {
  lbGen++;   // cancel any in-progress render immediately
  document.getElementById('lb-overlay').classList.remove('open');
  // Only restore scroll if mobile menu is also closed (mirrors closeMenu logic)
  if (!document.getElementById('mob-menu').classList.contains('open')) {
    document.body.style.overflow = '';
  }
  setTimeout(() => {
    if (lbPdfDoc) { lbPdfDoc.destroy(); lbPdfDoc = null; }
    document.getElementById('lb-pdf-pages').innerHTML = '';
    const loading = document.getElementById('lb-pdf-loading');
    loading.classList.remove('hidden');
    const txt = loading.querySelector('.lb-loading-text');
    if (txt) txt.textContent = txt.getAttribute('data-k') === 'lb_loading'
      ? (lang === 'de' ? 'Wird geladen…' : 'Loading…') : 'Loading…';
  }, 300);
}

// Close on backdrop click
document.getElementById('lb-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeLightbox(); closeMenu(); }
});

/* ═══════════════════════════════════════════════════
   HERO WAVE CANVAS  —  periodic purple surge
══════════════════════════════════════════════════════ */
(function () {
  const cv = document.getElementById('wave-canvas');
  const cx = cv.getContext('2d');
  let W, H, t = 0, mouse = {x:0, y:0};

  // Normal palette  (blue/cyan)
  const BASE = [
    {a:68, f:.0068, s:.016, p:0,   rgb:[0,75,195],   op:.32},
    {a:44, f:.013,  s:.028, p:2.1, rgb:[0,145,255],  op:.20},
    {a:27, f:.022,  s:.048, p:4.3, rgb:[0,210,255],  op:.14},
    {a:13, f:.038,  s:.078, p:1.1, rgb:[170,235,255],op:.07},
  ];
  // Surge palette  (violet/purple)
  const SURGE_RGB = [
    [120,30,200],
    [160,60,255],
    [200,100,255],
    [220,180,255],
  ];
  // Background gradient stops: [normal, surge]
  const BG = {
    s0: ['#000000','#04000c'],
    s1: ['#000a18','#110028'],
    s2: ['#001530','#1c0045'],
  };

  // Surge state  (0 = idle, counting down to next event)
  let surge = {
    blend: 0,      // 0 = normal, 1 = full purple
    dir:   0,      // 1 = rising, -1 = falling, 0 = idle
    hold:  0,      // frames to hold at peak
    next:  480,    // frames until next trigger
  };

  const RISE_SPEED  = 0.008;   // blend speed in
  const FALL_SPEED  = 0.005;   // blend speed out
  const AMP_MULT    = 1.65;    // wave amplitude multiplier at peak
  const HOLD_FRAMES = 220;     // frames to hold purple peak

  // Scroll-hint elements — cached once for colour sync
  const heroEl   = document.getElementById('hero');
  const hintSpan = document.querySelector('.scroll-hint span');
  const hintLine = document.querySelector('.scroll-line');
  // Colour endpoints: cyan (normal) → lavender (surge)
  const HINT_NORMAL = [0, 199, 255];
  const HINT_SURGE  = [210, 170, 255];


  function lerp(a, b, t) { return a + (b - a) * t; }
  function easeInOut(t) { return t < .5 ? 2*t*t : -1+(4-2*t)*t; }

  function resize() { W = cv.width = window.innerWidth; H = cv.height = window.innerHeight; }

  function drawLayer(l, i, blend) {
    const eased  = easeInOut(blend);
    const [r0,g0,b0] = l.rgb;
    const [r1,g1,b1] = SURGE_RGB[i];
    const r = Math.round(lerp(r0,r1,eased));
    const g = Math.round(lerp(g0,g1,eased));
    const b = Math.round(lerp(b0,b1,eased));
    const amp = l.a * (1 + eased * (AMP_MULT - 1));
    const baseY = H * (.63 - eased * .04);   // waves rise slightly during surge

    cx.beginPath(); cx.moveTo(0, H);
    for (let x = 0; x <= W + 4; x += 3) {
      let y = baseY + Math.sin(x*l.f + t*l.s + l.p) * amp;
      const mdx = x - mouse.x;
      y += Math.exp(-mdx*mdx/50000) * (mouse.y/H - .5) * 22;
      cx.lineTo(x, y);
    }
    cx.lineTo(W,H); cx.closePath();
    cx.fillStyle = `rgba(${r},${g},${b},${l.op + eased * .06})`;
    cx.fill();
  }

  function frame() {
    const e = easeInOut(surge.blend);
    // Background lives in CSS on #hero — canvas is transparent
    // We only update the CSS gradient so the photo beneath stays visible
    const top  = blendColor(BG.s0[0], BG.s0[1], e);
    const mid  = blendColor(BG.s1[0], BG.s1[1], e);
    const bot  = blendColor(BG.s2[0], BG.s2[1], e);
    heroEl.style.background = `linear-gradient(to bottom, ${top} 0%, ${mid} 45%, ${bot} 100%)`;
    cx.clearRect(0,0,W,H);  // clear only — waves draw on transparent canvas

    BASE.forEach((l, i) => drawLayer(l, i, surge.blend));

    // Surge state machine
    if (surge.dir === 1) {
      surge.blend = Math.min(1, surge.blend + RISE_SPEED);
      if (surge.blend >= 1) { surge.dir = 0; surge.hold = HOLD_FRAMES; }
    } else if (surge.dir === 0 && surge.hold > 0) {
      surge.hold--;
      if (surge.hold <= 0) surge.dir = -1;
    } else if (surge.dir === -1) {
      surge.blend = Math.max(0, surge.blend - FALL_SPEED);
      if (surge.blend <= 0) { surge.dir = 0; surge.next = 380 + Math.random() * 360; }
    } else {
      // idle — count down to next surge
      surge.next--;
      if (surge.next <= 0) surge.dir = 1;
    }

    // Sync scroll-hint colour with surge blend
    if (hintSpan) {
      const hr = Math.round(lerp(HINT_NORMAL[0], HINT_SURGE[0], e));
      const hg = Math.round(lerp(HINT_NORMAL[1], HINT_SURGE[1], e));
      const hb = Math.round(lerp(HINT_NORMAL[2], HINT_SURGE[2], e));
      const hc = `rgb(${hr},${hg},${hb})`;
      hintSpan.style.color = hc;
      hintSpan.style.textShadow = `0 0 10px rgba(${hr},${hg},${hb},.5)`;
      hintLine.style.background = `linear-gradient(to bottom, ${hc}, transparent)`;
    }


    t++;
    requestAnimationFrame(frame);
  }

  // hex to rgb lerp helper
  function blendColor(hex1, hex2, t) {
    const p = (h) => [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)];
    const [r1,g1,b1] = p(hex1), [r2,g2,b2] = p(hex2);
    return `rgb(${Math.round(lerp(r1,r2,t))},${Math.round(lerp(g1,g2,t))},${Math.round(lerp(b1,b2,t))})`;
  }

  window.addEventListener('resize', resize, {passive:true});
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, {passive:true});
  resize(); frame();
})();

/* ═══════════════════════════════════════════════════
   PUBLICATION VISUALISATIONS
   — mirrors fractal's lastWidth guard (blocks iOS false resize)
   — mirrors fractal's isVisible flag (no draw when off-screen)
══════════════════════════════════════════════════════ */
function initViz(id, drawFn) {
  const cv     = document.getElementById(id);
  if (!cv) return;
  const parent = cv.parentElement;
  let lastWidth = 0;
  let isVisible = false;
  let played    = false;
  let stopFn    = null;   // drawFn may return a function to cancel its own RAF loop

  function start() {
    cv.width  = parent.offsetWidth;
    cv.height = parent.offsetHeight;
    lastWidth = cv.width;
    if (stopFn) { stopFn(); stopFn = null; }
    stopFn = drawFn(cv) || null;
    played = true;
  }

  function doResize() {
    const w = parent.offsetWidth;
    // Width unchanged = iOS address-bar height-only event → ignore
    if (w === lastWidth) return;
    lastWidth = w;
    cv.width  = w;               // resetting .width clears canvas automatically
    cv.height = parent.offsetHeight;
    if (isVisible) {
      start();                   // real resize while visible → restart cleanly
    } else {
      if (stopFn) { stopFn(); stopFn = null; }
      played = false;            // real resize while off-screen → replay on next scroll-in
    }
  }

  // Observer stays connected (no disconnect) so isVisible stays accurate
  new IntersectionObserver(entries => {
    isVisible = entries[0].isIntersecting;
    if (isVisible && !played) {
      start();                   // first scroll-in → play
    } else if (!isVisible && stopFn) {
      stopFn(); stopFn = null;   // scrolled away → pause infinite loops (no-op for one-shot anims)
      played = false;            // allow infinite loops to cleanly restart their phase on return
    }
  }, { threshold: 0.25 }).observe(cv);

  window.addEventListener('resize', doResize, { passive: true });
}

/* Viz 1 — Wave height histogram + Rayleigh curve + rogue zone */
initViz('viz1', function(cv) {
  const cx = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  const PAD = {l:40,r:20,t:30,b:28};
  const bins = 18, xMax = 3.2;
  const rayleigh = Array.from({length:bins}, (_,i) => { const x=(i+.5)/bins*xMax; return x*Math.exp(-x*x/2); });
  const rMax = Math.max(...rayleigh);
  const empirical = rayleigh.map((v,i) => {
    const tail = i > bins*.72 ? v*(1+(i-bins*.72)*.18) : v;
    return tail*(.87+Math.random()*.06);
  });
  let frame = 0, raf;

  function draw() {
    cx.clearRect(0,0,W,H);
    const progress = Math.min(1, frame/55);
    const chartW = W-PAD.l-PAD.r, chartH = H-PAD.t-PAD.b;
    const bw = chartW / bins;

    for (let i = 0; i < bins; i++) {
      const bh = empirical[i]/rMax * chartH * .88 * progress;
      const x = PAD.l + i*bw;
      const y = PAD.t + chartH - bh;
      const g = cx.createLinearGradient(0,y,0,PAD.t+chartH);
      g.addColorStop(0,'rgba(0,113,227,.85)'); g.addColorStop(1,'rgba(0,113,227,.18)');
      cx.fillStyle = g; cx.fillRect(x+1,y,bw-2,bh);
    }

    // Rayleigh curve
    cx.beginPath();
    for (let i = 0; i < bins; i++) {
      const x = PAD.l + (i+.5)*bw;
      const y = PAD.t + chartH - rayleigh[i]/rMax*chartH*.88*progress;
      i===0 ? cx.moveTo(x,y) : cx.lineTo(x,y);
    }
    cx.strokeStyle='rgba(0,199,255,.75)'; cx.lineWidth=1.8; cx.stroke();

    if (progress > .88) {
      const rx = PAD.l + bins*.74*bw;
      cx.fillStyle='rgba(255,90,40,.07)'; cx.fillRect(rx,PAD.t,W-rx-PAD.r,chartH);
      cx.font='500 8.5px JetBrains Mono, monospace';
      cx.fillStyle='rgba(255,140,70,.65)'; cx.fillText('ROGUE ZONE',rx+5,PAD.t+13);
    }

    // Legend
    cx.font='300 9px DM Sans, sans-serif'; cx.fillStyle='rgba(134,134,139,.7)';
    cx.fillText('Wave height distribution (h/σ)',PAD.l,PAD.t-12);
    cx.fillStyle='rgba(0,199,255,.6)'; cx.fillRect(W-PAD.r-80,PAD.t-18,10,2);
    cx.fillStyle='rgba(134,134,139,.65)'; cx.fillText('Rayleigh',W-PAD.r-66,PAD.t-14);
    cx.fillStyle='rgba(0,113,227,.7)'; cx.fillRect(W-PAD.r-80,PAD.t-8,10,7);
    cx.fillStyle='rgba(134,134,139,.65)'; cx.fillText('Empirical',W-PAD.r-66,PAD.t-2);

    frame++;
    if (frame < 100) raf = requestAnimationFrame(draw);
  }
  draw();
});

/* Viz 2 — Dispersive wave-packet focusing
   Physics: direct port of Animation.py  |  Optimisation: phasor rotation (no per-point trig)
   Entrance: wave grows from x-axis like viz1 bars  |  Loop: ping-pong (no restart jump) */
initViz('viz2', function(cv) {
  const cx = cv.getContext('2d');

  // ── Physics constants (Animation.py) ────────────────────────────────────
  const l = 2 * Math.sqrt(2), s = 200, g = 9.8;
  const XMIN = -75, XMAX = 75, T0 = -10, T1 = 10;
  const NPTS = 220;
  const dx   = (XMAX - XMIN) / NPTS;

  // Build harmonic table
  const Hkn = [], Hwn = [], Han = [];
  for (let n = 1; n <= 350; n++) {
    const kn = Math.PI * n / s;
    const An = 2 * Math.sin(n * l * Math.PI * Math.sqrt(2 * Math.PI) / (4 * s)) / (n * Math.PI);
    if (Math.abs(An) > 5e-5) { Hkn.push(kn); Hwn.push(Math.sqrt(g * kn)); Han.push(An); }
  }
  const HL = Hkn.length;

  // Pre-compute phasor step rotations (fixed for all frames — dx never changes)
  const cosDel = new Float32Array(HL);
  const sinDel = new Float32Array(HL);
  for (let i = 0; i < HL; i++) {
    cosDel[i] = Math.cos(-Hkn[i] * dx);
    sinDel[i] = Math.sin(-Hkn[i] * dx);
  }

  // Working arrays (reused each frame)
  const cosP = new Float32Array(HL);
  const sinP = new Float32Array(HL);
  const ys   = new Float32Array(NPTS + 1);
  const envs = new Float32Array(NPTS + 1);   // analytic envelope |signal|

  const ampMax = Han.reduce((a, v) => a + Math.abs(v), 0) * 0.88;

  function computeSurface(tEff) {
    for (let i = 0; i < HL; i++) {
      const phi = Hwn[i] * tEff - Hkn[i] * XMIN;
      cosP[i] = Math.cos(phi);
      sinP[i] = Math.sin(phi);
    }
    let peakVal = -Infinity, peakIdx = 0;
    for (let xi = 0; xi <= NPTS; xi++) {
      let yR = 0, yI = 0;
      for (let i = 0; i < HL; i++) {
        yR += Han[i] * cosP[i];
        yI += Han[i] * sinP[i];   // quadrature: free via phasor
        const c = cosP[i] * cosDel[i] - sinP[i] * sinDel[i];
        sinP[i] = sinP[i] * cosDel[i] + cosP[i] * sinDel[i];
        cosP[i] = c;
      }
      ys[xi]   = yR;
      envs[xi] = Math.sqrt(yR * yR + yI * yI);   // |analytic signal|
      if (yR > peakVal) { peakVal = yR; peakIdx = xi; }
    }
    return { peakVal, peakIdx };
  }

  // ── Axis arrow helper (defined once, not per-frame) ──────────────────────
  function arrowHead(x, y, angle) {
    cx.save(); cx.translate(x, y); cx.rotate(angle);
    cx.beginPath(); cx.moveTo(0,0); cx.lineTo(-6,-2.5); cx.lineTo(-6,2.5); cx.closePath();
    cx.fillStyle = 'rgba(245,245,247,0.15)'; cx.fill(); cx.restore();
  }

  // ── Animation state ──────────────────────────────────────────────────────
  let raf, startTs = null, lastDraw = 0, cancelled = false;
  const HALF_S   = 8.5;
  const FRAME    = 1000 / 30;
  const REVEAL_S = 0.85;

  function draw(ts) {
    if (cancelled) return;
    raf = requestAnimationFrame(draw);
    if (ts - lastDraw < FRAME) return;
    lastDraw = ts;
    if (!startTs) startTs = ts;

    const elapsed = (ts - startTs) / 1000;
    const reveal  = Math.min(1, elapsed / REVEAL_S);

    const cycle   = elapsed % (2 * HALF_S);
    const frac    = cycle < HALF_S ? cycle / HALF_S : 2 - cycle / HALF_S;
    const tEff    = T0 + (T1 - T0) * frac;
    const isFocusing = cycle < HALF_S;   // for phase arrow direction

    const W = cv.width, Hc = cv.height;
    const pl = 36, pr = 22, pt = 22, pb = 30;
    const cW = W - pl - pr, cH = Hc - pt - pb;
    const midY = pt + cH * 0.54;

    const toX  = i => pl + (i / NPTS) * cW;
    const toY  = v => midY - (v / ampMax) * cH * 0.40 * reveal;
    const toYe = v => midY - (v / ampMax) * cH * 0.40 * reveal;  // same scale for envelope

    cx.clearRect(0, 0, W, Hc);

    // ── Grid ─────────────────────────────────────────────────────────────
    cx.lineWidth = 0.6; cx.setLineDash([1, 5]);
    cx.strokeStyle = 'rgba(255,255,255,0.35)';
    for (let i = 1; i < 7; i++) {
      const y = pt + (i / 7) * cH;
      cx.beginPath(); cx.moveTo(pl, y); cx.lineTo(pl + cW, y); cx.stroke();
    }
    for (let i = 1; i < 9; i++) {
      const x = pl + (i / 9) * cW;
      cx.beginPath(); cx.moveTo(x, pt); cx.lineTo(x, pt + cH); cx.stroke();
    }
    cx.setLineDash([]);

    // ── Axes ─────────────────────────────────────────────────────────────
    cx.lineWidth = 0.85;
    cx.beginPath(); cx.moveTo(pl, midY); cx.lineTo(pl + cW, midY);
    cx.strokeStyle = 'rgba(245,245,247,0.12)'; cx.stroke();
    cx.beginPath(); cx.moveTo(pl, pt); cx.lineTo(pl, pt + cH);
    cx.strokeStyle = 'rgba(245,245,247,0.09)'; cx.stroke();
    arrowHead(pl + cW, midY, 0);
    arrowHead(pl, pt, -Math.PI / 2);

    cx.strokeStyle = 'rgba(245,245,247,0.10)'; cx.lineWidth = 0.8;
    for (let i = 0; i <= 8; i++) {
      const x = pl + (i / 8) * cW;
      cx.beginPath(); cx.moveTo(x, midY - 3.5); cx.lineTo(x, midY + 3.5); cx.stroke();
    }
    for (let i = 0; i <= 5; i++) {
      const y = pt + (i / 5) * cH;
      cx.beginPath(); cx.moveTo(pl - 3.5, y); cx.lineTo(pl + 3.5, y); cx.stroke();
    }

    // ── Physics ──────────────────────────────────────────────────────────
    const { peakVal, peakIdx } = computeSurface(tEff);
    const focus = Math.max(0, Math.min(1, peakVal / ampMax));

    // ── 2. HOT ZONE — warm vertical band at peak, behind wave ─────────────
    if (focus > 0.35 && reveal > 0.4) {
      const peakPx   = toX(peakIdx);
      const halfBand = (40 + 60 * focus);
      const zg = cx.createLinearGradient(peakPx - halfBand, 0, peakPx + halfBand, 0);
      const za = (focus - 0.35) * 0.28 * reveal;
      zg.addColorStop(0,    'rgba(0,0,0,0)');
      zg.addColorStop(0.38, `rgba(255,70,20,${za * 0.5})`);
      zg.addColorStop(0.5,  `rgba(255,80,30,${za})`);
      zg.addColorStop(0.62, `rgba(255,70,20,${za * 0.5})`);
      zg.addColorStop(1,    'rgba(0,0,0,0)');
      cx.save();
      cx.beginPath(); cx.rect(pl, pt, cW, cH); cx.clip();
      cx.fillStyle = zg; cx.fillRect(pl, pt, cW, cH);
      cx.restore();
    }

    // ── Fill under wave ───────────────────────────────────────────────────
    cx.beginPath();
    cx.moveTo(toX(0), midY);
    for (let i = 0; i <= NPTS; i++) cx.lineTo(toX(i), toY(ys[i]));
    cx.lineTo(toX(NPTS), midY);
    cx.closePath();
    const fillG = cx.createLinearGradient(0, toY(ampMax), 0, midY);
    fillG.addColorStop(0,    `rgba(0,199,255,${(0.06 + focus * 0.10) * reveal})`);
    fillG.addColorStop(0.65, `rgba(0,113,227,${(0.02 + focus * 0.04) * reveal})`);
    fillG.addColorStop(1,    'rgba(0,0,0,0)');
    cx.fillStyle = fillG; cx.fill();

    // ── 1. ENVELOPE — analytic |signal|, dashed, above & below ───────────
    if (reveal > 0.2) {
      const envAlpha = 0.28 * reveal;
      cx.setLineDash([4, 6]);
      cx.lineWidth = 0.9;
      cx.strokeStyle = `rgba(0,199,255,${envAlpha})`;

      // Upper envelope
      cx.beginPath();
      for (let i = 0; i <= NPTS; i++) {
        const px = toX(i), py = toYe(envs[i]);
        i === 0 ? cx.moveTo(px, py) : cx.lineTo(px, py);
      }
      cx.stroke();

      // Lower envelope (mirror)
      cx.beginPath();
      for (let i = 0; i <= NPTS; i++) {
        const px = toX(i), py = midY + (envs[i] / ampMax) * cH * 0.40 * reveal;
        i === 0 ? cx.moveTo(px, py) : cx.lineTo(px, py);
      }
      cx.stroke();
      cx.setLineDash([]);
    }

    // ── Glow at crest ─────────────────────────────────────────────────────
    if (focus > 0.28 && reveal > 0.5) {
      const gx = toX(peakIdx), gy = toY(ys[peakIdx]);
      const gr = cx.createRadialGradient(gx, gy, 0, gx, gy, 80 * focus);
      const a  = (focus - 0.28) * 0.55 * reveal;
      gr.addColorStop(0,    `rgba(255,90,40,${a})`);
      gr.addColorStop(0.45, `rgba(200,40,20,${a * 0.28})`);
      gr.addColorStop(1,    'rgba(0,0,0,0)');
      cx.save();
      cx.beginPath(); cx.rect(pl, pt, cW, cH); cx.clip();
      cx.fillStyle = gr; cx.fillRect(pl, pt, cW, cH);
      cx.restore();
    }

    // ── Wave line ─────────────────────────────────────────────────────────
    cx.beginPath();
    for (let i = 0; i <= NPTS; i++) {
      const px = toX(i), py = toY(ys[i]);
      i === 0 ? cx.moveTo(px, py) : cx.lineTo(px, py);
    }
    cx.strokeStyle = `rgba(0,199,255,${(0.55 + focus * 0.42) * Math.max(0.3, reveal)})`;
    cx.lineWidth   = 1.4 + focus * 1.4;
    cx.lineJoin    = 'round'; cx.lineCap = 'round';
    cx.stroke();

    // ── 3. PHASE INDICATOR — arrows in top-right corner ───────────────────
    // isFocusing: two arrows pointing INWARD (→|←)  else OUTWARD (←|→)
    const ax  = pl + cW - 6;   // right anchor
    const ay  = pt + 10;       // top row
    const gap = 14;             // gap between arrow pair
    const arA = 0.55 * reveal;

    function phaseArrow(x, y, pointRight) {
      const d = pointRight ? 1 : -1;
      cx.beginPath();
      cx.moveTo(x, y);
      cx.lineTo(x + d * 9, y - 3.5);
      cx.lineTo(x + d * 9, y + 3.5);
      cx.closePath();
      cx.fillStyle = `rgba(255,90,40,${arA})`;
      cx.fill();
    }

    if (isFocusing) {
      // → ← (converging)
      phaseArrow(ax - gap - 4, ay, true);
      phaseArrow(ax + 4,       ay, false);
    } else {
      // ← → (diverging)
      phaseArrow(ax - gap - 4, ay, false);
      phaseArrow(ax + 4,       ay, true);
    }
  }

  raf = requestAnimationFrame(draw);
  return () => { cancelled = true; cancelAnimationFrame(raf); };
});

/* ═══════════════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════════════════ */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revObs.unobserve(e.target); } });
}, {threshold:.1, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

/* ═══════════════════════════════════════════════════
   COUNTER ANIMATION
══════════════════════════════════════════════════════ */
const cntObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseFloat(el.dataset.t);
    const dec    = parseInt(el.dataset.d);
    const dur = 1700, t0 = performance.now();
    function tick(now) {
      const p = Math.min((now-t0)/dur, 1);
      const eased = 1-Math.pow(1-p,3);
      el.textContent = (target*eased).toFixed(dec);
      if (p<1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(dec);
    }
    requestAnimationFrame(tick);
    cntObs.unobserve(el);
  });
}, {threshold:.5});
document.querySelectorAll('.counter').forEach(el => cntObs.observe(el));

/* ═══════════════════════════════════════════════════
   NAV SCROLL STATE
══════════════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 55);
}, {passive:true});

// initial language state on load
setLang('en');

/* ═══════════════════════════════════════════════════
   HANDSHAKE — scroll-triggered animation
══════════════════════════════════════════════════════ */
(function () {
  const hs = document.querySelector('.handshake');
  if (!hs) return;

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          hs.classList.add('shake-in');
          obs.unobserve(hs); // fire once
        }
      });
    },
    { threshold: 0.35 }   // trigger when 35% of element is visible
  );
  obs.observe(hs);
})();
/* ═══════════════════════════════════════════════════
   ABOUT — HIGH-DENSITY BATCHED CHAOTIC FRACTAL (iOS Safari Fix)
══════════════════════════════════════════════════════ */
(function () {
  const canvas = document.getElementById('fractal-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = 0, H = 0, clipTop = 0, clipBot = 0;
  let lastWidth = 0; // ignore false iOS resize events on unchanged width
  let seeds = [];
  let isVisible = false;

  const COLOR_PALETTE = [
    { r: 0,   g: 199, b: 255, baseAlpha: 0.38 }, // cyan  — nebula core colour
    { r: 60,  g: 140, b: 255, baseAlpha: 0.28 }, // blue  — mid cloud
    { r: 180, g: 120, b: 255, baseAlpha: 0.22 }  // violet — outer haze
  ];

  function init() {
    const section = document.getElementById('about');
    const quote   = document.querySelector('.about-quote');
    if (!section || !quote) return;

    W = canvas.width  = section.offsetWidth;
    H = canvas.height = section.offsetHeight;
    lastWidth = W;
    // Blur relative to canvas width: ~1.8px at 1440px, scales on all screens
    canvas.style.filter = `blur(${Math.max(0.6, W * 0.00125).toFixed(2)}px)`;

    const sr = section.getBoundingClientRect();
    const qr = quote.getBoundingClientRect();

    clipTop = qr.top  - sr.top;
    clipBot = qr.bottom - sr.top;

    generateCrystals();
  }

  function generateCrystals() {
    seeds = [];
    const areaHeight = clipBot - clipTop;
    const canvasArea = W * areaHeight;

    const DENSITY_MULTIPLIER = 3.14;

    const count = Math.floor((canvasArea / 2800) * DENSITY_MULTIPLIER);

    const aspect = W / areaHeight;
    const cols = Math.max(1, Math.round(Math.sqrt(count * aspect)));
    const rows = Math.max(1, Math.ceil(count / cols));

    const cellW = W / cols;
    const cellH = areaHeight / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (seeds.length >= count) break;

        const baseX = c * cellW;
        const baseY = clipTop + r * cellH;

        const x = baseX + Math.random() * cellW;
        const y = baseY + Math.random() * cellH;

        const segments = [];
        const mainAxes = 3 + Math.floor(Math.random() * 3);
        const baseAngle = Math.random() * Math.PI * 2;

        const colorIndex = Math.floor(Math.random() * COLOR_PALETTE.length);

        for (let a = 0; a < mainAxes; a++) {
          let currentAngle = baseAngle + (a * Math.PI * 2) / mainAxes;
          let curX = 0;
          let curY = 0;

          const steps = 4 + Math.floor(Math.random() * 3);
          const stepLength = 4 + Math.random() * 4;

          for (let s = 0; s < steps; s++) {
            currentAngle += (Math.random() - 0.5) * 0.55;

            const nextX = curX + Math.cos(currentAngle) * stepLength;
            const nextY = curY + Math.sin(currentAngle) * stepLength;

            segments.push({
              x1: curX, y1: curY,
              x2: nextX, y2: nextY,
              growthStart: (s / steps) * 0.5,
              growthEnd: ((s + 1) / steps) * 0.5 + 0.15
            });

            if (Math.random() > 0.35) {
              let subAngle = currentAngle + (Math.random() > 0.5 ? 0.75 : -0.75);
              let subX = nextX;
              let subY = nextY;

              const subSteps = 2 + Math.floor(Math.random() * 2);
              for (let ss = 0; ss < subSteps; ss++) {
                subAngle += (Math.random() - 0.5) * 0.35;
                const nSubX = subX + Math.cos(subAngle) * (stepLength * 0.65);
                const nSubY = subY + Math.sin(subAngle) * (stepLength * 0.65);

                segments.push({
                  x1: subX, y1: subY,
                  x2: nSubX, y2: nSubY,
                  growthStart: (s / steps) * 0.5 + 0.15,
                  growthEnd: 0.7 + Math.random() * 0.25
                });

                subX = nSubX;
                subY = nSubY;
              }
            }

            curX = nextX;
            curY = nextY;
          }
        }

        const verticalFactor = (y - clipTop) / areaHeight;
        const activationThreshold = 0.02 + verticalFactor * 0.45 + Math.random() * 0.1;

        seeds.push({ x, y, segments, activationThreshold, colorIndex });
      }
    }
  }

  function getProgress() {
    const q = document.querySelector('.about-quote');
    if (!q) return 0;
    const r = q.getBoundingClientRect();
    const vh = window.innerHeight;
    return Math.max(0, Math.min(1, (vh * 0.95 - r.top) / (vh * 0.75)));
  }

  function draw(progress) {
    ctx.clearRect(0, 0, W, H);
    if (progress <= 0.002) return;

    ctx.save();
    ctx.beginPath();
    ctx.rect(0, clipTop - 40, W, clipBot - clipTop + 80);
    ctx.clip();

    // 'screen' blend: overlapping segments add luminosity — bright cores at junctions
    ctx.globalCompositeOperation = 'screen';
    ctx.lineWidth = 1.0;

    const colorBuckets = Array.from({ length: COLOR_PALETTE.length }, () => []);

    for (let i = 0; i < seeds.length; i++) {
      const seed = seeds[i];
      if (progress < seed.activationThreshold) continue;

      const localProgress = (progress - seed.activationThreshold) / (1 - seed.activationThreshold);
      const bucket = colorBuckets[seed.colorIndex];

      for (let j = 0; j < seed.segments.length; j++) {
        const seg = seed.segments[j];
        if (localProgress < seg.growthStart) continue;

        const segProgress = Math.min(1, (localProgress - seg.growthStart) / (seg.growthEnd - seg.growthStart));

        const x1 = (seed.x + seg.x1) | 0;
        const y1 = (seed.y + seg.y1) | 0;
        const x2 = (seed.x + seg.x1 + (seg.x2 - seg.x1) * segProgress) | 0;
        const y2 = (seed.y + seg.y1 + (seg.y2 - seg.y1) * segProgress) | 0;

        bucket.push(x1, y1, x2, y2);
      }
    }

    for (let c = 0; c < COLOR_PALETTE.length; c++) {
      const lines = colorBuckets[c];
      if (lines.length === 0) continue;

      const col = COLOR_PALETTE[c];
      ctx.strokeStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${col.baseAlpha * progress})`;
      ctx.beginPath();

      for (let i = 0; i < lines.length; i += 4) {
        ctx.moveTo(lines[i], lines[i + 1]);
        ctx.lineTo(lines[i + 2], lines[i + 3]);
      }
      ctx.stroke();
    }

    ctx.restore();
  }

  let lastP = -1, rafId = null;
  function onScroll() {
    if (!isVisible) return;

    const p = getProgress();
    if (Math.abs(p - lastP) < 0.003) return;
    lastP = p;
    if (!rafId) {
      rafId = requestAnimationFrame(() => {
        draw(lastP);
        rafId = null;
      });
    }
  }

  function setupObserver() {
    const section = document.getElementById('about');
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;

        if (isVisible && seeds.length === 0) {
          init();
          draw(getProgress());
        }
      });
    }, {
      root: null,
      rootMargin: '100px',
      threshold: 0
    });

    observer.observe(section);
  }

  window.addEventListener('load', () => {
    setupObserver();
  });

  window.addEventListener('resize', () => {
    // skip if width unchanged — ignores mobile address-bar resize events
    if (canvas.offsetWidth === lastWidth) return;

    if (isVisible) {
      init();
      draw(getProgress());
    } else {
      // rebuild on next intersection if resized while off-screen
      seeds = [];
    }
  });

  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ═══════════════════════════════════════════════════
   EDUCATION — math.png parallax (vertical only, no drift)
══════════════════════════════════════════════════════ */
(function () {
  const bg = document.querySelector('.edu-bg-math');
  if (!bg) return;

  const section = document.getElementById('education');
  if (!section) return;

  let ticking = false;

  function update() {
    // Absolute offset from section top — no drift accumulation
    const relScroll = window.scrollY - section.offsetTop;
    // Pattern moves up at 35% of scroll speed → classic parallax lag
    const posY = (relScroll * 0.35).toFixed(1);
    bg.style.transform = 'translateY(' + posY + 'px)';
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  // Set initial position on load
  window.addEventListener('load', update);
})();

/* ═══════════════════════════════════════════════════
   NAV LOGO — scroll-scrubbed cosmic sprite
   Sheet: 5 cols x 7 rows of 51x51 frames, 32 real frames
   (the last 3 grid cells are transparent padding and are
   skipped so the loop never flashes blank).
   The frame index is a pure function of accumulated scroll
   delta, not of time — so scrolling down advances forward,
   scrolling up runs it backward, and it is bit-for-bit
   frozen whenever the page isn't actively being scrolled
   (no idle drift, no animation loop running in the
   background). Looping wraps both directions via the
   ((n % m) + m) % m trick so reversing past frame 0 goes
   to the last frame instead of negative/NaN.
══════════════════════════════════════════════════════ */
(function () {
  const sprite = document.querySelector('.nav-logo-sprite');
  if (!sprite) return;

  const COLS = 5;
  const TOTAL_ROWS = 7;               // grid rows, including the partial last one
  const ROWS_USED_LAST_ROW = 2;       // real frames in the final row
  const FULL_ROWS = TOTAL_ROWS - 1;   // rows that are entirely real frames
  const TOTAL_FRAMES = COLS * FULL_ROWS + ROWS_USED_LAST_ROW; // 32

  // scroll distance per frame, tied to viewport height so pacing
  // feels consistent across screen sizes
  function pxPerFrame() {
    return Math.max(18, window.innerHeight * 0.012);
  }

  let frame = 0;
  let lastScrollY = window.scrollY;
  let carry = 0;          // sub-frame scroll remainder, carried between events
  let ticking = false;

  function applyFrame() {
    const col = frame % COLS;
    const row = Math.floor(frame / COLS);
    // background-position as a percentage of the (COLS-1)/(ROWS-1) steps —
    // this is what makes the step size relative to the container's own
    // size (set via background-size: 500% 700% in CSS) instead of a
    // fixed pixel offset, so it stays correct at any rendered size.
    const xPct = (col / (COLS - 1)) * 100;
    const yPct = (row / (TOTAL_ROWS - 1)) * 100;
    sprite.style.backgroundPosition = xPct + '% ' + yPct + '%';
  }

  function update() {
    const current = window.scrollY;
    const delta = current - lastScrollY;
    lastScrollY = current;

    carry += delta;
    const step = pxPerFrame();
    const framesMoved = Math.trunc(carry / step);

    if (framesMoved !== 0) {
      carry -= framesMoved * step;
      frame = ((frame + framesMoved) % TOTAL_FRAMES + TOTAL_FRAMES) % TOTAL_FRAMES;
      applyFrame();
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });

  applyFrame(); // paint frame 0 immediately, no waiting for first scroll
})();