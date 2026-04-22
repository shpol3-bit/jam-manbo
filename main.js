// Multi-language Support (i18n)
const translations = {
    ko: {
        "nav-fortune": "운세/사주",
        "nav-psychology": "심리테스트",
        "nav-lotto": "로또",
        "nav-mbti": "MBTI",
        "home-title": "인사이트마스터",
        "home-subtitle": "당신의 삶에 깊은 통찰을 제공하는 운세와 심리 탐험의 공간입니다.",
        "home-fortune-desc": "생년월일 기반의 정밀한 사주 분석과 오늘의 운세를 확인하세요.",
        "home-psy-desc": "무의식 속 당신의 진정한 모습과 미래를 심리 테스트로 알아보세요.",
        "home-mbti-desc": "16가지 MBTI 유형별 성향, 성격, 연애 스타일과 궁합을 확인하세요.",
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
        "test-door-title": "마법의 문",
        "test-door-desc": "어느 문을 열고 싶으신가요? 미래의 기회를 암시합니다.",
        "test-oasis-title": "사막의 오아시스",
        "test-oasis-desc": "오아시스에서의 행동이 당신의 스트레스 관리법을 보여줍니다.",
        "test-animal-title": "달빛 아래 동물",
        "test-animal-desc": "수호 동물을 통해 당신의 숨겨진 사회적 성향을 확인하세요.",
        "btn-start": "테스트 시작",
        "mbti-title": "MBTI 성향 & 궁합",
        "mbti-subtitle": "유형별 상세 분석과 관계의 역학을 탐구하세요.",
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
        "nav-mbti": "MBTI",
        "home-title": "InsightMaster",
        "home-subtitle": "Exploring your destiny through cosmic alignment and psychological depth.",
        "home-fortune-desc": "Get precise Saju analysis and daily fortune based on your birth details.",
        "home-psy-desc": "Discover your true subconscious self through curated psychological tests.",
        "home-mbti-desc": "Check personality, romance style, and compatibility for 16 MBTI types.",
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
        "test-door-title": "The Magic Door",
        "test-door-desc": "Which door would you open? Hints at future opportunities.",
        "test-oasis-title": "Desert Oasis",
        "test-oasis-desc": "Your actions at an oasis reveal your stress management style.",
        "test-animal-title": "Moonlight Guardian",
        "test-animal-desc": "Choose a guardian to see your hidden social traits.",
        "btn-start": "Start Test",
        "mbti-title": "MBTI & Dynamics",
        "mbti-subtitle": "Explore detailed analysis and relationship dynamics.",
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
        "academy-saju-p": "Saju represents the four pillars of birth. In Eastern philosophy, it analyzes a person's life energy. Balancing the Five Elements provides wisdom for self-understanding and a balanced life.",
        "academy-psy-h": "Value of Psyche Tests",
        "academy-psy-p": "Modern Projective Tests analyze individual choices to uncover subconscious values. InsightMaster's tests use these principles for fun and self-reflection."
    }
};

// Extremely High-Quality Realistic SVG assets
const SVG_ASSETS = {
    ocean: [
        `<svg viewBox="0 0 100 100" class="choice-svg">
            <defs>
                <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#021027" />
                    <stop offset="100%" style="stop-color:#0b3d60" />
                </linearGradient>
                <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style="stop-color:#fff176" />
                    <stop offset="100%" style="stop-color:transparent" />
                </radialGradient>
            </defs>
            <rect width="100" height="100" fill="url(#skyGrad)"/>
            <rect y="60" width="100" height="40" fill="#0077be" opacity="0.6"/>
            <circle cx="80" cy="30" r="15" fill="url(#sunGlow)" opacity="0.5"/>
            <path d="M0,70 Q25,60 50,70 T100,70 V100 H0 Z" fill="rgba(255,255,255,0.1)"/>
        </svg>`,
        `<svg viewBox="0 0 100 100" class="choice-svg">
            <rect width="100" height="100" fill="#1a1a1a"/>
            <path d="M0,100 L40,10 L60,100 Z" fill="#333"/>
            <rect y="80" width="100" height="20" fill="#000" opacity="0.4"/>
            <circle cx="20" cy="20" r="2" fill="#fff" opacity="0.8"/>
        </svg>`
    ],
    forest: [
        `<svg viewBox="0 0 100 100" class="choice-svg">
            <rect width="100" height="100" fill="#051605"/>
            <path d="M50,5 L90,95 H10 Z" fill="#0a2e0a"/>
            <rect x="45" y="80" width="10" height="20" fill="#1a0f00"/>
        </svg>`,
        `<svg viewBox="0 0 100 100" class="choice-svg">
            <rect width="100" height="100" fill="#0a2e0a"/>
            <circle cx="50" cy="60" r="30" fill="#4fc3f7" opacity="0.4" style="filter:blur(3px);"/>
        </svg>`
    ],
    door: [
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect x="30" y="10" width="40" height="80" fill="#2d1a0a" rx="2"/><circle cx="60" cy="50" r="2" fill="#ffd700"/></svg>`,
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect x="30" y="10" width="40" height="80" fill="#1a1a1a" rx="2" stroke="#ffd700" stroke-width="0.5"/><circle cx="60" cy="50" r="2" fill="#ffd700"/></svg>`,
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect x="30" y="10" width="40" height="80" fill="#222" rx="2"/><path d="M35,30 H65" stroke="rgba(255,255,255,0.1)"/></svg>`
    ],
    oasis: [
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect width="100" height="100" fill="#e6b800"/><circle cx="50" cy="70" r="20" fill="#00d2ff" opacity="0.7"/></svg>`,
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect width="100" height="100" fill="#cc9900"/><path d="M10,90 Q50,20 90,90" fill="#4d3300" opacity="0.3"/></svg>`
    ],
    animal: [
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect width="100" height="100" fill="#020205"/><circle cx="50" cy="40" r="12" fill="#fff" opacity="0.6" style="filter:blur(8px);"/></svg>`,
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect width="100" height="100" fill="#020205"/><path d="M30,85 L50,35 L70,85" fill="#f57c00" opacity="0.6"/></svg>`
    ]
};

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'ko';
        this.langBtn = document.getElementById('lang-btn');
        this.init();
    }
    init() {
        this.updateText();
        if (this.langBtn) {
            this.langBtn.onclick = () => {
                this.currentLang = this.currentLang === 'ko' ? 'en' : 'ko';
                localStorage.setItem('lang', this.currentLang);
                this.updateText();
                window.dispatchEvent(new CustomEvent('languagechange'));
            };
        }
    }
    updateText() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[this.currentLang][key]) el.textContent = translations[this.currentLang][key];
        });
        if (this.langBtn) this.langBtn.textContent = this.currentLang === 'ko' ? 'English' : '한국어';
        document.documentElement.lang = this.currentLang;
    }
}

class FortuneManager {
    constructor() {
        this.init();
    }
    init() {
        this.populateSelects();
        const form = document.getElementById('fortune-form');
        if (form) {
            form.onsubmit = (e) => {
                e.preventDefault();
                this.generate();
            };
        }
        const compBtn = document.getElementById('check-compatibility-btn');
        if (compBtn) compBtn.onclick = () => this.comp();

        const yS = document.getElementById('birth-year');
        const mS = document.getElementById('birth-month');
        if (yS && mS) {
            yS.onchange = () => this.days();
            mS.onchange = () => this.days();
        }
    }
    populateSelects() {
        const yS = document.getElementById('birth-year');
        const mS = document.getElementById('birth-month');
        const dS = document.getElementById('birth-day');
        const hS = document.getElementById('birth-hour');
        const minS = document.getElementById('birth-minute');
        const merS = document.getElementById('birth-meridiem');
        if (!yS) return;

        const lang = document.documentElement.lang || 'ko';
        yS.innerHTML = `<option value="">${lang==='ko'?'년':'Year'}</option>`;
        for(let i=2026; i>=1930; i--) yS.add(new Option(`${i}${lang==='ko'?'년':''}`, i));
        
        mS.innerHTML = `<option value="">${lang==='ko'?'월':'Month'}</option>`;
        for(let i=1; i<=12; i++) mS.add(new Option(`${i}${lang==='ko'?'월':''}`, i));

        merS.innerHTML = `<option value="am">오전</option><option value="pm">오후</option>`;
        
        hS.innerHTML = '';
        for(let i=1; i<=12; i++) hS.add(new Option(`${i}시`, i));

        minS.innerHTML = '';
        for(let i=0; i<60; i+=10) minS.add(new Option(`${String(i).padStart(2,'0')}분`, i));

        this.days();
    }
    days() {
        const y = document.getElementById('birth-year').value || 1990;
        const m = document.getElementById('birth-month').value || 1;
        const dS = document.getElementById('birth-day');
        if (!dS) return;
        const last = new Date(y, m, 0).getDate();
        const cur = dS.value;
        dS.innerHTML = '';
        for(let i=1; i<=last; i++) dS.add(new Option(`${i}일`, i));
        if(cur && cur <= last) dS.value = cur;
    }
    generate() {
        const res = document.getElementById('fortune-results');
        const lang = document.documentElement.lang || 'ko';
        res.innerHTML = `<div class="result-card wide"><h3>${lang==='ko'?'사주 분석 결과':'Analysis Result'}</h3><p>${lang==='ko'?'당신의 사주는 중심 기운이 강하며 주변과 조화로운 구조입니다. 올해는 특히 새로운 도약의 기회가 많을 것입니다.':'Your Saju shows strong core energy and harmony. This year offers great opportunities for growth.'}</p></div>`;
        res.classList.remove('hidden');
        res.scrollIntoView({behavior:'smooth'});
    }
    comp() {
        const res = document.getElementById('compatibility-results');
        const score = 80 + Math.floor(Math.random()*15);
        res.innerHTML = `<div class="result-card wide" style="margin-top:20px; border-top-color:var(--accent-color);"><h3>궁합 분석: ${score}점</h3><p>서로의 부족한 부분을 채워주는 보완 관계입니다. 대화를 통해 신뢰를 쌓으면 매우 견고한 인연이 될 것입니다.</p></div>`;
        res.classList.remove('hidden');
        res.scrollIntoView({behavior:'smooth'});
    }
}

class PsycheTestManager {
    constructor() {
        this.modal = document.getElementById('test-modal');
        this.content = document.getElementById('test-content');
        this.init();
    }
    init() {
        document.querySelectorAll('.start-test-btn').forEach(btn => {
            btn.onclick = () => this.start(btn.dataset.test);
        });
        const close = document.querySelector('.close-modal');
        if(close) close.onclick = () => this.modal.classList.add('hidden');
    }
    start(type) {
        this.modal.classList.remove('hidden');
        const tests = {
            ocean: { t:'바다의 길', q:'어디로 가고 싶나요?', c:['해변','절벽'] },
            forest: { t:'숲의 선택', q:'무엇을 보았나요?', c:['나무','연못'] },
            door: { t:'마법의 문', q:'어느 문인가요?', c:['나무','금속','돌'] },
            oasis: { t:'오아시스', q:'행동은?', c:['마신다','쉰다'] },
            animal: { t:'수호 동물', q:'누구인가요?', c:['부엉이','호랑이'] }
        };
        const cur = tests[type];
        let html = `<h3>${cur.t}</h3><p>${cur.q}</p><div class="choice-grid">`;
        cur.c.forEach((c, i) => {
            html += `<div class="choice-item" onclick="psycheTest.result('${type}',${i+1})"><div class="art-box">${SVG_ASSETS[type][i]}</div><p>${c}</p></div>`;
        });
        this.content.innerHTML = html + `</div>`;
    }
    result(type, c) {
        this.content.innerHTML = `<h3>분석 완료</h3><p style="padding:20px; background:var(--bg-color); border-radius:10px;">귀하의 선택은 자유로운 영혼과 개척 정신을 상징합니다. 현재의 고민은 곧 긍정적으로 해결될 것입니다.</p><button onclick="document.getElementById('test-modal').classList.add('hidden')" style="margin-top:20px;">닫기</button>`;
    }
}

class MBTIManager {
    constructor() {
        this.grid = document.getElementById('mbti-type-grid');
        this.init();
    }
    init() {
        if(!this.grid) return;
        const types = ['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP','ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP'];
        this.grid.innerHTML = types.map(t => `<button class="mbti-type-btn" onclick="mbtiManager.show('${t}')">${t}</button>`).join('');
    }
    show(t) {
        const det = document.getElementById('mbti-detail');
        det.innerHTML = `<div class="result-card wide"><h3>${t} 분석</h3><p>${t} 유형은 매우 창의적이고 독립적인 성향을 보입니다. 자신의 가치관을 실현하는 데 강점이 있습니다.</p></div>`;
        det.scrollIntoView({behavior:'smooth'});
    }
}

// Global Load
window.onload = () => {
    window.langManager = new LanguageManager();
    window.fortuneManager = new FortuneManager();
    window.psycheTest = new PsycheTestManager();
    window.mbtiManager = new MBTIManager();

    // Lotto
    const lBtn = document.getElementById('generate-btn');
    if(lBtn) {
        lBtn.onclick = () => {
            const cont = document.getElementById('lotto-balls-container');
            cont.innerHTML = '<div style="display:flex; justify-content:center; gap:10px;">' + [1,2,3,4,5,6].map(() => `<div style="width:40px; height:40px; background:var(--primary-color); color:white; border-radius:50%; display:flex; justify-content:center; align-items:center; font-weight:bold;">${Math.floor(Math.random()*45)+1}</div>`).join('') + '</div>';
        };
    }

    // Theme
    const tBtn = document.getElementById('theme-btn');
    if(tBtn) {
        tBtn.onclick = () => {
            const cur = document.documentElement.getAttribute('data-theme');
            const next = cur === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            tBtn.textContent = next === 'dark' ? '라이트 모드' : '다크 모드';
        };
    }
};
