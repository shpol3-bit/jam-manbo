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
        window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: this.currentLang } }));
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
    }

    generateFortune() {
        const birthInfo = this.getBirthInfo();
        if (!birthInfo) return;
        const results = this.calculate(birthInfo);
        this.currentReport = results;
        this.displayResults(results);
    }

    populateBirthControls(keepValues = false) {
        if (!this.yearSelect || !this.monthSelect || !this.daySelect) return;

        const lang = document.documentElement.lang || 'ko';
        const currentYear = new Date().getFullYear();
        const previousValues = keepValues ? {
            year: this.yearSelect.value,
            month: this.monthSelect.value,
            day: this.daySelect.value,
            meridiem: this.meridiemSelect.value,
            hour: this.hourSelect.value,
            minute: this.minuteSelect.value
        } : {};

        this.yearSelect.innerHTML = `<option value="">${lang === 'ko' ? '연도' : 'Year'}</option>`;
        for (let year = currentYear; year >= 1920; year--) {
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

        this.yearSelect.value = previousValues.year || '1990';
        this.monthSelect.value = previousValues.month || '1';
        this.populateDays(previousValues.day || '1');
        this.meridiemSelect.value = previousValues.meridiem || 'am';
        this.hourSelect.value = previousValues.hour || '9';
        this.minuteSelect.value = previousValues.minute || '0';
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

        return { year, month, day, hour, minute, meridiem, hour12 };
    }

    calculate(birthInfo) {
        const { year, month, day, hour, minute } = birthInfo;
        const seed = day + month + (year % 100) + hour + minute;

        const lang = document.documentElement.lang || 'ko';
        const stems = [
            { ko: '갑', en: 'Gap', element: 'wood', yinYang: '양' },
            { ko: '을', en: 'Eul', element: 'wood', yinYang: '음' },
            { ko: '병', en: 'Byeong', element: 'fire', yinYang: '양' },
            { ko: '정', en: 'Jeong', element: 'fire', yinYang: '음' },
            { ko: '무', en: 'Mu', element: 'earth', yinYang: '양' },
            { ko: '기', en: 'Gi', element: 'earth', yinYang: '음' },
            { ko: '경', en: 'Gyeong', element: 'metal', yinYang: '양' },
            { ko: '신', en: 'Sin', element: 'metal', yinYang: '음' },
            { ko: '임', en: 'Im', element: 'water', yinYang: '양' },
            { ko: '계', en: 'Gye', element: 'water', yinYang: '음' }
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
            wood: lang === 'ko' ? '성장, 기획, 확장성' : 'growth, planning, expansion',
            fire: lang === 'ko' ? '표현, 추진력, 인정욕구' : 'expression, drive, recognition',
            earth: lang === 'ko' ? '안정, 책임, 조율능력' : 'stability, duty, coordination',
            metal: lang === 'ko' ? '판단, 원칙, 실행력' : 'judgment, principle, execution',
            water: lang === 'ko' ? '지혜, 유연성, 학습력' : 'wisdom, flexibility, learning'
        };
        const mod = (number, divisor) => ((number % divisor) + divisor) % divisor;

        const yearStem = stems[mod(year - 4, 10)];
        const yearBranch = branches[mod(year - 4, 12)];
        const monthStem = stems[mod(year * 12 + month + 3, 10)];
        const monthBranch = branches[mod(month + 1, 12)];
        const dayIndex = Math.floor(new Date(year, month - 1, day).getTime() / 86400000);
        const dayStem = stems[mod(dayIndex + 4, 10)];
        const dayBranch = branches[mod(dayIndex + 2, 12)];
        const hourBranchIndex = Math.floor(((hour + 1) % 24) / 2);
        const hourStem = stems[mod(dayIndex * 12 + hourBranchIndex, 10)];
        const hourBranch = branches[hourBranchIndex];

        const scores = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
        [yearStem, monthStem, dayStem, hourStem].forEach(stem => scores[stem.element] += 2);
        [yearBranch, monthBranch, dayBranch, hourBranch].forEach(branch => scores[branch.element] += 1);
        const sortedElements = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
        const mainElement = sortedElements[0];
        const supportElement = sortedElements[1];
        const weakElement = sortedElements[4];

        const pillars = [
            { key: 'year', ko: '년주', en: 'Year Pillar', stem: yearStem, branch: yearBranch },
            { key: 'month', ko: '월주', en: 'Month Pillar', stem: monthStem, branch: monthBranch },
            { key: 'day', ko: '일주', en: 'Day Pillar', stem: dayStem, branch: dayBranch },
            { key: 'hour', ko: '시주', en: 'Hour Pillar', stem: hourStem, branch: hourBranch }
        ];

        const formatPillar = pillar => `${lang === 'ko' ? pillar.stem.ko : pillar.stem.en}${lang === 'ko' ? pillar.branch.ko : pillar.branch.en}`;
        const birthLabel = lang === 'ko'
            ? `${year}년 ${month}월 ${day}일 ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
            : `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        const currentDay = now.getDate();
        const yearlyFlow = stems[mod(currentYear - 4, 10)];
        const yearlyBranch = branches[mod(currentYear - 4, 12)];
        const monthFlow = stems[mod(currentYear * 12 + currentMonth + 3, 10)];
        const monthBranchNow = branches[mod(currentMonth + 1, 12)];
        const todayIndex = Math.floor(new Date(currentYear, currentMonth - 1, currentDay).getTime() / 86400000);
        const todayFlow = stems[mod(todayIndex + 4, 10)];
        const todayBranchNow = branches[mod(todayIndex + 2, 12)];
        const strengthWord = scores[mainElement] >= 4 ? (lang === 'ko' ? '강한' : 'strong') : (lang === 'ko' ? '균형형' : 'balanced');
        const cautionElement = weakElement;

        if (lang === 'ko') {
            return {
                birthLabel,
                pillars,
                scores,
                categories: [
                    {
                        id: 'saju',
                        title: '사주 원국',
                        summary: `${formatPillar(pillars[0])}·${formatPillar(pillars[1])}·${formatPillar(pillars[2])}·${formatPillar(pillars[3])}의 흐름으로 봅니다.`,
                        highlights: [
                            `중심 기운: ${elementNames[mainElement]}`,
                            `보조 기운: ${elementNames[supportElement]}`,
                            `보완 기운: ${elementNames[weakElement]}`
                        ],
                        paragraphs: [
                            `입력한 출생 정보는 ${birthLabel}이며, 간이 만세력 기준으로 년주는 ${formatPillar(pillars[0])}, 월주는 ${formatPillar(pillars[1])}, 일주는 ${formatPillar(pillars[2])}, 시주는 ${formatPillar(pillars[3])}로 해석됩니다. 년주는 바깥 환경과 성장 배경, 월주는 사회적 역할과 생활 리듬, 일주는 나의 중심 기질, 시주는 후반부의 관심사와 내면의 방향을 보여줍니다.`,
                            `이 사주는 ${elementNames[mainElement]} 기운이 가장 강하게 드러나고, ${elementNames[supportElement]}이 보조 축을 이룹니다. 강한 기운은 장점이 가장 빨리 발현되는 통로이지만 과하면 고집, 조급함, 피로감으로 나타날 수 있습니다. 반대로 ${elementNames[weakElement]} 기운은 의식적으로 보완할 때 전체 균형이 좋아지는 지점입니다.`,
                            `일간은 ${dayStem.ko}(${elementNames[dayStem.element]})의 성향을 띠므로, 중요한 선택을 할 때 스스로 납득할 수 있는 기준을 세우는 것이 핵심입니다. 주변의 기대에 맞추기보다 내가 감당할 수 있는 속도와 방식으로 움직일 때 운의 흐름이 안정됩니다.`
                        ]
                    },
                    {
                        id: 'yearly',
                        title: `${currentYear}년 올해의 사주`,
                        summary: `${currentYear}년은 ${yearlyFlow.ko}${yearlyBranch.ko} 흐름으로, 큰 방향을 정하고 생활 구조를 다시 잡는 운입니다.`,
                        highlights: [
                            `올해 기운: ${elementNames[yearlyFlow.element]}`,
                            `나의 중심: ${elementNames[dayStem.element]}`,
                            seed % 2 === 0 ? '키워드: 정리와 축적' : '키워드: 확장과 선택'
                        ],
                        paragraphs: [
                            `${currentYear}년은 당신에게 한 번에 모든 것을 뒤집는 해라기보다, 이미 쌓아온 것 중 쓸모 있는 것과 버려야 할 것을 구분하는 해입니다. 특히 ${elementNames[yearlyFlow.element]}의 흐름이 들어오면서 생활 패턴, 인간관계, 일의 우선순위를 새로 세우게 됩니다.`,
                            `올해의 핵심은 "무엇을 더 할 것인가"보다 "무엇을 반복 가능한 시스템으로 만들 것인가"입니다. 사주 원국에서 ${elementNames[mainElement]}이 강하게 작동하므로 마음이 꽂힌 일에는 집중력이 좋지만, 모든 일을 동시에 끌고 가면 운이 분산됩니다. 올해는 목표를 세 개 이하로 줄였을 때 성과가 뚜렷해집니다.`,
                            `상반기에는 기반 정비와 관계 조율, 하반기에는 결과물 공개와 수익화 흐름이 강합니다. 특히 오래 미뤄둔 공부, 자격, 포트폴리오, 사업 정리, 생활 습관 개선은 올해 안에 형태를 만들수록 내년 운을 받아낼 그릇이 커집니다.`
                        ],
                        checklist: [
                            '올해 잘 맞는 선택: 장기 계획, 자격/학습, 고정비 정리, 업무 시스템화',
                            '올해 피해야 할 선택: 감정적 퇴사/이별/투자, 검증 없는 동업, 무리한 약속',
                            `올해 보완 행동: ${elementNames[cautionElement]} 기운을 살리는 기록, 휴식, 정보 검증`
                        ]
                    },
                    {
                        id: 'monthly',
                        title: `${currentMonth}월 한달 운세`,
                        summary: `이번 달은 ${monthFlow.ko}${monthBranchNow.ko} 기운이 들어와 실행보다 조율의 질이 중요합니다.`,
                        highlights: [
                            `이번 달 운: ${elementNames[monthFlow.element]}`,
                            currentMonth % 2 === 0 ? '흐름: 관계 정리' : '흐름: 기회 탐색',
                            `주의: ${elementNames[weakElement]} 부족`
                        ],
                        paragraphs: [
                            `이번 달은 눈에 보이는 성과보다 "다음 단계로 넘어가기 전에 빈틈을 메우는 운"이 강합니다. 해야 할 일이 많아 보여도 실제로는 우선순위를 조정하면 부담이 크게 줄어듭니다. 일정표, 지출표, 연락해야 할 사람 목록을 정리하는 것만으로도 운의 흐름이 안정됩니다.`,
                            `일에서는 기존 업무의 문제점을 개선하거나, 이미 진행 중인 프로젝트를 더 설득력 있게 다듬는 데 유리합니다. 새로운 시작도 가능하지만 즉흥적으로 벌이기보다 작은 테스트를 먼저 해보는 편이 좋습니다. 특히 문서, 계약, 일정, 돈의 흐름은 숫자로 남겨야 합니다.`,
                            `관계에서는 서운함이 누적된 사람과의 대화가 필요할 수 있습니다. 단, 이번 달에는 감정의 옳고 그름을 따지기보다 앞으로 어떤 방식으로 지낼지 합의하는 쪽이 훨씬 유리합니다.`
                        ],
                        checklist: [
                            '이번 달 행운 포인트: 오전 시간 활용, 책상/파일 정리, 약속 재확인',
                            '이번 달 조심할 점: 급한 구매, 말로만 정한 약속, 과한 야근',
                            '월말 전 점검: 고정비, 건강 루틴, 중요한 연락 3개'
                        ]
                    },
                    {
                        id: 'daily',
                        title: '오늘 하루 운세',
                        summary: `오늘은 ${todayFlow.ko}${todayBranchNow.ko} 기운으로 작고 정확한 선택이 운을 살립니다.`,
                        highlights: [
                            `오늘 기운: ${elementNames[todayFlow.element]}`,
                            seed % 3 === 0 ? '좋은 시간: 오전' : seed % 3 === 1 ? '좋은 시간: 오후' : '좋은 시간: 저녁',
                            '핵심: 속도보다 정확도'
                        ],
                        paragraphs: [
                            `오늘은 큰 결정을 밀어붙이기보다, 이미 정해진 일을 정확하게 처리할수록 길합니다. 특히 연락, 결제, 예약, 제출, 회의처럼 작은 실수가 커질 수 있는 영역을 먼저 확인하세요. 운이 좋은 날일수록 기본을 놓치지 않는 태도가 성과를 크게 만듭니다.`,
                            `몸의 리듬은 오전에 비교적 맑고, 오후에는 주변 요청이 늘어날 수 있습니다. 누군가의 부탁을 모두 받아주기보다 지금 처리할 일과 나중에 답할 일을 분리하면 피로가 줄어듭니다. 오늘은 "바로 답장"보다 "정확한 답장"이 더 좋은 운을 부릅니다.`,
                            `오늘의 행운 행동은 짧은 정리입니다. 지갑, 휴대폰 사진, 메모장, 책상 위 물건 중 하나만 비워도 머릿속이 정돈되고 판단이 빨라집니다.`
                        ],
                        checklist: [
                            '오늘 하면 좋은 일: 밀린 답장, 일정 확인, 짧은 산책',
                            '오늘 미루면 좋은 일: 충동구매, 감정적 통보, 무리한 약속',
                            `오늘의 보완 기운: ${elementNames[weakElement]}`
                        ]
                    },
                    {
                        id: 'loveToday',
                        title: '오늘의 연애운',
                        summary: seed % 2 === 0 ? '말보다 태도가 더 크게 전달되는 날입니다.' : '가벼운 대화에서 호감의 실마리가 생기는 날입니다.',
                        highlights: [
                            seed % 2 === 0 ? '연애 키워드: 배려' : '연애 키워드: 표현',
                            '좋은 방식: 짧고 따뜻하게',
                            '주의: 떠보기 금지'
                        ],
                        paragraphs: [
                            seed % 2 === 0
                                ? '오늘은 거창한 고백이나 긴 설명보다, 상대가 신경 쓰고 있던 작은 부분을 알아차리는 태도가 더 강하게 작용합니다. 연인이 있다면 상대의 피로를 덜어주는 말 한마디가 관계 온도를 올립니다.'
                                : '오늘은 가볍게 안부를 묻거나 취향을 공유하는 대화에서 호감이 열립니다. 싱글이라면 너무 완벽한 타이밍을 기다리기보다 부담 없는 메시지 하나가 흐름을 바꿀 수 있습니다.',
                            `당신의 사주는 관계에서 신뢰가 쌓일수록 깊어지는 구조입니다. 그래서 오늘의 연애운도 단번에 불꽃이 튀는 방식보다, 상대가 "이 사람은 말과 행동이 맞다"고 느낄 때 좋아집니다.`,
                            `주의할 점은 상대의 반응을 시험하려는 말입니다. 장난처럼 던진 말도 오늘은 의외로 깊게 받아들여질 수 있으니, 원하는 것이 있으면 돌려 말하지 말고 부드럽게 직접 표현하는 편이 좋습니다.`
                        ],
                        checklist: [
                            '커플: 고마웠던 점 하나를 구체적으로 말하기',
                            '싱글: 취향이나 근황을 묻는 짧은 연락',
                            '금지: 질투 유발, 읽씹 테스트, 과거 이야기 반복'
                        ]
                    },
                    {
                        id: 'loveMonth',
                        title: '이번 달 연애운',
                        summary: '관계의 속도보다 안정감과 반복되는 배려가 중요한 달입니다.',
                        highlights: [
                            currentMonth % 2 === 0 ? '관계 정돈' : '새 인연 탐색',
                            '매력 포인트: 진정성',
                            '주의: 과해석'
                        ],
                        paragraphs: [
                            `이번 달 연애운은 빠른 진전보다 신뢰 확인에 초점이 있습니다. 상대가 어떤 말을 하는지보다 약속을 어떻게 지키는지, 바쁠 때 어떤 태도를 보이는지를 보면 관계의 방향이 보입니다.`,
                            `커플이라면 생활 리듬을 맞추는 대화가 필요합니다. 데이트 횟수, 연락 빈도, 돈 쓰는 방식처럼 현실적인 부분을 편하게 이야기하면 오히려 관계가 안정됩니다. 싱글이라면 지인 모임, 취미 활동, 공부 모임처럼 반복해서 만나는 자리에서 인연운이 열립니다.`,
                            `이번 달에는 감정의 기복을 상대의 문제로만 돌리지 않는 것이 중요합니다. 내 컨디션이 무너지면 관계 판단도 흔들리므로, 잠과 식사 리듬을 먼저 챙길수록 연애운도 함께 좋아집니다.`
                        ],
                        checklist: [
                            '이번 달 좋은 만남: 차분하고 약속을 지키는 사람',
                            '피해야 할 흐름: 빠른 확신 요구, 비교, SNS 과몰입',
                            '관계운 상승 행동: 취향 공유, 산책 데이트, 솔직한 일정 공유'
                        ]
                    },
                    {
                        id: 'moneyMonth',
                        title: '이번 달 금전운',
                        summary: seed % 2 === 0 ? '새로 벌기보다 새는 돈을 막으면 좋아지는 달입니다.' : '작은 부수입과 제안이 들어올 수 있는 달입니다.',
                        highlights: [
                            seed % 2 === 0 ? '재물 흐름: 방어' : '재물 흐름: 기회',
                            '핵심: 숫자 확인',
                            '주의: 감정 소비'
                        ],
                        paragraphs: [
                            seed % 2 === 0
                                ? '이번 달은 공격적으로 돈을 불리기보다 지출 구조를 다듬는 것이 우선입니다. 구독, 보험, 통신비, 식비처럼 반복 지출을 점검하면 예상보다 큰 여유가 생깁니다.'
                                : '이번 달은 작은 제안, 부업, 중고거래, 프로젝트성 수익처럼 예상 밖의 돈 흐름이 생길 수 있습니다. 다만 기회가 들어올수록 조건 확인이 중요합니다.',
                            `사주상 ${elementNames[weakElement]}이 약한 부분은 금전 판단에서 빈틈이 되기 쉽습니다. 특히 "지금 아니면 안 된다"는 식의 제안은 하루 이상 시간을 두고 검토하세요. 좋은 기회는 검토 시간을 줘도 사라지지 않습니다.`,
                            `금전운을 올리는 실천은 수입보다 기록입니다. 이번 달에는 하루 지출을 세 줄만 기록해도 소비 패턴이 드러나고, 다음 달 운을 받을 기반이 생깁니다.`
                        ],
                        checklist: [
                            '좋은 선택: 자동이체 정리, 계약서 확인, 목적별 통장 분리',
                            '주의 선택: 즉흥 투자, 체면 지출, 남의 말만 믿는 구매',
                            '행운 습관: 결제 전 10분 멈춤'
                        ]
                    },
                    {
                        id: 'personality',
                        title: '성향과 강점',
                        summary: `${elementTone[mainElement]}이 성격의 중심축입니다.`,
                        highlights: [
                            `${strengthWord} ${elementNames[mainElement]} 타입`,
                            `일간: ${dayStem.ko}`,
                            `보완: ${elementNames[weakElement]}`
                        ],
                        paragraphs: [
                            `${elementNames[mainElement]}이 강한 사람은 ${elementTone[mainElement]}이 뚜렷합니다. 첫인상보다 시간이 지날수록 실력이 드러나는 편이며, 본인이 책임진 영역에서는 쉽게 손을 놓지 않습니다. 그래서 단기적인 칭찬보다 장기적으로 신뢰가 쌓이는 환경에서 더 큰 힘을 발휘합니다.`,
                            `${elementNames[supportElement]}이 보조하기 때문에 생각만 하고 멈추기보다 실제 행동으로 옮기는 힘도 함께 있습니다. 다만 결정이 빨라질수록 감정의 잔여물을 놓치기 쉬우므로, 중요한 대화에서는 결론보다 과정 설명을 먼저 해주는 것이 좋습니다.`,
                            `약한 ${elementNames[weakElement]} 기운은 삶의 균형을 잡는 힌트입니다. 이 기운을 보완하려면 낯선 사람, 새로운 장소, 다른 방식의 공부처럼 평소 회피하던 영역을 조금씩 경험하는 것이 좋습니다. 운을 바꾸는 가장 현실적인 방법은 큰 사건을 기다리는 것이 아니라 매일의 선택 패턴을 조정하는 데 있습니다.`
                        ]
                    },
                    {
                        id: 'career',
                        title: '일과 재능',
                        summary: '성과가 나는 방식과 피해야 할 업무 리듬을 봅니다.',
                        highlights: [
                            '강점: 구조화',
                            '성과 방식: 반복 개선',
                            '주의: 과책임'
                        ],
                        paragraphs: [
                            `이 사주는 혼자 몰입하는 시간과 사람 사이에서 조율하는 시간이 모두 필요합니다. 월주의 ${formatPillar(pillars[1])} 흐름은 사회적 역할에서 책임감이 커지는 구조를 보여주며, 맡은 일을 체계화하거나 흩어진 문제를 정리할 때 능력이 잘 드러납니다.`,
                            `잘 맞는 업무 방식은 기준을 세우고, 우선순위를 정하고, 결과물을 눈에 보이게 만드는 일입니다. 기획, 운영, 분석, 교육, 상담, 콘텐츠, 관리 업무처럼 경험이 쌓일수록 깊이가 생기는 분야에서 안정적인 성취가 가능합니다.`,
                            `주의할 점은 모든 문제를 혼자 떠안는 습관입니다. 책임감이 강한 사주는 일을 잘해서 일이 더 몰리는 패턴이 생기기 쉽습니다. 역할 범위를 문서화하고, 거절해야 할 일과 위임할 일을 구분하면 커리어 운이 훨씬 부드럽게 풀립니다.`
                        ]
                    },
                    {
                        id: 'careerYear',
                        title: '올해의 일·커리어운',
                        summary: '올해는 실력을 드러내기보다 실력이 드러날 구조를 만드는 운입니다.',
                        highlights: [
                            '좋은 전략: 포트폴리오화',
                            '좋은 관계: 실무형 조력자',
                            '주의: 무리한 확장'
                        ],
                        paragraphs: [
                            `올해 커리어운은 갑자기 직함이 바뀌는 운보다, 주변에서 당신을 어떤 역할로 인식하는지가 바뀌는 운입니다. 잘하는 일을 반복해서 보여주고, 결과물을 문서나 사례로 남길수록 기회가 늘어납니다.`,
                            `상반기에는 기반을 다지고, 하반기에는 사람 앞에 내놓는 흐름이 좋습니다. 이직, 승진, 프로젝트 확장, 창업 준비가 있다면 감정적 결정보다 자료 정리와 비교표 작성이 먼저입니다.`,
                            `사주 원국의 ${elementNames[mainElement]} 성향 때문에 한 번 책임을 맡으면 깊게 파고드는 장점이 있습니다. 다만 올해는 완벽주의보다 공개 후 개선하는 방식이 더 유리합니다.`
                        ],
                        checklist: [
                            '올해 커리어 과제: 대표 성과 3개 정리',
                            '좋은 협업: 역할과 마감이 명확한 팀',
                            '피할 흐름: 책임만 늘고 권한은 없는 제안'
                        ]
                    },
                    {
                        id: 'health',
                        title: '건강·컨디션운',
                        summary: '몸의 신호를 늦게 알아차리기 쉬워 루틴 관리가 중요합니다.',
                        highlights: [
                            '관리 포인트: 수면',
                            '주의 포인트: 누적 피로',
                            `보완 기운: ${elementNames[weakElement]}`
                        ],
                        paragraphs: [
                            `이 사주는 정신적으로 버티는 힘이 있는 편이라 피곤해도 계속 밀고 가는 경향이 있습니다. 문제는 몸이 보내는 신호를 늦게 알아차릴 수 있다는 점입니다. 피로가 쌓이면 판단이 예민해지고, 관계나 돈 문제도 실제보다 크게 느껴질 수 있습니다.`,
                            `이번 달 컨디션 관리는 거창한 운동보다 반복 가능한 기본 루틴이 좋습니다. 같은 시간에 자고 일어나기, 물 마시기, 짧은 산책, 스마트폰을 내려놓는 시간을 만드는 것이 운의 흐름에도 도움이 됩니다.`,
                            `특히 ${elementNames[weakElement]} 기운을 보완하는 활동이 필요합니다. 부족한 기운은 사주에서 약점이라기보다 균형을 회복하는 통로입니다. 몸이 편해지면 올해의 기회도 더 안정적으로 받아낼 수 있습니다.`
                        ],
                        checklist: [
                            '이번 주 실천: 잠드는 시간 30분 앞당기기',
                            '주의: 피곤할 때 큰돈 결정 금지',
                            '회복 행동: 정리, 가벼운 스트레칭, 따뜻한 식사'
                        ]
                    },
                    {
                        id: 'compatibility',
                        title: '궁합·잘 맞는 사람',
                        summary: '나를 재촉하기보다 리듬을 존중하는 사람과 오래 갑니다.',
                        highlights: [
                            `잘 맞는 기운: ${elementNames[supportElement]}`,
                            '관계 핵심: 신뢰',
                            '주의: 말보다 행동'
                        ],
                        paragraphs: [
                            `당신에게 잘 맞는 사람은 감정 표현만 화려한 사람보다 생활에서 신뢰를 보여주는 사람입니다. 약속을 지키고, 바쁠 때도 최소한의 설명을 해주며, 관계를 경쟁처럼 만들지 않는 사람이 좋습니다.`,
                            `${elementNames[supportElement]} 기운이 있는 사람은 당신의 장점을 자연스럽게 살려줍니다. 함께 있을 때 생각이 정리되고, 무리하지 않아도 대화가 이어지는 느낌이 있다면 좋은 궁합으로 볼 수 있습니다.`,
                            `반대로 매번 급하게 확답을 요구하거나, 불안을 자극해 관계를 끌고 가는 사람과는 피로가 커집니다. 당신은 관계가 안정될수록 매력이 깊어지는 타입이므로, 초반의 강렬함보다 장기적인 편안함을 기준으로 보는 것이 좋습니다.`
                        ],
                        checklist: [
                            '좋은 신호: 말과 행동이 일치함',
                            '주의 신호: 감정 기복으로 관계를 조종함',
                            '궁합 질문: 이 사람과 있으면 내 생활이 좋아지는가'
                        ]
                    },
                    {
                        id: 'lucky',
                        title: '행운 포인트와 주의일',
                        summary: '행운은 큰 사건보다 반복되는 작은 선택에서 강해집니다.',
                        highlights: [
                            `행운 색감: ${mainElement === 'wood' ? '초록' : mainElement === 'fire' ? '붉은색' : mainElement === 'earth' ? '노란색' : mainElement === 'metal' ? '흰색' : '검정/남색'}`,
                            `좋은 방향: ${seed % 4 === 0 ? '동쪽' : seed % 4 === 1 ? '남쪽' : seed % 4 === 2 ? '서쪽' : '북쪽'}`,
                            `주의일: 매월 ${((day + 7) % 28) + 1}일 전후`
                        ],
                        paragraphs: [
                            `행운 포인트는 당신의 강한 기운을 더 강하게 만드는 것보다 부족한 기운을 부드럽게 보완하는 데 있습니다. 그래서 행운 색상이나 방향도 절대적인 규칙이라기보다, 마음가짐을 바꾸는 장치로 활용하는 것이 좋습니다.`,
                            `매월 ${((day + 7) % 28) + 1}일 전후에는 피로와 감정 반응이 커질 수 있으니 큰 결정보다 점검에 쓰세요. 반대로 매월 ${((day + 15) % 28) + 1}일 전후에는 정리한 것을 실행으로 옮기기 좋습니다.`,
                            `중요한 날에는 오전에 가장 어려운 일을 하나 처리하고, 오후에는 사람과 조율하는 일을 배치하면 흐름이 좋습니다. 운은 일정표를 어떻게 짜느냐에 따라 체감이 크게 달라집니다.`
                        ],
                        checklist: [
                            '행운 행동: 아침 정리 10분',
                            '행운 물건: 자주 쓰는 도구 하나를 깨끗하게 관리',
                            '주의 행동: 피곤한 상태의 즉흥 약속'
                        ]
                    },
                    {
                        id: 'wealth',
                        title: '금전운',
                        summary: seed % 2 === 0 ? '축적형 재물운이 강합니다.' : '변동형 수익 기회가 들어옵니다.',
                        highlights: [
                            seed % 2 === 0 ? '타입: 축적형' : '타입: 기회형',
                            '핵심: 기록',
                            '주의: 검증 없는 투자'
                        ],
                        paragraphs: [
                            seed % 2 === 0
                                ? '금전 흐름은 한 번에 크게 들어오기보다 꾸준히 쌓이는 축적형에 가깝습니다. 고정 수입, 반복 매출, 장기 저축, 안정적인 투자 원칙이 잘 맞고, 빠른 수익을 좇을수록 판단 피로가 커질 수 있습니다.'
                                : '금전 흐름은 새로운 제안, 부업, 프로젝트성 수익처럼 변동성이 있는 형태와 인연이 있습니다. 다만 들어오는 속도만큼 나가는 속도도 빨라질 수 있으므로 수익이 생긴 즉시 목적별로 분리해두는 습관이 필요합니다.',
                            `${elementNames[weakElement]}이 약한 구조라 금전 판단에서 빠지기 쉬운 부분은 정보 검증입니다. 남의 말, 분위기, 급한 제안에 바로 반응하기보다 숫자와 조건을 다시 확인해야 합니다. 특히 계약, 대출, 투자성 지출은 하루를 넘겨 재검토하는 편이 안전합니다.`,
                            `재물운을 키우는 핵심은 돈을 벌 방법보다 돈이 새는 구멍을 먼저 찾는 것입니다. 월별 고정비, 감정 소비, 체면 지출을 줄이면 같은 수입에서도 체감 운이 크게 좋아집니다.`
                        ]
                    },
                    {
                        id: 'romance',
                        title: '연애와 인간관계',
                        summary: '신뢰가 쌓일수록 깊어지는 관계운입니다.',
                        highlights: [
                            '관계 타입: 신뢰형',
                            '매력: 책임감',
                            '주의: 혼자 결론내기'
                        ],
                        paragraphs: [
                            `관계에서는 가볍게 시작해도 마음이 열리면 오래 책임지려는 성향이 강합니다. 상대가 내 진심을 알아주지 않는다고 느끼면 말수가 줄거나 혼자 정리해버릴 수 있으므로, 서운함을 결론처럼 말하기보다 현재 감정과 원하는 행동을 구체적으로 표현하는 것이 좋습니다.`,
                            `잘 맞는 사람은 속도를 존중하고 약속을 가볍게 여기지 않는 사람입니다. 화려한 이벤트보다 일상의 안정감, 반복되는 배려, 생활 습관의 조화가 관계 만족도를 크게 좌우합니다.`,
                            `인간관계에서는 모든 사람에게 좋은 사람이 되려는 부담을 내려놓아야 합니다. 가까운 사람과 적당한 거리를 유지하는 사람을 구분하면 관계 피로가 줄고, 정말 중요한 인연에 더 깊게 집중할 수 있습니다.`
                        ]
                    },
                    {
                        id: 'today',
                        title: '오늘의 운세',
                        summary: seed % 3 === 0 ? '정리와 결정에 유리한 날입니다.' : seed % 3 === 1 ? '사람을 통해 기회가 열리는 날입니다.' : '속도보다 균형이 중요한 날입니다.',
                        paragraphs: [
                            seed % 3 === 0
                                ? '오늘은 미뤄둔 일을 정리하고 기준을 다시 세우기에 좋습니다. 특히 일정, 돈, 약속처럼 흐트러져 있던 부분을 바로잡으면 다음 기회가 들어올 자리가 생깁니다.'
                                : seed % 3 === 1
                                    ? '오늘은 혼자 해결하려던 문제에 사람의 도움이 들어올 수 있습니다. 짧은 연락, 회의, 우연한 대화에서 실마리가 생기므로 너무 닫힌 태도보다 질문을 던지는 태도가 유리합니다.'
                                    : '오늘은 무리하게 밀어붙이기보다 몸과 마음의 속도를 맞추는 것이 중요합니다. 해야 할 일을 줄이는 것이 게으름이 아니라 결과의 질을 높이는 선택이 될 수 있습니다.',
                            `행운을 끌어올리는 행동은 ${elementNames[weakElement]} 기운을 보완하는 일입니다. 정리, 산책, 기록, 물 마시기, 조용한 대화처럼 단순하지만 반복 가능한 행동을 하나 정해 실천해보세요.`,
                            `주의할 점은 감정이 올라온 상태에서 바로 결정하는 것입니다. 오늘의 판단은 잠깐 멈춘 뒤 다시 보면 더 정확해집니다.`
                        ]
                    }
                ]
            };
        }

        return {
            birthLabel,
            pillars,
            scores,
            categories: [
                {
                    id: 'saju',
                    title: 'Birth Chart',
                    summary: `Read through ${formatPillar(pillars[0])}, ${formatPillar(pillars[1])}, ${formatPillar(pillars[2])}, and ${formatPillar(pillars[3])}.`,
                    paragraphs: [
                        `Your birth data is ${birthLabel}. In this simplified Saju reading, the year pillar is ${formatPillar(pillars[0])}, the month pillar is ${formatPillar(pillars[1])}, the day pillar is ${formatPillar(pillars[2])}, and the hour pillar is ${formatPillar(pillars[3])}.`,
                        `The strongest element is ${elementNames[mainElement]}, supported by ${elementNames[supportElement]}. Your weaker balancing element is ${elementNames[weakElement]}, so consciously building that quality helps stabilize the whole chart.`,
                        `The day stem, ${dayStem.en}, points to the way you make core choices. You do best when your decisions match a standard you can personally accept.`
                    ]
                },
                {
                    id: 'personality',
                    title: 'Personality',
                    summary: `${elementTone[mainElement]} shapes your main temperament.`,
                    paragraphs: [
                        `A strong ${elementNames[mainElement]} pattern emphasizes ${elementTone[mainElement]}. Your strengths show more clearly over time than at first glance.`,
                        `${elementNames[supportElement]} adds practical momentum, helping you turn ideas into visible results.`,
                        `To balance weaker ${elementNames[weakElement]}, intentionally try unfamiliar routines, people, places, or study topics.`
                    ]
                },
                {
                    id: 'career',
                    title: 'Career',
                    summary: 'This section reads your best working rhythm.',
                    paragraphs: [
                        `The month pillar ${formatPillar(pillars[1])} suggests strong responsibility in social roles. You are effective when organizing scattered problems and making standards clear.`,
                        `Planning, operations, analysis, education, counseling, content, and management can suit this chart because depth grows through repeated experience.`,
                        `Avoid taking on every problem alone. Clear role boundaries and delegation will improve your career flow.`
                    ]
                },
                {
                    id: 'wealth',
                    title: 'Wealth',
                    summary: seed % 2 === 0 ? 'Your wealth pattern favors accumulation.' : 'Your money pattern includes variable opportunities.',
                    paragraphs: [
                        seed % 2 === 0
                            ? 'Your money flow is closer to steady accumulation than sudden windfalls. Stable income, recurring revenue, savings, and disciplined investing fit well.'
                            : 'Your money flow can come through new proposals, side projects, or project-based income. Separate income by purpose as soon as it arrives.',
                        `Because ${elementNames[weakElement]} is weaker, verification matters. Review contracts, loans, and investment-like expenses after a pause.`,
                        `The best way to strengthen wealth luck is to find leaks first: fixed costs, emotional spending, and status purchases.`
                    ]
                },
                {
                    id: 'romance',
                    title: 'Relationships',
                    summary: 'Trust grows gradually and deeply.',
                    paragraphs: [
                        `You may start lightly, but once committed you tend to act with responsibility. Say what you feel and what you need before silently withdrawing.`,
                        `The best match respects your pace and treats promises seriously. Daily stability matters more than dramatic gestures.`,
                        `Separate close relationships from casual ones. This reduces fatigue and lets you invest in people who matter.`
                    ]
                },
                {
                    id: 'today',
                    title: 'Today',
                    summary: seed % 3 === 0 ? 'A good day for decisions and cleanup.' : seed % 3 === 1 ? 'Opportunities may come through people.' : 'Balance matters more than speed.',
                    paragraphs: [
                        seed % 3 === 0
                            ? 'Today favors clearing overdue tasks and resetting standards around schedules, money, or commitments.'
                            : seed % 3 === 1
                                ? 'A conversation, message, or meeting can reveal a practical clue today. Ask good questions.'
                                : 'Do not force speed today. Reducing the task list can improve the quality of your results.',
                        `Strengthen your weaker ${elementNames[weakElement]} through one simple repeatable action.`,
                        `Avoid making decisions while emotionally charged. A short pause will improve accuracy.`
                    ]
                }
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
                <p class="fortune-guide">${lang === 'ko' ? '아래 항목을 눌러 필요한 풀이를 하나씩 조회하세요.' : 'Select a topic below to view each reading one by one.'}</p>
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
            ${category.highlights ? `
                <div class="fortune-highlights">
                    ${category.highlights.map(item => `<span>${item}</span>`).join('')}
                </div>
            ` : ''}
            ${category.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
            ${category.checklist ? `
                <div class="fortune-checklist">
                    ${category.checklist.map(item => `<div>${item}</div>`).join('')}
                </div>
            ` : ''}
        `;
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
                <p>${lang === 'ko' ? '넓은 바다 앞에 섰을 때 가장 마음이 가는 장면을 고르세요. 선택은 현재의 일 처리 방식과 관계에서 안정감을 얻는 방식을 보여줍니다.' : 'Choose the ocean scene you feel drawn to. The choice reflects your current work rhythm and emotional safety style.'}</p>
                <div class="choice-grid">
                    <div class="choice-item" onclick="psycheTest.showResult('ocean', 1)">
                        <div class="choice-img picture-scene ocean-calm">
                            <span class="sun"></span><span class="water"></span><span class="shore"></span><span class="path-line"></span>
                        </div>
                        <p>${lang === 'ko' ? '햇빛이 비치는 잔잔한 해변' : 'A calm beach under warm light'}</p>
                    </div>
                    <div class="choice-item" onclick="psycheTest.showResult('ocean', 2)">
                        <div class="choice-img picture-scene ocean-cliff">
                            <span class="moon"></span><span class="water"></span><span class="cliff"></span><span class="path-line"></span>
                        </div>
                        <p>${lang === 'ko' ? '절벽 위 바람 부는 산책로' : 'A windy cliffside trail'}</p>
                    </div>
                    <div class="choice-item" onclick="psycheTest.showResult('ocean', 3)">
                        <div class="choice-img picture-scene ocean-harbor">
                            <span class="sun"></span><span class="water"></span><span class="boat"></span><span class="dock"></span>
                        </div>
                        <p>${lang === 'ko' ? '작은 배가 묶인 조용한 항구' : 'A quiet harbor with a small boat'}</p>
                    </div>
                </div>
            `;
        } else {
            this.content.innerHTML = `
                <h3>${lang === 'ko' ? '숲의 선택' : 'Forest Selection'}</h3>
                <p>${lang === 'ko' ? '숲으로 들어갔을 때 가장 먼저 머물고 싶은 곳을 고르세요. 선택은 스트레스를 다루는 방식과 내면의 욕구를 보여줍니다.' : 'Choose where you would stop first in the forest. The choice reflects your stress pattern and inner needs.'}</p>
                <div class="choice-grid">
                    <div class="choice-item" onclick="psycheTest.showResult('forest', 1)">
                        <div class="choice-img picture-scene forest-tree">
                            <span class="canopy"></span><span class="trunk"></span><span class="ground"></span><span class="path-line"></span>
                        </div>
                        <p>${lang === 'ko' ? '하늘을 찌를 듯한 고목' : 'Towering ancient trees'}</p>
                    </div>
                    <div class="choice-item" onclick="psycheTest.showResult('forest', 2)">
                        <div class="choice-img picture-scene forest-pond">
                            <span class="water"></span><span class="reed"></span><span class="stone"></span><span class="glow"></span>
                        </div>
                        <p>${lang === 'ko' ? '반짝이는 작은 연못' : 'A sparkling small pond'}</p>
                    </div>
                    <div class="choice-item" onclick="psycheTest.showResult('forest', 3)">
                        <div class="choice-img picture-scene forest-cabin">
                            <span class="cabin"></span><span class="roof"></span><span class="window"></span><span class="ground"></span>
                        </div>
                        <p>${lang === 'ko' ? '불빛이 켜진 작은 오두막' : 'A small cabin with warm light'}</p>
                    </div>
                </div>
            `;
        }
    }
    showResult(type, choice) {
        const lang = document.documentElement.lang || 'ko';
        const results = {
            ocean: lang === 'ko' ? [
                "잔잔한 해변을 고른 당신은 감정의 안전감과 예측 가능한 리듬을 중요하게 여깁니다. 일을 할 때도 갑작스러운 변화보다 계획과 합의가 있을 때 실력이 잘 드러납니다. 관계에서는 다정하지만 쉽게 마음을 열지는 않으며, 상대가 반복적으로 신뢰를 보여줄 때 깊어집니다. 지금 필요한 것은 더 큰 자극이 아니라 회복 가능한 생활 리듬입니다.",
                "절벽 위 산책로를 고른 당신은 긴장감 속에서도 방향을 찾는 도전형입니다. 남들이 안정만 볼 때 가능성을 보고, 어려운 상황에서 오히려 집중력이 살아납니다. 다만 늘 강해 보여야 한다는 압박 때문에 피로를 숨기기 쉽습니다. 지금은 도전할 일과 쉬어야 할 일을 구분해야 성취가 오래 갑니다.",
                "조용한 항구를 고른 당신은 사람과 일 사이의 균형을 조율하는 타입입니다. 완전히 혼자 있기보다 믿을 수 있는 소수와 연결되어 있을 때 마음이 안정됩니다. 새로운 기회가 와도 바로 뛰어들기보다 출발 준비가 되었는지 확인하는 편입니다. 지금의 키워드는 정박과 출항 사이의 타이밍입니다."
            ] : [
                "You value emotional safety and a predictable rhythm. Your strengths show when plans and expectations are clear.",
                "You are challenge-oriented and focused under pressure, but you need to separate ambition from exhaustion.",
                "You balance independence and connection. Your timing improves when you prepare before departure."
            ],
            forest: lang === 'ko' ? [
                "고목을 고른 당신은 책임감과 지속성을 중요하게 여깁니다. 쉽게 흔들리지 않는 기준이 있고, 주변 사람들은 당신의 묵직한 태도에서 안정감을 느낍니다. 다만 오래 버티는 능력이 강한 만큼 도움을 요청하는 시점이 늦어질 수 있습니다. 지금 필요한 것은 더 버티는 힘이 아니라 부담을 나누는 기술입니다.",
                "연못을 고른 당신은 감수성과 직관이 발달한 타입입니다. 말로 설명되지 않는 분위기나 상대의 감정을 빨리 알아차립니다. 그래서 좋은 환경에서는 창의력이 살아나지만, 복잡한 관계 안에서는 쉽게 지칠 수 있습니다. 지금은 감정을 해석하기 전에 몸의 피로부터 돌보는 것이 중요합니다.",
                "오두막을 고른 당신은 따뜻한 소속감과 사적인 안정 공간을 필요로 합니다. 겉으로는 괜찮아 보여도 마음속으로는 안전하게 쉴 수 있는 사람과 장소를 찾고 있습니다. 관계에서는 깊고 진실한 대화를 원하며, 일에서는 내 이름이 붙는 결과물을 만들 때 만족감이 큽니다. 지금 필요한 것은 나를 회복시키는 고정된 루틴입니다."
            ] : [
                "You value responsibility and endurance, but you need to share burdens earlier.",
                "You are intuitive and sensitive to atmosphere; protect your energy before overinterpreting emotions.",
                "You need warmth, privacy, and a place to recover. Meaningful work matters more than noise."
            ]
        };
        this.content.innerHTML = `
            <h3>${lang === 'ko' ? '당신의 분석 결과' : 'Your Analysis Result'}</h3>
            <p class="test-result-text">${results[type][choice - 1]}</p>
            <button onclick="psycheTest.modal.classList.add('hidden')" style="margin-top:20px;">${lang === 'ko' ? '닫기' : 'Close'}</button>
        `;
    }
}

class MBTIManager {
    constructor() {
        this.grid = document.getElementById('mbti-type-grid');
        this.detail = document.getElementById('mbti-detail');
        this.types = this.createTypes();
        this.init();
    }

    init() {
        if (!this.grid || !this.detail) return;
        this.grid.innerHTML = Object.keys(this.types).map((type, index) => `
            <button type="button" class="mbti-type-btn ${index === 0 ? 'active' : ''}" data-mbti="${type}">
                <strong>${type}</strong>
                <span>${this.types[type].name}</span>
            </button>
        `).join('');
        this.grid.querySelectorAll('.mbti-type-btn').forEach(button => {
            button.addEventListener('click', () => this.show(button.dataset.mbti));
        });
        this.show('INTJ');
    }

    show(type) {
        const data = this.types[type];
        if (!data) return;
        this.grid.querySelectorAll('.mbti-type-btn').forEach(button => {
            button.classList.toggle('active', button.dataset.mbti === type);
        });
        this.detail.innerHTML = `
            <div class="mbti-detail-head">
                <div>
                    <span class="mbti-code">${type}</span>
                    <h3>${data.name}</h3>
                </div>
                <p>${data.summary}</p>
            </div>
            <div class="mbti-info-grid">
                ${this.renderBlock('핵심 성향', data.traits)}
                ${this.renderBlock('성격과 강점', data.strengths)}
                ${this.renderBlock('주의할 점', data.cautions)}
                ${this.renderBlock('연애 스타일', data.love)}
                ${this.renderBlock('잘 맞는 궁합', data.best)}
                ${this.renderBlock('조심할 궁합', data.challenge)}
                ${this.renderBlock('일·커리어 방식', data.work)}
                ${this.renderBlock('성장 팁', data.growth)}
            </div>
        `;
        this.detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    renderBlock(title, text) {
        return `
            <article class="mbti-info-card">
                <h4>${title}</h4>
                <p>${text}</p>
            </article>
        `;
    }

    createTypes() {
        return {
            INTJ: {
                name: '전략가',
                summary: '큰 그림을 먼저 보고 장기 전략을 세우는 독립형 사고가 강한 유형입니다.',
                traits: '혼자 깊게 생각하는 시간이 필요하고, 감정보다 구조와 논리를 먼저 봅니다. 목표가 명확하면 놀라울 만큼 오래 집중합니다.',
                strengths: '복잡한 문제를 단순한 체계로 바꾸는 능력이 좋습니다. 남들이 놓친 위험과 가능성을 미리 계산하는 편입니다.',
                cautions: '기준이 높아 타인의 속도를 답답하게 느낄 수 있습니다. 설명 없이 결론만 말하면 차갑게 보일 수 있습니다.',
                love: '가볍게 시작하기보다 신뢰와 지적 대화가 쌓여야 마음을 엽니다. 사생활과 독립성을 존중받을 때 오래 갑니다.',
                best: 'ENFP, ENTP처럼 아이디어를 넓혀주고 감정 표현을 자연스럽게 돕는 유형과 보완이 좋습니다.',
                challenge: 'ESFJ, ISFJ처럼 즉각적인 정서 교류를 중시하는 유형과는 표현 방식 조율이 필요합니다.',
                work: '전략, 기획, 분석, 개발, 연구, 시스템 설계처럼 장기 설계가 필요한 일에 강합니다.',
                growth: '생각한 결론을 공유하기 전에 과정과 이유를 함께 말하면 설득력이 크게 올라갑니다.'
            },
            INTP: {
                name: '논리술사',
                summary: '개념과 원리를 파고들며 세상을 이해하려는 탐구형 유형입니다.',
                traits: '정답보다 원리를 알고 싶어 하고, 익숙한 규칙도 논리적으로 맞지 않으면 쉽게 받아들이지 않습니다.',
                strengths: '새로운 관점, 문제 분석, 가설 세우기에 강합니다. 복잡한 지식을 연결해 독창적인 설명을 만듭니다.',
                cautions: '생각이 많아 실행이 늦어질 수 있습니다. 감정적 대화에서 너무 분석적으로 반응하면 거리감이 생깁니다.',
                love: '친구처럼 편한 대화와 지적 호기심이 중요합니다. 지나친 통제보다 자유로운 관계에서 애정이 깊어집니다.',
                best: 'ENTJ, ENFJ처럼 방향성과 실행력을 더해주는 유형과 시너지가 좋습니다.',
                challenge: 'ESFP, ESFJ처럼 즉흥성과 관계 표현이 강한 유형과는 생활 리듬 차이가 날 수 있습니다.',
                work: '연구, 데이터, 개발, 설계, 글쓰기, 분석 업무처럼 깊이 파고드는 일이 잘 맞습니다.',
                growth: '완벽한 답을 기다리기보다 70% 상태에서 작게 실행하면 기회가 빨라집니다.'
            },
            ENTJ: {
                name: '통솔자',
                summary: '목표를 세우고 사람과 자원을 움직여 결과를 만드는 추진형 유형입니다.',
                traits: '효율, 성과, 방향성을 중요하게 봅니다. 애매한 상황에서도 결정을 내리고 앞으로 나아가려 합니다.',
                strengths: '리더십, 판단력, 실행 계획 수립이 강합니다. 큰 프로젝트를 단계별로 나눠 밀어붙입니다.',
                cautions: '상대의 감정 속도를 놓치면 독단적으로 보일 수 있습니다. 쉬는 시간을 비효율로 여기지 않는 연습이 필요합니다.',
                love: '존중과 성장 욕구가 중요합니다. 함께 목표를 세우고 서로를 발전시키는 관계에서 만족도가 높습니다.',
                best: 'INFP, INTP처럼 깊은 내면과 분석력을 가진 유형이 균형을 만들어줍니다.',
                challenge: 'ISFP, ISFJ처럼 조용히 감정을 쌓는 유형과는 말투와 압박감 조절이 필요합니다.',
                work: '경영, 기획, 영업 전략, 프로젝트 리딩, 창업, 조직 운영에 강합니다.',
                growth: '빠른 결론 전에 상대가 받아들일 시간을 주면 리더십이 더 단단해집니다.'
            },
            ENTP: {
                name: '변론가',
                summary: '가능성을 발견하고 기존 방식을 뒤집는 아이디어형 유형입니다.',
                traits: '새로운 주제와 토론을 좋아하고, 고정된 답보다 다양한 가능성을 탐색합니다.',
                strengths: '순발력, 설득력, 창의적 문제 해결이 뛰어납니다. 위기에서도 대안을 빠르게 찾습니다.',
                cautions: '흥미가 떨어지면 마무리가 약해질 수 있습니다. 장난스러운 반박이 상대에게 공격처럼 느껴질 수 있습니다.',
                love: '재미있는 대화와 자유로운 분위기가 중요합니다. 지루함보다 함께 성장하는 자극을 원합니다.',
                best: 'INFJ, INTJ처럼 깊이와 방향성을 가진 유형과 좋은 시너지가 납니다.',
                challenge: 'ISFJ, ESFJ처럼 안정과 예측을 중시하는 유형과는 즉흥성 조율이 필요합니다.',
                work: '마케팅, 기획, 창업, 컨설팅, 콘텐츠, 세일즈처럼 변화와 설득이 있는 일이 잘 맞습니다.',
                growth: '아이디어를 결과로 남기는 마감 구조를 만들면 재능이 더 크게 인정받습니다.'
            },
            INFJ: {
                name: '옹호자',
                summary: '사람의 내면을 깊게 읽고 의미 있는 방향을 찾는 통찰형 유형입니다.',
                traits: '조용하지만 신념이 강하고, 관계의 분위기와 숨은 감정을 민감하게 읽습니다.',
                strengths: '상담, 글쓰기, 비전 제시, 사람의 가능성을 보는 능력이 좋습니다.',
                cautions: '혼자 너무 많이 해석하고 지칠 수 있습니다. 완벽한 이해를 기대하면 관계가 무거워질 수 있습니다.',
                love: '깊고 진정성 있는 관계를 원합니다. 가벼운 말보다 일관된 태도와 정서적 안전감이 중요합니다.',
                best: 'ENTP, ENFP처럼 시야를 넓혀주고 표현을 끌어내는 유형과 잘 맞습니다.',
                challenge: 'ESTP, ESTJ처럼 빠른 행동 중심 유형과는 속도 차이를 조율해야 합니다.',
                work: '상담, 교육, 브랜딩, 글쓰기, 기획, 사회적 가치가 있는 일에 강합니다.',
                growth: '상대의 감정을 모두 책임지지 않는 선 긋기가 필요합니다.'
            },
            INFP: {
                name: '중재자',
                summary: '가치와 진정성을 중시하며 자기만의 세계가 깊은 감성형 유형입니다.',
                traits: '겉으로는 부드럽지만 내면의 기준은 분명합니다. 의미 없는 경쟁보다 진심이 담긴 일을 원합니다.',
                strengths: '공감, 창작, 언어 표현, 가치 중심의 선택에 강합니다. 사람의 상처와 가능성을 잘 알아봅니다.',
                cautions: '현실 조건을 미루면 좋은 의도도 흐려질 수 있습니다. 거절을 어려워해 에너지가 새기 쉽습니다.',
                love: '진심 어린 대화, 작은 배려, 감정의 안전감이 중요합니다. 속도를 강요받으면 마음이 닫힙니다.',
                best: 'ENFJ, ENTJ처럼 방향성과 보호감을 주는 유형과 보완이 좋습니다.',
                challenge: 'ESTJ, ESTP처럼 직설적이고 빠른 유형과는 감정 표현 방식 차이가 큽니다.',
                work: '글쓰기, 디자인, 상담, 교육, 예술, 브랜드 스토리, 커뮤니티에 잘 맞습니다.',
                growth: '감정의 진정성과 현실적 마감선을 함께 세우면 결과물이 강해집니다.'
            },
            ENFJ: {
                name: '선도자',
                summary: '사람을 연결하고 성장시키는 데 강한 관계 리더형 유형입니다.',
                traits: '분위기를 읽고 사람을 챙기는 능력이 좋습니다. 함께 나아갈 방향을 제시하려는 힘이 있습니다.',
                strengths: '소통, 코칭, 조직 문화, 발표, 관계 조율에 강합니다.',
                cautions: '모두를 책임지려 하면 쉽게 지칩니다. 인정 욕구 때문에 자신의 필요를 뒤로 미룰 수 있습니다.',
                love: '표현과 확인이 중요합니다. 상대와 미래를 이야기하고 함께 성장하는 관계에서 안정감을 느낍니다.',
                best: 'INFP, INTP처럼 깊은 내면이나 분석력을 가진 유형과 균형이 좋습니다.',
                challenge: 'ISTP, INTJ처럼 표현이 적은 유형과는 애정 확인 방식 조율이 필요합니다.',
                work: '교육, HR, 상담, 마케팅, 리더십, 커뮤니티 운영, 대외 커뮤니케이션에 강합니다.',
                growth: '도와주기 전에 상대가 원하는 도움인지 확인하면 관계 피로가 줄어듭니다.'
            },
            ENFP: {
                name: '활동가',
                summary: '가능성과 사람의 매력을 발견하는 자유로운 영감형 유형입니다.',
                traits: '호기심이 많고 감정 표현이 풍부합니다. 새로운 사람과 아이디어에서 에너지를 얻습니다.',
                strengths: '창의력, 분위기 전환, 설득, 관계 확장, 콘텐츠 아이디어에 강합니다.',
                cautions: '시작은 빠르지만 반복 유지가 어려울 수 있습니다. 감정이 올라오면 판단이 흔들립니다.',
                love: '재미, 진심, 자유가 모두 필요합니다. 나를 제한하기보다 응원해주는 사람에게 깊게 끌립니다.',
                best: 'INTJ, INFJ처럼 방향성과 깊이를 가진 유형이 좋은 중심을 잡아줍니다.',
                challenge: 'ISTJ, ESTJ처럼 규칙과 계획을 중시하는 유형과는 생활 방식 조율이 필요합니다.',
                work: '콘텐츠, 마케팅, 교육, 창업, 기획, 커뮤니티, 퍼스널 브랜딩에 잘 맞습니다.',
                growth: '좋아하는 일을 오래 가게 만들 작은 루틴이 필요합니다.'
            },
            ISTJ: {
                name: '현실주의자',
                summary: '책임감과 절차를 중시하며 안정적으로 결과를 쌓는 유형입니다.',
                traits: '검증된 방식, 약속, 정확성을 중요하게 생각합니다. 말보다 행동으로 신뢰를 보여줍니다.',
                strengths: '성실함, 기록, 관리, 품질 유지, 리스크 점검에 강합니다.',
                cautions: '변화가 빠른 상황에서 융통성이 부족해 보일 수 있습니다. 감정 표현이 적어 오해를 살 수 있습니다.',
                love: '가벼운 표현보다 꾸준한 책임과 신뢰를 중시합니다. 안정적인 생활 리듬이 관계 만족도를 높입니다.',
                best: 'ESFP, ESTP처럼 활력과 유연함을 주는 유형과 보완이 좋습니다.',
                challenge: 'ENFP, ENTP처럼 즉흥성이 강한 유형과는 계획 수준을 조율해야 합니다.',
                work: '회계, 행정, 운영, 품질관리, 법무, 데이터 관리처럼 정확성이 중요한 일에 강합니다.',
                growth: '예외 상황을 실패가 아니라 업데이트로 받아들이면 적응력이 커집니다.'
            },
            ISFJ: {
                name: '수호자',
                summary: '세심한 배려와 책임감으로 주변을 안정시키는 유형입니다.',
                traits: '사람의 필요를 잘 알아차리고, 조용히 챙기는 방식으로 애정을 표현합니다.',
                strengths: '돌봄, 기억력, 실무 지원, 관계 유지, 섬세한 관리에 강합니다.',
                cautions: '싫어도 참고 넘기다 한 번에 지칠 수 있습니다. 자신의 욕구를 뒤로 미루기 쉽습니다.',
                love: '안정감, 예의, 꾸준한 연락을 중요하게 여깁니다. 말보다 행동의 성실함에 끌립니다.',
                best: 'ESFP, ESTP처럼 활기를 주고 현재를 즐기게 해주는 유형과 잘 맞습니다.',
                challenge: 'ENTP, INTJ처럼 직설적이거나 논리 중심인 유형과는 정서 확인이 필요합니다.',
                work: '간호, 교육, 행정, 고객관리, 운영지원, 회계 보조처럼 꼼꼼함이 필요한 일에 강합니다.',
                growth: '부탁을 거절해도 관계가 끝나지 않는다는 경험을 쌓아야 합니다.'
            },
            ESTJ: {
                name: '경영자',
                summary: '현실적인 기준과 조직력을 바탕으로 일을 완성하는 관리형 유형입니다.',
                traits: '분명한 규칙, 책임, 성과를 중요하게 봅니다. 애매한 상황을 정리하려는 힘이 강합니다.',
                strengths: '운영, 리더십, 일정관리, 실행 통제, 의사결정에 강합니다.',
                cautions: '상대의 감정이나 사정을 비효율로 볼 수 있습니다. 지나친 지적은 관계를 경직시킵니다.',
                love: '믿음직한 태도와 현실적인 미래 계획을 중요하게 생각합니다. 약속을 지키는 사람이 좋습니다.',
                best: 'ISFP, INFP처럼 부드러움과 감수성을 더해주는 유형과 보완이 됩니다.',
                challenge: 'ENFP, INTP처럼 자유와 탐색을 중시하는 유형과는 통제감 조율이 필요합니다.',
                work: '관리, 영업관리, 공공기관, 운영, 재무, 현장 리딩, 조직 시스템화에 강합니다.',
                growth: '정답을 알려주기보다 선택지를 함께 정리하면 리더십이 부드러워집니다.'
            },
            ESFJ: {
                name: '집정관',
                summary: '사람 사이의 조화와 소속감을 중요하게 여기는 관계 중심 유형입니다.',
                traits: '분위기와 예의를 잘 챙기고, 주변 사람이 편안한지 민감하게 살핍니다.',
                strengths: '관계 관리, 행사 운영, 서비스, 협업, 실무 조율에 강합니다.',
                cautions: '타인의 평가에 흔들릴 수 있습니다. 모두에게 좋은 사람이 되려다 지칩니다.',
                love: '자주 표현하고 함께 시간을 보내는 관계에서 안정감을 느낍니다. 무심함에는 쉽게 상처받습니다.',
                best: 'ISFP, ISTP처럼 차분함과 현실 감각을 주는 유형과 균형이 좋습니다.',
                challenge: 'INTP, INTJ처럼 표현이 적고 독립적인 유형과는 애정 언어가 다를 수 있습니다.',
                work: '서비스, 교육, 인사, 운영, 고객관리, 커뮤니티, 행사 기획에 잘 맞습니다.',
                growth: '인정받기 위해 무리하기보다 내 기준의 만족을 먼저 확인해야 합니다.'
            },
            ISTP: {
                name: '장인',
                summary: '문제를 직접 다루고 해결하는 실용적 관찰형 유형입니다.',
                traits: '말보다 행동이 빠르고, 필요한 순간에 집중력이 살아납니다. 자유와 독립성을 중요하게 여깁니다.',
                strengths: '위기 대응, 도구 활용, 분석적 관찰, 실전 문제 해결에 강합니다.',
                cautions: '감정 설명을 귀찮아하면 가까운 사람이 소외감을 느낄 수 있습니다. 지루함을 못 견디는 편입니다.',
                love: '간섭이 적고 편안한 관계를 선호합니다. 말보다 함께 무언가를 하는 시간이 애정 표현입니다.',
                best: 'ESFJ, ESTJ처럼 관계와 구조를 보완해주는 유형과 균형이 좋습니다.',
                challenge: 'ENFJ, INFJ처럼 감정 공유를 깊게 원하는 유형과는 표현 연습이 필요합니다.',
                work: '기술, 엔지니어링, 스포츠, 정비, 데이터, 보안, 실전형 문제 해결에 강합니다.',
                growth: '혼자 해결하기 전에 최소한의 상황 공유를 하면 신뢰가 높아집니다.'
            },
            ISFP: {
                name: '모험가',
                summary: '감각과 감정을 섬세하게 느끼며 자기만의 아름다움을 추구하는 유형입니다.',
                traits: '조용하지만 취향과 가치가 분명합니다. 압박보다 자연스러운 흐름에서 능력이 나옵니다.',
                strengths: '미감, 공감, 세심함, 현장 감각, 조용한 실행력이 좋습니다.',
                cautions: '갈등을 피하다가 속마음이 쌓일 수 있습니다. 즉흥적 소비나 결정에 흔들릴 때가 있습니다.',
                love: '말보다 분위기와 행동의 진심을 봅니다. 편안하고 강요 없는 관계에서 마음을 엽니다.',
                best: 'ESTJ, ESFJ처럼 현실적 안정과 추진력을 주는 유형과 보완이 됩니다.',
                challenge: 'ENTJ, ESTJ와는 속도와 지시 방식 조율이 필요합니다.',
                work: '디자인, 예술, 뷰티, 돌봄, 동물, 현장 실무, 감각 기반 콘텐츠에 잘 맞습니다.',
                growth: '싫은 것을 조용히 참기보다 작은 불편부터 말하는 연습이 필요합니다.'
            },
            ESTP: {
                name: '사업가',
                summary: '현장 감각과 순발력으로 기회를 잡는 행동형 유형입니다.',
                traits: '지금 눈앞의 기회와 경험을 중시합니다. 빠르게 움직이고 직접 부딪히며 배웁니다.',
                strengths: '협상, 위기 대응, 영업, 운동감각, 실전 실행력이 뛰어납니다.',
                cautions: '장기 계획이나 반복 관리가 약해질 수 있습니다. 말이 직설적이면 상대가 상처받을 수 있습니다.',
                love: '함께 즐기고 움직이는 관계를 좋아합니다. 지나친 구속보다 신뢰 기반의 자유가 필요합니다.',
                best: 'ISFJ, ISTJ처럼 안정과 꾸준함을 주는 유형과 보완이 좋습니다.',
                challenge: 'INFJ, INFP처럼 깊은 의미와 감정 대화를 중시하는 유형과는 속도 차이가 납니다.',
                work: '영업, 창업, 스포츠, 이벤트, 현장관리, 협상, 퍼포먼스 중심 업무에 강합니다.',
                growth: '기회를 잡은 뒤 유지하는 루틴을 만들면 성과가 오래 갑니다.'
            },
            ESFP: {
                name: '연예인',
                summary: '사람과 분위기에 활력을 불어넣는 현재 중심의 표현형 유형입니다.',
                traits: '감정 표현이 자연스럽고, 사람들과 함께할 때 에너지가 살아납니다. 경험을 통해 배우는 편입니다.',
                strengths: '친화력, 분위기 전환, 감각, 표현력, 현장 대응에 강합니다.',
                cautions: '즉흥성이 커지면 중요한 일을 미룰 수 있습니다. 외부 반응에 기분이 크게 흔들릴 수 있습니다.',
                love: '즐거움, 애정 표현, 함께하는 시간이 중요합니다. 무뚝뚝하고 반응 없는 관계는 지치기 쉽습니다.',
                best: 'ISTJ, ISFJ처럼 안정과 책임감을 주는 유형과 균형이 좋습니다.',
                challenge: 'INTJ, INTP처럼 표현이 적은 유형과는 온도 차이를 느낄 수 있습니다.',
                work: '엔터테인먼트, 서비스, 판매, 교육, 행사, 콘텐츠, 뷰티, 현장 커뮤니케이션에 잘 맞습니다.',
                growth: '즐거운 목표를 작게 쪼개 일정에 넣으면 꾸준함이 생깁니다.'
            }
        };
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
const mbtiManager = new MBTIManager();

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
