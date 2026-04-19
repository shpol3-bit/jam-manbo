// Multi-language Support (i18n)
const translations = {
    ko: {
        "nav-fortune": "운세/사주",
        "nav-psychology": "심리테스트",
        "nav-lotto": "로또",
        "home-title": "인사이트마스터",
        "home-subtitle": "당신의 삶에 깊은 통찰을 제공하는 운세와 심리 탐험의 공간입니다.",
        "home-fortune-desc": "생년월일 기반의 정밀한 사주 분석과 오늘의 운세를 확인하세요.",
        "home-psy-desc": "무의식 속 당신의 진정한 모습과 미래를 심리 테스트로 알아보세요.",
        "home-lotto-desc": "과학적 난수 알고리즘을 활용한 오늘의 행운 번호를 생성합니다.",
        "fortune-title": "오늘의 사주 & 운세",
        "fortune-subtitle": "태어난 정보를 입력하여 당신의 우주적 설계를 확인하세요.",
        "label-birthdate": "생년월일",
        "label-birthtime": "태어난 시간",
        "btn-fortune": "운명 확인하기",
        "btn-back": "뒤로 가기",
        "psy-title": "심리 통찰 테스트",
        "psy-subtitle": "시각적 선택을 통해 마음의 지도를 탐험하세요.",
        "test-ocean-title": "바다의 길",
        "test-ocean-desc": "당신이 선택한 바닷길은 커리어에 대해 무엇을 말해줄까요?",
        "test-forest-title": "숲의 선택",
        "test-forest-desc": "숲길을 걷는 상상을 통해 당신의 진정한 성격을 발견하세요.",
        "btn-start": "테스트 시작",
        "lotto-title": "로또 행운 번호",
        "lotto-subtitle": "추가 행운이 필요하신가요? 난수 생성 알고리즘으로 번호를 뽑아보세요.",
        "btn-lotto": "행운 번호 생성",
        "footer-tagline": "우주의 암호를 풀어 당신의 통찰을 돕습니다.",
        "footer-privacy": "개인정보처리방침",
        "footer-terms": "이용약관",
        "footer-about": "소개",
        "footer-contact": "문의하기",
        "footer-play-responsibly": "책임감 있게 즐겨주세요.",
        "academy-title": "통찰의 과학",
        "academy-saju-h": "사주와 만세력의 이해",
        "academy-saju-p": "사주(四柱)는 태어난 연, 월, 일, 시의 네 기둥을 의미하며, 동양 철학에서는 이를 통해 한 사람의 타고난 기운과 흐름을 분석합니다. 오행(목, 화, 토, 금, 수)의 균형을 맞추는 것은 단순히 미래를 점치는 것을 넘어, 자기 자신을 더 깊이 이해하고 조화로운 삶을 사는 지혜를 제공합니다.",
        "academy-psy-h": "심리 테스트의 가치",
        "academy-psy-p": "현대 심리학의 투사 검사(Projective Test)는 모호한 자극에 대한 개인의 선택을 분석하여 무의식적인 가치관과 감정 상태를 파악합니다. 인사이트마스터의 테스트들은 이러한 심리학적 원리를 바탕으로 재미와 자아 성찰의 기회를 동시에 제공합니다."
    },
    en: {
        "nav-fortune": "Fortune",
        "nav-psychology": "Psyche Test",
        "nav-lotto": "Lotto",
        "home-title": "InsightMaster",
        "home-subtitle": "Exploring your destiny through cosmic alignment and psychological depth.",
        "home-fortune-desc": "Get precise Saju analysis and daily fortune based on your birth details.",
        "home-psy-desc": "Discover your true subconscious self through curated psychological tests.",
        "home-lotto-desc": "Generate your lucky numbers using our scientific random algorithm.",
        "fortune-title": "Saju & Daily Fortune",
        "fortune-subtitle": "Unlock your cosmic blueprint by entering your birth information.",
        "label-birthdate": "Birth Date",
        "label-birthtime": "Birth Time",
        "btn-fortune": "Reveal Destiny",
        "btn-back": "Go Back",
        "psy-title": "Psychological Insights",
        "psy-subtitle": "Navigate your mind's map through visual choices.",
        "test-ocean-title": "The Ocean Path",
        "test-ocean-desc": "What does your choice of path say about your career future?",
        "test-forest-title": "Forest Selection",
        "test-forest-desc": "Discover your true personality through a journey in the woods.",
        "btn-start": "Start Test",
        "lotto-title": "Lotto Lucky Numbers",
        "lotto-subtitle": "Need extra luck? Generate sets using our scientific algorithm.",
        "btn-lotto": "Generate Numbers",
        "footer-tagline": "Decoding the universe for your personal growth.",
        "footer-privacy": "Privacy Policy",
        "footer-terms": "Terms of Service",
        "footer-about": "About Us",
        "footer-contact": "Contact Us",
        "footer-play-responsibly": "Play Responsibly.",
        "academy-title": "Science of Insight",
        "academy-saju-h": "Understanding Saju",
        "academy-saju-p": "Saju represents the four pillars of birth: Year, Month, Day, and Hour. In Eastern philosophy, it analyzes a person's life energy and flow. Balancing the Five Elements (Wood, Fire, Earth, Metal, Water) provides wisdom for self-understanding and a balanced life.",
        "academy-psy-h": "Value of Psyche Tests",
        "academy-psy-p": "Modern Projective Tests analyze individual choices to ambiguous stimuli to uncover subconscious values. InsightMaster's tests use these psychological principles to offer both fun and opportunities for self-reflection."
    }
};

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'ko';
        this.langBtn = document.getElementById('lang-btn');
        this.init();
    }

    init() {
        this.updateText();
        this.langBtn.addEventListener('click', () => {
            this.currentLang = this.currentLang === 'ko' ? 'en' : 'ko';
            localStorage.setItem('lang', this.currentLang);
            this.updateText();
        });
    }

    updateText() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[this.currentLang][key]) {
                el.textContent = translations[this.currentLang][key];
            }
        });
        this.langBtn.textContent = this.currentLang === 'ko' ? 'English' : '한국어';
        document.documentElement.lang = this.currentLang;
    }
}

function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.getElementById(`view-${viewId}`).classList.add('active');
    window.scrollTo(0, 0);
}

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
        const date = new Date(dateStr);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const seed = day + month + (year % 100);

        const lang = document.documentElement.lang || 'ko';
        
        const fortunes = lang === 'ko' ? [
            {
                overview: "하늘의 기운이 당신을 돕는 날입니다. 평소 계획하던 일이 있다면 오늘 실행에 옮기기에 최적의 시기입니다. 주변 사람들과의 협력이 큰 성과를 가져올 것이니 독단적인 결정보다는 의견을 경청하는 태도가 길운을 불러옵니다.",
                romance: "상대방의 작은 변화를 알아차려 주는 세심함이 필요한 때입니다. 싱글이라면 가까운 지인과의 모임에서 뜻밖의 설렘을 느낄 수 있는 인연이 나타날 가능성이 높습니다. 솔직한 표현이 서로의 거리를 좁히는 열쇠가 됩니다.",
                wealth: "금전운이 상승 곡선을 그리고 있습니다. 예상치 못한 곳에서 작은 수익이 발생하거나, 오랫동안 묵혀두었던 자산이 가치를 발할 수 있습니다. 다만, 과도한 투자는 금물이니 안정적인 자산 관리에 집중하는 것이 좋습니다."
            },
            {
                overview: "오늘은 내실을 다지는 데 집중해야 하는 시기입니다. 겉으로 드러나는 화려함보다는 실질적인 이득과 내면의 평화를 찾는 것이 중요합니다. 서두르지 않고 차근차근 단계를 밟아 나간다면 조만간 큰 기회가 찾아올 것입니다.",
                romance: "서로에 대한 신뢰가 깊어지는 하루입니다. 거창한 데이트보다는 소박한 일상을 함께 나누는 것에서 진정한 행복을 느낄 수 있습니다. 대화 중 과거의 서운했던 점을 꺼내기보다는 미래의 희망적인 이야기를 나누는 것이 좋습니다.",
                wealth: "지출 관리에 유의해야 하는 날입니다. 충동적인 구매 욕구가 생길 수 있으나, 꼭 필요한 것인지 다시 한번 자문해 보세요. 저축 계획을 재점검하고 불필요한 고정 지출을 줄이는 것만으로도 금전적인 이득을 볼 수 있습니다."
            }
        ] : [
            {
                overview: "Heaven's energy is on your side today. If you have any plans, today is the perfect day to take action. Cooperation with others will bring great results, so listening to opinions rather than making arbitrary decisions will bring good luck.",
                romance: "It's a time when you need to be attentive to the small changes in your partner. If you're single, there's a high chance of meeting someone unexpected at a gathering. Honest expression is the key to closing the distance between each other.",
                wealth: "The wealth luck is on an upward curve. Small profits may arise from unexpected places, or long-held assets may prove valuable. However, excessive investment is a no-go, so focus on stable asset management."
            },
            {
                overview: "Today is a time to focus on strengthening your inner core. Rather than outward glamour, focus on practical gains and inner peace. If you take steps steadily without rushing, a great opportunity will come your way soon.",
                romance: "It's a day when trust in each other deepens. You can find true happiness in sharing simple daily life rather than a grand date. In conversation, talk about hopeful future stories rather than past disappointments.",
                wealth: "Be careful with your spending today. You may have an impulsive urge to buy things, so ask yourself if they are really necessary. Re-checking your savings plan and reducing fixed costs can lead to financial gains."
            }
        ];

        const selected = fortunes[seed % fortunes.length];

        return {
            today: selected.overview,
            romance: selected.romance,
            wealth: selected.wealth,
            saju: lang === 'ko' ? `분석 결과, 당신의 사주는 '금(金)'과 '토(土)'의 조화가 돋보입니다. 이는 성실함과 견고한 의지를 바탕으로 어떠한 역경도 이겨낼 수 있는 강인한 생명력을 상징합니다. 특히 올해는 '수(水)'의 기운이 들어와 지혜와 유연함이 더해지니 학문이나 창작 분야에서 큰 두각을 나타낼 것입니다.` : `According to the analysis, your Saju highlights the harmony between 'Metal' and 'Earth'. This symbolizes a strong vitality that can overcome any adversity based on sincerity and solid will. Especially this year, the entry of 'Water' energy adds wisdom and flexibility, making you stand out in academic or creative fields.`
        };
    }

    displayResults(data) {
        const lang = document.documentElement.lang || 'ko';
        this.resultsContainer.innerHTML = `
            <div class="fortune-card-grid">
                <div class="result-card wide">
                    <h3>🌟 ${lang === 'ko' ? '오늘의 총평' : 'Today\'s Overview'}</h3>
                    <p>${data.today}</p>
                </div>
                <div class="result-card">
                    <h3>💖 ${lang === 'ko' ? '연애운 상세' : 'Romance Luck'}</h3>
                    <p>${data.romance}</p>
                </div>
                <div class="result-card">
                    <h3>💰 ${lang === 'ko' ? '금전운 상세' : 'Wealth Luck'}</h3>
                    <p>${data.wealth}</p>
                </div>
                <div class="result-card wide">
                    <h3>📜 ${lang === 'ko' ? '정밀 사주 분석' : 'Deep Saju Analysis'}</h3>
                    <p>${data.saju}</p>
                </div>
            </div>
        `;
        this.resultsContainer.classList.remove('hidden');
        this.resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

class PsycheTestManager {
    constructor() {
        this.modal = document.getElementById('test-modal');
        this.content = document.getElementById('test-content');
        this.closeBtn = document.querySelector('.close-modal');
        this.init();
    }
    init() {
        document.querySelectorAll('.start-test-btn').forEach(btn => {
            btn.addEventListener('click', () => this.start(btn.dataset.test));
        });
        if (this.closeBtn) this.closeBtn.onclick = () => this.modal.classList.add('hidden');
        window.onclick = (e) => { if (e.target == this.modal) this.modal.classList.add('hidden'); };
    }
    start(testType) {
        this.modal.classList.remove('hidden');
        const lang = document.documentElement.lang || 'ko';
        if (testType === 'ocean') {
            this.content.innerHTML = `
                <h3>${lang === 'ko' ? '바다의 길' : 'The Ocean Path'}</h3>
                <p>${lang === 'ko' ? '당신은 광활한 바다 앞에 서 있습니다. 어떤 길을 따라 걷고 싶나요?' : 'You are standing before a vast ocean. Which path do you choose?'}</p>
                <div class="choice-grid">
                    <div class="choice-item" onclick="psycheTest.showResult('ocean', 1)">
                        <div class="choice-img" style="background: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);"></div>
                        <p>${lang === 'ko' ? '잔잔하고 고운 모래사장' : 'A calm, sandy beach'}</p>
                    </div>
                    <div class="choice-item" onclick="psycheTest.showResult('ocean', 2)">
                        <div class="choice-img" style="background: linear-gradient(to top, #30cfd0 0%, #330867 100%);"></div>
                        <p>${lang === 'ko' ? '웅장한 절벽 위 산책로' : 'A grand cliffside trail'}</p>
                    </div>
                </div>
            `;
        } else {
            this.content.innerHTML = `
                <h3>${lang === 'ko' ? '숲의 선택' : 'Forest Selection'}</h3>
                <p>${lang === 'ko' ? '깊은 숲속으로 들어왔습니다. 무엇이 가장 먼저 눈에 띄나요?' : 'You enter a deep forest. What is the first thing you notice?'}</p>
                <div class="choice-grid">
                    <div class="choice-item" onclick="psycheTest.showResult('forest', 1)">
                        <div class="choice-img" style="background: #2d5a27;"></div>
                        <p>${lang === 'ko' ? '하늘을 찌를 듯한 고목' : 'Towering ancient trees'}</p>
                    </div>
                    <div class="choice-item" onclick="psycheTest.showResult('forest', 2)">
                        <div class="choice-img" style="background: #a8dadc;"></div>
                        <p>${lang === 'ko' ? '반짝이는 작은 연못' : 'A sparkling small pond'}</p>
                    </div>
                </div>
            `;
        }
    }
    showResult(type, choice) {
        const lang = document.documentElement.lang || 'ko';
        const results = {
            ocean: lang === 'ko' ? [
                "평화와 안정을 중시하는 타입입니다. 갈등이 적고 명확하고 안정적인 커리어 경로를 선호합니다. 주변 사람들과 조화를 이루며 꾸준히 성장하는 것에 큰 가치를 둡니다.",
                "도전과 성취를 즐기는 모험가 타입입니다. 위험이 따르더라도 큰 보상이 있는 환경에서 능력을 발휘합니다. 남들이 가지 않은 길을 개척하며 자신의 존재감을 증명하고 싶어 합니다."
            ] : [
                "You value peace and stability. You prefer a clear and stable career path with minimal conflict. You find great value in growing steadily while harmonizing with those around you.",
                "You are an adventurer who enjoys challenges and achievements. You thrive in environments with high risk and high reward. You want to prove your presence by pioneering paths that others have not taken."
            ],
            forest: lang === 'ko' ? [
                "지혜롭고 신중하며 신뢰를 주는 타입입니다. 사람들은 당신의 묵직한 존재감과 장기적인 시야에 의지합니다. 어떤 상황에서도 흔들리지 않는 뿌리 깊은 가치관을 가지고 있습니다.",
                "감수성이 풍부하고 내면 세계가 깊은 타입입니다. 직관력이 뛰어나며 자기 성찰을 중요하게 생각합니다. 눈에 보이는 것 너머의 본질을 꿰뚫어 보는 통찰력을 지녔습니다."
            ] : [
                "You are wise, cautious, and trustworthy. People rely on your solid presence and long-term vision. You have deep-rooted values that do not waver in any situation.",
                "You have rich sensibility and a deep inner world. You are highly intuitive and value self-reflection. You possess the insight to see through the essence beyond what is visible."
            ]
        };
        this.content.innerHTML = `
            <h3>${lang === 'ko' ? '당신의 분석 결과' : 'Your Analysis Result'}</h3>
            <p class="test-result-text">${results[type][choice - 1]}</p>
            <button onclick="psycheTest.modal.classList.add('hidden')" style="margin-top:20px;">${lang === 'ko' ? '닫기' : 'Close'}</button>
        `;
    }
}

class LottoBall extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); }
    static get observedAttributes() { return ['number']; }
    attributeChangedCallback() { this.render(); }
    render() {
        const number = this.getAttribute('number');
        if (!number) return;
        const color = parseInt(number) <= 10 ? '#f44336' : parseInt(number) <= 20 ? '#ff9800' : parseInt(number) <= 30 ? '#ffc107' : parseInt(number) <= 40 ? '#4caf50' : '#2196f3';
        this.shadowRoot.innerHTML = `<style>.ball{width:50px;height:50px;border-radius:50%;display:flex;justify-content:center;align-items:center;font-weight:bold;color:white;background:radial-gradient(circle at 15px 15px, ${color}, #333);box-shadow:0 4px 8px rgba(0,0,0,0.2);transition:0.3s;}.ball:hover{transform:scale(1.1);}</style><div class="ball">${number}</div>`;
    }
}
customElements.define('lotto-ball', LottoBall);

const langManager = new LanguageManager();
const fortuneManager = new FortuneManager();
window.psycheTest = new PsycheTestManager();

document.getElementById('generate-btn').addEventListener('click', () => {
    const container = document.getElementById('lotto-balls-container');
    container.innerHTML = '';
    const setRow = document.createElement('div');
    setRow.className = 'lotto-row';
    const numbers = new Set();
    while (numbers.size < 6) numbers.add(Math.floor(Math.random() * 45) + 1);
    Array.from(numbers).sort((a, b) => a - b).forEach(number => {
        const ball = document.createElement('lotto-ball');
        ball.setAttribute('number', number);
        setRow.appendChild(ball);
    });
    container.appendChild(setRow);
});

const themeBtn = document.getElementById('theme-btn');
let currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
themeBtn.textContent = currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';

themeBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    themeBtn.textContent = currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
});
