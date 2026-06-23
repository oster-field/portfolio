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
    about_cv:'Download CV ↗︎',
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
    about_cv:'Lebenslauf herunterladen ↗︎',
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
══════════════════════════════════════════════════════ */
function initViz(id, drawFn) {
  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();
    const cv = document.getElementById(id);
    const p  = cv.parentElement;
    function resize() { cv.width = p.offsetWidth; cv.height = p.offsetHeight; drawFn(cv); }
    resize();
    window.addEventListener('resize', resize, {passive:true});
  }, {threshold:.25});
  obs.observe(document.getElementById(id));
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