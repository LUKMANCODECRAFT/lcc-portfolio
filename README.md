# Lukman CodeCraft | Enterprise Systems Engineer Portfolio (v2.0)

An enterprise-grade, high-performance web portfolio software application designed for Principal Automation Engineers and Systems Architects. Built with HTML5, Vanilla JavaScript (ES6+), and modular CSS3 architecture adhering to strict dark-mode engineering design standards.

---

## 🌟 Key Features & Capabilities

- **⚡ Real-Time Telemetry Bar**: Dynamic system uptime counter, simulated memory usage telemetry, network ping monitor, and quick access command launcher (`Ctrl+K`).
- **🎯 Dynamic Project Filtering & Search**: Instant client-side text search and technology category pill filters (*Asynchronous JS*, *React Engine*, *Modular CSS3*, *Python*, *Node.js*).
- **🏗️ Deep-Dive Architectural Modals**: Clickable case study cards that render specs, architecture diagrams, performance benchmarks, and live code snippets in modal overlays.
- **🖥️ Interactive Terminal CLI**: Embedded Diagnostics Lab featuring a custom command interpreter supporting commands (`help`, `status`, `ping`, `skills`, `projects`, `clear`, `quote <hours>`, `contact`) alongside quick command execution chips.
- **💼 LCC QuoteForge Pro Calculator**: Live financial estimator widget allowing clients to project contract budgets, billable hours, and maintenance retainers dynamically.
- **🌟 Multi-Record Client Review Storage**: Ratings and evaluations system with persistent multi-entry `localStorage` caching, star distribution filters, review deletion, and sample recommendations.
- **📧 Async Gateway Dispatch**: Telemetry payload dispatch simulator with live JSON state monitor for client inquiries.
- **📱 Fully Responsive Design**: Mobile and desktop responsive design using standard CSS Flexbox and Grid.

---

## 🎨 Color Tokens & Aesthetic Palette

This software enforces a strict industrial dark-mode color system:

| Surface / Component | HEX / CSS Token | Description |
| :--- | :--- | :--- |
| **Main Background** | `#06070a` (`--bg-dark`) | Deep obsidian core background |
| **Card / Box Panels** | `#0b0d14` (`--bg-card`) | Elevated dark card background |
| **Terminal & Surface**| `#030406` (`--bg-surface`) | High-contrast terminal background |
| **Borders & Dividers**| `#1e293b` (`--border-color`)| Slate border grid outline |
| **Primary Accent** | `#3b82f6` (`--primary-blue`) | Royal electric blue highlight |
| **Hover Accent** | `#60a5fa` (`--primary-hover`)| Light blue hover state |
| **Success Indicator** | `#10b981` / `#34d399` | Emerald green telemetry online indicator |
| **Warning / Rating** | `#f59e0b` (`--warning-amber`) | Amber gold rating stars & alerts |
| **Typography** | `#f8fafc` / `#cbd5e1` / `#94a3b8` | Crisp slate hierarchy text |

---

## 📁 Repository Structure

```text
lcc-portfolio/
├── index.html       # Primary semantic HTML5 structure & component templates
├── styles.css       # External CSS design system & component styles
├── app.js           # Modular ES6+ application logic & state managers
└── README.md        # Comprehensive technical documentation
```

---

## 🚀 Getting Started

### Local Execution
1. Clone or download the repository files.
2. Open `index.html` directly in any standard modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
3. Alternatively, serve via any static HTTP server:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```

---

## 💻 Terminal CLI Quick Reference

When viewing the **Diagnostics Lab** tab, use the interactive prompt or quick-run chips:

- `help` - Lists all available system commands.
- `status` - Displays live server & telemetry metrics.
- `ping` - Executes background latency check against production nodes.
- `skills` - Outputs core engineering competency matrix.
- `projects` - Summarizes active production software deployments.
- `quote <hours>` - Calculates baseline project estimate for given hours.
- `contact` - Opens secure dispatch gateway.
- `clear` - Clears the terminal screen.

---

## 🛠️ Technology Stack

- **Core Logic**: JavaScript (ES6+ Native DOM APIs, Custom Event Listeners, Async Telemetry Loops)
- **Styling**: Vanilla CSS3 (CSS Custom Properties, CSS Grid, Flexbox, Keyframes)
- **Storage**: Browser LocalStorage API
- **Markup**: HTML5 (Semantic Elements, Accessibility Standards)

---

## 📄 License & Attribution

© 2026 Designed & Engineered by **Lukman CodeCraft** — Principal Automation Engineer & Systems Architect. All rights reserved.
