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

// SVG Illustration Templates
const SVG_ASSETS = {
    ocean: [
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect width="100" height="100" fill="#a1c4fd"/><path d="M0,70 Q25,60 50,70 T100,70 V100 H0 Z" fill="#fff" opacity="0.8"/><circle cx="80" cy="30" r="10" fill="#fff176"/></svg>`,
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect width="100" height="100" fill="#4facfe"/><path d="M0,80 L40,40 L60,60 L100,20 V100 H0 Z" fill="#455a64"/><path d="M0,90 Q50,80 100,90 V100 H0 Z" fill="#0091ea"/></svg>`
    ],
    forest: [
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect width="100" height="100" fill="#2d5a27"/><path d="M50,10 L80,80 H20 Z" fill="#1b5e20"/><path d="M50,30 L70,80 H30 Z" fill="#388e3c"/></svg>`,
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect width="100" height="100" fill="#81c784"/><circle cx="50" cy="50" r="30" fill="#4fc3f7" stroke="#fff" stroke-width="2"/><path d="M30,50 Q50,40 70,50" fill="none" stroke="#fff" opacity="0.5"/></svg>`
    ],
    door: [
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect x="25" y="20" width="50" height="70" rx="5" fill="#5d4037"/><circle cx="65" cy="55" r="3" fill="#ffd54f"/></svg>`,
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect x="25" y="20" width="50" height="70" rx="5" fill="#455a64" stroke="#ffd54f" stroke-width="2"/><circle cx="65" cy="55" r="3" fill="#ffd54f"/></svg>`,
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect x="25" y="20" width="50" height="70" rx="5" fill="#c2185b"/><path d="M35,40 H65 M35,50 H65 M35,60 H65" stroke="#fff" stroke-width="1"/></svg>`
    ],
    oasis: [
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect width="100" height="100" fill="#ffe082"/><circle cx="50" cy="50" r="25" fill="#00bcd4"/><path d="M40,30 L60,30 M50,30 V70" stroke="#2e7d32" stroke-width="4"/></svg>`,
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect width="100" height="100" fill="#ffe082"/><path d="M10,80 Q50,60 90,80" fill="none" stroke="#5d4037" stroke-width="3"/><circle cx="50" cy="40" r="15" fill="#ffeb3b"/></svg>`
    ],
    animal: [
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect width="100" height="100" fill="#1a237e"/><circle cx="50" cy="40" r="20" fill="#cfd8dc"/><path d="M40,40 Q50,30 60,40" fill="none" stroke="#37474f" stroke-width="2"/></svg>`,
        `<svg viewBox="0 0 100 100" class="choice-svg"><rect width="100" height="100" fill="#1a237e"/><path d="M30,70 L50,30 L70,70 Z" fill="#ff8f00"/><circle cx="50" cy="45" r="5" fill="#000"/></svg>`
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
        this.populateSelects();
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.generateFortune();
            });
        }
        const compatibilityBtn = document.getElementById('check-compatibility-btn');
        if (compatibilityBtn) {
            compatibilityBtn.addEventListener('click', () => this.generateCompatibility());
        }
    }
    populateSelects() {
        const yearSel = document.getElementById('birth-year');
        const monthSel = document.getElementById('birth-month');
        const daySel = document.getElementById('birth-day');
        if (!yearSel) return;
        const lang = document.documentElement.lang || 'ko';
        for (let i = new Date().getFullYear(); i >= 1930; i--) yearSel.add(new Option(`${i}${lang==='ko'?'년':''}`, i));
        for (let i = 1; i <= 12; i++) monthSel.add(new Option(`${i}${lang==='ko'?'월':''}`, i));
        for (let i = 1; i <= 31; i++) daySel.add(new Option(`${i}${lang==='ko'?'일':''}`, i));
    }
    generateFortune() {
        const year = document.getElementById('birth-year').value;
        const month = document.getElementById('birth-month').value;
        const day = document.getElementById('birth-day').value;
        const results = this.calculate(year, month, day);
        this.displayResults(results);
    }
    calculate(y, m, d) {
        const seed = parseInt(y) + parseInt(m) + parseInt(d);
        const lang = document.documentElement.lang || 'ko';
        const fortunes = lang === 'ko' ? [
            {
                overview: "하늘의 기운이 당신을 돕는 날입니다. 평소 계획하던 일이 있다면 오늘 실행에 옮기기에 최적의 시기입니다. 주변 사람들과의 협력이 큰 성과를 가져올 것이니 독단적인 결정보다는 의견을 경청하는 태도가 길운을 불러옵니다.",
                romance: "상대방의 작은 변화를 알아차려 주는 세심함이 필요한 때입니다. 싱글이라면 가까운 지인과의 모임에서 뜻밖의 설렘을 느낄 수 있는 인연이 나타날 가능성이 높습니다. 솔직한 표현이 서로의 거리를 좁히는 열쇠가 됩니다.",
                wealth: "금전운이 상승 곡선을 그리고 있습니다. 예상치 못한 곳에서 작은 수익이 발생하거나, 오랫동안 묵혀두었던 자산이 가치를 발할 수 있습니다. 다만, 과도한 투자는 금물이니 안정적인 자산 관리에 집중하는 것이 좋습니다."
            }
        ] : [
            {
                overview: "Heaven's energy is on your side today. If you have any plans, today is the perfect day to take action. Cooperation with others will bring great results, so listening to opinions rather than making arbitrary decisions will bring good luck.",
                romance: "It's a time when you need to be attentive to the small changes in your partner. If you're single, there's a high chance of meeting someone unexpected at a gathering. Honest expression is the key to closing the distance between each other.",
                wealth: "The wealth luck is on an upward curve. Small profits may arise from unexpected places, or long-held assets may prove valuable. However, excessive investment is a no-go, so focus on stable asset management."
            }
        ];
        const selected = fortunes[seed % fortunes.length];
        return {
            today: selected.overview, romance: selected.romance, wealth: selected.wealth,
            saju: lang === 'ko' ? `분석 결과, 당신의 사주는 '금(金)'과 '토(土)'의 조화가 돋보입니다. 이는 성실함과 견고한 의지를 바탕으로 어떠한 역경도 이겨낼 수 있는 강인한 생명력을 상징합니다.` : `According to the analysis, your Saju highlights the harmony between 'Metal' and 'Earth'. This symbolizes a strong vitality that can overcome any adversity.`
        };
    }
    displayResults(data) {
        const lang = document.documentElement.lang || 'ko';
        this.resultsContainer.innerHTML = `
            <div class="fortune-card-grid">
                <div class="result-card wide"><h3>🌟 ${lang === 'ko' ? '오늘의 총평' : 'Today\'s Overview'}</h3><p>${data.today}</p></div>
                <div class="result-card"><h3>💖 ${lang === 'ko' ? '연애운 상세' : 'Romance Luck'}</h3><p>${data.romance}</p></div>
                <div class="result-card"><h3>💰 ${lang === 'ko' ? '금전운 상세' : 'Wealth Luck'}</h3><p>${data.wealth}</p></div>
                <div class="result-card wide"><h3>📜 ${lang === 'ko' ? '정밀 사주 분석' : 'Deep Saju Analysis'}</h3><p>${data.saju}</p></div>
            </div>
        `;
        this.resultsContainer.classList.remove('hidden');
        this.resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }

    generateCompatibility() {
        const typeEl = document.getElementById('compatibility-type');
        const relationEl = document.getElementById('compatibility-relation');
        const target = document.getElementById('compatibility-results');
        if (!typeEl || !relationEl || !target) return;

        const partner = {
            wood: '성장형',
            fire: '표현형',
            earth: '안정형',
            metal: '원칙형',
            water: '공감형'
        }[typeEl.value] || '안정형';
        const relation = {
            romance: '연애·결혼',
            friend: '친구·지인',
            work: '직장·동업',
            family: '가족·가까운 관계'
        }[relationEl.value] || '연애·결혼';
        const scoreSeed = (typeEl.value.length * 17 + relationEl.value.length * 9) % 19;
        const score = 72 + scoreSeed;

        target.innerHTML = `
            <h3>${relation} 궁합 결과</h3>
            <p class="fortune-summary">상대는 ${partner} 흐름으로 보고, 현재 관계의 편안함과 조율 포인트를 함께 해석했습니다.</p>
            <div class="compatibility-score">
                <strong>${score}점</strong>
                <span>${score >= 84 ? '서로의 장점을 자연스럽게 살려주는 보완형 궁합입니다.' : score >= 76 ? '편안함과 차이를 함께 배우는 균형형 궁합입니다.' : '끌림은 있지만 속도와 표현을 맞춰야 하는 조율형 궁합입니다.'}</span>
            </div>
            <div class="fortune-expert-note">
                <strong>사주 전문가 해설</strong>
                <p>궁합은 상대를 좋고 나쁨으로 단정하는 풀이가 아닙니다. 두 사람이 어떤 상황에서 편안해지고, 어떤 대화에서 오해가 반복되는지를 보는 과정입니다. 좋은 궁합은 갈등이 없는 관계가 아니라 갈등 뒤에 회복하는 방식이 건강한 관계입니다.</p>
            </div>
            <div class="fortune-checklist">
                <div>좋은 신호: 대화 후 마음이 더 복잡해지기보다 정리됩니다.</div>
                <div>주의 신호: 같은 불편함을 계속 참고만 있고 실제 합의가 없습니다.</div>
                <div>관계운 상승 행동: 연락, 돈, 약속, 휴식 기준을 짧고 구체적으로 나눠보세요.</div>
            </div>
        `;
        target.classList.remove('hidden');
        target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
        const tests = {
            ocean: {
                title: lang==='ko'?'바다의 길':'The Ocean Path',
                q: lang==='ko'?'어떤 바닷길을 걷고 싶나요?':'Which ocean path do you choose?',
                choices: [lang==='ko'?'잔잔한 모래사장':'Sandy beach', lang==='ko'?'절벽 위 산책로':'Cliff trail']
            },
            forest: {
                title: lang==='ko'?'숲의 선택':'Forest Selection',
                q: lang==='ko'?'무엇이 가장 먼저 보이나요?':'What do you notice first?',
                choices: [lang==='ko'?'거대한 고목':'Giant tree', lang==='ko'?'맑은 연못':'Clear pond']
            },
            door: {
                title: lang==='ko'?'마법의 문':'The Magic Door',
                q: lang==='ko'?'어느 문을 열어보고 싶으신가요?':'Which door would you open?',
                choices: [lang==='ko'?'오래된 나무 문':'Old wooden door', lang==='ko'?'화려한 금속 문':'Ornate metal door', lang==='ko'?'비밀스러운 석문':'Mysterious stone door']
            },
            oasis: {
                title: lang==='ko'?'사막의 오아시스':'Desert Oasis',
                q: lang==='ko'?'오아시스에서 가장 먼저 무엇을 하시겠습니까?':'What would you do first at an oasis?',
                choices: [lang==='ko'?'물부터 마신다':'Drink water', lang==='ko'?'그늘에서 쉰다':'Rest in shade']
            },
            animal: {
                title: lang==='ko'?'달빛 아래 동물':'Moonlight Guardian',
                q: lang==='ko'?'당신을 지켜줄 동물을 선택하세요.':'Choose your guardian animal.',
                choices: [lang==='ko'?'지혜로운 부엉이':'Wise owl', lang==='ko'?'용맹한 호랑이':'Brave tiger']
            }
        };
        const current = tests[testType];
        let choicesHtml = '';
        current.choices.forEach((c, i) => {
            choicesHtml += `<div class="choice-item" onclick="psycheTest.showResult('${testType}', ${i+1})">${SVG_ASSETS[testType][i] || ''}<p>${c}</p></div>`;
        });
        this.content.innerHTML = `<h3>${current.title}</h3><p>${current.q}</p><div class="choice-grid">${choicesHtml}</div>`;
    }
    showResult(type, choice) {
        const lang = document.documentElement.lang || 'ko';
        const result = this.getDetailedResult(type, choice, lang);
        const resultSvg = SVG_ASSETS[type][choice - 1] || '';
        this.content.innerHTML = `
            <h3>${lang === 'ko' ? '분석 결과' : 'Analysis Result'}</h3>
            <div class="psy-result-hero">
                <div class="result-illustration">${resultSvg}</div>
                <div>
                    <strong>${result.title}</strong>
                    <p>${result.summary}</p>
                </div>
            </div>
            <div class="psy-result-grid">
                ${result.sections.map(section => `
                    <article>
                        <h4>${section.title}</h4>
                        <p>${section.text}</p>
                    </article>
                `).join('')}
            </div>
            <div class="psy-result-advice">
                <strong>${lang === 'ko' ? '오늘 바로 해볼 일' : 'Try this today'}</strong>
                <p>${result.action}</p>
            </div>
            <button onclick="psycheTest.modal.classList.add('hidden')" style="margin-top:20px;">${lang === 'ko' ? '닫기' : 'Close'}</button>
        `;
    }

    getDetailedResult(type, choice, lang) {
        if (lang !== 'ko') {
            return {
                title: 'Detailed psychological reading',
                summary: 'Your choice reflects a pattern in how you seek safety, energy, and direction.',
                sections: [
                    { title: 'Core tendency', text: 'You respond strongly to the scene you selected, which points to your preferred way of handling pressure and opportunity.' },
                    { title: 'Relationship style', text: 'You feel comfortable when people respect your natural pace and communicate expectations clearly.' },
                    { title: 'Growth point', text: 'Your next step is to turn your instinctive preference into a practical routine.' }
                ],
                action: 'Write down one small action that would make your day feel clearer and lighter.'
            };
        }

        const data = {
            ocean: [
                {
                    title: '잔잔한 해변을 고른 안정형 조율가',
                    summary: '당신은 마음이 편안해야 실력이 제대로 나오는 타입입니다. 빠른 변화보다 예측 가능한 리듬, 신뢰할 수 있는 사람, 차분한 환경에서 장점이 깊게 드러납니다.',
                    sections: [
                        { title: '핵심 성향', text: '겉으로는 부드럽지만 기준이 없는 사람은 아닙니다. 갈등을 키우기보다 흐름을 정돈하려는 힘이 있고, 사람 사이의 분위기를 섬세하게 읽습니다.' },
                        { title: '일과 관계', text: '일에서는 장기적으로 쌓이는 역할, 꾸준함이 인정되는 환경, 약속과 기준이 분명한 팀이 잘 맞습니다. 관계에서는 갑작스러운 밀착보다 반복되는 배려에 마음을 엽니다.' },
                        { title: '주의할 점', text: '평화를 지키려다 불편한 말을 너무 오래 삼킬 수 있습니다. 괜찮은 척하는 시간이 길어지면 어느 순간 마음이 닫히므로, 작은 불편함일 때 부드럽게 말하는 연습이 필요합니다.' }
                    ],
                    action: '오늘은 미뤄둔 답장이나 정리할 약속 하나를 차분하게 마무리해보세요. 생활의 작은 파도가 잦아들면 판단도 훨씬 선명해집니다.'
                },
                {
                    title: '절벽 위 길을 고른 도전형 개척가',
                    summary: '당신은 안정만으로는 만족하기 어려운 사람입니다. 약간의 긴장감, 새로운 과제, 스스로 증명할 수 있는 무대가 있을 때 에너지가 살아납니다.',
                    sections: [
                        { title: '핵심 성향', text: '위험을 무작정 좋아한다기보다, 의미 있는 목표를 위해 불확실성을 감당할 수 있는 편입니다. 남들이 망설이는 상황에서도 가능성을 먼저 보는 힘이 있습니다.' },
                        { title: '일과 관계', text: '일에서는 새 프로젝트, 기획, 창업, 협상처럼 판단과 추진력이 필요한 영역에서 강합니다. 관계에서는 나를 붙잡기보다 함께 성장하려는 사람에게 끌립니다.' },
                        { title: '주의할 점', text: '늘 강해 보여야 한다는 부담 때문에 피로를 늦게 알아차릴 수 있습니다. 도전과 소진은 다르므로, 멈추는 시간을 실패로 해석하지 않는 것이 중요합니다.' }
                    ],
                    action: '지금 하고 싶은 도전 하나를 적고, 오늘 할 수 있는 가장 작은 첫 단계만 정해보세요. 큰 결심보다 실행 가능한 첫 움직임이 운을 엽니다.'
                }
            ],
            forest: [
                {
                    title: '거대한 고목을 고른 신뢰형 버팀목',
                    summary: '당신은 쉽게 흔들리지 않는 기준과 책임감을 가진 타입입니다. 시간이 지날수록 깊이가 드러나며, 주변 사람들은 당신에게 안정감과 신뢰를 느낍니다.',
                    sections: [
                        { title: '핵심 성향', text: '결정을 급하게 내리기보다 충분히 살펴본 뒤 움직입니다. 한 번 마음먹은 일은 오래 지켜내는 힘이 있고, 말보다 행동으로 책임을 보여주는 편입니다.' },
                        { title: '일과 관계', text: '일에서는 관리, 운영, 교육, 상담, 분석처럼 경험이 쌓일수록 가치가 커지는 분야가 잘 맞습니다. 관계에서는 가벼운 약속보다 오래 지켜지는 신뢰를 중요하게 봅니다.' },
                        { title: '주의할 점', text: '버티는 힘이 강한 만큼 도움을 요청하는 시점이 늦어질 수 있습니다. 모두를 지탱하려다 나의 뿌리가 마르지 않도록 부담을 나누는 연습이 필요합니다.' }
                    ],
                    action: '오늘은 혼자 떠안고 있는 일 하나를 적고, 누구에게 어떤 도움을 요청할 수 있는지 현실적으로 나눠보세요.'
                },
                {
                    title: '맑은 연못을 고른 직관형 감수성가',
                    summary: '당신은 눈에 보이는 말보다 분위기와 미묘한 감정을 먼저 읽는 사람입니다. 감수성과 직관이 깊고, 자기 성찰을 통해 방향을 찾는 힘이 있습니다.',
                    sections: [
                        { title: '핵심 성향', text: '사람의 표정, 말투, 공간의 분위기에 민감하게 반응합니다. 좋은 환경에서는 창의력과 공감력이 크게 살아나지만, 복잡한 관계 안에서는 쉽게 지칠 수 있습니다.' },
                        { title: '일과 관계', text: '글쓰기, 디자인, 상담, 기획, 브랜딩처럼 감정과 의미를 다루는 일에 강점이 있습니다. 관계에서는 깊은 대화와 정서적 안전감을 중요하게 여깁니다.' },
                        { title: '주의할 점', text: '상대의 반응을 너무 많이 해석하면 실제보다 마음이 복잡해집니다. 직관은 강점이지만, 확인되지 않은 추측까지 사실처럼 받아들이지 않도록 균형이 필요합니다.' }
                    ],
                    action: '오늘 느낀 감정을 세 문장으로 적어보세요. 감정에 이름을 붙이면 마음이 정리되고, 필요한 선택이 더 분명해집니다.'
                }
            ],
            door: [
                {
                    title: '오래된 나무 문을 고른 온기형 현실주의자',
                    summary: '당신은 익숙함 속에서 안정감을 찾고, 경험을 통해 검증된 것을 신뢰하는 타입입니다. 사람에게도 일에도 따뜻하지만 무게 있는 태도를 보입니다.',
                    sections: [
                        { title: '핵심 성향', text: '과거에 쌓아온 경험을 소중히 여기며, 갑작스러운 변화보다 준비된 변화를 선호합니다. 한번 신뢰한 사람에게는 오래 마음을 주는 편입니다.' },
                        { title: '기회 해석', text: '미래의 기회는 완전히 낯선 곳보다 이미 알고 있던 영역을 새롭게 다듬을 때 열립니다. 오래 해온 일, 익숙한 관계, 쌓아둔 실력이 중요한 자산입니다.' },
                        { title: '주의할 점', text: '안정이 지나치면 새로운 가능성을 늦게 받아들일 수 있습니다. 익숙한 선택을 하더라도 작은 변화 하나를 더하면 운의 폭이 넓어집니다.' }
                    ],
                    action: '최근 미뤄둔 익숙한 일을 하나 골라 새 방식으로 정리해보세요. 오래된 문도 손잡이를 바꾸면 새로운 길처럼 느껴집니다.'
                },
                {
                    title: '화려한 금속 문을 고른 성취형 추진가',
                    summary: '당신은 더 나은 위치, 더 넓은 무대, 눈에 보이는 성장을 원하는 타입입니다. 목표가 분명할수록 집중력과 추진력이 강해집니다.',
                    sections: [
                        { title: '핵심 성향', text: '자신을 발전시키고 싶다는 욕구가 강합니다. 남 앞에 서는 것을 두려워하기보다, 준비가 되었을 때 제대로 인정받고 싶어 합니다.' },
                        { title: '기회 해석', text: '새로운 제안, 승진, 발표, 브랜딩, 외부 활동처럼 나를 드러내는 기회와 잘 맞습니다. 단, 화려함보다 실질적인 조건이 받쳐주는지 확인해야 합니다.' },
                        { title: '주의할 점', text: '성과를 빨리 보고 싶은 마음 때문에 과정의 피로를 무시할 수 있습니다. 무리한 비교보다 나만의 속도로 성장 지표를 정하는 것이 중요합니다.' }
                    ],
                    action: '오늘은 보여주고 싶은 나의 강점 하나를 정리해보세요. 이력, 포트폴리오, 소개 문장처럼 보이는 형태로 남기면 좋습니다.'
                },
                {
                    title: '비밀스러운 석문을 고른 독창형 탐구자',
                    summary: '당신은 남들이 쉽게 보지 못하는 의미와 깊이를 찾는 사람입니다. 겉으로 드러난 길보다 내면의 확신과 독자적인 방향을 중요하게 여깁니다.',
                    sections: [
                        { title: '핵심 성향', text: '혼자 생각하는 시간이 필요하고, 깊이 파고드는 주제에서 집중력이 살아납니다. 대중적인 답보다 나만 납득할 수 있는 이유를 찾으려 합니다.' },
                        { title: '기회 해석', text: '연구, 창작, 전문 기술, 깊은 공부처럼 시간이 걸리지만 독자성이 쌓이는 영역에서 기회가 열립니다. 남들이 이해하지 못해도 꾸준히 다듬으면 강한 무기가 됩니다.' },
                        { title: '주의할 점', text: '혼자만의 세계가 깊어질수록 필요한 도움이나 피드백을 놓칠 수 있습니다. 닫힌 문이 아니라 선택적으로 여는 문을 만드는 것이 성장의 핵심입니다.' }
                    ],
                    action: '요즘 혼자만 생각하던 아이디어를 한 사람에게 설명해보세요. 말로 꺼내는 순간 방향이 더 선명해질 수 있습니다.'
                }
            ],
            oasis: [
                {
                    title: '물을 먼저 마신 즉시 해결형 실천가',
                    summary: '당신은 문제 앞에서 오래 망설이기보다 가장 필요한 것부터 처리하는 타입입니다. 위기 상황에서 우선순위를 빠르게 잡는 능력이 있습니다.',
                    sections: [
                        { title: '핵심 성향', text: '복잡한 설명보다 당장 효과가 있는 행동을 선호합니다. 에너지가 떨어졌을 때도 핵심 문제를 먼저 해결하려는 현실 감각이 강합니다.' },
                        { title: '스트레스 대처', text: '스트레스가 오면 생각보다 몸이 먼저 반응합니다. 그래서 충분한 수분, 식사, 수면처럼 기본 회복이 되면 판단력이 빠르게 돌아옵니다.' },
                        { title: '주의할 점', text: '빠른 해결이 장점이지만, 감정의 원인을 지나치게 단순화할 수 있습니다. 급한 불을 끈 뒤에는 왜 그런 상황이 반복되는지도 살펴야 합니다.' }
                    ],
                    action: '오늘 가장 급한 문제 하나만 골라 20분 안에 할 수 있는 조치를 해보세요. 작은 해결감이 다음 선택의 힘이 됩니다.'
                },
                {
                    title: '그늘에서 쉰 회복형 전략가',
                    summary: '당신은 당장의 반응보다 오래 버틸 수 있는 힘을 먼저 챙기는 타입입니다. 급할수록 한 발 물러서서 전체 상황을 보려는 성향이 있습니다.',
                    sections: [
                        { title: '핵심 성향', text: '에너지를 아껴 써야 좋은 결과가 난다는 것을 본능적으로 압니다. 무리하게 밀어붙이기보다 회복과 준비를 통해 더 정확하게 움직입니다.' },
                        { title: '스트레스 대처', text: '혼자 정리할 시간, 조용한 공간, 충분한 휴식이 있어야 마음이 안정됩니다. 쉬는 시간을 낭비로 보지 않을 때 오히려 성과가 좋아집니다.' },
                        { title: '주의할 점', text: '너무 오래 준비만 하면 기회를 놓칠 수 있습니다. 회복이 끝났다면 작은 실행으로 전환하는 기준을 미리 정해두는 것이 좋습니다.' }
                    ],
                    action: '오늘은 15분만 알림을 끄고 쉬어보세요. 쉬고 난 뒤 해야 할 일을 세 가지 이하로 줄이면 부담이 크게 낮아집니다.'
                }
            ],
            animal: [
                {
                    title: '부엉이를 고른 통찰형 관찰자',
                    summary: '당신은 조용히 관찰하면서 핵심을 파악하는 타입입니다. 말이 많지 않아도 상황의 흐름과 사람의 의도를 날카롭게 읽어냅니다.',
                    sections: [
                        { title: '핵심 성향', text: '혼자 있는 시간에 생각이 깊어지고, 정보를 모아 구조화하는 능력이 좋습니다. 겉으로 드러난 것보다 숨은 맥락을 파악하는 데 강합니다.' },
                        { title: '사회적 성향', text: '넓은 관계보다 믿을 수 있는 소수와 깊게 연결될 때 편안합니다. 조용하지만 필요한 순간에는 정확한 조언으로 존재감을 드러냅니다.' },
                        { title: '주의할 점', text: '너무 오래 관찰만 하면 마음속 결론이 굳어질 수 있습니다. 확인되지 않은 추측은 질문으로 풀어야 관계가 편해집니다.' }
                    ],
                    action: '오늘은 궁금했던 일 하나를 혼자 결론 내리지 말고 직접 물어보세요. 짧은 확인이 긴 고민을 줄여줍니다.'
                },
                {
                    title: '호랑이를 고른 카리스마형 리더',
                    summary: '당신은 에너지가 강하고 목표가 생기면 빠르게 움직이는 타입입니다. 자신의 영역을 지키려는 책임감과 추진력이 뚜렷합니다.',
                    sections: [
                        { title: '핵심 성향', text: '위축되기보다 부딪히며 길을 찾는 편입니다. 사람들을 이끌거나 분위기를 전환하는 힘이 있고, 필요한 순간에는 결정을 미루지 않습니다.' },
                        { title: '사회적 성향', text: '관계에서는 솔직함과 의리를 중요하게 봅니다. 나를 믿고 따라오는 사람에게는 강한 보호 본능을 보이지만, 불명확한 태도에는 답답함을 느낄 수 있습니다.' },
                        { title: '주의할 점', text: '강한 표현이 상대에게는 압박으로 느껴질 수 있습니다. 리더십이 더 오래 가려면 지시보다 설명, 속도보다 합의가 필요할 때가 있습니다.' }
                    ],
                    action: '오늘은 밀어붙이고 싶은 일 하나를 정하되, 함께하는 사람에게 이유와 기준을 먼저 설명해보세요. 추진력이 신뢰로 바뀝니다.'
                }
            ]
        };

        return data[type][choice - 1];
    }
}

class MBTIManager {
    constructor() {
        this.grid = document.getElementById('mbti-type-grid');
        this.detail = document.getElementById('mbti-detail');
        this.types = ['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP','ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP'];
        this.names = {
            INTJ: '전략가', INTP: '논리술사', ENTJ: '통솔자', ENTP: '변론가',
            INFJ: '옹호자', INFP: '중재자', ENFJ: '선도자', ENFP: '활동가',
            ISTJ: '현실주의자', ISFJ: '수호자', ESTJ: '경영자', ESFJ: '집정관',
            ISTP: '장인', ISFP: '모험가', ESTP: '사업가', ESFP: '연예인'
        };
        this.init();
    }

    init() {
        if (!this.grid || !this.detail) return;
        this.grid.innerHTML = this.types.map((type, index) => `
            <button type="button" class="mbti-type-btn ${index === 0 ? 'active' : ''}" data-mbti="${type}">
                <strong>${type}</strong>
                <span>${this.names[type]}</span>
            </button>
        `).join('');
        this.grid.querySelectorAll('.mbti-type-btn').forEach(button => {
            button.addEventListener('click', () => this.show(button.dataset.mbti));
        });
        this.show('INTJ');
    }

    show(type) {
        const data = this.readType(type);
        this.grid.querySelectorAll('.mbti-type-btn').forEach(button => {
            button.classList.toggle('active', button.dataset.mbti === type);
        });
        this.detail.innerHTML = `
            <div class="mbti-detail-head">
                <div><span class="mbti-code">${type}</span><h3>${this.names[type]}</h3></div>
                <p>${data.summary}</p>
            </div>
            <div class="mbti-expert-note">
                <strong>MBTI 상세 해설</strong>
                <p>${data.note}</p>
            </div>
            <div class="mbti-info-grid">
                ${this.renderBlock('핵심 성향', data.traits)}
                ${this.renderBlock('관계 방식', data.relationship)}
                ${this.renderBlock('연애 스타일', data.love)}
                ${this.renderBlock('잘 맞는 궁합', data.best)}
                ${this.renderBlock('주의할 궁합', data.caution)}
                ${this.renderBlock('성장 팁', data.growth)}
            </div>
        `;
        this.detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    renderBlock(title, text) {
        return `<article class="mbti-info-card"><h4>${title}</h4><p>${text}</p></article>`;
    }

    readType(type) {
        const intro = type[0] === 'E' ? '사람과 환경을 직접 만나며 에너지가 살아나는' : '혼자 생각을 정리할 때 에너지가 회복되는';
        const info = type[1] === 'N' ? '가능성과 의미를 먼저 보는' : '현실의 단서와 경험을 중요하게 보는';
        const decision = type[2] === 'T' ? '논리와 기준으로 판단하는' : '감정과 관계의 온도를 함께 살피는';
        const rhythm = type[3] === 'J' ? '계획과 마감이 있을 때 안정되는' : '선택지를 열어둘 때 유연해지는';
        const best = type[0] === 'I' ? '표현이 자연스럽고 시야를 넓혀주는 E 유형과 보완이 좋습니다.' : '깊이와 안정감을 주는 I 유형과 균형이 좋습니다.';
        const caution = type[3] === 'J' ? '즉흥적인 P 유형과는 일정과 약속 기준을 맞춰야 합니다.' : '계획을 중시하는 J 유형과는 자유와 책임의 기준을 조율해야 합니다.';
        return {
            summary: `${this.names[type]} 유형은 ${intro} 사람이며, ${info} 성향이 강합니다.`,
            note: `${type}는 ${intro} 방식으로 컨디션을 회복하고, 중요한 순간에는 ${decision} 경향이 두드러집니다. 또한 ${rhythm} 편이므로, 나에게 맞는 관계의 속도와 일의 방식을 찾는 기준으로 읽으면 좋습니다.`,
            traits: `${info} 편이라 같은 상황에서도 남들이 놓치는 맥락을 잘 포착합니다. 다만 강점이 과해지면 반대 성향의 사람을 답답하게 느낄 수 있습니다.`,
            relationship: `관계에서는 ${type[0] === 'E' ? '대화를 통해 마음을 정리하는 편' : '충분히 생각한 뒤 마음을 여는 편'}입니다. 상대가 이 속도를 존중할 때 편안함이 커집니다.`,
            love: `${type[2] === 'F' ? '정서적 안전감과 진심 어린 표현' : '신뢰, 존중, 일관된 태도'}가 중요합니다. 억지로 맞추는 관계보다 서로의 방식을 설명할 수 있는 관계가 오래 갑니다.`,
            best,
            caution,
            growth: `${type[3] === 'J' ? '계획을 세우되 변수가 생겼을 때 조정할 여지를 남기면 좋습니다.' : '자유롭게 움직이되 마감과 약속을 작게 정하면 성과가 더 안정됩니다.'}`
        };
    }
}

class LottoBall extends HTMLElement {
    constructor() { super(); this.attachShadow({ mode: 'open' }); }
    connectedCallback() { this.render(); }
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
const mbtiManager = new MBTIManager();

document.getElementById('generate-btn').addEventListener('click', () => {
    const container = document.getElementById('lotto-balls-container');
    container.innerHTML = '';
    for (let setIndex = 1; setIndex <= 5; setIndex++) {
        const setRow = document.createElement('div');
        setRow.className = 'lotto-row';
        const label = document.createElement('span');
        label.className = 'lotto-set-label';
        label.textContent = `${setIndex}세트`;
        setRow.appendChild(label);

        const balls = document.createElement('div');
        balls.className = 'lotto-ball-line';
        const numbers = new Set();
        while (numbers.size < 6) numbers.add(Math.floor(Math.random() * 45) + 1);
        Array.from(numbers).sort((a, b) => a - b).forEach(number => {
            const ball = document.createElement('lotto-ball');
            ball.setAttribute('number', number);
            balls.appendChild(ball);
        });
        setRow.appendChild(balls);
        container.appendChild(setRow);
    }
});

const themeBtn = document.getElementById('theme-btn');
let currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
themeBtn.textContent = currentTheme === 'light' ? '다크 모드' : '라이트 모드';

themeBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    themeBtn.textContent = currentTheme === 'light' ? '다크 모드' : '라이트 모드';
});
