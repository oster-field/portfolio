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
    about_q_em:'Mathematics meets the ocean.',
    about_q_rest:' Researching extreme wave phenomena. Building systems that turn raw sensor data into insight.',
    about_body:"I'm a computational mathematician and data scientist based in Munich. For over three years I worked at the Institute of Applied Physics (Russian Academy of Sciences), developing data pipelines, building machine learning models, and publishing peer-reviewed research on ocean wave statistics in Springer journals. I hold an M.Sc. from the University of Passau and a B.Sc. from the Higher School of Economics.",
    about_cv:'View CV',
    btn_diploma:'View diploma',
    btn_ref:'View letter of recommendation',
    lb_dl:'Download',
    lb_close:'Close',
    lb_loading:'Loading…',
    s1:'Pipeline speedup<br>10 h → 15 min',
    s2:'ML model accuracy<br>Predictive risk assessment',
    s3:'Time-series<br>datapoints processed',
    s4:'International<br>conferences',
    exp_lbl:'Experience', exp_ttl:"Where I've worked",
    exp_org:'Institute of Applied Physics · Russian Academy of Sciences',
    exp_role:'Data Scientist &amp; R&amp;D Engineer',
    eb1:'Designed an end-to-end sensor data processing application reducing runtime from <strong>10 hours to 15 minutes</strong> (40× speedup)',
    eb2:'Engineered a domain-driven data methodology to process <strong>over 2.1 billion time-series datapoints</strong> from long-term field measurements',
    eb3:'Built a machine learning model for predictive risk assessment achieving <strong>93.4% accuracy</strong>, subsequently commercialised for maritime safety',
    eb4:'Formulated and proved a novel mathematical theorem for probability estimation of rare events in stochastic time-series',
    eb5:'Awarded a personal research grant · <strong>19 international conferences</strong> · 2 Springer publications (Scopus-indexed)',
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
    e1m:'Sep 2023 – Mar 2026 · GPA 1.8 (Good)',
    e2s:'Higher School of Economics · Moscow, Russia',
    e2m:'Sep 2019 – Jun 2023 · GPA 1.6 (Excellent)',
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
    about_q_em:'Mathematik trifft auf den Ozean.',
    about_q_rest:' Forschung zu extremen Wellenereignissen. Entwicklung von Systemen, die Rohdaten in Erkenntnisse umwandeln.',
    about_body:'Ich bin Computational Mathematician und Data Scientist in München. Über drei Jahre arbeitete ich am Institut für Angewandte Physik der Russischen Akademie der Wissenschaften, wo ich Datenpipelines entwickelte, ML-Modelle baute und begutachtete Forschung zur Ozeanwellenstatistik in Springer-Zeitschriften veröffentlichte. M.Sc. Universität Passau, B.Sc. Higher School of Economics.',
    about_cv:'Lebenslauf ansehen',
    btn_diploma:'Diplom ansehen',
    btn_ref:'Empfehlungsschreiben ansehen',
    lb_dl:'Herunterladen',
    lb_close:'Schließen',
    lb_loading:'Wird geladen…',
    s1:'Pipeline-Beschleunigung<br>10 h → 15 Min',
    s2:'ML-Modellgenauigkeit<br>Prädiktive Risikobewertung',
    s3:'Zeitreihen-<br>datenpunkte verarbeitet',
    s4:'Internationale<br>Konferenzen',
    exp_lbl:'Erfahrung', exp_ttl:'Beruflicher Werdegang',
    exp_org:'Institut für Angewandte Physik · Russische Akademie der Wissenschaften',
    exp_role:'Data Scientist &amp; R&D Engineer',
    eb1:'Entwicklung einer durchgängigen Sensor-Datenpipeline mit <strong>40-facher Beschleunigung</strong> (10 h → 15 Min)',
    eb2:'Konzipierung einer Datenverarbeitungsmethodik für <strong>über 2,1 Milliarden Zeitreihendatenpunkte</strong>',
    eb3:'ML-Modell zur prädiktiven Risikobewertung mit <strong>93,4 % Genauigkeit</strong>, anschließend kommerzialisiert',
    eb4:'Formulierung und Beweis eines neuartigen mathematischen Theorems zur Wahrscheinlichkeitsschätzung seltener Ereignisse',
    eb5:'Persönliches Forschungsstipendium · <strong>19 internationale Konferenzen</strong> · 2 Springer-Publikationen (Scopus)',
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
    e1m:'Sep 2023 – März 2026 · Note 1,8 (gut)',
    e2s:'Higher School of Economics · Moskau, Russland',
    e2m:'Sep 2019 – Jun 2023 · Note 1,6 (sehr gut)',
    con_lbl:'Kontakt', con_ttl:'Zusammenarbeiten',
    footer_loc:'München, Deutschland',
    con_body:'Data Scientist und R&D Engineer mit Sitz in München, Deutschland.',
  }
};

let lang = 'en';
function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('on', b.textContent === l.toUpperCase()));
  document.querySelectorAll('[data-k]').forEach(el => {
    const v = T[l][el.dataset.k];
    if (v !== undefined) el.innerHTML = v;
  });
  document.documentElement.lang = l;
}

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
    en: { type: 'Letter of Recommendation', title: 'Institute of Applied Physics · Russian Academy of Sciences', path: 'doc/IAP.pdf' },
    de: { type: 'Empfehlungsschreiben',      title: 'Institut für Angewandte Physik · Russische Akademie der Wissenschaften', path: 'doc/IAP.pdf' },
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

  function start() {
    cv.width  = parent.offsetWidth;
    cv.height = parent.offsetHeight;
    lastWidth = cv.width;
    drawFn(cv);
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
      drawFn(cv);                // real resize while visible → restart cleanly
    } else {
      played = false;            // real resize while off-screen → replay on next scroll-in
    }
  }

  // Observer stays connected (no disconnect) so isVisible stays accurate
  new IntersectionObserver(entries => {
    isVisible = entries[0].isIntersecting;
    if (isVisible && !played) start(); // play once on first scroll-in
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
    cx.fillStyle = '#111118'; cx.fillRect(0,0,W,H);
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

/* Viz 2 — Finite ensemble distributions convergence */
initViz('viz2', function(cv) {
  const cx = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  const PAD = {l:40,r:20,t:30,b:28};
  const steps = 90, xMax = 3.4;
  const Ns = [4, 10, 25, 80, 300];
  const clrs = ['rgba(255,95,70,.72)','rgba(255,185,45,.72)','rgba(60,215,100,.72)','rgba(0,180,255,.72)','rgba(200,160,255,.72)'];

  function rayleigh(x) { return x*Math.exp(-x*x/2); }
  function finite(x,n) { const r=rayleigh(x); return r*(1-Math.exp(-n*r*.75)); }

  let frame=0;
  function draw() {
    cx.clearRect(0,0,W,H); cx.fillStyle='#111118'; cx.fillRect(0,0,W,H);
    const progress = Math.min(1, frame/65);
    const chartW = W-PAD.l-PAD.r, chartH = H-PAD.t-PAD.b;

    // Rayleigh reference (dashed)
    cx.beginPath();
    for (let i=0;i<=steps;i++) {
      const x=i/steps*xMax, y=rayleigh(x);
      const px=PAD.l+x/xMax*chartW, py=PAD.t+chartH-y*chartH*.9*progress;
      i===0?cx.moveTo(px,py):cx.lineTo(px,py);
    }
    cx.strokeStyle='rgba(245,245,247,.18)'; cx.lineWidth=1; cx.setLineDash([3,4]); cx.stroke(); cx.setLineDash([]);

    const show = Math.ceil(Ns.length*progress);
    for (let e=0;e<show;e++) {
      cx.beginPath();
      for (let i=0;i<=steps;i++) {
        const x=i/steps*xMax, y=finite(x,Ns[e]);
        const px=PAD.l+x/xMax*chartW, py=PAD.t+chartH-y*chartH*.9;
        i===0?cx.moveTo(px,py):cx.lineTo(px,py);
      }
      cx.strokeStyle=clrs[e]; cx.lineWidth=e===Ns.length-1?2:1.3; cx.stroke();
    }

    // Legend
    cx.font='300 9px DM Sans, sans-serif'; cx.fillStyle='rgba(134,134,139,.7)';
    cx.fillText('Finite ensemble distributions (N waves)',PAD.l,PAD.t-12);
    cx.fillStyle='rgba(134,134,139,.45)'; cx.fillText('0',PAD.l-10,PAD.t+chartH+14);
    cx.fillText('h/σ',PAD.l+chartW,PAD.t+chartH+14);

    frame++;
    if (frame<120) requestAnimationFrame(draw);
  }
  draw();
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

// Initialise language state — syncs mobile menu .on class and document.lang on first load
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
  let lastWidth = 0; // Cache width to bypass false iOS Safari resize events
  let seeds = [];
  let isVisible = false;

  // Narrowed strict site palette matching your core UI design tokens
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

    /* 💡 DENSITY MULTIPLIER CONTROL */
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
    // Prevent execution if visual width hasn't changed (blocks dynamic address bar updates in mobile browsers)
    if (canvas.offsetWidth === lastWidth) return;

    if (isVisible) {
      init();
      draw(getProgress());
    } else {
      // Force layout reconstruction on next scroll intersection if resized while out of view
      seeds = [];
    }
  });

  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ═══════════════════════════════════════════════════
   EDUCATION — math.svg parallax (vertical only, no drift)
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

  // Scroll distance (in px) that advances exactly one frame. Tied to
  // viewport height (a relative measure of the user's own screen)
  // rather than a fixed pixel count, so the animation feels equally
  // responsive on a small laptop and a large monitor.
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