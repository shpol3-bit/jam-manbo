class LottoBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['number'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'number' && oldValue !== newValue) {
            this.render();
        }
    }

    getColor(number) {
        const n = parseInt(number);
        if (n <= 10) return '#f44336'; // Red
        if (n <= 20) return '#ff9800'; // Orange
        if (n <= 30) return '#ffc107'; // Amber
        if (n <= 40) return '#4caf50'; // Green
        return '#2196f3'; // Blue
    }

    render() {
        const number = this.getAttribute('number');
        if (!number) return;
        
        const color = this.getColor(number);

        this.shadowRoot.innerHTML = `
            <style>
                .ball {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: white;
                    background: radial-gradient(circle at 15px 15px, ${color}, #333);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                    transition: transform 0.3s ease;
                }
                .ball:hover {
                    transform: scale(1.1);
                }
            </style>
            <div class="ball">${number}</div>
        `;
    }
}

customElements.define('lotto-ball', LottoBall);

// Fortune & Saju Logic
class FortuneManager {
    constructor() {
        this.form = document.getElementById('fortune-form');
        this.resultsContainer = document.getElementById('fortune-results');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.generateFortune();
            });
        }
    }

    generateFortune() {
        const birthDate = document.getElementById('birth-date').value;
        if (!birthDate) return;

        const results = this.calculate(birthDate);
        this.displayResults(results);
    }

    calculate(dateStr) {
        // Pseudo-Saju Calculation based on Date
        const date = new Date(dateStr);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const seed = day + month;

        const fortunes = [
            "Today is a day of growth. New opportunities are blooming like spring flowers.",
            "Stability is your strength today. Focus on completing pending tasks.",
            "A surprise encounter might bring unexpected joy. Keep an open heart.",
            "Financial wisdom is needed. Think twice before a major purchase.",
            "Energy levels are high! Perfect time to start a new fitness routine or project."
        ];

        const romance = [
            "Your charm is peaking. Today is great for a deep conversation.",
            "Someone from your past might reach out. Reflect before responding.",
            "This month brings harmony in relationships. Small gestures matter most.",
            "A passionate year awaits. Your social circle will expand significantly."
        ];

        const wealth = [
            "A steady flow of income is expected. Avoid impulsive spending today.",
            "Unexpected gains might come from a side project this month.",
            "Long-term investments show positive signs. Be patient.",
            "Today's luck in finance is moderate. Focus on saving."
        ];

        return {
            today: fortunes[seed % fortunes.length],
            romance: romance[seed % romance.length],
            wealth: wealth[seed % wealth.length],
            saju: "Your elemental balance suggests a strong presence of 'Wood' and 'Water', indicating adaptability and creative potential."
        };
    }

    displayResults(data) {
        this.resultsContainer.innerHTML = `
            <div class="fortune-card-grid">
                <div class="result-card">
                    <h3>🌟 Today's Overview</h3>
                    <p>${data.today}</p>
                </div>
                <div class="result-card">
                    <h3>💖 Romance Luck</h3>
                    <p>${data.romance}</p>
                </div>
                <div class="result-card">
                    <h3>💰 Wealth Luck</h3>
                    <p>${data.wealth}</p>
                </div>
                <div class="result-card">
                    <h3>📜 Saju Analysis</h3>
                    <p>${data.saju}</p>
                </div>
            </div>
        `;
        this.resultsContainer.classList.remove('hidden');
        this.resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

// Psychological Test Logic
class PsycheTestManager {
    constructor() {
        this.modal = document.getElementById('test-modal');
        this.content = document.getElementById('test-content');
        this.closeBtn = document.querySelector('.close-modal');
        this.init();
    }

    init() {
        document.querySelectorAll('.start-test-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.start(btn.dataset.test);
            });
        });

        if (this.closeBtn) {
            this.closeBtn.onclick = () => this.modal.classList.add('hidden');
        }

        window.onclick = (event) => {
            if (event.target == this.modal) this.modal.classList.add('hidden');
        };
    }

    start(testType) {
        this.modal.classList.remove('hidden');
        if (testType === 'ocean') {
            this.renderOceanTest();
        } else {
            this.renderForestTest();
        }
    }

    renderOceanTest() {
        this.content.innerHTML = `
            <h3>The Ocean Path</h3>
            <p>You are standing before a vast ocean. Which path do you choose to walk?</p>
            <div class="choice-grid">
                <div class="choice-item" onclick="psycheTest.showResult('ocean', 1)">
                    <div class="choice-img" style="background: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);"></div>
                    <p>A calm, sandy beach</p>
                </div>
                <div class="choice-item" onclick="psycheTest.showResult('ocean', 2)">
                    <div class="choice-img" style="background: linear-gradient(to top, #30cfd0 0%, #330867 100%);"></div>
                    <p>A rocky cliffside trail</p>
                </div>
                <div class="choice-item" onclick="psycheTest.showResult('ocean', 3)">
                    <div class="choice-img" style="background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);"></div>
                    <p>A wooden pier over the water</p>
                </div>
            </div>
        `;
    }

    renderForestTest() {
        this.content.innerHTML = `
            <h3>Forest Selection</h3>
            <p>You enter a dense forest. What is the first thing you notice?</p>
            <div class="choice-grid">
                <div class="choice-item" onclick="psycheTest.showResult('forest', 1)">
                    <div class="choice-img" style="background: #2d5a27;"></div>
                    <p>Towering ancient trees</p>
                </div>
                <div class="choice-item" onclick="psycheTest.showResult('forest', 2)">
                    <div class="choice-img" style="background: #a8dadc;"></div>
                    <p>A hidden crystal clear pond</p>
                </div>
                <div class="choice-item" onclick="psycheTest.showResult('forest', 3)">
                    <div class="choice-img" style="background: #e9c46a;"></div>
                    <p>A path covered in golden leaves</p>
                </div>
            </div>
        `;
    }

    showResult(type, choice) {
        const results = {
            ocean: [
                "You value peace and stability. You prefer a career that offers a clear, steady path with minimal conflict.",
                "You are an adventurer at heart. You thrive in challenging environments and high-risk, high-reward situations.",
                "You are a dreamer and a connector. You enjoy roles that involve bringing people together or artistic expression."
            ],
            forest: [
                "You seek wisdom and reliability. People rely on you for your grounded nature and long-term vision.",
                "You have a deep emotional world. You value introspection and tend to be highly intuitive.",
                "You are optimistic and change-oriented. You find beauty in transitions and new beginnings."
            ]
        };

        this.content.innerHTML = `
            <h3>Your Result</h3>
            <p class="test-result-text">${results[type][choice - 1]}</p>
            <button onclick="psycheTest.modal.classList.add('hidden')" style="margin-top:20px;">Close</button>
        `;
    }
}

// Global Instances
const fortuneManager = new FortuneManager();
window.psycheTest = new PsycheTestManager();

// Existing Lotto & Theme Logic
const generateBtn = document.getElementById('generate-btn');
const lottoBallsContainer = document.getElementById('lotto-balls-container');
const themeBtn = document.getElementById('theme-btn');

generateBtn.addEventListener('click', () => {
    lottoBallsContainer.innerHTML = '';
    const setRow = document.createElement('div');
    setRow.className = 'lotto-row';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    Array.from(numbers).sort((a, b) => a - b).forEach(number => {
        const lottoBall = document.createElement('lotto-ball');
        lottoBall.setAttribute('number', number);
        setRow.appendChild(lottoBall);
    });
    lottoBallsContainer.appendChild(setRow);
});

let currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeButton();

themeBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeButton();
});

function updateThemeButton() {
    themeBtn.textContent = currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
}
