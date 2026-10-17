/* ==========================================================================
   PORTFOLIO CONFIGURATION & DATA SOURCE
   Replace bracketed [TEXT] with your personal details and project data.
   ========================================================================== */

const OWNER = { 
  name: 'JOHN EARL P. CAMPOS', 
  email: 'camposjohnearl@gmail.com',
  title: '[PROFESSIONAL TITLE, e.g. Junior Full-Stack Developer]',
  lead: 'BSIT Graduate specialized in building high-performance, accessible, and secure digital applications. Ready for junior developer and engineering roles.',
  linkedin: '[LINKEDIN URL]',
  github: 'https://github.com/camposjohnearl-byte',
  portfolio: '[PORTFOLIO URL]'
};

/* ==========================================================================
   CONFIG & MOTION TOGGLES
   Easily customize behaviors or turn features on/off here.
   ========================================================================== */
const CONFIG = {
  loader: true,          // Page-load intro curtain (shown once per session)
  cursorFollower: true,  // Custom cursor follower on desktop (fine pointer)
  cardTilt: true,        // 3D subtle tilt on project cards (desktop only)
  terminalTyping: true,  // Realistic type-on effect in cybersecurity terminal
  animatedBackground: true, // Aurora + rising light motes behind the whole page
  counterDuration: 1200  // Milliseconds for stat counters count-up
};

// Category icon map for tech badges
const CAT_ICONS = {
  'All': 'bi-grid-fill',
  'Programming': 'bi-code-slash',
  'Web Development': 'bi-globe2',
  'Database': 'bi-database-fill',
  'Tools': 'bi-tools',
  'Networking': 'bi-hdd-network-fill',
  'Cybersecurity': 'bi-shield-lock-fill',
  'Data Analysis': 'bi-bar-chart-fill',
  'Cloud': 'bi-clouds-fill',
  'AI': 'bi-cpu-fill'
};

// level: Beginner | Intermediate | Advanced
const SKILLS = [
  { cat: 'Programming',     skill: 'FRONTEND', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'Web Development', skill: 'FULL-STACK', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'Database',        skill: 'MySql', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'Tools',           skill: 'VsCode', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'Networking',      skill: '[SKILL]', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'Cybersecurity',   skill: '[SKILL]', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'Data Analysis',   skill: 'Excel', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'Cloud',           skill: 'Gdrive', level: 'Beginner', evidence: '[Project name or link]' },
  { cat: 'AI',              skill: 'Claude', level: 'Beginner', evidence: '[Project name or link]' }
];

const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];
const CATEGORIES = ['All', 'Programming', 'Web Development', 'Database', 'Tools', 'Networking', 'Cybersecurity', 'Data Analysis', 'Cloud', 'AI'];

// README sections shown in the details modal (order matters)
const README = [
  'Overview', 'Problem Statement', 'Objectives', 'Target Users', 
  'Technologies', 'Features', 'Architecture', 'Database Design', 
  'Screenshots', 'Installation', 'How to Use', 'Testing', 
  'Limitations', 'Future Improvements', 'Developer'
];

// Any README key you leave out shows "[Add ...]" automatically.
const PROJECTS = [
  { 
    title: 'FUZZY WIRE SHOP', 
    type: 'Web E-Commerce Application (HTML, CSS, JS, PHP, MySQL)',
    overview: 'Full-featured web application designed to solve real-world workflows with responsive design, secure authentication, and AI assistance.', 
    tech: ['[Tech 1]', '[Tech 2]', 'Bootstrap 5', 'REST API'],
    features: ['Modern UI', 'Relational Database', 'CRUD Operations', 'Input Validation', 'Search & Filtering', 'Authentication & Authorization', 'Robust Error Handling'],
    live: 'https://camposjohnearl-byte.github.io/AccessPoint-VISITOR-MANAGEMENT/', 
    github: 'https://github.com/camposjohnearl-byte/AccessPoint-VISITOR-MANAGEMENT', 
    readme: { 
      Overview: 'Interactive application delivering streamlined user flows and resilient architecture.', 
      Developer: '[Your name, section, contact]' 
    } 
  },
  { 
    title: 'Mini Inventory Management System', 
    type: 'Data/Database Project (Excel/Sheets + SQL, charts, data interpretation)',
    overview: 'Comprehensive data pipeline and analytics dashboard transforming raw data into actionable visual insights and business metrics.', 
    tech: ['Excel/Sheets', 'SQL', 'Data Analytics', 'Chart.js'], 
    features: ['Dynamic Charts', 'Data Cleaning Pipeline', 'SQL Aggregations', 'Executive KPI Interpretation'],
    live: 'https://miniinventory.infinityfree.io/?fbclid=IwY2xjawU_9OdleHRuA2FlbQIxMABwZG9mBWJyaWQRMUNGd2hncHJTQjJianhTWHBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEe2vMs8HHRaWdCrAk5HWo-AExT_2Jzp9EfEhxrOU1q7It09FPnnMm6NVO46iA_aem_gaEuO03NQ3SnQj3qLDoFzw&i=1', 
    github: '[GITHUB REPO URL]',
    readme: {} 
  },
  { 
    title: 'Smart-File Organizer', 
    type: 'Specialization: Desktop Application (Python, Tkinter)',
    overview: 'Specialized capstone project showcasing deep domain knowledge, modular design, and industry standard tooling.', 
    tech: ['[Tech 1]', 'Security Best Practices', 'Git Version Control'], 
    features: ['[Key Feature 1]', '[Key Feature 2]', 'Performance Optimization'],
    live: 'https://mega.nz/file/iAVzBIQJ#JVckngmvrXPCcEJhcYlhOdnXSXLdRMM-3EmMBumA6rw', 
    github: 'https://github.com/Rhaast45/Smart-File-Organizer', 
    readme: {} 
  }
];

const CASES = [1, 2, 3, 4, 5].map(n => ({
  no: n, 
  problem: '[Problem ' + n + ': Brief description of system error or hardware malfunction]', 
  causes: '[Possible causes: network timeout, corrupted configuration, or invalid credentials]', 
  diagnosis: '[Diagnostic procedure: log analysis, port ping, and isolation testing]',
  solution: '[Solution: reconfigured parameters, implemented defensive guard clauses, and verified stability]', 
  lesson: '[Lesson learned: importance of detailed logging, unit tests, and rollback strategies]'
}));

const AI_LOG = [
  { 
    date: '2025-09-15', 
    task: 'Code Refactoring & Algorithm Optimization', 
    ai: 'Suggested async/await syntax and optimized SQL indexing patterns', 
    verify: 'Benchmarked runtime execution in browser dev tools; verified zero regression' 
  },
  { 
    date: '2025-10-02', 
    task: 'Security Vulnerability Audit', 
    ai: 'Identified potential SQL injection vulnerabilities in dynamic string queries', 
    verify: 'Implemented parameterized PDO/PreparedStatement queries; tested against OWASP payloads' 
  }
];

const CERTS = [
  { title: 'Linux & System Administration: Master Command Line', issuer: 'Ethel Programming Computer Programming Services', date: 'August 7, 2026', link: 'asset/image/linux.jpg' },
  { title: 'IT Infrastructure and Cloud Computing Building the Digital Future', issuer: 'Ethel Programming Computer Programming Services', date: 'August 8, 2026', link: 'asset/image/it_infrastructure.jpg' },
  { title: 'Web Dev: System Integration | Connecting App via API', issuer: 'UPSKILLTECHPH', date: 'August 8, 2026', link: 'asset/image/webdev.jpg' },
  { title: 'Arduino 101: Coding Meets Hardware', issuer: 'UPSKILLTECHPH', date: 'August 5, 2026', link: 'asset/image/arduino.jpg' },
  { title: 'Cyber Awareness: Cyber Threats in 2026 and How to Stay Safe', issuer: 'UPSKILLTECHPH', date: 'August 8, 2026', link: 'asset/image/cyber.jpg' },
];

const REPOS = [
  { name: '[REPO 1 NAME]', desc: 'Core capstone web application featuring responsive front-end and secure backend architecture.', link: '[REPO URL]' },
  { name: '[REPO 2 NAME]', desc: 'Data analytics, query optimization, and visualization scripts utilizing SQL.', link: '[REPO URL]' },
  { name: '[REPO 3 NAME]', desc: 'Utilities, problem-solving algorithms, and cybersecurity lab exercises.', link: '[REPO URL]' }
];

/* ==========================================================================
   CORE UTILITIES & SELECTORS
   ========================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const NAV_BP = 1240; // must match the desktop-nav media query in styles.css
const isReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fill dynamic text, counters, and avatar fallback
function fillBasics() {
  $$('[data-name]').forEach(el => el.textContent = OWNER.name);
  if ($('#year')) $('#year').textContent = new Date().getFullYear();
  if ($('#hlSkills')) $('#hlSkills').textContent = SKILLS.length;
  if ($('#hlProjects')) $('#hlProjects').textContent = PROJECTS.length;
  
  const emailLink = $('#emailLink');
  if (emailLink) {
    emailLink.href = 'mailto:' + OWNER.email;
    emailLink.textContent = OWNER.email;
  }

  // Gracefully handle avatar image fallback so it never displays a broken icon
  const avatarImg = $('.photo img') || $('.avatar-img');
  if (avatarImg) {
    avatarImg.addEventListener('error', function() {
      const svgAvatar = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%236366f1"/><stop offset="50%" stop-color="%238b5cf6"/><stop offset="100%" stop-color="%2338bdf8"/></linearGradient></defs><rect width="320" height="320" fill="%230b101d"/><circle cx="160" cy="120" r="56" fill="url(%23g)"/><path d="M70,260 C70,195 110,185 160,185 C210,185 250,195 250,260" fill="url(%23g)" opacity="0.85"/><circle cx="160" cy="120" r="48" fill="%231a2234"/><text x="160" y="130" font-family="system-ui,sans-serif" font-weight="bold" font-size="28" fill="%23ffffff" text-anchor="middle">IT</text></svg>`;
      this.src = svgAvatar;
    });
  }
}

/* ==========================================================================
   COMPONENT RENDERERS
   ========================================================================== */

// Skills: Filter tabs & Modern Cards
function renderSkills(cat = 'All', animate = false) {
  const grid = $('#skillGrid');
  if (!grid) return;

  const buildHtml = () => {
    const filtered = SKILLS.filter(s => cat === 'All' || s.cat === cat);
    return filtered.map((s, idx) => {
      const levelIdx = Math.max(1, LEVELS.indexOf(s.level) + 1);
      const iconClass = CAT_ICONS[s.cat] || 'bi-code-square';
      const tagClass = idx % 2 === 0 ? 'tag' : 'tag tag-cyan';
      const animClass = animate ? 'card-filter-in' : '';
      
      return `
        <article class="card skill-card ${animClass}" style="--stagger: ${idx}">
          <div class="skill-card-top">
            <span class="${tagClass}"><i class="bi ${iconClass}"></i> ${s.cat}</span>
            <span class="lvl">${s.level}</span>
          </div>
          <h4 class="skill-title">${s.skill}</h4>
          <div class="skill-meter-row">
            <span class="skill-meter-label"><i class="bi bi-speedometer2"></i> Proficiency</span>
            <span class="meter meter-lit" data-l="${levelIdx}" aria-label="Level ${s.level}">
              <i></i><i></i><i></i>
            </span>
          </div>
          <div class="evidence-box">
            <i class="bi bi-shield-check"></i>
            <div class="evidence-text"><strong>Evidence:</strong> <span>${s.evidence}</span></div>
          </div>
        </article>
      `;
    }).join('');
  };

  // Animate reflow with View Transitions API or smooth CSS fade
  if (animate && !isReducedMotion()) {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        grid.innerHTML = buildHtml();
      });
    } else {
      $$('.skill-card', grid).forEach(c => c.classList.add('card-filter-out'));
      setTimeout(() => {
        grid.innerHTML = buildHtml();
      }, 140);
    }
  } else {
    grid.innerHTML = buildHtml();
  }
}

function renderFilters() {
  const container = $('#filters');
  if (!container) return;

  container.innerHTML = CATEGORIES.map((c, i) => {
    const icon = CAT_ICONS[c] || 'bi-tag';
    return `<button class="pill" aria-pressed="${i === 0}" data-cat="${c}"><i class="bi ${icon}"></i> ${c}</button>`;
  }).join('');

  container.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    $$('#filters button').forEach(x => x.setAttribute('aria-pressed', x === btn));
    renderSkills(btn.dataset.cat, true);
  });
}

// Projects: Modern Showcase Cards & README Dialog
function renderProjects() {
  const grid = $('#projectGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="card project-card" data-tilt="true">
      <div>
        <div class="project-header">
          <span class="tag tag-purple"><i class="bi bi-terminal"></i> Project 0${i + 1}</span>
          <span class="tag tag-cyan"><i class="bi bi-stars"></i> Featured</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-type"><i class="bi bi-diagram-3-fill"></i> ${p.type}</p>
        <p class="project-desc">${p.overview}</p>
        
        <div class="project-techs">
          ${p.tech.map(t => `<span class="tag"><i class="bi bi-hash"></i>${t}</span>`).join('')}
        </div>
        
        <div class="project-features">
          <strong><i class="bi bi-check2-circle"></i> Capabilities & Modules</strong>
          <div class="project-features-list">${p.features.join(' • ')}</div>
        </div>
      </div>

      <div>
        <div class="project-links">
          <a class="project-link-btn" href="${p.live}" target="_blank" rel="noopener"><i class="bi bi-box-arrow-up-right"></i> Demo</a>
          <a class="project-link-btn" href="${p.github}" target="_blank" rel="noopener"><i class="bi bi-github"></i> Repository</a>
          <a class="project-link-btn" href="${p.docs}" target="_blank" rel="noopener"><i class="bi bi-journal-text"></i> Docs</a>
        </div>
      </div>
    </article>
  `).join('');

  grid.addEventListener('click', e => {
    const btn = e.target.closest('button[data-i]');
    if (btn) openModal(+btn.dataset.i, btn);
  });
}

// Projects Modal with Blur, Scale Entrance, Animated Exit & Focus Trap
let lastFocus = null;
let modalKeyHandler = null;

function openModal(i, trigger) {
  const p = PROJECTS[i];
  const modal = $('#modal');
  if (!modal) return;
  lastFocus = trigger;

  const sectionsHtml = README.map((k, idx) => {
    const content = p.readme[k] || `[Add ${k}]`;
    return `
      <div class="modal-readme-item" style="--idx: ${idx}">
        <h4>${k}</h4>
        <p class="modal-readme-text">${content}</p>
      </div>
    `;
  }).join('');

  $('#mBody').innerHTML = `
    <div class="modal-header-tags">
      <span class="tag tag-purple"><i class="bi bi-code-square"></i> Project 0${i + 1}</span>
      <span class="tag tag-cyan">${p.type}</span>
    </div>
    <h3 id="mTitle">${p.title}</h3>
    <div class="modal-tech-list">
      ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
    <div class="modal-readme-content">
      ${sectionsHtml}
    </div>
  `;

  modal.hidden = false;
  // Trigger reflow to start transition smoothly
  void modal.offsetWidth;
  modal.classList.remove('modal-closing');
  modal.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
  $('#mClose').focus();

  // Modal Focus Trap
  modalKeyHandler = function(e) {
    if (e.key === 'Escape') {
      closeModal();
      return;
    }
    if (e.key === 'Tab') {
      const focusables = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', modal);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  };
  document.addEventListener('keydown', modalKeyHandler);
}

function closeModal() {
  const modal = $('#modal');
  if (!modal || modal.hidden) return;

  if (modalKeyHandler) {
    document.removeEventListener('keydown', modalKeyHandler);
    modalKeyHandler = null;
  }

  modal.classList.add('modal-closing');
  setTimeout(() => {
    modal.classList.remove('modal-open', 'modal-closing');
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }, 220);
}

function initModal() {
  const modal = $('#modal');
  if (!modal) return;
  $('#mClose').addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target.id === 'modal') closeModal();
  });
}

// Troubleshooting Accordion with Smooth CSS Grid Height Animation
function renderCases() {
  const casesContainer = $('#cases');
  if (!casesContainer) return;

  casesContainer.innerHTML = CASES.map(c => `
    <div class="acc-item">
      <button class="acc-btn" aria-expanded="false" aria-controls="cp${c.no}" id="cb${c.no}">
        <div class="acc-btn-left">
          <span class="tag tag-purple tag-mono">CASE 0${c.no}</span>
          <span class="acc-btn-title">${c.problem}</span>
        </div>
        <div class="acc-icon"><i class="bi bi-chevron-down"></i></div>
      </button>
      <div class="acc-panel" id="cp${c.no}" role="region" aria-labelledby="cb${c.no}">
        <div class="acc-panel-inner">
          <div class="acc-grid">
            <div class="acc-block">
              <div class="acc-block-title danger"><i class="bi bi-exclamation-octagon-fill"></i> Suspected Root Cause</div>
              <p class="acc-block-text">${c.causes}</p>
            </div>
            <div class="acc-block">
              <div class="acc-block-title info"><i class="bi bi-search"></i> Diagnostic Procedure</div>
              <p class="acc-block-text">${c.diagnosis}</p>
            </div>
            <div class="acc-block">
              <div class="acc-block-title success"><i class="bi bi-check-circle-fill"></i> Verified Solution</div>
              <p class="acc-block-text">${c.solution}</p>
            </div>
            <div class="acc-block">
              <div class="acc-block-title"><i class="bi bi-lightbulb-fill"></i> Technical Takeaway</div>
              <p class="acc-block-text">${c.lesson}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function initAccordion() {
  const casesContainer = $('#cases');
  if (!casesContainer) return;

  casesContainer.addEventListener('click', e => {
    const btn = e.target.closest('.acc-btn');
    if (!btn) return;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    const panel = $('#' + btn.getAttribute('aria-controls'));
    
    btn.setAttribute('aria-expanded', !isExpanded);
    if (panel) {
      panel.classList.toggle('open', !isExpanded);
    }
  });
}

// AI Literacy Log Table
function renderAI() {
  const tbody = $('#aiLog');
  if (!tbody) return;

  tbody.innerHTML = AI_LOG.map(r => `
    <tr>
      <td data-label="Date"><span class="tag tag-mono">${r.date}</span></td>
      <td data-label="Task"><strong class="tbl-task">${r.task}</strong></td>
      <td data-label="AI Assistance">${r.ai}</td>
      <td data-label="My Verification / Result"><span class="tbl-verify"><i class="bi bi-check2-circle"></i> ${r.verify}</span></td>
    </tr>
  `).join('');
}

// Certificates Cards
function renderCerts() {
  const grid = $('#certGrid');
  if (!grid) return;

  grid.innerHTML = CERTS.map(c => `
    <article class="card card-hover">
      <div class="cert-card-header">
        <div class="stat-icon stat-icon-emerald">
          <i class="bi bi-patch-check-fill"></i>
        </div>
        <div>
          <h4 class="cert-title">${c.title}</h4>
          <span class="tag tag-cyan tag-sm">${c.issuer}</span>
        </div>
      </div>
      <p class="cert-date">Issued: ${c.date}</p>
      <a class="btn-o btn-sm btn-auto" href="${c.link}" target="_blank" rel="noopener" aria-label="View certificate: ${c.title}">
        <i class="bi bi-eye"></i> View Certificate
      </a>
    </article>
  `).join('');
}

// Repositories Cards
function renderRepos() {
  const grid = $('#repoGrid');
  if (!grid) return;

  grid.innerHTML = REPOS.map(r => `
    <article class="card card-hover">
      <div class="repo-top">
        <div class="repo-title-wrap">
          <i class="bi bi-journal-code repo-icon"></i>
          <h4 class="repo-name">${r.name}</h4>
        </div>
        <span class="tag tag-sm">Public</span>
      </div>
      <p class="repo-desc">${r.desc}</p>
      <div class="repo-footer">
        <span class="repo-lang">
          <span class="repo-dot"></span> IT / Software
        </span>
        <a class="btn-o btn-sm" href="${r.link}" target="_blank" rel="noopener">
          <i class="bi bi-github"></i> View Repo
        </a>
      </div>
    </article>
  `).join('');
}

// Resume PDF Loader
function initResume() {
  fetch('resume.pdf', { method: 'HEAD' }).then(r => {
    if (!r.ok) throw 0;
  }).catch(() => {
    if (location.protocol === 'file:') return;
    const note = $('#resumeNote');
    if (note) note.textContent = 'Notice: resume.pdf preview is ready. Upload your updated resume.pdf next to index.html.';
    const card = $('#resumeCard');
    if (card) card.classList.add('missing');
  });
}

// Contact Form with Floating Labels, Inline Shake & Micro-Feedback
function initForm() {
  const f = $('#contactForm');
  if (!f) return;

  const fail = (id, eid, msg) => {
    const el = $(id);
    if (el) {
      el.classList.add('bad');
      const group = el.closest('.form-group');
      if (group) {
        group.classList.remove('shake');
        void group.offsetWidth; // Reflow to re-trigger animation
        group.classList.add('shake');
      }
    }
    const errEl = $(eid);
    if (errEl) errEl.textContent = msg;
    return false;
  };

  f.addEventListener('submit', e => {
    e.preventDefault();
    $$('.bad', f).forEach(x => x.classList.remove('bad'));
    $$('.err', f).forEach(x => x.textContent = '');

    const n = $('#cName') ? $('#cName').value.trim() : '';
    const m = $('#cEmail') ? $('#cEmail').value.trim() : '';
    const msg = $('#cMsg') ? $('#cMsg').value.trim() : '';
    let ok = true;

    if (n.length < 2) ok = fail('#cName', '#eName', 'Please provide your full name (2+ characters).');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) ok = fail('#cEmail', '#eEmail', 'Please enter a valid email address.');
    if (msg.length < 10) ok = fail('#cMsg', '#eMsg', 'Message must be at least 10 characters.');

    if (!ok) return;

    // Button feedback state
    const submitBtn = f.querySelector('button[type="submit"]');
    const submitText = $('#submitText');
    if (submitBtn && submitText) {
      const origText = submitText.textContent;
      submitText.textContent = 'Opening Mail Client...';
      submitBtn.disabled = true;
      setTimeout(() => {
        submitText.textContent = origText;
        submitBtn.disabled = false;
        location.href = `mailto:${OWNER.email}?subject=${encodeURIComponent('Portfolio message from ' + n)}&body=${encodeURIComponent(msg + '\n\nFrom: ' + n + ' (' + m + ')')}`;
      }, 400);
    }
  });

  // Animated Copy Email button
  const copyBtn = $('#copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(OWNER.email).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = '<i class="bi bi-check2"></i> Copied!';
        setTimeout(() => { 
          copyBtn.classList.remove('copied');
          copyBtn.innerHTML = originalText; 
        }, 2000);
      });
    });
  }
}

/* ==========================================================================
   ADVANCED MOTION & INTERACTION CONTROLLERS
   ========================================================================== */

// 1. Page-Load Intro Curtain (Shown once per session)
function initLoader() {
  const loader = $('#introLoader');
  if (!loader) return;

  const skipLoader = () => {
    loader.classList.add('fade-out');
    sessionStorage.setItem('portfolio_intro_seen', '1');
    setTimeout(() => loader.remove(), 600);
  };

  if (!CONFIG.loader || sessionStorage.getItem('portfolio_intro_seen') || isReducedMotion()) {
    loader.remove();
    return;
  }

  // Dismiss on click or key press
  loader.addEventListener('click', skipLoader);
  window.addEventListener('keydown', skipLoader, { once: true });

  // Auto-dismiss after 950ms
  setTimeout(skipLoader, 950);
}

// 2. Scroll Progress Bar & Circular Back-to-Top Ring
function initScrollProgress() {
  const progressBar = $('#scrollProgress');
  const progressRing = $('.progress-ring-fill');
  const toTop = $('#toTop');
  const ringCircumference = 2 * Math.PI * 20; // r=20 -> ~125.66

  if (progressRing) {
    progressRing.style.strokeDasharray = `${ringCircumference}`;
    progressRing.style.strokeDashoffset = `${ringCircumference}`;
  }

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

        // Top horizontal bar
        if (progressBar) {
          progressBar.style.transform = `scaleX(${progress})`;
        }

        // Circular ring on back-to-top button
        if (progressRing) {
          progressRing.style.strokeDashoffset = `${ringCircumference * (1 - progress)}`;
        }

        // Back to top visibility
        if (toTop) {
          toTop.classList.toggle('show', scrollTop > 320);
        }

        // Sticky Navbar shrink
        const nav = $('.nav');
        if (nav) {
          nav.classList.toggle('scrolled', scrollTop > 40);
        }

        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: isReducedMotion() ? 'auto' : 'smooth' });
    });
  }
}

// 3. Navbar Sliding Indicator & Mobile Menu Stagger
function initNavMotion() {
  const btn = $('#menuBtn');
  const menu = $('#menu');
  const indicator = $('#navIndicator');
  const links = $$('#menu a');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
    });

    const closeMenu = () => {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    };
    menu.addEventListener('click', e => {
      if (e.target.closest('a')) closeMenu();
    });
    document.addEventListener('click', e => {
      if (menu.classList.contains('open') && !e.target.closest('.nav')) closeMenu();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); btn.focus(); }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth >= NAV_BP) closeMenu();
    }, { passive: true });
  }

  // Sliding pill indicator positioner
  function updateIndicator(activeLink) {
    if (!indicator || window.innerWidth < NAV_BP || !activeLink) {
      if (indicator) indicator.style.opacity = '0';
      return;
    }
    const nav = activeLink.closest('nav');
    if (!nav) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    indicator.style.opacity = '1';
    indicator.style.width = `${linkRect.width}px`;
    indicator.style.transform = `translate(${linkRect.left - navRect.left}px, -50%)`;
  }

  // Expose for ScrollSpy
  window.updateNavIndicator = updateIndicator;
  const refreshIndicator = () => updateIndicator($('#menu a.active'));
  window.addEventListener('resize', refreshIndicator, { passive: true });
  window.addEventListener('orientationchange', refreshIndicator);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refreshIndicator);
}

// Scrollspy with sliding indicator sync
function initScrollSpy() {
  const links = $$('#menu a');
  const secs = $$('main section');
  if (!links.length || secs.length < 2) return;

  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(a => {
          const isCurrent = a.getAttribute('href') === '#' + en.target.id;
          a.classList.toggle('active', isCurrent);
          if (isCurrent && window.updateNavIndicator) {
            window.updateNavIndicator(a);
          }
        });
      }
    });
  }, { rootMargin: '-30% 0px -50% 0px' });

  secs.forEach(s => spy.observe(s));
}

// 4. Custom Desktop Cursor Follower (Fine pointer only)
function initCursorFollower() {
  const follower = $('#cursorFollower');
  if (!follower || !CONFIG.cursorFollower || isReducedMotion()) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const dot = $('.cursor-dot', follower);
  const ring = $('.cursor-ring', follower);
  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    follower.classList.add('active');
    if (dot) {
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    follower.classList.remove('active');
  });

  // Smooth trailing ring lerp loop
  function loop() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    if (ring) {
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // Hover expansion on interactive elements
  const hoverSelector = 'a, button, .card, .pill, input, textarea';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverSelector)) {
      follower.classList.add('hovering');
    }
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverSelector)) {
      follower.classList.remove('hovering');
    }
  });
}

// 5. Mouse-Reactive Ambient Aurora in Hero
function initHeroAurora() {
  const hero = $('#home');
  if (!hero || isReducedMotion()) return;

  hero.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    hero.style.setProperty('--aurora-x', `${x.toFixed(1)}%`);
    hero.style.setProperty('--aurora-y', `${y.toFixed(1)}%`);
  }, { passive: true });
}

// 6. Viewport Stat Counters Count-Up
function initCounters() {
  const skillsEl = $('#hlSkills');
  const projectsEl = $('#hlProjects');
  const statsContainer = $('.stats');
  if (!statsContainer) return;

  let counted = false;
  const countUp = (el, target) => {
    if (!el) return;
    if (isReducedMotion()) {
      el.textContent = target;
      return;
    }
    const duration = CONFIG.counterDuration;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(update);
  };

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        countUp(skillsEl, SKILLS.length);
        countUp(projectsEl, PROJECTS.length);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  io.observe(statsContainer);
}

// 7. Cursor Spotlight & 3D Tilt on Cards
function initCardMotion() {
  if (isReducedMotion()) return;

  document.addEventListener('mousemove', e => {
    const card = e.target.closest('.card');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--card-x', `${x}px`);
    card.style.setProperty('--card-y', `${y}px`);

    // Subtle 3D tilt on project cards (max 4.5 degrees)
    if (CONFIG.cardTilt && card.classList.contains('project-card') && window.matchMedia('(hover: hover)').matches) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = ((y - centerY) / centerY) * -4.5;
      const tiltY = ((x - centerX) / centerX) * 4.5;
      card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-4px)`;
    }
  }, { passive: true });

  document.addEventListener('mouseout', e => {
    const card = e.target.closest('.card');
    if (card && card.classList.contains('project-card')) {
      card.style.transform = '';
    }
  });
}

// 8. Staggered Scroll-Reveal Observer
function initStaggerReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });

  $$('.reveal').forEach(el => io.observe(el));
}

// 9. SQL-Injection Terminal Type-On Animation
function initTerminalTyping() {
  const terminal = $('.terminal');
  const codeVuln = $('#codeVuln');
  const codeSafe = $('#codeSafe');
  if (!terminal || !codeVuln || !codeSafe || !CONFIG.terminalTyping || isReducedMotion()) return;

  const vulnText = codeVuln.textContent;
  const safeText = codeSafe.textContent;

  let hasRun = false;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasRun) {
        hasRun = true;
        io.unobserve(entry.target);

        codeVuln.textContent = '';
        codeSafe.textContent = '';

        // Type first block, then second block
        typeString(codeVuln, vulnText, 14, () => {
          setTimeout(() => {
            typeString(codeSafe, safeText, 12, () => {});
          }, 180);
        });
      }
    });
  }, { threshold: 0.35 });

  io.observe(terminal);

  function typeString(el, text, speed, onDone) {
    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    el.appendChild(cursor);

    function next() {
      if (i < text.length) {
        el.textContent = text.slice(0, i + 1);
        el.appendChild(cursor);
        i++;
        setTimeout(next, speed);
      } else {
        cursor.remove();
        if (onDone) onDone();
      }
    }
    next();
  }
}

// 10. Roadmap Milestone Scroll Activation
function initRoadmap() {
  const steps = $$('.roadmap-step');
  if (!steps.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  steps.forEach(s => io.observe(s));
}

// 11. Magnetic Hover on Primary Buttons
function initMagneticButtons() {
  if (isReducedMotion() || !window.matchMedia('(hover: hover)').matches) return;

  $$('.btn-magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    }, { passive: true });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// 12. Animated Background: rising light motes + cursor glow + shooting streaks (canvas)
function initBackground() {
  const canvas = $('#bgCanvas');
  if (!canvas || !CONFIG.animatedBackground) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const reduce = isReducedMotion();
  const coarse = window.matchMedia('(hover: none)').matches;
  const palette = [[129,140,248],[34,211,238],[167,139,250],[45,212,191],[244,114,182]];
  const sprites = palette.map(([r, g, b]) => {
    const s = document.createElement('canvas');
    s.width = s.height = 64;
    const c = s.getContext('2d');
    const g2 = c.createRadialGradient(32, 32, 0, 32, 32, 32);
    g2.addColorStop(0, `rgba(${r},${g},${b},1)`);
    g2.addColorStop(0.25, `rgba(${r},${g},${b},0.35)`);
    g2.addColorStop(1, `rgba(${r},${g},${b},0)`);
    c.fillStyle = g2;
    c.fillRect(0, 0, 64, 64);
    return s;
  });

  const mouse = { x: -999, y: -999, on: false };
  let w = 0, h = 0, dpr = 1, motes = [], streak = null, nextStreak = 0, raf = 0, t = 0;

  const make = () => {
    const z = Math.random() * 0.7 + 0.3;               // depth: far (0.3) to near (1)
    return {
      x: Math.random() * w, y: Math.random() * h, z,
      size: (Math.random() * 7 + 5) * z,
      vy: -(Math.random() * 0.22 + 0.06) * z,
      sway: Math.random() * 14 + 6, ph: Math.random() * 6.28, tw: Math.random() * 1.6 + 0.6,
      s: sprites[(Math.random() * (Math.random() < 0.12 ? 5 : 4)) | 0]
    };
  };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, coarse ? 1.5 : 2);
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const target = Math.round(Math.min(coarse ? 34 : 80, (w * h) / (coarse ? 15000 : 17000)));
    while (motes.length < target) motes.push(make());
    motes.length = Math.min(motes.length, target);
    if (reduce) draw();
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const sy = window.scrollY || 0;
    for (const m of motes) {
      const tw = 0.55 + 0.45 * Math.sin(t * m.tw + m.ph);
      let x = m.x + Math.sin(t * 0.4 + m.ph) * m.sway;
      let y = (((m.y - sy * 0.14 * m.z) % h) + h) % h;     // scroll parallax
      const dx = x - mouse.x, dy = y - mouse.y, d2 = dx * dx + dy * dy;
      if (mouse.on && d2 < 22500) {                         // gentle push away from cursor
        const d = Math.sqrt(d2) || 1;
        const f = (1 - d / 150) * 22;
        x += (dx / d) * f; y += (dy / d) * f;
      }
      ctx.globalAlpha = (0.25 + 0.6 * m.z) * tw;
      ctx.drawImage(m.s, x - m.size, y - m.size, m.size * 2, m.size * 2);
    }
    if (mouse.on) {                                         // soft light under the cursor
      ctx.globalAlpha = 0.16;
      ctx.drawImage(sprites[0], mouse.x - 160, mouse.y - 160, 320, 320);
    }
    if (streak) {
      const s = streak, a = Math.sin(Math.PI * (s.life / s.max));
      const g = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 14, s.y - s.vy * 14);
      g.addColorStop(0, `rgba(199,210,254,${(0.8 * a).toFixed(3)})`);
      g.addColorStop(1, 'rgba(199,210,254,0)');
      ctx.globalAlpha = 1; ctx.strokeStyle = g; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * 14, s.y - s.vy * 14); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  function step(now) {
    t = now / 1000;
    for (const m of motes) { m.y += m.vy; if (m.y < -20) { m.y = h + 20; m.x = Math.random() * w; } }
    if (!streak && now > nextStreak) {
      streak = { x: w * (0.3 + Math.random() * 0.7), y: h * (Math.random() * 0.3 + 0.05), vx: -7, vy: 3.4, life: 0, max: 70 };
      nextStreak = now + 7000 + Math.random() * 7000;
    }
    if (streak) { streak.x += streak.vx; streak.y += streak.vy; if (++streak.life > streak.max) streak = null; }
    draw();
    raf = requestAnimationFrame(step);
  }

  resize();
  let lastW = w;
  window.addEventListener('resize', () => {
    // Ignore height-only changes (mobile address bar) to avoid flicker
    if (window.innerWidth !== lastW || Math.abs(window.innerHeight - h) > 160) { lastW = window.innerWidth; resize(); }
  }, { passive: true });
  window.addEventListener('orientationchange', () => setTimeout(resize, 250));

  if (reduce) return; // static frame only

  if (!coarse) {
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.on = true; }, { passive: true });
    document.addEventListener('mouseleave', () => { mouse.on = false; });
  }
  document.addEventListener('visibilitychange', () => {
    cancelAnimationFrame(raf);
    if (!document.hidden) raf = requestAnimationFrame(step);
  });
  nextStreak = performance.now() + 3500;
  raf = requestAnimationFrame(step);
}

/* ==========================================================================
   INITIALIZATION ON DOM READY
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Data Fill & Core Components
  fillBasics();
  renderFilters();
  renderSkills('All', false);
  renderProjects();
  renderCases();
  renderAI();
  renderCerts();
  renderRepos();
  initModal();
  initAccordion();
  initForm();
  initResume();

  // 2. Motion & Interaction Enhancements
  initLoader();
  initScrollProgress();
  initNavMotion();
  initScrollSpy();
  initCursorFollower();
  initHeroAurora();
  initCounters();
  initCardMotion();
  initStaggerReveal();
  initTerminalTyping();
  initRoadmap();
  initMagneticButtons();
  initBackground();
});