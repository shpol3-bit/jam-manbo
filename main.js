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
            window.dispatchEvent(new CustomEvent('languagechange'));
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
    const target = document.getElementById(`view-${viewId}`);
    if (!target) return;
    target.classList.add('active');
    window.scrollTo(0, 0);
}

class FortuneManager {
    constructor() {
        this.form = document.getElementById('fortune-form');
        this.resultsContainer = document.getElementById('fortune-results');
        this.yearSelect = document.getElementById('birth-year');
        this.monthSelect = document.getElementById('birth-month');
        this.daySelect = document.getElementById('birth-day');
        this.meridiemSelect = document.getElementById('birth-meridiem');
        this.hourSelect = document.getElementById('birth-hour');
        this.minuteSelect = document.getElementById('birth-minute');
        this.currentReport = null;
        this.init();
    }

    init() {
        this.populateBirthControls();
        [this.yearSelect, this.monthSelect].forEach(select => {
            if (select) select.addEventListener('change', () => this.populateDays());
        });
        window.addEventListener('languagechange', () => {
            this.populateBirthControls(true);
            if (this.currentReport) {
                const birthInfo = this.getBirthInfo();
                if (birthInfo) {
                    this.currentReport = this.calculate(birthInfo);
                    this.displayResults(this.currentReport);
                }
            }
        });
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

    populateBirthControls(keepValues = false) {
        if (!this.yearSelect || !this.monthSelect || !this.daySelect) return;
        const lang = document.documentElement.lang || 'ko';
        const previous = {
            year: this.yearSelect.value,
            month: this.monthSelect.value,
            day: this.daySelect.value,
            meridiem: this.meridiemSelect.value,
            hour: this.hourSelect.value,
            minute: this.minuteSelect.value
        };

        this.yearSelect.innerHTML = `<option value="">${lang === 'ko' ? '연도' : 'Year'}</option>`;
        for (let year = new Date().getFullYear(); year >= 1930; year--) {
            this.yearSelect.insertAdjacentHTML('beforeend', `<option value="${year}">${year}${lang === 'ko' ? '년' : ''}</option>`);
        }
        this.monthSelect.innerHTML = `<option value="">${lang === 'ko' ? '월' : 'Month'}</option>`;
        for (let month = 1; month <= 12; month++) {
            this.monthSelect.insertAdjacentHTML('beforeend', `<option value="${month}">${month}${lang === 'ko' ? '월' : ''}</option>`);
        }
        this.meridiemSelect.innerHTML = `
            <option value="am">${lang === 'ko' ? '오전' : 'AM'}</option>
            <option value="pm">${lang === 'ko' ? '오후' : 'PM'}</option>
        `;
        this.hourSelect.innerHTML = '';
        for (let hour = 1; hour <= 12; hour++) {
            this.hourSelect.insertAdjacentHTML('beforeend', `<option value="${hour}">${hour}${lang === 'ko' ? '시' : ''}</option>`);
        }
        this.minuteSelect.innerHTML = '';
        for (let minute = 0; minute < 60; minute += 10) {
            const padded = String(minute).padStart(2, '0');
            this.minuteSelect.insertAdjacentHTML('beforeend', `<option value="${minute}">${padded}${lang === 'ko' ? '분' : ''}</option>`);
        }

        if (keepValues && previous.year) {
            this.yearSelect.value = previous.year;
            this.monthSelect.value = previous.month;
            this.populateDays(previous.day);
            this.meridiemSelect.value = previous.meridiem;
            this.hourSelect.value = previous.hour;
            this.minuteSelect.value = previous.minute;
        } else {
            this.yearSelect.value = '1990';
            this.monthSelect.value = '1';
            this.populateDays('1');
            this.meridiemSelect.value = 'am';
            this.hourSelect.value = '9';
            this.minuteSelect.value = '0';
        }
    }

    populateDays(preferredDay) {
        if (!this.daySelect) return;
        const lang = document.documentElement.lang || 'ko';
        const year = parseInt(this.yearSelect.value, 10) || new Date().getFullYear();
        const month = parseInt(this.monthSelect.value, 10) || 1;
        const previousDay = preferredDay || this.daySelect.value || '1';
        const lastDay = new Date(year, month, 0).getDate();
        this.daySelect.innerHTML = `<option value="">${lang === 'ko' ? '일' : 'Day'}</option>`;
        for (let day = 1; day <= lastDay; day++) {
            this.daySelect.insertAdjacentHTML('beforeend', `<option value="${day}">${day}${lang === 'ko' ? '일' : ''}</option>`);
        }
        this.daySelect.value = String(Math.min(parseInt(previousDay, 10) || 1, lastDay));
    }

    getBirthInfo() {
        const year = parseInt(this.yearSelect.value, 10);
        const month = parseInt(this.monthSelect.value, 10);
        const day = parseInt(this.daySelect.value, 10);
        if (!year || !month || !day) return null;
        const meridiem = this.meridiemSelect.value;
        const hour12 = parseInt(this.hourSelect.value, 10) || 12;
        const minute = parseInt(this.minuteSelect.value, 10) || 0;
        let hour = hour12 % 12;
        if (meridiem === 'pm') hour += 12;
        return { year, month, day, hour, minute };
    }

    generateFortune() {
        const birthInfo = this.getBirthInfo();
        if (!birthInfo) {
            alert(document.documentElement.lang === 'ko' ? '출생 정보를 모두 선택해주세요.' : 'Please select all birth information.');
            return;
        }
        this.currentReport = this.calculate(birthInfo);
        this.displayResults(this.currentReport);
    }

    generateCompatibility() {
        if (!this.currentReport) {
            alert(document.documentElement.lang === 'ko' ? '내 사주를 먼저 확인해주세요.' : 'Please check your Saju first.');
            return;
        }
        const type = document.getElementById('compatibility-type').value;
        const relation = document.getElementById('compatibility-relation').value;
        const results = document.getElementById('compatibility-results');
        const lang = document.documentElement.lang || 'ko';
        
        const typeNames = {
            wood: { ko: '성장형(목)', en: 'Growth(Wood)' },
            fire: { ko: '표현형(화)', en: 'Expressive(Fire)' },
            earth: { ko: '안정형(토)', en: 'Stable(Earth)' },
            metal: { ko: '원칙형(금)', en: 'Principled(Metal)' },
            water: { ko: '공감형(수)', en: 'Empathetic(Water)' }
        };
        
        const scores = { wood: 85, fire: 70, earth: 95, metal: 60, water: 80 };
        const score = scores[type] || 75;
        
        results.innerHTML = `
            <h3>${lang === 'ko' ? '궁합 분석 결과' : 'Compatibility Result'}</h3>
            <div class="compatibility-score">
                <strong>${score}점</strong>
                <p>${lang === 'ko' ? `상대방은 ${typeNames[type].ko} 기질을 가졌으며, 귀하와는 ${score > 80 ? '매우 조화로운' : '서로 보완이 필요한'} 관계입니다.` : `Partner has ${typeNames[type].en} traits, showing a ${score > 80 ? 'highly harmonious' : 'complementary'} relationship.`}</p>
            </div>
            <p>${lang === 'ko' ? '서로의 다름을 인정할 때 관계의 운이 더욱 상승합니다. 상대의 장점을 먼저 바라보는 하루가 되시길 바랍니다.' : 'Embracing differences will improve your relationship luck. Try to focus on their strengths today.'}</p>
        `;
        results.classList.remove('hidden');
        results.scrollIntoView({ behavior: 'smooth' });
    }

    calculate(birthInfo) {
        const { year, month, day, hour, minute } = birthInfo;
        const lang = document.documentElement.lang || 'ko';
        const stems = [
            { ko: '갑', en: 'Gap', element: 'wood' }, { ko: '을', en: 'Eul', element: 'wood' },
            { ko: '병', en: 'Byeong', element: 'fire' }, { ko: '정', en: 'Jeong', element: 'fire' },
            { ko: '무', en: 'Mu', element: 'earth' }, { ko: '기', en: 'Gi', element: 'earth' },
            { ko: '경', en: 'Gyeong', element: 'metal' }, { ko: '신', en: 'Sin', element: 'metal' },
            { ko: '임', en: 'Im', element: 'water' }, { ko: '계', en: 'Gye', element: 'water' }
        ];
        const branches = [
            { ko: '자', en: 'Ja', element: 'water' }, { ko: '축', en: 'Chuk', element: 'earth' },
            { ko: '인', en: 'In', element: 'wood' }, { ko: '묘', en: 'Myo', element: 'wood' },
            { ko: '진', en: 'Jin', element: 'earth' }, { ko: '사', en: 'Sa', element: 'fire' },
            { ko: '오', en: 'O', element: 'fire' }, { ko: '미', en: 'Mi', element: 'earth' },
            { ko: '신', en: 'Sin', element: 'metal' }, { ko: '유', en: 'Yu', element: 'metal' },
            { ko: '술', en: 'Sul', element: 'earth' }, { ko: '해', en: 'Hae', element: 'water' }
        ];
        const elementNames = {
            wood: lang === 'ko' ? '목(木)' : 'Wood',
            fire: lang === 'ko' ? '화(火)' : 'Fire',
            earth: lang === 'ko' ? '토(土)' : 'Earth',
            metal: lang === 'ko' ? '금(金)' : 'Metal',
            water: lang === 'ko' ? '수(水)' : 'Water'
        };
        const elementTone = {
            wood: '성장, 기획, 배움, 확장',
            fire: '표현, 열정, 매력, 추진',
            earth: '안정, 책임, 현실감, 축적',
            metal: '원칙, 판단, 정리, 결단',
            water: '직관, 지혜, 유연함, 회복'
        };
        const mod = (num, base) => ((num % base) + base) % base;
        const seed = year * 10000 + month * 100 + day + hour + minute;
        const yearStem = stems[mod(year - 4, 10)];
        const yearBranch = branches[mod(year - 4, 12)];
        const monthStem = stems[mod(year * 12 + month + 3, 10)];
        const monthBranch = branches[mod(month + 1, 12)];
        const dayIndex = Math.floor(new Date(year, month - 1, day).getTime() / 86400000);
        const dayStem = stems[mod(dayIndex + 4, 10)];
        const dayBranch = branches[mod(dayIndex + 2, 12)];
        const hourStem = stems[mod(dayIndex * 12 + Math.floor(hour / 2), 10)];
        const hourBranch = branches[mod(Math.floor((hour + 1) / 2), 12)];
        const pillars = [
            { label: lang === 'ko' ? '년주' : 'Year', stem: yearStem, branch: yearBranch },
            { label: lang === 'ko' ? '월주' : 'Month', stem: monthStem, branch: monthBranch },
            { label: lang === 'ko' ? '일주' : 'Day', stem: dayStem, branch: dayBranch },
            { label: lang === 'ko' ? '시주' : 'Hour', stem: hourStem, branch: hourBranch }
        ];
        const scores = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
        pillars.forEach(pillar => {
            scores[pillar.stem.element] += 1.2;
            scores[pillar.branch.element] += 1;
        });
        const elements = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
        const mainElement = elements[0];
        const supportElement = elements[1];
        const weakElement = elements[elements.length - 1];
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        const todayStem = stems[mod(Math.floor(now.getTime() / 86400000) + 4, 10)];
        const yearFlow = stems[mod(currentYear - 4, 10)];
        const formatPillar = pillar => `${pillar.stem.ko}${pillar.branch.ko}`;
        const birthLabel = `${year}년 ${month}월 ${day}일 ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

        if (lang !== 'ko') {
            return {
                birthLabel,
                scores,
                categories: [
                    { id: 'saju', title: 'Birth Chart', summary: 'A concise reading of your four pillars.', highlights: [`Main: ${elementNames[mainElement]}`, `Support: ${elementNames[supportElement]}`], paragraphs: ['This reading is optimized for Korean content. Switch to Korean for the full detailed interpretation.'] }
                ]
            };
        }

        const makeCategory = (id, title, summary, highlights, paragraphs, checklist) => ({ id, title, summary, highlights, paragraphs, checklist });
        return {
            birthLabel,
            scores,
            categories: [
                makeCategory('saju', '사주 원국', `${formatPillar(pillars[0])}·${formatPillar(pillars[1])}·${formatPillar(pillars[2])}·${formatPillar(pillars[3])} 흐름으로 봅니다.`, [`중심 기운: ${elementNames[mainElement]}`, `보조 기운: ${elementNames[supportElement]}`, `보완 기운: ${elementNames[weakElement]}`], [
                    `입력한 출생 정보는 ${birthLabel}입니다. 간이 만세력 기준으로 년주는 ${formatPillar(pillars[0])}, 월주는 ${formatPillar(pillars[1])}, 일주는 ${formatPillar(pillars[2])}, 시주는 ${formatPillar(pillars[3])}로 읽습니다. 년주는 성장 배경, 월주는 사회적 역할, 일주는 중심 기질, 시주는 내면과 후반 흐름을 보여줍니다.`,
                    `이 사주는 ${elementNames[mainElement]} 기운이 가장 뚜렷하고 ${elementNames[supportElement]} 기운이 보조합니다. 강한 기운은 재능이 빨리 드러나는 통로이지만 과하면 고집이나 피로로 나타날 수 있습니다.`,
                    `${elementNames[weakElement]} 기운은 의식적으로 보완할수록 전체 균형이 좋아지는 지점입니다. 부족함을 약점으로 보기보다 삶의 균형을 회복하는 방향으로 활용하는 것이 좋습니다.`
                ], ['원국은 고정된 운명보다 타고난 반응 패턴을 보는 지도입니다.', '강한 기운은 잘 쓰고, 약한 기운은 습관으로 보완하세요.']),
                makeCategory('yearly', `${currentYear}년 올해의 사주`, `${currentYear}년은 ${yearFlow.ko} 기운이 들어와 생활 구조와 목표를 다시 세우는 운입니다.`, [`올해 기운: ${elementNames[yearFlow.element]}`, seed % 2 === 0 ? '키워드: 정리와 축적' : '키워드: 확장과 선택', `보완: ${elementNames[weakElement]}`], [
                    `올해는 한 번에 모든 것을 바꾸는 해라기보다, 이미 쌓아온 것 중 남길 것과 내려놓을 것을 구분하는 시기입니다. 일, 관계, 돈의 우선순위를 다시 세울수록 운의 체감이 좋아집니다.`,
                    `특히 ${elementNames[mainElement]} 성향이 강하게 작동하므로 마음이 꽂힌 일에는 집중력이 좋습니다. 다만 모든 일을 동시에 끌고 가면 운이 분산되므로 목표는 세 개 이하로 줄이는 편이 좋습니다.`,
                    `상반기에는 기반 정비와 관계 조율, 하반기에는 결과물 공개와 수익화 흐름이 좋습니다. 공부, 자격, 포트폴리오, 생활 습관 개선은 올해 안에 형태를 만드는 것이 유리합니다.`
                ], ['좋은 선택: 장기 계획, 기록, 고정비 정리, 루틴 만들기', '주의 선택: 감정적 퇴사/이별/투자, 검증 없는 동업']),
                makeCategory('monthly', `${currentMonth}월 한달 운세`, `이번 달은 실행보다 조율의 질이 중요한 달입니다.`, [`이번 달 흐름: ${currentMonth % 2 === 0 ? '관계 정리' : '기회 탐색'}`, `주의: ${elementNames[weakElement]} 부족`, '핵심: 일정과 지출 점검'], [
                    `이번 달은 눈에 보이는 성과보다 다음 단계로 넘어가기 전 빈틈을 메우는 운이 강합니다. 일정표, 지출표, 연락해야 할 사람 목록을 정리하는 것만으로도 흐름이 안정됩니다.`,
                    `일에서는 기존 업무의 문제점을 개선하거나 진행 중인 프로젝트를 더 설득력 있게 다듬는 데 유리합니다. 새로운 시작은 가능하지만 작은 테스트를 먼저 해보는 편이 좋습니다.`,
                    `관계에서는 서운함이 누적된 사람과 대화가 필요할 수 있습니다. 감정의 옳고 그름보다 앞으로 어떤 방식으로 지낼지 합의하는 것이 훨씬 유리합니다.`
                ], ['월말 전 점검: 고정비, 건강 루틴, 중요한 연락 3개', '조심할 점: 급한 구매, 말로만 정한 약속']),
                makeCategory('daily', '오늘 하루 운세', `오늘은 ${todayStem.ko} 기운으로 작고 정확한 선택이 운을 살립니다.`, [`오늘 기운: ${elementNames[todayStem.element]}`, seed % 3 === 0 ? '좋은 시간: 오전' : seed % 3 === 1 ? '좋은 시간: 오후' : '좋은 시간: 저녁', '핵심: 속도보다 정확도'], [
                    `오늘은 큰 결정보다 이미 정해진 일을 정확히 처리할수록 좋습니다. 연락, 결제, 예약, 제출처럼 작은 실수가 커질 수 있는 영역을 먼저 확인하세요.`,
                    `주변 요청이 늘어날 수 있으니 바로 답하기보다 지금 처리할 일과 나중에 답할 일을 구분하는 것이 좋습니다. 오늘은 빠른 답보다 정확한 답이 더 좋은 운을 부릅니다.`,
                    `짧은 정리가 행운 행동입니다. 지갑, 휴대폰 사진, 메모장, 책상 중 하나만 비워도 머릿속이 정돈되고 판단이 빨라집니다.`
                ], ['하면 좋은 일: 밀린 답장, 일정 확인, 짧은 산책', '미루면 좋은 일: 충동구매, 감정적 통보']),
                makeCategory('loveToday', '오늘의 연애운', seed % 2 === 0 ? '말보다 태도가 더 크게 전달되는 날입니다.' : '가벼운 대화에서 호감의 실마리가 생기는 날입니다.', ['연애 키워드: 부드러운 표현', '좋은 방식: 짧고 따뜻하게', '주의: 떠보기 금지'], [
                    `오늘은 거창한 고백보다 상대가 신경 쓰던 작은 부분을 알아차리는 태도가 더 강하게 작용합니다. 연인이 있다면 피로를 덜어주는 말 한마디가 관계 온도를 올립니다.`,
                    `싱글이라면 부담 없는 안부나 취향을 묻는 대화가 흐름을 바꿀 수 있습니다. 완벽한 타이밍을 기다리기보다 짧고 진심 있는 표현이 좋습니다.`,
                    `주의할 점은 상대의 반응을 시험하는 말입니다. 원하는 것이 있으면 돌려 말하지 말고 부드럽게 직접 표현하는 편이 관계운을 살립니다.`
                ], ['커플: 고마웠던 점 하나를 구체적으로 말하기', '싱글: 취향이나 근황을 묻는 짧은 연락']),
                makeCategory('loveMonth', '이번 달 연애운', '관계의 속도보다 안정감과 반복되는 배려가 중요한 달입니다.', [currentMonth % 2 === 0 ? '관계 정돈' : '새 인연 탐색', '매력 포인트: 진정성', '주의: 과해석'], [
                    `이번 달 연애운은 빠른 진전보다 신뢰 확인에 초점이 있습니다. 상대가 어떤 말을 하는지보다 약속을 어떻게 지키는지, 바쁠 때 어떤 태도를 보이는지를 보세요.`,
                    `커플이라면 연락 빈도, 데이트 방식, 돈 쓰는 방식처럼 현실적인 부분을 편하게 이야기하면 관계가 안정됩니다. 싱글이라면 반복해서 만나는 자리에서 인연운이 열립니다.`,
                    `감정 기복을 상대의 문제로만 돌리지 않는 것이 중요합니다. 잠과 식사 리듬을 먼저 챙길수록 관계 판단도 차분해집니다.`
                ], ['좋은 만남: 차분하고 약속을 지키는 사람', '피할 흐름: 빠른 확신 요구, 비교, SNS 과몰입']),
                makeCategory('moneyMonth', '이번 달 금전운', seed % 2 === 0 ? '새로 벌기보다 새는 돈을 막으면 좋아지는 달입니다.' : '작은 부수입과 제안이 들어올 수 있는 달입니다.', [seed % 2 === 0 ? '재물 흐름: 방어' : '재물 흐름: 기회', '핵심: 숫자 확인', '주의: 감정 소비'], [
                    seed % 2 === 0 ? `이번 달은 공격적으로 돈을 불리기보다 지출 구조를 다듬는 것이 우선입니다. 구독, 보험, 통신비, 식비처럼 반복 지출을 점검하면 예상보다 큰 여유가 생깁니다.` : `이번 달은 작은 제안, 부업, 중고거래, 프로젝트성 수익처럼 예상 밖의 돈 흐름이 생길 수 있습니다. 다만 기회가 들어올수록 조건 확인이 중요합니다.`,
                    `특히 "지금 아니면 안 된다"는 식의 제안은 하루 이상 시간을 두고 검토하세요. 좋은 기회는 검토 시간을 줘도 쉽게 사라지지 않습니다.`,
                    `금전운을 올리는 실천은 수입보다 기록입니다. 하루 지출을 세 줄만 기록해도 소비 패턴이 보이고 다음 달 운을 받을 기반이 생깁니다.`
                ], ['좋은 선택: 자동이체 정리, 계약서 확인, 목적별 통장 분리', '주의 선택: 즉흥 투자, 체면 지출']),
                makeCategory('personality', '성향과 강점', `${elementTone[mainElement]}이 성격의 중심축입니다.`, [`강한 ${elementNames[mainElement]} 타입`, `일간: ${dayStem.ko}`, `보완: ${elementNames[weakElement]}`], [
                    `${elementNames[mainElement]}이 강한 사람은 ${elementTone[mainElement]} 성향이 뚜렷합니다. 첫인상보다 시간이 지날수록 실력이 드러나는 편이며, 책임진 영역에서는 쉽게 손을 놓지 않습니다.`,
                    `${elementNames[supportElement]}이 보조하기 때문에 생각만 하고 멈추기보다 실제 행동으로 옮기는 힘도 있습니다. 다만 결정이 빨라질수록 과정 설명을 놓치기 쉬우니 중요한 대화에서는 이유를 함께 말하는 것이 좋습니다.`,
                    `약한 ${elementNames[weakElement]} 기운은 삶의 균형을 잡는 힌트입니다. 평소 회피하던 방식의 공부, 낯선 장소, 다른 사람과의 대화를 조금씩 경험해보세요.`
                ], ['강점은 오래 신뢰를 쌓는 환경에서 빛납니다.', '보완점은 매일의 선택 패턴을 조정하며 채워집니다.']),
                makeCategory('career', '일과 재능', '성과가 나는 방식과 피해야 할 업무 리듬을 봅니다.', ['강점: 구조화', '성과 방식: 반복 개선', '주의: 과책임'], [
                    `이 사주는 혼자 몰입하는 시간과 사람 사이에서 조율하는 시간이 모두 필요합니다. 월주의 ${formatPillar(pillars[1])} 흐름은 사회적 역할에서 책임감이 커지는 구조를 보여줍니다.`,
                    `기획, 운영, 분석, 교육, 상담, 콘텐츠, 관리 업무처럼 경험이 쌓일수록 깊이가 생기는 분야에서 안정적인 성취가 가능합니다.`,
                    `주의할 점은 모든 문제를 혼자 떠안는 습관입니다. 역할 범위를 문서화하고 거절해야 할 일과 위임할 일을 구분하면 커리어 운이 부드럽게 풀립니다.`
                ], ['올해 커리어 과제: 대표 성과 3개 정리', '피할 흐름: 책임만 늘고 권한은 없는 제안']),
                makeCategory('health', '건강·컨디션운', '몸의 신호를 늦게 알아차리기 쉬워 루틴 관리가 중요합니다.', ['관리 포인트: 수면', '주의 포인트: 누적 피로', `보완 기운: ${elementNames[weakElement]}`], [
                    `정신적으로 버티는 힘이 있는 편이라 피곤해도 계속 밀고 가는 경향이 있습니다. 피로가 쌓이면 판단이 예민해지고 관계나 돈 문제도 실제보다 크게 느껴질 수 있습니다.`,
                    `거창한 운동보다 같은 시간에 자고 일어나기, 물 마시기, 짧은 산책, 스마트폰을 내려놓는 시간이 더 도움이 됩니다.`,
                    `몸이 편해지면 올해의 기회도 더 안정적으로 받아낼 수 있습니다. 운을 좋게 쓰려면 회복 루틴을 먼저 챙기는 것이 좋습니다.`
                ], ['이번 주 실천: 잠드는 시간 30분 앞당기기', '주의: 피곤할 때 큰돈 결정 금지']),
                makeCategory('compatibility', '궁합·잘 맞는 사람', '나를 재촉하기보다 리듬을 존중하는 사람과 오래 갑니다.', [`잘 맞는 기운: ${elementNames[supportElement]}`, '관계 핵심: 신뢰', '주의: 말보다 행동'], [
                    `잘 맞는 사람은 감정 표현만 화려한 사람보다 생활에서 신뢰를 보여주는 사람입니다. 약속을 지키고 바쁠 때도 최소한의 설명을 해주는 사람이 좋습니다.`,
                    `${elementNames[supportElement]} 기운이 있는 사람은 당신의 장점을 자연스럽게 살려줍니다. 함께 있을 때 생각이 정리되고 무리하지 않아도 대화가 이어진다면 좋은 궁합으로 볼 수 있습니다.`,
                    `반대로 급하게 확답을 요구하거나 불안을 자극하는 사람과는 피로가 커집니다. 초반의 강렬함보다 장기적인 편안함을 기준으로 보세요.`
                ], ['좋은 신호: 말과 행동이 일치함', '궁합 질문: 이 사람과 있으면 내 생활이 좋아지는가']),
                makeCategory('lucky', '행운 포인트와 주의일', '행운은 큰 사건보다 반복되는 작은 선택에서 강해집니다.', [`행운 색감: ${mainElement === 'wood' ? '초록' : mainElement === 'fire' ? '붉은색' : mainElement === 'earth' ? '노란색' : mainElement === 'metal' ? '흰색' : '남색'}`, `좋은 방향: ${['동쪽', '남쪽', '서쪽', '북쪽'][seed % 4]}`, `주의일: 매월 ${((day + 7) % 28) + 1}일 전후`], [
                    `행운 포인트는 강한 기운을 더 강하게 만드는 것보다 부족한 기운을 부드럽게 보완하는 데 있습니다. 색상이나 방향은 마음가짐을 바꾸는 장치로 활용하세요.`,
                    `매월 ${((day + 7) % 28) + 1}일 전후에는 피로와 감정 반응이 커질 수 있으니 큰 결정보다 점검에 쓰는 편이 좋습니다.`,
                    `중요한 날에는 오전에 가장 어려운 일을 하나 처리하고 오후에는 사람과 조율하는 일을 배치하면 흐름이 좋습니다.`
                ], ['행운 행동: 아침 정리 10분', '주의 행동: 피곤한 상태의 즉흥 약속'])
            ]
        };
    }

    displayResults(data) {
        const lang = document.documentElement.lang || 'ko';
        const firstCategory = data.categories[0];
        this.resultsContainer.innerHTML = `
            <div class="result-card wide fortune-intro">
                <h3>${lang === 'ko' ? '정밀 사주풀이 항목 조회' : 'Detailed Saju Reading'}</h3>
                <p>${lang === 'ko' ? '출생 정보' : 'Birth info'}: ${data.birthLabel}</p>
                <p class="fortune-guide">${lang === 'ko' ? '아래 항목을 누르면 사주 전문가가 풀어주듯 필요한 풀이를 하나씩 확인할 수 있습니다.' : 'Select a topic below to view each reading.'}</p>
            </div>
            <div class="fortune-query-tabs">
                ${data.categories.map((category, index) => `
                    <button type="button" class="fortune-query-btn ${index === 0 ? 'active' : ''}" data-section="${category.id}">
                        <span>${category.title}</span>
                        <small>${lang === 'ko' ? '조회' : 'View'}</small>
                    </button>
                `).join('')}
            </div>
            <div id="fortune-detail-panel" class="result-card wide fortune-detail-panel">
                ${this.renderCategory(firstCategory)}
            </div>
        `;
        this.resultsContainer.querySelectorAll('.fortune-query-btn').forEach(button => {
            button.addEventListener('click', () => this.showSection(button.dataset.section));
        });
        this.resultsContainer.classList.remove('hidden');
        this.resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }

    showSection(sectionId) {
        if (!this.currentReport) return;
        const category = this.currentReport.categories.find(item => item.id === sectionId);
        if (!category) return;
        this.resultsContainer.querySelectorAll('.fortune-query-btn').forEach(button => {
            button.classList.toggle('active', button.dataset.section === sectionId);
        });
        const panel = document.getElementById('fortune-detail-panel');
        panel.innerHTML = this.renderCategory(category);
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    renderCategory(category) {
        return `
            <h3>${category.title}</h3>
            <p class="fortune-summary">${category.summary}</p>
            <div class="fortune-expert-note">
                <strong>사주 전문가 해설</strong>
                <p>${this.createExpertComment(category)}</p>
            </div>
            ${category.highlights ? `<div class="fortune-highlights">${category.highlights.map(item => `<span>${item}</span>`).join('')}</div>` : ''}
            ${category.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
            <div class="fortune-deep-reading">
                ${this.createDeepReading(category).map(item => `<article><h4>${item.title}</h4><p>${item.text}</p></article>`).join('')}
            </div>
            ${category.checklist ? `<div class="fortune-checklist">${category.checklist.map(item => `<div>${item}</div>`).join('')}</div>` : ''}
        `;
    }

    createExpertComment(category) {
        const comments = {
            saju: '원국은 타고난 성향의 지도입니다. 좋은 기운과 부족한 기운을 선악으로 나누기보다, 내가 편해지는 상황과 쉽게 지치는 상황을 읽어내는 것이 핵심입니다.',
            yearly: '올해는 방향을 정하기 전에 삶의 구조를 먼저 정돈하라는 흐름입니다. 무리한 확장보다 반복 가능한 습관과 관계를 만들면 운이 안정적으로 열립니다.',
            monthly: '한달 운세는 가까운 일정과 감정의 리듬을 보는 항목입니다. 이번 달에는 서두르기보다 일정, 돈, 관계를 차분히 정리할수록 체감 운이 좋아집니다.',
            daily: '오늘의 운세는 하루의 우선순위를 잡아주는 안내입니다. 작은 확인, 짧은 정리, 정확한 답장이 오늘의 흐름을 부드럽게 만듭니다.',
            compatibility: '궁합은 상대를 단정하는 기준이 아니라 관계의 호흡을 읽는 도구입니다. 잘 맞는 사람은 내 생활이 더 좋아지는 방향으로 자극을 줍니다.'
        };
        return comments[category.id] || `${category.title} 항목은 지금 내 삶에서 의식하면 좋은 흐름을 정리한 해설입니다. 고정된 미래가 아니라 오늘의 선택을 더 현명하게 만드는 참고점으로 활용하세요.`;
    }

    createDeepReading(category) {
        const deep = {
            saju: [
                { title: '기질의 뿌리', text: '반복해서 선택하게 되는 방식과 불편함을 느끼는 상황까지 함께 볼 때 사주가 더 현실적으로 읽힙니다.' },
                { title: '균형을 잡는 법', text: '부족한 기운은 약점이 아니라 균형을 회복하는 방향입니다. 작은 습관으로 보완할수록 전체 운이 부드러워집니다.' }
            ],
            compatibility: [
                { title: '관계의 핵심', text: '궁합은 첫인상의 강렬함보다 반복되는 생활 장면에서 더 정확하게 드러납니다.' },
                { title: '좋은 궁합의 조건', text: '갈등이 없는 관계보다 갈등 뒤에 회복할 수 있는 관계가 오래 갑니다.' }
            ]
        };
        return deep[category.id] || [
            { title: '상세 해석', text: '좋은 흐름은 키우고 부담이 되는 흐름은 줄이는 방향으로 읽으면 실제 생활에 더 잘 적용됩니다.' },
            { title: '현실 적용', text: '오늘 바로 바꿀 수 있는 작은 행동 하나를 정하면 풀이가 생활의 변화로 이어집니다.' }
        ];
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
        const birthInfo = this.getBirthInfo();
        const base = birthInfo ? birthInfo.year + birthInfo.month + birthInfo.day : 1990;
        const scoreSeed = (base + typeEl.value.length * 17 + relationEl.value.length * 9) % 19;
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
