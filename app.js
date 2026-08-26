/* ==========================================================================
   LCC ENTERPRISE PORTFOLIO - CORE APPLICATION ENGINE & ANIMATION MATRIX
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       SECTION 1: TAB NAVIGATION CONTROLLER
       ========================================================================== */
    const tabButtons = document.querySelectorAll('.control-tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel-content');

    function switchTab(targetId) {
        tabButtons.forEach(b => b.classList.remove('active-view-node'));
        tabPanels.forEach(p => p.classList.remove('active-view-node'));

        const targetBtn = document.querySelector(`.control-tab-btn[data-target="${targetId}"]`);
        const targetPanel = document.getElementById(targetId);

        if (targetBtn && targetPanel) {
            targetBtn.classList.add('active-view-node');
            targetPanel.classList.add('active-view-node');
        }
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            switchTab(targetId);
        });
    });

    /* ==========================================================================
       SECTION 2: ANIMATED SKILL BARS & SCROLL OBSERVER
       ========================================================================== */
    const skillBars = document.querySelectorAll('.skill-bar-fill');

    function animateSkillBars() {
        skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-target-width');
            if (targetWidth) {
                bar.style.width = targetWidth;
            }
        });
    }

    // Trigger skill bars animation shortly after render
    setTimeout(animateSkillBars, 300);

    /* ==========================================================================
       SECTION 3: TOP TELEMETRY SYSTEM UPTIME & LATENCY LOOP
       ========================================================================== */
    const uptimeEl = document.getElementById('telemetry-uptime');
    const statUptimeEl = document.getElementById('stat-uptime');
    const pingEl = document.getElementById('telemetry-ping');
    const loadEl = document.getElementById('telemetry-load');

    let startTime = Date.now();

    setInterval(() => {
        // Uptime counter
        const elapsedSec = Math.floor((Date.now() - startTime) / 1000);
        const hrs = String(Math.floor(elapsedSec / 3600)).padStart(2, '0');
        const mins = String(Math.floor((elapsedSec % 3600) / 60)).padStart(2, '0');
        const secs = String(elapsedSec % 60).padStart(2, '0');
        const timeStr = `${hrs}:${mins}:${secs}`;
        const shortTimeStr = `${mins}:${secs}`;

        if (uptimeEl) uptimeEl.textContent = timeStr;
        if (statUptimeEl) statUptimeEl.textContent = shortTimeStr;

        // Simulated telemetry jitter
        if (pingEl && Math.random() > 0.6) {
            const simulatedPing = Math.floor(12 + Math.random() * 14);
            pingEl.textContent = `${simulatedPing}ms`;
        }

        if (loadEl && Math.random() > 0.5) {
            const simulatedLoad = (0.8 + Math.random() * 2.4).toFixed(1);
            loadEl.textContent = `${simulatedLoad}%`;
        }
    }, 1000);

    /* ==========================================================================
       SECTION 4: DIAGNOSTICS LAB & INTERACTIVE TERMINAL CLI ENGINE
       ========================================================================== */
    const diagnosticScripts = {
        shield: [
            { text: "Initializing telemetry probe on target network branch...", class: "log-process" },
            { text: "Attaching explicit cache-busting timestamp parameters...", class: "log-process" },
            { text: "PING SUCCESS: 142ms response captured from api.github.com", class: "log-success" },
            { text: "SYSTEM TELEMETRY STATE: [🟢 STABLE]", class: "log-success" }
        ],
        quoteforge: [
            { text: "Reading input project baseline: 40 engineering hours...", class: "log-process" },
            { text: "Applying reverse-percentage escrow calculation: subtotal / 0.9", class: "log-process" },
            { text: "Margin leakage secured. Proposal document compiled.", class: "log-success" },
            { text: "FINANCIAL DATA BOUNDS SET: $1,555.56 total quote output.", class: "log-success" }
        ],
        command: [
            { text: "Opening active client profile record stack...", class: "log-process" },
            { text: "Querying internal browser engine LocalStorage mapping arrays...", class: "log-process" },
            { text: "Data-persistence confirmed. State arrays synced.", class: "log-success" },
            { text: "METRIC ANALYSIS RESOLVED: Core monetization metrics online.", class: "log-success" }
        ]
    };

    const runBtn = document.getElementById('run-simulation-btn');
    const selector = document.getElementById('simulation-selector');
    const terminal = document.getElementById('portfolio-terminal');

    if (runBtn && selector && terminal) {
        runBtn.addEventListener('click', function() {
            runBtn.disabled = true;
            let lineIndex = 0;
            const scriptsToRun = diagnosticScripts[selector.value];

            const logTimer = setInterval(function() {
                if (lineIndex < scriptsToRun.length) {
                    const currentLine = scriptsToRun[lineIndex];
                    appendTerminalLine(currentLine.text, currentLine.class);
                    lineIndex++;
                } else {
                    clearInterval(logTimer);
                    runBtn.disabled = false;
                }
            }, 500);
        });
    }

    function appendTerminalLine(text, className = "log-neutral") {
        if (!terminal) return;
        const timestamp = new Date().toLocaleTimeString();
        const lineElement = document.createElement('div');
        lineElement.className = className;
        lineElement.textContent = `[${timestamp}] ${text}`;
        terminal.appendChild(lineElement);
        terminal.scrollTop = terminal.scrollHeight;
    }

    // CLI Form Command Parser
    const cliForm = document.getElementById('terminal-cli-form');
    const cliInput = document.getElementById('cli-input-field');

    if (cliForm && cliInput) {
        cliForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const cmdText = cliInput.value.trim();
            if (!cmdText) return;

            appendTerminalLine(`> ${cmdText}`, 'log-cmd');
            processCliCommand(cmdText);
            cliInput.value = '';
        });
    }

    // Quick command chips
    document.querySelectorAll('.cli-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            const cmd = this.getAttribute('data-cmd');
            if (cmd) {
                appendTerminalLine(`> ${cmd}`, 'log-cmd');
                processCliCommand(cmd);
            }
        });
    });

    function processCliCommand(rawCmd) {
        const parts = rawCmd.trim().toLowerCase().split(' ');
        const mainCmd = parts[0];

        switch (mainCmd) {
            case 'help':
                appendTerminalLine("--- LCC TERMINAL CLI COMMAND DIRECTORY ---", "log-process");
                appendTerminalLine("help      : Output available CLI system commands", "log-neutral");
                appendTerminalLine("status    : Display live node health & telemetry state", "log-neutral");
                appendTerminalLine("ping      : Run async latency diagnostic check", "log-neutral");
                appendTerminalLine("skills    : List core system engineering stack matrix", "log-neutral");
                appendTerminalLine("projects  : List active deployed software assets", "log-neutral");
                appendTerminalLine("quote <h> : Estimate quote for given hours (e.g. quote 40)", "log-neutral");
                appendTerminalLine("contact   : Open secure async transmission gateway", "log-neutral");
                appendTerminalLine("clear     : Wipe diagnostic console display output", "log-neutral");
                break;

            case 'status':
                appendTerminalLine("NODE HEALTH: 100% OPERATIONAL // SYSTEM ZERO DEFECTS", "log-success");
                appendTerminalLine(`ACTIVE TELEMETRY: Ping ${pingEl ? pingEl.textContent : '14ms'} | Load ${loadEl ? loadEl.textContent : '1.2%'}`, "log-process");
                break;

            case 'ping':
                appendTerminalLine("PING api.github.com: 32 bytes | time=14.2ms | TTL=56", "log-process");
                appendTerminalLine("PING telemetry.lcc.internal: 32 bytes | time=2.1ms | TTL=64", "log-success");
                break;

            case 'skills':
                appendTerminalLine("CORE STACK: JavaScript (ES6+), React.js, Python, Node.js, Modular CSS3, LocalStorage API, MongoDB", "log-success");
                break;

            case 'projects':
                appendTerminalLine("1. 🛰️ LCC Performance Shield (Telemetry Matrix)", "log-process");
                appendTerminalLine("2. 🚀 Freelance Command Center (React Engine)", "log-process");
                appendTerminalLine("3. 🛠️ LCC QuoteForge Pro (Financial Calculator)", "log-process");
                break;

            case 'quote':
                const hours = parseInt(parts[1]) || 40;
                const estimated = (hours * 75 * 1.15).toFixed(2);
                appendTerminalLine(`ESTIMATED QUOTE (${hours} hrs @ $75/hr + 15% margin): $${estimated} USD`, "log-success");
                break;

            case 'contact':
                appendTerminalLine("Redirecting to Secure Gateway panel...", "log-process");
                switchTab('panel-gateway');
                break;

            case 'clear':
                if (terminal) terminal.innerHTML = '';
                appendTerminalLine("[SYSTEM] Diagnostic console reset completed.", "log-neutral");
                break;

            default:
                appendTerminalLine(`Command not recognized: '${mainCmd}'. Type 'help' for command index.`, "log-warning");
                break;
        }
    }

    /* ==========================================================================
       SECTION 5: PROJECT SEARCH & TAG FILTERING CONTROLLER
       ========================================================================== */
    const searchInput = document.getElementById('project-search-input');
    const filterPills = document.querySelectorAll('.filter-tag-pill');
    const projectCards = document.querySelectorAll('.project-card');
    const noProjectsMsg = document.getElementById('no-projects-found');

    let activeFilterTag = 'all';

    function filterProjects() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        let visibleCount = 0;

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardTags = (card.getAttribute('data-tags') || '').toLowerCase();
            const cardText = card.textContent.toLowerCase();

            const matchesTag = (activeFilterTag === 'all') || (cardCategory === activeFilterTag);
            const matchesQuery = !query || cardText.includes(query) || cardTags.includes(query);

            if (matchesTag && matchesQuery) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (noProjectsMsg) {
            noProjectsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterProjects);
    }

    filterPills.forEach(pill => {
        pill.addEventListener('click', function() {
            filterPills.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            activeFilterTag = this.getAttribute('data-filter');
            filterProjects();
        });
    });

    /* ==========================================================================
       SECTION 6: PROJECT DEEP-DIVE MODAL SYSTEM
       ========================================================================== */
    const projectDetailsData = {
        shield: {
            title: "🛰️ LCC Performance Shield",
            tag: "ASYNCHRONOUS JS // NETWORK TELEMETRY",
            desc: "An enterprise-grade telemetry dashboard running background polling loops against live production APIs. Measures sub-millisecond response latency, HTTP status codes, and payload integrity while dynamically updating the browser DOM without memory leaks.",
            specs: "• Architecture: ES6 Async/Await fetch loops with AbortController timeout bounds.\n• Latency Resolution: Millisecond accuracy via performance.now()\n• Data Handling: Real-time UI buffer with zero third-party framework overhead.",
            code: `async function pollTelemetryEndpoint(targetUrl) {\n  const controller = new AbortController();\n  const timeout = setTimeout(() => controller.abort(), 3000);\n  const t0 = performance.now();\n  try {\n    const res = await fetch(targetUrl, { signal: controller.signal });\n    const latency = Math.round(performance.now() - t0);\n    return { status: res.status, latencyMs: latency };\n  } catch (err) {\n    return { status: 'TIMEOUT_ERROR', latencyMs: null };\n  } finally {\n    clearTimeout(timeout);\n  }\n}`,
            link: "https://github.com/lukmancodecraft/lcc-performance-shield"
        },
        command: {
            title: "🚀 Freelance Command Center",
            tag: "REACT ENGINE // DATA PERSISTENCE",
            desc: "A global client management and lead qualification matrix built with data-persistent LocalStorage state architecture, multi-currency valuation layers, and automated client scoring models to optimize business operations.",
            specs: "• State Management: Custom React hooks bound to window.localStorage.\n• Scoring Engine: Weighted Multi-Factor Algorithm (Budget x Timeline x Tech Fit).\n• Output Format: Dynamic PDF invoice generation & CSV export pipeline.",
            code: `const usePersistentState = (key, initialVal) => {\n  const [state, setState] = useState(() => {\n    const cached = localStorage.getItem(key);\n    return cached ? JSON.parse(cached) : initialVal;\n  });\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(state));\n  }, [key, state]);\n  return [state, setState];\n};`,
            link: "https://github.com/lukmancodecraft/freelance-dashboard"
        },
        quoteforge: {
            title: "🛠️ LCC QuoteForge Pro",
            tag: "MODULAR CSS3 // FINANCIAL CALCULATOR",
            desc: "A professional client scoping application utilizing inverse-percentage math models to calculate project budgets and auto-generate clean contract proposals while securing freelance profit margins.",
            specs: "• Math Model: Subtotal / (1 - Target Margin Percentage)\n• Layout: Modular CSS3 custom properties with high-contrast UI state indicators.\n• Export Pipeline: Pure Client-side proposal document compiler.",
            code: `function calculateSecuredQuote(laborHours, hourlyRate, marginPercent) {\n  const rawCost = laborHours * hourlyRate;\n  const marginDecimal = marginPercent / 100;\n  const finalQuote = rawCost / (1 - marginDecimal);\n  return {\n    baseLabor: rawCost.toFixed(2),\n    securedQuote: finalQuote.toFixed(2),\n    marginRetained: (finalQuote - rawCost).toFixed(2)\n  };\n}`,
            link: "https://github.com/lukmancodecraft/lcc-quoteforge"
        }
    };

    const projectModal = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const projectKey = this.getAttribute('data-project');
            const data = projectDetailsData[projectKey];

            if (data && projectModal) {
                document.getElementById('modal-project-title').textContent = data.title;
                document.getElementById('modal-project-tag').textContent = data.tag;
                document.getElementById('modal-project-desc').textContent = data.desc;
                document.getElementById('modal-project-specs').textContent = data.specs;
                document.getElementById('modal-project-code').textContent = data.code;
                document.getElementById('modal-project-link').href = data.link;

                projectModal.classList.add('active');
            }
        });
    });

    if (modalCloseBtn && projectModal) {
        modalCloseBtn.addEventListener('click', () => projectModal.classList.remove('active'));
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) projectModal.classList.remove('active');
        });
    }

    /* ==========================================================================
       SECTION 7: LCC QUOTEFORGE CALCULATOR ENGINE
       ========================================================================== */
    const estScope = document.getElementById('est-scope');
    const estHours = document.getElementById('est-hours');
    const estRate = document.getElementById('est-rate');
    const estMargin = document.getElementById('est-margin');
    const estTotalDisplay = document.getElementById('est-total-display');
    const estSpecsDisplay = document.getElementById('est-specs-display');

    function calculateEstimate() {
        if (!estHours || !estRate || !estMargin || !estTotalDisplay || !estSpecsDisplay) return;

        const hours = parseFloat(estHours.value) || 0;
        const rate = parseFloat(estRate.value) || 0;
        const margin = parseFloat(estMargin.value) || 0;
        const scope = estScope ? estScope.value : 'medium';

        let multiplier = 1.0;
        if (scope === 'medium') multiplier = 1.15;
        if (scope === 'large') multiplier = 1.35;

        const baseLabor = hours * rate;
        const marginAmount = baseLabor * (margin / 100);
        const total = (baseLabor + marginAmount) * multiplier;

        estTotalDisplay.textContent = `$${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`;
        estSpecsDisplay.innerHTML = `Base Labor (${hours}h @ $${rate}/h): $${baseLabor.toFixed(2)} | Reserve Margin: $${marginAmount.toFixed(2)} (${margin}%)<br>Applied Scope Complexity Factor: ${multiplier}x`;
    }

    [estScope, estHours, estRate, estMargin].forEach(input => {
        if (input) input.addEventListener('input', calculateEstimate);
    });
    calculateEstimate();

    /* ==========================================================================
       SECTION 8: SECURE DISPATCH GATEWAY FORM
       ========================================================================== */
    const gatewayForm = document.getElementById('gateway-form');
    const senderInput = document.getElementById('sender-identity');
    const messageInput = document.getElementById('payload-body');
    const jsonPreview = document.getElementById('json-preview');
    const submitBtn = document.getElementById('submit-payload-btn');
    const pulseIndicator = document.querySelector('.pulse-indicator');

    let formState = { sender: "", message: "", timestamp: null, status: "AWAITING_INPUT" };

    function updateStateMonitor(statusOverride = null) {
        if (!senderInput || !messageInput || !jsonPreview) return;

        formState.sender = senderInput.value;
        formState.message = messageInput.value;
        formState.timestamp = formState.sender || formState.message ? new Date().toISOString() : null;
        formState.status = statusOverride || (formState.sender || formState.message ? "STREAMING_INPUT" : "AWAITING_INPUT");

        jsonPreview.textContent = JSON.stringify(formState, null, 2);

        if (pulseIndicator) {
            if (formState.status === "TRANSMITTING_PAYLOAD...") {
                pulseIndicator.style.backgroundColor = "#f59e0b";
            } else if (formState.status === "API_RESPONSE_202_ACCEPTED") {
                pulseIndicator.style.backgroundColor = "#10b981";
            } else {
                pulseIndicator.style.backgroundColor = "#3b82f6";
            }
        }
    }

    if (senderInput && messageInput) {
        senderInput.addEventListener('input', () => updateStateMonitor());
        messageInput.addEventListener('input', () => updateStateMonitor());
    }

    if (gatewayForm) {
        gatewayForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (!submitBtn) return;
            senderInput.disabled = true; messageInput.disabled = true; submitBtn.disabled = true;
            submitBtn.textContent = "Syncing with Node...";
            updateStateMonitor("TRANSMITTING_PAYLOAD...");

            setTimeout(() => {
                updateStateMonitor("API_RESPONSE_202_ACCEPTED");
                submitBtn.textContent = "Transmission Complete ✓";
                setTimeout(() => {
                    gatewayForm.reset();
                    senderInput.disabled = false; messageInput.disabled = false; submitBtn.disabled = false;
                    submitBtn.textContent = "Dispatch Payload Data";
                    updateStateMonitor();
                }, 4000);
            }, 2000);
        });
    }

    /* ==========================================================================
       SECTION 9: MULTI-RECORD CLIENT EVALUATIONS & CACHE MATRIX
       ========================================================================== */
    const stars = document.querySelectorAll('.star-node');
    const reviewerName = document.getElementById('reviewer-name');
    const reviewText = document.getElementById('review-text');
    const submitReviewBtn = document.getElementById('submit-review-btn');
    const activeReviewLog = document.getElementById('active-review-log');
    const clearReviewsBtn = document.getElementById('clear-reviews-btn');

    let currentSelectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('mouseover', function() { highlightStars(this.getAttribute('data-value'), 'hovered'); });
        star.addEventListener('mouseout', function() { removeHighlightClass('hovered'); });
        star.addEventListener('click', function() {
            currentSelectedRating = parseInt(this.getAttribute('data-value'));
            highlightStars(currentSelectedRating, 'active');
        });
    });

    function highlightStars(rating, className) {
        stars.forEach(star => {
            if (parseInt(star.getAttribute('data-value')) <= parseInt(rating)) {
                star.classList.add(className);
            } else {
                if (className === 'active') star.classList.remove('active');
            }
        });
    }

    function removeHighlightClass(className) {
        stars.forEach(star => star.classList.remove(className));
    }

    const SAMPLE_REVIEWS = [
        { name: "Enterprise DevOps Lead", stars: 5, feedback: "Telemetry shield architecture cut API latency monitoring overhead by 40%. Highly recommended.", timestamp: "2026-08-20" },
        { name: "SaaS Tech Director", stars: 5, feedback: "QuoteForge Pro financial math model prevented budget margin leakage across 12 projects.", timestamp: "2026-08-14" }
    ];

    function getStoredReviews() {
        const stored = localStorage.getItem('lcc_cached_reviews_list');
        if (stored) {
            try { return JSON.parse(stored); } catch (e) { return SAMPLE_REVIEWS; }
        }
        localStorage.setItem('lcc_cached_reviews_list', JSON.stringify(SAMPLE_REVIEWS));
        return SAMPLE_REVIEWS;
    }

    function renderCachedReviews() {
        if (!activeReviewLog) return;
        const reviews = getStoredReviews();

        if (reviews.length === 0) {
            activeReviewLog.innerHTML = '<div class="log-neutral">[CACHE] No local evaluation records found in browser state.</div>';
            return;
        }

        activeReviewLog.innerHTML = reviews.map(item => `
            <div class="review-card-output">
                <div class="review-meta">
                    <span>${item.name}</span>
                    <span style="color:#64748b; font-weight:normal; font-size:0.7rem;">(${item.timestamp})</span>
                </div>
                <div class="review-stars">${"★".repeat(item.stars)}${"☆".repeat(5 - item.stars)}</div>
                <div class="review-body">"${item.feedback}"</div>
            </div>
        `).join('');
    }

    if (submitReviewBtn) {
        submitReviewBtn.addEventListener('click', function() {
            const name = reviewerName.value.trim() || "Anonymous Engineer";
            const text = reviewText.value.trim() || "System infrastructure operating within stable boundaries.";
            if (currentSelectedRating === 0) {
                alert("Telemetry Halt: Please select a star rating coefficient.");
                return;
            }

            const newReview = {
                name: name,
                stars: currentSelectedRating,
                feedback: text,
                timestamp: new Date().toLocaleDateString()
            };

            const existingList = getStoredReviews();
            existingList.unshift(newReview);
            localStorage.setItem('lcc_cached_reviews_list', JSON.stringify(existingList));

            renderCachedReviews();
            reviewerName.value = ''; reviewText.value = '';
            currentSelectedRating = 0;
            removeHighlightClass('active');
        });
    }

    if (clearReviewsBtn) {
        clearReviewsBtn.addEventListener('click', function() {
            if (confirm("Reset local evaluation cache?")) {
                localStorage.removeItem('lcc_cached_reviews_list');
                localStorage.removeItem('lcc_cached_review');
                renderCachedReviews();
            }
        });
    }

    renderCachedReviews();

    /* ==========================================================================
       SECTION 10: COMMAND PALETTE (CTRL+K) CONTROLLER
       ========================================================================== */
    const paletteModal = document.getElementById('palette-modal');
    const paletteTriggerBtn = document.getElementById('command-palette-trigger');
    const paletteCloseBtn = document.getElementById('palette-close-btn');
    const paletteInput = document.getElementById('palette-search-input');
    const paletteItems = document.querySelectorAll('.command-palette-item');

    function togglePalette(show = true) {
        if (!paletteModal) return;
        if (show) {
            paletteModal.classList.add('active');
            if (paletteInput) {
                paletteInput.value = '';
                paletteInput.focus();
            }
        } else {
            paletteModal.classList.remove('active');
        }
    }

    if (paletteTriggerBtn) paletteTriggerBtn.addEventListener('click', () => togglePalette(true));
    if (paletteCloseBtn) paletteCloseBtn.addEventListener('click', () => togglePalette(false));

    if (paletteModal) {
        paletteModal.addEventListener('click', (e) => {
            if (e.target === paletteModal) togglePalette(false);
        });
    }

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            togglePalette(true);
        }
        if (e.key === 'Escape') {
            togglePalette(false);
            if (projectModal) projectModal.classList.remove('active');
        }
    });

    if (paletteInput) {
        paletteInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            paletteItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? 'flex' : 'none';
            });
        });
    }

    paletteItems.forEach(item => {
        item.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            togglePalette(false);

            if (action === 'tab-lab') switchTab('panel-lab');
            if (action === 'tab-estimator') switchTab('panel-estimator');
            if (action === 'tab-gateway') switchTab('panel-gateway');
            if (action === 'tab-reviews') switchTab('panel-reviews');
            if (action === 'cmd-ping') {
                switchTab('panel-lab');
                processCliCommand('ping');
            }
            if (action === 'focus-search') {
                if (searchInput) searchInput.focus();
            }
        });
    });

});
