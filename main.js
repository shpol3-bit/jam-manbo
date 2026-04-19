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

const generateBtn = document.getElementById('generate-btn');
const lottoBallsContainer = document.getElementById('lotto-balls-container');
const themeBtn = document.getElementById('theme-btn');

// Lotto Logic: Generate 5 sets
generateBtn.addEventListener('click', () => {
    lottoBallsContainer.innerHTML = '';
    
    for (let i = 0; i < 5; i++) {
        const setRow = document.createElement('div');
        setRow.className = 'lotto-row';
        
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        
        sortedNumbers.forEach(number => {
            const lottoBall = document.createElement('lotto-ball');
            lottoBall.setAttribute('number', number);
            setRow.appendChild(lottoBall);
        });
        
        lottoBallsContainer.appendChild(setRow);
    }
});

// Theme Logic
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
