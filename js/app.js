// CanReduce ACT Harm Reduction - Core Application Logic
import { CANTEST_INFO, ACT_DRUG_ALERTS, ACT_LEGAL_CONTEXT } from './cantest-data.js';
import { DRUG_CATEGORIES, SUBSTANCES_DATA } from './drugs101-data.js';
import { RISK_LEVELS, INTERACTION_PAIRS } from './interactions-data.js';
import { 
  NALOXONE_BASICS, 
  RECOGNITION_GUIDE, 
  SIMULATION_STEPS, 
  RECOVERY_POSITION_STEPS, 
  NALOXONE_QUIZ, 
  ACT_FREE_NALOXONE_OUTLETS 
} from './naloxone-trainer.js';
import { CPRMetronome } from './metronome.js';
import { SessionTracker } from './tracker.js';

class HarmReductionApp {
  constructor() {
    this.currentTab = 'cantest';
    this.activeSimStep = 1;
    this.selectedFormulation = 'nyxoid';
    this.quizAnswers = {};
    this.currentQuizIndex = 0;
    this.quizScore = 0;
    this.quizFinished = false;

    this.metronome = new CPRMetronome((count, bpm) => {
      this.updateMetronomeBeat(count, bpm);
    });

    this.sessionTracker = new SessionTracker();

    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupEmergencyDrawer();
    this.setupCanTESTSection();
    this.setupNaloxoneSection();
    this.setupDrugs101Section();
    this.setupInteractionsSection();
    this.setupNightOutSection();
    this.setupModals();
  }

  // --- TAB NAVIGATION ---
  setupNavigation() {
    const desktopBtns = document.querySelectorAll('.nav-tab-btn');
    const mobileBtns = document.querySelectorAll('.mobile-nav-btn');

    const handleTabSwitch = (targetTab) => {
      this.currentTab = targetTab;

      // Update button active states
      desktopBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === targetTab));
      mobileBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === targetTab));

      // Update panes
      document.querySelectorAll('.tab-pane').forEach(p => {
        p.classList.toggle('active', p.id === `tab-${targetTab}`);
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    desktopBtns.forEach(btn => {
      btn.addEventListener('click', () => handleTabSwitch(btn.dataset.tab));
    });

    mobileBtns.forEach(btn => {
      btn.addEventListener('click', () => handleTabSwitch(btn.dataset.tab));
    });

    // Hash routing if present
    const hash = window.location.hash.replace('#', '');
    if (['cantest', 'naloxone', 'drugs101', 'interactions', 'nightout'].includes(hash)) {
      handleTabSwitch(hash);
    }
  }

  // --- EMERGENCY SOS DRAWER ---
  setupEmergencyDrawer() {
    const sosBtn = document.getElementById('open-sos-btn');
    const drawer = document.getElementById('emergency-drawer');
    const closeBtn = document.getElementById('close-emergency-btn');
    const backdrop = document.getElementById('emergency-backdrop');
    const locateBtn = document.getElementById('get-location-btn');
    const locationDisplay = document.getElementById('emergency-location-display');

    const openDrawer = () => {
      drawer.classList.add('active');
      backdrop.classList.add('active');
    };

    const closeDrawer = () => {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
    };

    if (sosBtn) sosBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    if (locateBtn && locationDisplay) {
      locateBtn.addEventListener('click', () => {
        locationDisplay.textContent = "Locating via GPS...";
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const { latitude, longitude, accuracy } = pos.coords;
              locationDisplay.innerHTML = `
                <strong>GPS Coordinates for 000:</strong><br>
                Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}<br>
                <small class="text-muted">(Accuracy within ±${Math.round(accuracy)}m)</small>
                <button id="copy-coords-btn" class="btn-secondary" style="margin-top:6px; padding:4px 8px; font-size:0.75rem;">Copy for 000 Operator</button>
              `;
              const copyBtn = document.getElementById('copy-coords-btn');
              if (copyBtn) {
                copyBtn.addEventListener('click', () => {
                  navigator.clipboard.writeText(`Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`);
                  copyBtn.textContent = "Copied to clipboard!";
                });
              }
            },
            (err) => {
              locationDisplay.textContent = "Could not retrieve GPS location. Please look for nearby street signs or business addresses.";
            },
            { enableHighAccuracy: true, timeout: 10000 }
          );
        } else {
          locationDisplay.textContent = "GPS not supported on this device. Please check nearby street name.";
        }
      });
    }
  }

  // --- CANTEST & ACT SECTION ---
  setupCanTESTSection() {
    this.renderCanTESTStatus();
    this.renderACTAlerts();
    this.renderDecriminalisationInfo();
  }

  renderCanTESTStatus() {
    const statusContainer = document.getElementById('cantest-status-indicator');
    if (!statusContainer) return;

    // Determine if open right now (ACT Time)
    const now = new Date();
    // Use ACT/Sydney timezone approximation
    const actTime = new Date(now.toLocaleString("en-US", { timeZone: "Australia/Sydney" }));
    const currentDayIndex = actTime.getDay(); // 0 is Sun, 2 is Tue, 4 is Thu, 5 is Fri
    const currentMinutes = actTime.getHours() * 60 + actTime.getMinutes();

    const matchingSession = CANTEST_INFO.operatingHours.find(h => h.dayIndex === currentDayIndex);
    let isOpen = false;

    if (matchingSession && currentMinutes >= matchingSession.openMinutes && currentMinutes <= matchingSession.closeMinutes) {
      isOpen = true;
    }

    if (isOpen) {
      statusContainer.innerHTML = `
        <div class="status-pill open">
          <span class="status-dot"></span>
          <span>OPEN NOW until ${matchingSession.hours.split('–')[1].trim()}</span>
        </div>
      `;
    } else {
      statusContainer.innerHTML = `
        <div class="status-pill closed">
          <span class="status-dot"></span>
          <span>CLOSED NOW — Next: Tue 10am, Thu 3pm, Fri 6pm</span>
        </div>
      `;
    }

    // Render operating hours table
    const hoursTable = document.getElementById('cantest-hours-list');
    if (hoursTable) {
      hoursTable.innerHTML = CANTEST_INFO.operatingHours.map(h => `
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.06);">
          <strong>${h.day}</strong>
          <span class="text-cyan">${h.hours}</span>
        </div>
      `).join('');
    }
  }

  renderACTAlerts() {
    const alertsContainer = document.getElementById('act-alerts-list');
    if (!alertsContainer) return;

    alertsContainer.innerHTML = ACT_DRUG_ALERTS.map(alert => `
      <div class="alert-card ${alert.level.toLowerCase()}">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
          <div>
            <span class="badge-alert ${alert.level.toLowerCase()}">${alert.level}</span>
            <span style="font-size:0.8rem; color:var(--text-muted); margin-left:8px;">${alert.date}</span>
          </div>
        </div>
        <h3 style="font-size:1.1rem; margin-bottom:6px; color:#f8fafc;">${alert.title}</h3>
        <p style="font-size:0.88rem; color:#cbd5e1; margin-bottom:10px;">${alert.details}</p>
        
        <div style="background:rgba(0,0,0,0.25); padding:10px; border-radius:var(--radius-sm); margin-bottom:10px; font-size:0.84rem;">
          <div style="color:var(--text-muted);"><strong>Expected:</strong> ${alert.substanceExpected}</div>
          <div style="color:#f87171; margin-top:4px;"><strong>Actual Lab Result:</strong> ${alert.actualFound}</div>
        </div>

        <details style="font-size:0.84rem; cursor:pointer;">
          <summary style="font-weight:600; color:#38bdf8; outline:none;">View Symptoms & Harm Reduction Guidance</summary>
          <div style="margin-top:10px; padding-left:8px; border-left:2px solid rgba(56,189,248,0.4);">
            <strong style="color:#fca5a5;">Symptoms:</strong>
            <ul style="margin:4px 0 10px 16px;">
              ${alert.symptoms.map(s => `<li>${s}</li>`).join('')}
            </ul>
            <strong style="color:#6ee7b7;">Harm Reduction Advice:</strong>
            <ul style="margin:4px 0 4px 16px;">
              ${alert.harmReductionAdvice.map(a => `<li>${a}</li>`).join('')}
            </ul>
          </div>
        </details>
      </div>
    `).join('');
  }

  renderDecriminalisationInfo() {
    const tableEl = document.getElementById('decrim-thresholds-table');
    if (!tableEl) return;

    tableEl.innerHTML = ACT_LEGAL_CONTEXT.smallQuantitiesTable.map(item => `
      <div style="display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.06); font-size:0.88rem;">
        <span>${item.substance}</span>
        <strong class="text-cyan">${item.maxQuantity}</strong>
      </div>
    `).join('');
  }

  // --- NALOXONE TRAINING & SIMULATION SECTION ---
  setupNaloxoneSection() {
    this.renderSimulationStep(1);
    this.setupFormulationToggle();
    this.setupQuiz();
    this.renderFreeNaloxoneOutlets();

    // Setup stepper dots
    document.querySelectorAll('.stepper-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const stepNum = parseInt(dot.dataset.step, 10);
        this.renderSimulationStep(stepNum);
      });
    });

    const nextBtn = document.getElementById('sim-next-btn');
    const prevBtn = document.getElementById('sim-prev-btn');

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.activeSimStep < SIMULATION_STEPS.length) {
          this.renderSimulationStep(this.activeSimStep + 1);
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.activeSimStep > 1) {
          this.renderSimulationStep(this.activeSimStep - 1);
        }
      });
    }
  }

  setupFormulationToggle() {
    const nyxoidBtn = document.getElementById('toggle-nyxoid-btn');
    const prenoxadBtn = document.getElementById('toggle-prenoxad-btn');

    if (nyxoidBtn && prenoxadBtn) {
      nyxoidBtn.addEventListener('click', () => {
        this.selectedFormulation = 'nyxoid';
        nyxoidBtn.classList.add('active');
        prenoxadBtn.classList.remove('active');
        if (this.activeSimStep === 4) this.renderSimulationStep(4);
      });

      prenoxadBtn.addEventListener('click', () => {
        this.selectedFormulation = 'prenoxad';
        prenoxadBtn.classList.add('active');
        nyxoidBtn.classList.remove('active');
        if (this.activeSimStep === 4) this.renderSimulationStep(4);
      });
    }
  }

  renderSimulationStep(stepNumber) {
    this.activeSimStep = stepNumber;
    const stepData = SIMULATION_STEPS.find(s => s.step === stepNumber);
    if (!stepData) return;

    // Update dots
    document.querySelectorAll('.stepper-dot').forEach(dot => {
      const dStep = parseInt(dot.dataset.step, 10);
      dot.classList.toggle('active', dStep === stepNumber);
      dot.classList.toggle('completed', dStep < stepNumber);
    });

    // Update Step Card Content
    const titleEl = document.getElementById('sim-step-title');
    const bodyEl = document.getElementById('sim-step-body');
    const warningEl = document.getElementById('sim-step-warning');
    const prevBtn = document.getElementById('sim-prev-btn');
    const nextBtn = document.getElementById('sim-next-btn');

    if (titleEl) titleEl.textContent = stepData.title;

    if (bodyEl) {
      if (stepNumber === 4) {
        // Step 4 is the interactive administration formulation
        const opt = stepData.options[this.selectedFormulation];
        bodyEl.innerHTML = `
          <div style="background:rgba(56,189,248,0.1); border:1px solid rgba(56,189,248,0.3); border-radius:var(--radius-md); padding:16px; margin-bottom:16px;">
            <div style="font-weight:700; color:#38bdf8; margin-bottom:8px; font-size:1.05rem;">
              Administering: ${opt.name}
            </div>
            <ul class="step-instruction-list">
              ${opt.steps.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
          <p class="text-muted" style="font-size:0.85rem;">
            <em>Tip: Use the toggle above to switch instructions between Nyxoid (Nasal Spray) and Prenoxad (Injection).</em>
          </p>
        `;
      } else if (stepNumber === 5) {
        // Recovery position diagram & CPR
        bodyEl.innerHTML = `
          <ul class="step-instruction-list">
            ${stepData.instructions.map(inst => `<li>${inst}</li>`).join('')}
          </ul>
          <div style="margin-top:16px; background:rgba(0,0,0,0.3); padding:16px; border-radius:var(--radius-md);">
            <strong style="color:#38bdf8;">Recovery Position Checklist (4-Steps):</strong>
            <ol style="margin:8px 0 8px 20px; font-size:0.88rem; color:#cbd5e1; line-height:1.6;">
              ${RECOVERY_POSITION_STEPS.map(r => `<li>${r.text}</li>`).join('')}
            </ol>
            <button id="open-cpr-metronome-quick" class="btn-primary" style="margin-top:8px; font-size:0.85rem;">
              ⚡ Launch CPR Metronome (105 BPM)
            </button>
          </div>
        `;
        const cprQuickBtn = document.getElementById('open-cpr-metronome-quick');
        if (cprQuickBtn) {
          cprQuickBtn.addEventListener('click', () => {
            document.querySelector('[data-tab="nightout"]').click();
          });
        }
      } else {
        bodyEl.innerHTML = `
          <ul class="step-instruction-list">
            ${stepData.instructions.map(inst => `<li>${inst}</li>`).join('')}
          </ul>
        `;
      }
    }

    if (warningEl) {
      if (stepData.warning) {
        warningEl.style.display = 'block';
        warningEl.innerHTML = `⚠️ <strong>Crucial Note:</strong> ${stepData.warning}`;
      } else {
        warningEl.style.display = 'none';
      }
    }

    if (prevBtn) prevBtn.disabled = (stepNumber === 1);
    if (nextBtn) {
      if (stepNumber === SIMULATION_STEPS.length) {
        nextBtn.textContent = "Finish & Take Quiz";
        nextBtn.onclick = () => {
          const quizCard = document.getElementById('naloxone-quiz-container');
          if (quizCard) quizCard.scrollIntoView({ behavior: 'smooth' });
        };
      } else {
        nextBtn.textContent = "Next Step →";
        nextBtn.onclick = null;
      }
    }
  }

  setupQuiz() {
    this.currentQuizIndex = 0;
    this.quizScore = 0;
    this.quizAnswers = {};
    this.quizFinished = false;
    this.renderQuizQuestion();
  }

  renderQuizQuestion() {
    const container = document.getElementById('naloxone-quiz-card');
    if (!container) return;

    if (this.quizFinished) {
      this.renderQuizResults(container);
      return;
    }

    const q = NALOXONE_QUIZ[this.currentQuizIndex];
    container.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <span class="text-cyan" style="font-weight:700; font-size:0.88rem;">Question ${this.currentQuizIndex + 1} of ${NALOXONE_QUIZ.length}</span>
        <span style="font-size:0.8rem; color:var(--text-muted);">Overdose Readiness Check</span>
      </div>
      <h3 style="font-size:1.15rem; margin-bottom:16px;">${q.question}</h3>
      <div class="quiz-options-list">
        ${q.options.map((opt, idx) => `
          <div class="quiz-option" data-idx="${idx}">
            <div style="font-weight:700; color:var(--text-dim);">${String.fromCharCode(65 + idx)}.</div>
            <div>${opt}</div>
          </div>
        `).join('')}
      </div>
      <div id="quiz-feedback-box" style="display:none; margin-top:16px; padding:14px; border-radius:var(--radius-md); font-size:0.9rem;"></div>
      <div style="margin-top:16px; display:flex; justify-content:flex-end;">
        <button id="quiz-next-btn" class="btn-primary" style="display:none;">Next Question →</button>
      </div>
    `;

    const optionEls = container.querySelectorAll('.quiz-option');
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const nextBtn = document.getElementById('quiz-next-btn');

    optionEls.forEach(el => {
      el.addEventListener('click', () => {
        if (this.quizAnswers[this.currentQuizIndex] !== undefined) return; // already answered

        const chosenIdx = parseInt(el.dataset.idx, 10);
        this.quizAnswers[this.currentQuizIndex] = chosenIdx;

        const isCorrect = (chosenIdx === q.correctIndex);
        if (isCorrect) this.quizScore++;

        optionEls.forEach(o => {
          const idx = parseInt(o.dataset.idx, 10);
          if (idx === q.correctIndex) o.classList.add('correct');
          else if (idx === chosenIdx) o.classList.add('incorrect');
        });

        feedbackBox.style.display = 'block';
        feedbackBox.style.background = isCorrect ? 'var(--success-bg)' : 'var(--danger-bg)';
        feedbackBox.style.border = isCorrect ? '1px solid var(--success-border)' : '1px solid var(--danger-border)';
        feedbackBox.style.color = isCorrect ? 'var(--success-text)' : 'var(--danger-text)';
        feedbackBox.innerHTML = `<strong>${isCorrect ? '✓ Correct!' : '✗ Not quite.'}</strong> ${q.explanation}`;

        nextBtn.style.display = 'inline-flex';
        nextBtn.textContent = (this.currentQuizIndex === NALOXONE_QUIZ.length - 1) ? 'View Your Certificate' : 'Next Question →';
      });
    });

    nextBtn.addEventListener('click', () => {
      if (this.currentQuizIndex < NALOXONE_QUIZ.length - 1) {
        this.currentQuizIndex++;
        this.renderQuizQuestion();
      } else {
        this.quizFinished = true;
        this.renderQuizResults(container);
      }
    });
  }

  renderQuizResults(container) {
    const percentage = Math.round((this.quizScore / NALOXONE_QUIZ.length) * 100);
    const passed = percentage >= 80;

    container.innerHTML = `
      <div style="text-align:center; padding:20px;">
        <div style="font-size:3rem; margin-bottom:12px;">${passed ? '🏆' : '📚'}</div>
        <h3 style="font-size:1.5rem; margin-bottom:8px;">${passed ? 'Naloxone Trained & Ready!' : 'Good Effort! Keep Reviewing'}</h3>
        <p class="text-muted" style="margin-bottom:20px;">
          You scored <strong>${this.quizScore} out of ${NALOXONE_QUIZ.length}</strong> (${percentage}%).
        </p>

        ${passed ? `
          <div style="background:radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(17,24,39,0.9) 80%); border:2px dashed #10b981; border-radius:var(--radius-lg); padding:24px; margin-bottom:24px; max-width:480px; margin-left:auto; margin-right:auto;">
            <span class="badge-pill" style="background:#10b981; color:#0f172a;">ACT Harm Reduction Badge</span>
            <h4 style="font-size:1.25rem; margin:10px 0 4px; color:#f8fafc;">Certified Naloxone Community Responder</h4>
            <p style="font-size:0.85rem; color:#94a3b8;">Issued via CanReduce ACT Safety Hub</p>
            <div style="margin-top:14px; font-size:0.8rem; color:#cbd5e1;">
              Trained in: Opioid Toxidrome Identification, 000 Protocols, Nyxoid Nasal & Prenoxad IM Administration, Recovery Position, and CPR Pacing.
            </div>
          </div>
        ` : `
          <p style="font-size:0.9rem; color:#fca5a5; margin-bottom:20px;">
            A score of 80% or higher is recommended for full confidence in an overdose emergency. Review the 7 simulation steps and retry!
          </p>
        `}

        <button id="retry-quiz-btn" class="btn-secondary">Restart Quiz</button>
      </div>
    `;

    document.getElementById('retry-quiz-btn').addEventListener('click', () => {
      this.setupQuiz();
    });
  }

  renderFreeNaloxoneOutlets() {
    const outletsList = document.getElementById('free-naloxone-outlets-list');
    if (!outletsList) return;

    outletsList.innerHTML = ACT_FREE_NALOXONE_OUTLETS.map(outlet => `
      <div style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.06);">
        <strong style="color:#f8fafc; font-size:0.95rem;">${outlet.name}</strong>
        <div style="font-size:0.84rem; color:#94a3b8; margin-top:2px;">📍 ${outlet.location}</div>
        ${outlet.hours ? `<div style="font-size:0.8rem; color:#38bdf8; margin-top:2px;">🕒 ${outlet.hours}</div>` : ''}
        ${outlet.phone ? `<div style="font-size:0.8rem; color:#cbd5e1; margin-top:2px;">📞 <a href="tel:${outlet.phone.replace(/[^0-9]/g,'')}" style="color:inherit;">${outlet.phone}</a></div>` : ''}
        ${outlet.note ? `<div style="font-size:0.78rem; color:#a7f3d0; margin-top:2px;">ℹ️ ${outlet.note}</div>` : ''}
      </div>
    `).join('');
  }

  // --- DRUGS 101 SECTION ---
  setupDrugs101Section() {
    this.renderCategoryFilterButtons();
    this.renderSubstancesList('all', '');

    const searchInput = document.getElementById('drug-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const activeCat = document.querySelector('.category-filter-btn.active')?.dataset.category || 'all';
        this.renderSubstancesList(activeCat, e.target.value);
      });
    }
  }

  renderCategoryFilterButtons() {
    const filterContainer = document.getElementById('drug-categories-bar');
    if (!filterContainer) return;

    filterContainer.innerHTML = DRUG_CATEGORIES.map(cat => `
      <button class="filter-btn category-filter-btn ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
        ${cat.name}
      </button>
    `).join('');

    filterContainer.querySelectorAll('.category-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterContainer.querySelectorAll('.category-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const query = document.getElementById('drug-search-input')?.value || '';
        this.renderSubstancesList(btn.dataset.category, query);
      });
    });
  }

  renderSubstancesList(category, searchQuery) {
    const listContainer = document.getElementById('substances-grid');
    if (!listContainer) return;

    const query = searchQuery.trim().toLowerCase();

    const filtered = SUBSTANCES_DATA.filter(sub => {
      const matchCat = (category === 'all') || (sub.category === category) || (sub.secondaryCategory === category);
      const matchQuery = !query || 
        sub.name.toLowerCase().includes(query) ||
        sub.slang.toLowerCase().includes(query) ||
        sub.category.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:40px 20px; color:var(--text-muted);">
          No matching substances found for "${searchQuery}".
        </div>
      `;
      return;
    }

    listContainer.innerHTML = filtered.map(sub => {
      const catObj = DRUG_CATEGORIES.find(c => c.id === sub.category) || {};
      return `
        <div class="card substance-card" data-drug-id="${sub.id}">
          <div>
            ${this.renderSubstancePhoto(sub)}
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
              <span class="meta-chip" style="background:rgba(255,255,255,0.08); color:${catObj.color || '#38bdf8'}; font-weight:700;">
                ${catObj.name || sub.category}
              </span>
            </div>
            <h3 class="card-title">${sub.name}</h3>
            <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:8px;">
              <strong>Also known as:</strong> ${sub.slang}
            </p>
            <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
              ${sub.effects[0]}
            </p>
          </div>
          <div>
            <div class="substance-meta">
              <span class="meta-chip">🕒 Duration: ${sub.timeline.oral?.duration || sub.timeline.nasal?.duration || sub.timeline.inhaled?.duration || 'Varies'}</span>
              <span class="meta-chip">⚠️ Key Risk: ${sub.risks[0].split('(')[0]}</span>
            </div>
            <button class="btn-secondary" style="width:100%; margin-top:8px; font-size:0.85rem;">
              Full Harm Reduction Guide →
            </button>
          </div>
        </div>
      `;
    }).join('');

    listContainer.querySelectorAll('.substance-card').forEach(card => {
      card.addEventListener('click', (event) => {
        if (event.target.closest('a')) return;
        this.openSubstanceModal(card.dataset.drugId);
      });
    });
  }

  openSubstanceModal(drugId) {
    const sub = SUBSTANCES_DATA.find(s => s.id === drugId);
    if (!sub) return;

    const modal = document.getElementById('substance-modal');
    const content = document.getElementById('substance-modal-body');
    if (!modal || !content) return;

    const catObj = DRUG_CATEGORIES.find(c => c.id === sub.category) || {};

    content.innerHTML = `
      ${this.renderSubstancePhoto(sub)}
      <div style="margin-bottom:16px;">
        <span class="meta-chip" style="background:rgba(255,255,255,0.1); color:${catObj.color || '#38bdf8'}; font-weight:700;">
          ${catObj.name || sub.category}
        </span>
        <h2 style="font-size:1.7rem; margin-top:8px;">${sub.name}</h2>
        <p style="font-size:0.88rem; color:var(--text-muted);"><strong>Street names:</strong> ${sub.slang}</p>
        <p style="font-size:0.88rem; color:var(--text-muted); margin-top:4px;"><strong>Common forms:</strong> ${sub.form}</p>
      </div>

      <div style="background:rgba(0,0,0,0.3); padding:16px; border-radius:var(--radius-md); margin-bottom:16px;">
        <h4 style="color:#38bdf8; font-size:0.95rem; margin-bottom:8px;">⏱️ Timeline & Pharmacokinetics</h4>
        ${Object.entries(sub.timeline).map(([roa, times]) => `
          <div style="font-size:0.85rem; margin-bottom:8px; padding-bottom:6px; border-bottom:1px solid rgba(255,255,255,0.05);">
            <strong style="text-transform:capitalize; color:#f8fafc;">${roa} Route:</strong>
            <span style="color:#cbd5e1; margin-left:8px;">Onset: ${times.onset} | Peak: ${times.peak} | Total Duration: ${times.duration}</span>
            ${times.note ? `<div style="font-size:0.8rem; color:#fcd34d; margin-top:2px;">${times.note}</div>` : ''}
          </div>
        `).join('')}
        ${sub.commonDose ? `<div style="font-size:0.82rem; color:#94a3b8; margin-top:6px;"><strong>Dosing guidance:</strong> ${sub.commonDose}</div>` : ''}
      </div>

      <div style="margin-bottom:16px;">
        <h4 style="font-size:1rem; margin-bottom:8px; color:#f8fafc;">✨ Desired & Subjective Effects</h4>
        <ul style="padding-left:20px; font-size:0.88rem; color:#cbd5e1; line-height:1.6;">
          ${sub.effects.map(e => `<li>${e}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom:16px; background:rgba(239,68,68,0.08); border-left:3px solid #ef4444; padding:12px; border-radius:0 var(--radius-sm) var(--radius-sm) 0;">
        <h4 style="font-size:1rem; margin-bottom:6px; color:#fca5a5;">⚠️ Key Physiological Risks & Adverse Effects</h4>
        <ul style="padding-left:20px; font-size:0.88rem; color:#fca5a5; line-height:1.6;">
          ${sub.risks.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom:16px; background:rgba(16,185,129,0.08); border-left:3px solid #10b981; padding:12px; border-radius:0 var(--radius-sm) var(--radius-sm) 0;">
        <h4 style="font-size:1rem; margin-bottom:6px; color:#6ee7b7;">🛡️ Harm Reduction Guidelines (Safer Use)</h4>
        <ul style="padding-left:20px; font-size:0.88rem; color:#6ee7b7; line-height:1.6;">
          ${sub.harmReductionTips.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>

      <div style="background:rgba(0,0,0,0.4); padding:14px; border-radius:var(--radius-md); font-size:0.85rem;">
        <strong style="color:#ef4444;">🚨 Signs of Overdose / Toxicity:</strong>
        <p style="margin:4px 0 8px; color:#cbd5e1;">${sub.overdoseSigns}</p>
        <strong style="color:#38bdf8;">Immediate Action:</strong>
        <p style="margin-top:2px; color:#cbd5e1;">${sub.emergencyAction}</p>
      </div>
    `;

    modal.classList.add('active');
  }

  // --- INTERACTIONS SECTION ---
  setupInteractionsSection() {
    const selectA = document.getElementById('interact-select-a');
    const selectB = document.getElementById('interact-select-b');
    const resultBox = document.getElementById('interaction-result-card');

    if (!selectA || !selectB || !resultBox) return;

    // Populate dropdown options
    const substancesForDropdown = [
      { id: "alcohol", name: "Alcohol (Beer, Spirits, Wine)" },
      { id: "mdma", name: "MDMA / Ecstasy" },
      { id: "ketamine", name: "Ketamine" },
      { id: "ghb", name: "GHB / GBL ('G')" },
      { id: "opioids", name: "Opioids (Heroin, Oxy, Nitazenes)" },
      { id: "benzodiazepines", name: "Benzodiazepines (Xanax, Valium)" },
      { id: "cocaine", name: "Cocaine" },
      { id: "methamphetamine", name: "Methamphetamine / Speed" },
      { id: "cannabis", name: "Cannabis (THC / Edibles)" },
      { id: "lsd", name: "LSD / Acid" },
      { id: "psilocybin", name: "Psilocybin (Mushrooms)" },
      { id: "nitrous-oxide", name: "Nitrous Oxide (Nangs)" }
    ];

    const generateOptions = (selectedId) => {
      return substancesForDropdown.map(s => `
        <option value="${s.id}" ${s.id === selectedId ? 'selected' : ''}>${s.name}</option>
      `).join('');
    };

    selectA.innerHTML = generateOptions('alcohol');
    selectB.innerHTML = generateOptions('ghb');

    const evaluateInteraction = () => {
      const a = selectA.value;
      const b = selectB.value;

      if (a === b) {
        resultBox.innerHTML = `
          <div style="text-align:center; padding:20px; color:var(--text-muted);">
            Please select two different substances to evaluate combination risks.
          </div>
        `;
        return;
      }

      // Find in interaction pairs
      const match = INTERACTION_PAIRS.find(p => 
        (p.substanceA === a && p.substanceB === b) || 
        (p.substanceA === b && p.substanceB === a)
      );

      if (match) {
        const risk = RISK_LEVELS[match.level];
        resultBox.innerHTML = `
          <div style="border-left: 4px solid ${risk.color}; padding-left: 16px;">
            <span class="badge-pill ${risk.badgeClass}">${risk.label}</span>
            <h3 style="font-size:1.3rem; margin:6px 0 8px; color:#f8fafc;">${match.title}</h3>
            <p style="font-size:0.95rem; font-weight:600; color:${risk.color}; margin-bottom:12px;">
              ${match.summary}
            </p>
            <div style="background:rgba(0,0,0,0.3); padding:14px; border-radius:var(--radius-md); font-size:0.88rem; line-height:1.6; color:#cbd5e1;">
              <strong style="color:#f8fafc;">Biochemical & Clinical Mechanism:</strong><br>
              ${match.mechanism}
            </div>
          </div>
        `;
      } else {
        resultBox.innerHTML = `
          <div style="padding:16px; background:rgba(255,255,255,0.04); border-radius:var(--radius-md);">
            <span class="badge-pill badge-caution">Caution / Unrated Pair</span>
            <h3 style="font-size:1.15rem; margin:6px 0;">Individual Caution Advised</h3>
            <p style="font-size:0.88rem; color:#cbd5e1;">
              Direct clinical interaction data for this specific pair may vary depending on dosages, individual metabolism, and setting. Polydrug use always places additional stress on the heart, liver, and brain. If combining, reduce doses of both substances by at least 50% and stay with trusted peers.
            </p>
          </div>
        `;
      }
    };

    selectA.addEventListener('change', evaluateInteraction);
    selectB.addEventListener('change', evaluateInteraction);
    evaluateInteraction();
  }

  // --- NIGHT OUT / SESSION TRACKER SECTION ---
  setupNightOutSection() {
    this.setupCPRMetronome();
    this.setupWaterTracker();
    this.setupDoseLogger();
  }

  setupCPRMetronome() {
    const playBtn = document.getElementById('metronome-play-btn');
    const pulseCircle = document.getElementById('cpr-pulse-circle');
    const bpmSlider = document.getElementById('cpr-bpm-slider');
    const bpmValue = document.getElementById('cpr-bpm-val');
    const countEl = document.getElementById('cpr-comp-count');
    const alertEl = document.getElementById('cpr-breath-alert');

    if (!playBtn || !pulseCircle) return;

    playBtn.addEventListener('click', () => {
      if (this.metronome.isRunning) {
        this.metronome.stop();
        playBtn.textContent = "Start CPR Metronome";
        playBtn.classList.remove('btn-primary');
        playBtn.classList.add('btn-secondary');
        countEl.textContent = "0";
        alertEl.textContent = "Push hard & fast in center of chest";
      } else {
        this.metronome.start();
        playBtn.textContent = "Stop Metronome";
        playBtn.classList.remove('btn-secondary');
        playBtn.classList.add('btn-primary');
      }
    });

    if (bpmSlider && bpmValue) {
      bpmSlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        this.metronome.setBpm(val);
        bpmValue.textContent = val;
      });
    }
  }

  updateMetronomeBeat(count, bpm) {
    const pulseCircle = document.getElementById('cpr-pulse-circle');
    const countEl = document.getElementById('cpr-comp-count');
    const alertEl = document.getElementById('cpr-breath-alert');

    if (pulseCircle) {
      pulseCircle.classList.add('beat');
      setTimeout(() => pulseCircle.classList.remove('beat'), 90);
    }

    if (countEl) countEl.textContent = count;

    if (alertEl) {
      const cyclePos = count % 30;
      if (cyclePos === 0) {
        alertEl.innerHTML = `<strong style="color:#38bdf8;">30 COMPRESSIONS: Give 2 rescue breaths now (or continue compressions)</strong>`;
      } else {
        alertEl.textContent = `Compression ${cyclePos} of 30`;
      }
    }
  }

  setupWaterTracker() {
    const addBtn = document.getElementById('add-water-btn');
    const resetBtn = document.getElementById('reset-water-btn');
    const countDisplay = document.getElementById('water-count-display');
    const warningBox = document.getElementById('water-warning-box');

    const updateUI = () => {
      const status = this.sessionTracker.getWaterStatus();
      if (countDisplay) countDisplay.textContent = status.count;

      if (warningBox) {
        if (status.warning) {
          warningBox.style.display = 'block';
          warningBox.textContent = status.warning;
        } else {
          warningBox.style.display = 'none';
        }
      }
    };

    if (addBtn) {
      addBtn.addEventListener('click', () => {
        this.sessionTracker.addWaterCup();
        updateUI();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.sessionTracker.resetWater();
        updateUI();
      });
    }

    updateUI();
  }

  setupDoseLogger() {
    const logBtn = document.getElementById('log-dose-btn');
    const substanceInput = document.getElementById('dose-substance-select');
    const notesInput = document.getElementById('dose-notes-input');
    const logList = document.getElementById('dose-log-list');
    const clearSessionBtn = document.getElementById('clear-session-btn');

    const renderLog = () => {
      if (!logList) return;
      const doses = this.sessionTracker.getDoses();
      if (doses.length === 0) {
        logList.innerHTML = `<div style="color:var(--text-dim); font-size:0.85rem; padding:10px 0;">No doses logged yet in this session.</div>`;
        return;
      }

      logList.innerHTML = doses.map(d => {
        const date = new Date(d.time);
        const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const minutesAgo = Math.round((Date.now() - d.time) / (1000 * 60));

        let redoseWarning = "";
        if (d.substance.toLowerCase().includes("mdma") && minutesAgo < 90) {
          redoseWarning = `<div style="color:#fcd34d; font-size:0.75rem; margin-top:2px;">⚠️ Wait at least 90–120 mins before redosing MDMA!</div>`;
        } else if (d.substance.toLowerCase().includes("ghb") && minutesAgo < 120) {
          redoseWarning = `<div style="color:#ef4444; font-size:0.75rem; margin-top:2px;">🚨 CRITICAL: Do NOT redose GHB before 2 hours!</div>`;
        }

        return `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.06);">
            <div>
              <strong style="color:#f8fafc; font-size:0.9rem;">${d.substance}</strong>
              ${d.notes ? `<div style="font-size:0.78rem; color:#94a3b8;">${d.notes}</div>` : ''}
              ${redoseWarning}
            </div>
            <div style="text-align:right;">
              <span class="text-cyan" style="font-size:0.85rem; font-weight:600;">${timeStr}</span>
              <div style="font-size:0.72rem; color:var(--text-dim);">${minutesAgo}m ago</div>
            </div>
          </div>
        `;
      }).join('');
    };

    if (logBtn && substanceInput) {
      logBtn.addEventListener('click', () => {
        const subName = substanceInput.value;
        const notes = notesInput ? notesInput.value.trim() : '';
        this.sessionTracker.logDose(subName, notes);
        if (notesInput) notesInput.value = '';
        renderLog();
      });
    }

    if (clearSessionBtn) {
      clearSessionBtn.addEventListener('click', () => {
        if (confirm("Clear all session logs and water counters? (Privacy wipe)")) {
          this.sessionTracker.clearSession();
          renderLog();
          this.setupWaterTracker();
        }
      });
    }

    renderLog();
  }

  renderSubstancePhoto(sub) {
    if (!sub.image) return '';
    const img = sub.image;
    return `<figure class="substance-photo">
      <img src="${img.src}" alt="${img.alt}" loading="lazy" width="800" height="500">
      <figcaption>Example photo · <a href="${img.source}" target="_blank" rel="noopener">${img.author}</a> · <a href="${img.licenseUrl}" target="_blank" rel="noopener">${img.license}</a> · resized / cropped</figcaption>
    </figure>`;
  }

  // --- MODAL CONTROLS ---
  setupModals() {
    const modal = document.getElementById('substance-modal');
    const closeBtn = document.getElementById('close-substance-modal');

    if (modal && closeBtn) {
      closeBtn.addEventListener('click', () => modal.classList.remove('active'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    }
  }
}

// Start app on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new HarmReductionApp();
});
