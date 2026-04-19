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
        const results = {
            ocean: [
                lang==='ko'?"평화와 안정을 중시하는 타입입니다. 갈등이 적고 명확하고 안정적인 커리어 경로를 선호합니다. 주변 사람들과 조화를 이루며 꾸준히 성장하는 것에 큰 가치를 둡니다. 당신의 내면은 고요한 바다처럼 깊고 따뜻한 에너지를 품고 있습니다.":"Values stability and harmony, prefers steady growth. Your inner self holds deep and warm energy like a calm sea.",
                lang==='ko'?"도전을 즐기고 개척 정신이 강한 모험가입니다. 위험이 따르더라도 큰 보상이 있는 환경에서 능력을 발휘합니다. 남들이 가지 않은 길을 개척하며 자신의 존재감을 증명하고 싶어 합니다. 웅장한 절벽처럼 강인한 의지를 지닌 사람입니다.":"An adventurer with a strong pioneering spirit. You excel in high-reward environments and possess strong will like a grand cliff."
            ],
            forest: [
                lang==='ko'?"지혜롭고 신중하며 신뢰를 주는 타입입니다. 사람들은 당신의 묵직한 존재감과 장기적인 시야에 의지합니다. 어떤 상황에서도 흔들리지 않는 뿌리 깊은 가치관을 가지고 있습니다. 거대한 고목처럼 든든한 버팀목이 되어주는 존재입니다.":"Wise and cautious, someone people lean on. You have deep-rooted values and act as a reliable support like a giant ancient tree.",
                lang==='ko'?"감수성이 풍부하고 내면 세계가 깊은 타입입니다. 직관력이 뛰어나며 자기 성찰을 중요하게 생각합니다. 눈에 보이는 것 너머의 본질을 꿰뚫어 보는 통찰력을 지녔습니다. 맑은 연못처럼 투명하고 순수한 영혼을 가진 예술가 기질이 있습니다.":"Highly intuitive with deep inner insight. You value self-reflection and possess an artist's soul, pure and transparent like a clear pond."
            ],
            door: [
                lang==='ko'?"전통적인 가치와 경험을 중요하게 생각합니다. 갑작스러운 변화보다는 익숙함 속에서 안정을 찾으며, 과거의 교훈을 미래의 자산으로 삼을 줄 아는 지혜로운 사람입니다. 나무 문처럼 따뜻하고 편안한 분위기를 풍깁니다.":"Values traditional values and experiences. You find stability in familiarity and use past lessons as future assets, emitting a warm vibe like a wooden door.",
                lang==='ko'?"새로운 변화와 사회적 성공에 대한 열망이 큽니다. 자신을 화려하게 가꾸는 것을 즐기며, 목표를 향해 당당하게 나아가는 추진력이 돋보입니다. 화려한 금속 문처럼 세련되고 현대적인 감각을 지녔습니다.":"Strong desire for change and social success. You have the drive to move boldly toward your goals with a sophisticated and modern sense like an ornate metal door.",
                lang==='ko'?"자신만의 독창적인 길을 가고자 하는 예술가 기질이 있습니다. 남들의 시선보다는 내면의 목소리에 집중하며, 비밀스럽고 신비로운 매력을 지닌 사람입니다. 석문처럼 단단하고 묵직한 신념을 가지고 있습니다.":"An artistic spirit seeking a unique path. You focus on your inner voice rather than others' opinions, possessing a mysterious charm and solid beliefs like a stone door."
            ],
            oasis: [
                lang==='ko'?"문제가 생기면 즉각적으로 해결하는 실천가입니다. 위기 상황에서 본능적으로 가장 필요한 것을 파악하며, 군더더기 없는 빠른 의사결정이 장점입니다. 오아시스의 물처럼 생명력 넘치고 활기찬 에너지를 가지고 있습니다.":"A doer who solves problems immediately. You instinctively identify needs in crises and excel in quick decision-making, full of life like oasis water.",
                lang==='ko'?"멀리 내다보고 에너지를 비축하는 전략가입니다. 당장의 갈증 해결보다 지속 가능한 안정을 먼저 생각하며, 신중하게 상황을 분석한 뒤 움직이는 타입입니다. 오아시스의 그늘처럼 사람들에게 휴식을 주는 편안한 사람입니다.":"A strategist who saves energy and looks ahead. You prioritize sustainable stability over immediate needs, providing comfort to others like the shade of an oasis."
            ],
            animal: [
                lang==='ko'?"지식과 배움을 즐기며 차분하게 상황을 분석합니다. 혼자만의 시간을 통해 통찰력을 얻으며, 남들이 보지 못하는 어둠 속의 진실을 찾아내는 능력이 탁월합니다. 부엉이처럼 영리하고 객관적인 시각을 유지합니다.":"Enjoys knowledge and learning, analyzing situations calmly. You gain insight through solitude and excel at finding hidden truths, clever like an owl.",
                lang==='ko'?"에너지가 넘치고 리더십이 뛰어나 집단을 이끕니다. 자신의 영역을 보호하려는 책임감이 강하며, 목표가 정해지면 거침없이 달려가는 용맹함을 가졌습니다. 호랑이처럼 위엄 있고 강렬한 카리스마를 내뿜습니다.":"Full of energy with excellent leadership. You have a strong sense of responsibility and the bravery to pursue goals relentlessly, majestic like a tiger."
            ]
        };

        const resultSvg = SVG_ASSETS[type][choice-1];
        this.content.innerHTML = `
            <h3>${lang==='ko'?'분석 결과':'Analysis Result'}</h3>
            <div class="result-illustration">${resultSvg}</div>
            <p class="test-result-text">${results[type][choice-1]}</p>
            <button onclick="psycheTest.modal.classList.add('hidden')" style="margin-top:20px;">${lang==='ko'?'닫기':'Close'}</button>
        `;
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
