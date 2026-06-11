/* ==========================================================================
   MODULE 1: INTERACTIVE ARCHITECTURE LAB CONTROLLER
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
    const selectedAsset = selector.value;
    const scriptsToRun = diagnosticScripts[selectedAsset];
    
    terminal.innerHTML = '';
    runBtn.disabled = true;
    let lineIndex = 0;
    
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
   MODULE 2: STATE TRACKER & ASYNC PAYLOAD DISPATCH (FORM ENGINE)
   ========================================================================== */
const gatewayForm = document.getElementById('gateway-form');
const senderInput = document.getElementById('sender-identity');
const messageInput = document.getElementById('payload-body');
const jsonPreview = document.getElementById('json-preview');
const submitBtn = document.getElementById('submit-payload-btn');
const pulseIndicator = document.querySelector('.pulse-indicator');

// Application State object tracking input changes
let formState = {
    sender: "",
    message: "",
    timestamp: null,
    status: "AWAITING_INPUT"
};

// Function mimicking React's render phase to update JSON string representation
function updateStateMonitor(statusOverride = null) {
    formState.sender = senderInput.value;
    formState.message = messageInput.value;
    formState.timestamp = formState.sender || formState.message ? new Date().toISOString() : null;
    
    if (statusOverride) {
        formState.status = statusOverride;
    } else {
        formState.status = formState.sender || formState.message ? "STREAMING_INPUT" : "AWAITING_INPUT";
    }

    // Output formatted JSON code string to UI
    jsonPreview.textContent = JSON.stringify(formState, null, 2);
    
    // Dynamically adjust coloring based on operational status
    if (formState.status === "TRANSMITTING_PAYLOAD...") {
        jsonPreview.className = "status-transmission";
        pulseIndicator.style.backgroundColor = "#f59e0b"; // Amber warning color
    } else if (formState.status === "API_RESPONSE_202_ACCEPTED") {
        jsonPreview.className = "status-success";
        pulseIndicator.style.backgroundColor = "#10b981"; // Emerald success color
    } else {
        jsonPreview.className = "";
        pulseIndicator.style.backgroundColor = "#3b82f6"; // Default operational blue
    }
}

// Attach input listeners to track live keystrokes
senderInput.addEventListener('input', () => updateStateMonitor());
messageInput.addEventListener('input', () => updateStateMonitor());

// Handle async form submit event pipeline
gatewayForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Halt standard page refreshes
    
    // Lock controls to prevent double submissions during pipeline processing
    senderInput.disabled = true;
    messageInput.disabled = true;
    submitBtn.disabled = true;
    submitBtn.textContent = "Syncing with Node...";

    updateStateMonitor("TRANSMITTING_PAYLOAD...");

    // Stagger fake network delay sequence
    setTimeout(() => {
        updateStateMonitor("API_RESPONSE_202_ACCEPTED");
        submitBtn.textContent = "Transmission Complete ✓";
        
        // Reset and release interface holds after success confirmation window closes
        setTimeout(() => {
            gatewayForm.reset();
            senderInput.disabled = false;
            messageInput.disabled = false;
            submitBtn.disabled = false;
            submitBtn.textContent = "Dispatch Payload Data";
            updateStateMonitor();
        }, 4000);

    }, 2000);
});