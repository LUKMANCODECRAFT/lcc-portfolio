/* ==========================================================================
           TAB CONTROL CONTROLLER MATRIX
           ========================================================================== */
        const tabButtons = document.querySelectorAll('.control-tab-btn');
        const tabPanels = document.querySelectorAll('.tab-panel-content');

        tabButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                tabButtons.forEach(b => b.classList.remove('active-view-node'));
                tabPanels.forEach(p => p.classList.remove('active-view-node'));

                this.classList.add('active-view-node');
                const targetId = this.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active-view-node');
            });
        });

        /* ==========================================================================
           MODULE 1: INTERACTIVE DIAGNOSTICS LAB
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

        runBtn.addEventListener('click', function() {
            terminal.innerHTML = '';
            runBtn.disabled = true;
            let lineIndex = 0;
            const scriptsToRun = diagnosticScripts[selector.value];
            
            const logTimer = setInterval(function() {
                if (lineIndex < scriptsToRun.length) {
                    const currentLine = scriptsToRun[lineIndex];
                    const timestamp = new Date().toLocaleTimeString();
                    const lineElement = document.createElement('div');
                    lineElement.className = currentLine.class;
                    lineElement.textContent = `[${timestamp}] ${currentLine.text}`;
                    terminal.appendChild(lineElement);
                    terminal.scrollTop = terminal.scrollHeight;
                    lineIndex++;
                } else {
                    clearInterval(logTimer);
                    runBtn.disabled = false;
                }
            }, 600);
        });

        /* ==========================================================================
           MODULE 2: STATE TRACKER & SECURE DISPATCH GATEWAY FORM
           ========================================================================== */
        const gatewayForm = document.getElementById('gateway-form');
        const senderInput = document.getElementById('sender-identity');
        const messageInput = document.getElementById('payload-body');
        const jsonPreview = document.getElementById('json-preview');
        const submitBtn = document.getElementById('submit-payload-btn');
        const pulseIndicator = document.querySelector('.pulse-indicator');

        let formState = { sender: "", message: "", timestamp: null, status: "AWAITING_INPUT" };

        function updateStateMonitor(statusOverride = null) {
            formState.sender = senderInput.value;
            formState.message = messageInput.value;
            formState.timestamp = formState.sender || formState.message ? new Date().toISOString() : null;
            formState.status = statusOverride || (formState.sender || formState.message ? "STREAMING_INPUT" : "AWAITING_INPUT");

            jsonPreview.textContent = JSON.stringify(formState, null, 2);
            
            if (formState.status === "TRANSMITTING_PAYLOAD...") {
                jsonPreview.className = "status-transmission";
                pulseIndicator.style.backgroundColor = "#f59e0b";
            } else if (formState.status === "API_RESPONSE_202_ACCEPTED") {
                jsonPreview.className = "status-success";
                pulseIndicator.style.backgroundColor = "#10b981";
            } else {
                jsonPreview.className = "";
                pulseIndicator.style.backgroundColor = "#3b82f6";
            }
        }

        senderInput.addEventListener('input', () => updateStateMonitor());
        messageInput.addEventListener('input', () => updateStateMonitor());

        gatewayForm.addEventListener('submit', function(event) {
            event.preventDefault();
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

        /* ==========================================================================
           MODULE 3: EVALUATION STAR MATRIX CACHE PERSISTENCE ENGINE
           ========================================================================== */
        const stars = document.querySelectorAll('.star-node');
        const reviewerName = document.getElementById('reviewer-name');
        const reviewText = document.getElementById('review-text');
        const submitReviewBtn = document.getElementById('submit-review-btn');
        const activeReviewLog = document.getElementById('active-review-log');
        let currentSelectedRating = 0;

        stars.forEach(star => {
            star.addEventListener('mouseover', function() { highlightStars(this.getAttribute('data-value'), 'hovered'); });
            star.addEventListener('mouseout', function() { removeHighlightClass('hovered'); });
            star.addEventListener('click', function() {
                currentSelectedRating = this.getAttribute('data-value');
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

        function removeHighlightClass(className) { stars.forEach(star => star.classList.remove(className)); }

        submitReviewBtn.addEventListener('click', function() {
            const name = reviewerName.value.trim() || "Anonymous Engineer";
            const text = reviewText.value.trim() || "System infrastructure operating within stable boundaries.";
            if (currentSelectedRating === 0) { alert("Telemetry Halt: Please select a star rating coefficient."); return; }

            const verificationPayload = { name: name, stars: currentSelectedRating, feedback: text, timestamp: new Date().toLocaleDateString() };
            localStorage.setItem('lcc_cached_review', JSON.stringify(verificationPayload));
            renderCachedReview();
            reviewerName.value = ''; reviewText.value = '';
            currentSelectedRating = 0; removeHighlightClass('active');
        });

        function renderCachedReview() {
            const cacheData = localStorage.getItem('lcc_cached_review');
            if (cacheData) {
                const parsed = JSON.parse(cacheData);
                activeReviewLog.innerHTML = `
                    <div class="review-card-output">
                        <div class="review-meta">${parsed.name} <span style="color:#64748b; font-weight:normal; font-size:0.7rem;">(${parsed.timestamp})</span></div>
                        <div class="review-stars">${"★".repeat(parsed.stars)}${"☆".repeat(5 - parsed.stars)}</div>
                        <div class="review-body">"${parsed.feedback}"</div>
                    </div>`;
            }
        }
        renderCachedReview();
    
