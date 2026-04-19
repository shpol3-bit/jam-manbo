class LottoBall extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const number = this.getAttribute('number');
        const color = this.getColor(number);

        const style = document.createElement('style');
        style.textContent = `
            .ball {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                font-weight: bold;
                color: white;
                background: radial-gradient(circle at 20px 20px, ${color}, #333);
                box-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.1);
                transition: transform 0.3s ease;
            }
            .ball:hover {
                transform: scale(1.1);
            }
        `;

        const ball = document.createElement('div');
        ball.setAttribute('class', 'ball');
        ball.textContent = number;

        shadow.appendChild(style);
        shadow.appendChild(ball);
    }

    getColor(number) {
        if (number <= 10) return '#f44336'; // Red
        if (number <= 20) return '#ff9800'; // Orange
        if (number <= 30) return '#ffc107'; // Amber
        if (number <= 40) return '#4caf50'; // Green
        return '#2196f3'; // Blue
    }
}

customElements.define('lotto-ball', LottoBall);

const generateBtn = document.getElementById('generate-btn');
const lottoBallsContainer = document.getElementById('lotto-balls-container');

generateBtn.addEventListener('click', () => {
    lottoBallsContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    for (const number of Array.from(numbers).sort((a, b) => a - b)) {
        const lottoBall = document.createElement('lotto-ball');
        lottoBall.setAttribute('number', number);
        lottoBallsContainer.appendChild(lottoBall);
    }
});
